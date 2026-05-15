import type { SupportedLocale } from '$lib/site-pages';
import { tFor } from '$lib/site-pages';

export const FAQ_KEYS = [
  'plantilla',
  'principiante',
  'comercial',
  'deploy',
  'i18n',
  'cms',
  'seo',
  'rendimiento'
] as const;

export function createTranslator(locale: SupportedLocale) {
  return (key: string, fallback = '') => tFor(locale, key, fallback);
}

export function buildFaqMarkdown(t: (key: string, fallback?: string) => string): string {
  return FAQ_KEYS.map((key) => {
    const q = t(`componentsPage.demos.faq.items.${key}.q`);
    const a = t(`componentsPage.demos.faq.items.${key}.a`);
    return `### ${q}\n\n${a}`;
  }).join('\n\n');
}

export function buildHomeSections(t: (key: string, fallback?: string) => string) {
  const features = [
    ['home.features.performance.title', 'home.features.performance.desc'],
    ['home.features.types.title', 'home.features.types.desc'],
    ['home.features.dx.title', 'home.features.dx.desc'],
    ['home.features.deploy.title', 'home.features.deploy.desc'],
    ['home.features.cms.title', 'home.features.cms.desc'],
    ['home.features.product.title', 'home.features.product.desc']
  ].map(([titleKey, descKey]) => ({ title: t(titleKey), desc: t(descKey) }));

  const steps = [1, 2, 3, 4].map((n) => ({
    title: t(`home.steps.step${n}.title`),
    desc: t(`home.steps.step${n}.desc`)
  }));

  return {
    title: t('home.seo.title'),
    description: t('home.seo.description'),
    heroTitle: t('home.hero.title'),
    heroSubtitle: t('home.hero.subtitle'),
    featuresTitle: t('home.features.title'),
    features,
    stepsTitle: t('home.steps.title'),
    steps
  };
}
