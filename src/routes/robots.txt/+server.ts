import { env } from '$env/dynamic/public';

const DEFAULT_SITE_URL = 'http://localhost:5173';

const normalizeBaseUrl = (url: string): string => {
  try {
    const parsed = new URL(url || DEFAULT_SITE_URL);
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const GET = () => {
  const baseUrl = normalizeBaseUrl(env.PUBLIC_SITE_URL);

  const body = `# Todos los crawlers
User-agent: *
Allow: /
Disallow: /api/

# ====== AI Crawlers (GEO) ======

# OpenAI - ChatGPT / GPTBot
User-agent: GPTBot
Allow: /
Disallow: /api/

# OpenAI - SearchBot (SearchGPT)
User-agent: OAI-SearchBot
Allow: /
Disallow: /api/

# Anthropic - Claude
User-agent: Claude-Web
Allow: /
Disallow: /api/

User-agent: anthropic-ai
Allow: /
Disallow: /api/

# Google AI - Gemini
User-agent: Google-Extended
Allow: /
Disallow: /api/

# Perplexity AI
User-agent: PerplexityBot
Allow: /
Disallow: /api/

# Common Crawl (datos de entrenamiento)
User-agent: CCBot
Allow: /
Disallow: /api/

# Meta AI
User-agent: FacebookBot
Allow: /
Disallow: /api/

# Cohere
User-agent: cohere-ai
Allow: /
Disallow: /api/

# ====== Sitemap & GEO ======
Sitemap: ${baseUrl}/sitemap.xml

# Índice GEO para LLMs (llmstxt.org)
# - ${baseUrl}/llms.txt        índice corto en Markdown
# - ${baseUrl}/llms-full.txt   contenido completo del sitio en Markdown`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
