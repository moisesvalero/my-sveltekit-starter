<script lang="ts">
  import { siteConfig } from '$lib/site-config';
  import { page } from '$app/state';

  let {
    type = 'WebSite',
    headline = '',
    datePublished = '',
    dateModified = '',
    image = ''
  }: {
    type?: string;
    headline?: string;
    datePublished?: string;
    dateModified?: string;
    image?: string;
  } = $props();

  const base = siteConfig.url.replace(/\/$/, '');
  const path = $derived(page ? page.url.pathname : '/');

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: base,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin].filter(Boolean)
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: base
  };

  const pageSchema = $derived({
    '@context': 'https://schema.org',
    '@type': type,
    name: headline || siteConfig.name,
    url: `${base}${path}`,
    ...(headline && { headline }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(image && { image: `${base}${image}` }),
    ...(type === 'Article' && {
      author: { '@type': 'Person', name: siteConfig.author.name },
      publisher: { '@type': 'Organization', name: siteConfig.name, url: base }
    })
  });

  const breadcrumb = $derived({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: path
      .split('/')
      .filter(Boolean)
      .map((seg, i, arr) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' '),
        item: `${base}/${arr.slice(0, i + 1).join('/')}`
      }))
  });
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(organization)}</` + `script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(website)}</` + `script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(pageSchema)}</` + `script>`}
  {#if path !== '/'}
    {@html `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</` + `script>`}
  {/if}
</svelte:head>
