<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Spinner from '$lib/components/ui/Spinner.svelte';
  import Modal from '$lib/components/ui/Modal.svelte';
  import Skeleton from '$lib/components/ui/Skeleton.svelte';
  import LoadingBlock from '$lib/components/LoadingBlock.svelte';
  import CopyButton from '$lib/components/CopyButton.svelte';
  import Newsletter from '$lib/components/Newsletter.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import AiPrompt from '$lib/components/AiPrompt.svelte';
  import { toast } from '$lib/stores/toast';

  setSeo({ title: 'Componentes | My SvelteKit Starter', description: '23 componentes Svelte 5 listos para usar.' });

  let modalOpen = $state(false);
  let copied = $state('');

  function onCopy(text: string) {
    navigator.clipboard.writeText(text);
    copied = text;
    toast('Import copiado!', 'success');
    setTimeout(() => (copied = ''), 2000);
  }
</script>

<svelte:head>
  <title>Componentes | My SvelteKit Starter</title>
</svelte:head>

<div class="gallery-hero">
  <div class="gallery-hero-bg">
    <div class="gh-orb gh-orb--1"></div>
    <div class="gh-orb gh-orb--2"></div>
  </div>
  <Container>
    <div class="gallery-hero-content">
      <Heading level={1} eyebrow="UI KIT" align="center">Componentes listos para usar</Heading>
      <Text variant="muted" align="center">
        23 componentes Svelte 5. Sin dependencias. Sin Tailwind. Solo CSS y TypeScript.
      </Text>
    </div>
  </Container>
</div>

