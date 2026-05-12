<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLParagraphElement>> = $props();

  const rest = $derived(restProps as Record<string, unknown>);
</script>

<p
  bind:this={ref}
  data-slot="card-description"
  class={cn('text-muted-foreground text-sm', className)}
  {...rest}
>
  {@render children?.()}
</p>
