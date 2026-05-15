import { env } from '$env/dynamic/public';
import { siteConfig } from '$lib/site-config';
import { publicPages, type SupportedLocale } from '$lib/site-pages';
import { buildFaqMarkdown, buildHomeSections, createTranslator } from '../shared';

const DEFAULT_SITE_URL = 'http://localhost:5173';

export function getPublicBaseUrl(): string {
  return (env.PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');
}

/** Full-site Markdown for `/llms-full.txt`. */
export function buildFullSiteMarkdown(locale: SupportedLocale): string {
  const baseUrl = getPublicBaseUrl();
  const t = createTranslator(locale);
  const home = buildHomeSections(t);
  const faq = buildFaqMarkdown(t);
  const pages = publicPages();

  return `# ${siteConfig.name}

> ${siteConfig.tagline}

URL canónica: ${baseUrl}
Idiomas: ES, EN
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

${faq}

---

## Páginas indexables

${pages
  .map(
    (p) =>
      `- [${t(p.titleKey, p.path)}](${baseUrl}${p.path}) — ${t(p.descKey, '')} · [Markdown](${baseUrl}${p.path === '/' ? '/index.md' : `${p.path}.md`})`
  )
  .join('\n')}

---

## Recursos para IAs

- Índice corto (llms.txt): ${baseUrl}/llms.txt
- Sitemap XML: ${baseUrl}/sitemap.xml
- Robots: ${baseUrl}/robots.txt
- OG dinámico: ${baseUrl}/api/og?title=Texto
`;
}