<Container>
  <Section variant="default">
    <Heading level={2} eyebrow="Base" align="center">Componentes fundamentales</Heading>
    <div class="grid-2">
      <Card variant="soft" className="feature-card">
        <div class="fc-demo fc-heading-demo">
          <Heading level={1} eyebrow="Eyebrow">Heading</Heading>
          <Heading level={2} kicker="Kicker debajo">H1 a H4</Heading>
          <Heading level={3}>Con eyebrow</Heading>
          <Text variant="muted">y kicker opcional</Text>
        </div>
        <div class="fc-info">
          <Heading level={4}>Heading + Text</Heading>
          <Text variant="small">Titulos jerarquicos y parrafos con variantes body, muted, small y label.</Text>
          <button class="copy-import" onclick={() => onCopy("import Heading from '$lib/components/ui/Heading.svelte';")}>{copied.includes('Heading') ? '✓ Copiado' : 'Copiar import'}</button>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo fc-btn-demo">
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
          <Button variant="link" size="sm">Link</Button>
        </div>
        <div class="fc-info">
          <Heading level={4}>Button</Heading>
          <Text variant="small">5 variantes, 3 tamanos, soporte para enlaces, estados disabled y loading.</Text>
          <button class="copy-import" onclick={() => onCopy("import Button from '$lib/components/ui/Button.svelte';")}>{copied.includes('Button') ? '✓ Copiado' : 'Copiar import'}</button>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo fc-card-demo">
          <div class="mini-cards">
            <Card variant="default"><Text variant="small" align="center">Default</Text></Card>
            <Card variant="soft"><Text variant="small" align="center">Soft</Text></Card>
            <Card variant="outline"><Text variant="small" align="center">Outline</Text></Card>
          </div>
        </div>
        <div class="fc-info">
          <Heading level={4}>Card + Grid</Heading>
          <Text variant="small">Tarjetas con 3 variantes. Grid responsive que se adapta a cualquier pantalla.</Text>
          <button class="copy-import" onclick={() => onCopy("import Card from '$lib/components/ui/Card.svelte';\nimport Grid from '$lib/components/ui/Grid.svelte';")}>{copied.includes('Card') ? '✓ Copiado' : 'Copiar import'}</button>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo fc-hero-demo">
          <div class="mini-hero">
            <p class="mini-eyebrow">HERO SECTION</p>
            <p class="mini-title">Listo en una linea</p>
            <p class="mini-sub">Con titulo, subtitulo y CTAs</p>
            <div class="mini-btns">
              <Button variant="primary" size="sm">CTA</Button>
              <Button variant="outline" size="sm">Secundario</Button>
            </div>
          </div>
        </div>
        <div class="fc-info">
          <Heading level={4}>HeroSection</Heading>
          <Text variant="small">Hero completo con gradientes animados, titulo, subtitulo y 2 CTAs.</Text>
          <button class="copy-import" onclick={() => onCopy("import HeroSection from '$lib/components/ui/HeroSection.svelte';")}>{copied.includes('HeroSection') ? '✓ Copiado' : 'Copiar import'}</button>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo fc-features-demo">
          <div class="mini-features">
            <span>🚀 Rapido</span>
            <span>🎨 Personalizable</span>
            <span>🧩 Componible</span>
            <span>🔒 Seguro</span>
          </div>
        </div>
        <div class="fc-info">
          <Heading level={4}>FeaturesSection</Heading>
          <Text variant="small">Grid de caracteristicas con iconos. Pasa un array de items y listo.</Text>
          <button class="copy-import" onclick={() => onCopy("import FeaturesSection from '$lib/components/ui/FeaturesSection.svelte';")}>{copied.includes('FeaturesSection') ? '✓ Copiado' : 'Copiar import'}</button>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo">
          <div class="section-swatches">
            <div class="sw default">default</div>
            <div class="sw muted">muted</div>
            <div class="sw soft">soft</div>
            <div class="sw surface">surface</div>
          </div>
        </div>
        <div class="fc-info">
          <Heading level={4}>Container + Section</Heading>
          <Text variant="small">Container centra el contenido. Section define 4 variantes de fondo.</Text>
          <button class="copy-import" onclick={() => onCopy("import Container from '$lib/components/ui/Container.svelte';\nimport Section from '$lib/components/ui/Section.svelte';")}>{copied.includes('Container') ? '✓ Copiado' : 'Copiar import'}</button>
        </div>
      </Card>
    </div>
  </Section>

  <Section variant="muted">
    <Heading level={2} eyebrow="Avanzados" align="center">Componentes extra</Heading>
    <div class="grid-3">
      <Card variant="soft" className="feature-card">
        <div class="fc-demo"><Spinner size={32} /></div>
        <div class="fc-info">
          <Heading level={4}>Spinner</Heading>
          <Text variant="small">Indicador de carga animado con SVG.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo"><Skeleton width="100%" height="0.8rem" /><Skeleton width="70%" height="0.8rem" /></div>
        <div class="fc-info">
          <Heading level={4}>Skeleton</Heading>
          <Text variant="small">Placeholders con shimmer. Width, height y borderRadius configurables.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo">
          <Button variant="primary" size="sm" onclick={() => (modalOpen = true)}>Abrir modal</Button>
        </div>
        <div class="fc-info">
          <Heading level={4}>Modal</Heading>
          <Text variant="small">Ventana emergente. Click fuera, ESC o boton para cerrar.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo"><LoadingBlock loading={true} message="Cargando datos..." /></div>
        <div class="fc-info">
          <Heading level={4}>LoadingBlock</Heading>
          <Text variant="small">Pantalla de carga con spinner y mensaje personalizable.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo"><CopyButton text="npm create svelte@latest" /></div>
        <div class="fc-info">
          <Heading level={4}>CopyButton</Heading>
          <Text variant="small">Copia al portapapeles con feedback visual.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo">
          <Button variant="primary" size="sm" onclick={() => toast('Funciona!', 'success')}>Probar toast</Button>
        </div>
        <div class="fc-info">
          <Heading level={4}>Toast</Heading>
          <Text variant="small">Notificaciones success, error, info y warning.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo"><Newsletter buttonLabel="Suscribirse" /></div>
        <div class="fc-info">
          <Heading level={4}>Newsletter</Heading>
          <Text variant="small">Formulario de email listo para conectar.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo"><ThemeToggle /></div>
        <div class="fc-info">
          <Heading level={4}>ThemeToggle</Heading>
          <Text variant="small">Dark/light mode. Guarda en localStorage.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo"><AiPrompt placeholder="Pregunta a la IA..." maxLength={200} /></div>
        <div class="fc-info">
          <Heading level={4}>AiPrompt</Heading>
          <Text variant="small">Textarea listo para conectar a una API de IA.</Text>
        </div>
      </Card>

      <Card variant="soft" className="feature-card">
        <div class="fc-demo">
          <div class="auto-badge">✅ CookieConsent</div>
          <div class="auto-badge">✅ JsonLd</div>
          <div class="auto-badge">✅ Analytics</div>
        </div>
        <div class="fc-info">
          <Heading level={4}>Automaticos</Heading>
          <Text variant="small">CookieConsent, JsonLd (Schema.org), Analytics y LiveChat. Ya incluidos en el layout.</Text>
        </div>
      </Card>
    </div>
  </Section>

  <Section variant="default">
    <div class="gallery-bottom">
      <Heading level={2} align="center">Todo listo para tu proyecto</Heading>
      <Text variant="muted" align="center">Copia los imports, pega los componentes y personaliza. Sin configuracion extra.</Text>
      <div class="gallery-bottom-btns">
        <Button variant="primary" size="lg" as="a" href="/">Volver al inicio</Button>
        <Button variant="outline" size="lg" as="a" href="https://novakit.moisesvalero.es/">Ver demo real</Button>
      </div>
    </div>
  </Section>
