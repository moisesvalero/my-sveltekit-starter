export type SiteLocale = 'es' | 'en';

export const SITE_LOCALES: SiteLocale[] = ['es', 'en'];
export const LOCALE_LOAD_DEPENDENCY = 'app:locale' as const;
export const PORTFOLIO_LOCALE_COOKIE = 'portfolio_locale';

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

/** Locale para SSR/AEO: cookie manual → Accept-Language → `es`. */
export function resolveRequestLocale(event: {
  cookies: { get: (name: string) => string | undefined };
  request: Request;
}): SiteLocale {
  const cookieLang = parseSiteLocaleCookie(event.cookies.get(PORTFOLIO_LOCALE_COOKIE));
  if (cookieLang) return cookieLang;
  const accept = event.request.headers.get('accept-language') || '';
  if (accept.toLowerCase().startsWith('en')) return 'en';
  return 'es';
}
