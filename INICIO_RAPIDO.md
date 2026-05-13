# My SvelteKit Starter - Tu web en 2 minutos

**[English → QUICK_START.md](QUICK_START.md)**

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
2. `src/lib/i18n/es.json` y `en.json` — textos de la **home** (`home.*`), menú (`layout.nav.*`) y footer.

## Paso 4: Colores y tema
Edita `src/app.css` (`--primary`, `--background`, …) y, si usas la estética Stitch/M3, revisa `src/lib/styles/stitch-m3.css`.

## Paso 5: Desplegar
GitHub → Vercel/Netlify → listo.

---

## Scripts útiles

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor local |
| `npm run build` | Build producción |
| `npm run check` | TypeScript + Svelte (0 errores, 0 warnings) |
| `npm run lint` | ESLint + Prettier |
| `npm run format` | Formatear código |
| `npm run test` | Tests |
| `npm run new:page nombre` | Crear página |
| `npm run studio` | Sanity Studio (opcional; CMS) |

---

## Rutas incluidas

| Ruta | Qué es |
|------|--------|
| `/` | Home |
| `/components` | Galería UI + demos (about, pricing, faq, SSR, blog, formulario) |
| `/about`, `/pricing`, `/faq`, `/blog`, `/blog/primer-post`, `/ssr-demo`, `/contacto` | Redirigen (307) a anclas en `/components` |
| `/api/og?title=Hola` | OG image dinámica |

---

## Skills extra para la IA (opcional)

```bash
npx autoskills
```

Añade skills según tu proyecto (Cursor, Claude Code, etc.). Más contexto en `INSTRUCCIONES.txt` (English: **`INSTRUCTIONS.txt`**).

---

## Archivos que más vas a tocar

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
- **shadcn-svelte** (componentes UI en `src/lib/components/ui/`, patrón oficial de código en repo + **bits-ui**)
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

| Archivo | Para qué sirve |
|---------|----------------|
| `AGENTS.md` | Instrucciones para ChatGPT, Claude, Copilot |
| `PROMPTS.md` | Snippets copy-paste para pedirle a la IA |
| `DESIGN_TO_CURSOR.md` | De Stitch/Lovable a esta plantilla: tokens, prompt y checklist |
