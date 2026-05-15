/**
 * AI crawler User-Agent patterns (Dualmark registry + common audit tools).
 * Case-insensitive substring match per https://dualmark.dev/docs/spec/ai-bot-detection
 */
const AI_BOT_UA_PATTERNS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended',
  'Googlebot', // some AEO auditors probe with generic Google UA
  'Applebot-Extended',
  'Applebot',
  'PerplexityBot',
  'CCBot',
  'Bytespider',
  'cohere-ai',
  'FacebookBot',
  'Amazonbot',
  'bingbot',
  'YouBot',
  'Diffbot',
  'DuckAssistBot',
  'meta-externalagent',
  'ImagesiftBot',
  'Omgilibot'
] as const;

/** True when User-Agent looks like a known AI / GEO crawler. */
export function isAiBot(userAgent: string | null): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return AI_BOT_UA_PATTERNS.some((pattern) => ua.includes(pattern.toLowerCase()));
}
