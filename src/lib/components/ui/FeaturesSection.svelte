<script lang="ts">
  import type { Component } from 'svelte';
  import Container from './Container.svelte';
  import Section from './Section.svelte';
  import Heading from './Heading.svelte';
  import { Card, CardHeader, CardTitle, CardDescription } from './card';

  export type FeatureItem = {
    title: string;
    description: string;
    icon?: Component<Record<string, unknown>>;
    badge?: string;
  };

  type Props = {
    id?: string;
    eyebrow?: string;
    title: string;
    subtitle?: string;
    columns?: 2 | 3 | 4;
    items: FeatureItem[];
    className?: string;
  };

  let { id, eyebrow, title, subtitle, columns = 3, items, className = '' }: Props = $props();

  const gridColsClass = $derived(
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 4
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  );
</script>

<Section {id} className="py-20 md:py-28 {className}">
  <Container>
    <div class="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
      <Heading level={2} align="center" {eyebrow} kicker={subtitle} {title} />
    </div>

    <div class="grid {gridColsClass} gap-6 sm:gap-8">
      {#each items as item (item.title)}
        <Card
          class="relative transition-all duration-200 hover:shadow-md hover:border-border/90 bg-card/60 backdrop-blur-sm"
        >
          <CardHeader class="p-6">
            <div class="flex items-center justify-between gap-3 mb-3">
              {#if item.icon}
                {@const Icon = item.icon}
                <div
                  class="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
                >
                  <Icon class="size-5" />
                </div>
              {/if}
              {#if item.badge}
                <span
                  class="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground"
                >
                  {item.badge}
                </span>
              {/if}
            </div>
            <CardTitle class="text-xl font-bold text-foreground mb-2">
              {item.title}
            </CardTitle>
            <CardDescription class="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </CardDescription>
          </CardHeader>
        </Card>
      {/each}
    </div>
  </Container>
</Section>
