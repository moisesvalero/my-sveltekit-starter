# AGENTS.md — Instructions for AI assistants

## Project: My SvelteKit Starter

This is a **Svelte 5 + SvelteKit 2 + TypeScript + Tailwind CSS v4** project.
It uses Svelte 5 runes (`$state`, `$props`, `$derived`, `$effect`) and shadcn-svelte.

---

## GOLDEN RULE — READ THIS FIRST

**NEVER write raw HTML if a component already exists for that.**

Before writing `<button>`, `<h1>`, `<section>`, `<div class="card">`, or similar,
check this list. If a component does the job, **use it**.

```svelte
<!-- BAD: raw HTML -->
<button class="bg-blue-500 px-4 py-2 rounded-lg">Click</button>
<h1 class="text-4xl font-bold">Title</h1>
<div class="p-6 rounded-xl border bg-card">Content</div>

<!-- GOOD: existing components -->
<Button variant="default">Click</Button>
<h1 class="text-4xl font-bold tracking-tight text-foreground">Title</h1>
<Card class="p-6">
  <CardHeader><CardTitle>Content</CardTitle></CardHeader>
  <CardContent>...</CardContent>
</Card>
```

### shadcn-svelte component catalog

| Component | Import | Key props |
|-----------|--------|-----------|
| **Button** | `$lib/components/ui/button` | `variant="default\|secondary\|outline\|ghost\|destructive\|link" size="default\|sm\|lg\|icon" href disabled` |
| **Card** | `$lib/components/ui/card` | `Card`, `CardContent`, `CardHeader`, `CardTitle`, `CardFooter`, `CardDescription`, `CardAction` |
| **Dialog** | `$lib/components/ui/dialog` | `open title onclose` |
| **Input** | `$lib/components/ui/input` | `type placeholder bind:value` |
| **Textarea** | `$lib/components/ui/textarea` | `rows placeholder bind:value` |
| **Label** | `$lib/components/ui/label` | `for` |
| **Skeleton** | `$lib/components/ui/skeleton` | `width height class` |
| **Spinner** | `$lib/components/ui/spinner` | `class="size-{n}"` |

### Project-specific components

| Component | Import | Key props |
|-----------|--------|-----------|
| **Container** | `$lib/components/ui/Container.svelte` | `as="div\|section"` |
| **Section** | `$lib/components/ui/Section.svelte` | `variant="default\|muted\|soft\|surface" id` |
| **Heading** | `$lib/components/ui/Heading.svelte` | `level={1\|2\|3\|4} eyebrow kicker align` |
| **Text** | `$lib/components/ui/Text.svelte` | `variant="body\|muted\|small\|label" align` |
| **Grid** | `$lib/components/ui/Grid.svelte` | `columns={n} gap className` |
| **HeroSection** | `$lib/components/ui/HeroSection.svelte` | `eyebrow title subtitle primaryLabel primaryHref secondaryLabel secondaryHref align` |
| **FeaturesSection** | `$lib/components/ui/FeaturesSection.svelte` | `eyebrow title subtitle items=[{icon,title,description}] id` |
| **Sonner (Toast)** | `$lib/components/ui/sonner` | `<Toaster />` in +layout.svelte |
| **CopyButton** | `$lib/components/CopyButton.svelte` | `text label` |
| **Newsletter** | `$lib/components/Newsletter.svelte` | `title subtitle action buttonLabel` |
| **AiPrompt** | `$lib/components/AiPrompt.svelte` | `placeholder message maxLength` |
| **JsonLd** | `$lib/components/JsonLd.svelte` | `type headline datePublished dateModified description author image faq[] howto[] softwareName softwareCategory` |
| **Footer** | `$lib/components/Footer.svelte` | Links; translatable copy (`layout.footer.*`) |

The **home** (`src/routes/+page.svelte`) loads copy from **i18n** (`home.*` in `es.json` / `en.json`). SEO is updated with `setSeo` inside `$effect` when the locale changes. Stitch/M3 styles: utilities in `src/lib/styles/stitch-m3.css`.

The **document title** in the layout uses **`{$seo.title}`** (store in `src/lib/seo.ts`), not a fixed i18n title string.

### Stores and utilities

