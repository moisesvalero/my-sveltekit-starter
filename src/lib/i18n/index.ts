/**
 * i18n: estado en `app-i18n.svelte.ts` (runes) + stores derivados para que
 * `$t` y `$locale` sigan funcionando en toda la plantilla (Svelte 5).
 */
import { derived, writable } from 'svelte/store';
import { applyLocale, getLocale, t as translate } from './app-i18n.svelte.ts';

const tick = writable(0);

export function setLocale(lang: string): void {
  applyLocale(lang);
  tick.update((n) => n + 1);
}

/** Compatible con `$locale` en plantillas. */
export const locale = derived(tick, () => getLocale());

/** Compatible con `$t('clave')` — al cambiar `tick` se emite un traductor nuevo y el UI se actualiza. */
export const t = derived(tick, () => (key: string) => translate(key));
