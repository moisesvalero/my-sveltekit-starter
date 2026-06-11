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
import { applySecurityHeaders } from '$lib/server/security-headers';

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

  applySecurityHeaders(response.headers, {
    building,
    dev,
    pathname: event.url.pathname
  });

  return response;
};
