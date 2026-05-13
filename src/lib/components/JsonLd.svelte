<script lang="ts">
  /**
   * JSON-LD universal para SEO + GEO.
   *
   * Inyecta automáticamente:
   *  - Organization
   *  - WebSite con SearchAction (sitelinks searchbox en Google)
   *  - El schema de la página (`type` prop: WebPage | Article | FAQPage…)
   *  - BreadcrumbList (auto desde la URL)
   *  - FAQPage si se pasa `faq`
   *  - HowTo si se pasa `howto`
   *  - SoftwareApplication si se pasa `softwareName`
   *
   * Las IAs (ChatGPT, Claude, Perplexity, Gemini) priorizan páginas con FAQPage y HowTo
   * para citar respuestas → este componente automatiza ambos.
   */
  import { siteConfig } from '$lib/site-config';
  import { page } from '$app/state';
  import type { FaqItem, HowToStep, SchemaType } from '$lib/seo';

  let {
    type = 'WebSite',
    headline = '',
    datePublished = '',
    dateModified = '',
    image = '',
    author = siteConfig.author.name,
    description = siteConfig.tagline,
    faq = [],
    howto = [],
    softwareName = '',
    softwareCategory = ''
  }: {
    type?: SchemaType;
    headline?: string;
    datePublished?: string;
    dateModified?: string;
    image?: string;
    author?: string;
    description?: string;
    faq?: FaqItem[];
    howto?: HowToStep[];
    softwareName?: string;
    softwareCategory?: string;
  } = $props();

  const base = siteConfig.url.replace(/\/$/, '');
  const path = $derived(page ? page.url.pathname : '/');
  const fullUrl = $derived(`${base}${path}`);

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: base,
    logo: `${base}/favicon.svg`,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin].filter(Boolean)
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: base,
    inLanguage: ['es', 'en'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${base}/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const pageSchema = $derived({
    '@context': 'https://schema.org',
    '@type': type,
    name: headline || siteConfig.name,
    description,
    url: fullUrl,
    inLanguage: 'es',
    ...(headline && { headline }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(image && { image: image.startsWith('http') ? image : `${base}${image}` }),
    ...((type === 'Article' || type === 'BlogPosting') && {
      author: { '@type': 'Person', name: author },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: base,
        logo: { '@type': 'ImageObject', url: `${base}/favicon.svg` }
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': fullUrl }
    })
  });

  const breadcrumb = $derived({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: base },
      ...path
        .split('/')
        .filter(Boolean)
        .map((seg, i, arr) => ({
          '@type': 'ListItem',
          position: i + 2,
          name: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' '),
          item: `${base}/${arr.slice(0, i + 1).join('/')}`
        }))
    ]
  });

  const faqSchema = $derived(
    faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer }
          }))
        }
      : null
  );

  const howtoSchema = $derived(
    howto.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: headline || siteConfig.name,
          step: howto.map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            name: s.name,
            text: s.text
          }))
        }
      : null
  );

  const softwareSchema = $derived(
    softwareName
      ? {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: softwareName,
          url: base,
          applicationCategory: softwareCategory || 'DeveloperApplication',
          operatingSystem: 'Web',
          description,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          author: { '@type': 'Person', name: author }
        }
      : null
  );
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(organization)}</` + `script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(website)}</` + `script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(pageSchema)}</` + `script>`}
  {#if path !== '/'}
    {@html `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</` + `script>`}
  {/if}
  {#if faqSchema}
    {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</` + `script>`}
  {/if}
  {#if howtoSchema}
    {@html `<script type="application/ld+json">${JSON.stringify(howtoSchema)}</` + `script>`}
  {/if}
  {#if softwareSchema}
    {@html `<script type="application/ld+json">${JSON.stringify(softwareSchema)}</` + `script>`}
  {/if}
</svelte:head>
