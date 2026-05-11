<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Spinner from '$lib/components/ui/Spinner.svelte';
  import Modal from '$lib/components/ui/Modal.svelte';
  import Skeleton from '$lib/components/ui/Skeleton.svelte';
  import LoadingBlock from '$lib/components/LoadingBlock.svelte';
  import CopyButton from '$lib/components/CopyButton.svelte';
  import Newsletter from '$lib/components/Newsletter.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import AiPrompt from '$lib/components/AiPrompt.svelte';
  import { toast } from '$lib/stores/toast';
  import { reveal } from '$lib/reveal';

  setSeo({ title: 'Componentes | My SvelteKit Starter', description: '23 componentes Svelte 5 listos para usar.' });

  let modalOpen = $state(false);
  let copiedId = $state('');

  function onCopy(code: string, id: string) {
    navigator.clipboard.writeText(code);
    copiedId = id;
    setTimeout(() => { if (copiedId === id) copiedId = ''; }, 2000);
  }
</script>

<svelte:head>
  <title>Componentes | My SvelteKit Starter</title>
</svelte:head>

<!-- Hero -->
<div class="hero">
  <div class="hero-orbs">
    <div class="h-orb h-orb--1"></div>
    <div class="h-orb h-orb--2"></div>
    <div class="h-orb h-orb--3"></div>
    <div class="h-grid"></div>
  </div>
  <Container>
    <div class="hero-body">
      <p class="hero-badge">UI KIT</p>
      <Heading level={1} align="center">Componentes</Heading>
      <Text variant="muted" align="center" className="hero-sub">
        23 componentes Svelte 5 puros. Sin dependencias extra, sin Tailwind, sin frameworks de UI. Solo tu y el componente.
      </Text>
      <div class="hero-stats">
        <div class="stat"><strong>23</strong><span>Componentes</span></div>
        <div class="stat-sep"></div>
        <div class="stat"><strong>0</strong><span>Dependencias</span></div>
        <div class="stat-sep"></div>
        <div class="stat"><strong>100%</strong><span>TypeScript</span></div>
      </div>
    </div>
  </Container>
</div>

