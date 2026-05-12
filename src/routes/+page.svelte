<script lang="ts">
  import { get } from 'svelte/store';
  import { siteConfig } from '$lib/site-config';
  import { setSeo } from '$lib/seo';
  import { locale, t } from '$lib/i18n';

  $effect(() => {
    void $locale;
    const tr = get(t);
    setSeo({
      title: tr('home.seo.title'),
      description: tr('home.seo.description'),
      ogTitle: siteConfig.name,
      ogDescription: tr('home.seo.description'),
      twitterCard: 'summary_large_image'
    });
  });
</script>

<!-- Home — textos desde i18n (ES/EN); estilo alineado con stitch reference -->
<div>
  <!-- Hero Section -->
  <section class="mx-auto mb-24 max-w-5xl px-6 text-center">
    <h1 class="font-h1 text-h1 mx-auto mb-6 max-w-3xl text-on-surface md:text-h1">
      {$t('home.hero.title')}
    </h1>
    <p class="font-subtitle text-subtitle mx-auto mb-8 max-w-2xl text-on-surface-variant">
      {$t('home.hero.subtitle')}
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a
        href="/components"
        class="rounded-xl bg-primary px-8 py-3 font-bold text-on-primary shadow-lg transition-colors hover:bg-primary-container"
      >
        {$t('home.hero.ctaPrimary')}
      </a>
      <a
        href={`${siteConfig.social.github}#readme`}
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-xl border border-outline-variant bg-surface-container-high px-8 py-3 font-bold text-on-surface transition-colors hover:bg-surface-variant"
      >
        {$t('home.hero.ctaSecondary')}
      </a>
    </div>
  </section>

  <!-- Code Snippet Section -->
  <section class="mx-auto mb-32 max-w-5xl px-6">
    <div class="overflow-hidden rounded-2xl border border-outline bg-inverse-surface shadow-2xl">
      <div class="flex items-center gap-2 border-b border-outline bg-inverse-surface px-4 py-3">
        <div class="size-3 rounded-full bg-error"></div>
        <div class="size-3 rounded-full bg-tertiary-container"></div>
        <div class="size-3 rounded-full bg-primary-container"></div>
        <span class="ml-4 font-code text-xs text-outline-variant"
          >src/lib/components/Counter.svelte</span
        >
      </div>
      <div class="overflow-x-auto p-6 font-code text-code">
        <pre class="text-on-primary-container"><code
            ><span class="text-primary-fixed-dim">script</span>
            <span class="text-secondary-fixed-dim">lang="ts"</span>&gt;
  <span class="text-tertiary-fixed-dim">let</span> count = <span class="text-on-tertiary-container"
              >$state</span
            >(<span class="text-secondary-container">0</span>);
  <span class="text-tertiary-fixed-dim">let</span> doubled = <span
              class="text-on-tertiary-container">$derived</span
            >(count * <span class="text-secondary-container">2</span>);

  <span class="text-on-tertiary-fixed-variant">function</span> <span class="text-primary-fixed"
              >increment</span
            >() {'{'}
    count += <span class="text-secondary-container">1</span>;
  }
<span class="text-primary-fixed-dim">/script</span>&gt;

<span class="text-primary-fixed-dim">&lt;button</span> <span class="text-secondary-fixed-dim"
              >onclick</span
            >={'{'}<span class="text-primary-fixed">increment</span>}<span
              class="text-primary-fixed-dim">&gt;</span
            >
  Clicks: {'{'}count} (Doubled: {'{'}doubled})
