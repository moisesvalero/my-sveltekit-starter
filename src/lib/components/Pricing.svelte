<script lang="ts">
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n';

  const { isYearly, toggleBilling } = $props<{
    isYearly: boolean;
    toggleBilling: () => void;
  }>();

  let togglePhase = $state<'idle' | 'toggling' | 'done'>('idle');

  function handleToggle() {
    togglePhase = 'toggling';
    toggleBilling();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        togglePhase = 'done';
      });
    });
  }
</script>

<section
  id="pricing"
  class={`pricing ${togglePhase === 'toggling' ? 'toggling' : ''} ${togglePhase === 'done' ? 'toggling-done' : ''}`}
>
  <div class="pricing-header" use:reveal={{ stage: 'title' }}>
    <h2>{$t('pricing.title')}</h2>
    <p>{$t('pricing.subtitle')}</p>
    <div class="toggle-container">
      <span class:active={!isYearly}>{$t('pricing.monthly')}</span>
      <button type="button" class="toggle-btn" onclick={handleToggle} aria-label="Toggle billing">
        <div class="toggle-circle" class:yearly={isYearly}></div>
      </button>
      <span class:active={isYearly}>
        {$t('pricing.yearly')} <mark>-20%</mark>
      </span>
    </div>
  </div>

  <div class="pricing-grid">
    <div class="price-card" use:reveal={{ stage: 'content', delay: 150 }}>
      <div class="plan-info">
        <h3>{$t('pricing.starterTitle')}</h3>
        <p>{$t('pricing.starterDesc')}</p>
      </div>
      <div class="price-display">
        <span class="currency">$</span>
        <span class="amount">{isYearly ? '19' : '24'}</span>
        <span class="period">/{isYearly ? 'yr' : 'mo'}</span>
      </div>
      <ul class="features-list">
        <li>{$t('pricing.starterFeat1')}</li>
        <li>{$t('pricing.starterFeat2')}</li>
        <li>{$t('pricing.starterFeat3')}</li>
      </ul>
      <button type="button" class="btn-primary full-width">{$t('pricing.starterBtn')}</button>
    </div>

    <div class="price-card featured" use:reveal={{ stage: 'content', delay: 230 }}>
      <div class="plan-info">
        <h3>{$t('pricing.proTitle')}</h3>
        <p>{$t('pricing.proDesc')}</p>
      </div>
      <div class="price-display">
        <span class="currency">$</span>
        <span class="amount">{isYearly ? '39' : '49'}</span>
        <span class="period">/{isYearly ? 'yr' : 'mo'}</span>
      </div>
      <ul class="features-list">
        <li>{$t('pricing.proFeat1')}</li>
        <li>{$t('pricing.proFeat2')}</li>
        <li>{$t('pricing.proFeat3')}</li>
      </ul>
      <button type="button" class="btn-primary full-width">{$t('pricing.proBtn')}</button>
    </div>

    <div class="price-card" use:reveal={{ stage: 'content', delay: 190 }}>
      <div class="plan-info">
        <h3>{$t('pricing.teamsTitle')}</h3>
        <p>{$t('pricing.teamsDesc')}</p>
      </div>
      <div class="price-display">
        <span class="currency">$</span>
        <span class="amount">{isYearly ? '79' : '99'}</span>
        <span class="period">/{isYearly ? 'yr' : 'mo'}</span>
      </div>
      <ul class="features-list">
        <li>{$t('pricing.teamsFeat1')}</li>
        <li>{$t('pricing.teamsFeat2')}</li>
        <li>{$t('pricing.teamsFeat3')}</li>
      </ul>
      <button type="button" class="btn-primary full-width">{$t('pricing.teamsBtn')}</button>
    </div>
  </div>
</section>

<style>
  .pricing {
    padding: 120px 1.5rem;
    text-align: center;
  }

  .pricing-header h2 {
    font-size: clamp(2rem, 6vw, 3rem);
    letter-spacing: -0.04em;
    margin-bottom: 1rem;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    font-weight: 500;
  }

  .toggle-container span {
    color: var(--text-secondary);
    transition: color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .toggle-container span.active {
    color: var(--text-main);
    font-weight: 700;
  }

  .toggle-container mark {
    background: #eff6ff;
    color: var(--accent);
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 700;
  }

  .toggle-btn {
    width: 58px;
    height: 34px;
    min-height: 44px;
    background: var(--text-main);
    border-radius: 50px;
    border: none;
    cursor: pointer;
    position: relative;
    padding: 4px;
    display: flex;
    align-items: center;
  }

  .toggle-circle {
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .toggle-circle.yearly {
    transform: translateX(26px);
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    margin-top: 4rem;
    align-items: stretch;
    max-width: 1280px;
    margin-inline: auto;
  }

  .price-card {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.08);
    padding: 3rem;
    border-radius: 32px;
    text-align: left;
    display: flex;
    flex-direction: column;
    transition:
      opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      border-color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .price-card.featured.is-visible {
    transform: translateY(-4px);
  }

  .price-card:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
    transform: translateY(-6px);
  }

  .price-card.featured {
    border-color: rgba(99, 102, 241, 0.4);
    background: radial-gradient(circle at top, #eff6ff, #ffffff);
    position: relative;
    overflow: hidden;
  }

  .price-card.featured::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background: radial-gradient(circle at top, rgba(99, 102, 241, 0.45), transparent 55%);
    opacity: 0;
    pointer-events: none;
    mix-blend-mode: soft-light;
    animation: pro-glow 5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite alternate;
  }

  .plan-info {
    min-height: 124px;
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 0.7rem;
  }

  .plan-info p {
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .price-display {
    margin: 2rem 0;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -0.05em;
  }

  .price-display .currency {
    font-size: 1.5rem;
    vertical-align: super;
    color: var(--text-secondary);
  }

  .price-display .amount,
  .price-display .period {
    display: inline-block;
    transition:
      opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      filter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .toggling .amount,
  .toggling .period {
    opacity: 0;
    transform: translateY(-8px);
    filter: blur(3px);
  }

  .toggling-done .amount,
  .toggling-done .period {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  .price-display .period {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--text-secondary);
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin-bottom: 2.5rem;
  }

  .features-list li {
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }

  .full-width {
    display: block;
    width: 100%;
    text-align: center;
  }

  .price-card .btn-primary {
    background: linear-gradient(
      90deg,
      var(--accent) 0%,
      var(--accent-hover) 50%,
      var(--accent) 100%
    );
    background-size: 200% 100%;
    color: #fff;
    border-radius: 14px;
    padding: 0.95rem 1.2rem;
    margin-top: auto;
    -webkit-appearance: none;
    appearance: none;
    transition:
      background-position 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .price-card .btn-primary:hover {
    background-position: 100% 0;
  }

  @keyframes pro-glow {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.45;
    }
    100% {
      opacity: 0.2;
    }
  }

  @media (max-width: 900px) {
    .pricing-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .pricing {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  @media (max-width: 640px) {
    .pricing {
      padding: 80px 1rem;
    }

    .toggle-container {
      gap: 0.6rem;
      flex-wrap: wrap;
    }

    .price-card {
      padding: 2rem 1.2rem;
    }

    .plan-info {
      min-height: auto;
    }

    .pricing-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  @media (min-width: 1600px) {
    .pricing {
      padding-block: 120px;
      max-width: 1440px;
      margin-inline: auto;
    }

    .pricing-grid {
      max-width: 1360px;
      gap: 1.8rem;
    }
  }
</style>
