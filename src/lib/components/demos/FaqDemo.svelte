<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { Card } from '$lib/components/ui/card';

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

<div class="demo-pages text-left">
  <Container>
    <div class="pb-6 pt-2 text-center">
      <p class="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">FAQ</p>
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Preguntas frecuentes
      </h2>
      <p class="text-lg text-muted-foreground">Todo lo que necesitas saber sobre esta plantilla.</p>
    </div>
  </Container>

  <Section variant="default">
    <Container>
      <div class="mx-auto flex max-w-[640px] flex-col gap-3 pb-4">
        {#each faqs as item, i (item.q)}
          <Card
            class="cursor-pointer bg-gradient-to-br from-blue-50/30 to-transparent p-5 dark:from-blue-950/15"
          >
            <button
              type="button"
              class="flex w-full items-start justify-between text-left"
              onclick={() => toggle(i)}
            >
              <h4 class="pr-4 text-base font-medium text-foreground">{item.q}</h4>
              <span
                class="flex-shrink-0 text-xl text-muted-foreground transition-transform duration-200"
                class:text-primary={item.open}
                class:rotate-45={item.open}
              >
                {item.open ? '−' : '+'}
              </span>
            </button>
            {#if item.open}
              <p class="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            {/if}
          </Card>
        {/each}
      </div>
    </Container>
  </Section>
</div>
