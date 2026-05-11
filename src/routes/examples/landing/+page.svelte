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

