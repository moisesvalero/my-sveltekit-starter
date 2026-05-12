<script>
  import { t } from '$lib/i18n';
  import { onMount } from 'svelte';

  onMount(() => {
    const inner = document.querySelector('.statement .statement-inner');
    const stats = document.querySelector('.statement .st-stats');
    const bottom = document.querySelector('.statement .st-bottom');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (inner) observer.observe(inner);
    if (stats) observer.observe(stats);
    if (bottom) observer.observe(bottom);
  });
</script>

<section class="statement">
  <div class="grid-bg"></div>
  <div class="glow-center"></div>
  <div class="st-deco-line"></div>
  <div class="st-deco-line-right"></div>
  <div class="bg-number">12k</div>

  <div class="statement-inner">
    <div class="st-eyebrow">
      <div class="st-eyebrow-line"></div>
      <span class="st-eyebrow-text">{$t('usecases.eyebrow')}</span>
    </div>

    <div class="st-headline">
      <span class="st-line"><span class="st-line-inner">{$t('usecases.line1')}</span></span>
      <span class="st-line"
        ><span class="st-line-inner"
          >{$t('usecases.line2')}
          <span class="st-gradient">{$t('usecases.line2_accent')}</span></span
        ></span
      >
      <span class="st-line" style="display:flex;align-items:baseline;gap:20px;">
        <span class="st-line-inner" style="color:rgba(26,26,46,0.25);">{$t('usecases.line3')}</span>
        <span class="st-changing" style="height:1em;display:inline-block;">
          <span class="st-word">{$t('usecases.word1')}</span>
          <span class="st-word">{$t('usecases.word2')}</span>
          <span class="st-word">{$t('usecases.word3')}</span>
          <span class="st-word">{$t('usecases.word4')}</span>
        </span>
      </span>
    </div>

    <div class="st-stats">
      <div class="st-stat">
        <div class="st-stat-val">247</div>
        <div class="st-stat-lbl">{$t('usecases.stat1')}</div>
      </div>
      <div class="st-stat">
        <div class="st-stat-val">12k+</div>
        <div class="st-stat-lbl">{$t('usecases.stat2')}</div>
      </div>
      <div class="st-stat">
        <div class="st-stat-val">4.9★</div>
        <div class="st-stat-lbl">{$t('usecases.stat3')}</div>
      </div>
    </div>

    <div class="st-bottom">
      <div class="st-tags">
        <div class="st-tag active">SvelteKit</div>
        <div class="st-tag">TypeScript</div>
        <div class="st-tag">Figma Ready</div>
        <div class="st-tag">Dark Mode</div>
        <div class="st-tag">Accessible</div>
        <div class="st-tag">SSR</div>
      </div>
      <button class="st-cta-btn">
        {$t('usecases.cta')}
        <span class="st-arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</section>

