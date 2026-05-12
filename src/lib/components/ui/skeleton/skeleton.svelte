<script lang="ts">
  import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> = $props();

  const rest = $derived(restProps as Record<string, unknown>);
</script>

<div
  bind:this={ref}
  data-slot="skeleton"
  class={cn('bg-muted rounded-md animate-pulse', className)}
  {...rest}
></div>
