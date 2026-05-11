<script lang="ts">
  import { env } from '$env/dynamic/public';
  import HeroSection from '$lib/components/ui/HeroSection.svelte';
  import FeaturesSection from '$lib/components/ui/FeaturesSection.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { siteConfig } from '$lib/site-config';
  import { seo, setSeo } from '$lib/seo';

  setSeo({
    title: siteConfig.name,
    description: 'Plantilla Svelte 5 + SvelteKit 2 con 23 componentes, dark mode, i18n, SEO y seguridad A+.',
    ogTitle: siteConfig.name,
    ogDescription: 'Crea webs modernas en minutos con esta plantilla lista para produccion.',
    twitterCard: 'summary_large_image'
  });
</script>

<svelte:head>
  <title>{$seo.title}</title>
</svelte:head>

<HeroSection
  eyebrow="Svelte 5 + SvelteKit 2"
  title={siteConfig.name}
  subtitle="23 componentes, dark mode, i18n, SEO, tests, seguridad A+ y despliegue 1-click. Todo lo que necesitas para lanzar tu proxima web."
  primaryLabel="Ver componentes"
  primaryHref="/components"
  secondaryLabel="Landing de ejemplo"
  secondaryHref="https://novakit.moisesvalero.es/"
/>

<FeaturesSection
  id="features"
  eyebrow="Que incluye"
  title="Todo listo desde el primer minuto"
  subtitle="No pierdas tiempo configurando. Esta plantilla viene con todo lo que necesitas."
  items={[
    { icon: '🧩', title: '23 componentes UI', description: 'Button, Card, Modal, Skeleton, Spinner, Grid, Hero, Features y mas.' },
    { icon: '🌙', title: 'Dark mode', description: 'Toggle claro/oscuro con CSS variables. Respeta la preferencia del sistema.' },
    { icon: '🌍', title: 'i18n ES/EN', description: 'Sistema de traducciones con store y localStorage.' },
    { icon: '🔍', title: 'SEO + GEO', description: 'sitemap, robots, OG tags, Schema.org JSON-LD, llms.txt.' }
  ]}
/>

<Section variant="muted">
  <Container>
    <Heading level={2} align="center">Empieza en 2 minutos</Heading>
    <Text variant="muted" align="center">Edita un solo archivo y personaliza toda tu web.</Text>
    <div class="steps">
      <div class="step"><span>1</span> npm install</div>
      <div class="step"><span>2</span> npm run dev</div>
      <div class="step"><span>3</span> Edita site-config.ts</div>
      <div class="step"><span>4</span> Despliega en Vercel</div>
    </div>
  </Container>
</Section>

<Section variant="default">
  <Container>
    <div class="cta-box">
      <Heading level={2} align="center">¿Listo para empezar?</Heading>
      <Text variant="muted" align="center">Esta plantilla es gratis, open source y lista para produccion.</Text>
      <div class="cta-buttons">
        <Button variant="primary" size="lg" as="a" href="/components">Ver componentes</Button>
        <Button variant="outline" size="lg" as="a" href="https://novakit.moisesvalero.es/">Landing de ejemplo</Button>
      </div>
    </div>
  </Container>
</Section>

<style>
  .steps {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
  .step {
    background: var(--bg-main, #fff);
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: 14px;
    padding: 1.5rem 1rem;
    text-align: center;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .step span {
    width: 32px; height: 32px;
    background: var(--accent);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
  }
  .cta-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 3rem 0;
  }
  .cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 640px) {
    .steps { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
</style>