```ts
import { toast } from '$lib/stores/toast';
toast('Message', 'success'); // success | error | info | warning
// Layout mounts `<Toaster />` (Sonner/shadcn) and `<ToastContainer />` for the legacy toast store.

import { mode, toggleMode } from 'mode-watcher';
// mode.current === 'dark' | 'light' | 'system', toggleMode() to toggle

import { clickOutside } from '$lib/actions/clickOutside';
// use:clickOutside={fn} → runs fn on outside click

import { t, locale, setLocale } from '$lib/i18n/index';
// {$t('key')} to translate, setLocale('es'|'en')

import { setSeo } from '$lib/seo';
// setSeo({ title, description, ogImage, ... })

import { reveal } from '$lib/reveal';
// use:reveal={{ stage: 'title'|'content', delay: 120 }}

import { cn } from '$lib/utils';
// cn('foo', 'bar') → merge classes with tailwind-merge
```

### If the component you need does NOT exist

Then create it. But:
1. Put it in `src/lib/components/ui/` if it is generic
2. Use `<script lang="ts">` with `$props()`
3. Use Tailwind for styles
4. Use `$state()`, `$derived()`, `$effect()` for state

---

## Golden rules (summary)

ALWAYS read `src/lib/site-config.ts` before changing names, links, or SEO.
ALWAYS use the components above instead of hand-written HTML.
ALWAYS translate visible strings with `$t('key')` **if the page uses i18n**.

---

## Key structure

| Folder | Purpose |
|--------|---------|
| `src/routes/` | Pages (filesystem routing) |
| `src/lib/components/ui/` | shadcn-svelte + shared UI |
| `src/lib/components/` | Project components |
| `src/lib/i18n/` | ES/EN translations |
| `src/lib/server/` | Server-only code |
| `src/app.css` | Global CSS, Tailwind v4, shadcn theme variables |
| `src/lib/styles/stitch-m3.css` | Stitch-style M3 tokens (`text-h1`, etc.) |
| `static/` | Static assets |

---

## Required Svelte 5 patterns

```svelte
<script lang="ts">
  // Typed props — Svelte 5 style
  let { title, items = [] }: { title: string; items?: string[] } = $props();

  // Local state
  let open = $state(false);

  // Derived
  const total = $derived(items.length);

  // Effect
  $effect(() => {
    console.log('open changed:', open);
  });
</script>
```

### Slots → Snippets (Svelte 5)

```svelte
<!-- BEFORE (Svelte 4) -->
<slot name="header" />

<!-- NOW (Svelte 5) -->
{@render children?.()}
```

### Props with `$props()` — NOT with generics

```svelte
<!-- BAD -->
let { title } = $props<string>();

<!-- GOOD -->
let { title }: { title: string } = $props();
```

---

## CSS

- **Tailwind CSS v4** with `@import "tailwindcss"`
- shadcn variables: `--primary`, `--primary-foreground`, `--background`, `--foreground`, `--border`, `--muted`, etc.
- Custom variables: `--accent`, `--text-main`, `--text-secondary`, `--bg-main`, `--bg-soft`
- Scoped styles per component: `<style>...</style>`

---

## SEO + GEO (Generative Engine Optimization)

La plantilla trae SEO técnico **y** GEO automatizado. El vibe coder solo escribe `setSeo({...})` en su `+page.svelte` y todo lo demás se inyecta solo desde el layout.

### `setSeo` — único punto de entrada

```ts
import { setSeo } from '$lib/seo';

setSeo({
  title: '...',
  description: '...',
  schemaType: 'WebPage',          // WebPage | Article | FAQPage | HowTo | CollectionPage | …
  keywords: ['svelte', 'starter'],
  dateModified: new Date().toISOString(),
  author: 'Tu nombre',

  // GEO: estos dos campos hacen que ChatGPT/Perplexity te citen
  faq: [{ question: '¿…?', answer: '…' }],
  howto: [{ name: 'Paso 1', text: '…' }],

  // Producto/aplicación (opcional)
  softwareName: 'Mi App',
  softwareCategory: 'BusinessApplication'
});
```

### Qué se inyecta automáticamente desde `+layout.svelte`

