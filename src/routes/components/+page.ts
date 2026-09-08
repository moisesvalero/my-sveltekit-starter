import { defaultLocale, tFor } from '$lib/site-pages';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
  const parentData = await parent();
  const locale = (parentData?.locale ?? defaultLocale) as 'es' | 'en';
  const now = new Date();

  return {
    serverTime: now.toISOString(),
    serverFactKey: 'compiler' as const,
    magicNumber: 42,
    seo: {
      title: tFor(locale, 'componentsPage.seo.title', 'Componentes UI'),
      description: tFor(locale, 'componentsPage.seo.description', 'Catálogo de componentes UI'),
      ogTitle: tFor(locale, 'componentsPage.seo.title', 'Componentes UI'),
      ogDescription: tFor(locale, 'componentsPage.seo.description', 'Catálogo de componentes UI'),
      schemaType: 'CollectionPage' as const,
      headline: tFor(locale, 'componentsPage.title', 'Componentes'),
      locale
    }
  };
};
