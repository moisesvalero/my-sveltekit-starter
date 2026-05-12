# De Stitch / Lovable (u otro) → esta plantilla en Cursor

Flujo pensado: **diseñas o prototipas fuera** (Stitch, Lovable, Framer export, HTML de referencia…) y **implementas aquí** con el agente para acercarte al diseño **todo lo que permitan tokens + layout**.

---

## ¿Es buena idea?

**Sí**, como proceso: una referencia visual/clara reduce improvisación y acelera decisiones.  
**No** esperes “pixel perfect” máquina-solo al 100 %: las herramientas exportan otro stack (React/HTML crudo), otros nombres de clase y a veces otros breakpoints. Lo que sí puedes exigir es **paridad muy alta** si aportas referencia + criterios.

---

## Qué aportar siempre al agente

1. **Referencia visual** — Captura del resultado objetivo (o URL si es estable), idealmente **desktop + mobile**.
2. **HTML/CSS o código exportado** — Pégalo en el chat o en un archivo temporal del repo (luego borras lo que no necesites).
3. **Tokens del diseño** — Colores hex, radios, sombras, tipografías y tamaños clave (o captura del panel de tema).
4. **Prioridad** — Qué debe ser idéntico sí o sí (hero, nav, pricing) vs. “puede variar un poco”.
5. **Alcance** — Solo home, solo `/pricing`, o site completo.

---

## Dónde encaja esta plantilla

| Objetivo | Dónde tocar |
|----------|-------------|
| Colores y tema global | `src/app.css`, variables shadcn (`--primary`, `--background`, …) |
| Tipografía / utilidades tipo Stitch | `src/lib/styles/stitch-m3.css` (`text-h1`, `font-h3`, …) |
| Copy por idioma | `src/lib/i18n/es.json`, `en.json` |
| Marca y enlaces | `src/lib/site-config.ts` |
| Maquetación por página | `src/routes/.../+page.svelte` |
| Componentes reutilizables | `src/lib/components/ui/` (shadcn) y `src/lib/components/` |

El agente debe **mapear** el diseño exportado a **componentes existentes** (`Button`, `Card`, `Section`, …), no dejar un volcado de `<div>` sin revisar.

---

## Prompt base (cópialo en Cursor)

```
Tengo una referencia hecha en [Stitch / Lovable / …].
Adjunto: [pega HTML/CSS o describe capturas].

Objetivo: implementar en ESTE repo SvelteKit 5 la misma composición visual lo más fiel posible.

Reglas obligatorias:
- Usa solo componentes del catálogo en AGENTS.md (Button, Card, Section, Heading, etc.).
- Tailwind v4 + tokens en app.css y stitch-m3.css donde aplique.
- No inventes rutas nuevas salvo que yo las pida.
- Mantén i18n: textos visibles en es.json / en.json con claves nuevas bajo home.* o la página que toque.
- Tras cambios: npm run check debe pasar.

Orden de trabajo:
1) Lista diferencias visual→token (colores, tipo, espaciados).
2) Propón cambios por archivo.
3) Implementa y resume qué quedó igual al diseño y qué se aproximó.
```

---

## Checklist rápido después del agente

- [ ] `npm run check` sin errores  
- [ ] Vista mobile y desktop comparadas con la referencia  
- [ ] Contraste y foco accesible en botones y enlaces  
- [ ] Textos en ES/EN si la página usa `$t()`

---

## Lecturas relacionadas

- **`AGENTS.md`** — Catálogo de componentes y convenciones  
- **`PROMPTS.md`** — Snippets; busca la sección del mismo flujo  
- **`.cursor/rules`** — Reglas cortas que Cursor carga en contexto  
