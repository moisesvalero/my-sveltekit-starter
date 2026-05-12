# AGENTS.md - Instrucciones para asistentes de IA

## Proyecto: My SvelteKit Starter

Este es un proyecto **Svelte 5 + SvelteKit 2 + TypeScript + Tailwind CSS v4**.
Usa runes de Svelte 5 ($state, $props, $derived, $effect) y shadcn-svelte.

---

## REGLA DE ORO - LEE ESTO PRIMERO

**NUNCA crees HTML crudo si ya existe un componente para eso.**

Antes de escribir `<button>`, `<h1>`, `<section>`, `<div class="card">` o cualquier elemento HTML,
revisa esta lista. Si existe un componente que hace lo que necesitas, USALO.

```svelte
<!-- MAL: HTML crudo -->
<button class="bg-blue-500 px-4 py-2 rounded-lg">Click</button>
<h1 class="text-4xl font-bold">Titulo</h1>
<div class="p-6 rounded-xl border bg-card">Contenido</div>

<!-- BIEN: componentes existentes -->
<Button variant="default">Click</Button>
<h1 class="text-4xl font-bold tracking-tight text-foreground">Titulo</h1>
<Card class="p-6">
  <CardHeader><CardTitle>Contenido</CardTitle></CardHeader>
  <CardContent>...</CardContent>
</Card>
```

### Catalogo de componentes shadcn-svelte

| Componente | Import | Props clave |
|-----------|--------|-------------|
| **Button** | `$lib/components/ui/button` | `variant="default\|secondary\|outline\|ghost\|destructive\|link" size="default\|sm\|lg\|icon" href disabled` |
| **Card** | `$lib/components/ui/card` | `Card`, `CardContent`, `CardHeader`, `CardTitle`, `CardFooter`, `CardDescription`, `CardAction` |
| **Dialog** | `$lib/components/ui/dialog` | `open title onclose` |
| **Input** | `$lib/components/ui/input` | `type placeholder bind:value` |
| **Textarea** | `$lib/components/ui/textarea` | `rows placeholder bind:value` |
| **Label** | `$lib/components/ui/label` | `for` |
| **Skeleton** | `$lib/components/ui/skeleton` | `width height class` |
| **Spinner** | `$lib/components/ui/spinner` | `class="size-{n}"` |

### Componentes custom del proyecto

| Componente | Import | Props clave |
|-----------|--------|-------------|
| **Container** | `$lib/components/ui/Container.svelte` | `as="div\|section"` |
| **Section** | `$lib/components/ui/Section.svelte` | `variant="default\|muted\|soft\|surface" id` |
| **Heading** | `$lib/components/ui/Heading.svelte` | `level={1\|2\|3\|4} eyebrow kicker align` |
| **Text** | `$lib/components/ui/Text.svelte` | `variant="body\|muted\|small\|label" align` |
| **Grid** | `$lib/components/ui/Grid.svelte` | `columns={n} gap className` |
| **HeroSection** | `$lib/components/ui/HeroSection.svelte` | `eyebrow title subtitle primaryLabel primaryHref secondaryLabel secondaryHref align` |
| **FeaturesSection** | `$lib/components/ui/FeaturesSection.svelte` | `eyebrow title subtitle items=[{icon,title,description}] id` |
| **Sonner (Toast)** | `$lib/components/ui/sonner` | `<Toaster />` en +layout.svelte |
| **CopyButton** | `$lib/components/CopyButton.svelte` | `text label` |
| **Newsletter** | `$lib/components/Newsletter.svelte` | `title subtitle action buttonLabel` |
| **AiPrompt** | `$lib/components/AiPrompt.svelte` | `placeholder message maxLength` |
| **JsonLd** | `$lib/components/JsonLd.svelte` | `type headline datePublished dateModified` |
| **Footer** | `$lib/components/Footer.svelte` | Enlaces; textos traducibles (`layout.footer.*`) |

La **home** (`src/routes/+page.svelte`) obtiene copy desde **i18n** (`home.*` en `es.json` / `en.json`). SEO se actualiza con `setSeo` dentro de `$effect` al cambiar idioma. Estilos Stitch/M3: utilidades en `src/lib/styles/stitch-m3.css`.

El **titulo del documento** en el layout usa **`{$seo.title}`** (store en `src/lib/seo.ts`), no un titulo fijo de i18n.

### Stores y utilidades

```ts
import { toast } from '$lib/stores/toast';
toast('Mensaje', 'success');  // success | error | info | warning
// El layout monta `<Toaster />` (Sonner/shadcn) y `<ToastContainer />` para toasts del store anterior.

import { mode, toggleMode } from 'mode-watcher';
// mode.current === 'dark' | 'light' | 'system', toggleMode() para alternar

import { clickOutside } from '$lib/actions/clickOutside';
// use:clickOutside={fn}  → ejecuta fn al clickear fuera

import { t, locale, setLocale } from '$lib/i18n/index';
// {$t('clave')} para traducir, setLocale('es'|'en')

import { setSeo } from '$lib/seo';
// setSeo({ title, description, ogImage, ... })

import { reveal } from '$lib/reveal';
// use:reveal={{ stage: 'title'|'content', delay: 120 }}

import { cn } from '$lib/utils';
// cn('foo', 'bar') → combina classes con tailwind-merge
```

