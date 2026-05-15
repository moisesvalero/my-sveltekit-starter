import { pagesWithTwins, type SupportedLocale } from '$lib/site-pages';
import { getPublicBaseUrl } from './builders/full-site';
import { buildComponentsMarkdown } from './builders/components';
import { buildHomeMarkdown } from './builders/home';
import { normalizePathname } from './paths';

type MarkdownBuilder = (locale: SupportedLocale, baseUrl: string) => string;

const builders: Record<string, MarkdownBuilder> = {
  '/': buildHomeMarkdown,
  '/components': buildComponentsMarkdown
};

const twinPaths = new Set(pagesWithTwins().map((p) => normalizePathname(p.path)));

export function hasMarkdownTwin(pathname: string): boolean {
  return twinPaths.has(normalizePathname(pathname));
}

export function getPageMarkdown(pathname: string, locale: SupportedLocale): string | null {
  const path = normalizePathname(pathname);
  const builder = builders[path];
  if (!builder || !hasMarkdownTwin(path)) return null;
  return builder(locale, getPublicBaseUrl());
}
