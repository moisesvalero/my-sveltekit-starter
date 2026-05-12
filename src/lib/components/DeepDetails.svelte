<script lang="ts">
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n';
</script>

<section class="deep-details" id="details">
  <div class="inner">
    <header class="header" use:reveal={{ stage: 'title' }}>
      <p class="eyebrow">{$t('deepDetails.eyebrow')}</p>
      <h2>{$t('deepDetails.title')}</h2>
      <p class="subtitle">
        {$t('deepDetails.subtitle')}
      </p>
    </header>

    <div class="marquee" use:reveal={{ stage: 'content', delay: 150 }}>
      <ul class="list">
        <li>
          <span class="text">{$t('deepDetails.items.item1Text')}</span>
          <span class="tag">{$t('deepDetails.items.item1Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item2Text')}</span>
          <span class="tag">{$t('deepDetails.items.item2Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item3Text')}</span>
          <span class="tag">{$t('deepDetails.items.item3Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item4Text')}</span>
          <span class="tag">{$t('deepDetails.items.item4Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item5Text')}</span>
          <span class="tag">{$t('deepDetails.items.item5Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item6Text')}</span>
          <span class="tag">{$t('deepDetails.items.item6Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item7Text')}</span>
          <span class="tag">{$t('deepDetails.items.item7Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item8Text')}</span>
          <span class="tag">{$t('deepDetails.items.item8Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item9Text')}</span>
          <span class="tag">{$t('deepDetails.items.item9Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item10Text')}</span>
          <span class="tag">{$t('deepDetails.items.item10Tag')}</span>
        </li>

        <li>
          <span class="text">{$t('deepDetails.items.item11Text')}</span>
          <span class="tag">{$t('deepDetails.items.item11Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item12Text')}</span>
          <span class="tag">{$t('deepDetails.items.item12Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item13Text')}</span>
          <span class="tag">{$t('deepDetails.items.item13Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item14Text')}</span>
          <span class="tag">{$t('deepDetails.items.item14Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item15Text')}</span>
          <span class="tag">{$t('deepDetails.items.item15Tag')}</span>
        </li>

        <!-- Duplicamos para efecto “créditos” continuo -->
        <li>
          <span class="text">{$t('deepDetails.items.item1Text')}</span>
          <span class="tag">{$t('deepDetails.items.item1Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item2Text')}</span>
          <span class="tag">{$t('deepDetails.items.item2Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item3Text')}</span>
          <span class="tag">{$t('deepDetails.items.item3Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item4Text')}</span>
          <span class="tag">{$t('deepDetails.items.item4Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item5Text')}</span>
          <span class="tag">{$t('deepDetails.items.item5Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item6Text')}</span>
          <span class="tag">{$t('deepDetails.items.item6Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item7Text')}</span>
          <span class="tag">{$t('deepDetails.items.item7Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item8Text')}</span>
          <span class="tag">{$t('deepDetails.items.item8Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item9Text')}</span>
          <span class="tag">{$t('deepDetails.items.item9Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item10Text')}</span>
          <span class="tag">{$t('deepDetails.items.item10Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item11Text')}</span>
          <span class="tag">{$t('deepDetails.items.item11Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item12Text')}</span>
          <span class="tag">{$t('deepDetails.items.item12Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item13Text')}</span>
          <span class="tag">{$t('deepDetails.items.item13Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item14Text')}</span>
          <span class="tag">{$t('deepDetails.items.item14Tag')}</span>
        </li>
        <li>
          <span class="text">{$t('deepDetails.items.item15Text')}</span>
          <span class="tag">{$t('deepDetails.items.item15Tag')}</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  .deep-details {
    padding: 120px 1.5rem 120px;
    background: radial-gradient(circle at top, rgba(99, 102, 241, 0.06), #ffffff 55%);
    color: var(--text-main);
  }

  .inner {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
  }

  .header {
    margin-bottom: 2.5rem;
  }

  .eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: clamp(2.1rem, 3vw, 2.6rem);
    letter-spacing: -0.04em;
    color: var(--text-main);
    margin-bottom: 0.75rem;
  }

  .subtitle {
    font-size: 0.96rem;
    color: var(--text-secondary);
    max-width: 32rem;
    margin: 0 auto;
    line-height: 1.7;
  }

  .marquee {
    margin-top: 3rem;
    height: 440px;
    overflow-y: hidden;
    overflow-x: visible;
    position: relative;
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
    mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
    text-align: center;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    gap: 0.45rem;
    font-size: 1.1rem;
    font-weight: 600;
    animation: credits 18s linear infinite;
  }

  .list:active {
    animation-play-state: paused;
  }

  .list li {
    color: rgba(17, 24, 39, 0.45);
    transition:
      color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: block;
    position: relative;
    cursor: pointer;
  }

  .list li:nth-child(1),
  .list li:nth-child(2),
  .list li:nth-child(3) {
    color: rgba(17, 24, 39, 0.9);
  }

  .list li:hover .text {
    transform: translateY(-1px);
  }

  .text {
    transition:
      color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: inline-block;
    padding-right: 0.5rem;
  }

  .tag {
    position: absolute;
    top: 50%;
    right: -3rem;
    padding: 0.25rem 1.1rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #0f172a;
    background: rgba(255, 255, 255, 0.96);
    opacity: 0;
    transform: translateY(-50%) translateY(8px);
    transition:
      opacity 0.18s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1);
    white-space: nowrap;
  }

  .list li:hover .tag {
    opacity: 1;
    transform: translateY(0);
  }

  /* Colores por línea */
  .list li:nth-child(10n + 1):hover .text,
  .list li:nth-child(10n + 1):hover .tag {
    color: #312e81;
    background: rgba(129, 140, 248, 0.18);
  }

  .list li:nth-child(10n + 2):hover .text,
  .list li:nth-child(10n + 2):hover .tag {
    color: #1e3a8a;
    background: rgba(96, 165, 250, 0.24);
  }

  .list li:nth-child(10n + 3):hover .text,
  .list li:nth-child(10n + 3):hover .tag {
    color: #064e3b;
    background: rgba(52, 211, 153, 0.2);
  }

  .list li:nth-child(10n + 4):hover .text,
  .list li:nth-child(10n + 4):hover .tag {
    color: #92400e;
    background: rgba(251, 191, 36, 0.26);
  }

  .list li:nth-child(10n + 5):hover .text,
  .list li:nth-child(10n + 5):hover .tag {
    color: #7c2d12;
    background: rgba(248, 113, 113, 0.26);
  }

  .list li:nth-child(10n + 6):hover .text,
  .list li:nth-child(10n + 6):hover .tag {
    color: #1d4ed8;
    background: rgba(129, 140, 248, 0.26);
  }

  .list li:nth-child(10n + 7):hover .text,
  .list li:nth-child(10n + 7):hover .tag {
    color: #0369a1;
    background: rgba(56, 189, 248, 0.26);
  }

  .list li:nth-child(10n + 8):hover .text,
  .list li:nth-child(10n + 8):hover .tag {
    color: #4c1d95;
    background: rgba(192, 132, 252, 0.26);
  }

  .list li:nth-child(10n + 9):hover .text,
  .list li:nth-child(10n + 9):hover .tag {
    color: #15803d;
    background: rgba(74, 222, 128, 0.24);
  }

  .list li:nth-child(10n + 10):hover .text,
  .list li:nth-child(10n + 10):hover .tag {
    color: #0f172a;
    background: rgba(148, 163, 184, 0.24);
  }

  @keyframes credits {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  @media (max-width: 768px) {
    .deep-details {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .tag {
      display: none;
    }
  }

  @media (min-width: 1600px) {
    .deep-details {
      padding-block: 120px;
    }

    .inner {
      max-width: 1080px;
    }

    .marquee {
      height: 500px;
    }
  }
</style>
