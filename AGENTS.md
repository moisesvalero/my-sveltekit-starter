# AGENTS.md - Instrucciones para asistentes de IA

## Proyecto: My SvelteKit Starter

Este es un proyecto **Svelte 5 + SvelteKit 2 + TypeScript**. 
Usa runes de Svelte 5 ($state, $props, $derived, $effect).

---

## REGLA DE ORO - LEE ESTO PRIMERO

**NUNCA crees HTML crudo si ya existe un componente para eso.**

Antes de escribir `<button>`, `<h1>`, `<section>`, `<div class="card">` o cualquier elemento HTML,
revisa esta lista. Si existe un componente que hace lo que necesitas, USALO.

```svelte
<!-- MAL: HTML crudo -->
<button class="btn-primary">Click</button>
<h1 class="text-4xl font-bold">Titulo</h1>
<div class="card"><p>Contenido</p></div>

<!-- BIEN: componentes existentes -->
<Button variant="primary">Click</Button>
<Heading level={1}>Titulo</Heading>
<Card><Text>Contenido</Text></Card>
```

### Catalogo completo de componentes disponibles

| Componente | Import | Props clave |
|-----------|--------|-------------|
| **Button** | `$lib/components/ui/Button.svelte` | `variant="primary\|secondary\|ghost\|outline\|link" size="sm\|md\|lg" as="a" disabled loading` |
| **Card** | `$lib/components/ui/Card.svelte` | `variant="default\|soft\|outline" clickable` |
| **Container** | `$lib/components/ui/Container.svelte` | `as="div\|section"` |
| **Section** | `$lib/components/ui/Section.svelte` | `variant="default\|muted\|soft\|surface" id` |
| **Heading** | `$lib/components/ui/Heading.svelte` | `level={1\|2\|3\|4} eyebrow kicker align="left\|center\|right"` |
| **Text** | `$lib/components/ui/Text.svelte` | `variant="body\|muted\|small\|label" align="left\|center\|right"` |
| **Grid** | `$lib/components/ui/Grid.svelte` | `columns={2\|3\|4} gap="1.5rem"` |
| **HeroSection** | `$lib/components/ui/HeroSection.svelte` | `eyebrow title subtitle primaryLabel primaryHref secondaryLabel secondaryHref align` |
| **FeaturesSection** | `$lib/components/ui/FeaturesSection.svelte` | `eyebrow title subtitle items=[{icon,title,description}] id` |
| **Spinner** | `$lib/components/ui/Spinner.svelte` | `size={24}` |
| **Modal** | `$lib/components/ui/Modal.svelte` | `open title onclose` |
| **Skeleton** | `$lib/components/ui/Skeleton.svelte` | `width height borderRadius` |
| **LoadingBlock** | `$lib/components/LoadingBlock.svelte` | `loading message` |
| **CopyButton** | `$lib/components/CopyButton.svelte` | `text label` |
| **Newsletter** | `$lib/components/Newsletter.svelte` | `title subtitle action buttonLabel` |
| **CookieConsent** | `$lib/components/CookieConsent.svelte` | _(sin props, automatico)_ |
| **ThemeToggle** | `$lib/components/ThemeToggle.svelte` | _(sin props)_ |
| **ToastContainer** | `$lib/components/ToastContainer.svelte` | _(sin props, automatico)_ |
| **Analytics** | `$lib/components/Analytics.svelte` | `id src` |
| **LiveChat** | `$lib/components/LiveChat.svelte` | `provider="crisp\|intercom"` |
| **AiPrompt** | `$lib/components/AiPrompt.svelte` | `placeholder message maxLength` |
| **JsonLd** | `$lib/components/JsonLd.svelte` | `type headline datePublished dateModified` |

### Stores y utilidades disponibles

```ts
import { toast } from '$lib/stores/toast';
toast('Mensaje', 'success');  // success | error | info | warning

import { dark, toggleDark, initDarkMode } from '$lib/stores/darkMode';
// dark: store booleano, toggleDark(): alterna, initDarkMode(): inicia

import { clickOutside } from '$lib/actions/clickOutside';
// use:clickOutside={fn}  → ejecuta fn al clickear fuera

import { t, locale, setLocale } from '$lib/i18n/index';
// {$t('clave')} para traducir, setLocale('es'|'en')

import { seo, setSeo } from '$lib/seo';
// setSeo({ title, description, ogImage, ... })

import { reveal } from '$lib/reveal';
// use:reveal={{ stage: 'title'|'content', delay: 120 }}
```

### SI el componente que necesitas NO existe en esta lista

Entonces sí, créalo. Pero:
1. Ponlo en `src/lib/components/` (o `ui/` si es genérico)
2. Usa `<script lang="ts">` con `$props<{...}>()`
3. Usa las variables CSS globales (`--accent`, `--text-main`, `--bg-main`, etc.)
4. NO uses Tailwind (no está instalado)
5. NO crees estilos globales nuevos sin necesidad

---

### Regla de oro
SIEMPRE lee `src/lib/site-config.ts` antes de tocar nombres, links o SEO.
SIEMPRE usa los componentes de arriba en vez de crear HTML desde cero.
SIEMPRE traduce textos con `$t('clave')` del sistema i18n SI LA PAGINA USA i18n.


### Estructura clave
| Carpeta | Proposito |
|---------|-----------|
| `src/routes/` | Paginas (filesystem routing) |
| `src/lib/components/ui/` | Componentes base (Button, Card, Hero...) |
| `src/lib/components/` | Componentes de proyecto |
| `src/lib/i18n/` | Traducciones ES/EN |
| `src/lib/server/` | Codigo solo servidor (Sanity, APIs) |
| `src/app.css` | CSS global y variables de tema |
| `static/` | Archivos estaticos (imagenes, fuentes) |

### Patrones Svelte 5 obligatorios
```svelte
<script lang="ts">
  // Props tipadas - ASI se hace en Svelte 5
  const { titulo, items = [] } = $props<{ titulo: string; items?: string[] }>();

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

### CSS
- Variables globales en `app.css`: `--accent`, `--text-main`, `--bg-main`
- Estilos scoped en cada componente: `<style>...</style>`
- NO Tailwind (a menos que el usuario lo añada explicitamente)

### SEO
```ts
import { setSeo } from '$lib/seo';
setSeo({ title: '...', description: '...', ogImage: '...' });
```

### i18n (si la pagina lo usa)
```svelte
import { t } from '$lib/i18n/index';
{$t('clave.del.json')}
```

### Al crear paginas nuevas
1. `src/routes/mi-pagina/+page.svelte`
2. `<script lang="ts">` arriba
3. `setSeo(...)` para SEO
4. Si carga datos: `+page.ts` con `load()`
5. `+page.svelte` NUNCA usa `async` - la carga de datos va en `+page.ts`

### Al crear componentes nuevos
1. Tipa las props con `$props<{...}>()`
2. Estilos scoped en `<style>`
3. Si es generico → `src/lib/components/ui/`
4. Si es especifico → `src/lib/components/`
