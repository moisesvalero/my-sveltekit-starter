<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  type Props = {
    eyebrow?: string;
    title?: string;
    gradientTitle?: boolean;
    subtitle?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    /** Hero centrado tipo Stitch (sin columnas ni código) */
    centered?: boolean;
  };

  let {
    eyebrow = undefined,
    title = '',
    gradientTitle = false,
    subtitle = undefined,
    primaryLabel = undefined,
    primaryHref = undefined,
    secondaryLabel = undefined,
    secondaryHref = undefined,
    centered = false
  }: Props = $props();
</script>

<section
  class="relative overflow-hidden border-b border-border/40 bg-background pb-16 pt-8 md:pb-24 md:pt-12"
>
  {#if !centered}
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -top-40 -left-40 h-[560px] w-[560px] motion-safe:animate-[hero-orb-1_14s_ease-in-out_infinite] rounded-full bg-primary/10 blur-[100px] motion-reduce:animate-none"
      ></div>
      <div
        class="absolute top-20 -right-40 h-[420px] w-[420px] motion-safe:animate-[hero-orb-2_18s_ease-in-out_infinite] rounded-full bg-primary-container/15 blur-[90px] motion-reduce:animate-none"
      ></div>
      <div
        class="absolute bottom-0 left-1/4 h-[280px] w-[280px] motion-safe:animate-[hero-orb-3_11s_ease-in-out_infinite] rounded-full bg-secondary/10 blur-[80px] motion-reduce:animate-none"
      ></div>
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="background-image: linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px); background-size: 48px 48px; mask-image: radial-gradient(ellipse 70% 55% at 50% 35%, black 15%, transparent 75%);"
      ></div>
    </div>
  {/if}

  <div class="relative z-10 mx-auto w-full max-w-5xl px-6">
    {#if centered}
      <div class="mx-auto mb-24 max-w-3xl text-center md:mb-24">
        {#if eyebrow}
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
        {/if}

        <h1
          class="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[48px] lg:leading-[1.1]"
        >
          {#if gradientTitle}
            <span class="gradient-text">{title}</span>
          {:else}
            {title}
          {/if}
        </h1>

        {#if subtitle}
          <p
            class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-[18px] md:leading-relaxed"
          >
            {subtitle}
          </p>
        {/if}

        {#if primaryLabel || secondaryLabel}
          <div class="flex flex-wrap justify-center gap-4">
            {#if primaryLabel}
              <Button
                variant="default"
                size="lg"
                href={primaryHref}
                class="h-12 rounded-xl px-8 text-base font-bold shadow-lg"
              >
                {primaryLabel}
              </Button>
            {/if}
            {#if secondaryLabel}
              <Button
                variant="outline"
                size="lg"
                href={secondaryHref}
                class="h-12 rounded-xl border-border bg-muted/80 px-8 text-base font-bold hover:bg-muted"
              >
                {secondaryLabel}
              </Button>
            {/if}
          </div>
        {/if}
      </div>
    {:else}
      <div
        class="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-20"
      >
        <div class="flex max-w-xl flex-col gap-7 text-left lg:max-w-none lg:gap-8">
          {#if eyebrow}
            <p
              class="inline-flex w-fit items-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary dark:bg-primary/10"
            >
              {eyebrow}
            </p>
          {/if}

          <h1
            class="text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
          >
            {#if gradientTitle}
              <span class="gradient-text">{title}</span>
            {:else}
              <span class="text-foreground">{title}</span>
            {/if}
          </h1>

          {#if subtitle}
            <p
              class="max-w-[40rem] text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl md:leading-relaxed"
            >
              {subtitle}
            </p>
          {/if}

          {#if primaryLabel || secondaryLabel}
            <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
              {#if primaryLabel}
                <Button
                  variant="default"
                  size="lg"
                  href={primaryHref}
                  class="h-11 px-8 text-base shadow-md"
                >
                  {primaryLabel}
                </Button>
              {/if}
              {#if secondaryLabel}
                <Button
                  variant="outline"
                  size="lg"
                  href={secondaryHref}
                  class="h-11 px-8 text-base"
                >
                  {secondaryLabel}
                </Button>
              {/if}
            </div>
          {/if}
        </div>

        <div class="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <div
            class="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/25 via-primary-container/20 to-secondary/20 opacity-90 blur-sm motion-reduce:opacity-60"
            aria-hidden="true"
          ></div>
          <div
            class="relative overflow-hidden rounded-2xl border border-border/80 bg-[var(--inverse-surface)] shadow-xl ring-1 ring-white/5"
          >
            <div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span class="size-3 rounded-full bg-[#ff5f57] opacity-90"></span>
              <span class="size-3 rounded-full bg-[#febc2e] opacity-90"></span>
              <span class="size-3 rounded-full bg-[#28c840] opacity-90"></span>
              <span class="ml-3 font-mono text-[11px] text-muted-foreground">starter — zsh</span>
            </div>
            <div class="flex border-b border-white/10 bg-black/20 px-2 py-1">
              <span
                class="rounded-md bg-white/10 px-3 py-1.5 font-mono text-[11px] font-medium text-white ring-1 ring-white/10"
                >src/routes/+page.svelte</span
              >
              <span class="px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
                >site-config.ts</span
              >
            </div>
            <pre
              class="max-h-[min(340px,52vw)] overflow-x-auto overflow-y-auto p-5 pb-6 font-mono text-[11px] leading-[1.65] text-zinc-300 sm:text-xs md:max-h-[380px] md:p-6 md:text-[13px]"><code
                class="block whitespace-pre text-left text-[var(--on-primary-container)]"
                ><span class="text-pink-400">import</span><span
                  class="text-zinc-400"> &#123; siteConfig &#125; </span><span class="text-pink-400"
                  >from</span
                ><span class="text-emerald-400"> '$lib/site-config'</span><span
                  class="text-zinc-500">;</span
                >
<span class="text-pink-400">import</span><span
                  class="text-zinc-400"> &#123; setSeo &#125; </span><span class="text-pink-400"
                  >from</span
                ><span class="text-emerald-400"> '$lib/seo'</span><span class="text-zinc-500"
                  >;</span
                >

<span class="text-zinc-500">// Listo para producción: SEO, i18n, dark mode</span>
<span class="text-purple-400">setSeo</span><span class="text-zinc-400">(&#123;</span>
  <span class="text-sky-300">title</span><span class="text-zinc-500">:</span> siteConfig<span
                  class="text-zinc-500">.</span
                ><span class="text-sky-300">name</span><span class="text-zinc-500">,</span>
  <span class="text-sky-300">description</span><span class="text-zinc-500">:</span> <span
                  class="text-emerald-400">'Tu stack — sin magia negra.'</span
                >
<span class="text-zinc-400">&#125;)</span><span class="text-zinc-500">;</span></code
              ></pre>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
