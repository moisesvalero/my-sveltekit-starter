# My SvelteKit Starter - up and running in 2 minutes

**[Español → INICIO_RAPIDO.md](INICIO_RAPIDO.md)**

## Step 1: Install
```bash
npm install
```

## Step 2: Run dev
```bash
npm run dev
```
Open `http://localhost:5173`. No `.env` required for local dev.

## Step 3: Branding and copy
1. `src/lib/site-config.ts` — site name, URL, social links.
2. `src/lib/i18n/es.json` and `en.json` — **home** copy (`home.*`), menu (`layout.nav.*`), footer.

## Step 4: Colors and theme
Edit `src/app.css` (`--primary`, `--background`, …) and, for the Stitch/M3 look, `src/lib/styles/stitch-m3.css`.

## Step 5: Deploy
GitHub → Vercel/Netlify → done.

---

## Useful scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run check` | TypeScript + Svelte (0 errors, 0 warnings) |
| `npm run lint` | ESLint + Prettier |
| `npm run format` | Format code |
| `npm run test` | Tests |
| `npm run new:page name` | Scaffold a page |
| `npm run studio` | Sanity Studio (optional CMS) |

---

## Routes included

| Path | What it is |
|------|------------|
| `/` | Home |
| `/components` | UI gallery + demos (about, pricing, faq, SSR, blog, form) |
| `/about`, `/pricing`, `/faq`, `/blog`, `/blog/primer-post`, `/ssr-demo`, `/contacto` | 307 redirects to anchors on `/components` |
| `/api/og?title=Hello` | Dynamic OG image |

---

## Extra AI skills (optional)

```bash
npx autoskills
```

Adds skills for Cursor, Claude Code, etc. More context in **`INSTRUCTIONS.txt`** (Spanish: **`INSTRUCCIONES.txt`**).

---

## Files you’ll touch most

- `src/lib/site-config.ts` — brand and links
- `src/lib/i18n/es.json` and `en.json` — landing and layout copy
- `src/routes/+page.svelte` — home structure (Tailwind classes; strings from `$t('home.…')`)
- `src/app.css` / `src/lib/styles/stitch-m3.css` — visual theme

---

## Tech stack

- **Svelte 5** with runes (`$state`, `$props`, `$derived`, `$effect`)
- **SvelteKit 2** (filesystem routing, form actions, load)
- **TypeScript** strict (0 errors, 0 warnings target)
- **Tailwind CSS v4**
- **shadcn-svelte** (UI under `src/lib/components/ui/`, **bits-ui**)
- **sonner** (toasts)
- **mode-watcher** (dark mode)
- **Lucide Svelte** (icons)

---

## Available components

Prefer components over raw HTML. Full list in **`AGENTS.md`**.

```svelte
<!-- Bad -->
<button class="bg-blue-500 px-4 py-2 rounded">Click</button>

<!-- Good -->
<Button variant="default">Click</Button>
```

---

## For AI assistants

| File | Purpose |
|------|---------|
| `AGENTS.md` | Instructions for ChatGPT, Claude, Copilot |
| `PROMPTS.md` | Copy-paste prompt snippets |
| `DESIGN_TO_CURSOR.md` | Stitch/Lovable → this template: tokens, prompt, checklist |
