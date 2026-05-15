import { estimateMarkdownTokens } from './tokens';

export const AEO_VERSION = '1.0';

/** Headers for markdown twin responses (Dualmark / acceptmarkdown conventions). */
export function markdownTwinHeaders(
  body: string,
  options: { cacheControl?: string } = {}
): Headers {
  const headers = new Headers({
    'Content-Type': 'text/markdown; charset=utf-8',
    'X-Markdown-Tokens': String(estimateMarkdownTokens(body)),
    'X-Robots-Tag': 'noindex',
    'X-AEO-Version': AEO_VERSION,
    Vary: 'Accept',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': options.cacheControl ?? 'max-age=0, s-maxage=3600'
  });
  return headers;
}

/** Append discovery + caching headers on HTML responses that have a markdown twin. */
export function appendHtmlAeoHeaders(headers: Headers, markdownTwinUrl: string): void {
  headers.set('Vary', 'Accept');
  headers.append('Link', `<${markdownTwinUrl}>; rel="alternate"; type="text/markdown"`);
}
