# My SvelteKit Starter

[![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/moisesvalero/my-sveltekit-starter/pulls)

Plantilla base para crear **paginas web modernas** con **SvelteKit 2 + Svelte 5 + TypeScript**.
Diseñada para que puedas crear webs profesionales aunque **no sepas casi codigo**.

> **Pruebala ahora en tu navegador sin instalar nada:**
> 
> [![Abrir en StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/moisesvalero/my-sveltekit-starter?file=src%2Froutes%2F%2Bpage.svelte)
> 
> _(Ya configurado para este repo)_

---

## Inicio en 2 minutos

```bash
npm install       # solo la primera vez
npm run dev       # arranca el servidor
```

Abre `http://localhost:5173`. No necesitas configurar `.env` para empezar.

---

## Que incluye

### Paginas pre-hechas
- `/` — Home lista para editar
- `/about` — Sobre nosotros (mision, vision, equipo)
- `/pricing` — Tabla de precios con 3 planes
- `/faq` — Preguntas frecuentes con acordeon
- `/blog` — Blog con Markdown (mdsvex)
- `/contacto` — Formulario con validacion server-side
- `/components` — Galeria de TODOS los componentes
- `/ssr-demo` — Ejemplo de carga de datos SSR

### Componentes UI (23 componentes)
**Base**: Button, Card, Container, Section, Heading, Text, Grid, HeroSection, FeaturesSection, Spinner, Modal, Skeleton

**Avanzados**: LoadingBlock, CopyButton, Newsletter, CookieConsent, ThemeToggle, ToastContainer, Analytics, LiveChat, AiPrompt, JsonLd, BlogLayout

### Infraestructura
- **SEO**: sitemap.xml + robots.txt + OG tags + Twitter cards + Schema.org JSON-LD + GEO (llms.txt, AI crawlers)
- **i18n**: Traducciones ES/EN con store y localStorage
- **Dark mode**: Toggle con CSS variables, respeta preferencias del sistema
- **Toast notifications**: `toast('Mensaje', 'success')` desde cualquier parte
- **Animaciones**: Scroll reveal con IntersectionObserver
- **Tests**: Vitest preconfigurado con test de ejemplo
- **CI/CD**: GitHub Actions para lint + check + build + test
- **Pre-commit hooks**: Husky + lint-staged (formatea y lintea antes de commit)
- **OG image dinamica**: `/api/og?title=Texto` genera imagen automaticamente
- **PWA**: manifest.json listo
- **Security headers**: X-Frame-Options, CSP en hooks.server.ts

### Integraciones opcionales (listas, solo pones las keys)
- **Sanity CMS** — panel para que clientes editen contenido
- **Supabase** — auth + base de datos
- **Sentry** — error tracking en produccion
- **Newsletter** — componente listo para Mailchimp/Resend
- **Live Chat** — placeholder para Crisp/Intercom

### Para IAs
- **`.cursor/rules`** — Cursor AI sabe como funciona tu proyecto
- **`AGENTS.md`** — ChatGPT, Claude, Copilot tambien lo saben
- **`PROMPTS.md`** — Snippets copy-pasteables para pedirle a la IA

---

## Scripts

| Comando | Que hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de produccion |
| `npm run preview` | Previsualizar build |
| `npm run check` | Type-check + Svelte-check |
| `npm run lint` | ESLint + Prettier check |
| `npm run format` | Formatear todo el codigo |
| `npm run test` | Ejecutar tests |
| `npm run new:page nombre` | Crea pagina nueva automaticamente |
| `npm run clean` | Borra ejemplos, deja solo la home |

---

## Estructura

```
src/
  routes/
    +page.svelte              → Home
    +layout.svelte            → Layout global (header, nav, footer, toasts, cookies, dark mode)
    +error.svelte             → Pagina de error 404/500
    about/                    → Sobre nosotros
    pricing/                  → Precios
    faq/                      → Preguntas frecuentes
    blog/                     → Blog con Markdown
    contacto/                 → Formulario con actions
    components/               → Galeria de componentes
    ssr-demo/                 → Demo SSR con load()
    examples/landing/         → Landing completa de ejemplo
    api/
      hello/+server.ts        → API endpoint de ejemplo
      og/+server.ts           → OG image dinamica
  lib/
    site-config.ts            → UNICO archivo de configuracion
    components/
      ui/                     → Componentes base (Button, Card, Heading...)
      *.svelte                → Componentes avanzados
    stores/
      toast.ts                → Notificaciones toast
      darkMode.ts             → Modo oscuro
    actions/
      clickOutside.ts         → Accion Svelte
    i18n/                     → Traducciones ES/EN
    seo.js                    → SEO store
    reveal.ts                 → Animaciones scroll
    server/                   → Supabase, Sanity
  app.css                     → CSS global + variables + dark mode
  hooks.server.ts             → Security headers
  hooks.client.ts             → Sentry
scripts/
  new-page.js                 → Script para crear paginas
  clean.js                    → Script para limpiar ejemplos
```

---

## Personalizacion

### `src/lib/site-config.ts` (edita solo esto)
```ts
export const siteConfig = {
  name: 'Mi Proyecto',
  url: 'https://tu-dominio.com',
  social: { github, linkedin, email },
  author: { name, url },
  nav: [...],    // menu de navegacion
  footer: {...}  // ubicacion, copyright
};
```

### `src/app.css` (colores)
```css
--accent: #6366f1;
--text-main: #111827;
--bg-main: #ffffff;
--bg-soft: #f9fafb;
```

---

## Despliegue

Preconfigurado para Vercel y Netlify. Sube a GitHub, conecta en Vercel, listo.

---

## Licencia

Libre para uso personal y comercial.
