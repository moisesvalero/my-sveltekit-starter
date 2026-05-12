<script lang="ts">
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n';
</script>

<section class="social-proof">
  <div class="inner">
    <p class="eyebrow" use:reveal={{ stage: 'title' }}>{$t('socialProof.eyebrow')}</p>
    <div class="logos">
      <div class="logo-item" aria-label="Svelte" use:reveal={{ stage: 'content', delay: 80 }}>
        <img src="/logos/svelte.svg" alt="Svelte" />
      </div>
      <div class="logo-item" aria-label="Framer" use:reveal={{ stage: 'content', delay: 120 }}>
        <img src="/logos/framer.svg" alt="Framer" />
      </div>
      <div class="logo-item" aria-label="Stripe" use:reveal={{ stage: 'content', delay: 160 }}>
        <img src="/logos/stripe.svg" alt="Stripe" />
      </div>
      <div class="logo-item" aria-label="Supabase" use:reveal={{ stage: 'content', delay: 200 }}>
        <img src="/logos/supabase.svg" alt="Supabase" />
      </div>
      <div class="logo-item" aria-label="Arc Browser" use:reveal={{ stage: 'content', delay: 240 }}>
        <img src="/logos/arc_browser.svg" alt="Arc Browser" />
      </div>
      <div class="logo-item" aria-label="Vercel" use:reveal={{ stage: 'content', delay: 280 }}>
        <img src="/logos/vercel.svg" alt="Vercel" />
      </div>
      <div class="logo-item" aria-label="Linear" use:reveal={{ stage: 'content', delay: 320 }}>
        <img src="/logos/linear.svg" alt="Linear" />
      </div>
      <div class="logo-item" aria-label="Raycast" use:reveal={{ stage: 'content', delay: 360 }}>
        <img src="/logos/raycast.svg" alt="Raycast" />
      </div>
      <div class="logo-item" aria-label="Railway" use:reveal={{ stage: 'content', delay: 400 }}>
        <img src="/logos/railway.svg" alt="Railway" />
      </div>
      <div class="logo-item" aria-label="Resend" use:reveal={{ stage: 'content', delay: 440 }}>
        <img src="/logos/resend-wordmark-black.svg" alt="Resend" />
      </div>
    </div>
    <div class="stats">
      <div class="stat" use:reveal={{ stage: 'content', delay: 320 }}>
        <span class="value">50+</span>
        <span class="label">{$t('socialProof.stats.components')}</span>
      </div>
      <div class="stat" use:reveal={{ stage: 'content', delay: 380 }}>
        <span class="value">3x</span>
        <span class="label">{$t('socialProof.stats.delivery')}</span>
      </div>
      <div class="stat" use:reveal={{ stage: 'content', delay: 440 }}>
        <span class="value">24/7</span>
        <span class="label">{$t('socialProof.stats.support')}</span>
      </div>
    </div>
  </div>
</section>

<style>
  .social-proof {
    padding: 120px 1.5rem 120px;
  }

  .inner {
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 999px;
    border: 1px solid rgba(15, 23, 42, 0.06);
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.03), rgba(15, 23, 42, 0.01));
    padding: 1.25rem 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
  }

  .eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-secondary);
    flex: 1 1 160px;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    flex: 2 1 260px;
  }

  .logo-item {
    width: 86px;
    height: 34px;
    border-radius: 10px;
    border: 1px solid rgba(15, 23, 42, 0.08);
    background: rgba(255, 255, 255, 0.88);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .logo-item img {
    max-width: 68px;
    max-height: 20px;
    width: auto;
    height: auto;
    filter: grayscale(1);
    opacity: 0.4;
    transition:
      filter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .logo-item:hover img {
    filter: grayscale(0);
    opacity: 1;
  }

  .stats {
    display: flex;
    gap: 1.5rem;
    flex: 1 1 220px;
    justify-content: flex-end;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .value {
    font-weight: 600;
    font-size: 1rem;
    color: var(--text-main);
  }

  .label {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  @media (max-width: 800px) {
    .inner {
      border-radius: 24px;
      padding: 1.25rem 1.25rem;
    }

    .stats {
      justify-content: flex-start;
    }
  }

  @media (max-width: 768px) {
    .social-proof {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  @media (min-width: 1600px) {
    .social-proof {
      padding-block: 120px;
    }

    .inner {
      max-width: 1360px;
      padding: 1.4rem 2.4rem;
      gap: 2rem;
    }
  }
</style>
