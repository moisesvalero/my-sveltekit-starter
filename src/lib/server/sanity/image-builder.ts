import imageUrlBuilder from '@sanity/image-url';
import type { SanityClient } from '@sanity/client';

export function createImageUrlBuilder(client: SanityClient) {
  return imageUrlBuilder(client);
}

export function imageUrl(
  client: SanityClient,
  source: unknown,
  width?: number
): string | undefined {
  if (!source || typeof source !== 'object') {
    return undefined;
  }
  try {
    let b = createImageUrlBuilder(client).image(source as never);
    if (width) {
      b = b.width(width);
    }
    return b.auto('format').url();
  } catch {
    return undefined;
  }
}
