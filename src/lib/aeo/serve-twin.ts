import type { RequestEvent } from '@sveltejs/kit';
import { resolveRequestLocale } from '$lib/i18n/site-locale';
import { markdownTwinHeaders } from './headers';
import { getPageMarkdown } from './registry';
import { htmlPathFromMdUrl, normalizePathname } from './paths';

/** Serve a markdown twin for the given pathname (HTML or `.md` URL). */
export function serveMarkdownTwin(event: RequestEvent, pathname?: string): Response {
  const path = normalizePathname(pathname ?? event.url.pathname);
  const htmlPath = htmlPathFromMdUrl(path) ?? path;
  const locale = resolveRequestLocale(event);
  const body = getPageMarkdown(htmlPath, locale);

  if (!body) {
    return new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain' } });
  }

  return new Response(body, { headers: markdownTwinHeaders(body) });
}
