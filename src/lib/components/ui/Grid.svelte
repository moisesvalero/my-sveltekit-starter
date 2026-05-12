<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    columns?: number;
    gap?: string;
    className?: string;
    children?: Snippet;
  };

  let { columns = 3, gap = '1.5rem', className = '', children }: Props = $props();
</script>

<div
  class="grid {className}"
  style="gap: {gap}; grid-template-columns: repeat({columns}, minmax(0, 1fr));"
>
  {#if children}
    {@render children()}
  {/if}
</div>
