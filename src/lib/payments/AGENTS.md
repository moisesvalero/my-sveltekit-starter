# SvelteKit Payments Module Rules

## Architecture

- Configuration is in `$lib/payments/config.ts`.
- Server-side atomic credit ledger is in `$lib/server/payments/credits.ts`.
- Webhook routes are in `src/routes/api/webhooks/polar/+server.ts` and `stripe/+server.ts`.

## Security Prohibitions (NON-NEGOTIABLE)

- ❌ **NEVER** expose API keys (`POLAR_ACCESS_TOKEN`, `STRIPE_SECRET_KEY`) to client components.
- ❌ **NEVER** trust client-supplied credit package amounts.
- ❌ **NEVER** process webhooks without verifying signatures (`webhook-signature` or `stripe-signature`).
- ❌ **NEVER** deduct credits without atomic transactions (`db.$transaction`).
- ✅ **ALWAYS** guarantee non-negative balance validation before deduction.