<span class="text-primary-fixed-dim">&lt;/button&gt;</span></code
          ></pre>
      </div>
    </div>
  </section>

  <!-- Features Grid -->
  <section
    class="mx-auto mb-32 max-w-7xl rounded-3xl border border-outline-variant bg-surface-container-lowest px-6 py-24"
  >
    <div class="mb-16 text-center">
      <span class="text-primary font-bold tracking-widest text-label uppercase"
        >{$t('home.features.eyebrow')}</span
      >
      <h2 class="font-h2 text-h2 mt-2 text-on-surface">{$t('home.features.title')}</h2>
    </div>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-card"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary"
        >
          <span class="material-symbols-outlined">bolt</span>
        </div>
        <h3 class="font-h3 text-h3 mb-2 text-on-surface">
          {$t('home.features.performance.title')}
        </h3>
        <p class="text-body-sm text-on-surface-variant">
          {$t('home.features.performance.desc')}
        </p>
      </div>
      <div
        class="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-card"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary"
        >
          <span class="material-symbols-outlined">shield</span>
        </div>
        <h3 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.features.types.title')}</h3>
        <p class="text-body-sm text-on-surface-variant">
          {$t('home.features.types.desc')}
        </p>
      </div>
      <div
        class="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-card"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary"
        >
          <span class="material-symbols-outlined">rocket_launch</span>
        </div>
        <h3 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.features.dx.title')}</h3>
        <p class="text-body-sm text-on-surface-variant">
          {$t('home.features.dx.desc')}
        </p>
      </div>
      <div
        class="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-card"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary"
        >
          <span class="material-symbols-outlined">cloud_upload</span>
        </div>
        <h3 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.features.deploy.title')}</h3>
        <p class="text-body-sm text-on-surface-variant">
          {$t('home.features.deploy.desc')}
        </p>
      </div>
      <div
        class="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-card"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary"
        >
          <span class="material-symbols-outlined">integration_instructions</span>
        </div>
        <h3 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.features.cms.title')}</h3>
        <p class="text-body-sm text-on-surface-variant">
          {$t('home.features.cms.desc')}
        </p>
      </div>
      <div
        class="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-card"
      >
        <div
          class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/10 text-primary"
        >
          <span class="material-symbols-outlined">globe</span>
        </div>
        <h3 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.features.product.title')}</h3>
        <p class="text-body-sm text-on-surface-variant">
          {$t('home.features.product.desc')}
        </p>
      </div>
    </div>
  </section>

  <!-- Steps Section -->
  <section class="mx-auto mb-32 max-w-5xl px-6">
    <h2 class="font-h2 text-h2 mb-16 text-center text-on-surface">{$t('home.steps.title')}</h2>
    <div class="relative">
      <div class="absolute bottom-0 left-8 top-0 hidden w-px bg-outline-variant md:block"></div>
      <div class="space-y-12">
        <div class="relative flex items-start gap-8">
          <div
            class="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-on-primary"
          >
            1
          </div>
          <div class="pt-4">
            <h4 class="font-h3 text-h3 mb-2">{$t('home.steps.step1.title')}</h4>
            <p class="text-body text-on-surface-variant">
              {$t('home.steps.step1.desc')}
            </p>
          </div>
        </div>
        <div class="relative flex items-start gap-8">
          <div
            class="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-on-primary"
          >
            2
          </div>
          <div class="pt-4">
            <h4 class="font-h3 text-h3 mb-2">{$t('home.steps.step2.title')}</h4>
            <p class="text-body text-on-surface-variant">
              {$t('home.steps.step2.desc')}
            </p>
          </div>
        </div>
        <div class="relative flex items-start gap-8">
          <div
            class="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-on-primary"
          >
            3
          </div>
          <div class="pt-4">
            <h4 class="font-h3 text-h3 mb-2">{$t('home.steps.step3.title')}</h4>
            <p class="text-body text-on-surface-variant">
              {$t('home.steps.step3.desc')}
            </p>
          </div>
        </div>
        <div class="relative flex items-start gap-8">
          <div
            class="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-on-primary"
          >
            4
          </div>
          <div class="pt-4">
            <h4 class="font-h3 text-h3 mb-2">{$t('home.steps.step4.title')}</h4>
            <p class="text-body text-on-surface-variant">
              {$t('home.steps.step4.desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA Card -->
  <section class="mx-auto mb-32 max-w-5xl px-6">
    <div
      class="relative overflow-hidden rounded-3xl bg-primary-container p-12 text-center text-on-primary-container"
    >
      <div
        class="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl"
      ></div>
      <div class="relative z-10">
        <h2 class="font-h2 text-h2 mb-6">{$t('home.cta.title')}</h2>
        <p class="text-subtitle mx-auto mb-8 max-w-xl opacity-90">
          {$t('home.cta.subtitle')}
        </p>
        <a
          href="/components"
          class="inline-block rounded-xl bg-white px-12 py-4 text-lg font-bold text-primary-container transition-transform hover:bg-surface active:scale-95"
        >
          {$t('home.cta.button')}
        </a>
      </div>
    </div>
  </section>
</div>
