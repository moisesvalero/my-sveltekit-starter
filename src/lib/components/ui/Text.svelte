<script lang="ts">
  import type { Snippet } from 'svelte';

  type Variant = 'body' | 'muted' | 'small' | 'label';
  type Align = 'left' | 'center' | 'right';

  type Props = {
    as?: keyof HTMLElementTagNameMap;
    variant?: Variant;
    align?: Align;
    className?: string;
    children?: Snippet;
  };

  let { as = 'p', variant = 'body', align = 'left', className = '', children }: Props = $props();

  const variantClasses = {
    body: 'text-foreground',
    muted: 'text-muted-foreground',
    small: 'text-sm text-muted-foreground',
    label: 'text-xs uppercase tracking-[0.14em] text-muted-foreground'
  };

  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };
</script>

<svelte:element this={as} class="m-0 {variantClasses[variant]} {alignClasses[align]} {className}">
  {@render children?.()}
</svelte:element>