### SI el componente que necesitas NO existe

Entonces sí, créalo. Pero:
1. Ponlo en `src/lib/components/ui/` si es genérico
2. Usa `<script lang="ts">` con `$props()`
3. Usa Tailwind para estilos
4. Usa `$state()`, `$derived()`, `$effect()` para estado

---

## Regla de oro
SIEMPRE lee `src/lib/site-config.ts` antes de tocar nombres, links o SEO.
SIEMPRE usa los componentes de arriba en vez de crear HTML desde cero.
SIEMPRE traduce textos con `$t('clave')` del sistema i18n SI LA PAGINA USA i18n.

---

## Estructura clave

| Carpeta | Proposito |
|---------|-----------|
| `src/routes/` | Paginas (filesystem routing) |
| `src/lib/components/ui/` | Componentes shadcn-svelte + custom |
| `src/lib/components/` | Componentes de proyecto |
| `src/lib/i18n/` | Traducciones ES/EN |
| `src/lib/server/` | Codigo solo servidor |
| `src/app.css` | CSS global, Tailwind v4, variables de tema shadcn |
| `src/lib/styles/stitch-m3.css` | Tokens/copy visual tipo Stitch (tipografia `text-h1`, colores M3) |
| `static/` | Archivos estaticos |

---

## Patrones Svelte 5 obligatorios

```svelte
<script lang="ts">
  // Props tipadas - ASI se hace en Svelte 5
  let { titulo, items = [] }: { titulo: string; items?: string[] } = $props();

  // Estado local
  let abierto = $state(false);

  // Derivado
  const total = $derived(items.length);

  // Efecto
  $effect(() => {
    console.log('abierto cambio:', abierto);
  });
</script>
```

### Slots → Snippets (Svelte 5)

```svelte
<!-- ANTES (Svelte 4) -->
<slot name="header" />

<!-- AHORA (Svelte 5) -->
{@render children?.()}
```

### Props con $props() - NO con generics

```svelte
<!-- MAL -->
let { titulo } = $props<string>();

<!-- BIEN -->
let { titulo }: { titulo: string } = $props();
```

---

## CSS

- **Tailwind CSS v4** con `@import "tailwindcss"`
- Variables shadcn: `--primary`, `--primary-foreground`, `--background`, `--foreground`, `--border`, `--muted`, etc.
- Variables custom: `--accent`, `--text-main`, `--text-secondary`, `--bg-main`, `--bg-soft`
- Estilos scoped en cada componente: `<style>...</style>`

---

## SEO

```ts
import { setSeo } from '$lib/seo';
setSeo({ title: '...', description: '...', ogImage: '...' });
```

---

## i18n

```svelte
import { t } from '$lib/i18n/index';
{$t('clave.del.json')}
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

## Al crear paginas nuevas

1. `src/routes/mi-pagina/+page.svelte`
2. `<script lang="ts">` arriba con imports
3. `setSeo(...)` para SEO
4. Si carga datos del servidor: `+page.ts` con `load()`
5. Si tiene formulario: `+page.server.ts` con `actions`
6. `+page.svelte` NUNCA usa `async` - la carga va en `+page.ts`

---

## Al crear componentes nuevos

1. Props tipadas con `$props()`
2. Estado con `$state()`, derivado con `$derived()`
3. Si es genérico → `src/lib/components/ui/`
4. Si es específico del proyecto → `src/lib/components/`
5. Usa Tailwind para estilos, NO CSS custom si Tailwind puede hacerlo

---

## Flujo diseño externo → código (Stitch, Lovable, Figma HTML, etc.)

Cuando el usuario traiga **referencia de otra herramienta** y pida **paridad visual** con esta plantilla:

1. **No volcar HTML crudo sin traducir**: mapear bloques a **Button, Card, Section, Heading, Grid**, etc. del catálogo superior.
2. **Tokens primero**: alinear colores y tipografía con `src/app.css`, utilidades M3/Stitch en `src/lib/styles/stitch-m3.css`, y copy en **i18n** si la página ya usa `$t()`.
3. **Pedir al usuario** (si falta) capturas o export CSS/HTML y lista de breakpoints a respetar.
4. **Cierre**: `npm run check` y mencionar qué se aproximó vs. qué quedó 1:1.

Guía detallada y prompt listo para copiar: **`DESIGN_TO_CURSOR.md`**.

---

## shadcn-svelte CLI

```bash
npx shadcn-svelte@latest add <componente>
```

Componentes disponibles: button, card, dialog, skeleton, spinner, sonner, input, textarea, label, accordion, avatar, badge, calendar, checkbox, command, dropdown-menu, form, popover, progress, select, separator, sheet, slider, switch, table, tabs, toggle-group, tooltip

---

## type-only imports

Quando uses `Snippet` como tipo, importa con `import type`:

```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  let { children }: { children: Snippet } = $props();
</script>
```