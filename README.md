# My SvelteKit Starter

**[Español](INICIO_RAPIDO.md)** · Quick start: [QUICK_START.md](QUICK_START.md)

[![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/moisesvalero/my-sveltekit-starter/pulls)

Starter template for modern **websites** with **SvelteKit 2 + Svelte 5 + TypeScript + Tailwind CSS v4** and **[shadcn-svelte](https://www.shadcn-svelte.com/)**-style UI (code lives in your repo, not an opaque package).
The **home** uses Material/Stitch tokens (`src/lib/styles/stitch-m3.css`), **ES/EN i18n** on the landing, and centralized **SEO** via `$seo`.

[![Live demo on Vercel](https://img.shields.io/badge/Live_demo-on_Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://my-sveltekit-starter.vercel.app/)

---

## Quick start (2 minutes)

```bash
npm install       # first time only
npm run dev       # dev server
```

Open `http://localhost:5173`. You do not need a `.env` file to get started.

Requirements: **Node.js 22+** (see `package.json` → `engines`).

---

## What’s included

### Pre-built pages
- `/` — Landing (hero, sample terminal, features, steps, CTAs; copy in `src/lib/i18n/*.json` under `home.*`)
- `/components` — UI gallery **and** template demos (about, pricing, faq, SSR with `load()`, blog, form). Content in `src/lib/components/demos/*.svelte`; SSR data in `src/routes/components/+page.ts`.
- **Shortcuts (307 redirects to anchors on `/components`)** — legacy links or bookmarks: `/about`, `/pricing`, `/faq`, `/blog`, `/blog/primer-post`, `/ssr-demo`, `/contacto` (form action in `src/routes/components/+page.server.ts`).

### UI components (shadcn-svelte + project)

**Base UI** (`src/lib/components/ui/`, shadcn-svelte pattern + **bits-ui**): Button, Card, Dialog, Input, Textarea, Label, Skeleton, Spinner, Sonner (toast).

**Project** (`src/lib/components/`): Footer, Heading, Container, Section, Grid, CopyButton, Newsletter, AiPrompt, JsonLd, CookieConsent, BlogLayout, LoadingBlock, demos under `demos/`, etc. (optional marketing blocks like Hero are not all wired on the current home).

### Infrastructure
- **SEO + GEO (automated)**: dynamic `/sitemap.xml` (with hreflang ES/EN), `/robots.txt` (AI crawlers: GPTBot, Claude, Perplexity, Google-Extended, CCBot…), `/llms.txt` + `/llms-full.txt` ([llmstxt.org](https://llmstxt.org) standard), complete Open Graph + Twitter Cards, canonical URL auto-derived, dynamic `<html lang>` via SSR cookie, and JSON-LD that ships **Organization + WebSite (SearchAction) + BreadcrumbList + FAQPage + HowTo + SoftwareApplication** out of the box. Just call `setSeo({...})` in your `+page.svelte`.
- **i18n**: ES/EN translations with store + localStorage + server cookie (SSR-aware)
- **Dark mode**: Toggle with mode-watcher, respects system preference
- **Toasts**: Sonner (`<Toaster />` in layout) + `toast()` from `$lib/stores/toast` (also `<ToastContainer />` in layout)
- **Motion**: Scroll reveal via IntersectionObserver
- **Tests**: Vitest preconfigured
- **CI/CD**: GitHub Actions (lint + check + build + test)
- **Pre-commit**: Husky + lint-staged
- **Dynamic OG image**: `/api/og?title=Text`
- **Security headers**: CSP + X-Frame-Options in `hooks.server.ts`

### Optional integrations (ready when you add keys)
- **Sanity CMS** — see [Sanity (optional)](#sanity-cms-optional)
- **Supabase** — auth + database
- **Sentry** — error tracking
- **Newsletter** — component ready for Mailchimp/Resend
- **Live Chat** — placeholder for Crisp/Intercom/Tawk

### Sanity CMS (optional)

**In this repo:** `sanity/` folder (schemas, seeds), `sanity.config.ts` / `sanity.cli.ts`, and server code under `src/lib/server/sanity/` (client with `@sanity/client`, sample GROQ queries, types). The **`sanity`** package is in **devDependencies** so you can run Studio; **`@sanity/client`** and **`@sanity/image-url`** are in dependencies for SSR on the app.

**What the template does not do by default:** no route uses GROQ out of the box. Without Sanity env vars the site still runs; when you want CMS data, call `getSanityServerClient()` from a `load` or `+page.server.ts`.

**Typical env vars** (`.env`, never commit secrets): `SANITY_PROJECT_ID`, `SANITY_DATASET`; optional `SANITY_READ_TOKEN` for drafts or private datasets. `sanity.config.ts` can also use `SANITY_STUDIO_PROJECT_ID` / `SANITY_STUDIO_DATASET` if you want Studio separate from runtime.

**Run Studio:** `npm run studio` (Sanity CLI; different port from Vite). Create or link a project at [sanity.io](https://www.sanity.io) and align `projectId` and dataset with your environment.

### For AI assistants
- **`AGENTS.md`** — How ChatGPT, Claude, Copilot should work in this repo
- **`PROMPTS.md`** — Copy-paste snippets for AI prompts
- **`DESIGN_TO_CURSOR.md`** — Stitch / Lovable → this template (tokens, checklist, base prompt)

**Optional (recommended):** install extra skills detected for your stack (Cursor, Claude Code, etc.):

```bash
npx autoskills
```

See `INSTRUCTIONS.txt` (section “Using AI to help you”). Spanish step-by-step: `INSTRUCCIONES.txt`.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run check` | Type-check + svelte-check (0 errors, 0 warnings) |
| `npm run lint` | ESLint + Prettier |
| `npm run format` | Format everything |
| `npm run test` | Tests |
| `npm run new:page name` | Scaffold a page |
| `npm run studio` | Sanity Studio (optional CMS in dev) |

---

## Project structure

```
sanity/                     → Schemas, seeds, Studio (optional; see Sanity section)
sanity.config.ts
sanity.cli.ts
src/
  routes/
    +page.svelte              → Home
    +layout.svelte            → Global layout (header, nav, footer, toasts, cookies, dark mode)
    +error.svelte             → 404/500
    blog/                     → +page.ts redirects to gallery; primer-post/ → demo post anchor
    contacto/                 → Redirect to form anchor on /components
    about/ pricing/ faq/ ssr-demo/  → +page.ts only (307 → /components#…)
    components/               → UI gallery + demos (SSR load, contact form action)
    api/
      og/+server.ts          → Dynamic OG image
  lib/
    styles/stitch-m3.css      → M3/Stitch tokens + utilities (text-h1, font-code…)
    site-config.ts            → Site name, URL, social links
    components/
      ui/                     → shadcn-svelte + base components (Button, Card, Input…)
      *.svelte                → Project components
    stores/
      toast.ts                → Toast notifications
    actions/
      clickOutside.ts        → Svelte action
    i18n/                     → ES/EN translations
    seo.ts                    → SEO store
    reveal.ts                 → Scroll animations
    utils.ts                  → cn(), types
    server/
      supabase/              → Supabase client (optional)
      sanity/                → GROQ client + types (optional)
  app.css                     → Global CSS + Tailwind v4 + theme variables
  hooks.server.ts             → Security headers + CSP
static/
  logos/                      → Brand SVGs (reference)
  manifest.json              → Web app manifest
  favicon.svg
```

> SEO/GEO routes (`robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`) are **dynamic SvelteKit endpoints** under `src/routes/`, fed from `src/lib/site-pages.ts` + i18n. To add a page to all of them at once, just append an entry to the `sitePages` array.

---

## SEO + GEO at a glance

The template is wired so that **calling `setSeo({...})` in a page is enough** — every other tag, schema and crawler file is auto-generated.

```ts
// src/routes/mi-pagina/+page.svelte
import { setSeo } from '$lib/seo';

setSeo({
  title: 'Mi página',
  description: 'Resumen en una frase.',
  schemaType: 'FAQPage',
  dateModified: new Date().toISOString(),
  faq: [{ question: '¿Qué es X?', answer: 'X es...' }],
  howto: [{ name: 'Paso 1', text: 'Haz Y' }]
});
```

That single call updates:

| Output | What it does |
|--------|--------------|
| `<title>`, `description`, `keywords`, `author`, `canonical` | Standard SEO tags |
| Open Graph + Twitter Cards | Social previews |
| `hreflang` ES/EN/`x-default` | International SEO |
| JSON-LD `WebPage` / `Article` / `FAQPage` / `HowTo` / `SoftwareApplication` | Rich results in Google + citations in ChatGPT / Perplexity / Gemini |
| `BreadcrumbList` | Auto-derived from URL |
| `Organization` + `WebSite` with `SearchAction` | Sitewide schema |

And from `src/lib/site-pages.ts` the template auto-generates:

- `/sitemap.xml` with hreflang
- `/llms.txt` (Markdown index, [llmstxt.org](https://llmstxt.org))
- `/llms-full.txt` (full content for LLM ingestion)
- `/robots.txt` (allow-list for OpenAI, Anthropic, Google, Perplexity, CCBot, Meta, Cohere)

To add a new page to all of them, append one entry to `sitePages` in `src/lib/site-pages.ts`.

---

## Customization

### `src/lib/site-config.ts`
Site name, URL, social links, author defaults used by `src/lib/seo.ts`.

### `src/lib/i18n/es.json` and `en.json`
Landing copy (`home.*`), navigation (`layout.nav.*`), footer, and other keys. The document title comes from the **`seo`** store (`<title>{$seo.title}</title>` in the layout); each route can call `setSeo({ title, description, ... })`.

### `src/app.css` and `src/lib/styles/stitch-m3.css`
Theme tokens (`--primary`, `--background`, …) and Stitch typography utilities. Legacy variables (`--text-main`, `--bg-soft`) are aligned with `--foreground` / `--muted`.

### Dark mode (preconfigured)
```svelte
import { mode, toggleMode } from 'mode-watcher';
import { Moon, Sun } from 'lucide-svelte';

<Button variant="ghost" size="icon" onclick={toggleMode}>
  {#if mode.current === 'dark'} <Moon /> {:else} <Sun /> {/if}
</Button>
```

---

## Deploy

Vercel and Netlify. Push to GitHub, connect the repo, done.

---

## License

Free for personal and commercial use.
