<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import HeroSection from '$lib/components/ui/HeroSection.svelte';
  import FeaturesSection from '$lib/components/ui/FeaturesSection.svelte';
  import Spinner from '$lib/components/ui/Spinner.svelte';
  import Modal from '$lib/components/ui/Modal.svelte';
  import Skeleton from '$lib/components/ui/Skeleton.svelte';
  import LoadingBlock from '$lib/components/LoadingBlock.svelte';
  import CopyButton from '$lib/components/CopyButton.svelte';
  import Newsletter from '$lib/components/Newsletter.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import AiPrompt from '$lib/components/AiPrompt.svelte';
  import { toast } from '$lib/stores/toast';

  setSeo({ title: 'Componentes UI | My SvelteKit Starter', description: 'Galeria de 23 componentes listos para usar.' });

  let modalOpen = $state(false);

  const uiBase = [
    {
      name: 'Button',
      import: `import Button from '$lib/components/ui/Button.svelte';`,
      desc: '5 variantes, 3 tamanos, soporte para enlaces.',
      demo: 'primary/secondary/ghost/outline/link'
    },
    {
      name: 'Card',
      import: `import Card from '$lib/components/ui/Card.svelte';`,
      desc: 'Tarjetas con variantes default, soft y outline.',
      demo: 'cards'
    },
    {
      name: 'Container',
      import: `import Container from '$lib/components/ui/Container.svelte';`,
      desc: 'Wrapper centrado con max-width responsive.',
      demo: 'inline'
    },
    {
      name: 'Section',
      import: `import Section from '$lib/components/ui/Section.svelte';`,
      desc: 'Fondos: default, muted, soft, surface.',
      demo: 'inline'
    },
    {
      name: 'Heading',
      import: `import Heading from '$lib/components/ui/Heading.svelte';`,
      desc: 'Titulos H1-H4 con eyebrow y kicker opcionales.',
      demo: 'heading'
    },
    {
      name: 'Text',
      import: `import Text from '$lib/components/ui/Text.svelte';`,
      desc: 'Parrafos con variantes body, muted, small y label.',
      demo: 'text'
    },
    {
      name: 'Grid',
      import: `import Grid from '$lib/components/ui/Grid.svelte';`,
      desc: 'Cuadricula responsive con prop columns.',
      demo: 'grid'
    },
    {
      name: 'HeroSection',
      import: `import HeroSection from '$lib/components/ui/HeroSection.svelte';`,
      desc: 'Hero completo con titulo, subtitulo y CTAs.',
      demo: 'hero'
    },
    {
      name: 'FeaturesSection',
      import: `import FeaturesSection from '$lib/components/ui/FeaturesSection.svelte';`,
      desc: 'Grid de features con array de items.',
      demo: 'features'
    }
  ];

  const avanzados = [
    { name: 'Spinner', import: `import Spinner from '$lib/components/ui/Spinner.svelte';`, desc: 'Indicador de carga animado.' },
    { name: 'Skeleton', import: `import Skeleton from '$lib/components/ui/Skeleton.svelte';`, desc: 'Placeholder con shimmer mientras carga.' },
    { name: 'Modal', import: `import Modal from '$lib/components/ui/Modal.svelte';`, desc: 'Ventana emergente. ESC, click fuera, boton.' },
    { name: 'LoadingBlock', import: `import LoadingBlock from '$lib/components/LoadingBlock.svelte';`, desc: 'Pantalla de carga con mensaje.' },
    { name: 'CopyButton', import: `import CopyButton from '$lib/components/CopyButton.svelte';`, desc: 'Copia texto al portapapeles.' },
    { name: 'Toast', import: `import { toast } from '$lib/stores/toast';`, desc: 'Notificaciones success/error/info/warning.' },
    { name: 'Newsletter', import: `import Newsletter from '$lib/components/Newsletter.svelte';`, desc: 'Formulario de suscripcion.' },
    { name: 'ThemeToggle', import: `import ThemeToggle from '$lib/components/ThemeToggle.svelte';`, desc: 'Toggle dark/light mode.' },
    { name: 'AiPrompt', import: `import AiPrompt from '$lib/components/AiPrompt.svelte';`, desc: 'Textarea listo para API de IA.' },
    { name: 'CookieConsent', import: `import CookieConsent from '$lib/components/CookieConsent.svelte';`, desc: 'Banner GDPR automatico.' },
    { name: 'Analytics', import: `import Analytics from '$lib/components/Analytics.svelte';`, desc: 'Placeholder Google Analytics / Plausible.' },
    { name: 'LiveChat', import: `import LiveChat from '$lib/components/LiveChat.svelte';`, desc: 'Widget Crisp / Intercom / Tawk.' },
    { name: 'JsonLd', import: `import JsonLd from '$lib/components/JsonLd.svelte';`, desc: 'Schema.org JSON-LD automatico.' }
  ];

  let copied = $state('');
  function onCopy(code: string) {
    navigator.clipboard.writeText(code);
    copied = code;
    toast('Import copiado!', 'success');
    setTimeout(() => (copied = ''), 2000);
  }
