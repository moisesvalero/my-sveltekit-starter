import type { Handle } from '@sveltejs/kit';
import { dev, building } from '$app/environment';

const ONE_YEAR_IN_SECONDS = 31536000;
const TWO_YEARS_IN_SECONDS = 63072000;

export const handle: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme') || 'light';

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%theme%', theme)
  });

  if (!building) {
    // Content-Security-Policy (CSP) — la defensa mas importante
    response.headers.set(
      'Content-Security-Policy',
      [
        "default-src 'self'",
        "script-src 'self' 'wasm-unsafe-eval' 'sha256-4aglIzZWlffciY1YNkapYz3E2oa2PTFFx4WcfBdaB6o='",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "img-src 'self' data: https:",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self' https:",
        "frame-src 'self' https://*.typebot.io",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ].join('; ')
    );

    // HSTS — fuerza HTTPS (solo en produccion, no en dev)
    if (!dev) {
      response.headers.set(
        'Strict-Transport-Security',
        `max-age=${TWO_YEARS_IN_SECONDS}; includeSubDomains; preload`
      );
    }

    // Anti-clickjacking
    response.headers.set('X-Frame-Options', 'DENY');

    // Anti-MIME sniffing
    response.headers.set('X-Content-Type-Options', 'nosniff');

    // Control de referrer
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Permissions-Policy — bloquea APIs que no usas
    response.headers.set(
      'Permissions-Policy',
      [
        'camera=()',
        'microphone=()',
        'geolocation=()',
        'payment=()',
        'usb=()',
        'bluetooth=()',
        'magnetometer=()',
        'gyroscope=()',
        'accelerometer=()',
        'autoplay=(self)',
        'fullscreen=(self)'
      ].join(', ')
    );

    // Cross-Origin isolation headers
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');

    // DNS prefetch control
    response.headers.set('X-DNS-Prefetch-Control', 'on');

    // Remover header que revela tecnologia del servidor
    response.headers.set('X-Powered-By', '');

    // Cache control para assets estaticos
    const url = event.url.pathname;
    if (url.match(/\.(js|css|svg|png|jpg|jpeg|gif|ico|woff2?)$/)) {
      response.headers.set('Cache-Control', `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`);
    }
  }

  return response;
};
