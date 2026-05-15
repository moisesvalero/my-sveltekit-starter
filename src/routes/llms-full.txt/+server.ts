import { buildFullSiteMarkdown } from '$lib/aeo/builders/full-site';
import { defaultLocale } from '$lib/site-pages';

/**
 * /llms-full.txt — Versión extendida del llms.txt con todo el contenido textual de la
 * plantilla en Markdown (hero, features, steps, FAQ, …) para que IAs y crawlers
 * generativos lo ingieran sin parsear HTML.
 */
export const GET = () => {
  const body = buildFullSiteMarkdown(defaultLocale);

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
