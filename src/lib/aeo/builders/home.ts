import { siteConfig } from '$lib/site-config';
import type { SupportedLocale } from '$lib/site-pages';
import { buildFaqMarkdown, buildHomeSections, createTranslator } from '../shared';

export function buildHomeMarkdown(locale: SupportedLocale, baseUrl: string): string {
  const t = createTranslator(locale);
  const home = buildHomeSections(t);
  const faq = buildFaqMarkdown(t);

  return `# ${home.title}

> ${home.description}

URL: ${baseUrl}/
Idioma: ${locale.toUpperCase()}

---

## ${home.heroTitle}

${home.heroSubtitle}

### ${home.featuresTitle}

${home.features.map((f) => `- **${f.title}** — ${f.desc}`).join('\n')}

### ${home.stepsTitle}

${home.steps.map((s, i) => `${i + 1}. **${s.title}** — ${s.desc}`).join('\n')}

---

## Preguntas frecuentes

${faq}

---

## ${siteConfig.name}

${siteConfig.tagline}
`;
}
