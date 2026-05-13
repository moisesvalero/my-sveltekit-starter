import { env } from '$env/dynamic/public';
import { publicPages, supportedLocales } from '$lib/site-pages';

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
 *
 * Añade `xhtml:link` con `hreflang` para cada locale soportado (ES + EN comparten URL;
 * el contenido se sirve según el cookie `portfolio_locale`). Esto es el estándar de
 * Google para sitios multi-idioma en una misma ruta.
 */
export const GET = () => {
  const baseUrl = normalizeBaseUrl(env.PUBLIC_SITE_URL);
  const now = new Date().toISOString();
  const pages = publicPages();

  const renderAlternates = (path: string) =>
    [
      ...supportedLocales.map(
        (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}${path}" />`
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${path}" />`
    ].join('\n');

  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
${renderAlternates(p.path)}
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
