<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'default' | 'muted' | 'soft' | 'surface';

  type Props = {
    as?: keyof HTMLElementTagNameMap;
    variant?: Variant;
    id?: string;
    className?: string;
    children?: Snippet;
  };

  let {
    as = 'section',
    variant = 'default',
    id = undefined,
    className = '',
    children
  }: Props = $props();

  const variantClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    soft: 'bg-gradient-to-b from-blue-50/30 to-transparent',
    surface: 'bg-secondary/20'
  };
</script>

<svelte:element this={as} {id} class="py-24 md:py-28 {variantClasses[variant]} {className}">
  {#if children}
    {@render children()}
  {/if}
</svelte:element>
