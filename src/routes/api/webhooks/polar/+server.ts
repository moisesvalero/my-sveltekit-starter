import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { addCredits } from '$lib/server/payments/credits';

export const POST: RequestHandler = async ({ request }) => {
  const secret = process.env.POLAR_WEBHOOK_SECRET;
  if (!secret) {
    return json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature =
    request.headers.get('webhook-signature') || request.headers.get('polar-webhook-signature');

  if (!signature) {
    return json({ error: 'Missing signature header' }, { status: 400 });
  }

  try {
    const payload = JSON.parse(rawBody);
    const eventType = payload.type;

    if (eventType === 'order.created' || eventType === 'checkout.updated') {
      const metadata = payload.data?.metadata || {};
      const userId = metadata.userId;
      const creditsGranted = Number(metadata.credits || 0);

      if (userId && creditsGranted > 0) {
        await addCredits({
          userId,
          amount: creditsGranted,
          description: `Polar order: ${payload.data?.id || 'checkout'}`,
          type: 'PURCHASE',
          metadata: { orderId: payload.data?.id }
        });
      }
    }

    return json({ received: true });
  } catch (error) {
    console.error('Polar webhook error:', error);
    return json({ error: 'Webhook handler failed' }, { status: 400 });
  }
};
