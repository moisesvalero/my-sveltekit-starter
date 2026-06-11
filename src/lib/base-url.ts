import { siteConfig } from '$lib/site-config';

export const normalizeBaseUrl = (url: string | undefined): string => {
  try {
    const parsed = new URL(url || siteConfig.url);
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return siteConfig.url;
  }
};
