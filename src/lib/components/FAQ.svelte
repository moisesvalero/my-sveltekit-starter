<script lang="ts">
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n';
</script>

<section
  class="relative overflow-hidden py-32 px-8 text-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50"
>
  <div
    class="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-purple-200/20 blur-3xl animate-[float-a_14s_ease-in-out_infinite]"
  ></div>
  <div
    class="absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-blue-200/15 blur-3xl animate-[float-b_16s_ease-in-out_infinite]"
  ></div>
  <div
    class="absolute inset-0 bg-[linear-gradient(rgba(120,80,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(120,80,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"
  ></div>

  <div class="relative z-10 max-w-2xl mx-auto">
    <div
      class="inline-flex items-center gap-2 px-4 py-2 mb-7 text-xs font-semibold tracking-widest uppercase rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600"
      use:reveal={{ stage: 'content', delay: 110 }}
    >
      <div
        class="w-1.5 h-1.5 rounded-full bg-purple-500 animate-[pulse_2s_ease-in-out_infinite]"
      ></div>
      {$t('faqCta.eyebrow')}
    </div>

    <h2
      class="text-4xl font-extrabold tracking-tight text-slate-900 mb-5 sm:text-5xl lg:text-[3.625rem]"
      style="opacity:0;transform:translate3d(0,22px,0) scale(0.97);filter:blur(6px);"
      use:reveal={{ stage: 'content', delay: 170 }}
    >
      {$t('faqCta.titleLine1')}<br /><span
        class="bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent"
        >{$t('faqCta.titleLine2')}</span
      >
    </h2>

    <p
      class="text-lg text-slate-500 leading-relaxed mb-11 max-w-xl mx-auto"
      style="opacity:0;transform:translate3d(0,22px,0) scale(0.97);filter:blur(6px);"
      use:reveal={{ stage: 'content', delay: 230 }}
    >
      {$t('faqCta.subtitle')}
    </p>

    <div
      class="flex flex-wrap justify-center gap-4 mb-0"
      style="opacity:0;transform:translate3d(0,22px,0) scale(0.97);filter:blur(6px);"
      use:reveal={{ stage: 'content', delay: 290 }}
    >
      <a
        href="#pricing"
        class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg inline-block"
        >{$t('faqCta.primary')}</a
      >
      <a
        href="#components"
        class="px-8 py-4 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all inline-block"
        >{$t('faqCta.secondary')}</a
      >
    </div>

    <div
      class="mt-12 flex items-center justify-center gap-4 flex-wrap"
      style="opacity:0;transform:translate3d(0,22px,0) scale(0.97);filter:blur(6px);"
      use:reveal={{ stage: 'content', delay: 350 }}
    >
      <div class="flex">
        <div
          class="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-blue-400 -ml-2 first:ml-0 shadow-sm"
        ></div>
        <div
          class="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-600 to-blue-400 -ml-2 shadow-sm"
        ></div>
        <div
          class="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-green-500 to-green-400 -ml-2 shadow-sm"
        ></div>
        <div
          class="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-orange-500 to-amber-400 -ml-2 shadow-sm"
        ></div>
      </div>
      <span class="text-sm text-slate-400">{@html $t('faqCta.proof')}</span>
      <div class="w-px h-5 bg-slate-200"></div>
      <div class="flex gap-0.5">
        {#each [0, 1, 2, 3, 4] as star (star)}
          <div
            class="w-3 h-3 bg-amber-400"
            style="clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)"
          ></div>
        {/each}
      </div>
      <span class="text-sm text-slate-400">{@html $t('faqCta.rating')}</span>
    </div>
  </div>
</section>

<style>
  @keyframes float-a {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(18px, -14px, 0) scale(1.08);
    }
  }
  @keyframes float-b {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(-22px, 12px, 0) scale(1.06);
    }
  }
</style>
