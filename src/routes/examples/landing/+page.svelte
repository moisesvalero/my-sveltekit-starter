<script lang="ts">
  import {
    Hero,
    SocialProof,
    Workflow,
    ComponentGallery,
    UseCases,
    Superpowers,
    Features,
    Pricing,
    Testimonials,
    DeepDetails,
    FAQ,
    Footer
  } from '$lib/examples/landing';
  import Section from '$lib/components/ui/Section.svelte';
  import Container from '$lib/components/ui/Container.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import { setSeo } from '$lib/seo';

  setSeo({ title: 'Landing de ejemplo | My SvelteKit Starter', description: 'Landing page completa construida con esta plantilla.' });

  let isYearly = $state(false);
  function toggleBilling() {
    isYearly = !isYearly;
  }

  let faqs = $state([
    {
      question: '¿Qué incluye Svelte Starter?',
      answer:
        'Incluye más de 50 componentes premium, animaciones listas para usar y soporte prioritario.',
      open: false
    },
    {
      question: '¿Puedo usarlo en proyectos comerciales?',
      answer: 'Sí, la licencia Pro te permite usarlo en proyectos ilimitados para clientes.',
      open: false
    },
    {
      question: '¿Necesito experiencia previa con Svelte?',
      answer:
        'No. Svelte Starter está pensado como una guía práctica: puedes partir de los ejemplos y aprender Svelte paso a paso mientras adaptas la landing.',
      open: false
    },
    {
      question: '¿Puedo adaptar el diseño a mi marca?',
      answer:
        'Claro. Los estilos están organizados en tokens y componentes, así que puedes cambiar tipografías, colores y espaciados sin romper el layout.',
      open: false
    }
  ]);

  function toggleFaq(index: number) {
    const next = faqs.map((item, i) => {
      if (i === index) {
        return { ...item, open: !item.open };
      }
      return { ...item, open: false };
    });
    faqs = next;
  }
</script>

<Hero />

<Section variant="soft">
  <Container>
    <div class="portfolio-banner">
      <Text variant="small">EJEMPLO REAL CONSTRUIDO CON ESTA PLANTILLA</Text>
      <Button variant="primary" as="a" href="https://novakit.moisesvalero.es/" size="lg">
        Ver portfolio real →
      </Button>
    </div>
  </Container>
</Section>

<SocialProof />
<Workflow />
<ComponentGallery />
<UseCases />
<Superpowers />
<Features />
<Pricing {isYearly} {toggleBilling} />
<Testimonials />
<DeepDetails />
<FAQ {faqs} {toggleFaq} />
<Footer />

<style>
  .portfolio-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 0.5rem 0;
  }
</style>

