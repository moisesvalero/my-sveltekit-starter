import type { Handle } from '@sveltejs/kit';
import { dev, building } from '$app/environment';
import {
  appendHtmlAeoHeaders,
  getPageMarkdown,
  hasMarkdownTwin,
  htmlPathFromMdUrl,
  isNotAcceptable,
  markdownTwinHeaders,
  markdownTwinPath,
  normalizePathname,
  isAiBot,
  prefersMarkdown
} from '$lib/aeo';
import { resolveRequestLocale } from '$lib/i18n/site-locale';

const ONE_YEAR_IN_SECONDS = 31536000;
const TWO_YEARS_IN_SECONDS = 63072000;

export const handle: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme') || 'light';
  const lang = resolveRequestLocale(event);
  const accept = event.request.headers.get('accept');
  const pathname = normalizePathname(event.url.pathname);
  const mdHtmlPath = htmlPathFromMdUrl(pathname);
  const htmlPath = mdHtmlPath ?? pathname;

  const userAgent = event.request.headers.get('user-agent');
  const wantsMarkdown = mdHtmlPath || prefersMarkdown(accept) || isAiBot(userAgent);

  if (hasMarkdownTwin(htmlPath) && wantsMarkdown) {
    const locale = resolveRequestLocale(event);
    const body = getPageMarkdown(htmlPath, locale);
    if (body) {
      return new Response(body, { headers: markdownTwinHeaders(body) });
    }
  }

  if (hasMarkdownTwin(htmlPath) && isNotAcceptable(accept)) {
    return new Response('Not Acceptable', {
      status: 406,
      headers: { 'Content-Type': 'text/plain', Vary: 'Accept' }
    });
  }

  const response = await resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%theme%', theme).replace('%lang%', lang)
  });

  if (hasMarkdownTwin(htmlPath) && response.headers.get('content-type')?.includes('text/html')) {
    appendHtmlAeoHeaders(response.headers, markdownTwinPath(htmlPath));
  }

  if (!building) {
    response.headers.set(
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
      response.headers.set(
        'Strict-Transport-Security',
        `max-age=${TWO_YEARS_IN_SECONDS}; includeSubDomains; preload`
      );
    }

    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
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
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
    response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
    response.headers.set('X-DNS-Prefetch-Control', 'on');
    response.headers.set('X-Powered-By', '');

    const url = event.url.pathname;
    if (url.match(/\.(js|css|svg|png|jpg|jpeg|gif|ico|woff2?)$/)) {
      response.headers.set('Cache-Control', `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`);
    }
  }

  return response;
};
