/**
 * Registro central de páginas del sitio.
 *
 * Único source of truth que alimenta automáticamente:
 *  - `/sitemap.xml`            (URLs + hreflang)
 *  - `/llms.txt`               (índice para LLMs en formato estándar llmstxt.org)
 *  - `/llms-full.txt`          (versión extendida con contenido)
 *  - JSON-LD BreadcrumbList    (`JsonLd.svelte`)
 *
 * Para añadir una nueva página visible para SEO/GEO basta con:
 *   1. Crear la ruta en `src/routes/...`
 *   2. Añadir una entrada a `sitePages` aquí
 *
 * Las traducciones de título/descripción se leen de i18n (claves `titleKey` / `descKey`)
 * y se resuelven en runtime, así que ES y EN viajan juntos sin duplicar registro.
 */

import en from './i18n/en.json';
import es from './i18n/es.json';

export type SitePageGroup = 'primary' | 'demo' | 'docs';

export interface SitePage {
  /** Path absoluto sin trailing slash (excepto la home, que es '/'). */
  path: string;
  /** Clave i18n del título (`home.seo.title`, etc.). */
  titleKey: string;
  /** Clave i18n de la descripción. */
  descKey: string;
  /** Frecuencia de cambio para sitemap. */
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  /** Prioridad para sitemap (0.0 – 1.0). */
  priority: number;
  /** Agrupación lógica en llms.txt. */
  group: SitePageGroup;
  /** Si es `false`, queda fuera de sitemap/llms (útil para redirects o utilidades). */
  index?: boolean;
}

/**
 * Cualquier ruta listada con `index: false` se respeta como existente pero no se publica
 * para crawlers. Las rutas /about, /pricing, /faq, etc. son redirects 307 a anchors
 * de /components y por eso se omiten del sitemap, pero la home y /components sí entran.
 */
export const sitePages: SitePage[] = [
  {
    path: '/',
    titleKey: 'home.seo.title',
    descKey: 'home.seo.description',
    changefreq: 'weekly',
    priority: 1.0,
    group: 'primary'
  },
  {
    path: '/components',
    titleKey: 'componentsPage.seo.title',
    descKey: 'componentsPage.seo.description',
    changefreq: 'monthly',
    priority: 0.9,
    group: 'primary'
  }
];

/** Locales soportados por el sitio (alineado con `src/lib/i18n`). */
export const supportedLocales = ['es', 'en'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];
export const defaultLocale: SupportedLocale = 'es';

const dictionaries: Record<SupportedLocale, typeof en> = { es, en };

/** Resuelve una clave dotted en un JSON sin lanzar; devuelve `fallback` si no existe. */
export function tFor(locale: SupportedLocale, key: string, fallback = ''): string {
  const parts = key.split('.');
  let value: unknown = dictionaries[locale];
  for (const part of parts) {
    if (value && typeof value === 'object' && part in (value as Record<string, unknown>)) {
      value = (value as Record<string, unknown>)[part];
    } else {
      return fallback;
    }
  }
  return typeof value === 'string' ? value : fallback;
}

/** Páginas publicables (sitemap + llms.txt). */
export function publicPages(): SitePage[] {
  return sitePages.filter((p) => p.index !== false);
}
