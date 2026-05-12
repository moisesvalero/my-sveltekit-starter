# PROMPTS.md - Snippets para pedirle a la IA

Copia y pega estos snippets en ChatGPT, Claude o Cursor para generar paginas y componentes
que sigan las convenciones de esta plantilla.

---

## Crear una pagina nueva

```
Crea una pagina de [tipo: landing / about / servicios] en Svelte 5 para mi proyecto SvelteKit.
Usa runes ($state, $props, $derived, $effect).
Usa estos componentes existentes: Container, Section, Heading, Text, Grid, Card, Button.
Usa Tailwind para estilos (ya esta instalado).
Añade setSeo({ title, description }) al inicio del script.
La pagina debe estar en +page.svelte.
Si cargas datos del servidor, usa +page.ts con export async function load().
Si la pagina usa traducciones, importa { t } from '$lib/i18n/index'.
```

## Crear un componente nuevo

```
Crea un componente [nombre] en Svelte 5 para mi proyecto.
Usa <script lang="ts"> con props tipadas asi: let { titulo }: { titulo: string } = $props(); (no uses $props con generic).
Usa $state() para estado local.
Usa $derived() para valores derivados.
Usa Tailwind para estilos.
Ponlo en src/lib/components/[nombre].svelte.
Si es un componente UI generico, ponlo en src/lib/components/ui/.
Si el componente necesita slots, usa snippets: {#snippet name()} {@render name()}
```

## Crear una landing completa

```
Crea una landing page completa en +page.svelte para [producto/servicio].
Usa Svelte 5 con runes. Reutiliza patrones de esta repo:
- Textos en src/lib/i18n/es.json y en.json bajo claves home.* (hero, features, steps, cta).
- En +page.svelte usa {$t('home.hero.title')} etc. y $effect + setSeo para SEO al cambiar idioma.
- Componentes UI desde $lib/components/ui (Button, Card, … estilo shadcn-svelte).
Incluye setSeo({ title, description }) y Tailwind; tokens en app.css / stitch-m3.css si aplica.
```

## Crear un formulario con SvelteKit actions

```
Crea un formulario de contacto en SvelteKit con actions.
Crea +page.server.ts con: export const actions = { default: async ({ request }) => {...} }
En el servidor valida name, email (regex), message.
Devuelve fail(400, { error: '...' }) si hay error, o { success: true } si OK.
En +page.svelte recibe form via $props y muestra errores o exito.
Inicializa los campos con $state(untrack(() => form?.campo ?? '')).
Usa { toast } from '$lib/stores/toast' para notificaciones.
```

## Crear una pagina con datos del servidor (SSR)

```
Crea una pagina SSR en SvelteKit que cargue datos del servidor.
En +page.ts crea: export async function load() que devuelva datos.
En +page.svelte recibe los datos via let { data } = $props().
Muestra los datos en Cards con Grid.
Añade setSeo con title y description.
Usa Container, Section, Heading, Text para el layout.
```

## Añadir SEO a una pagina existente

```
Añade SEO completo a esta pagina:
- Importa import { setSeo } from '$lib/seo'
- Llama setSeo({ title, description, ogTitle, ogDescription, ogImage, canonical, twitterCard })
- Añade <svelte:head> con las meta tags leyendo $seo
```

## Usar i18n (traducciones)

```
Añade soporte i18n a esta pagina/componente:
- Importa import { t } from '$lib/i18n/index'
- Sustituye todos los textos fijos por {$t('clave.nueva')}
- Añade las claves a src/lib/i18n/es.json y en.json
```

## Conectar Supabase Auth

```
Conecta Supabase Auth a mi proyecto SvelteKit.
Usa src/lib/server/supabase/client.ts para el cliente.
Crea una pagina de login con formulario email/password.
Usa SvelteKit actions en +page.server.ts.
Muestra el estado de autenticacion (logueado / no logueado).
```

## Conectar Sanity CMS

```
Configura Sanity CMS en mi proyecto SvelteKit.
Hay codigo de ejemplo bajo src/lib/server/sanity/ (cliente GROQ, tipos). Revisa que los archivos existan en tu rama y anade SANITY_* en .env si los usas.
Variables tipicas: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION, SANITY_READ_TOKEN (opcional).
```

## Igualar un diseño de Stitch / Lovable (paridad visual)

```
Vengo de [Stitch / Lovable / otro] con esta referencia:
[Pega HTML/CSS exportado o describe capturas desktop+móvil].

Implementa en esta plantilla Svelte 5 + Tailwind v4 la misma composición lo más fiel posible.
- Usa solo componentes del AGENTS.md (Button, Card, Section, Heading, Grid…).
- Mapea colores y tipo a src/app.css y src/lib/styles/stitch-m3.css.
- Textos visibles en es.json/en.json si la página usa i18n.
- Al final: npm run check sin errores y lista qué quedó 1:1 vs aproximado.

Lee DESIGN_TO_CURSOR.md del repo si necesitas el orden de trabajo.
```

## Debuggear / Arreglar errores

```
Mi proyecto SvelteKit da este error: [pega el error aqui].
El proyecto usa Svelte 5 con runes, SvelteKit 2, TypeScript, Tailwind CSS v4.
Los componentes estan en src/lib/components/ui/ (shadcn-svelte) y src/lib/components/ (custom).
Ejecuta npm run check para ver errores de tipo.
Revisa el error y dime como arreglarlo.
```