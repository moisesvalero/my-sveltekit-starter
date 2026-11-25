import crypto from 'node:crypto';

function resolveTokenSecret(secret?: string): string {
  const resolved = secret ?? process.env.BETTER_AUTH_SECRET;
  if (!resolved || resolved.length < 16) {
    throw new Error('BETTER_AUTH_SECRET must be configured to sign/verify tokens');
  }
  return resolved;
}

export function createUnsubscribeToken(email: string, secret?: string): string {
  return crypto
    .createHmac('sha256', resolveTokenSecret(secret))
    .update(email.toLowerCase().trim())
    .digest('hex');
}

export function verifyUnsubscribeToken(email: string, token: string, secret?: string): boolean {
  if (!email || !token) {
    return false;
  }

  const expected = createUnsubscribeToken(email, secret);
  if (expected.length !== token.length) {
    return false;
  }

  try {
    return crypto.timingSafeEqual(Buffer.from(token, 'utf-8'), Buffer.from(expected, 'utf-8'));
  } catch {
    return false;
  }
}
