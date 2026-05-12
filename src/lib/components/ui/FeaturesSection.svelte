<script lang="ts">
  import { Bolt, Shield, Rocket, CloudUpload } from 'lucide-svelte';

  export type FeatureId = 'perf' | 'types' | 'dx' | 'deploy' | 'stack' | 'theme' | 'i18n' | 'seo';

  export type FeatureItem = {
    id: FeatureId;
    title: string;
    description: string;
  };

  type Props = {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    items?: FeatureItem[];
    id?: string;
    /** Caja redondeada tipo Stitch (surface-container-lowest) */
    variant?: 'default' | 'boxed';
  };

  let {
    eyebrow = undefined,
    title = '',
    subtitle = undefined,
    items = [],
    id = undefined,
    variant = 'default'
  }: Props = $props();

  const icons: Record<string, typeof Bolt> = {
    perf: Bolt,
    types: Shield,
    dx: Rocket,
    deploy: CloudUpload,
    stack: Bolt,
    theme: Shield,
    i18n: Rocket,
    seo: CloudUpload
  };
</script>

<section class="scroll-mt-24 bg-background py-16 md:py-20" {id}>
  <div
    class="mx-auto w-full max-w-7xl px-6 {variant === 'boxed'
      ? 'mb-32 rounded-3xl border border-border bg-card py-24'
      : ''}"
  >
    <div class="mx-auto mb-16 max-w-[44rem] text-center md:mb-16">
      {#if eyebrow}
        <span class="text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
      {/if}
      <h2
        class="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-[32px] md:leading-tight"
      >
        {title}
      </h2>
      {#if subtitle}
        <p class="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
      {/if}
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {#each items as item (item.id)}
        {@const Icon = icons[item.id] ?? Bolt}
        <article
          class="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-border dark:hover:border-primary/30"
        >
          <div
            class="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
          >
            <Icon class="size-7 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <h3 class="mb-2 text-xl font-semibold leading-snug text-foreground">{item.title}</h3>
          <p class="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </article>
      {/each}
    </div>
  </div>
</section>
