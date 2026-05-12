<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    as?: keyof HTMLElementTagNameMap;
    className?: string;
    children?: Snippet;
  };

  let { as = 'div', className = '', children }: Props = $props();
</script>

<svelte:element this={as} class="w-full max-w-[1200px] mx-auto px-4 sm:px-5 lg:px-6 {className}">
  {#if children}
    {@render children()}
  {/if}
</svelte:element>
