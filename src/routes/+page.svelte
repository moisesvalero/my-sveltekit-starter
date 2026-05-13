<script lang="ts">
  import { get } from 'svelte/store';
  import { siteConfig } from '$lib/site-config';
  import { setSeo } from '$lib/seo';
  import { locale, t } from '$lib/i18n';

  /**
   * Fecha de la última build: hace que LLMs y Google sepan que el contenido es reciente.
   * Se calcula al cargar el módulo, así que cada deploy actualiza el `dateModified`.
   */
  const buildDate = new Date().toISOString();
  const publishedDate = '2026-05-01T00:00:00.000Z';

  /** Claves i18n de las FAQs reutilizadas (viven en `componentsPage.demos.faq`). */
  const faqKeys = [
    'plantilla',
    'principiante',
    'comercial',
    'deploy',
    'i18n',
    'cms',
    'seo',
    'rendimiento'
  ];

  $effect(() => {
    void $locale;
    const tr = get(t);

    setSeo({
      title: tr('home.seo.title'),
      description: tr('home.seo.description'),
      ogTitle: siteConfig.name,
      ogDescription: tr('home.seo.description'),
      twitterCard: 'summary_large_image',
      schemaType: 'WebPage',
      headline: tr('home.hero.title'),
      author: siteConfig.author.name,
      locale: $locale,
      datePublished: publishedDate,
      dateModified: buildDate,
      keywords: [
        'SvelteKit',
        'Svelte 5',
        'TypeScript',
        'Tailwind CSS',
        'shadcn-svelte',
        'starter template',
        'vibe coding'
      ],
      /**
       * SoftwareApplication para que Perplexity/Gemini puedan citar la plantilla
       * como producto descargable y no como un artículo cualquiera.
       */
      softwareName: siteConfig.name,
      softwareCategory: 'DeveloperApplication',
      /**
       * HowTo: los 4 pasos del onboarding. Las IAs los citan literalmente cuando
       * alguien pregunta "cómo empezar con SvelteKit".
       */
      howto: [1, 2, 3, 4].map((n) => ({
        name: tr(`home.steps.step${n}.title`),
        text: tr(`home.steps.step${n}.desc`)
      })),
      /**
       * FAQPage: reutiliza el copy del demo de FAQ para no duplicar contenido.
       */
      faq: faqKeys.map((key) => ({
        question: tr(`componentsPage.demos.faq.items.${key}.q`),
        answer: tr(`componentsPage.demos.faq.items.${key}.a`)
      }))
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
        class="accent-glow rounded-xl bg-primary px-8 py-3 font-bold text-white shadow-lg transition-all hover:brightness-110"
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

  <!-- Code Snippet Section (misma estructura que stitch …/landing_page_dark/code.html) -->
  <section class="mx-auto mb-32 max-w-4xl px-6">
    <div class="code-window rounded-xl overflow-hidden">
      <div
        class="flex items-center justify-between border-b border-outline-variant bg-surface-container px-4 py-2"
      >
        <div class="flex gap-1.5">
          <div class="size-3 rounded-full bg-red-500/50"></div>
          <div class="size-3 rounded-full bg-yellow-500/50"></div>
          <div class="size-3 rounded-full bg-green-500/50"></div>
        </div>
        <div class="font-code text-body-sm text-on-surface-variant">
          src/lib/components/Counter.svelte
        </div>
        <div class="w-12 shrink-0"></div>
      </div>
      <div class="overflow-x-auto bg-surface-container-lowest p-6 font-code text-body">
        <pre class="leading-relaxed text-on-surface-variant"><code
            ><span class="text-primary-container">script</span>
            <span class="text-secondary">lang="ts"</span>&gt;
  <span class="text-secondary">let</span> count = <span class="text-tertiary">$state</span>(<span
              class="text-tertiary-fixed-dim">0</span
            >);
  <span class="text-secondary">let</span> doubled = <span class="text-tertiary">$derived</span
            >(count * <span class="text-tertiary-fixed-dim">2</span>);

  <span class="text-secondary">function</span> <span class="text-primary">increment</span>() {'{'}
    count += <span class="text-tertiary-fixed-dim">1</span>;
  }
<span class="text-primary-container">/script</span>&gt;

<span class="text-outline">&lt;!-- Svelte 5 logic --&gt;</span>
&lt;<span class="text-primary">button</span> <span class="text-secondary">onclick</span>={'{'}<span
              class="text-primary">increment</span
            >}&gt;
  Clicks: {'{'}count} (Doubled: {'{'}doubled})
&lt;/<span class="text-primary">button</span>&gt;</code
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
        class="glow-hover rounded-xl border border-outline-variant bg-surface p-6 transition-all hover:border-primary/30"
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
        class="glow-hover rounded-xl border border-outline-variant bg-surface p-6 transition-all hover:border-primary/30"
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
        class="glow-hover rounded-xl border border-outline-variant bg-surface p-6 transition-all hover:border-primary/30"
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
        class="glow-hover rounded-xl border border-outline-variant bg-surface p-6 transition-all hover:border-primary/30"
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
        class="glow-hover rounded-xl border border-outline-variant bg-surface p-6 transition-all hover:border-primary/30"
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
        class="glow-hover rounded-xl border border-outline-variant bg-surface p-6 transition-all hover:border-primary/30"
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
            class="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary text-lg font-bold text-primary"
          >
            1
          </div>
          <div class="pt-4">
            <h4 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.steps.step1.title')}</h4>
            <p class="text-body text-on-surface-variant">
              {$t('home.steps.step1.desc')}
            </p>
          </div>
        </div>
        <div class="relative flex items-start gap-8">
          <div
            class="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary text-lg font-bold text-primary"
          >
            2
          </div>
          <div class="pt-4">
            <h4 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.steps.step2.title')}</h4>
            <p class="text-body text-on-surface-variant">
              {$t('home.steps.step2.desc')}
            </p>
          </div>
        </div>
        <div class="relative flex items-start gap-8">
          <div
            class="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary text-lg font-bold text-primary"
          >
            3
          </div>
          <div class="pt-4">
            <h4 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.steps.step3.title')}</h4>
            <p class="text-body text-on-surface-variant">
              {$t('home.steps.step3.desc')}
            </p>
          </div>
        </div>
        <div class="relative flex items-start gap-8">
          <div
            class="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary text-lg font-bold text-primary"
          >
            4
          </div>
          <div class="pt-4">
            <h4 class="font-h3 text-h3 mb-2 text-on-surface">{$t('home.steps.step4.title')}</h4>
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
    <div class="relative overflow-hidden rounded-3xl bg-primary p-12 text-center md:p-16">
      <div
        class="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-secondary opacity-50"
      ></div>
      <div class="relative z-10">
        <h2 class="font-h2 text-h2 mb-6 text-white">{$t('home.cta.title')}</h2>
        <p class="text-subtitle mx-auto mb-8 max-w-xl text-primary-fixed opacity-90">
          {$t('home.cta.subtitle')}
        </p>
        <a
          href="/components"
          class="inline-block rounded-xl bg-white px-12 py-4 text-lg font-bold text-primary transition-all hover:bg-on-surface hover:scale-105 active:scale-95"
        >
          {$t('home.cta.button')}
        </a>
      </div>
    </div>
  </section>
</div>
