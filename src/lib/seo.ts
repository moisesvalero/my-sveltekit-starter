import { env } from '$env/dynamic/public';
import { writable } from 'svelte/store';
import { siteConfig } from '$lib/site-config';

const DEFAULT_SITE_URL = 'http://localhost:5173';
const baseUrl = new URL(env.PUBLIC_SITE_URL || DEFAULT_SITE_URL).toString().replace(/\/$/, '');

export const defaultSeo = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.tagline,
  ogTitle: `${siteConfig.name} | ${siteConfig.tagline}`,
  ogDescription: siteConfig.tagline,
  ogImage: `${baseUrl}${siteConfig.ogImage}`,
  ogUrl: baseUrl,
  twitterCard: 'summary_large_image',
  canonical: baseUrl,
  schemaType: 'WebSite',
  headline: '',
  datePublished: '',
  dateModified: ''
};

export const seo = writable(defaultSeo);

export const setSeo = (data = {}) => {
  seo.set({
    ...defaultSeo,
    ...data
  });
};

export function generateOgImageUrl(title: string): string {
  const text = encodeURIComponent(title.slice(0, 80));
  return `${baseUrl}/api/og?title=${text}`;
}
