<script lang="ts">
  import "../app.css";
  import { t, locale, setLocale } from '$lib/i18n/index.js';
  import { siteConfig } from '$lib/site-config';
  import { page } from '$app/state';
  import { fade } from 'svelte/transition';
  import JsonLd from '$lib/components/JsonLd.svelte';
  import ToastContainer from '$lib/components/ToastContainer.svelte';
  import CookieConsent from '$lib/components/CookieConsent.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { initDarkMode } from '$lib/stores/darkMode';
  import { seo } from '$lib/seo';
  import { onMount } from 'svelte';

  let menuOpen = $state(false);

  onMount(() => {
    initDarkMode();
    // Fallback: si las animaciones no disparan, mostrar todo tras 3s
    setTimeout(() => {
      document.querySelectorAll('.assembly-item:not(.is-visible)').forEach((el) => {
        el.classList.add('is-visible');
      });
    }, 3000);
  });

  const toggleMenu = () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    menuOpen = false;
    document.body.style.overflow = '';
  };

  const handleLinkMove = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };
</script>

<svelte:head>
  <title>{$t('layout.title')}</title>
</svelte:head>

<header class="header" class:menu-open={menuOpen}>
  <div class="header-inner">
    <a href="/" class="logo">{siteConfig.name}</a>

    <nav class="nav-desktop">
      {#each siteConfig.nav as item (item.href)}
        <a href={item.href} onmousemove={handleLinkMove}>{item.label}</a>
      {/each}
    </nav>

    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" class="btn-cta desktop-only" onmousemove={handleLinkMove}>{$t('layout.nav.contact')}</a>

    <ThemeToggle />

    <button
      class="lang-btn desktop-only"
      onclick={() => setLocale($locale === 'en' ? 'es' : 'en')}
      aria-label="Switch language"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c5cbf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span>{$locale === 'en' ? 'EN' : 'ES'}</span>
      <div class="lang-dot"></div>
    </button>

    <button
      class="lang-btn mobile-lang"
      onclick={() => setLocale($locale === 'en' ? 'es' : 'en')}
      aria-label="Switch language"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c5cbf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span>{$locale === 'en' ? 'EN' : 'ES'}</span>
      <div class="lang-dot"></div>
    </button>

    <button
      type="button"
      class="hamburger"
      class:open={menuOpen}
      onclick={toggleMenu}
      aria-label={$t('layout.aria.toggleMenu')}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  {#if menuOpen}
    <div
      class="mobile-menu"
      role="button"
      tabindex="0"
      onclick={(e) => e.currentTarget === e.target && closeMenu()}
      onkeydown={(e) => e.key === 'Escape' && closeMenu()}
    >
      <nav class="mobile-nav">
        {#each siteConfig.nav as item (item.href)}
          <a href={item.href} onclick={closeMenu}>{item.label}</a>
        {/each}
        <a href="/contacto" class="btn-cta mobile-cta" onclick={closeMenu}>
          {$t('layout.nav.getStarted')}
        </a>
      </nav>
    </div>
  {/if}
</header>

<main id="main-content">
  {#key page.url.pathname}
    <div class="page-transition" in:fade={{ duration: 200 }}>
      <slot />
    </div>
  {/key}
</main>

<ToastContainer />
<CookieConsent />
<JsonLd
  type={$seo.schemaType}
  headline={$seo.headline}
  datePublished={$seo.datePublished}
  dateModified={$seo.dateModified}
/>

<style>
  * { box-sizing: border-box; }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding-top: 0.8rem;
    display: flex;
    justify-content: center;
    pointer-events: none;
  }
  .header-inner {
    width: min(92%, 1200px);
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 999px;
    box-shadow: 0 14px 40px rgba(15, 23, 42, 0.12), 0 1px 0 rgba(255, 255, 255, 0.65) inset;
    pointer-events: auto;
    transition: background-color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  :global(.dark) .header-inner {
    background: rgba(15, 23, 42, 0.9);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.05) inset;
  }
  .logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: -0.04em;
    text-decoration: none;
  }
  .nav-desktop {
    display: flex;
    gap: 0.4rem;
    margin-left: auto;
    margin-right: 0.8rem;
  }
  .nav-desktop a {
    --mx: 50%;
    --my: 50%;
    text-decoration: none;
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: -0.015em;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.62rem 1rem;
    border-radius: 999px;
    position: relative;
    overflow: hidden;
    transition: color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .nav-desktop a::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at var(--mx) var(--my), rgba(167, 139, 250, 0.07), transparent 60%),
      rgba(99, 102, 241, 0.015);
    opacity: 0;
    transform: scale(0.985);
    transition: opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    pointer-events: none;
  }
  .nav-desktop a:hover {
    color: var(--accent);
    transform: translateY(-0.25px);
  }
  .nav-desktop a:hover::before {
    opacity: 0.52;
    transform: scale(1);
  }
  .desktop-only { margin-left: 0; }
  .btn-cta {
    text-decoration: none;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: #fff !important;
    border: 1px solid rgba(139, 92, 246, 0.45);
    box-shadow: 0 10px 26px rgba(99, 102, 241, 0.25);
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.62rem 1rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .btn-cta::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      115deg,
      transparent 18%,
      rgba(255, 255, 255, 0.38) 46%,
      rgba(255, 255, 255, 0.04) 62%,
      transparent 78%
    );
    opacity: 0.7;
    transform: translateX(-120%);
    transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    pointer-events: none;
  }
  .btn-cta:hover {
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 14px 34px rgba(99, 102, 241, 0.33);
  }
  .btn-cta:hover::before {
    opacity: 1;
    transform: translateX(120%);
  }
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    z-index: 110;
  }
  .hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: #1a1a2e;
    border-radius: 2px;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s;
    transform-origin: center;
  }
  .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .mobile-menu {
    position: fixed;
    inset: 0;
    background: rgba(7, 9, 20, 0.56);
    z-index: 99;
    animation: fadeIn 0.3s ease;
    pointer-events: auto;
  }
  .mobile-nav {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 75%;
    max-width: 300px;
    background: #ffffff;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: -18px 0 36px rgba(15, 23, 42, 0.18);
    padding: 80px 24px 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .mobile-nav a {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a2e;
    text-decoration: none;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    transition: color 0.3s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .mobile-nav a:hover { color: #7c5cbf; transform: translateX(4px); }
  .mobile-cta {
    margin-top: 12px;
    text-align: center;
    border-bottom: none !important;
    padding: 10px 14px !important;
    min-height: 36px;
    font-size: 13px;
  }
  .lang-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 7px 14px;
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    cursor: pointer;
    font-family: -apple-system, sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #1a1a2e;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  }
  .lang-btn:hover {
    border-color: rgba(124, 92, 191, 0.3);
    background: rgba(124, 92, 191, 0.05);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(124, 92, 191, 0.15);
  }
  .lang-btn svg { opacity: 0.7; transition: opacity 0.3s; }
  .lang-btn:hover svg { opacity: 1; }
  .mobile-lang { display: none; }
  .lang-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #7c5cbf;
    animation: dotPulse 2s ease-in-out infinite;
  }
  @keyframes dotPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.7); }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

  @media (max-width: 768px) {
    .header { padding-top: 0.5rem; pointer-events: auto; }
    .header-inner {
      width: min(95%, 560px);
      padding: 0.66rem 0.85rem;
      border-radius: 18px;
      background: #fff;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);
    }
    .nav-desktop { display: none; }
    .desktop-only { display: none; }
    .mobile-lang { display: inline-flex; margin-left: auto; }
    .hamburger { display: flex; }
    .logo { font-size: 1.05rem; }
  }

  @media (min-width: 769px) {
    .mobile-menu { display: none; }
  }
</style>
