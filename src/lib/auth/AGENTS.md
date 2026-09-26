# SvelteKit Auth Module Rules

## Architecture

- Server-side authentication is handled via **Better Auth** with Prisma adapter in `$lib/server/auth.ts`.
- Client-side helpers reside in `$lib/auth-client.ts`.
- SvelteKit server-only boundary: Never import anything from `$lib/server/*` into client `.svelte` components.
- Catch-all route handler is located at `src/routes/api/auth/[...all]/+server.ts`.

## Svelte 5 Strict Runes

- ❌ **NEVER** use deprecated Svelte 4 reactivity syntax (`let:`, `export let`).
- ✅ **ALWAYS** use Svelte 5 Runes (`$state`, `$derived`, `$props`, `$effect`).

## Security Prohibitions (NON-NEGOTIABLE)

- ❌ **NEVER** expose `BETTER_AUTH_SECRET` or database credentials in client bundles.
- ❌ **NEVER** bypass session checks in form actions or API endpoints.
- ✅ **ALWAYS** inspect `event.locals.session` and `event.locals.user` in `+page.server.ts` or `+server.ts`.
- ✅ **ALWAYS** log administrative operations to `AuditLog`.
