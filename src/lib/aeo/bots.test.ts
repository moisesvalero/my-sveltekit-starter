import { describe, expect, it } from 'vitest';
import { isAiBot } from './bots';

describe('isAiBot detection', () => {
  it('detects genuine AI crawlers', () => {
    expect(
      isAiBot(
        'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)'
      )
    ).toBe(true);
    expect(isAiBot('Mozilla/5.0 (compatible; ClaudeBot/1.0; +claudebot@anthropic.com)')).toBe(true);
    expect(isAiBot('PerplexityBot/1.0 (+https://perplexity.ai/perplexitybot)')).toBe(true);
  });

  it('does NOT treat Googlebot or bingbot as AI bots to prevent de-indexing HTML pages', () => {
    expect(
      isAiBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)')
    ).toBe(false);
    expect(isAiBot('Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)')).toBe(
      false
    );
  });

  it('handles null or empty UA gracefully', () => {
    expect(isAiBot(null)).toBe(false);
    expect(isAiBot('')).toBe(false);
  });
});
