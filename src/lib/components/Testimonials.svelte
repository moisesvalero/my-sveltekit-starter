<script lang="ts">
  import { onMount } from 'svelte';
  import { reveal } from '$lib/reveal';
  import { t } from '$lib/i18n';

  const avatarPalette = [
    '#2563eb',
    '#3b82f6',
    '#ec4899',
    '#f97316',
    '#14b8a6',
    '#0ea5e9',
    '#84cc16',
    '#f59e0b',
    '#ef4444',
    '#10b981'
  ];

  function getInitials(fullName: string) {
    const words = fullName.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return 'NA';
    const first = words[0]?.[0] ?? '';
    const second = words[1]?.[0] ?? words[words.length - 1]?.[0] ?? '';
    return (first + second).toUpperCase();
  }

  function getColorIndex(input: string) {
    let hash = 0;
    for (let i = 0; i < input.length; i += 1) {
      hash = (hash << 5) - hash + input.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % avatarPalette.length;
  }

  onMount(() => {
    const metas = document.querySelectorAll<HTMLElement>('.quote .meta');

    metas.forEach((meta) => {
      const nameEl = meta.querySelector<HTMLElement>('.name');
      const roleEl = meta.querySelector<HTMLElement>('.role');
      if (!nameEl || !roleEl) return;

      const name = nameEl.textContent?.trim() ?? '';
      const roleRaw = roleEl.textContent?.trim() ?? '';
      const [roleTitle, ...companyParts] = roleRaw.split(/\s(?:at|en)\s/i);
      const company = companyParts.join(' ').trim() || 'Independent';

      const avatar = document.createElement('span');
      avatar.className = 'avatar';
      avatar.textContent = getInitials(name);
      avatar.style.setProperty('--avatar-bg', avatarPalette[getColorIndex(name)]);

      const identity = document.createElement('div');
      identity.className = 'identity';

      const nextName = document.createElement('span');
      nextName.className = 'name';
      nextName.textContent = name;

      const nextRole = document.createElement('span');
      nextRole.className = 'role-title';
      nextRole.textContent = roleTitle.trim();

      const nextCompany = document.createElement('span');
      nextCompany.className = 'company';
      nextCompany.textContent = company;

      identity.append(nextName, nextRole, nextCompany);
      meta.replaceChildren(avatar, identity);
    });
  });
</script>

<section class="testimonials" id="testimonials">
  <div
    class="header"
    use:reveal={{ stage: 'title', threshold: 0.12, rootMargin: '0px 0px -2% 0px' }}
  >
    <p class="eyebrow">{$t('testimonials.eyebrow')}</p>
    <h2>{$t('testimonials.title')}</h2>
    <button class="cta">{$t('testimonials.cta')}</button>
  </div>

  <div
    class="columns"
    use:reveal={{ stage: 'content', delay: 70, threshold: 0.08, rootMargin: '0px 0px 6% 0px' }}
  >
    <!-- Columna 1 -->
    <div class="col">
      <div class="stack stack-slow">
        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q1')}
          </p>
          <div class="meta">
            <span class="name">Laura Sánchez</span>
            <span class="role">{$t('testimonials.roles.r1')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q2')}
          </p>
          <div class="meta">
            <span class="name">Diego Romero</span>
            <span class="role">{$t('testimonials.roles.r2')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q3')}
          </p>
          <div class="meta">
            <span class="name">Marta Klein</span>
            <span class="role">{$t('testimonials.roles.r3')}</span>
          </div>
        </article>

        <!-- duplicados para bucle -->
        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q4')}
          </p>
          <div class="meta">
            <span class="name">Sergio Duarte</span>
            <span class="role">{$t('testimonials.roles.r4')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q5')}
          </p>
          <div class="meta">
            <span class="name">Julia Pérez</span>
            <span class="role">{$t('testimonials.roles.r5')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q6')}
          </p>
          <div class="meta">
            <span class="name">Héctor Molina</span>
            <span class="role">{$t('testimonials.roles.r6')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q7')}
          </p>
          <div class="meta">
            <span class="name">Emilia Novak</span>
            <span class="role">{$t('testimonials.roles.r7')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q8')}
          </p>
          <div class="meta">
            <span class="name">Gonzalo Prieto</span>
            <span class="role">{$t('testimonials.roles.r8')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q9')}
          </p>
          <div class="meta">
            <span class="name">Elena Puig</span>
            <span class="role">{$t('testimonials.roles.r9')}</span>
          </div>
        </article>
      </div>
    </div>

    <!-- Columna 2 -->
    <div class="col">
      <div class="stack stack-medium">
        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q10')}
          </p>
          <div class="meta">
            <span class="name">Ana López</span>
            <span class="role">{$t('testimonials.roles.r10')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q11')}
          </p>
          <div class="meta">
            <span class="name">Carlos Medina</span>
            <span class="role">{$t('testimonials.roles.r11')}</span>
          </div>
        </article>

        <!-- duplicados -->
        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q12')}
          </p>
          <div class="meta">
            <span class="name">Nuria Campos</span>
            <span class="role">{$t('testimonials.roles.r12')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q13')}
          </p>
          <div class="meta">
            <span class="name">Tomás Vidal</span>
            <span class="role">{$t('testimonials.roles.r13')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q14')}
          </p>
          <div class="meta">
            <span class="name">Raquel Domínguez</span>
            <span class="role">{$t('testimonials.roles.r14')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q15')}
          </p>
          <div class="meta">
            <span class="name">Jonas Weber</span>
            <span class="role">{$t('testimonials.roles.r15')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q16')}
          </p>
          <div class="meta">
            <span class="name">Patricia Gil</span>
            <span class="role">{$t('testimonials.roles.r16')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q17')}
          </p>
          <div class="meta">
            <span class="name">Marco Esposito</span>
            <span class="role">{$t('testimonials.roles.r17')}</span>
          </div>
        </article>
      </div>
    </div>

    <!-- Columna 3 -->
    <div class="col">
      <div class="stack stack-fast">
        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q18')}
          </p>
          <div class="meta">
            <span class="name">Marcos Vidal</span>
            <span class="role">{$t('testimonials.roles.r18')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q19')}
          </p>
          <div class="meta">
            <span class="name">Irene Souza</span>
            <span class="role">{$t('testimonials.roles.r19')}</span>
          </div>
        </article>

        <!-- duplicados -->
        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q20')}
          </p>
          <div class="meta">
            <span class="name">Marcos Vidal</span>
            <span class="role">{$t('testimonials.roles.r20')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q21')}
          </p>
          <div class="meta">
            <span class="name">Lucía Roldán</span>
            <span class="role">{$t('testimonials.roles.r21')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q22')}
          </p>
          <div class="meta">
            <span class="name">Pablo Ortega</span>
            <span class="role">{$t('testimonials.roles.r22')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q23')}
          </p>
          <div class="meta">
            <span class="name">Mireia Costa</span>
            <span class="role">{$t('testimonials.roles.r23')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q24')}
          </p>
          <div class="meta">
            <span class="name">Andrés Lima</span>
            <span class="role">{$t('testimonials.roles.r24')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q25')}
          </p>
          <div class="meta">
            <span class="name">Silvia Ramos</span>
            <span class="role">{$t('testimonials.roles.r25')}</span>
          </div>
        </article>

        <article class="quote motion-card">
          <p class="body">
            {$t('testimonials.quotes.q26')}
          </p>
          <div class="meta">
            <span class="name">Rui Carvalho</span>
            <span class="role">{$t('testimonials.roles.r26')}</span>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<style>
  .testimonials {
    padding: 120px 1.5rem 120px;
    background: radial-gradient(circle at top, rgba(99, 102, 241, 0.06), transparent 55%);
    position: relative;
  }

  /* Funda inferior: hace que las columnas parezcan salir de detrás del bloque de abajo */
  .testimonials::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120px;
    background: linear-gradient(
      to top,
      var(--bg-main) 0%,
      rgba(249, 250, 251, 0.9) 35%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  .header {
    max-width: 820px;
    margin: 0 auto 3rem;
    text-align: center;
  }

  .eyebrow {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    letter-spacing: -0.04em;
    color: var(--text-main);
  }
  .cta {
    margin-top: 1.5rem;
    padding: 0.9rem 1.8rem;
    min-height: 44px;
    border-radius: 999px;
    border: none;
    background: linear-gradient(135deg, var(--accent), var(--accent-hover));
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
  }

  .columns {
    max-width: 1100px;
    margin: -1.5rem auto 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    position: relative;
    z-index: 1; /* por encima del velo inferior */
  }

  .col {
    position: relative;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
    mask-image: linear-gradient(to bottom, transparent, black 12%, black 88%, transparent);
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .quote {
    border-radius: 24px;
    background: white;
    border: 1px solid rgba(15, 23, 42, 0.06);
    padding: 1.8rem 1.9rem;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.03);
    cursor: pointer;
  }

  .body {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1.25rem;
    position: relative;
    padding-left: 1.15rem;
  }

  .body::before {
    content: '\201C';
    position: absolute;
    left: -0.12rem;
    top: -0.5rem;
    font-size: 2.1rem;
    line-height: 1;
    color: rgba(99, 102, 241, 0.42);
    font-weight: 700;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .meta :global(.avatar) {
    --avatar-bg: #2563eb;
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    font-weight: 700;
    color: #ffffff;
    background: var(--avatar-bg);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.16);
    flex-shrink: 0;
  }

  .meta :global(.identity) {
    display: flex;
    flex-direction: column;
    gap: 0.12rem;
  }

  .meta :global(.name) {
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .meta :global(.role-title),
  .meta :global(.company) {
    font-size: 0.82rem;
    color: var(--text-secondary);
  }

  .stack-slow {
    animation: slide-up-slow 42s linear infinite;
  }

  .stack-medium {
    animation: slide-up-medium 32s linear infinite;
  }

  .stack-fast {
    animation: slide-up-fast 26s linear infinite;
  }

  .col:hover .stack-slow,
  .col:hover .stack-medium,
  .col:hover .stack-fast {
    animation-play-state: paused;
  }

  @keyframes slide-up-slow {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  @keyframes slide-up-medium {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-55%);
    }
  }

  @keyframes slide-up-fast {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-60%);
    }
  }

  @media (max-width: 768px) {
    .testimonials {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  @media (max-width: 640px) {
    .testimonials {
      padding-inline: 1.25rem;
      padding-bottom: 80px;
    }

    .columns {
      grid-template-columns: minmax(0, 1fr);
      margin-top: 0;
    }

    .col:nth-child(2),
    .col:nth-child(3) {
      display: none;
    }

    .col:first-child .quote:nth-child(n + 7) {
      display: none;
    }

    .quote {
      padding: 1.35rem 1.25rem;
      border-radius: 18px;
    }
  }

  @media (min-width: 1600px) {
    .testimonials {
      padding-block: 120px;
    }

    .header {
      max-width: 920px;
    }

    .columns {
      max-width: 1320px;
      gap: 1.5rem;
    }
  }
</style>