</Container>

<Modal title="Modal de ejemplo" open={modalOpen} onclose={() => (modalOpen = false)}>
  <Text>Se cierra con click fuera, ESC o ✕</Text>
  <br />
  <Button variant="primary" onclick={() => (modalOpen = false)}>Cerrar</Button>
</Modal>

<style>
  .gallery-hero {
    position: relative;
    padding-block: clamp(100px, 14vh, 140px);
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 60%), var(--bg-main);
  }
  .gallery-hero-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
  .gh-orb {
    position: absolute; border-radius: 50%; filter: blur(100px);
  }
  .gh-orb--1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(37,99,235,0.15), transparent);
    top: -200px; right: -100px;
  }
  .gh-orb--2 {
    width: 350px; height: 350px;
    background: radial-gradient(circle, rgba(14,165,233,0.1), transparent);
    bottom: -100px; left: -50px;
  }
  .gallery-hero-content {
    position: relative; z-index: 1;
    max-width: 640px; margin: 0 auto;
    display: flex; flex-direction: column; align-items: center; gap: 0.8rem;
    text-align: center;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
    margin-top: 2rem;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.2rem;
    margin-top: 2rem;
  }

  .feature-card {
    display: flex; flex-direction: column;
    padding: 0 !important;
    overflow: hidden;
  }

  .fc-demo {
    padding: 2rem 1.5rem;
    display: flex; align-items: center; justify-content: center;
    gap: 0.8rem; flex-wrap: wrap;
    min-height: 120px;
    background: radial-gradient(ellipse at center, rgba(37,99,235,0.03) 0%, transparent 70%);
  }
  .fc-heading-demo { flex-direction: column; align-items: flex-start; }
  .fc-btn-demo { gap: 0.4rem; }
  .fc-hero-demo { min-height: 180px; }
  .fc-features-demo { gap: 0.5rem; }

  .fc-info {
    padding: 1.2rem 1.5rem;
    display: flex; flex-direction: column; gap: 0.35rem;
    border-top: 1px solid rgba(0,0,0,0.05);
  }
  .fc-info h4 { margin: 0; }

  .copy-import {
    background: none; border: 1px solid rgba(0,0,0,0.08);
    border-radius: 6px; padding: 0.3rem 0.7rem;
    font-size: 0.75rem; cursor: pointer;
    color: var(--text-secondary);
    transition: all 0.2s;
    align-self: flex-start; margin-top: 0.3rem;
  }
  .copy-import:hover { border-color: var(--accent); color: var(--accent); }

  .mini-cards { display: flex; gap: 0.4rem; width: 100%; }
  .mini-cards > * { flex: 1; padding: 0.8rem !important; }

  .mini-hero { text-align: center; }
  .mini-eyebrow { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.2em; color: var(--text-secondary); margin-bottom: 0.3rem; font-weight: 700; }
  .mini-title { font-size: 1.3rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 0.2rem; }
  .mini-sub { font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.8rem; }
  .mini-btns { display: flex; gap: 0.4rem; justify-content: center; }

  .mini-features { display: flex; gap: 0.4rem; flex-wrap: wrap; justify-content: center; }
  .mini-features span {
    background: rgba(37,99,235,0.06); padding: 0.3rem 0.7rem;
    border-radius: 6px; font-size: 0.75rem; font-weight: 500;
  }

  .section-swatches { display: flex; gap: 0.3rem; flex-wrap: wrap; }
  .sw {
    padding: 0.4rem 0.7rem; border-radius: 6px; font-size: 0.65rem;
    font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
  }
  .sw.default { background: #fff; border: 1px solid rgba(0,0,0,0.1); color: var(--text-main); }
  .sw.muted { background: var(--bg-soft); color: var(--text-secondary); }
  .sw.soft { background: rgba(37,99,235,0.04); color: var(--accent); }
  .sw.surface { background: #f8fafc; border: 1px solid rgba(0,0,0,0.05); color: var(--text-secondary); }

  .auto-badge {
    background: rgba(37,99,235,0.06); padding: 0.4rem 0.8rem;
    border-radius: 8px; font-size: 0.8rem; font-weight: 500;
  }

  .gallery-bottom {
    display: flex; flex-direction: column; align-items: center;
    gap: 1rem; padding: 2rem 0 3rem;
  }
  .gallery-bottom-btns { display: flex; gap: 0.8rem; }

  @media (max-width: 768px) {
    .grid-2, .grid-3 { grid-template-columns: minmax(0, 1fr); }
  }
</style>
