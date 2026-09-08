import { dev } from '$app/environment';
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SITE_LOCALE_COOKIE, type SiteLocale } from '$lib/i18n/site-locale';

export const POST: RequestHandler = async ({ request, cookies }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    throw error(400, 'JSON invalido');
  }
  const loc = (body as { locale?: string })?.locale;
  if (loc !== 'es' && loc !== 'en') {
    throw error(400, 'locale debe ser es o en');
  }
  const locale = loc as SiteLocale;
  cookies.set(SITE_LOCALE_COOKIE, locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    sameSite: 'lax',
    secure: !dev
  });
  return json({ ok: true, locale });
};
