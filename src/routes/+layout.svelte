<script lang="ts">
  import '../app.css';
  import { get } from 'svelte/store';
  import { t, locale, setLocale } from '$lib/i18n';
  import { siteConfig } from '$lib/site-config';
  import { page } from '$app/state';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import ToastContainer from '$lib/components/ToastContainer.svelte';
  import { Toaster } from '$lib/components/ui/sonner';
  import CookieConsent from '$lib/components/CookieConsent.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { seo } from '$lib/seo';
  import { onMount } from 'svelte';
  import type { Snippet } from 'svelte';
  import { ModeWatcher } from 'mode-watcher';
  import { mode, setMode } from 'mode-watcher';

  let { children }: { children: Snippet } = $props();

  let isDark = $derived(mode.current === 'dark');

  /** Svelte 5: `$store` dentro de funciones inline puede no reaccionar; usamos `get(locale)`. */
  function handleToggleLocale() {
    setLocale(get(locale) === 'en' ? 'es' : 'en');
  }

  function handleToggleTheme() {
    setMode(mode.current === 'dark' ? 'light' : 'dark');
  }

  onMount(() => {
    const saved = localStorage.getItem('lang');
    const hasManual = localStorage.getItem('lang_manual') === '1';
    if (hasManual && saved) {
      setLocale(saved as 'en' | 'es');
    } else {
      const nav = navigator.language || 'es';
      setLocale(nav.toLowerCase().startsWith('en') ? 'en' : 'es');
    }
    setTimeout(() => {
      document.querySelectorAll('.assembly-item:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 3000);
  });

  function navClass(href: string): string {
    const path = page.url.pathname;
    const active =
      href === '/' ? path === '/' : path === href || (href !== '/' && path.startsWith(href + '/'));
    if (active) {
      return 'relative border-b-2 border-primary pb-1 font-bold text-primary transition-colors duration-200 hover:text-primary';
    }
    return 'text-on-surface-variant transition-colors duration-200 hover:text-primary';
  }
</script>

<svelte:head>
  <title>{$seo.title}</title>
</svelte:head>

<!-- Primero: aplica clase .dark / color-scheme en <html> antes del resto (mode-watcher) -->
<ModeWatcher defaultMode="system" disableHeadScriptInjection />

<div class="flex min-h-0 w-full flex-1 flex-col">
  <!-- Nav — mismas utilidades que stitch .../code.html (enlaces reales) -->
  <nav
    class="fixed left-0 right-0 top-0 z-50 mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-outline-variant bg-surface/80 px-6 py-3 shadow-md backdrop-blur-md"
  >
    <div class="font-h3 text-h3 font-bold text-primary">
      {siteConfig.name}
    </div>
    <div class="hidden items-center gap-6 md:flex">
      <a class={navClass('/')} href="/">{$t('layout.nav.home')}</a>
      <a class={navClass('/components')} href="/components">{$t('layout.nav.components')}</a>
    </div>
    <div class="flex shrink-0 items-center gap-2 sm:gap-4">
      <div class="flex items-center gap-0.5 sm:gap-2">
        <button
          type="button"
          class="scale-95 p-2 text-on-surface-variant transition-colors hover:text-primary active:scale-90"
          onclick={handleToggleTheme}
          aria-label={$t('layout.aria.theme')}
        >
          <span class="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
        </button>
        <button
          type="button"
          class="scale-95 p-2 text-on-surface-variant transition-colors hover:text-primary active:scale-90"
          onclick={handleToggleLocale}
          aria-label={$t('layout.aria.language')}
        >
          <span class="material-symbols-outlined text-base sm:text-[24px]">language</span>
        </button>
      </div>
      <a
        href="/components"
        class="scale-95 rounded-full bg-primary px-6 py-2 font-bold text-white transition-transform active:scale-90"
      >
        {$t('layout.nav.getStarted')}
      </a>
    </div>
  </nav>

  <main id="main-content" class="w-full flex-1 pt-32">
    {#key page.url.pathname}
      <div class="block w-full min-h-0">
        {@render children()}
      </div>
    {/key}
  </main>

  <Footer />
</div>

<Toaster />
<ToastContainer />
<CookieConsent />
<JsonLd
  type={$seo.schemaType}
  headline={$seo.headline}
  datePublished={$seo.datePublished}
  dateModified={$seo.dateModified}
/>
