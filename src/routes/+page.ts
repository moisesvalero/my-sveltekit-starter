import type { PageLoad } from './$types';
import { siteConfig } from '$lib/site-config';
import { defaultLocale, tFor } from '$lib/site-pages';

export const load: PageLoad = async ({ parent }) => {
  const parentData = await parent();
  const locale = (parentData?.locale ?? defaultLocale) as 'es' | 'en';

  const title = tFor(locale, 'home.seo.title', `${siteConfig.name} | ${siteConfig.tagline}`);
  const description = tFor(locale, 'home.seo.description', siteConfig.tagline);
  const headline = tFor(locale, 'home.hero.title', siteConfig.name);

  return {
    seo: {
      title,
      description,
      ogTitle: siteConfig.name,
      ogDescription: description,
      headline,
      locale,
      schemaType: 'WebPage' as const
    }
  };
};