<style>
  .statement {
    background: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    font-family: -apple-system, sans-serif;
    padding: 80px 48px;
  }
  .grid-bg {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(124, 92, 191, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124, 92, 191, 0.04) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
  }
  .glow-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 500px;
    background: radial-gradient(
      ellipse,
      rgba(124, 92, 191, 0.07) 0%,
      rgba(79, 142, 247, 0.04) 40%,
      transparent 70%
    );
    pointer-events: none;
    animation: glowPulse 4s ease-in-out infinite;
  }
  .bg-number {
    position: absolute;
    font-size: clamp(200px, 35vw, 400px);
    font-weight: 900;
    color: rgba(124, 92, 191, 0.04);
    line-height: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    letter-spacing: -0.05em;
    user-select: none;
    animation: bgFloat 8s ease-in-out infinite;
  }
  .st-deco-line {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, #3b82f6, #0ea5e9, transparent);
    opacity: 0.3;
  }
  .st-deco-line-right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, #0ea5e9, #3b82f6, transparent);
    opacity: 0.15;
  }
  .statement-inner {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    opacity: 0;
    transform: translateY(40px);
    transition:
      opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .statement-inner:global(.visible) {
    opacity: 1;
    transform: translateY(0);
  }
  .st-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
  }
  .st-eyebrow-line {
    width: 40px;
    height: 1.5px;
    background: linear-gradient(90deg, #3b82f6, transparent);
    flex-shrink: 0;
  }
  .st-eyebrow-text {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #8e8e93;
    text-transform: uppercase;
  }
  .st-headline {
    margin-bottom: 64px;
  }
  .st-line {
    display: block;
    font-size: clamp(40px, 8vw, 96px);
    font-weight: 900;
    line-height: 1.02;
    letter-spacing: -0.04em;
    color: #1a1a2e;
    overflow: hidden;
  }
  .st-line:nth-child(3) {
    overflow: visible;
    padding-bottom: 0.08em;
  }
  .st-line-inner {
    display: block;
    animation: lineReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0;
    transform: translateY(100%);
  }
  .st-line:nth-child(1) .st-line-inner {
    animation-delay: 0.1s;
  }
  .st-line:nth-child(2) .st-line-inner {
    animation-delay: 0.25s;
  }
  .st-line:nth-child(3) .st-line-inner {
    animation-delay: 0.4s;
  }
  .st-gradient {
    background: linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #3b82f6 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradShift 4s ease-in-out infinite;
  }
  .st-changing {
    display: inline-block;
    position: relative;
    min-width: 220px;
    height: 1.14em !important;
    overflow: visible;
  }
  .st-word {
    position: absolute;
    left: 0;
    top: 0;
    line-height: 1.08;
    background: linear-gradient(135deg, #3b82f6, #0ea5e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: wordCycle 8s ease-in-out infinite;
    opacity: 0;
  }
  .st-word:nth-child(1) {
    animation-delay: 0s;
  }
  .st-word:nth-child(2) {
    animation-delay: 2s;
  }
  .st-word:nth-child(3) {
    animation-delay: 4s;
  }
  .st-word:nth-child(4) {
    animation-delay: 6s;
  }
  .st-stats {
    display: flex;
    gap: 0;
    margin-bottom: 64px;
    flex-wrap: wrap;
  }
  .st-stat {
    padding: 0 48px 0 0;
    margin-right: 48px;
    border-right: 1px solid rgba(0, 0, 0, 0.08);
  }
  .st-stat:last-child {
    border-right: none;
    margin-right: 0;
    padding-right: 0;
  }
  .st-stat-val {
    font-size: clamp(28px, 4vw, 52px);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 6px;
    background: linear-gradient(135deg, #3b82f6, #0ea5e9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .st-stat-lbl {
    font-size: 13px;
    color: #8e8e93;
  }
  .st-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
  }
  .st-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .st-tag {
    padding: 8px 16px;
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 12px;
    color: #8e8e93;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: default;
    background: #fff;
  }
  .st-tag:hover {
    border-color: rgba(124, 92, 191, 0.3);
    color: #3b82f6;
    transform: scale(1.05);
    background: rgba(124, 92, 191, 0.04);
  }
  .st-tag.active {
    border-color: rgba(124, 92, 191, 0.25);
    background: rgba(124, 92, 191, 0.06);
    color: #3b82f6;
  }
  .st-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 16px 32px;
    border-radius: 14px;
    background: linear-gradient(135deg, #3b82f6, #0ea5e9);
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition:
      transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.3s;
    box-shadow: 0 8px 30px rgba(124, 92, 191, 0.25);
    letter-spacing: -0.01em;
    font-family: -apple-system, sans-serif;
  }
  .st-cta-btn:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 16px 40px rgba(124, 92, 191, 0.35);
  }
  .st-arrow {
    display: inline-block;
    animation: arrowPop 1.5s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    .statement {
      padding: 80px 24px;
      min-height: auto;
    }
    .st-stats {
      gap: 32px;
    }
    .st-stat {
      border-right: none;
      padding-right: 0;
      margin-right: 0;
      flex: 0 0 45%;
    }
    .st-bottom {
      flex-direction: column;
      align-items: flex-start;
    }
    .bg-number {
      font-size: 180px;
    }
  }
</style>
