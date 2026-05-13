import { env } from '$env/dynamic/public';
import { siteConfig } from '$lib/site-config';
import { publicPages, tFor, defaultLocale } from '$lib/site-pages';

const DEFAULT_SITE_URL = 'http://localhost:5173';

/**
 * /llms.txt — Índice GEO en el formato estándar de llmstxt.org.
 *
 * Se genera dinámicamente desde `src/lib/site-pages.ts` + i18n, así que añadir una nueva
 * ruta indexable se traduce en una entrada nueva aquí sin tocar nada más.
 *
 * Spec: https://llmstxt.org
 */
export const GET = () => {
  const baseUrl = (env.PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');
  const pages = publicPages();

  const primary = pages.filter((p) => p.group === 'primary');
  const demos = pages.filter((p) => p.group === 'demo');
  const docs = pages.filter((p) => p.group === 'docs');

  const renderList = (list: typeof pages) =>
    list
      .map((p) => {
        const title = tFor(defaultLocale, p.titleKey, p.path);
        const desc = tFor(defaultLocale, p.descKey, '');
        return `- [${title}](${baseUrl}${p.path})${desc ? `: ${desc}` : ''}`;
      })
      .join('\n');

  const body = `# ${siteConfig.name}

> ${siteConfig.tagline}

## Páginas principales

${renderList(primary)}
${
  demos.length > 0
    ? `
## Demos y ejemplos

${renderList(demos)}
`
    : ''
}${
    docs.length > 0
      ? `
## Documentación

${renderList(docs)}
`
      : ''
  }
## Recursos

- [Contenido completo en Markdown](${baseUrl}/llms-full.txt): versión extendida con todo el copy.
- [Sitemap XML](${baseUrl}/sitemap.xml): índice canónico de URLs.
- [Repositorio](${siteConfig.social.github}): código fuente y guías para humanos y para IAs.

## Idiomas

- es (por defecto)
- en
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
