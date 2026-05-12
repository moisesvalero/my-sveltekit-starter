<script lang="ts">
  import { onMount } from 'svelte';
  import { t, locale } from '$lib/i18n';

  let heroLoaded = $state(false);
  let splineLoaded = $state(false);
  let showSpline = $state(false);

  onMount(() => {
    const id = requestAnimationFrame(() => {
      heroLoaded = true;
    });
    const splineTimer = setTimeout(() => {
      showSpline = true;
    }, 600);

    return () => {
      cancelAnimationFrame(id);
      clearTimeout(splineTimer);
    };
  });
</script>

<section class="hero" class:hero-loaded={heroLoaded}>
  <div class="hero-bg">
    <div class="hero-bg-media">
      {#if showSpline}
        <div class="spline-wrap" class:loaded={splineLoaded}>
          <iframe
            src="https://my.spline.design/interactiveaiwebsite-4kvHSstoxbqWFDKp11RVJkCe/"
            loading="lazy"
            title="Svelte Starter 3D Hero"
            onload={() => (splineLoaded = true)}
          ></iframe>
        </div>
      {/if}
    </div>
    <div class="spline-watermark-mask" aria-hidden="true"></div>
  </div>

  <div class="hero-inner">
    <div class="copy">
      <div class="pill hero-assemble hero-pill">
        {$t('hero.pill')}
      </div>
      <h1 class="hero-assemble hero-title">
        {#if $locale === 'es'}
          <span class="hero-line-main">Kit creativo de UI</span><br />
          <span class="gradient-text hero-line-gradient">para apps web</span>
        {:else}
          <span class="hero-line-main">{$t('hero.titleLine1')}</span><br />
          <span class="gradient-text hero-line-gradient">{$t('hero.titleLine2')}</span>
        {/if}
      </h1>
      <p class="subtitle hero-assemble hero-subtitle">
        {$t('hero.subtitle')}
      </p>
      <div class="actions hero-assemble hero-actions">
        <a class="btn-primary" href="#pricing">{$t('hero.ctaPrimary')}</a>
        <a class="btn-secondary" href="#components">{$t('hero.ctaSecondary')}</a>
      </div>
      <p class="footnote hero-assemble hero-footnote">
        {$t('hero.footnote')}
      </p>
    </div>
    <div class="hero-spacer" aria-hidden="true"></div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: 120px 1.5rem 120px;
    background: #ffffff;
    overflow: hidden;
    min-height: clamp(700px, 96svh, 940px);
    isolation: isolate;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    pointer-events: auto;
  }

  .hero-bg-media {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .hero-bg iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    display: block;
    pointer-events: auto;
    will-change: transform;
  }

  .spline-wrap {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .spline-wrap.loaded {
    opacity: 1;
  }

  .hero-bg::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background:
      radial-gradient(circle at 74% 28%, rgba(99, 102, 241, 0.34), transparent 42%),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.97) 0%,
        rgba(255, 255, 255, 0.9) 32%,
        rgba(255, 255, 255, 0.1) 66%,
        rgba(255, 255, 255, 0) 100%
      );
  }

  .hero-bg::after {
    content: none;
  }

  .spline-watermark-mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    width: 100%;
    height: clamp(84px, 10vw, 138px);
    pointer-events: none;
    z-index: 5;
    filter: blur(8px);
    opacity: 1;
    background:
      linear-gradient(
        to top,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.96) 62%,
        rgba(255, 255, 255, 0.78) 82%,
        transparent
      ),
      linear-gradient(
        to left,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.95) 50%,
        rgba(255, 255, 255, 0.72) 74%,
        transparent
      );
  }

  .hero-inner {
    position: relative;
    z-index: 3;
    pointer-events: none;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(420px, 1.05fr);
    gap: clamp(2rem, 4vw, 4.2rem);
    align-items: center;
  }

  .copy {
    position: relative;
    z-index: 2;
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
    max-width: 640px;
  }

  .hero-spacer {
    min-height: clamp(420px, 48vw, 640px);
    pointer-events: none;
  }

  .subtitle,
  .footnote {
    max-width: 34rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.25rem 0.8rem;
    border-radius: 999px;
    font-size: 0.75rem;
    background: rgba(99, 102, 241, 0.08);
    color: var(--accent);
    border: 1px solid rgba(99, 102, 241, 0.25);
  }

  .hero-assemble {
    opacity: 0;
    transform: translate3d(var(--hero-x, 0), var(--hero-y, 84px), 0)
      rotate(var(--hero-rotate, 0deg)) scale(var(--hero-scale, 0.66));
    filter: blur(8px);
    transition:
      opacity 1.08s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 1.28s cubic-bezier(0.34, 1.56, 0.64, 1),
      filter 1.02s cubic-bezier(0.34, 1.56, 0.64, 1),
      text-shadow 0.96s cubic-bezier(0.34, 1.56, 0.64, 1);
    will-change: transform, opacity, filter;
  }

  .hero-pill {
    --hero-y: 66px;
    --hero-x: -28px;
    --hero-rotate: -10deg;
    --hero-scale: 0.58;
    transition-delay: 90ms;
  }

  .hero-title {
    --hero-y: 106px;
    --hero-x: -16px;
    --hero-rotate: 6deg;
    --hero-scale: 0.6;
    transition-delay: 170ms;
  }

  .hero-subtitle {
    --hero-y: 86px;
    --hero-x: 14px;
    --hero-rotate: -3deg;
    --hero-scale: 0.66;
    transition-delay: 260ms;
  }

  .hero-actions {
    --hero-y: 74px;
    --hero-x: -18px;
    --hero-rotate: 3deg;
    --hero-scale: 0.7;
    transition-delay: 340ms;
  }

  .hero-footnote {
    --hero-y: 64px;
    --hero-x: 16px;
    --hero-rotate: -2deg;
    --hero-scale: 0.74;
    transition-delay: 430ms;
  }

  .hero-loaded .hero-assemble {
    opacity: 1;
    transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
    filter: blur(0);
  }

  .hero-loaded .hero-title {
    text-shadow: 0 24px 70px rgba(15, 23, 42, 0.2);
    animation: hero-title-bounce 940ms cubic-bezier(0.34, 1.56, 0.64, 1) 180ms both;
  }

  .hero-loaded .hero-subtitle {
    animation: hero-sub-bounce 860ms cubic-bezier(0.34, 1.56, 0.64, 1) 280ms both;
  }

  h1 {
    font-size: clamp(2.7rem, 5vw, 3.8rem);
    line-height: 1.05;
    font-weight: 700;
    letter-spacing: -0.04em;
    color: var(--text-main);
  }

  h1 span {
    color: var(--text-secondary);
    font-weight: 400;
  }

  .hero-line-main {
    display: inline-block;
    white-space: nowrap;
    color: inherit;
    font-weight: inherit;
  }

  .hero-line-gradient {
    display: inline-block;
    white-space: nowrap;
  }

  .gradient-text {
    background: linear-gradient(135deg, #3b82f6, #0ea5e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 32rem;
    line-height: 1.7;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
  }

  .btn-primary {
    background: var(--primary);
    color: var(--primary-foreground);
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: none;
    cursor: pointer;
    display: inline-block;
  }

  .btn-primary:hover {
    background: var(--accent-hover);
    transform: translateY(-2px);
  }

  .btn-secondary {
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    color: var(--text-main);
    background: var(--bg-soft);
    transition: background 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: inline-block;
  }

  .btn-secondary:hover {
    background: #f0f1f3;
  }

  .footnote {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }

  @keyframes hero-title-bounce {
    0% {
      transform: translateY(0) scale(1);
    }
    35% {
      transform: translateY(-14px) scale(1.02);
    }
    62% {
      transform: translateY(4px) scale(0.996);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes hero-sub-bounce {
    0% {
      transform: translateY(0) scale(1);
    }
    36% {
      transform: translateY(-8px) scale(1.01);
    }
    64% {
      transform: translateY(3px) scale(0.998);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 900px) {
    .hero {
      padding: 120px 1.25rem 120px;
      min-height: clamp(760px, 100svh, 940px);
    }

    .hero-inner {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.2rem;
    }

    .hero-bg-media {
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .spline-watermark-mask {
      left: 0;
      right: 0;
      bottom: -4px;
      width: 100%;
      height: clamp(82px, 21vw, 130px);
    }

    .hero-bg::before {
      background:
        radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.34), transparent 48%),
        linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.38) 0%,
          rgba(255, 255, 255, 0.8) 74%,
          rgba(255, 255, 255, 0.94) 100%
        );
    }

    .copy {
      align-items: center;
      text-align: center;
      background: rgba(255, 255, 255, 0.62);
      backdrop-filter: blur(22px);
      -webkit-backdrop-filter: blur(22px);
      border: 1px solid rgba(255, 255, 255, 0.62);
      border-radius: 24px;
      padding: 1.7rem 1.35rem;
      box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18);
    }

    .hero-spacer {
      display: none;
    }

    .subtitle,
    .footnote {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .actions {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 640px) {
    .hero {
      min-height: clamp(720px, 100svh, 860px);
    }

    .copy {
      padding: 1.6rem 1.6rem;
      max-width: 360px;
      width: 100%;
    }

    .subtitle {
      font-size: 0.95rem;
      line-height: 1.6;
    }

    h1 {
      font-size: clamp(2rem, 7vw, 2.6rem);
    }

    .hero-bg-media {
      inset: 0;
      width: 100%;
      height: 100%;
    }

    .spline-watermark-mask {
      left: 0;
      right: 0;
      bottom: -6px;
      width: 100%;
      height: clamp(84px, 25vw, 136px);
    }
  }
</style>
