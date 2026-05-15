import { env } from '$env/dynamic/public';
import { markdownTwinPath, pagesWithTwins, publicPages, supportedLocales } from '$lib/site-pages';

const DEFAULT_SITE_URL = 'http://localhost:5173';

const normalizeBaseUrl = (url: string): string => {
  try {
    const parsed = new URL(url || DEFAULT_SITE_URL);
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
};

/**
 * /sitemap.xml — generado desde el registro `publicPages()`.
 * Incluye URLs HTML y twins Markdown AEO (`.md`).
 */
export const GET = () => {
  const baseUrl = normalizeBaseUrl(env.PUBLIC_SITE_URL);
  const now = new Date().toISOString();
  const pages = publicPages();
  const twins = pagesWithTwins();

  const renderAlternates = (path: string) =>
    [
      ...supportedLocales.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}${path}" />`
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${path}" />`
    ].join('\n');

  const renderUrl = (path: string, priority: number, changefreq: string) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
${renderAlternates(path)}
  </url>`;

  const htmlUrls = pages.map((p) => renderUrl(p.path, p.priority, p.changefreq)).join('\n');

  const mdUrls = twins
    .map((p) => {
      const mdPath = markdownTwinPath(p.path);
      return renderUrl(mdPath, Math.max(0.1, p.priority - 0.1), p.changefreq);
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${htmlUrls}
${mdUrls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
