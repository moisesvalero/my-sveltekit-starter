import { env } from '$env/dynamic/public';
import { writable } from 'svelte/store';
import { siteConfig } from '$lib/site-config';

const DEFAULT_SITE_URL = 'http://localhost:5173';
const baseUrl = new URL(env.PUBLIC_SITE_URL || DEFAULT_SITE_URL).toString().replace(/\/$/, '');

/**
 * Estado SEO/GEO centralizado para toda la app.
 *
 * Lo consume el `+layout.svelte` para inyectar:
 *  - <title>, <meta name="description">
 *  - Open Graph (og:*) y Twitter Cards completos
 *  - <link rel="canonical">
 *  - JSON-LD (delegado a `JsonLd.svelte` con los campos `headline`, `datePublished`,
 *    `dateModified`, `faq`, `howto`, `articleSection`, etc.)
 *
 * Cada ruta debe llamar a `setSeo({...})` en un `$effect` dentro de su +page.svelte,
 * idealmente leyendo de i18n para que ES/EN se sincronicen al cambiar locale.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export type SchemaType =
  | 'WebSite'
  | 'WebPage'
  | 'Article'
  | 'BlogPosting'
  | 'Product'
  | 'SoftwareApplication'
  | 'FAQPage'
  | 'HowTo'
  | 'CollectionPage'
  | 'AboutPage'
  | 'ContactPage';

export interface SeoState {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  ogType: 'website' | 'article' | 'product';
  twitterCard: 'summary' | 'summary_large_image';
  twitterCreator: string;
  canonical: string;
  schemaType: SchemaType;
  headline: string;
  datePublished: string;
  dateModified: string;
  author: string;
  keywords: string[];
  locale: string;
  /** Lista de preguntas/respuestas: si está presente, JsonLd inyecta FAQPage. */
  faq: FaqItem[];
  /** Pasos para JSON-LD HowTo (los 4 steps del home, por ejemplo). */
  howto: HowToStep[];
  /** Nombre del producto/aplicación cuando se quiere SoftwareApplication. */
  softwareName: string;
  /** Categoría de la aplicación (BusinessApplication, DeveloperApplication, etc.). */
  softwareCategory: string;
}

export const defaultSeo: SeoState = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.tagline,
  ogTitle: `${siteConfig.name} | ${siteConfig.tagline}`,
  ogDescription: siteConfig.tagline,
  ogImage: `${baseUrl}${siteConfig.ogImage}`,
  ogUrl: baseUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterCreator: '',
  canonical: baseUrl,
  schemaType: 'WebSite',
  headline: '',
  datePublished: '',
  dateModified: '',
  author: siteConfig.author.name,
  keywords: [],
  locale: 'es',
  faq: [],
  howto: [],
  softwareName: '',
  softwareCategory: ''
};

export const seo = writable<SeoState>(defaultSeo);

/** Mezcla parcial sobre los valores por defecto; pensado para llamarse desde +page.svelte. */
export const setSeo = (data: Partial<SeoState> = {}) => {
  seo.set({
    ...defaultSeo,
    ...data
  });
};

/** URL absoluta del endpoint OG dinámico (SVG hoy, fácil de migrar a PNG). */
export function generateOgImageUrl(title: string): string {
  const text = encodeURIComponent(title.slice(0, 80));
  return `${baseUrl}/api/og?title=${text}`;
}

/** Base URL pública sin slash final, expuesta para que sitemap/llms.txt no la recalculen. */
export const PUBLIC_BASE_URL = baseUrl;
