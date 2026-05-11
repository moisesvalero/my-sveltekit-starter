<script>
  import { onMount } from 'svelte';
  /** @type {HTMLDivElement | null} */
  let screenEl = null;

  onMount(() => {
    if (!screenEl) return;
    const scale = screenEl.offsetWidth / 390;
    const safariUiEl = screenEl.querySelector('.safari-ui');
    const safariUiHeight = safariUiEl instanceof HTMLElement ? safariUiEl.offsetHeight : 52;
    /** @type {HTMLIFrameElement | null} */
    const iframe = screenEl.querySelector('iframe');
    if (!iframe) return;
    iframe.style.transform = `scale(${scale})`;
    iframe.style.transformOrigin = 'top left';
    iframe.style.top = `${safariUiHeight}px`;
    iframe.style.width = '390px';
    iframe.style.height = `${(screenEl.offsetHeight - safariUiHeight) / scale}px`;
    iframe.style.border = 'none';
  });
</script>

<div class="scene">
  <div class="phone-wrap">
    <div class="phone">
      <div class="btn-action"></div>
      <div class="btn-vol-up"></div>
      <div class="btn-vol-down"></div>
      <div class="btn-power"></div>
      <div class="screen-bezel">
        <div class="screen-inner" bind:this={screenEl}>
          <div class="safari-ui">
            <div class="safari-status-row">
              <span class="safari-time">9:41</span>
              <div class="safari-status-icons">
                <span class="safari-signal"></span>
                <span class="safari-wifi"></span>
                <span class="safari-battery"></span>
              </div>
            </div>
            <div class="safari-address-row">
              <button class="safari-nav-btn" aria-label="Go back">‹</button>
              <div class="safari-address-pill">
                <span class="safari-lock"></span>
                <span class="safari-domain">Svelte Starter.vercel.app</span>
              </div>
              <button class="safari-nav-btn" aria-label="Share page">⋯</button>
            </div>
          </div>
          <iframe src="/" scrolling="auto" title="Mobile preview"></iframe>
          <div class="screen-shine"></div>
        </div>
      </div>
      <div class="dynamic-island"></div>
      <div class="camera-dot"></div>
      <div class="bottom-bar"></div>
    </div>
    <div class="glow"></div>
  </div>
</div>

<style>
  .scene {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
  }

  .phone-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .phone {
    position: relative;
    width: 230px;
    height: 480px;
    border-radius: 40px;
    background: linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 40%, #2c2c2e 70%, #1a1a1c 100%);
    box-shadow:
      inset 0 0 0 1px rgba(255,255,255,0.12),
      inset 0 1px 0 rgba(255,255,255,0.18),
      0 40px 80px rgba(0,0,0,0.6),
      0 0 0 0.5px rgba(0,0,0,0.8);
  }

  .phone::before {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 38px;
    background: linear-gradient(160deg, rgba(255,255,255,0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 10;
  }

  .screen-bezel {
    position: absolute;
    inset: 6px;
    border-radius: 34px;
    background: #000;
    overflow: hidden;
  }

  .screen-inner {
    position: absolute;
    inset: 0;
    border-radius: 34px;
    overflow: hidden;
    background: #fff;
    overscroll-behavior: contain;
  }

  .safari-ui {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 8;
    padding: 8px 10px 7px;
    background: linear-gradient(180deg, rgba(249, 250, 255, 0.98), rgba(244, 246, 255, 0.95));
    border-bottom: 1px solid rgba(15, 23, 42, 0.08);
    backdrop-filter: blur(10px);
  }

  .safari-status-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    font-family: -apple-system, sans-serif;
  }

  .safari-time {
    font-size: 10px;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: 0.01em;
  }

  .safari-status-icons {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .safari-signal,
  .safari-wifi,
  .safari-battery {
    display: inline-block;
    height: 7px;
    border-radius: 2px;
    background: rgba(15, 23, 42, 0.85);
  }

  .safari-signal { width: 7px; }
  .safari-wifi { width: 10px; opacity: 0.8; }
  .safari-battery { width: 12px; opacity: 0.9; }

  .safari-address-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .safari-nav-btn {
    width: 18px;
    height: 18px;
    border: none;
    border-radius: 999px;
    background: rgba(124, 92, 191, 0.12);
    color: #5b3ea8;
    font-size: 11px;
    line-height: 1;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .safari-address-pill {
    flex: 1;
    min-width: 0;
    height: 20px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(15, 23, 42, 0.08);
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 0 8px;
    font-family: -apple-system, sans-serif;
    color: #475569;
  }

  .safari-lock {
    width: 7px;
    height: 7px;
    border-radius: 2px;
    border: 1.4px solid #64748b;
    position: relative;
    flex-shrink: 0;
  }

  .safari-lock::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 1px;
    width: 3px;
    height: 4px;
    border: 1.4px solid #64748b;
    border-bottom: none;
    border-radius: 3px 3px 0 0;
  }

  .safari-domain {
    font-size: 9px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .screen-inner iframe {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top left;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE */
  }

  .screen-inner iframe::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  .screen-shine {
    position: absolute;
    inset: 0;
    border-radius: 34px;
    background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%);
    pointer-events: none;
    z-index: 5;
  }

  .dynamic-island {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 74px;
    height: 22px;
    background: #000;
    border-radius: 20px;
    z-index: 20;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.04);
  }

  .camera-dot {
    position: absolute;
    right: 22px;
    top: 16px;
    width: 8px;
    height: 8px;
    background: radial-gradient(circle at 35% 35%, #2a2a2c, #111);
    border-radius: 50%;
    z-index: 21;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.06);
  }

  .btn-action {
    position: absolute;
    left: -3px;
    top: 90px;
    width: 3px;
    height: 26px;
    background: linear-gradient(to bottom, #48484a, #3a3a3c);
    border-radius: 2px 0 0 2px;
  }

  .btn-vol-up {
    position: absolute;
    left: -3px;
    top: 128px;
    width: 3px;
    height: 44px;
    background: linear-gradient(to bottom, #48484a, #3a3a3c);
    border-radius: 2px 0 0 2px;
  }

  .btn-vol-down {
    position: absolute;
    left: -3px;
    top: 182px;
    width: 3px;
    height: 44px;
    background: linear-gradient(to bottom, #48484a, #3a3a3c);
    border-radius: 2px 0 0 2px;
  }

  .btn-power {
    position: absolute;
    right: -3px;
    top: 140px;
    width: 3px;
    height: 58px;
    background: linear-gradient(to bottom, #48484a, #3a3a3c);
    border-radius: 0 2px 2px 0;
  }

  .bottom-bar {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 74px;
    height: 4px;
    background: rgba(255,255,255,0.15);
    border-radius: 4px;
    z-index: 20;
  }

  .glow {
    width: 160px;
    height: 60px;
    background: radial-gradient(ellipse, rgba(120,100,255,0.2) 0%, transparent 70%);
    filter: blur(16px);
    margin-top: -10px;
  }
</style>
