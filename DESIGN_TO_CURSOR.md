# From Stitch / Lovable (or similar) → this template in Cursor

**Flow:** you **design or prototype elsewhere** (Stitch, Lovable, Framer export, reference HTML…) and **implement here** with the agent to get as close as **tokens + layout** allow.

---

## Is this a good idea?

**Yes**, as a process: a clear visual reference cuts guesswork and speeds decisions.  
**No**, don’t expect 100% “pixel perfect” on autopilot: exporters use another stack (React/raw HTML), different class names, and sometimes different breakpoints. You *can* aim for **very high parity** if you provide reference + criteria.

---

## Always give the agent

1. **Visual reference** — Screenshot of the target (or a stable URL), ideally **desktop + mobile**.
2. **HTML/CSS or exported code** — Paste in chat or a temporary file in the repo (delete what you don’t need).
3. **Design tokens** — Hex colors, radii, shadows, key type sizes (or a screenshot of the theme panel).
4. **Priority** — What must match exactly (hero, nav, pricing) vs. what can drift slightly.
5. **Scope** — Home only, `/pricing` only, or full site.

---

## Where this template fits

| Goal | Where to edit |
|------|----------------|
| Global colors & theme | `src/app.css`, shadcn variables (`--primary`, `--background`, …) |
| Typography / Stitch-like utilities | `src/lib/styles/stitch-m3.css` (`text-h1`, `font-h3`, …) |
| Copy per language | `src/lib/i18n/es.json`, `en.json` |
| Brand & links | `src/lib/site-config.ts` |
| Page layout | `src/routes/.../+page.svelte` |
| Reusable UI | `src/lib/components/ui/` (shadcn) and `src/lib/components/` |

The agent should **map** exported design to **existing components** (`Button`, `Card`, `Section`, …), not leave a wall of unreviewed `<div>`s.

---

## Base prompt (copy into Cursor)

```
I have a reference built in [Stitch / Lovable / …].
Attached: [paste HTML/CSS or describe screenshots].

Goal: implement the same visual composition in THIS SvelteKit 5 repo as faithfully as possible.

Hard rules:
- Use only components from the catalog in AGENTS.md (Button, Card, Section, Heading, etc.).
- Tailwind v4 + tokens in app.css and stitch-m3.css where relevant.
- Do not invent new routes unless I ask.
- Keep i18n: visible strings in es.json / en.json with new keys under home.* or the page you touch.
- After changes: npm run check must pass.

Work order:
1) List visual→token differences (colors, type, spacing).
2) Propose changes file by file.
3) Implement and summarize what matches the design vs. what was approximated.
```

---

## Quick checklist after the agent

- [ ] `npm run check` clean  
- [ ] Mobile and desktop compared to the reference  
- [ ] Accessible contrast and focus on buttons and links  
- [ ] ES/EN copy if the page uses `$t()`

---

## Related docs

- **`AGENTS.md`** — Component catalog and conventions  
- **`PROMPTS.md`** — Snippets; same flow in a dedicated section  
- **`.cursor/rules`** — Short rules Cursor loads into context  
