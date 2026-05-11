import * as Sentry from '@sentry/sveltekit';
import { dev } from '$app/environment';
import { env } from '$env/dynamic/public';

Sentry.init({
  dsn: env.PUBLIC_SENTRY_DSN || '',
  enabled: !dev && !!env.PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1
});

export { Sentry };
