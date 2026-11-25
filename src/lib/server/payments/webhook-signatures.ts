import crypto from 'node:crypto';

const DEFAULT_TOLERANCE_SECONDS = 300;

export function verifyStripeWebhookSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string,
  toleranceSeconds = DEFAULT_TOLERANCE_SECONDS,
  nowSeconds = Math.floor(Date.now() / 1000)
): boolean {
  if (!rawBody || !signatureHeader || !secret) {
    return false;
  }

  let timestamp: number | null = null;
  const signatures: string[] = [];

  for (const part of signatureHeader.split(',')) {
    const [rawKey, ...rawValParts] = part.trim().split('=');
    const key = rawKey?.trim();
    const value = rawValParts.join('=').trim();
    if (!key || !value) continue;

    if (key === 't') {
      const parsed = Number(value);
      if (Number.isInteger(parsed) && parsed > 0) {
        timestamp = parsed;
      }
    } else if (key === 'v1') {
      signatures.push(value);
    }
  }

  if (timestamp === null || signatures.length === 0) {
    return false;
  }

  if (Math.abs(nowSeconds - timestamp) > toleranceSeconds) {
    return false;
  }

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${rawBody}`, 'utf8')
    .digest('hex');
  const expectedBuf = Buffer.from(expected, 'utf8');

  return signatures.some((sig) => {
    const sigBuf = Buffer.from(sig, 'utf8');
    if (sigBuf.length !== expectedBuf.length) {
      return false;
    }
    try {
      return crypto.timingSafeEqual(sigBuf, expectedBuf);
    } catch {
      return false;
    }
  });
}
