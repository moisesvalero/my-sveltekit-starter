# PROMPTS.md — Snippets for AI assistants

Copy and paste these snippets into ChatGPT, Claude, or Cursor to generate pages and components
that follow this template’s conventions.

---

## Create a new page

```
Create a [type: landing / about / services] page in Svelte 5 for my SvelteKit project.
Use runes ($state, $props, $derived, $effect).
Use these existing components: Container, Section, Heading, Text, Grid, Card, Button.
Use Tailwind for styles (already installed).
Add setSeo({ title, description }) at the top of the script.
The page must live in +page.svelte.
If you load server data, use +page.ts with export async function load().
If the page uses translations, import { t } from '$lib/i18n/index'.
```

## Create a new component

```
Create a [name] component in Svelte 5 for my project.
Use <script lang="ts"> with typed props like: let { title }: { title: string } = $props(); (do not use $props with a generic type parameter).
Use $state() for local state.
Use $derived() for derived values.
Use Tailwind for styles.
Put it in src/lib/components/[name].svelte.
If it is a generic UI primitive, put it in src/lib/components/ui/.
If the component needs “slots”, use snippets: {#snippet name()} … {@render name()}
```

## Create a full landing page

```
Create a full landing page in +page.svelte for [product/service].
Use Svelte 5 with runes. Reuse patterns from this repo:
- Copy in src/lib/i18n/es.json and en.json under home.* (hero, features, steps, cta).
- In +page.svelte use {$t('home.hero.title')} etc. and $effect + setSeo for SEO when the locale changes.
- UI from $lib/components/ui (Button, Card, … shadcn-svelte style).
Include setSeo({ title, description }) and Tailwind; tokens in app.css / stitch-m3.css if relevant.
```

## Create a form with SvelteKit actions

```
Create a contact form in SvelteKit with actions.
Add +page.server.ts with: export const actions = { default: async ({ request }) => {...} }
On the server validate name, email (regex), message.
Return fail(400, { error: '...' }) on error, or { success: true } on success.
In +page.svelte receive form via $props and show errors or success.
Initialize fields with $state(untrack(() => form?.field ?? '')).
Use { toast } from '$lib/stores/toast' for notifications.
```

## Create a page with server data (SSR)

```
Create an SSR page in SvelteKit that loads server data.
In +page.ts add: export async function load() returning data.
In +page.svelte receive data via let { data } = $props().
Render data in Cards inside Grid.
Add setSeo with title and description.
Use Container, Section, Heading, Text for layout.
```

## Add SEO to an existing page

```
Add full SEO to this page:
- import { setSeo } from '$lib/seo'
- Call setSeo({ title, description, ogTitle, ogDescription, ogImage, canonical, twitterCard })
- Add <svelte:head> meta tags reading $seo
```

## Replicate the SEO + GEO setup in another SvelteKit project

For a full audit + implementation plan that an agent can follow end-to-end on any SvelteKit project, see **`GEO_PLAYBOOK.md`** in this repo. It includes a 10-minute audit checklist, a step-by-step plan, the file map for SvelteKit, and a copy-paste prompt at the bottom.

```
Read GEO_PLAYBOOK.md in this repo and apply the same SEO + GEO setup to my SvelteKit project at [path/repo URL].
Follow the order in the playbook: audit → site-pages registry → cleanup → store → layout → JsonLd → SSR lang → endpoints → pages → validation → docs.
Stack: Svelte 5 + SvelteKit 2 + TypeScript, i18n locales: [es/en], indexable routes: [list or "audit them"].
Start with the audit and show me the report before touching code.
```

## Use i18n (translations)

```
Add i18n support to this page/component:
- import { t } from '$lib/i18n/index'
- Replace all hard-coded strings with {$t('new.key')}
- Add keys to src/lib/i18n/es.json and en.json
```

## Connect Supabase Auth

```
Connect Supabase Auth to my SvelteKit project.
Use src/lib/server/supabase/client.ts for the client.
Create a login page with email/password form.
Use SvelteKit actions in +page.server.ts.
Show auth state (signed in / signed out).
```

## Connect Sanity CMS

```
Configure Sanity CMS in my SvelteKit project.
There is sample code under src/lib/server/sanity/ (GROQ client, types). Verify files exist on your branch and add SANITY_* to .env if you use them.
Typical variables: SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION, SANITY_READ_TOKEN (optional).
```

## Match a Stitch / Lovable design (visual parity)

```
I’m coming from [Stitch / Lovable / other] with this reference:
[Paste exported HTML/CSS or describe desktop + mobile screenshots].

Implement the same composition in this Svelte 5 + Tailwind v4 template as faithfully as possible.
- Use only components listed in AGENTS.md (Button, Card, Section, Heading, Grid…).
- Map colors and typography to src/app.css and src/lib/styles/stitch-m3.css.
- Visible copy in es.json/en.json if the page uses i18n.
- Finish with npm run check clean and list what is 1:1 vs approximated.

Read DESIGN_TO_CURSOR.md in the repo for the recommended workflow.
```

## Debug / fix errors

```
My SvelteKit project shows this error: [paste error here].
The project uses Svelte 5 with runes, SvelteKit 2, TypeScript, Tailwind CSS v4.
Components live in src/lib/components/ui/ (shadcn-svelte) and src/lib/components/ (custom).
Run npm run check for type errors.
Review the error and tell me how to fix it.
```
