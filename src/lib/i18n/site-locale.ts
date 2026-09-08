export type SiteLocale = 'es' | 'en';

export const SITE_LOCALES: SiteLocale[] = ['es', 'en'];
export const LOCALE_LOAD_DEPENDENCY = 'app:locale' as const;
export const SITE_LOCALE_COOKIE = 'site_locale';

export function parseSiteLocaleCookie(value: string | null | undefined): SiteLocale | null {
  if (!value) return null;
  const v = value.trim().toLowerCase();
  if (v === 'en') return 'en';
  if (v === 'es') return 'es';
  return null;
}

export function resolveSiteLocale(cookieValue: string | null | undefined): SiteLocale {
  return parseSiteLocaleCookie(cookieValue) ?? 'es';
}

/** Locale para SSR/AEO: cookie manual (site_locale o portfolio_locale) → Accept-Language → `es`. */
export function resolveRequestLocale(event: {
  cookies: { get: (name: string) => string | undefined };
  request: Request;
}): SiteLocale {
  const cookieLang =
    parseSiteLocaleCookie(event.cookies.get(SITE_LOCALE_COOKIE)) ??
    parseSiteLocaleCookie(event.cookies.get('portfolio_locale'));
  if (cookieLang) return cookieLang;
  const accept = event.request.headers.get('accept-language') || '';
  if (accept.toLowerCase().startsWith('en')) return 'en';
  return 'es';
}
