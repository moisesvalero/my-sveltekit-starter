const ONE_YEAR_IN_SECONDS = 31536000;
const TWO_YEARS_IN_SECONDS = 63072000;

interface SecurityHeaderOptions {
  building: boolean;
  dev: boolean;
  pathname: string;
}

export function applySecurityHeaders(
  headers: Headers,
  { building, dev, pathname }: SecurityHeaderOptions
): void {
  if (building) {
    return;
  }

  headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'",
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

  if (!dev) {
    headers.set(
      'Strict-Transport-Security',
      `max-age=${TWO_YEARS_IN_SECONDS}; includeSubDomains; preload`
    );
  }

  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set(
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
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
  headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  headers.set('X-DNS-Prefetch-Control', 'on');
  headers.delete('X-Powered-By');

  if (pathname.match(/\.(js|css|svg|png|jpg|jpeg|gif|ico|woff2?)$/)) {
    headers.set('Cache-Control', `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`);
  }
}
