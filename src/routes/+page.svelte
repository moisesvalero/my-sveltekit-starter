<script lang="ts">
  import { env } from '$env/dynamic/public';
  import HeroSection from '$lib/components/ui/HeroSection.svelte';
  import FeaturesSection from '$lib/components/ui/FeaturesSection.svelte';
  import { siteConfig } from '$lib/site-config';
  import { seo, setSeo } from '$lib/seo';

  const baseUrl = new URL(env.PUBLIC_SITE_URL || 'http://localhost:5173').toString().replace(/\/$/, '');

  setSeo({
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.tagline,
    ogTitle: `${siteConfig.name} | ${siteConfig.tagline}`,
    ogDescription: siteConfig.tagline,
    canonical: `${baseUrl}/`,
    ogUrl: `${baseUrl}/`,
    ogImage: `${baseUrl}${siteConfig.ogImage}`,
    twitterCard: 'summary_large_image'
  });
</script>

<svelte:head>
  <title>{$seo.title}</title>
  <meta name="description" content={$seo.description} />

  <link rel="canonical" href={$seo.canonical} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={$seo.ogTitle} />
  <meta property="og:description" content={$seo.ogDescription} />
  <meta property="og:url" content={$seo.ogUrl} />
  <meta property="og:image" content={$seo.ogImage} />

  <meta name="twitter:card" content={$seo.twitterCard} />
  <meta name="twitter:title" content={$seo.ogTitle} />
  <meta name="twitter:description" content={$seo.ogDescription} />
  <meta name="twitter:image" content={$seo.ogImage} />
</svelte:head>

<HeroSection
  eyebrow={siteConfig.name}
  title="Plantilla lista para lanzar tus próximas interfaces."
  subtitle="Usa esta base como punto de partida para landings, productos SaaS o paneles internos. Personaliza colores, tipografía y secciones sin pelearte con el layout."
  primaryLabel="Ver ejemplo completo"
  primaryHref="/examples/landing"
  secondaryLabel="Explorar componentes base"
  secondaryHref="#features"
/>

<FeaturesSection
  id="features"
  eyebrow="Componentes base incluidos"
  title="Bloques UI reutilizables desde el primer día."
  subtitle="Combina secciones y componentes para crear nuevas pantallas rápido, manteniendo una estética limpia y consistente."
  items={[
    {
      icon: '✨',
      title: 'Hero adaptable',
      description: 'Título, subtítulo y CTAs listos para reutilizar en cualquier página de tu app.'
    },
    {
      icon: '⚡',
      title: 'Grid de features',
      description: 'Resume el valor de tu producto con una cuadrícula de características clara.'
    },
    {
      icon: '🎨',
      title: 'Tokens de estilo',
      description: 'Colores y tipografía definidos en un solo lugar para adaptar la marca.'
    },
    {
      icon: '🧩',
      title: 'Composición flexible',
      description: 'Crea nuevas secciones combinando Container, Section, Card y Button.'
    }
  ]}
/>