<!-- UI Base -->
<div class="comp-section">
  <Container>
    <div class="comp-header" use:reveal={{ stage: 'content' }}>
      <p class="comp-eyebrow">UI Base</p>
      <Heading level={2}>Piezas fundamentales</Heading>
      <Text variant="muted">Los bloques mas importantes para construir cualquier interfaz.</Text>
    </div>

    <div class="comp-grid comp-grid--2">

      <!-- Button -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo">
          <div class="comp-buttons">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div class="comp-sizes">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Button</h3>
            <p>5 variantes &middot; 3 tamanos &middot; Disabled &middot; Link</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import Button from '$lib/components/ui/Button.svelte';", 'btn')}>
            {#if copiedId === 'btn'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

      <!-- Card -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo">
          <div class="comp-card-row">
            <div class="comp-mini-card default"><span>Default</span></div>
            <div class="comp-mini-card soft"><span>Soft</span></div>
            <div class="comp-mini-card outline"><span>Outline</span></div>
          </div>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Card</h3>
            <p>3 variantes &middot; Clickable &middot; Slots</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import Card from '$lib/components/ui/Card.svelte';", 'card')}>
            {#if copiedId === 'card'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

      <!-- Heading -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--left">
          <h1 style="margin:0;font-size:1.8rem;letter-spacing:-0.03em;">H1 Eyebrow</h1>
          <h2 style="margin:0;font-size:1.3rem;letter-spacing:-0.02em;color:var(--text-secondary);">H2 Kicker</h2>
          <h3 style="margin:0;font-size:1.1rem;font-weight:600;">H3</h3>
          <h4 style="margin:0;font-size:0.95rem;font-weight:500;color:var(--text-secondary);">H4</h4>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Heading + Text</h3>
            <p>Titulos H1-H4 &middot; Eyebrow &middot; Kicker &middot; Parrafos</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import Heading from '$lib/components/ui/Heading.svelte';\nimport Text from '$lib/components/ui/Text.svelte';", 'head')}>
            {#if copiedId === 'head'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

      <!-- Container + Section -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo">
          <div class="section-pills">
            <span class="pill pill--default">default</span>
            <span class="pill pill--muted">muted</span>
            <span class="pill pill--soft">soft</span>
            <span class="pill pill--surface">surface</span>
          </div>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Container + Section</h3>
            <p>Centrador responsivo &middot; 4 fondos de seccion</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import Container from '$lib/components/ui/Container.svelte';\nimport Section from '$lib/components/ui/Section.svelte';", 'cont')}>
            {#if copiedId === 'cont'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

      <!-- Grid -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo">
          <div class="comp-grid-demo">
            <div class="cg-cell" style="grid-column:1/3"><span>1 col</span></div>
            <div class="cg-cell"><span>A</span></div>
            <div class="cg-cell"><span>B</span></div>
            <div class="cg-cell"><span>C</span></div>
          </div>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Grid</h3>
            <p>Responsive por defecto &middot; columns prop</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import Grid from '$lib/components/ui/Grid.svelte';", 'grid')}>
            {#if copiedId === 'grid'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

      <!-- HeroSection -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--centered">
          <div class="mini-hero">
            <p class="mini-eyebrow">HERO</p>
            <p class="mini-title">Listo en una linea</p>
            <p class="mini-sub">Titulo + subtitulo + CTAs</p>
            <div class="mini-btns">
              <Button variant="primary" size="sm">Primary</Button>
              <Button variant="outline" size="sm">Secondary</Button>
            </div>
          </div>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>HeroSection</h3>
            <p>Gradientes animados &middot; 2 CTAs &middot; Centered</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import HeroSection from '$lib/components/ui/HeroSection.svelte';", 'hero')}>
            {#if copiedId === 'hero'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

      <!-- FeaturesSection -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--compact">
          <div class="feature-pills">
            <span class="fp">🚀 Rapido</span>
            <span class="fp">🎨 Customizable</span>
            <span class="fp">🧩 Componible</span>
            <span class="fp">🔒 Seguro</span>
            <span class="fp">⚡ Tipado</span>
            <span class="fp">📱 Responsive</span>
          </div>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>FeaturesSection</h3>
            <p>Grid de features &middot; Array de items &middot; Iconos</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import FeaturesSection from '$lib/components/ui/FeaturesSection.svelte';", 'feat')}>
            {#if copiedId === 'feat'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

      <!-- Spinner -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo">
          <Spinner size={28} />
          <Spinner size={40} />
          <Spinner size={16} />
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Spinner</h3>
            <p>SVG animado &middot; Custom size</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import Spinner from '$lib/components/ui/Spinner.svelte';", 'spin')}>
            {#if copiedId === 'spin'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

      <!-- Skeleton -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--col">
          <Skeleton width="80%" height="1rem" />
          <Skeleton width="100%" height="0.8rem" />
          <Skeleton width="60%" height="0.8rem" />
          <Skeleton width="40%" height="2rem" borderRadius="10px" />
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Skeleton</h3>
            <p>Shimmer effect &middot; Width/Height/Radius</p>
          </div>
          <button class="comp-code-btn" onclick={() => onCopy("import Skeleton from '$lib/components/ui/Skeleton.svelte';", 'skel')}>
            {#if copiedId === 'skel'}<span class="code-ok">Copiado</span>{:else}<span class="code-label">import</span>{/if}
          </button>
        </div>
      </div>

    </div>
  </Container>
</div>

<!-- Componentes avanzados -->
<div class="comp-section comp-section--dark">
  <Container>
    <div class="comp-header" use:reveal={{ stage: 'content' }}>
      <p class="comp-eyebrow comp-eyebrow--light">Avanzados</p>
      <Heading level={2} align="center">Componentes extra</Heading>
      <Text variant="muted" align="center">Cookies, chat, analytics, newsletter... todo listo para conectar.</Text>
    </div>

    <div class="comp-grid comp-grid--3">

      <!-- Modal -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--centered">
          <Button variant="primary" size="sm" onclick={() => (modalOpen = true)}>Abrir modal</Button>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Modal</h3>
            <p>ESC, click fuera, boton para cerrar</p>
          </div>
        </div>
      </div>

      <!-- LoadingBlock -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo">
          <LoadingBlock loading={true} message="Cargando datos..." />
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>LoadingBlock</h3>
            <p>Spinner + mensaje personalizable</p>
          </div>
        </div>
      </div>

      <!-- CopyButton -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--centered">
          <CopyButton text="npm install my-sveltekit-starter" />
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>CopyButton</h3>
            <p>Copia al portapapeles con feedback</p>
          </div>
        </div>
      </div>

      <!-- Toast -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--col comp-demo--centered">
          <Button variant="primary" size="sm" onclick={() => toast('Operacion completada!', 'success')}>Toast success</Button>
          <Button variant="secondary" size="sm" onclick={() => toast('Algo salio mal', 'error')}>Toast error</Button>
          <Button variant="outline" size="sm" onclick={() => toast('Aviso importante', 'warning')}>Toast warning</Button>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Toast</h3>
            <p>success &middot; error &middot; info &middot; warning</p>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo">
          <Newsletter buttonLabel="Suscribirse" />
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Newsletter</h3>
            <p>Email form listo para API</p>
          </div>
        </div>
      </div>

      <!-- ThemeToggle -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--centered">
          <ThemeToggle />
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>ThemeToggle</h3>
            <p>Dark/light &middot; localStorage</p>
          </div>
        </div>
      </div>

      <!-- AiPrompt -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo">
          <AiPrompt placeholder="Pregunta a la IA..." maxLength={200} />
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>AiPrompt</h3>
            <p>Textarea + API de IA</p>
          </div>
        </div>
      </div>

      <!-- Auto -->
      <div class="comp-card" use:reveal={{ stage: 'content', delay: 60 }}>
        <div class="comp-demo comp-demo--col comp-demo--centered comp-demo--auto">
          <div class="auto-row"><span class="auto-dot"></span> CookieConsent</div>
          <div class="auto-row"><span class="auto-dot"></span> JsonLd</div>
          <div class="auto-row"><span class="auto-dot"></span> Analytics</div>
          <div class="auto-row"><span class="auto-dot"></span> LiveChat</div>
        </div>
        <div class="comp-meta">
          <div class="comp-meta-text">
            <h3>Incluidos</h3>
            <p>4 componentes incluidos en el layout</p>
          </div>
        </div>
      </div>

    </div>
  </Container>
</div>

<!-- CTA -->
<div class="comp-cta">
  <Container>
    <div class="comp-cta-inner" use:reveal={{ stage: 'content' }}>
      <Heading level={2} align="center">Empezar a construir</Heading>
      <Text variant="muted" align="center">Copia cualquier import, pega el componente y listo.</Text>
      <div class="comp-cta-btns">
        <Button variant="primary" size="lg" as="a" href="/">Volver al inicio</Button>
        <Button variant="outline" size="lg" as="a" href="https://novakit.moisesvalero.es/">Ver demo real</Button>
      </div>
    </div>
  </Container>
</div>

<Modal title="Modal de ejemplo" open={modalOpen} onclose={() => (modalOpen = false)}>
  <p style="margin:0 0 1rem;color:var(--text-secondary);">Se cierra con click fuera, ESC o boton ✕.</p>
  <Button variant="primary" onclick={() => (modalOpen = false)}>Cerrar</Button>
</Modal>

<style>
  /* ---- HERO ---- */
  .hero {
    position: relative; overflow: hidden;
    padding-block: clamp(80px, 14vh, 140px);
    background: var(--bg-main);
  }
  .hero-orbs { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .h-orb { position: absolute; border-radius: 50%; filter: blur(120px); }
  .h-orb--1 { width: 500px; height: 500px; background: rgba(37,99,235,0.12); top: -200px; right: -80px; }
  .h-orb--2 { width: 350px; height: 350px; background: rgba(14,165,233,0.08); bottom: -120px; left: -40px; }
  .h-orb--3 { width: 250px; height: 250px; background: rgba(139,92,246,0.06); top: 40%; left: 30%; }
  .h-grid {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: radial-gradient(ellipse at 50% 20%, black 10%, transparent 60%);
  }
  .hero-body {
    position: relative; z-index: 1;
    max-width: 600px; margin: 0 auto; text-align: center;
    display: flex; flex-direction: column; align-items: center; gap: 1rem;
  }
  .hero-badge {
    font-size: 0.65rem; font-weight: 800; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--accent);
    background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.12);
    padding: 0.3rem 1rem; border-radius: 999px;
  }
  .hero-sub { font-size: 1.05rem; max-width: 500px; }
  .hero-stats {
    display: flex; align-items: center; gap: 1.5rem; margin-top: 0.5rem;
  }
  .stat { display: flex; flex-direction: column; align-items: center; gap: 0.1rem; }
  .stat strong { font-size: 1.4rem; font-weight: 800; color: var(--text-main); }
  .stat span { font-size: 0.75rem; color: var(--text-secondary); }
  .stat-sep { width: 1px; height: 28px; background: rgba(0,0,0,0.1); }

  /* ---- COMPOSITION ---- */
  .comp-section { padding-block: 4rem; }
  .comp-section--dark { background: var(--bg-soft); }
  .comp-header {
    display: flex; flex-direction: column; align-items: center;
    gap: 0.4rem; text-align: center; margin-bottom: 2rem;
  }
  .comp-eyebrow {
    font-size: 0.65rem; font-weight: 800; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--accent);
    background: rgba(37,99,235,0.08); border: 1px solid rgba(37,99,235,0.12);
    padding: 0.25rem 0.9rem; border-radius: 999px;
  }
  .comp-eyebrow--light { color: #fff; background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.1); }

  .comp-grid { display: grid; gap: 1rem; }
  .comp-grid--2 { grid-template-columns: repeat(2, 1fr); }
  .comp-grid--3 { grid-template-columns: repeat(3, 1fr); }

  /* ---- CARD ---- */
  .comp-card {
    background: #fff; border-radius: 14px;
    border: 1px solid rgba(0,0,0,0.06);
    overflow: hidden;
    display: flex; flex-direction: column;
    transition: box-shadow 0.25s ease, transform 0.25s ease;
  }
  .comp-card:hover {
    box-shadow: 0 12px 40px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }
  .comp-demo {
    display: flex; align-items: center; justify-content: center;
    gap: 0.6rem; padding: 2rem 1.5rem; min-height: 130px;
    background: linear-gradient(135deg, rgba(37,99,235,0.02) 0%, rgba(14,165,233,0.02) 100%);
    border-bottom: 1px solid rgba(0,0,0,0.04);
  }
  .comp-demo--col { flex-direction: column; }
  .comp-demo--centered { justify-content: center; }
  .comp-demo--left { justify-content: flex-start; padding-left: 2rem; }
  .comp-demo--compact { padding: 1.5rem; }
  .comp-demo--auto { gap: 0.4rem; }

  .comp-meta {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0.9rem 1.2rem;
  }
  .comp-meta h3 { margin: 0; font-size: 0.95rem; font-weight: 700; }
  .comp-meta p { margin: 0; font-size: 0.75rem; color: var(--text-secondary); }

  .comp-code-btn {
    background: none; border: 1px solid rgba(0,0,0,0.08);
    border-radius: 6px; padding: 0.25rem 0.6rem;
    cursor: pointer; font-size: 0.7rem; font-weight: 600;
    color: var(--text-secondary); transition: all 0.2s; flex-shrink: 0;
  }
  .comp-code-btn:hover { border-color: var(--accent); color: var(--accent); }
  .code-ok { color: #22c55e; }

  /* ---- DEMOS ---- */
  .comp-buttons { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: center; }
  .comp-sizes { display: flex; gap: 0.4rem; align-items: center; }
  .comp-card-row { display: flex; gap: 0.5rem; width: 100%; }
  .comp-card-row > div { flex: 1; padding: 1rem; border-radius: 10px; text-align: center; border: 1px solid rgba(0,0,0,0.06); }
  .comp-card-row > div.default { background: #fff; }
  .comp-card-row > div.soft { background: rgba(37,99,235,0.04); }
  .comp-card-row > div.outline { background: transparent; border-style: dashed; }
  .comp-card-row span { font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); }

  .section-pills { display: flex; gap: 0.4rem; flex-wrap: wrap; }
  .pill {
    padding: 0.35rem 0.8rem; border-radius: 6px;
    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.03em;
    border: 1px solid rgba(0,0,0,0.08);
  }
  .pill--default { background: #fff; }
  .pill--muted { background: var(--bg-soft); }
  .pill--soft { background: rgba(37,99,235,0.04); border-color: rgba(37,99,235,0.1); }
  .pill--surface { background: #f8fafc; }

  .comp-grid-demo {
    display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; width: 100%;
  }
  .cg-cell {
    background: rgba(37,99,235,0.04); border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    padding: 0.8rem; border: 1px dashed rgba(37,99,235,0.15);
  }
  .cg-cell span { font-size: 0.75rem; font-weight: 600; color: var(--accent); }

  .mini-hero { text-align: center; }
  .mini-eyebrow { font-size: 0.55rem; text-transform: uppercase; letter-spacing: 0.25em; color: var(--accent); margin-bottom: 0.15rem; font-weight: 800; }
  .mini-title { font-size: 1.3rem; font-weight: 800; letter-spacing: -0.03em; margin: 0 0 0.15rem; }
  .mini-sub { font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 0.7rem; }
  .mini-btns { display: flex; gap: 0.4rem; justify-content: center; }

  .feature-pills { display: flex; gap: 0.35rem; flex-wrap: wrap; justify-content: center; }
  .fp {
    background: rgba(37,99,235,0.05); padding: 0.3rem 0.7rem;
    border-radius: 6px; font-size: 0.75rem; font-weight: 500;
    border: 1px solid rgba(37,99,235,0.08);
  }

  .auto-row {
    display: flex; align-items: center; gap: 0.4rem;
    font-size: 0.8rem; font-weight: 600; color: var(--text-secondary);
  }
  .auto-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }

  /* ---- CTA ---- */
  .comp-cta { padding-block: 3rem; }
  .comp-cta-inner {
    display: flex; flex-direction: column; align-items: center;
    gap: 1rem; max-width: 500px; margin: 0 auto; text-align: center;
  }
  .comp-cta-btns { display: flex; gap: 0.7rem; }

  /* ---- RESPONSIVE ---- */
  @media (max-width: 900px) {
    .comp-grid--2 { grid-template-columns: 1fr; }
    .comp-grid--3 { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .comp-grid--2, .comp-grid--3 { grid-template-columns: 1fr; }
    .hero-stats { flex-direction: column; gap: 0.3rem; }
    .stat-sep { width: 30px; height: 1px; }
    .comp-cta-btns { flex-direction: column; width: 100%; }
    .comp-cta-btns > :global(*) { width: 100%; text-align: center; }
  }
</style>
