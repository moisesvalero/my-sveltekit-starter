import { env } from '$env/dynamic/public';
import { siteConfig } from '$lib/site-config';
import { publicPages, tFor, defaultLocale } from '$lib/site-pages';

const DEFAULT_SITE_URL = 'http://localhost:5173';

/**
 * /llms-full.txt — Versión extendida del llms.txt con todo el contenido textual de la
 * plantilla en Markdown (hero, features, steps, FAQ, …) para que IAs y crawlers
 * generativos lo ingieran sin parsear HTML.
 *
 * Se construye desde i18n (ES por defecto): añadir o cambiar copy en `src/lib/i18n/es.json`
 * se refleja aquí sin tocar nada más.
 */
export const GET = () => {
  const baseUrl = (env.PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');
  const t = (key: string, fallback = '') => tFor(defaultLocale, key, fallback);

  const home = {
    title: t('home.seo.title'),
    description: t('home.seo.description'),
    heroTitle: t('home.hero.title'),
    heroSubtitle: t('home.hero.subtitle'),
    featuresTitle: t('home.features.title'),
    features: [
      ['home.features.performance.title', 'home.features.performance.desc'],
      ['home.features.types.title', 'home.features.types.desc'],
      ['home.features.dx.title', 'home.features.dx.desc'],
      ['home.features.deploy.title', 'home.features.deploy.desc'],
      ['home.features.cms.title', 'home.features.cms.desc'],
      ['home.features.product.title', 'home.features.product.desc']
    ].map(([titleKey, descKey]) => ({ title: t(titleKey), desc: t(descKey) })),
    stepsTitle: t('home.steps.title'),
    steps: [1, 2, 3, 4].map((n) => ({
      title: t(`home.steps.step${n}.title`),
      desc: t(`home.steps.step${n}.desc`)
    }))
  };

  const faqKeys = [
    'plantilla',
    'principiante',
    'comercial',
    'deploy',
    'i18n',
    'cms',
    'seo',
    'rendimiento'
  ];
  const faq = faqKeys.map((key) => ({
    q: t(`componentsPage.demos.faq.items.${key}.q`),
    a: t(`componentsPage.demos.faq.items.${key}.a`)
  }));

  const pages = publicPages();

  const body = `# ${siteConfig.name}

> ${siteConfig.tagline}

URL canónica: ${baseUrl}
Idiomas: ES (por defecto), EN
Licencia: MIT
Repositorio: ${siteConfig.social.github}

---

## Resumen del proyecto

${home.description}

**Stack técnico**

- Svelte 5 (runes: \`$state\`, \`$props\`, \`$derived\`, \`$effect\`)
- SvelteKit 2 (filesystem routing, load(), form actions)
- TypeScript 5
- Tailwind CSS v4
- UI tipo shadcn-svelte (código en el repo, no en un paquete opaco)
- mode-watcher (dark mode)
- mdsvex (blog en Markdown)
- Sanity CMS (opcional)

---

## Home — ${home.heroTitle}

${home.heroSubtitle}

### ${home.featuresTitle}

${home.features.map((f) => `- **${f.title}** — ${f.desc}`).join('\n')}

### ${home.stepsTitle}

${home.steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.desc}`).join('\n')}

---

## Preguntas frecuentes

${faq.map((item) => `### ${item.q}\n\n${item.a}`).join('\n\n')}

---

## Páginas indexables

${pages.map((p) => `- [${t(p.titleKey, p.path)}](${baseUrl}${p.path}) — ${t(p.descKey, '')}`).join('\n')}

---

## Recursos para IAs

- Índice corto (llms.txt): ${baseUrl}/llms.txt
- Sitemap XML: ${baseUrl}/sitemap.xml
- Robots: ${baseUrl}/robots.txt
- OG dinámico: ${baseUrl}/api/og?title=Texto
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
