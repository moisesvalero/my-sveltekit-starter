import crypto from 'node:crypto';
import { describe, expect, it } from 'vitest';

import { verifyStripeWebhookSignature } from '$lib/server/payments/webhook-signatures';
import { checkRateLimit, getClientIp } from './rate-limit';
import { createUnsubscribeToken, verifyUnsubscribeToken } from './tokens';

describe('security utilities in SvelteKit', () => {
  it('extracts client IP with proxy hop consideration', () => {
    const req = new Request('http://localhost', {
      headers: {
        'x-forwarded-for': '203.0.113.195, 70.41.3.18, 150.172.238.178'
      }
    });

    const ip = getClientIp(req, 1);
    expect(ip).toBe('150.172.238.178');
  });

  it('handles rate limiting properly', () => {
    const key = `test-svelte-ip-${Date.now()}`;
    const first = checkRateLimit(key, { limit: 2, windowMs: 10000 });
    expect(first.allowed).toBe(true);

    const second = checkRateLimit(key, { limit: 2, windowMs: 10000 });
    expect(second.allowed).toBe(true);

    const third = checkRateLimit(key, { limit: 2, windowMs: 10000 });
    expect(third.allowed).toBe(false);
  });

  it('creates and verifies HMAC unsubscribe tokens', () => {
    const email = 'user@example.com';
    const testSecret = 'test-secret-with-more-than-32-characters-1234';
    const token = createUnsubscribeToken(email, testSecret);

    expect(typeof token).toBe('string');
    expect(token.length).toBe(64);

    expect(verifyUnsubscribeToken(email, token, testSecret)).toBe(true);
    expect(verifyUnsubscribeToken('attacker@example.com', token, testSecret)).toBe(false);
    expect(verifyUnsubscribeToken(email, 'invalid-token', testSecret)).toBe(false);
  });

  it('rejects missing secret for unsubscribe tokens', () => {
    const prev = process.env.BETTER_AUTH_SECRET;
    delete process.env.BETTER_AUTH_SECRET;
    try {
      expect(() => createUnsubscribeToken('user@example.com')).toThrow();
    } finally {
      if (prev !== undefined) process.env.BETTER_AUTH_SECRET = prev;
    }
  });

  it('verifies Stripe webhook HMAC-SHA256 signatures and rejects tampering or replays', () => {
    const secret = 'whsec_test_secret_key_for_unit_tests';
    const body = JSON.stringify({ id: 'evt_1', type: 'checkout.session.completed' });
    const now = 1_700_000_000;
    const validSig = crypto.createHmac('sha256', secret).update(`${now}.${body}`).digest('hex');

    expect(verifyStripeWebhookSignature(body, `t=${now},v1=${validSig}`, secret, 300, now)).toBe(
      true
    );
    expect(
      verifyStripeWebhookSignature(`${body} `, `t=${now},v1=${validSig}`, secret, 300, now)
    ).toBe(false);
    expect(
      verifyStripeWebhookSignature(body, `t=${now - 400},v1=${validSig}`, secret, 300, now)
    ).toBe(false);
    expect(verifyStripeWebhookSignature(body, 't=123,v1=deadbeef', secret, 300, now)).toBe(false);
  });
});
