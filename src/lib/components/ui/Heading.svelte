<script lang="ts">
  import type { Snippet } from 'svelte';

  type Level = 1 | 2 | 3 | 4;
  type Align = 'left' | 'center' | 'right';

  type Props = {
    level?: Level;
    align?: Align;
    eyebrow?: string;
    kicker?: string;
    className?: string;
    /** Texto del encabezado si no pasas `children` (evita snippet solo con texto). */
    title?: string;
    children?: Snippet;
  };

  let {
    level = 2,
    align = 'left',
    eyebrow = undefined,
    kicker = undefined,
    className = '',
    title = undefined,
    children
  }: Props = $props();

  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-[3.4rem] tracking-tight leading-[1.03]',
    2: 'text-3xl md:text-4xl lg:text-[2.6rem] tracking-tight leading-[1.08]',
    3: 'text-xl font-semibold leading-tight',
    4: 'text-lg font-medium leading-relaxed'
  };

  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  };
</script>

<div class="flex flex-col gap-3 {alignClasses[align]} {className}">
  {#if eyebrow}
    <p class="text-xs uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</p>
  {/if}

  {#if level === 1}
    <h1 class="font-bold {sizeClasses[1]} text-foreground">
      {#if children}{@render children()}{:else if title}{title}{/if}
    </h1>
  {:else if level === 2}
    <h2 class="font-bold {sizeClasses[2]} text-foreground">
      {#if children}{@render children()}{:else if title}{title}{/if}
    </h2>
  {:else if level === 3}
    <h3 class="font-semibold {sizeClasses[3]} text-foreground">
      {#if children}{@render children()}{:else if title}{title}{/if}
    </h3>
  {:else}
    <h4 class="font-medium {sizeClasses[4]} text-foreground">
      {#if children}{@render children()}{:else if title}{title}{/if}
    </h4>
  {/if}

  {#if kicker}
    <p class="text-base text-muted-foreground max-w-[36rem] leading-relaxed">{kicker}</p>
  {/if}
</div>
