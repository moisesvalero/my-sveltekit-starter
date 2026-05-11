import { describe, it, expect } from 'vitest';

describe('site config', () => {
  it('tiene nombre definido', async () => {
    const { siteConfig } = await import('$lib/site-config');
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.url).toMatch(/^https?:\/\//);
  });

  it('tiene redes sociales definidas', async () => {
    const { siteConfig } = await import('$lib/site-config');
    expect(siteConfig.social.github).toBeTruthy();
    expect(siteConfig.social.linkedin).toBeTruthy();
  });

  it('tiene navegacion definida', async () => {
    const { siteConfig } = await import('$lib/site-config');
    expect(siteConfig.nav.length).toBeGreaterThan(0);
    expect(siteConfig.nav[0]).toHaveProperty('label');
    expect(siteConfig.nav[0]).toHaveProperty('href');
  });
});