</script>

<svelte:head>
  <title>Componentes UI | My SvelteKit Starter</title>
</svelte:head>

<div class="gallery-hero">
  <div class="gallery-hero-bg">
    <div class="ghero-orb ghero-orb--1"></div>
    <div class="ghero-orb ghero-orb--2"></div>
    <div class="ghero-grid"></div>
  </div>
  <Container>
    <div class="gallery-hero-content">
      <Heading level={1} eyebrow="23 COMPONENTES" align="center">Todo lo que necesitas para construir tu UI</Heading>
      <Text variant="muted" align="center">
        Componentes modernos, accesibles y listos para copiar y pegar en tu proyecto.
        Sin dependencias externas. Solo Svelte 5 y CSS.
      </Text>
      <div class="gh-stats">
        <div class="gh-stat"><strong>9</strong> UI Base</div>
        <div class="gh-div"></div>
        <div class="gh-stat"><strong>13</strong> Avanzados</div>
        <div class="gh-div"></div>
        <div class="gh-stat"><strong>0</strong> Dependencias extra</div>
      </div>
    </div>
  </Container>
</div>

<Section variant="default">
  <Container>
    <Heading level={2} eyebrow="UI Base" align="center">Componentes fundamentales</Heading>
    <Text variant="muted" align="center">La base de cualquier interfaz. Ligeros, tipados y listos para usar.</Text>
    <div class="comp-grid">
      {#each uiBase as comp}
        <Card variant="soft" className="comp-card">
          <div class="comp-card-header">
            <Heading level={3}>{comp.name}</Heading>
            <button class="comp-copy-btn" onclick={() => onCopy(comp.import)} title="Copiar import">
              {copied === comp.import ? '✓' : '⎘'}
            </button>
          </div>
          <Text variant="small">{comp.desc}</Text>
          <code class="comp-import">{comp.import}</code>
          <div class="comp-demo">
            {#if comp.name === 'Button'}
              <div class="btn-row">
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="outline" size="sm">Outline</Button>
              </div>
            {:else if comp.name === 'Card'}
              <Card variant="soft"><Text variant="small">Card demo</Text></Card>
            {:else if comp.name === 'Container'}
              <Text variant="small" align="center">Wrapper centrado — esta pagina ya lo usa</Text>
            {:else if comp.name === 'Section'}
              <div class="section-swatch default">default</div>
              <div class="section-swatch muted">muted</div>
              <div class="section-swatch soft">soft</div>
            {:else if comp.name === 'Heading'}
              <Heading level={3} eyebrow="Eyebrow">Heading H3</Heading>
            {:else if comp.name === 'Text'}
              <Text variant="body">Body</Text>
              <Text variant="muted">Muted</Text>
              <Text variant="label">Label</Text>
            {:else if comp.name === 'Grid'}
              <Grid columns={2} gap="0.5rem">
                <Card variant="soft"><Text variant="small" align="center">A</Text></Card>
                <Card variant="soft"><Text variant="small" align="center">B</Text></Card>
              </Grid>
            {:else if comp.name === 'HeroSection'}
              <HeroSection eyebrow="Hero" title="Listo en 1 linea" primaryLabel="CTA" primaryHref="#" />
            {:else if comp.name === 'FeaturesSection'}
              <FeaturesSection items={[{ icon:'✨', title:'Feature', description:'Descripcion breve.' }]} />
            {/if}
          </div>
        </Card>
      {/each}
    </div>
  </Container>
</Section>

<Section variant="muted">
  <Container>
    <Heading level={2} eyebrow="Avanzados" align="center">Componentes extra</Heading>
    <Text variant="muted" align="center">Cookies, toasts, analytics, chat... todo conectado y funcionando.</Text>
    <div class="comp-grid">
      {#each avanzados as comp}
        <Card variant="soft" className="comp-card">
          <div class="comp-card-header">
            <Heading level={3}>{comp.name}</Heading>
            <button class="comp-copy-btn" onclick={() => onCopy(comp.import)} title="Copiar import">
              {copied === comp.import ? '✓' : '⎘'}
            </button>
          </div>
          <Text variant="small">{comp.desc}</Text>
          <code class="comp-import">{comp.import}</code>
          <div class="comp-demo">
            {#if comp.name === 'Spinner'}
              <Spinner size={28} />
            {:else if comp.name === 'Skeleton'}
              <Skeleton width="100%" height="1rem" />
              <Skeleton width="70%" height="1rem" />
            {:else if comp.name === 'Modal'}
              <Button variant="primary" size="sm" onclick={() => (modalOpen = true)}>Abrir modal</Button>
            {:else if comp.name === 'LoadingBlock'}
              <LoadingBlock loading={true} message="Cargando..." />
            {:else if comp.name === 'CopyButton'}
              <CopyButton text="npm install" />
            {:else if comp.name === 'Toast'}
              <Button variant="primary" size="sm" onclick={() => toast('Hola!', 'success')}>Mostrar toast</Button>
            {:else if comp.name === 'Newsletter'}
              <Newsletter buttonLabel="Suscribirse" />
            {:else if comp.name === 'ThemeToggle'}
              <ThemeToggle />
            {:else if comp.name === 'AiPrompt'}
              <AiPrompt placeholder="Pregunta a la IA..." maxLength={300} />
            {:else if comp.name === 'CookieConsent'}
              <Text variant="small">Automatico. Recarga para ver el banner GDPR.</Text>
            {:else if comp.name === 'Analytics'}
              <Text variant="small">&lt;Analytics id="..." src="..." /&gt; en el layout.</Text>
            {:else if comp.name === 'LiveChat'}
              <Text variant="small">&lt;LiveChat provider="crisp" /&gt; en el layout.</Text>
            {:else if comp.name === 'JsonLd'}
              <Text variant="small">Schema.org automatico en el layout global.</Text>
            {/if}
          </div>
        </Card>
      {/each}
    </div>
  </Container>
</Section>

<Section variant="default">
  <Container>
    <div class="gallery-cta">
      <Heading level={2} align="center">Empieza a construir</Heading>
      <Text variant="muted" align="center">Copia cualquier componente, pegalo en tu pagina y personaliza.</Text>
      <div class="gh-stats">
        <Button variant="primary" size="lg" as="a" href="/">Volver al inicio</Button>
        <Button variant="outline" size="lg" as="a" href="https://novakit.moisesvalero.es/">Landing de ejemplo</Button>
      </div>
    </div>
  </Container>
</Section>

<Modal title="Modal de ejemplo" open={modalOpen} onclose={() => (modalOpen = false)}>
  <Text>Se cierra con click fuera, ESC o el boton ✕</Text>
  <br />
  <Button variant="primary" onclick={() => (modalOpen = false)}>Cerrar</Button>
</Modal>

<style>
  .gallery-hero {
    position: relative;
    padding-block: clamp(120px, 16vh, 160px);
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 60%), var(--bg-main);
  }
  .gallery-hero-bg {
    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
  }
  .ghero-orb {
    position: absolute; border-radius: 50%; filter: blur(80px);
  }
  .ghero-orb--1 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(37,99,235,0.2), transparent);
    top: -100px; right: -60px;
  }
  .ghero-orb--2 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(14,165,233,0.15), transparent);
    bottom: -80px; left: -40px;
  }
  .ghero-grid {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at 50% 20%, black 15%, transparent 60%);
  }
  .gallery-hero-content {
    position: relative; z-index: 1;
    display: flex; flex-direction: column; align-items: center; gap: 1.2rem;
    max-width: 680px; margin: 0 auto; text-align: center;
  }
  .gh-stats {
    display: flex; align-items: center; gap: 1.5rem; margin-top: 0.5rem;
  }
  .gh-stat { font-size: 0.9rem; color: var(--text-secondary); }
  .gh-stat strong { color: var(--accent); font-size: 1.3rem; }
  .gh-div { width: 1px; height: 24px; background: rgba(0,0,0,0.1); }

  .comp-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
    margin-top: 2rem;
  }

  .comp-card {
    display: flex; flex-direction: column; gap: 0.5rem;
  }
  .comp-card-header {
    display: flex; align-items: flex-start; justify-content: space-between;
  }
  .comp-copy-btn {
    background: none; border: 1px solid rgba(0,0,0,0.08); border-radius: 6px;
    cursor: pointer; padding: 2px 8px; font-size: 0.85rem;
    color: var(--text-secondary); transition: all 0.2s;
  }
  .comp-copy-btn:hover { border-color: var(--accent); color: var(--accent); }
  .comp-import {
    display: block; font-size: 0.7rem; color: var(--text-secondary);
    background: rgba(0,0,0,0.03); padding: 0.4rem 0.6rem;
    border-radius: 6px; overflow-x: auto; white-space: nowrap;
    font-family: 'SF Mono', 'Fira Code', monospace;
  }
  .comp-demo {
    margin-top: 0.5rem; padding: 0.8rem;
    background: rgba(37,99,235,0.03); border-radius: 10px;
    display: flex; flex-direction: column; gap: 0.4rem;
    min-height: 40px;
  }

  .btn-row { display: flex; gap: 0.3rem; flex-wrap: wrap; }
  .section-swatch {
    padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.7rem;
    font-weight: 600; text-align: center;
  }
  .section-swatch.default { background: #fff; border: 1px solid rgba(0,0,0,0.1); }
  .section-swatch.muted { background: var(--bg-soft); }
  .section-swatch.soft { background: rgba(37,99,235,0.04); }

  .gallery-cta {
    display: flex; flex-direction: column; align-items: center;
    gap: 1rem; padding: 3rem 0 4rem;
  }

  @media (max-width: 900px) {
    .comp-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 640px) {
    .comp-grid { grid-template-columns: minmax(0, 1fr); }
    .gh-stats { flex-direction: column; gap: 0.5rem; }
    .gh-div { width: 24px; height: 1px; }
  }
</style>
