# PROMPTS.md - Snippets para pedirle a la IA

Copia y pega estos snippets en ChatGPT, Claude o Cursor para generar paginas y componentes
que sigan las convenciones de esta plantilla.

---

## Crear una pagina nueva

```
Crea una pagina de [tipo: landing / about / servicios] en Svelte 5 para mi proyecto SvelteKit.
Usa runes ($state, $props, $derived).
Usa estos componentes existentes: Container, Section, Heading, Text, Grid, Card, Button.
NO uses HTML crudo. NO uses Tailwind.
Los colores se definen con CSS variables: --accent, --text-main, --bg-main.
Añade setSeo({ title, description }) al inicio del script.
La pagina debe estar en +page.svelte.
```

## Crear un componente nuevo

```
Crea un componente [nombre] en Svelte 5 para mi proyecto.
Usa <script lang="ts"> con $props<{...}>() para las props.
Usa $state() para estado local.
Estilos scoped en <style> con variables CSS (--accent, --text-main, --bg-main).
Ponlo en src/lib/components/[nombre].svelte.
NO uses Tailwind. NO uses HTML crudo si existe un componente que lo reemplace.
```

## Crear una landing completa

```
Crea una landing page completa en +page.svelte para [producto/servicio].
Usa Svelte 5 con runes. Incluye estas secciones:
- Hero (usa el componente HeroSection)
- Features (usa FeaturesSection con items)
- Testimonios (usa Grid + Card)
- Pricing (3 columnas con Card)
- FAQ (acordeon con $state)
- CTA final
Usa Container, Section, Heading, Text, Grid, Card, Button.
Añade setSeo con title, description, ogImage.
Traduce con $t('clave') desde i18n si la pagina usa traducciones.
```

## Crear un formulario con SvelteKit actions

```
Crea un formulario de contacto en SvelteKit con actions.
Crea +page.server.ts con la funcion actions = { default: async ({ request }) => {...} }.
En el servidor valida name, email (regex), message.
Devuelve fail(400, {...}) si hay error, o { success: true } si OK.
En +page.svelte recibe form via $props y muestra errores o exito.
Usa $state() para los campos del form.
Muestra un toast con import { toast } from '$lib/stores/toast'.
```

## Crear una pagina con datos del servidor (SSR)

```
Crea una pagina SSR en SvelteKit que cargue datos del servidor.
En +page.ts crea export async function load() que devuelva datos.
En +page.svelte recibe los datos via let { data } = $props().
Muestra los datos en Cards con Grid.
Añade setSeo con title y description.
```

## Añadir SEO a una pagina existente

```
Añade SEO completo a esta pagina:
- Importa import { seo, setSeo } from '$lib/seo'
- Llama setSeo({ title, description, ogTitle, ogDescription, ogImage, canonical, twitterCard, schemaType, headline, datePublished })
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

## Debuggear / Arreglar errores

```
Mi proyecto SvelteKit da este error: [pega el error aqui].
El proyecto usa Svelte 5 con runes, SvelteKit 2, TypeScript.
No usa Tailwind. Los componentes estan en src/lib/components/ui/.
Revisa el error y dime como arreglarlo.
```
