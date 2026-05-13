# GEO Playbook — SEO + Generative Engine Optimization perfecto para vibe coders

Guía para llevar a cualquier proyecto **SvelteKit** el mismo nivel de GEO que tiene esta plantilla. Pensada para **copiarse a otros repos SvelteKit** y para usarse como **prompt de agente** (sección final del documento).

> **Qué es GEO**: SEO clásico → para Google.
> GEO → para ChatGPT, Claude, Perplexity, Gemini y demás IAs que citan páginas web. Comparten muchas cosas con SEO (HTML semántico, schema.org) pero añaden: `llms.txt`, `llms-full.txt`, FAQPage/HowTo schemas, dates frescas, permisos para crawlers IA, contenido "answer-first".

---

## El principio: una llamada, todo automático

El vibe coder solo debería escribir:

```ts
setSeo({ title, description, faq: [...], howto: [...] });
```

Y el framework debe generar **solo, en cada ruta**:

| Capa | Tags | Generado por |
|---|---|---|
| **SEO** | `<title>`, `description`, `keywords`, `author`, `canonical` | layout |
| **Social** | Open Graph completo, Twitter Cards | layout |
| **i18n** | `hreflang` ES/EN/x-default, `<html lang>` correcto en SSR | layout + hooks |
| **JSON-LD** | Organization, WebSite+SearchAction, page schema, BreadcrumbList | componente JsonLd |
| **JSON-LD GEO** | FAQPage, HowTo, SoftwareApplication | componente JsonLd (si setSeo lo pasa) |
| **Crawlers** | sitemap.xml con hreflang, robots.txt con IAs allow-list | endpoints dinámicos |
| **GEO core** | `/llms.txt` (índice), `/llms-full.txt` (contenido) | endpoints dinámicos |

---

## Checklist de auditoría (10 minutos)

Antes de tocar nada, revisa el estado del proyecto destino:

