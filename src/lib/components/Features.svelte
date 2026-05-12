<script lang="ts">
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n';
</script>

<section id="features" class="features">
  <div class="features-head" use:reveal={{ stage: 'title' }}>
    <h2 class="title">{@html $t('features.title')}</h2>
    <p class="subtitle">
      {$t('features.subtitle')}
    </p>
  </div>

  <div class="features-layout">
    <div class="features-left">
      <div class="grid">
        <div class="feature" use:reveal={{ stage: 'content', delay: 130, distance: 52 }}>
          <div class="icon">✨</div>
          <h3>{$t('features.cards.cleanTitle')}</h3>
          <p>{$t('features.cards.cleanDesc')}</p>
        </div>
        <div class="feature" use:reveal={{ stage: 'content', delay: 220, distance: 52 }}>
          <div class="icon">⚡</div>
          <h3>{$t('features.cards.fastTitle')}</h3>
          <p>{$t('features.cards.fastDesc')}</p>
        </div>
        <div class="feature" use:reveal={{ stage: 'content', delay: 310, distance: 52 }}>
          <div class="icon">🎨</div>
          <h3>{$t('features.cards.premiumTitle')}</h3>
          <p>{$t('features.cards.premiumDesc')}</p>
        </div>
        <div class="feature" use:reveal={{ stage: 'content', delay: 360, distance: 52 }}>
          <div class="icon">🧩</div>
          <h3>{$t('features.cards.customTitle')}</h3>
          <p>{$t('features.cards.customDesc')}</p>
        </div>
      </div>
    </div>

    <div class="features-right" use:reveal={{ stage: 'content', delay: 220 }}>
      <div class="ipad-wrap">
        <div class="ipad">
          <div class="faceid"></div>
          <div class="btn-power"></div>
          <div class="btn-vol-up"></div>
          <div class="btn-vol-down"></div>
          <div class="btn-action"></div>
          <div class="spk top">
            <div class="spk-dot"></div>
            <div class="spk-dot"></div>
            <div class="spk-dot"></div>
            <div class="spk-dot"></div>
            <div class="spk-dot"></div>
          </div>
          <div class="spk bot">
            <div class="spk-dot"></div>
            <div class="spk-dot"></div>
            <div class="spk-dot"></div>
            <div class="spk-dot"></div>
            <div class="spk-dot"></div>
          </div>
          <div class="screen-bezel">
            <div class="screen">
              <div class="ios-status">
                <span>9:41</span>
                <div class="ios-status-icons">
                  <svg width="11" height="8" viewBox="0 0 11 8"
                    ><rect x="0" y="3" width="2" height="5" rx="0.5" fill="#000" /><rect
                      x="3"
                      y="2"
                      width="2"
                      height="6"
                      rx="0.5"
                      fill="#000"
                    /><rect x="6" y="1" width="2" height="7" rx="0.5" fill="#000" /><rect
                      x="9"
                      y="0"
                      width="2"
                      height="8"
                      rx="0.5"
                      fill="#000"
                      opacity="0.3"
                    /></svg
                  >
                  <svg width="12" height="8" viewBox="0 0 12 8"
                    ><path
                      d="M6 1.5C8.2 1.5 10.1 2.5 11.4 4L12 3.3C10.5 1.8 8.4 0.8 6 0.8S1.5 1.8 0 3.3L0.6 4C1.9 2.5 3.8 1.5 6 1.5Z"
                      fill="#000"
                    /><path
                      d="M6 3.5C7.5 3.5 8.8 4.1 9.8 5.1L10.4 4.4C9.2 3.3 7.7 2.6 6 2.6S2.8 3.3 1.6 4.4L2.2 5.1C3.2 4.1 4.5 3.5 6 3.5Z"
                      fill="#000"
                    /><circle cx="6" cy="7" r="1" fill="#000" /></svg
                  >
                  <div class="ios-battery"><div class="ios-battery-fill"></div></div>
                </div>
              </div>
              <div class="ios-nav">
                <div>
                  <div class="ios-nav-title">{$t('features.mockup.storeTitle')}</div>
                  <div class="ios-nav-sub">{$t('features.mockup.storeSub')}</div>
                </div>
                <div class="ios-notif">
                  <svg width="12" height="12" viewBox="0 0 12 12"
                    ><path
                      d="M6 1a3.5 3.5 0 00-3.5 3.5V7L1 8.5h10L9.5 7V4.5A3.5 3.5 0 006 1z"
                      fill="none"
                      stroke="#fff"
                      stroke-width="1.2"
                    /><path
                      d="M4.5 9.5a1.5 1.5 0 003 0"
                      fill="none"
                      stroke="#fff"
                      stroke-width="1.2"
                    /></svg
                  >
                  <div class="ios-notif-dot"></div>
                </div>
              </div>
              <div class="ios-search">
                <svg width="10" height="10" viewBox="0 0 10 10"
                  ><circle
                    cx="4"
                    cy="4"
                    r="3"
                    fill="none"
                    stroke="#8e8e93"
                    stroke-width="1.2"
                  /><path
                    d="M6.5 6.5L9 9"
                    stroke="#8e8e93"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  /></svg
                >
                <span class="ios-search-text"
                  ><span class="ios-typing-text">{$t('features.mockup.searchPlaceholder')}</span
                  ><span class="ios-cursor"></span></span
                >
              </div>
              <div class="ios-segments">
                <div class="ios-seg-indicator"></div>
                <div class="ios-seg active">{$t('features.mockup.segAll')}</div>
                <div class="ios-seg">{$t('features.mockup.segLayout')}</div>
                <div class="ios-seg">{$t('features.mockup.segForms')}</div>
                <div class="ios-seg">{$t('features.mockup.segCharts')}</div>
              </div>
              <div class="ios-cards">
                <div class="ios-card-feat purple">
                  <div class="ios-card-sweep"></div>
                  <div class="ios-card-tag">{$t('features.mockup.new')}</div>
                  <div class="ios-card-feat-label">{$t('features.mockup.dashboardKit')}</div>
                </div>
                <div class="ios-card-feat blue">
                  <div class="ios-card-sweep"></div>
                  <div class="ios-card-tag">{$t('features.mockup.hot')}</div>
                  <div class="ios-card-feat-label">{$t('features.mockup.analyticsUi')}</div>
                </div>
              </div>
              <div class="ios-section-header">
                <span class="ios-section-title">{$t('features.mockup.popular')}</span>
                <span class="ios-section-more">{$t('features.mockup.seeAll')}</span>
              </div>
              <div class="ios-grid">
                <div class="ios-grid-item">
                  <div class="ios-grid-icon" style="background:#f0e6ff;">
                    <svg width="16" height="16" viewBox="0 0 16 16"
                      ><rect x="2" y="2" width="5" height="5" rx="1" fill="#3b82f6" /><rect
                        x="9"
                        y="2"
                        width="5"
                        height="5"
                        rx="1"
                        fill="#3b82f6"
                      /><rect x="2" y="9" width="5" height="5" rx="1" fill="#3b82f6" /><rect
                        x="9"
                        y="9"
                        width="5"
                        height="5"
                        rx="1"
                        fill="#3b82f6"
                      /></svg
                    >
                  </div>
                  <span class="ios-grid-name">{$t('features.mockup.grid')}</span><span
                    class="ios-grid-price">{$t('features.mockup.free')}</span
                  >
                </div>
                <div class="ios-grid-item">
                  <div class="ios-grid-icon" style="background:#e6f0ff;">
                    <svg width="16" height="16" viewBox="0 0 16 16"
                      ><rect x="2" y="5" width="12" height="2" rx="1" fill="#2563eb" /><rect
                        x="2"
                        y="9"
                        width="8"
                        height="2"
                        rx="1"
                        fill="#2563eb"
                        opacity="0.5"
                      /></svg
                    >
                  </div>
                  <span class="ios-grid-name">{$t('features.mockup.list')}</span><span
                    class="ios-grid-price">{$t('features.mockup.free')}</span
                  >
                </div>
                <div class="ios-grid-item">
                  <div class="ios-grid-icon" style="background:#e6fff0;">
                    <svg width="16" height="16" viewBox="0 0 16 16"
                      ><circle
                        cx="8"
                        cy="8"
                        r="5"
                        fill="none"
                        stroke="#34c759"
                        stroke-width="2"
                      /><path
                        d="M5 8l2 2 4-4"
                        stroke="#34c759"
                        stroke-width="1.5"
                        fill="none"
                        stroke-linecap="round"
                      /></svg
                    >
                  </div>
                  <span class="ios-grid-name">{$t('features.mockup.form')}</span><span
                    class="ios-grid-price">$4</span
                  >
                </div>
                <div class="ios-grid-item">
                  <div class="ios-grid-icon" style="background:#fff0e6;">
                    <svg width="16" height="16" viewBox="0 0 16 16"
                      ><polyline
                        points="2,12 5,7 8,9 11,4 14,6"
                        fill="none"
                        stroke="#f97316"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      /></svg
                    >
                  </div>
                  <span class="ios-grid-name">{$t('features.mockup.chart')}</span><span
                    class="ios-grid-price">$6</span
                  >
                </div>
              </div>
              <div class="ios-section-header" style="margin-top:3px;">
                <span class="ios-section-title">{$t('features.mockup.recent')}</span>
                <span class="ios-section-more">{$t('features.mockup.seeAll')}</span>
              </div>
              <div class="ios-list">
                <div class="ios-list-item">
                  <div
                    class="ios-list-avatar"
                    style="background:linear-gradient(135deg,#3b82f6,#60a5fa);"
                  ></div>
                  <div class="ios-list-info">
                    <div class="ios-list-name">{$t('features.mockup.heroSection')}</div>
                    <div class="ios-list-desc">{$t('features.mockup.landingSvelte')}</div>
                  </div>
                  <span class="ios-list-price">$12</span>
                </div>
                <div class="ios-list-item">
                  <div
                    class="ios-list-avatar"
                    style="background:linear-gradient(135deg,#2563eb,#60a5fa);"
                  ></div>
                  <div class="ios-list-info">
                    <div class="ios-list-name">{$t('features.mockup.pricingTable')}</div>
                    <div class="ios-list-desc">{$t('features.mockup.commerceReact')}</div>
                  </div>
                  <span class="ios-list-price">$8</span>
                </div>
              </div>
              <div class="ios-tabbar">
                <div class="ios-tab active">
                  <svg width="18" height="18" viewBox="0 0 18 18"
                    ><path
                      d="M3 9L9 3l6 6"
                      fill="none"
                      stroke="#007aff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    /><rect
                      x="5"
                      y="9"
                      width="8"
                      height="7"
                      rx="1"
                      fill="none"
                      stroke="#007aff"
                      stroke-width="1.5"
                    /></svg
                  >
                  <span class="ios-tab-label" style="color:#007aff;"
                    >{$t('features.mockup.home')}</span
                  >
                </div>
                <div class="ios-tab">
                  <svg width="18" height="18" viewBox="0 0 18 18"
                    ><circle
                      cx="9"
                      cy="9"
                      r="6"
                      fill="none"
                      stroke="#8e8e93"
                      stroke-width="1.5"
                    /><circle cx="9" cy="9" r="2" fill="#8e8e93" /></svg
                  >
                  <span class="ios-tab-label">{$t('features.mockup.browse')}</span>
                </div>
                <div class="ios-tab">
                  <svg width="18" height="18" viewBox="0 0 18 18"
                    ><rect
                      x="3"
                      y="3"
                      width="12"
                      height="12"
                      rx="2"
                      fill="none"
                      stroke="#8e8e93"
                      stroke-width="1.5"
                    /><path
                      d="M6 9h6M9 6v6"
                      stroke="#8e8e93"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    /></svg
                  >
                  <span class="ios-tab-label">{$t('features.mockup.library')}</span>
                </div>
                <div class="ios-tab">
                  <svg width="18" height="18" viewBox="0 0 18 18"
                    ><circle
                      cx="9"
                      cy="7"
                      r="3"
                      fill="none"
                      stroke="#8e8e93"
                      stroke-width="1.5"
                    /><path
                      d="M3 15c0-3.3 2.7-6 6-6s6 2.7 6 6"
                      fill="none"
                      stroke="#8e8e93"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    /></svg
                  >
                  <span class="ios-tab-label">{$t('features.mockup.profile')}</span>
                </div>
              </div>
              <div class="screen-shine"></div>
            </div>
          </div>
        </div>
        <div class="ipad-glow"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .features {
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 0;
  }

  .features-head {
    text-align: center;
    margin-bottom: 80px;
    padding: 0 1.5rem;
  }

  .title {
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -0.03em;
    margin: 0 0 1rem;
  }

  .subtitle {
    max-width: 600px;
    margin: 0 auto;
    color: #6b7280;
    line-height: 1.7;
    font-size: 1rem;
  }

  .features-layout {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 60px;
    padding: 0 1.5rem;
  }

  .features-left {
    width: 50%;
    min-width: 0;
  }

  .features-right {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .ipad-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .ipad {
    position: relative;
    width: min(320px, 85vw);
    height: calc(min(320px, 85vw) * 1.375);
    border-radius: 28px;
    background: linear-gradient(160deg, #5a5a5c 0%, #1c1c1e 20%, #2e2e30 50%, #111113 100%);
    box-shadow:
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.22),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 0 0 0.5px rgba(0, 0, 0, 0.95),
      0 20px 50px rgba(0, 0, 0, 0.6),
      0 50px 100px rgba(0, 0, 0, 0.3);
    padding: 16px 12px;
  }
  .ipad::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 27px;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.02) 20%,
      transparent 50%
    );
    pointer-events: none;
    z-index: 30;
  }
  .faceid {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 9px;
    height: 9px;
    background: radial-gradient(circle at 35% 35%, #222, #050505);
    border-radius: 50%;
    z-index: 40;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
  .btn-power {
    position: absolute;
    top: -2px;
    right: 65px;
    width: 40px;
    height: 2.5px;
    background: linear-gradient(to bottom, #606062, #3a3a3c);
    border-radius: 1.5px 1.5px 0 0;
    transform-origin: center;
  }
  .btn-vol-up {
    position: absolute;
    right: -2.5px;
    top: 80px;
    width: 2.5px;
    height: 38px;
    background: linear-gradient(to right, #606062, #3a3a3c);
    border-radius: 0 1.5px 1.5px 0;
    transform-origin: center;
  }
  .btn-vol-down {
    position: absolute;
    right: -2.5px;
    top: 128px;
    width: 2.5px;
    height: 38px;
    background: linear-gradient(to right, #606062, #3a3a3c);
    border-radius: 0 1.5px 1.5px 0;
    transform-origin: center;
  }
  .btn-action {
    position: absolute;
    left: -2.5px;
    top: 80px;
    width: 2.5px;
    height: 26px;
    background: linear-gradient(to left, #606062, #3a3a3c);
    border-radius: 1.5px 0 0 1.5px;
    transform-origin: center;
  }
  .spk {
    display: flex;
    gap: 2px;
    z-index: 40;
    position: absolute;
  }
  .spk.top {
    top: 16px;
    left: calc(50% + 28px);
  }
  .spk.bot {
    bottom: 16px;
    left: calc(50% - 52px);
  }
  .spk-dot {
    width: 2px;
    height: 7px;
    background: rgba(255, 255, 255, 0.07);
    border-radius: 1px;
  }
  .screen-bezel {
    position: absolute;
    inset: 16px 12px;
    border-radius: 16px;
    background: #000;
    overflow: hidden;
  }
  .screen {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    overflow: hidden;
    background: #f2f2f7;
    font-family: -apple-system, 'SF Pro Display', sans-serif;
  }
  .ios-status {
    height: 22px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    font-size: 9px;
    font-weight: 600;
    color: #000;
  }
  .ios-status-icons {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .ios-battery {
    width: 16px;
    height: 8px;
    border: 1px solid #000;
    border-radius: 2px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 1px;
  }
  .ios-battery::after {
    content: '';
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 4px;
    background: #000;
    border-radius: 0 1px 1px 0;
  }
  .ios-battery-fill {
    width: 75%;
    height: 100%;
    background: #34c759;
    border-radius: 1px;
  }
  .ios-nav {
    background: #fff;
    padding: 8px 14px 6px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  }
  .ios-nav-title {
    font-size: 15px;
    font-weight: 700;
    color: #000;
  }
  .ios-nav-sub {
    font-size: 9px;
    color: #8e8e93;
    margin-top: 1px;
  }
  .ios-search {
    margin: 8px 12px;
    background: rgba(116, 116, 128, 0.12);
    border-radius: 10px;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .ios-search-text {
    font-size: 10px;
    color: #8e8e93;
  }
  .ios-segments {
    display: flex;
    margin: 6px 12px;
    background: rgba(116, 116, 128, 0.12);
    border-radius: 8px;
    padding: 2px;
  }
  .ios-seg {
    flex: 1;
    text-align: center;
    font-size: 9px;
    font-weight: 600;
    padding: 4px 0;
    border-radius: 6px;
    color: #8e8e93;
  }
  .ios-seg.active {
    background: #fff;
    color: #000;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }
  .ios-cards {
    display: flex;
    gap: 8px;
    padding: 6px 12px;
  }
  .ios-card-feat {
    flex: 1;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    height: 80px;
  }
  .ios-card-feat.purple {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
  }
  .ios-card-feat.blue {
    background: linear-gradient(135deg, #2563eb, #60a5fa);
  }
  .ios-card-feat-label {
    position: absolute;
    bottom: 7px;
    left: 8px;
    font-size: 8px;
    font-weight: 700;
    color: #fff;
  }
  .ios-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 14px 4px;
  }
  .ios-section-title {
    font-size: 11px;
    font-weight: 700;
    color: #000;
  }
  .ios-section-more {
    font-size: 9px;
    color: #007aff;
    font-weight: 500;
  }
  .ios-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    padding: 0 12px;
  }
  .ios-grid-item {
    background: #fff;
    border-radius: 10px;
    padding: 8px 6px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }
  .ios-grid-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ios-grid-name {
    font-size: 7px;
    color: #3c3c43;
    text-align: center;
    font-weight: 500;
  }
  .ios-grid-price {
    font-size: 7px;
    color: #007aff;
    font-weight: 600;
  }
  .ios-list {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 4px;
  }
  .ios-list-item {
    background: #fff;
    border-radius: 10px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ios-list-avatar {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .ios-list-info {
    flex: 1;
  }
  .ios-list-name {
    font-size: 9px;
    font-weight: 600;
    color: #000;
  }
  .ios-list-desc {
    font-size: 8px;
    color: #8e8e93;
    margin-top: 1px;
  }
  .ios-list-price {
    font-size: 9px;
    font-weight: 700;
    color: #000;
  }
  .ios-tabbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 42px;
    background: rgba(255, 255, 255, 0.92);
    border-top: 0.5px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 4px;
  }
  .ios-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  .ios-tab-label {
    font-size: 7px;
    font-weight: 500;
    color: #8e8e93;
  }
  .screen-shine {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, transparent 35%);
    pointer-events: none;
    z-index: 20;
  }
  .ios-battery-fill {
    height: 100%;
    background: #34c759;
    border-radius: 1px;
    animation: batteryDrain 4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite alternate;
  }
  @keyframes batteryDrain {
    0% {
      width: 95%;
      background: #34c759;
    }
    60% {
      background: #fbbf24;
    }
    100% {
      width: 20%;
      background: #ef4444;
    }
  }
  .ios-nav {
    background: #fff;
    padding: 8px 14px 6px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ios-nav-title {
    font-size: 15px;
    font-weight: 700;
    color: #000;
  }
  .ios-nav-sub {
    font-size: 9px;
    color: #8e8e93;
    margin-top: 1px;
  }
  .ios-notif {
    width: 22px;
    height: 22px;
    background: #3b82f6;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: notifShake 4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes notifShake {
    0%,
    100% {
      transform: rotate(0);
    }
    85% {
      transform: rotate(0);
    }
    88% {
      transform: rotate(-12deg);
    }
    91% {
      transform: rotate(12deg);
    }
    94% {
      transform: rotate(-8deg);
    }
    97% {
      transform: rotate(8deg);
    }
  }
  .ios-notif-dot {
    position: absolute;
    top: -3px;
    right: -3px;
    width: 7px;
    height: 7px;
    background: #ef4444;
    border-radius: 50%;
    border: 1.5px solid #fff;
    animation: notifDotPulse 1s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes notifDotPulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
  }
  .ios-search {
    margin: 8px 12px;
    background: rgba(116, 116, 128, 0.12);
    border-radius: 10px;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .ios-search-text {
    font-size: 10px;
    color: #8e8e93;
    display: flex;
    align-items: center;
  }
  .ios-typing-text {
    overflow: hidden;
    white-space: nowrap;
    animation: typeText 4s steps(20) infinite;
    width: 0;
    display: inline-block;
  }
  @keyframes typeText {
    0%,
    10% {
      width: 0;
    }
    60%,
    90% {
      width: 120px;
    }
    95%,
    100% {
      width: 0;
    }
  }
  .ios-cursor {
    display: inline-block;
    width: 1.5px;
    height: 11px;
    background: #3b82f6;
    vertical-align: middle;
    animation: cursorBlink 0.7s step-end infinite;
  }
  @keyframes cursorBlink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .ios-segments {
    display: flex;
    margin: 6px 12px;
    background: rgba(116, 116, 128, 0.12);
    border-radius: 8px;
    padding: 2px;
    position: relative;
  }
  .ios-seg {
    flex: 1;
    text-align: center;
    font-size: 9px;
    font-weight: 600;
    padding: 4px 0;
    border-radius: 6px;
    color: #8e8e93;
    position: relative;
    z-index: 1;
  }
  .ios-seg.active {
    color: #000;
  }
  .ios-seg-indicator {
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(25% - 2px);
    height: calc(100% - 4px);
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    animation: segSlide 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes segSlide {
    0%,
    20% {
      left: 2px;
    }
    30%,
    45% {
      left: calc(25% + 1px);
    }
    55%,
    70% {
      left: calc(50%);
    }
    80%,
    95% {
      left: calc(75% - 1px);
    }
    100% {
      left: 2px;
    }
  }
  .ios-cards {
    display: flex;
    gap: 8px;
    padding: 6px 12px;
  }
  .ios-card-feat {
    flex: 1;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    height: 75px;
  }
  .ios-card-feat.purple {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    animation: cardPulse 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  .ios-card-feat.blue {
    background: linear-gradient(135deg, #2563eb, #60a5fa);
    animation: cardPulse 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite 1.5s;
  }
  @keyframes cardPulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
  }
  .ios-card-sweep {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 40%,
      rgba(255, 255, 255, 0.25) 50%,
      transparent 60%
    );
    animation: sweep 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    background-size: 200% 100%;
  }
  @keyframes sweep {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
  .ios-card-feat-label {
    position: absolute;
    bottom: 7px;
    left: 8px;
    font-size: 8px;
    font-weight: 700;
    color: #fff;
  }
  .ios-card-tag {
    position: absolute;
    top: 7px;
    right: 7px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 6px;
    padding: 2px 5px;
    font-size: 7px;
    font-weight: 600;
    color: #fff;
  }
  .ios-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 14px 3px;
  }
  .ios-section-title {
    font-size: 11px;
    font-weight: 700;
    color: #000;
  }
  .ios-section-more {
    font-size: 9px;
    color: #007aff;
    font-weight: 500;
  }
  .ios-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    padding: 0 12px;
  }
  .ios-grid-item {
    background: #fff;
    border-radius: 10px;
    padding: 7px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }
  .ios-grid-item:nth-child(1) {
    animation: floatA 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  .ios-grid-item:nth-child(2) {
    animation: floatA 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite 0.5s;
  }
  .ios-grid-item:nth-child(3) {
    animation: floatA 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite 1s;
  }
  .ios-grid-item:nth-child(4) {
    animation: floatA 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite 1.5s;
  }
  @keyframes floatA {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }
  .ios-grid-icon {
    width: 26px;
    height: 26px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ios-grid-name {
    font-size: 7px;
    color: #3c3c43;
    text-align: center;
    font-weight: 500;
  }
  .ios-grid-price {
    font-size: 7px;
    color: #007aff;
    font-weight: 600;
  }
  .ios-list {
    padding: 0 12px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 3px;
  }
  .ios-list-item {
    background: #fff;
    border-radius: 10px;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .ios-list-item:first-child {
    animation: listHighlight 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  .ios-list-item:last-child {
    animation: listHighlight 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite 1.5s;
  }
  @keyframes listHighlight {
    0%,
    100% {
      background: #fff;
      transform: translateX(0);
    }
    50% {
      background: #f0ebff;
      transform: translateX(2px);
    }
  }
  .ios-list-avatar {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .ios-list-info {
    flex: 1;
  }
  .ios-list-name {
    font-size: 9px;
    font-weight: 600;
    color: #000;
  }
  .ios-list-desc {
    font-size: 8px;
    color: #8e8e93;
    margin-top: 1px;
  }
  .ios-list-price {
    font-size: 9px;
    font-weight: 700;
    animation: priceGlow 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes priceGlow {
    0%,
    100% {
      color: #000;
    }
    50% {
      color: #3b82f6;
    }
  }
  .ios-tabbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: rgba(255, 255, 255, 0.95);
    border-top: 0.5px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 3px;
  }
  .ios-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
  }
  .ios-tab-label {
    font-size: 7px;
    font-weight: 500;
    color: #8e8e93;
  }
  .ios-tab.active .ios-tab-label {
    color: #007aff;
  }
  .ios-tab.active svg {
    animation: tabBounce 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes tabBounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-3px);
    }
  }
  .ipad-glow {
    width: 180px;
    height: 40px;
    margin-top: -4px;
    background: radial-gradient(ellipse, rgba(120, 100, 255, 0.18) 0%, transparent 70%);
    filter: blur(16px);
  }

  .feature {
    background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.04), var(--bg-soft));
    padding: 3rem 2rem;
    border-radius: 24px;
    transition:
      opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      border-color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
  }

  .feature:nth-child(1) {
    --assembly-x: -24px;
    --assembly-rotate: -5deg;
    --assembly-scale-from: 0.88;
  }

  .feature:nth-child(2) {
    --assembly-x: 0px;
    --assembly-rotate: 0deg;
    --assembly-scale-from: 0.9;
  }

  .feature:nth-child(3) {
    --assembly-x: 24px;
    --assembly-rotate: 5deg;
    --assembly-scale-from: 0.88;
  }

  .icon {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    background: radial-gradient(circle at top, #eff6ff, #dbeafe);
    transform: scale(0.8) rotate(-10deg);
    opacity: 0.8;
    transition:
      transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 0 0 0 rgba(129, 140, 248, 0);
  }

  .feature:global(.is-visible) .icon {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 0 0 0 8px rgba(129, 140, 248, 0.08);
  }

  .feature:global(.is-visible) .icon:hover {
    transform: scale(1.05) rotate(3deg);
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
    color: var(--text-main);
  }

  .feature::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: conic-gradient(
      from 0deg,
      transparent 0deg,
      rgba(129, 140, 248, 0.8) 60deg,
      transparent 120deg,
      transparent 360deg
    );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transform: rotate(0deg);
    transition:
      opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 1.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    pointer-events: none;
  }

  .feature:global(.is-visible):hover::before {
    opacity: 1;
    transform: rotate(360deg);
  }

  @media (max-width: 640px) {
    .features {
      padding: 90px 1rem;
    }

    .features-head {
      margin-bottom: 2.6rem;
    }

    .features-layout {
      flex-direction: column;
      gap: 2rem;
    }

    .features-left,
    .features-right {
      width: 100%;
    }

    .title {
      font-size: 36px;
    }

    .grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .ipad {
      width: min(100%, 320px);
    }
  }

  @media (min-width: 1600px) {
    .features {
      max-width: 1320px;
      margin: 5rem auto;
    }

    .grid {
      gap: 2.2rem;
    }
  }

  @media (max-width: 768px) {
    .features-layout {
      flex-direction: column;
      align-items: center;
    }

    .ipad {
      width: min(280px, 80vw);
      height: calc(min(280px, 80vw) * 1.375);
    }

    .ipad-glow {
      width: 150px;
    }
  }
</style>
