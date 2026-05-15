/** Rough token estimate for AEO `X-Markdown-Tokens` (informational only). */
export function estimateMarkdownTokens(body: string): number {
  return Math.ceil(new TextEncoder().encode(body).length / 4);
}
