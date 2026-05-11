# My SvelteKit Starter — Tu web en 2 minutos

## Paso 1: Instalar
```bash
npm install
```

## Paso 2: Arrancar  
```bash
npm run dev
```
Abre `http://localhost:5173`. ❌ No necesitas copiar `.env`. Ya funciona en local.

## Paso 3: Personalizar
Edita **UN solo archivo**: `src/lib/site-config.ts`
Ahi cambias nombre, dominio, redes sociales, menu de navegacion, creditos.

## Paso 4: Cambiar colores
Edita `src/app.css`, busca `--accent` y pon tu color.

## Paso 5: Desplegar
Sube a GitHub → conéctalo a Vercel → listo.

---

### Scripts utiles

| Comando | Que hace |
|---------|----------|
| `npm run dev` | Arranca el servidor local |
| `npm run new:page nombre` | Crea una pagina nueva automaticamente |
| `npm run build` | Genera version de produccion |
| `npm run clean` | Borra paginas de ejemplo, deja solo la home |
| `npm run check` | Revisa errores TypeScript + Svelte |
| `npm run lint` | Revisa estilo de codigo |
| `npm run format` | Formatea todo el codigo |
| `npm run test` | Ejecuta tests |

---

### Rutas incluidas
| Ruta | Que es |
|------|--------|
| `/` | Home |
| `/about` | Sobre nosotros |
| `/pricing` | Precios |
| `/faq` | Preguntas frecuentes |
| `/blog` | Blog con Markdown |
| `/contacto` | Formulario con validacion server-side |
| `/components` | Galeria de todos los componentes |
| `/ssr-demo` | Ejemplo SSR con load() |
| `/examples/landing` | Landing completa |
| `/api/hello` | API endpoint de ejemplo |
| `/api/og?title=Hola` | OG image dinamica |

---

### Para IAs y vibe coders

| Archivo | Para que sirve |
|---------|---------------|
| `.cursor/rules` | Instrucciones para Cursor AI |
| `AGENTS.md` | Instrucciones para ChatGPT, Claude, Copilot |
| `PROMPTS.md` | Snippets copy-pasteables para pedirle a la IA |

Para mas ayuda de IA:
```bash
npx autoskills
```

---

### Solo necesitas tocar estos archivos
- `src/lib/site-config.ts` → UNICO archivo de configuracion
- `src/routes/+page.svelte` → tu home
- `src/app.css` → colores
- `src/lib/i18n/es.json` y `en.json` → textos
