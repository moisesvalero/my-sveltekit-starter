/** Media types we can serve for content negotiation. */
export type ServedMediaType = 'text/markdown' | 'text/html';

interface AcceptEntry {
  type: string;
  subtype: string;
  q: number;
}

function parseAcceptHeader(header: string | null): AcceptEntry[] {
  if (!header?.trim()) return [];

  return header
    .split(',')
    .map((part) => {
      const [rawType, ...params] = part.trim().split(';');
      const [type = '*', subtype = '*'] = rawType.trim().toLowerCase().split('/');
      let q = 1;
      for (const param of params) {
        const [key, value] = param.trim().split('=');
        if (key === 'q' && value) {
          const parsed = Number.parseFloat(value);
          if (!Number.isNaN(parsed)) q = parsed;
        }
      }
      return { type, subtype, q };
    })
    .filter((e) => e.q > 0)
    .sort((a, b) => {
      if (b.q !== a.q) return b.q - a.q;
      const specA = a.type === '*' ? 0 : 1;
      const specB = b.type === '*' ? 0 : 1;
      return specB - specA;
    });
}

function matches(entry: AcceptEntry, mediaType: string): boolean {
  const [type, subtype] = mediaType.toLowerCase().split('/');
  if (entry.type === '*' && entry.subtype === '*') return true;
  if (entry.type !== type) return false;
  return entry.subtype === '*' || entry.subtype === subtype;
}

/** True when the client prefers `text/markdown` over `text/html`. */
export function prefersMarkdown(acceptHeader: string | null): boolean {
  const entries = parseAcceptHeader(acceptHeader);
  if (entries.length === 0) return false;

  let bestMarkdown = -1;
  let bestHtml = -1;

  for (const entry of entries) {
    if (matches(entry, 'text/markdown')) bestMarkdown = Math.max(bestMarkdown, entry.q);
    if (matches(entry, 'text/html')) bestHtml = Math.max(bestHtml, entry.q);
    if (entry.type === '*' && entry.subtype === '*') {
      bestMarkdown = Math.max(bestMarkdown, entry.q * 0.1);
      bestHtml = Math.max(bestHtml, entry.q);
    }
  }

  return bestMarkdown > bestHtml;
}

/** True when neither HTML nor Markdown (nor wildcard) is acceptable. */
export function isNotAcceptable(acceptHeader: string | null): boolean {
  const entries = parseAcceptHeader(acceptHeader);
  if (entries.length === 0) return false;

  const canHtml = entries.some(
    (e) => matches(e, 'text/html') || (e.type === '*' && e.subtype === '*')
  );
  const canMarkdown = entries.some((e) => matches(e, 'text/markdown'));
  return !canHtml && !canMarkdown;
}
