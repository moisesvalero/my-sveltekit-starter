<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { Card } from '$lib/components/ui/card';

  setSeo({ title: 'FAQ', description: 'Preguntas frecuentes.' });

  let faqs = $state([
    {
      q: '¿Que es esta plantilla?',
      a: 'Una base lista para crear webs modernas con SvelteKit 2 y Svelte 5. Incluye componentes, SEO, i18n y despliegue preconfigurado.',
      open: true
    },
    {
      q: '¿Necesito saber programar?',
      a: 'No. Esta pensada para vibe coders: editas un archivo de configuracion, cambias colores y textos, y tu web esta lista.',
      open: false
    },
    {
      q: '¿Puedo usarla para proyectos comerciales?',
      a: 'Si. La plantilla es libre para uso personal y comercial. No hay restricciones.',
      open: false
    },
    {
      q: '¿Como despliego mi web?',
      a: 'Sube el proyecto a GitHub y conectalo a Vercel. Ya esta preconfigurado. En 2 minutos tu web esta en produccion.',
      open: false
    },
    {
      q: '¿Tiene soporte para varios idiomas?',
      a: 'Si. Incluye sistema i18n con español e ingles. Añadir mas idiomas es cuestion de crear un nuevo archivo JSON.',
      open: false
    },
    {
      q: '¿Puedo conectar un CMS?',
      a: 'Si. La plantilla tiene integracion con Sanity CMS. Tambien puedes conectar Decap CMS, Strapi o cualquier CMS headless.',
      open: false
    }
  ]);

  function toggle(i: number) {
    faqs = faqs.map((f, idx) => ({ ...f, open: idx === i ? !f.open : false }));
  }
</script>

<svelte:head>
  <title>FAQ | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="pt-32 pb-8 text-center">
    <p class="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-4">FAQ</p>
    <h1 class="text-4xl font-bold tracking-tight text-foreground mb-4">Preguntas frecuentes</h1>
    <p class="text-lg text-muted-foreground">Todo lo que necesitas saber sobre esta plantilla.</p>
  </div>
</Container>

<Section variant="default">
  <Container>
    <div class="max-w-[640px] mx-auto flex flex-col gap-3 pb-16">
      {#each faqs as item, i (item.q)}
        <Card class="p-5 bg-gradient-to-br from-blue-50/30 to-transparent cursor-pointer">
          <button
            class="flex items-start justify-between w-full text-left"
            onclick={() => toggle(i)}
          >
            <h4 class="text-base font-medium text-foreground pr-4">{item.q}</h4>
            <span
              class="text-xl text-muted-foreground transition-transform duration-200 flex-shrink-0"
              class:text-primary={item.open}
              class:rotate-45={item.open}
            >
              {item.open ? '−' : '+'}
            </span>
          </button>
          {#if item.open}
            <p class="text-sm text-muted-foreground mt-3 leading-relaxed">{item.a}</p>
          {/if}
        </Card>
      {/each}
    </div>
  </Container>
</Section>
