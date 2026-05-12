import { env } from '$env/dynamic/public';

const DEFAULT_SITE_URL = 'http://localhost:5173';

const normalizeBaseUrl = (url: string): string => {
  try {
    const parsed = new URL(url || DEFAULT_SITE_URL);
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const GET = () => {
  const baseUrl = normalizeBaseUrl(env.PUBLIC_SITE_URL);
  const now = new Date().toISOString();

  /** Solo URLs con contenido estable; /about, /pricing, etc. redirigen a anclas aquí */
  const routes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/components', priority: '0.9', changefreq: 'monthly' }
  ];

  const urls = routes
    .map(
      (r) => `<url>
  <loc>${baseUrl}${r.path}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>${r.changefreq}</changefreq>
  <priority>${r.priority}</priority>
</url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
