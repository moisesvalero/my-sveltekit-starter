<script>
  import { onMount } from 'svelte';
  import { t } from '$lib/i18n';

  onMount(() => {
    const cards = document.querySelectorAll('.gallery .card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35, rootMargin: '0px 0px -8% 0px' }
    );

    cards.forEach((card, i) => {
      const el = /** @type {HTMLElement} */ (card);
      el.style.transitionDelay = `${i * 0.1}s`;
      observer.observe(el);
    });
  });
</script>

<section class="gallery-section">
  <header class="gallery-intro">
    <p class="gallery-eyebrow">{$t('componentGallery.eyebrow')}</p>
    <h2 class="gallery-title">{@html $t('componentGallery.title')}</h2>
    <p class="gallery-subtitle">{$t('componentGallery.subtitle')}</p>
  </header>

  <div class="gallery">
    <div class="card">
      <div class="card-preview">
        <div class="ui1">
          <div class="ui1-header">
            <span class="ui1-title">{$t('componentGallery.ui1.title')}</span><span class="ui1-badge"
              >{$t('componentGallery.ui1.live')}</span
            >
          </div>
          <div class="ui1-stats">
            <div class="ui1-stat">
              <div class="ui1-stat-val">24.5k</div>
              <div class="ui1-stat-label">{$t('componentGallery.ui1.users')}</div>
            </div>
            <div class="ui1-stat">
              <div class="ui1-stat-val">$8.2k</div>
              <div class="ui1-stat-label">{$t('componentGallery.ui1.revenue')}</div>
            </div>
            <div class="ui1-stat">
              <div class="ui1-stat-val">94%</div>
              <div class="ui1-stat-label">{$t('componentGallery.ui1.uptime')}</div>
            </div>
          </div>
          <div class="ui1-chart">
            <div class="ui1-bars">
              <div class="ui1-bar" style="height:40%;background:#e6e0ff;"></div>
              <div class="ui1-bar" style="height:65%;background:#b8a9f5;"></div>
              <div class="ui1-bar" style="height:50%;background:#e6e0ff;"></div>
              <div class="ui1-bar" style="height:80%;background:#3b82f6;"></div>
              <div class="ui1-bar" style="height:60%;background:#b8a9f5;"></div>
              <div class="ui1-bar" style="height:90%;background:#3b82f6;"></div>
              <div class="ui1-bar" style="height:70%;background:#b8a9f5;"></div>
            </div>
            <div class="ui1-chart-label">
              <span class="ui1-chart-lbl">{$t('componentGallery.ui1.dayMon')}</span><span
                class="ui1-chart-lbl">{$t('componentGallery.ui1.dayTue')}</span
              ><span class="ui1-chart-lbl">{$t('componentGallery.ui1.dayWed')}</span><span
                class="ui1-chart-lbl">{$t('componentGallery.ui1.dayThu')}</span
              ><span class="ui1-chart-lbl">{$t('componentGallery.ui1.dayFri')}</span><span
                class="ui1-chart-lbl">{$t('componentGallery.ui1.daySat')}</span
              ><span class="ui1-chart-lbl">{$t('componentGallery.ui1.daySun')}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-title">{$t('componentGallery.cards.dashboardTitle')}</span><span
          class="card-tag">{$t('componentGallery.cards.dashboardTag')}</span
        >
      </div>
    </div>

    <div class="card">
      <div class="card-preview">
        <div class="ui2">
          <div class="ui2-header">
            <span class="ui2-title">{$t('componentGallery.ui2.title')}</span>
            <div class="ui2-cart">
              <svg width="12" height="12" viewBox="0 0 12 12"
                ><path
                  d="M1 1h2l1.5 6h5l1-4H3.5"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.2"
                  stroke-linecap="round"
                /><circle cx="5.5" cy="10" r="1" fill="#fff" /><circle
                  cx="9.5"
                  cy="10"
                  r="1"
                  fill="#fff"
                /></svg
              >
            </div>
          </div>
          <div class="ui2-grid">
            <div class="ui2-item">
              <div class="ui2-img" style="background:#f0e6ff;">
                <svg width="28" height="28" viewBox="0 0 28 28"
                  ><rect
                    x="6"
                    y="8"
                    width="16"
                    height="12"
                    rx="3"
                    fill="#3b82f6"
                    opacity="0.3"
                  /><rect x="9" y="11" width="10" height="6" rx="1.5" fill="#3b82f6" /></svg
                >
              </div>
              <div class="ui2-info">
                <div class="ui2-name">{$t('componentGallery.ui2.item1')}</div>
                <div class="ui2-price">$49</div>
              </div>
            </div>
            <div class="ui2-item">
              <div class="ui2-img" style="background:#e6f0ff;">
                <svg width="28" height="28" viewBox="0 0 28 28"
                  ><circle cx="14" cy="14" r="7" fill="#2563eb" opacity="0.2" /><circle
                    cx="14"
                    cy="14"
                    r="4"
                    fill="#2563eb"
                  /></svg
                >
              </div>
              <div class="ui2-info">
                <div class="ui2-name">{$t('componentGallery.ui2.item2')}</div>
                <div class="ui2-price">$24</div>
              </div>
            </div>
            <div class="ui2-item">
              <div class="ui2-img" style="background:#e6fff0;">
                <svg width="28" height="28" viewBox="0 0 28 28"
                  ><path
                    d="M8 14l4 4 8-8"
                    fill="none"
                    stroke="#34c759"
                    stroke-width="2"
                    stroke-linecap="round"
                  /></svg
                >
              </div>
              <div class="ui2-info">
                <div class="ui2-name">{$t('componentGallery.ui2.item3')}</div>
                <div class="ui2-price">{$t('componentGallery.ui2.free')}</div>
              </div>
            </div>
          </div>
          <div class="ui2-tag-row">
            <div class="ui2-tag" style="background:#f0e6ff;color:#3b82f6;">
              {$t('componentGallery.ui2.new')}
            </div>
            <div class="ui2-tag" style="background:#fff0e6;color:#f97316;">
              {$t('componentGallery.ui2.sale')}
            </div>
            <div class="ui2-tag" style="background:#e6fff0;color:#34c759;">
              {$t('componentGallery.ui2.free')}
            </div>
          </div>
          <button class="ui2-btn">{$t('componentGallery.ui2.addToCart')}</button>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-title">{$t('componentGallery.cards.productTitle')}</span><span
          class="card-tag">{$t('componentGallery.cards.productTag')}</span
        >
      </div>
    </div>

    <div class="card">
      <div class="card-preview">
        <div class="ui3">
          <div class="ui3-title">{$t('componentGallery.ui3.title')}</div>
          <div class="ui3-toggle-row">
            <span class="ui3-toggle-label">{$t('componentGallery.ui3.monthly')}</span>
            <div class="ui3-toggle-track"><div class="ui3-toggle-thumb"></div></div>
            <span class="ui3-toggle-label active">{$t('componentGallery.ui3.annual')}</span>
            <span
              style="font-size:8px;background:#e6fff0;color:#34c759;padding:1px 5px;border-radius:4px;font-family:-apple-system,sans-serif;font-weight:600;"
              >-20%</span
            >
          </div>
          <div class="ui3-cards">
            <div class="ui3-card">
              <div class="ui3-plan">{$t('componentGallery.ui3.starter')}</div>
              <div class="ui3-price">$0</div>
              <div class="ui3-period">{$t('componentGallery.ui3.perMonth')}</div>
              <div class="ui3-features">
                <div class="ui3-feat">
                  <div class="ui3-check"></div>
                  {$t('componentGallery.ui3.starterFeat1')}
                </div>
                <div class="ui3-feat">
                  <div class="ui3-check"></div>
                  {$t('componentGallery.ui3.starterFeat2')}
                </div>
              </div>
              <button class="ui3-btn">{$t('componentGallery.ui3.starterBtn')}</button>
            </div>
            <div class="ui3-card featured">
              <div class="ui3-plan">{$t('componentGallery.ui3.pro')}</div>
              <div class="ui3-price">$49</div>
              <div class="ui3-period">{$t('componentGallery.ui3.perMonth')}</div>
              <div class="ui3-features">
                <div class="ui3-feat">
                  <div class="ui3-check"></div>
                  {$t('componentGallery.ui3.proFeat1')}
                </div>
                <div class="ui3-feat">
                  <div class="ui3-check"></div>
                  {$t('componentGallery.ui3.proFeat2')}
                </div>
                <div class="ui3-feat">
                  <div class="ui3-check"></div>
                  {$t('componentGallery.ui3.proFeat3')}
                </div>
              </div>
              <button class="ui3-btn">{$t('componentGallery.ui3.proBtn')}</button>
            </div>
            <div class="ui3-card">
              <div class="ui3-plan">{$t('componentGallery.ui3.team')}</div>
              <div class="ui3-price">$99</div>
              <div class="ui3-period">{$t('componentGallery.ui3.perMonth')}</div>
              <div class="ui3-features">
                <div class="ui3-feat">
                  <div class="ui3-check"></div>
                  {$t('componentGallery.ui3.teamFeat1')}
                </div>
                <div class="ui3-feat">
                  <div class="ui3-check"></div>
                  {$t('componentGallery.ui3.teamFeat2')}
                </div>
              </div>
              <button class="ui3-btn">{$t('componentGallery.ui3.teamBtn')}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-title">{$t('componentGallery.cards.pricingTitle')}</span><span
          class="card-tag">{$t('componentGallery.cards.pricingTag')}</span
        >
      </div>
    </div>

    <div class="card">
      <div class="card-preview">
        <div class="ui4">
          <div class="ui4-header">
            <div class="ui4-avatar"></div>
            <div>
              <div class="ui4-name">{$t('componentGallery.ui4.name')}</div>
              <div class="ui4-status">
                <span class="ui4-dot"></span>{$t('componentGallery.ui4.online')}
              </div>
            </div>
          </div>
          <div class="ui4-msgs">
            <div class="ui4-msg">
              <div
                class="ui4-msg-av"
                style="background:linear-gradient(135deg,#3b82f6,#60a5fa);"
              ></div>
              <div class="ui4-bubble them">{$t('componentGallery.ui4.msg1')}</div>
            </div>
            <div class="ui4-msg mine">
              <div
                class="ui4-msg-av"
                style="background:linear-gradient(135deg,#2563eb,#60a5fa);"
              ></div>
              <div class="ui4-bubble me">{$t('componentGallery.ui4.msg2')}</div>
            </div>
            <div class="ui4-typing">
              <div
                class="ui4-msg-av"
                style="background:linear-gradient(135deg,#3b82f6,#60a5fa);"
              ></div>
              <div class="ui4-typing-bubble">
                <div class="ui4-typing-dot"></div>
                <div class="ui4-typing-dot"></div>
                <div class="ui4-typing-dot"></div>
              </div>
            </div>
          </div>
          <div class="ui4-input">
            <span>{$t('componentGallery.ui4.placeholder')}</span>
            <div class="ui4-send">
              <svg width="8" height="8" viewBox="0 0 8 8"
                ><path
                  d="M1 4h6M4 1l3 3-3 3"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.2"
                  stroke-linecap="round"
                /></svg
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-title">{$t('componentGallery.cards.messagingTitle')}</span><span
          class="card-tag">{$t('componentGallery.cards.messagingTag')}</span
        >
      </div>
    </div>

    <div class="card">
      <div class="card-preview">
        <div class="ui5">
          <div class="ui5-header">
            <span class="ui5-month">{$t('componentGallery.ui5.month')}</span>
            <div class="ui5-nav">
              <div class="ui5-navbtn">
                <svg width="6" height="8" viewBox="0 0 6 8"
                  ><path
                    d="M5 1L1 4l4 3"
                    fill="none"
                    stroke="#8e8e93"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  /></svg
                >
              </div>
              <div class="ui5-navbtn">
                <svg width="6" height="8" viewBox="0 0 6 8"
                  ><path
                    d="M1 1l4 3-4 3"
                    fill="none"
                    stroke="#8e8e93"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  /></svg
                >
              </div>
            </div>
          </div>
          <div class="ui5-days-header">
            <div class="ui5-day-lbl">{$t('componentGallery.ui5.day1')}</div>
            <div class="ui5-day-lbl">{$t('componentGallery.ui5.day2')}</div>
            <div class="ui5-day-lbl">{$t('componentGallery.ui5.day3')}</div>
            <div class="ui5-day-lbl">{$t('componentGallery.ui5.day4')}</div>
            <div class="ui5-day-lbl">{$t('componentGallery.ui5.day5')}</div>
            <div class="ui5-day-lbl">{$t('componentGallery.ui5.day6')}</div>
            <div class="ui5-day-lbl">{$t('componentGallery.ui5.day7')}</div>
          </div>
          <div class="ui5-days">
            <div class="ui5-day other">23</div>
            <div class="ui5-day other">24</div>
            <div class="ui5-day other">25</div>
            <div class="ui5-day other">26</div>
            <div class="ui5-day other">27</div>
            <div class="ui5-day other">28</div>
            <div class="ui5-day">1</div>
            <div class="ui5-day">2</div>
            <div class="ui5-day has-event">3</div>
            <div class="ui5-day">4</div>
            <div class="ui5-day">5</div>
            <div class="ui5-day has-event">6</div>
            <div class="ui5-day">7</div>
            <div class="ui5-day">8</div>
            <div class="ui5-day">9</div>
            <div class="ui5-day">10</div>
            <div class="ui5-day">11</div>
            <div class="ui5-day">12</div>
            <div class="ui5-day">13</div>
            <div class="ui5-day">14</div>
            <div class="ui5-day today">15</div>
            <div class="ui5-day">16</div>
            <div class="ui5-day">17</div>
            <div class="ui5-day has-event">18</div>
            <div class="ui5-day">19</div>
            <div class="ui5-day">20</div>
            <div class="ui5-day">21</div>
            <div class="ui5-day">22</div>
          </div>
          <div class="ui5-events">
            <div class="ui5-event">
              <div class="ui5-event-dot" style="background:#3b82f6;"></div>
              <span class="ui5-event-name">{$t('componentGallery.ui5.event1')}</span><span
                class="ui5-event-time">10:00 AM</span
              >
            </div>
            <div class="ui5-event">
              <div class="ui5-event-dot" style="background:#2563eb;"></div>
              <span class="ui5-event-name">{$t('componentGallery.ui5.event2')}</span><span
                class="ui5-event-time">2:00 PM</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-title">{$t('componentGallery.cards.calendarTitle')}</span><span
          class="card-tag">{$t('componentGallery.cards.calendarTag')}</span
        >
      </div>
    </div>

    <div class="card">
      <div class="card-preview">
        <div class="ui6">
          <div class="ui6-profile">
            <div class="ui6-avatar">JD</div>
            <div>
              <div class="ui6-name">{$t('componentGallery.ui6.name')}</div>
              <div class="ui6-role">{$t('componentGallery.ui6.role')}</div>
            </div>
          </div>
          <div class="ui6-section-lbl">{$t('componentGallery.ui6.preferences')}</div>
          <div class="ui6-items">
            <div class="ui6-item">
              <div class="ui6-item-icon" style="background:#f0e6ff;">
                <svg width="12" height="12" viewBox="0 0 12 12"
                  ><circle
                    cx="6"
                    cy="6"
                    r="4"
                    fill="none"
                    stroke="#3b82f6"
                    stroke-width="1.2"
                  /><circle cx="6" cy="6" r="1.5" fill="#3b82f6" /></svg
                >
              </div>
              <span class="ui6-item-name">{$t('componentGallery.ui6.darkMode')}</span>
              <div class="ui6-toggle"><div class="ui6-toggle-thumb"></div></div>
            </div>
            <div class="ui6-item">
              <div class="ui6-item-icon" style="background:#e6f0ff;">
                <svg width="12" height="12" viewBox="0 0 12 12"
                  ><path
                    d="M6 1v2M6 9v2M1 6h2M9 6h2"
                    stroke="#2563eb"
                    stroke-width="1.2"
                    stroke-linecap="round"
                  /><circle
                    cx="6"
                    cy="6"
                    r="2"
                    fill="none"
                    stroke="#2563eb"
                    stroke-width="1.2"
                  /></svg
                >
              </div>
              <span class="ui6-item-name">{$t('componentGallery.ui6.notifications')}</span><span
                class="ui6-item-arrow">›</span
              >
            </div>
          </div>
          <div class="ui6-progress-row">
            <div class="ui6-progress-label">
              <span>{$t('componentGallery.ui6.storageUsed')}</span><span>85%</span>
            </div>
            <div class="ui6-progress-track"><div class="ui6-progress-fill"></div></div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <span class="card-title">{$t('componentGallery.cards.workspaceTitle')}</span><span
          class="card-tag">{$t('componentGallery.cards.workspaceTag')}</span
        >
      </div>
    </div>
  </div>
