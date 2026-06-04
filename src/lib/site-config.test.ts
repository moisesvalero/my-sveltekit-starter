import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

describe('site config', () => {
  it('tiene nombre definido', async () => {
    const { siteConfig } = await import('$lib/site-config');
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.url).toMatch(/^https?:\/\//);
  });

  it('tiene redes sociales definidas', async () => {
    const { siteConfig } = await import('$lib/site-config');
    expect(siteConfig.social.github).toBeTruthy();
    expect(siteConfig.social).toHaveProperty('linkedin');
    expect(siteConfig.social.email).toBeTruthy();
  });

  it('no expone placeholders en la configuracion publica', async () => {
    const { siteConfig } = await import('$lib/site-config');
    const publicValues = [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.email,
      siteConfig.author.name,
      siteConfig.author.url
    ];

    expect(publicValues.join(' ')).not.toMatch(/example\.com|linkedin\.com$|Tu nombre/i);
  });

  it('tiene navegacion definida', async () => {
    const { siteConfig } = await import('$lib/site-config');
    expect(siteConfig.nav.length).toBeGreaterThan(0);
    expect(siteConfig.nav[0]).toHaveProperty('label');
    expect(siteConfig.nav[0]).toHaveProperty('href');
  });
});

describe('public release surface', () => {
  const root = process.cwd();

  it('mantiene una ruta real para la politica de cookies', () => {
    expect(existsSync(resolve(root, 'src/routes/politica-cookies/+page.svelte'))).toBe(true);
  });

  it('no publica el endpoint demo api/hello', () => {
    expect(existsSync(resolve(root, 'src/routes/api/hello/+server.ts'))).toBe(false);
  });
});

describe('base URL normalization', () => {
  it('usa la URL del sitio como fallback cuando no hay env', async () => {
    const { normalizeBaseUrl } = await import('$lib/server/base-url');
    const { siteConfig } = await import('$lib/site-config');

    expect(normalizeBaseUrl(undefined)).toBe(siteConfig.url);
  });

  it('normaliza URLs validas sin barra final', async () => {
    const { normalizeBaseUrl } = await import('$lib/server/base-url');

    expect(normalizeBaseUrl('https://example.com/')).toBe('https://example.com');
  });
});
