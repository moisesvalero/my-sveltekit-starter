import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { addCredits } from '$lib/server/payments/credits';

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

  try {
    const payload = JSON.parse(rawBody);

    if (payload.type === 'checkout.session.completed') {
      const session = payload.data?.object;
      const userId = session?.metadata?.userId;
      const credits = Number(session?.metadata?.credits || 0);

      if (userId && credits > 0) {
        await addCredits({
          userId,
          amount: credits,
          description: `Stripe checkout session: ${session.id}`,
          type: 'PURCHASE',
          metadata: { sessionId: session.id }
        });
      }
    }

    return json({ received: true });
  } catch (error) {
    console.error('Stripe webhook processing error:', error);
    return json({ error: 'Webhook handler failed' }, { status: 400 });
  }
};
