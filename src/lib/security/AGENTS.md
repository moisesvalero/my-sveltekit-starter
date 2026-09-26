# SvelteKit Security Module Rules

## Architecture

- Server-side rate limiting with `TRUSTED_PROXY_HOPS` in `$lib/server/security/rate-limit.ts`.
- HMAC email unsubscribe tokens in `$lib/server/security/tokens.ts`.
- Append-only audit logger in `$lib/server/security/audit.ts`.

## Security Prohibitions (NON-NEGOTIABLE)

- ❌ **NEVER** trust spoofable raw headers without proxy validation.
- ❌ **NEVER** expose cryptographic secrets or timing attacks in token verification.
- ✅ **ALWAYS** use `crypto.timingSafeEqual` for token verification.
