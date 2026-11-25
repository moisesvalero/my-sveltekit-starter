import { validateEvent, WebhookVerificationError } from '@polar-sh/sdk/webhooks';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { db } from '$lib/server/db/client';
import { addCredits } from '$lib/server/payments/credits';

function isPrismaUniqueError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code?: unknown }).code === 'P2002'
  );
}

export const POST: RequestHandler = async ({ request }) => {
  const secret = process.env.POLAR_WEBHOOK_SECRET;
  if (!secret) {
    return json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  const rawBody = await request.text();
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  if (!headers['webhook-signature'] && !headers['polar-webhook-signature']) {
    return json({ error: 'Missing signature header' }, { status: 400 });
  }

  let event: ReturnType<typeof validateEvent>;
  try {
    event = validateEvent(rawBody, headers, secret);
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      return json({ error: 'Invalid webhook signature' }, { status: 401 });
    }
    console.error('Polar webhook verification error:', error);
    return json({ error: 'Invalid webhook payload' }, { status: 400 });
  }

  try {
    if (event.type === 'order.created' || event.type === 'checkout.updated') {
      const data = event.data as {
        id?: string;
        amount?: number;
        totalAmount?: number;
        currency?: string;
        productId?: string;
        productPriceId?: string;
        metadata?: Record<string, unknown>;
      };
      const metadata = data?.metadata || {};
      const userId = typeof metadata.userId === 'string' ? metadata.userId : '';
      const creditsGranted = Number(metadata.credits || 0);
      const paymentIntentId = data?.id;

      if (userId && creditsGranted > 0 && paymentIntentId) {
        try {
          await db.purchase.create({
            data: {
              userId,
              provider: 'POLAR',
              paymentIntentId,
              productId: data.productId || 'polar-order',
              priceId: data.productPriceId || 'polar-price',
              amount: Number(data.totalAmount ?? data.amount ?? 0),
              currency: data.currency || 'usd',
              metadata: JSON.parse(JSON.stringify(metadata))
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
          amount: creditsGranted,
          description: `Polar order: ${paymentIntentId}`,
          type: 'PURCHASE',
          metadata: { orderId: paymentIntentId }
        });
      }
    }

    return json({ received: true });
  } catch (error) {
    console.error('Polar webhook error:', error);
    return json({ error: 'Webhook handler failed' }, { status: 500 });
  }
};
