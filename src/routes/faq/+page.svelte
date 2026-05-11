<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  setSeo({ title: 'FAQ', description: 'Preguntas frecuentes.' });

  let faqs = $state([
    { q: '¿Que es esta plantilla?', a: 'Una base lista para crear webs modernas con SvelteKit 2 y Svelte 5. Incluye componentes, SEO, i18n y despliegue preconfigurado.', open: true },
    { q: '¿Necesito saber programar?', a: 'No. Esta pensada para vibe coders: editas un archivo de configuracion, cambias colores y textos, y tu web esta lista.', open: false },
    { q: '¿Puedo usarla para proyectos comerciales?', a: 'Si. La plantilla es libre para uso personal y comercial. No hay restricciones.', open: false },
    { q: '¿Como despliego mi web?', a: 'Sube el proyecto a GitHub y conectalo a Vercel. Ya esta preconfigurado. En 2 minutos tu web esta en produccion.', open: false },
    { q: '¿Tiene soporte para varios idiomas?', a: 'Si. Incluye sistema i18n con español e ingles. Añadir mas idiomas es cuestion de crear un nuevo archivo JSON.', open: false },
    { q: '¿Puedo conectar un CMS?', a: 'Si. La plantilla tiene integracion con Sanity CMS. Tambien puedes conectar Decap CMS, Strapi o cualquier CMS headless.', open: false }
  ]);

  function toggle(i: number) {
    faqs = faqs.map((f, idx) => ({ ...f, open: idx === i ? !f.open : false }));
  }
</script>

<svelte:head>
  <title>FAQ | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="page-head">
    <Heading level={1} eyebrow="FAQ" align="center">Preguntas frecuentes</Heading>
    <Text variant="muted" align="center">Todo lo que necesitas saber sobre esta plantilla.</Text>
  </div>
</Container>

<Section variant="default">
  <Container>
    <div class="faq-list">
      {#each faqs as item, i (item.q)}
        <Card variant="soft" clickable>
          <button class="faq-btn" onclick={() => toggle(i)}>
            <Heading level={4}>{item.q}</Heading>
            <span class="arrow" class:open={item.open}>{item.open ? '−' : '+'}</span>
          </button>
          {#if item.open}
            <Text variant="muted">{item.a}</Text>
          {/if}
        </Card>
      {/each}
    </div>
  </Container>
</Section>

<style>
  .page-head { padding-top: 8rem; padding-bottom: 2rem; }
  .faq-list { max-width: 640px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.8rem; padding-bottom: 4rem; }
  .faq-btn {
    display: flex; align-items: flex-start; justify-content: space-between;
    width: 100%; text-align: left; background: none; border: none;
    font: inherit; cursor: pointer; padding: 0;
  }
  .arrow {
    font-size: 1.3rem; color: var(--text-secondary);
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
    flex-shrink: 0; margin-left: 1rem;
  }
  .arrow.open { color: var(--accent); }
</style>
