<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

  const rest = $derived(restProps as Record<string, unknown>);
</script>

<div
  bind:this={ref}
  data-slot="card-title"
  class={cn('text-base leading-snug font-medium group-data-[size=sm]/card:text-sm', className)}
  {...rest}
>
  {@render children?.()}
</div>
