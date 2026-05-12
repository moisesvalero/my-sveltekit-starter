# My SvelteKit Starter

[![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/moisesvalero/my-sveltekit-starter/pulls)

Plantilla base para crear **paginas web modernas** con **SvelteKit 2 + Svelte 5 + TypeScript + Tailwind CSS v4** y **componentes UI estilo [shadcn-svelte](https://www.shadcn-svelte.com/)** (codigo en tu repo, no un paquete opaco).
La **home** usa tokens Material/Stitch (`src/lib/styles/stitch-m3.css`), **i18n ES/EN** en la landing y **SEO** centralizado con `$seo`.

> **Demo en vivo (Vercel):** sustituye la URL por la de tu proyecto cuando esté desplegado — la misma va en `src/lib/site-config.ts` → `liveDemoUrl` (botón en la home).
>
> [![Ver demo en vivo](https://img.shields.io/badge/Ver_demo-en_vivo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://tu-dominio.com)

---

## Inicio en 2 minutos

```bash
npm install       # solo la primera vez
npm run dev       # arranca el servidor
```

Abre `http://localhost:5173`. No necesitas configurar `.env` para empezar.

Requisitos: **Node.js 22+** (ver `package.json` → `engines`).

---

## Que incluye

### Paginas pre-hechas
- `/` — Landing (hero, terminal de ejemplo, caracteristicas, pasos, CTA; textos en `src/lib/i18n/*.json` bajo `home.*`)
- `/components` — Galeria de componentes UI **y** demos de plantilla (about, pricing, faq, SSR con `load()`, blog, formulario). Contenido en `src/lib/components/demos/*.svelte`; datos SSR en `src/routes/components/+page.ts`.
- **Atajos (redirect 307 a anclas en `/components`)** — enlaces legacy o bookmarks: `/about`, `/pricing`, `/faq`, `/blog`, `/blog/primer-post`, `/ssr-demo`, `/contacto` (form action en `src/routes/components/+page.server.ts`).

### Componentes UI (shadcn-svelte + proyecto)

**UI base** (`src/lib/components/ui/`, patron shadcn-svelte + **bits-ui**): Button, Card, Dialog, Input, Textarea, Label, Skeleton, Spinner, Sonner (toast).

**Proyecto** (`src/lib/components/`): Footer, Heading, Container, Section, Grid, CopyButton, Newsletter, AiPrompt, JsonLd, CookieConsent, BlogLayout, LoadingBlock, demos en `demos/`, etc. (bloques de marketing opcionales como Hero no estan todos enlazados en la home actual).

### Infraestructura
- **SEO**: sitemap.xml + robots.txt + OG tags + Twitter cards + Schema.org JSON-LD + GEO (AI crawlers)
- **i18n**: Traducciones ES/EN con store y localStorage
- **Dark mode**: Toggle con mode-watcher, respeta preferencias del sistema
- **Toast notifications**: Sonner (`<Toaster />` en el layout) + `toast()` desde `$lib/stores/toast` (visible con `<ToastContainer />` en el layout)
- **Animaciones**: Scroll reveal con IntersectionObserver
- **Tests**: Vitest preconfigurado
- **CI/CD**: GitHub Actions (lint + check + build + test)
- **Pre-commit hooks**: Husky + lint-staged
- **OG image dinamica**: `/api/og?title=Texto`
- **Security headers**: CSP + X-Frame-Options en hooks.server.ts

### Integraciones opcionales (listas, solo pones las keys)
- **Sanity CMS** — detalle en [Sanity (opcional)](#sanity-cms-opcional)
- **Supabase** — auth + base de datos
- **Sentry** — error tracking
- **Newsletter** — componente listo para Mailchimp/Resend
- **Live Chat** — placeholder para Crisp/Intercom/Tawk

### Sanity CMS (opcional)

**Qué hay en el repo:** carpeta `sanity/` (schemas, seeds), `sanity.config.ts` / `sanity.cli.ts`, y código servidor en `src/lib/server/sanity/` (cliente con `@sanity/client`, consultas GROQ de ejemplo, tipos). El paquete **`sanity`** está en **devDependencies** para poder abrir el Studio; **`@sanity/client`** y **`@sanity/image-url`** en dependencies para el front SSR.

**Qué no hace la plantilla sola:** ninguna ruta usa GROQ por defecto. Sin variables de Sanity, la web sigue funcionando; cuando quieras datos del CMS, llama a `getSanityServerClient()` desde un `load` o `+page.server.ts`.

**Variables típicas** (`.env`, no subir secretos): `SANITY_PROJECT_ID`, `SANITY_DATASET`; opcional `SANITY_READ_TOKEN` si necesitas borradores o datasets privados. `sanity.config.ts` también acepta `SANITY_STUDIO_PROJECT_ID` / `SANITY_STUDIO_DATASET` si prefieres separar Studio del runtime.

**Arrancar el Studio:** `npm run studio` (CLI de Sanity; puerto distinto a Vite). Crea o enlaza un proyecto en [sanity.io](https://www.sanity.io) y alinea `projectId` y dataset con tu entorno.

### Para IAs
- **`AGENTS.md`** — ChatGPT, Claude, Copilot saben como funciona tu proyecto
- **`PROMPTS.md`** — Snippets copy-pasteables para pedirle a la IA
- **`DESIGN_TO_CURSOR.md`** — Flujo Stitch / Lovable → implementación en esta plantilla (tokens, checklist, prompt base)

**Opcional (recomendado):** instalar skills extra detectadas para tu stack (Cursor, Claude Code, etc.):

```bash
npx autoskills
```

Detalle en `INSTRUCCIONES.txt` (seccion «Usar la IA para ayudarte»).

---

## Scripts

| Comando | Que hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de produccion |
| `npm run preview` | Previsualizar build |
| `npm run check` | Type-check + Svelte-check (0 errores, 0 warnings) |
| `npm run lint` | ESLint + Prettier |
| `npm run format` | Formatear todo |
| `npm run test` | Tests |
| `npm run new:page nombre` | Crear pagina |
| `npm run studio` | Sanity Studio (panel CMS en desarrollo, opcional) |

---

## Estructura

```
sanity/                     → Schemas, seeds y Studio (opcional; ver seccion Sanity)
sanity.config.ts
sanity.cli.ts
src/
  routes/
    +page.svelte              → Home
    +layout.svelte            → Layout global (header, nav, footer, toasts, cookies, dark mode)
    +error.svelte             → 404/500
    blog/                     → +page.ts redirect a galeria; primer-post/ → ancla post demo
    contacto/                 → Redirect a ancla formulario en /components
    about/ pricing/ faq/ ssr-demo/  → Solo +page.ts (redirect 307 a /components#…)
    components/               → Galeria UI + demos (load SSR, form action contact)
    api/
      og/+server.ts          → OG image dinamica
  lib/
    styles/stitch-m3.css      → Tokens M3/Stitch + utilidades text-h1, font-code…
    site-config.ts            → Config nombre, URL, redes
    components/
      ui/                     → shadcn-svelte + componentes base (Button, Card, Input...)
      *.svelte                → Componentes de proyecto
    stores/
      toast.ts                → Notificaciones toast
    actions/
      clickOutside.ts        → Accion Svelte
    i18n/                     → Traducciones ES/EN
    seo.ts                    → SEO store
    reveal.ts                 → Animaciones scroll
    utils.ts                  → cn(), tipos
    server/
      supabase/              → Cliente Supabase (opcional)
      sanity/                → Cliente GROQ + tipos (opcional)
  app.css                     → CSS global + Tailwind v4 + variables de tema
  hooks.server.ts             → Security headers + CSP
static/
  logos/                      → SVGs de marcas (referencia)
  manifest.json              → Web app manifest
  favicon.svg
  robots.txt, llms.txt
```

---

## Personalizacion

### `src/lib/site-config.ts`
Nombre del sitio, URL, redes, autor y valores por defecto que usa `src/lib/seo.ts`.

### `src/lib/i18n/es.json` y `en.json`
Textos de la landing (`home.*`), navegacion (`layout.nav.*`), footer y demas claves. El titulo del documento viene del store **`seo`** (`<title>{$seo.title}</title>` en el layout); cada ruta puede llamar a `setSeo({ title, description, ... })`.

### `src/app.css` y `src/lib/styles/stitch-m3.css`
Tokens del tema (`--primary`, `--background`, …) y utilidades de tipografia Stitch. Variables legacy (`--text-main`, `--bg-soft`) estan alineadas con `--foreground` / `--muted`.

### Dark mode (ya viene configurado)
```svelte
import { mode, toggleMode } from 'mode-watcher';
import { Moon, Sun } from 'lucide-svelte';

<Button variant="ghost" size="icon" onclick={toggleMode}>
  {#if mode.current === 'dark'} <Moon /> {:else} <Sun /> {/if}
</Button>
```

---

## Despliegue

Vercel y Netlify. Sube a GitHub, conecta en el hosting, listo.

---

## Licencia

Libre para uso personal y comercial.