- [ ] ¿Hay un store/objeto centralizado para SEO (`setSeo`, `useSeo`, `<Seo>` component)?
- [ ] ¿El `<title>` y `description` están en cada página o solo en el layout?
- [ ] ¿`canonical` se calcula por ruta o está hardcoded?
- [ ] ¿`<html lang>` es dinámico según locale en SSR (no en `onMount`)?
- [ ] ¿Open Graph: tiene `og:type`, `og:image`, `og:url`, `og:locale`?
- [ ] ¿Twitter Card: `summary_large_image` con imagen 1200×630?
- [ ] ¿hreflang en sitemap **y** en `<head>`?
- [ ] ¿JSON-LD: `Organization` + `WebSite` con `SearchAction`?
- [ ] ¿JSON-LD: `BreadcrumbList` auto desde la URL?
- [ ] ¿JSON-LD: `FAQPage` en páginas con preguntas?
- [ ] ¿JSON-LD: `HowTo` en páginas con pasos?
- [ ] ¿`/sitemap.xml` dinámico, no estático?
- [ ] ¿`/robots.txt` permite GPTBot, Claude-Web, PerplexityBot, Google-Extended, CCBot, anthropic-ai, OAI-SearchBot, FacebookBot, cohere-ai?
- [ ] ¿Existe `/llms.txt` en formato [llmstxt.org](https://llmstxt.org) (Markdown, no YAML inventado)?
- [ ] ¿Existe `/llms-full.txt` con todo el contenido del sitio en Markdown?
- [ ] ¿`dateModified` se actualiza con cada build (frescura del contenido)?
- [ ] ¿OG image es PNG (mejor) o SVG (acepta Twitter/LinkedIn lo ignoran)?
- [ ] ¿No hay duplicados entre `static/robots.txt` y `/routes/robots.txt`?

---

## Plan de implementación (orden estricto)

### 1. Source of truth: registro de páginas

Crea un archivo `lib/site-pages.{ts,js}` con todas las rutas indexables y sus claves i18n. **Sin esto, sitemap/llms.txt se descoordinan.**

```ts
export interface SitePage {
  path: string;
  titleKey: string;
  descKey: string;
  changefreq: 'weekly' | 'monthly' | ...;
  priority: number; // 0.0–1.0
  group: 'primary' | 'demo' | 'docs';
}

export const sitePages: SitePage[] = [
  { path: '/', titleKey: 'home.seo.title', descKey: 'home.seo.description', changefreq: 'weekly', priority: 1.0, group: 'primary' },
  // ...
];
```

**Regla:** añadir página nueva = añadir entrada aquí. Nunca tocar sitemap/llms.txt a mano.

### 2. Limpieza de duplicados

- Borrar `static/robots.txt` y `static/llms.txt` si existen.
- Toda generación se hace por endpoint dinámico para que aproveche env vars, i18n, build dates.

### 3. Store SEO con todos los campos

Campos mínimos del store/contexto SEO:

```ts
interface SeoState {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: 'website' | 'article' | 'product';
  twitterCard: 'summary' | 'summary_large_image';
  twitterCreator: string;
  canonical: string;             // se sobrescribe por ruta en el layout
  schemaType: 'WebPage' | 'Article' | 'FAQPage' | 'HowTo' | 'CollectionPage' | ...;
  headline: string;
  datePublished: string;         // ISO 8601
  dateModified: string;          // ISO 8601 (usa new Date().toISOString() al cargar)
  author: string;
  keywords: string[];
  locale: string;
  faq: { question: string; answer: string }[];
  howto: { name: string; text: string }[];
  softwareName: string;
  softwareCategory: string;
}
```

### 4. Layout: inyectar TODO desde el store

En el layout global (`+layout.svelte`, `app/layout.tsx`, etc.) lee el store y mete en `<head>`:

- `<title>`, description, keywords, author
- `<link rel="canonical">` calculado de la ruta actual (NO del store, así no hay que pasarlo cada vez)
- Open Graph completo
- Twitter Cards
- hreflang ES/EN/x-default
- `<link rel="alternate" type="text/plain" href="/llms.txt">` (señal a crawlers IA)

### 5. Componente JsonLd universal

Un solo componente que inyecta varios JSON-LD según los props recibidos:

- **Organization** (siempre)
- **WebSite** con `potentialAction` = `SearchAction` (sitelinks searchbox en Google)
- **Page schema** (`WebPage`/`Article`/etc.) con `inLanguage`
- **BreadcrumbList** auto desde `location.pathname`
- **FAQPage** si recibe `faq[]`
- **HowTo** si recibe `howto[]`
- **SoftwareApplication** si recibe `softwareName`

### 6. `<html lang>` correcto en SSR

Patrón estándar: cookie + Accept-Language en `src/hooks.server.ts`, reemplazando el placeholder `%lang%` de `src/app.html`.

```ts
// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';

function resolveLang(event: Parameters<Handle>[0]['event']): 'es' | 'en' {
  const cookie = event.cookies.get('portfolio_locale');
  if (cookie === 'en' || cookie === 'es') return cookie;
  const accept = event.request.headers.get('accept-language') || '';
  return accept.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export const handle: Handle = async ({ event, resolve }) => {
  const lang = resolveLang(event);
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang)
  });
};
```

```html
<!-- src/app.html -->
<html lang="%lang%">
```

El cambio de idioma en el cliente debe POSTear a `/api/locale/+server.ts` para sincronizar la cookie con el servidor.

### 7. Endpoints dinámicos (4 archivos)

**`/sitemap.xml`** — itera `publicPages()` + añade `<xhtml:link hreflang>` por locale.

**`/robots.txt`** — bloque para cada IA. Allow-list mínima:

```
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: anthropic-ai
User-agent: Claude-Web
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: PerplexityBot
User-agent: CCBot
User-agent: FacebookBot
User-agent: cohere-ai
Allow: /
Disallow: /api/

Sitemap: https://tudominio.com/sitemap.xml
```

**`/llms.txt`** — formato [llmstxt.org](https://llmstxt.org) (**Markdown**, no YAML):

```markdown
# Nombre del sitio

> Resumen en una frase del proyecto.

## Páginas principales

- [Título](/url): descripción corta
- [Título](/url): descripción corta

## Recursos

- [Contenido completo](/llms-full.txt)
- [Sitemap](/sitemap.xml)
```

**`/llms-full.txt`** — todo el contenido visible del sitio renderizado a Markdown (hero, features, FAQ, blog posts, etc.) leído desde i18n/CMS. Sin HTML.

### 8. Páginas: setSeo en cada ruta

```ts
// home
setSeo({
  title, description,
  schemaType: 'WebPage',
  dateModified: new Date().toISOString(),
  faq: [...],          // si la home cita preguntas
  howto: [...],        // si tiene pasos onboarding
  softwareName: 'Mi App',
  keywords: [...]
});
```

### 9. Validar

- `<title>` único por ruta
- `<meta description>` único por ruta
- `<link rel="canonical">` apunta a la URL actual, no a la home
- `view-source:tudominio.com/llms.txt` devuelve Markdown válido
- [Rich Results Test](https://search.google.com/test/rich-results) detecta FAQPage/HowTo
- [validator.schema.org](https://validator.schema.org/) sin errores

---

## Mapa de archivos en SvelteKit

| Pieza | Archivo |
|---|---|
| Store SEO | `src/lib/seo.ts` |
| Registro de páginas | `src/lib/site-pages.ts` |
| Layout con meta tags | `src/routes/+layout.svelte` |
| Componente JsonLd | `src/lib/components/JsonLd.svelte` |
| Endpoints dinámicos | `src/routes/{sitemap.xml,robots.txt,llms.txt,llms-full.txt}/+server.ts` |
| Hook SSR `<html lang>` | `src/hooks.server.ts` (`transformPageChunk`) |
| API cookie locale | `src/routes/api/locale/+server.ts` |
| Constantes locale | `src/lib/i18n/site-locale.ts` |

---

## Errores comunes que evita este plan

1. **`canonical` siempre apunta a la home** → ✅ derivarlo de `page.url.pathname` en el layout
2. **`llms.txt` con formato YAML inventado** → ✅ usar Markdown [llmstxt.org](https://llmstxt.org)
3. **`static/robots.txt` + endpoint dinámico** sirven cosas distintas → ✅ borrar el estático
4. **`<html lang>` siempre `en` aunque la app sea ES/EN** → ✅ resolver en hooks SSR
5. **FAQ visible en HTML sin FAQPage JSON-LD** → ✅ pasar `faq[]` a `setSeo`
6. **Steps de onboarding sin HowTo JSON-LD** → ✅ pasar `howto[]` a `setSeo`
7. **OG image SVG** → Twitter/LinkedIn no las renderizan → ✅ migrar a PNG (`@vercel/og`, `satori`)
8. **`dateModified` hardcoded** → ✅ `new Date().toISOString()` en cada build

---

## Prompt copy-paste para agente

Pega esto en Cursor/Claude/ChatGPT cuando quieras replicar el setup en otro proyecto:

````
Quiero que implementes SEO + GEO (Generative Engine Optimization) en este proyecto SvelteKit
siguiendo el playbook que voy a describir. La app usa Svelte 5 + SvelteKit 2 + TypeScript,
con i18n en [es/en], y tiene estas rutas indexables: [listar rutas o "audítalas tú"].

OBJETIVO: que el desarrollador solo escriba `setSeo({...})` (o equivalente) en cada página y
todo lo demás se genere automáticamente.

PLAN (sigue el orden):

1. AUDITORÍA — Antes de tocar nada, revisa el estado actual y dame un informe con:
   - estructura SEO existente (store, layout, JsonLd…)
   - duplicados (static/robots.txt vs endpoint dinámico, etc.)
   - qué falta de esta lista: llms.txt, llms-full.txt, hreflang, dynamic <html lang>,
     FAQPage, HowTo, SoftwareApplication, BreadcrumbList, SearchAction.

2. REGISTRO CENTRAL — Crea `src/lib/site-pages.ts` con un array `sitePages` que tenga
   path + titleKey + descKey + changefreq + priority + group para CADA ruta indexable.

3. LIMPIEZA — Borra `static/robots.txt`, `static/llms.txt` y cualquier otro duplicado.

4. STORE SEO — Crea/extiende `src/lib/seo.ts` con un `writable` que tenga estos campos:
   title, description, ogTitle, ogDescription, ogImage, ogType, ogUrl,
   twitterCard, twitterCreator, canonical, schemaType (WebPage|Article|FAQPage|HowTo|
   CollectionPage|SoftwareApplication), headline, datePublished, dateModified, author,
   keywords[], locale, faq[], howto[], softwareName, softwareCategory.
   Exporta `setSeo(partial)` y `defaultSeo`.

5. LAYOUT (`src/routes/+layout.svelte`) — En el `<svelte:head>` inyecta desde el store:
   - `<title>{$seo.title}</title>`, meta description/keywords/author
   - `<link rel="canonical">` calculado de `page.url.pathname` (NO del store)
   - Open Graph completo (og:title/description/url/image/type/locale + alternate)
   - Twitter Cards completo
   - hreflang para cada locale soportado + x-default
   - `<link rel="alternate" type="text/plain" href="/llms.txt">`

6. COMPONENTE JsonLd (`src/lib/components/JsonLd.svelte`) — Que inyecte vía `{@html}`:
   - Organization (siempre)
   - WebSite con `potentialAction` = SearchAction
   - Page schema según prop `type` (defaultSeo.schemaType)
   - BreadcrumbList auto desde `page.url.pathname`
   - FAQPage si recibe `faq[]`
   - HowTo si recibe `howto[]`
   - SoftwareApplication si recibe `softwareName`

7. SSR LANG — En `src/hooks.server.ts` resuelve idioma desde cookie + Accept-Language,
   y reemplaza `%lang%` en `src/app.html` vía `transformPageChunk`. Asegura que
   cambiar idioma en cliente POSTea a `/api/locale/+server.ts` para sincronizar la cookie.
   Pon `<html lang="%lang%">` en `src/app.html`.

8. ENDPOINTS DINÁMICOS — Crea cuatro endpoints `+server.ts` bajo `src/routes/`:
   - `sitemap.xml/+server.ts`: itera `publicPages()` + añade `<xhtml:link hreflang>` por locale.
   - `robots.txt/+server.ts`: allow para GPTBot, OAI-SearchBot, ChatGPT-User, anthropic-ai,
     Claude-Web, ClaudeBot, Google-Extended, PerplexityBot, CCBot, FacebookBot, cohere-ai.
     Disallow `/api/`. Línea `Sitemap: <URL absoluta>`.
   - `llms.txt/+server.ts`: formato Markdown estándar de llmstxt.org (# título, > resumen,
     ## Páginas principales con lista, ## Recursos con enlaces).
     Genera dinámicamente desde `sitePages` + i18n (`src/lib/i18n/*.json`).
   - `llms-full.txt/+server.ts`: TODO el contenido textual del sitio en Markdown
     (hero, features, steps, FAQ…) leído desde i18n. Para que LLMs ingieran sin parsear HTML.

9. PÁGINAS — Para CADA `+page.svelte` con `setSeo({...})`:
   - Añade schemaType correcto
   - Añade dateModified = `new Date().toISOString()`
   - Añade keywords[] relevantes
   - Si tiene FAQ visible en la página, pásalo en `faq[]`
   - Si tiene pasos (How-to/onboarding), pásalo en `howto[]`
   - Mete el `setSeo` dentro de un `$effect` que dependa de `$locale` para que ES/EN se sincronicen.

10. VALIDACIÓN — Ejecuta:
    - `npm run check` (svelte-check + tsc) → 0 errores, 0 warnings
    - `npm run dev` + fetch a `/llms.txt`, `/llms-full.txt`, `/sitemap.xml`, `/robots.txt` → contenido correcto
    - Revisa que `<title>`, `description` y `canonical` sean ÚNICOS por ruta

11. DOCUMENTACIÓN — Actualiza el README y/o AGENTS.md del proyecto con:
    - Una sección "SEO + GEO" que explique cómo se usa `setSeo`
    - Tabla de qué se inyecta automáticamente
    - Cómo añadir una nueva página al GEO (añadir entrada a `sitePages`)

REGLAS:
- No rompas el SEO existente. Lo nuevo debe convivir con lo viejo.
- Todos los endpoints son dinámicos en `src/routes/...` (NO archivos en `static/`).
- Usa Svelte 5 con runes (`$state`, `$props`, `$derived`, `$effect`).
- Comenta SOLO intención no obvia, no narres lo que hace el código.
- Resúmenes técnicos breves: 2-3 líneas por bloque al terminar.
- Al final, dame: lista de archivos creados/modificados + un párrafo de "cómo añadir una página nueva".

Empieza por la AUDITORÍA y enséñame el informe antes de tocar código.
````

---

## Cuando NO aplicar todo el playbook

- Sitios privados (intranets, dashboards detrás de login): basta con `noindex` en robots.
- One-pagers sin contenido recurrente: salta `llms-full.txt`.
- Apps SaaS donde lo importante es el producto, no la landing: aplica solo a la landing y al blog.

---

## Recursos

- [llmstxt.org](https://llmstxt.org) — spec oficial del formato `llms.txt`
- [schema.org/FAQPage](https://schema.org/FAQPage), [HowTo](https://schema.org/HowTo), [SoftwareApplication](https://schema.org/SoftwareApplication)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [validator.schema.org](https://validator.schema.org/)
- [Google's Search Central docs](https://developers.google.com/search/docs)
