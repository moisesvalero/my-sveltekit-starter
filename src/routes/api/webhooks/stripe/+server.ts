import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { db } from '$lib/server/db/client';
import { addCredits } from '$lib/server/payments/credits';
import { verifyStripeWebhookSignature } from '$lib/server/payments/webhook-signatures';

function isPrismaUniqueError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code?: unknown }).code === 'P2002'
  );
}

export const POST: RequestHandler = async ({ request }) => {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return json({ error: 'Stripe webhook secret not configured' }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  if (!verifyStripeWebhookSignature(rawBody, signature, secret)) {
    return json({ error: 'Invalid stripe-signature header' }, { status: 401 });
  }

  try {
    const payload = JSON.parse(rawBody);

    if (payload.type === 'checkout.session.completed') {
      const session = payload.data?.object;
      const userId = typeof session?.metadata?.userId === 'string' ? session.metadata.userId : '';
      const credits = Number(session?.metadata?.credits || 0);
      const paymentIntentId =
        typeof session?.payment_intent === 'string'
          ? session.payment_intent
          : typeof session?.id === 'string'
            ? session.id
            : '';

      if (userId && credits > 0 && paymentIntentId) {
        try {
          await db.purchase.create({
            data: {
              userId,
              provider: 'STRIPE',
              paymentIntentId,
              productId: String(session?.metadata?.productId || 'stripe-checkout'),
              priceId: String(session?.metadata?.priceId || 'stripe-price'),
              amount: Number(session?.amount_total ?? 0),
              currency: String(session?.currency || 'usd'),
              metadata: JSON.parse(JSON.stringify(session.metadata || {}))
            }
          });
        } catch (error) {
          if (isPrismaUniqueError(error)) {
            return json({ received: true, duplicate: true });
          }
          throw error;
        }

        await addCredits({
          userId,
          amount: credits,
          description: `Stripe checkout session: ${session.id}`,
          type: 'PURCHASE',
          metadata: { sessionId: session.id, paymentIntentId }
        });
      }
    }

    return json({ received: true });
  } catch (error) {
    console.error('Stripe webhook processing error:', error);
    return json({ error: 'Webhook handler failed' }, { status: 500 });
  }
};
