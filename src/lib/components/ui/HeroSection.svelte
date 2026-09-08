<script lang="ts">
  import type { Snippet } from 'svelte';
  import Container from './Container.svelte';
  import Section from './Section.svelte';
  import { Button } from './button';

  type Props = {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    primaryLabel?: string;
    primaryHref?: string;
    primaryAction?: () => void;
    secondaryLabel?: string;
    secondaryHref?: string;
    secondaryAction?: () => void;
    align?: 'center' | 'left';
    id?: string;
    className?: string;
    children?: Snippet;
  };

  let {
    eyebrow,
    title,
    subtitle,
    primaryLabel,
    primaryHref,
    primaryAction,
    secondaryLabel,
    secondaryHref,
    secondaryAction,
    align = 'center',
    id,
    className = '',
    children
  }: Props = $props();

  const isCenter = $derived(align === 'center');
</script>

<Section {id} className="pt-20 pb-16 md:pt-28 md:pb-24 {className}">
  <Container>
    <div
      class="flex flex-col {isCenter ? 'items-center text-center' : 'items-start text-left'} gap-6"
    >
      {#if eyebrow}
        <div
          class="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:bg-muted"
        >
          <span>{eyebrow}</span>
        </div>
      {/if}

      <h1
        class="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {title}
      </h1>

      {#if subtitle}
        <p class="max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          {subtitle}
        </p>
      {/if}

      {#if primaryLabel || secondaryLabel}
        <div
          class="flex flex-wrap items-center gap-4 pt-2 {isCenter
            ? 'justify-center'
            : 'justify-start'}"
        >
          {#if primaryLabel}
            <Button
              size="lg"
              href={primaryHref}
              onclick={primaryAction}
              class="h-11 px-6 text-base font-semibold shadow-sm"
            >
              {primaryLabel}
            </Button>
          {/if}
          {#if secondaryLabel}
            <Button
              variant="outline"
              size="lg"
              href={secondaryHref}
              onclick={secondaryAction}
              class="h-11 px-6 text-base font-medium"
            >
              {secondaryLabel}
            </Button>
          {/if}
        </div>
      {/if}

      {#if children}
        <div class="w-full pt-10 md:pt-14">
          <div
            class="relative mx-auto rounded-2xl border border-border/70 bg-card/60 p-2 shadow-2xl backdrop-blur-sm sm:p-4"
          >
            {@render children()}
          </div>
        </div>
      {/if}
    </div>
  </Container>
</Section>
