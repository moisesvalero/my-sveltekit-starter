import type { SupportedLocale } from '$lib/site-pages';
import { buildFaqMarkdown, createTranslator } from '../shared';

export function buildComponentsMarkdown(locale: SupportedLocale, baseUrl: string): string {
  const t = createTranslator(locale);

  return `# ${t('componentsPage.seo.title')}

> ${t('componentsPage.seo.description')}

URL: ${baseUrl}/components
Idioma: ${locale.toUpperCase()}

---

## ${t('componentsPage.title')}

${t('componentsPage.kicker')}

### UI base

- **Button** — ${t('componentsPage.sections.button.desc')}
- **Card** — ${t('componentsPage.sections.card.desc')}
- **Input** — ${t('componentsPage.sections.input.desc')}
- **Textarea** — ${t('componentsPage.sections.textarea.desc')}
- **Label** — ${t('componentsPage.sections.label.desc')}
- **Spinner** — ${t('componentsPage.sections.spinner.desc')}
- **Skeleton** — ${t('componentsPage.sections.skeleton.desc')}

### Avanzados

- **CopyButton** — ${t('componentsPage.sections.copy.desc')}
- **Newsletter** — ${t('componentsPage.sections.newsletter.desc')}
- **Toast** — ${t('componentsPage.sections.toast.desc')}
- **AiPrompt** — ${t('componentsPage.sections.aiprompt.desc')}

### Ejemplos plantilla

- **About** — ${t('componentsPage.sections.aboutDemo.desc')}
- **Pricing** — ${t('componentsPage.sections.pricingDemo.desc')}
- **FAQ** — ${t('componentsPage.sections.faqDemo.desc')}

---

## Preguntas frecuentes

${buildFaqMarkdown(t)}
`;
}