- `<title>`, `<meta description>`, `<meta keywords>`, `<meta author>`
- `<link rel="canonical">` calculado desde la ruta actual (no hace falta pasarlo)
- Open Graph completo (`og:title/description/url/image/type/locale`)
- Twitter Cards (`summary_large_image`)
- `hreflang` ES/EN y `x-default`
- `<link rel="alternate" type="text/plain" href="/llms.txt">`
- `<html lang>` resuelto en SSR vía cookie `portfolio_locale` + `Accept-Language`

### Qué se inyecta automáticamente desde `JsonLd.svelte`

- `Organization` con logo y `sameAs`
- `WebSite` con `SearchAction` (sitelinks searchbox)
- Schema de página (`WebPage`/`Article`/...) con `inLanguage`
- `BreadcrumbList` desde la URL
- `FAQPage` si `setSeo({ faq: [...] })`
- `HowTo` si `setSeo({ howto: [...] })`
- `SoftwareApplication` si `setSeo({ softwareName: '...' })`

### Endpoints GEO (todos dinámicos)

| Endpoint | Propósito | Genera contenido desde |
|----------|-----------|------------------------|
| `/sitemap.xml` | Índice con hreflang ES/EN | `src/lib/site-pages.ts` |
| `/robots.txt` | Permisos para crawlers IA (GPTBot, Claude, Perplexity, Gemini, CCBot…) | `src/routes/robots.txt/+server.ts` |
| `/llms.txt` | Índice Markdown estándar [llmstxt.org](https://llmstxt.org) | `site-pages.ts` + i18n |
| `/llms-full.txt` | Contenido completo del sitio en Markdown para ingesta directa por LLMs | i18n |
| `/api/og?title=…` | Open Graph SVG dinámico | parámetro `title` |

### Añadir una página nueva al GEO

1. Crea la ruta en `src/routes/...`
2. Llama a `setSeo({...})` en su `+page.svelte`
3. Añade un objeto al array `sitePages` en `src/lib/site-pages.ts`

Con eso entra en `/sitemap.xml`, `/llms.txt` y `/llms-full.txt` automáticamente.

---

## i18n

```svelte
import { t } from '$lib/i18n/index';
{$t('key.from.json')}
```

---

## Dark mode

```svelte
import { mode, toggleMode } from 'mode-watcher';
import { Moon, Sun } from 'lucide-svelte';

<Button variant="ghost" size="icon" onclick={toggleMode}>
  {#if mode.current === 'dark'} <Moon /> {:else} <Sun /> {/if}
</Button>
```

---

## Creating a new page

1. `src/routes/my-page/+page.svelte`
2. `<script lang="ts">` at the top with imports
3. `setSeo(...)` for SEO
4. If loading server data: `+page.ts` with `load()`
5. If it has a form: `+page.server.ts` with `actions`
6. `+page.svelte` must **not** use `async` — data loading belongs in `+page.ts`

---

## Creating a new component

1. Typed props with `$props()`
2. State with `$state()`, derived with `$derived()`
3. Generic → `src/lib/components/ui/`
4. Project-specific → `src/lib/components/`
5. Use Tailwind for styles; avoid custom CSS when Tailwind can do it

---

## External design → code (Stitch, Lovable, Figma HTML, etc.)

When the user brings **reference from another tool** and asks for **visual parity** with this template:

1. **Do not dump raw HTML without mapping** — map blocks to **Button, Card, Section, Heading, Grid**, etc. from the catalog above.
2. **Tokens first** — align colors and typography with `src/app.css`, M3/Stitch utilities in `src/lib/styles/stitch-m3.css`, and copy in **i18n** if the page already uses `$t()`.
3. **Ask the user** (if missing) for screenshots or exported CSS/HTML and breakpoints to respect.
4. **Finish with** `npm run check` and summarize what matched vs. what was approximated.

Detailed guide and copy-paste prompt: **`DESIGN_TO_CURSOR.md`**.

---

## shadcn-svelte CLI

```bash
npx shadcn-svelte@latest add <component>
```

Available components: button, card, dialog, skeleton, spinner, sonner, input, textarea, label, accordion, avatar, badge, calendar, checkbox, command, dropdown-menu, form, popover, progress, select, separator, sheet, slider, switch, table, tabs, toggle-group, tooltip

---

## type-only imports

When you use `Snippet` as a type, import with `import type`:

```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  let { children }: { children: Snippet } = $props();
</script>
```
