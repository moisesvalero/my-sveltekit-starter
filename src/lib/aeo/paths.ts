/** Normalize pathname: no trailing slash except root. */
export function normalizePathname(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  return pathname.replace(/\/$/, '') || '/';
}

/** Markdown twin URL for an HTML path (`/` → `/index.md`). */
export function markdownTwinPath(htmlPath: string): string {
  const path = normalizePathname(htmlPath);
  if (path === '/') return '/index.md';
  return `${path}.md`;
}

/** HTML path from a twin URL, or null if not a twin path. */
export function htmlPathFromMdUrl(pathname: string): string | null {
  const path = normalizePathname(pathname);
  if (!path.endsWith('.md')) return null;
  if (path === '/index.md') return '/';
  return path.slice(0, -3) || '/';
}

/** True when the request targets a `.md` twin URL. */
export function isMarkdownTwinUrl(pathname: string): boolean {
  return htmlPathFromMdUrl(pathname) !== null;
}
