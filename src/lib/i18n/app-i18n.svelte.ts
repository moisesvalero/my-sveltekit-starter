import en from './en.json';
import es from './es.json';

export type AppLocale = 'en' | 'es';

const translations: Record<AppLocale, typeof en> = { en, es };

function normalizeLocale(lang: string | null | undefined): AppLocale {
  if (!lang) return 'en';
  const lower = lang.toLowerCase();
  if (lower.startsWith('es')) return 'es';
  return 'en';
}

let currentLocale = $state<AppLocale>('es');

if (typeof document !== 'undefined') {
  document.documentElement.lang = currentLocale;
}

/** Lectura reactiva del locale (Svelte 5 / runes). */
export function getLocale(): AppLocale {
  return currentLocale;
}

export function applyLocale(lang: string): void {
  const normalized = normalizeLocale(lang);
  currentLocale = normalized;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', normalized);
    localStorage.setItem('lang_manual', '1');
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = normalized;
  }
  /**
   * Propaga el cambio al servidor para que SSR/sitemap/llms.txt vean el idioma correcto
   * en la próxima navegación. Fire-and-forget; si la red falla el cliente sigue OK.
   */
  if (typeof fetch !== 'undefined' && typeof window !== 'undefined') {
    void fetch('/api/locale', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale: normalized })
    }).catch(() => {});
  }
}

/** Traducción; al leer `currentLocale` reacciona el UI que llame a `t(...)`. */
export function t(key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[currentLocale];
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  return typeof value === 'string' ? value : key;
}
