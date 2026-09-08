<script lang="ts">
  import Container from './Container.svelte';
  import Section from './Section.svelte';
  import Heading from './Heading.svelte';
  import { ChevronDown } from '@lucide/svelte';

  export type FaqItem = {
    question: string;
    answer: string;
  };

  type Props = {
    id?: string;
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    items: FaqItem[];
    allowMultiple?: boolean;
    className?: string;
  };

  let {
    id,
    eyebrow,
    title = 'Preguntas Frecuentes',
    subtitle = 'Todo lo que necesitas saber sobre la plataforma y cómo empezar.',
    items,
    allowMultiple = false,
    className = ''
  }: Props = $props();

  let openIndices = $state<number[]>([]);

  function toggle(index: number) {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        openIndices = openIndices.filter((i) => i !== index);
      } else {
        openIndices = [...openIndices, index];
      }
    } else {
      openIndices = openIndices.includes(index) ? [] : [index];
    }
  }
</script>

<Section {id} className="py-20 md:py-28 {className}">
  <Container>
    <div class="flex flex-col items-center text-center gap-4 mb-12">
      <Heading level={2} align="center" {eyebrow} kicker={subtitle} {title} />
    </div>

    <div class="max-w-3xl mx-auto divide-y divide-border/80 border-y border-border/80">
      {#each items as item, index (item.question)}
        {@const isOpen = openIndices.includes(index)}
        <div class="py-5">
          <button
            type="button"
            onclick={() => toggle(index)}
            aria-expanded={isOpen}
            aria-controls="faq-item-{index}"
            id="faq-btn-{index}"
            class="flex w-full items-center justify-between gap-4 text-left font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
          >
            <span class="text-base sm:text-lg font-semibold">{item.question}</span>
            <ChevronDown
              class="size-5 shrink-0 text-muted-foreground transition-transform duration-200 {isOpen
                ? 'rotate-180 text-primary'
                : ''}"
            />
          </button>

          {#if isOpen}
            <div
              id="faq-item-{index}"
              role="region"
              aria-labelledby="faq-btn-{index}"
              class="pt-3 pr-8 text-sm sm:text-base text-muted-foreground leading-relaxed"
            >
              <p>{item.answer}</p>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </Container>
</Section>
