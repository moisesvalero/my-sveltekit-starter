# My SvelteKit Starter — Tu web en 2 minutos

## Paso 1: Instalar
```bash
npm install
```

## Paso 2: Arrancar
```bash
npm run dev
```
Abre `http://localhost:5173`. No necesitas `.env` para local.

## Paso 3: Personalizar marca y textos
1. `src/lib/site-config.ts` — nombre del sitio, URL, enlaces sociales.
2. `src/lib/i18n/es.json` y `en.json` — textos de la **home** (`home.*`), menu (`layout.nav.*`) y footer.

## Paso 4: Colores y tema
Edita `src/app.css` (`--primary`, `--background`, …) y, si usas la estetica Stitch/M3, revisa `src/lib/styles/stitch-m3.css`.

## Paso 5: Desplegar
GitHub → Vercel/Netlify → listo.

---

## Scripts utiles

| Comando | Que hace |
|---------|----------|
| `npm run dev` | Servidor local |
| `npm run build` | Build produccion |
| `npm run check` | TypeScript + Svelte (0 errores, 0 warnings) |
| `npm run lint` | ESLint + Prettier |
| `npm run format` | Formatear codigo |
| `npm run test` | Tests |
| `npm run new:page nombre` | Crear pagina |
| `npm run studio` | Sanity Studio (opcional; CMS) |

---

## Rutas incluidas

| Ruta | Que es |
|------|--------|
| `/` | Home |
| `/about` | Sobre nosotros |
| `/pricing` | Precios |
| `/faq` | Preguntas frecuentes |
| `/blog` | Redirige a `/components#blog-demo`; post ejemplo `/blog/primer-post` (mdsvex) |
| `/contacto` | Redirige a `/components#contact-demo` (formulario demo en la galeria) |
| `/components` | Galeria de componentes + demos blog/contacto |
| `/ssr-demo` | Demo SSR |
| `/api/og?title=Hola` | OG image dinamica |

---

## Archivos que mas vas a tocar

- `src/lib/site-config.ts` — marca y enlaces
- `src/lib/i18n/es.json` y `en.json` — copy de la landing y layout
- `src/routes/+page.svelte` — estructura de la home (clases Tailwind; strings desde `$t('home.…')`)
- `src/app.css` / `src/lib/styles/stitch-m3.css` — tema visual

---

## Tech stack

- **Svelte 5** con runes ($state, $props, $derived, $effect)
- **SvelteKit 2** (filesystem routing, form actions, load functions)
- **TypeScript** strict mode (0 errores, 0 warnings)
- **Tailwind CSS v4** (utility-first, responsive)
- **shadcn-svelte** (componentes UI en `src/lib/components/ui/`, patron oficial de codigo en repo + **bits-ui**)
- **sonner** (toast notifications)
- **mode-watcher** (dark mode)
- **Lucide Svelte** (iconos)

---

## Componentes disponibles

Usa componentes en vez de HTML crudo. Ver lista completa en `AGENTS.md`.

```svelte
<!-- MAL -->
<button class="bg-blue-500 px-4 py-2 rounded">Click</button>

<!-- BIEN -->
<Button variant="default">Click</Button>
```

---

## Para IAs

| Archivo | Para que sirve |
|---------|---------------|
| `AGENTS.md` | Instrucciones para ChatGPT, Claude, Copilot |
| `PROMPTS.md` | Snippets copy-paste para pedirle a la IA |
| `DESIGN_TO_CURSOR.md` | De Stitch/Lovable a esta plantilla: tokens, prompt y checklist |