</section>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .gallery-section {
    padding: 120px 1.5rem 120px;
  }
  .gallery-intro {
    max-width: 760px;
    margin: 0 auto 1.8rem;
    text-align: center;
  }
  .gallery-eyebrow {
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #8e8e93;
    font-weight: 600;
    margin-bottom: 0.95rem;
    font-family: -apple-system, sans-serif;
  }
  .gallery-title {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.15;
    letter-spacing: -0.04em;
    color: #101126;
    margin-bottom: 0.9rem;
    font-family: -apple-system, sans-serif;
  }
  .gallery-subtitle {
    font-size: 1.08rem;
    line-height: 1.6;
    color: #6b6b80;
    max-width: 640px;
    margin: 0 auto;
    font-family: -apple-system, sans-serif;
  }
  .gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    padding: 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }
  .card {
    border-radius: 16px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.07);
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    opacity: 0;
    transform: translateY(72px) scale(0.84);
    transition:
      opacity 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1),
      box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .card:global(.visible) {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .card:global(.visible):hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  }
  .card-preview {
    height: 200px;
    overflow: hidden;
    position: relative;
    background: #f8f8fc;
  }
  .card-footer {
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
  .card-title {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .card-tag {
    font-size: 11px;
    color: #6b6b80;
    background: #f0f0f5;
    border-radius: 999px;
    padding: 3px 10px;
    font-family: -apple-system, sans-serif;
  }
  .ui1 {
    padding: 14px;
    background: #fff;
    height: 100%;
  }
  .ui1-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .ui1-title {
    font-size: 11px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .ui1-badge {
    background: #f0e6ff;
    color: #3b82f6;
    font-size: 9px;
    padding: 2px 7px;
    border-radius: 999px;
    font-weight: 600;
    font-family: -apple-system, sans-serif;
    animation: badgePulse 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes badgePulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(0.95);
    }
  }
  .ui1-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
    margin-bottom: 10px;
  }
  .ui1-stat {
    background: #f8f8fc;
    border-radius: 8px;
    padding: 8px;
  }
  .ui1-stat-val {
    font-size: 14px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .ui1-stat-label {
    font-size: 8px;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
    margin-top: 1px;
  }
  .ui1-chart {
    background: #f8f8fc;
    border-radius: 8px;
    padding: 8px;
  }
  .ui1-bars {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    height: 50px;
  }
  .ui1-bar {
    flex: 1;
    border-radius: 3px 3px 0 0;
    transform-origin: bottom;
    animation: growBar 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite alternate;
  }
  .ui1-bar:nth-child(1) {
    animation-delay: 0s;
  }
  .ui1-bar:nth-child(2) {
    animation-delay: 0.2s;
  }
  .ui1-bar:nth-child(3) {
    animation-delay: 0.4s;
  }
  .ui1-bar:nth-child(4) {
    animation-delay: 0.6s;
  }
  .ui1-bar:nth-child(5) {
    animation-delay: 0.8s;
  }
  .ui1-bar:nth-child(6) {
    animation-delay: 1s;
  }
  .ui1-bar:nth-child(7) {
    animation-delay: 1.2s;
  }
  @keyframes growBar {
    0% {
      transform: scaleY(0.75);
    }
    100% {
      transform: scaleY(1.08);
    }
  }
  .ui1-chart-label {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
  }
  .ui1-chart-lbl {
    font-size: 7px;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
  }
  .ui2 {
    padding: 12px;
    background: #fff;
    height: 100%;
  }
  .ui2-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .ui2-title {
    font-size: 11px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .ui2-cart {
    width: 22px;
    height: 22px;
    background: #3b82f6;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: cartShake 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes cartShake {
    0%,
    100% {
      transform: rotate(0) scale(1);
    }
    88% {
      transform: rotate(0) scale(1);
    }
    91% {
      transform: rotate(-12deg) scale(1.15);
    }
    94% {
      transform: rotate(12deg) scale(1.15);
    }
    97% {
      transform: rotate(-6deg) scale(1.08);
    }
  }
  .ui2-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }
  .ui2-item {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
  .ui2-img {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  .ui2-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 30%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 70%
    );
    animation: imgSweep 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes imgSweep {
    0% {
      transform: translateX(-150%);
    }
    100% {
      transform: translateX(250%);
    }
  }
  .ui2-info {
    padding: 5px 6px;
  }
  .ui2-name {
    font-size: 8px;
    font-weight: 600;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .ui2-price {
    font-size: 8px;
    color: #3b82f6;
    font-weight: 700;
    font-family: -apple-system, sans-serif;
  }
  .ui2-tag-row {
    display: flex;
    gap: 4px;
    margin-top: 8px;
  }
  .ui2-tag {
    font-size: 8px;
    padding: 3px 8px;
    border-radius: 999px;
    font-family: -apple-system, sans-serif;
    font-weight: 500;
  }
  .ui2-btn {
    margin-top: 8px;
    width: 100%;
    padding: 6px 0;
    border-radius: 8px;
    border: none;
    font-size: 9px;
    font-weight: 600;
    font-family: -apple-system, sans-serif;
    cursor: pointer;
    color: #fff;
    background: #3b82f6;
    position: relative;
    overflow: hidden;
    animation: btnGlow 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  .ui2-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    animation: btnSweep 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes btnGlow {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(124, 92, 191, 0);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(124, 92, 191, 0.35);
    }
  }
  @keyframes btnSweep {
    0% {
      transform: translateX(-150%);
    }
    100% {
      transform: translateX(250%);
    }
  }
  .ui3 {
    padding: 12px;
    background: #fff;
    height: 100%;
  }
  .ui3-title {
    font-size: 11px;
    font-weight: 700;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 4px;
    font-family: -apple-system, sans-serif;
  }
  .ui3-toggle-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-bottom: 8px;
  }
  .ui3-toggle-label {
    font-size: 8px;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
  }
  .ui3-toggle-label.active {
    color: #3b82f6;
    font-weight: 600;
  }
  .ui3-toggle-track {
    width: 28px;
    height: 14px;
    background: #3b82f6;
    border-radius: 7px;
    position: relative;
  }
  .ui3-toggle-thumb {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    animation: toggleSlide 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes toggleSlide {
    0%,
    40% {
      right: 2px;
    }
    50%,
    90% {
      right: calc(100% - 12px);
    }
    100% {
      right: 2px;
    }
  }
  .ui3-cards {
    display: flex;
    gap: 6px;
  }
  .ui3-card {
    flex: 1;
    border-radius: 10px;
    padding: 10px 8px;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
  .ui3-card.featured {
    background: #3b82f6;
    border-color: #3b82f6;
    animation: featuredPulse 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes featuredPulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.025);
    }
  }
  .ui3-plan {
    font-size: 8px;
    font-weight: 600;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
  }
  .ui3-card.featured .ui3-plan {
    color: rgba(255, 255, 255, 0.7);
  }
  .ui3-price {
    font-size: 18px;
    font-weight: 800;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
    line-height: 1.1;
  }
  .ui3-card.featured .ui3-price {
    color: #fff;
  }
  .ui3-period {
    font-size: 8px;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
  }
  .ui3-card.featured .ui3-period {
    color: rgba(255, 255, 255, 0.6);
  }
  .ui3-features {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .ui3-feat {
    font-size: 8px;
    color: #3c3c43;
    font-family: -apple-system, sans-serif;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .ui3-card.featured .ui3-feat {
    color: rgba(255, 255, 255, 0.85);
  }
  .ui3-check {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #34c759;
    flex-shrink: 0;
  }
  .ui3-card.featured .ui3-check {
    background: rgba(255, 255, 255, 0.5);
  }
  .ui3-btn {
    margin-top: 8px;
    width: 100%;
    padding: 5px 0;
    border-radius: 6px;
    font-size: 8px;
    font-weight: 600;
    font-family: -apple-system, sans-serif;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #f8f8fc;
    color: #1a1a1a;
    cursor: pointer;
  }
  .ui3-card.featured .ui3-btn {
    background: #fff;
    color: #3b82f6;
    border-color: transparent;
  }
  .ui4 {
    padding: 12px;
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .ui4-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    margin-bottom: 8px;
  }
  .ui4-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    flex-shrink: 0;
    animation: avatarGlow 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes avatarGlow {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(124, 92, 191, 0);
    }
    50% {
      box-shadow: 0 0 0 3px rgba(124, 92, 191, 0.25);
    }
  }
  .ui4-name {
    font-size: 10px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .ui4-status {
    font-size: 8px;
    color: #34c759;
    font-family: -apple-system, sans-serif;
  }
  .ui4-dot {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #34c759;
    margin-right: 3px;
    animation: dotBlink 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes dotBlink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }
  .ui4-msgs {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
  }
  .ui4-msg {
    display: flex;
    gap: 6px;
    align-items: flex-end;
  }
  .ui4-msg.mine {
    flex-direction: row-reverse;
  }
  .ui4-msg-av {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .ui4-bubble {
    max-width: 70%;
    padding: 6px 9px;
    border-radius: 12px;
    font-size: 8px;
    line-height: 1.4;
    font-family: -apple-system, sans-serif;
  }
  .ui4-bubble.them {
    background: #f0f0f5;
    color: #1a1a1a;
    border-bottom-left-radius: 3px;
  }
  .ui4-bubble.me {
    background: #3b82f6;
    color: #fff;
    border-bottom-right-radius: 3px;
  }
  .ui4-typing {
    display: flex;
    gap: 6px;
    align-items: flex-end;
  }
  .ui4-typing-bubble {
    background: #f0f0f5;
    border-radius: 12px;
    border-bottom-left-radius: 3px;
    padding: 8px 12px;
    display: flex;
    gap: 3px;
    align-items: center;
  }
  .ui4-typing-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #8e8e93;
    animation: typingBounce 1s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  .ui4-typing-dot:nth-child(2) {
    animation-delay: 0.15s;
  }
  .ui4-typing-dot:nth-child(3) {
    animation-delay: 0.3s;
  }
  @keyframes typingBounce {
    0%,
    100% {
      transform: translateY(0);
      background: #8e8e93;
    }
    50% {
      transform: translateY(-5px);
      background: #3b82f6;
    }
  }
  .ui4-input {
    margin-top: 8px;
    background: #f0f0f5;
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 8px;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ui4-send {
    width: 16px;
    height: 16px;
    background: #3b82f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: sendPulse 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes sendPulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
  .ui5 {
    padding: 10px;
    background: #fff;
    height: 100%;
  }
  .ui5-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  .ui5-month {
    font-size: 10px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .ui5-nav {
    display: flex;
    gap: 4px;
  }
  .ui5-navbtn {
    width: 14px;
    height: 14px;
    border-radius: 5px;
    background: #f0f0f5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ui5-days-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    margin-bottom: 3px;
  }
  .ui5-day-lbl {
    font-size: 7px;
    color: #8e8e93;
    text-align: center;
    font-family: -apple-system, sans-serif;
    font-weight: 600;
  }
  .ui5-days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
  }
  .ui5-day {
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    font-family: -apple-system, sans-serif;
    color: #1a1a1a;
    aspect-ratio: unset;
    height: 20px;
  }
  .ui5-day.today {
    background: #3b82f6;
    color: #fff;
    font-weight: 700;
    animation: todayPulse 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
    font-size: 7px;
  }
  @keyframes todayPulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(124, 92, 191, 0.5);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 0 5px rgba(124, 92, 191, 0);
      transform: scale(1.1);
    }
  }
  .ui5-day.has-event {
    position: relative;
  }
  .ui5-day.has-event::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #3b82f6;
    animation: eventDot 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes eventDot {
    0%,
    100% {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
    50% {
      opacity: 0.5;
      transform: translateX(-50%) scale(1.4);
    }
  }
  .ui5-day.other {
    color: #c0c0c8;
  }
  .ui5-events {
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .ui5-event {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 5px 8px;
    border-radius: 6px;
    background: #f8f8fc;
  }
  .ui5-event:first-child {
    animation: eventSlide 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  .ui5-event:last-child {
    animation: eventSlide 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite 1.5s;
  }
  @keyframes eventSlide {
    0%,
    100% {
      background: #f8f8fc;
      transform: translateX(0);
    }
    50% {
      background: #f0e6ff;
      transform: translateX(3px);
    }
  }
  .ui5-event-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
    animation: dotPulse 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes dotPulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.4);
    }
  }
  .ui5-event-name {
    font-size: 8px;
    font-weight: 600;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .ui5-event-time {
    font-size: 7px;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
    margin-left: auto;
  }
  .ui6 {
    padding: 12px;
    background: #fff;
    height: 100%;
  }
  .ui6-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    margin-bottom: 8px;
  }
  .ui6-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2563eb, #60a5fa);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    font-family: -apple-system, sans-serif;
    flex-shrink: 0;
    animation: avatarColor 6s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes avatarColor {
    0%,
    100% {
      background: linear-gradient(135deg, #2563eb, #60a5fa);
    }
    33% {
      background: linear-gradient(135deg, #3b82f6, #60a5fa);
    }
    66% {
      background: linear-gradient(135deg, #34c759, #86efac);
    }
  }
  .ui6-name {
    font-size: 11px;
    font-weight: 700;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
  }
  .ui6-role {
    font-size: 8px;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
  }
  .ui6-section-lbl {
    font-size: 8px;
    font-weight: 600;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
  }
  .ui6-items {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-bottom: 8px;
  }
  .ui6-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 8px;
    background: #f8f8fc;
  }
  .ui6-item:first-child {
    animation: itemSlide 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  .ui6-item:last-child {
    animation: itemSlide 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite 1.5s;
  }
  @keyframes itemSlide {
    0%,
    100% {
      background: #f8f8fc;
      transform: translateX(0);
    }
    50% {
      background: #f0e6ff;
      transform: translateX(2px);
    }
  }
  .ui6-item-icon {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .ui6-item-name {
    font-size: 9px;
    font-weight: 500;
    color: #1a1a1a;
    font-family: -apple-system, sans-serif;
    flex: 1;
  }
  .ui6-item-arrow {
    font-size: 9px;
    color: #c0c0c8;
    animation: arrowBounce 2s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes arrowBounce {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(3px);
    }
  }
  .ui6-toggle {
    width: 26px;
    height: 14px;
    border-radius: 7px;
    background: #3b82f6;
    position: relative;
    flex-shrink: 0;
    animation: toggleGlow 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes toggleGlow {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(124, 92, 191, 0);
    }
    50% {
      box-shadow: 0 0 6px 2px rgba(124, 92, 191, 0.35);
    }
  }
  .ui6-toggle-thumb {
    position: absolute;
    right: 2px;
    top: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    animation: thumbSlide 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
  }
  @keyframes thumbSlide {
    0%,
    40% {
      right: 2px;
    }
    50%,
    90% {
      right: calc(100% - 12px);
    }
    100% {
      right: 2px;
    }
  }
  .ui6-progress-row {
    margin-top: 6px;
  }
  .ui6-progress-label {
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    color: #8e8e93;
    font-family: -apple-system, sans-serif;
    margin-bottom: 3px;
  }
  .ui6-progress-track {
    height: 4px;
    background: #f0f0f5;
    border-radius: 2px;
    overflow: hidden;
  }
  .ui6-progress-fill {
    height: 100%;
    border-radius: 2px;
    background: linear-gradient(90deg, #3b82f6, #0ea5e9, #60a5fa);
    background-size: 200% 100%;
    animation:
      progressFill 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite alternate,
      progressShimmer 2s linear infinite;
  }
  @keyframes progressFill {
    0% {
      width: 30%;
    }
    100% {
      width: 88%;
    }
  }
  @keyframes progressShimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
  @media (max-width: 768px) {
    .gallery-section {
      padding: 80px 1rem 80px;
    }
    .gallery-intro {
      margin-bottom: 1.4rem;
    }
    .gallery-title {
      font-size: clamp(1.7rem, 8vw, 2.2rem);
    }
    .gallery-subtitle {
      font-size: 0.95rem;
    }
    .gallery {
      grid-template-columns: 1fr;
      padding: 1rem 0 2rem;
    }
    .card-preview {
      height: 218px;
    }
    .card:nth-child(3) .card-preview {
      height: 248px;
    }
  }
</style>
