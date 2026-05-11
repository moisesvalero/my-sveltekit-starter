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

  setSeo({ title: 'Componentes UI | SvelteKit', description: 'Galeria de los 23 componentes disponibles.' });

  let modalOpen = $state(false);
  const items = [
    { icon: '🚀', title: 'Rapido', description: 'Svelte compila tu UI a JavaScript optimizado.' },
    { icon: '🎨', title: 'Personalizable', description: 'CSS tokens para adaptar la marca en segundos.' },
    { icon: '🧩', title: 'Componible', description: 'Secciones que encajan sin romper el layout.' },
    { icon: '🔒', title: 'Seguro', description: 'CSP, HSTS y headers de seguridad por defecto.' }
  ];
</script>

<svelte:head>
  <title>Componentes | SvelteKit Starter</title>
</svelte:head>

<Container>
  <div class="gallery-head">
    <Heading level={1} eyebrow="23 componentes" align="center">Galeria completa de componentes</Heading>
    <Text variant="muted" align="center">Todos los bloques que puedes usar en tus paginas. Copia, pega y personaliza.</Text>
  </div>

  <!-- 1. BUTTON -->
  <Section variant="default" id="button">
    <Heading level={2}>1. Button</Heading>
    <Text variant="muted">Botones con 5 variantes, 3 tamaños y soporte para enlaces.</Text>
    <div class="demo-row wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="link">Link</Button>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="lg">Large</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" as="a" href="/components">Link btn</Button>
    </div>
  </Section>

  <!-- 2. CARD -->
  <Section variant="muted" id="card">
    <Heading level={2}>2. Card</Heading>
    <Text variant="muted">Tarjetas con 3 variantes: default, soft, outline.</Text>
    <Grid columns={3}>
      <Card variant="default"><Heading level={4}>Default</Heading><Text variant="small">Fondo blanco con sombra</Text></Card>
      <Card variant="soft"><Heading level={4}>Soft</Heading><Text variant="small">Fondo con gradiente suave</Text></Card>
      <Card variant="outline"><Heading level={4}>Outline</Heading><Text variant="small">Sin fondo, solo borde</Text></Card>
    </Grid>
  </Section>

  <!-- 3. CONTAINER + 4. SECTION -->
  <Section variant="default" id="container-section">
    <Heading level={2}>3. Container + 4. Section</Heading>
    <Text variant="muted">Container centra el contenido. Section define fondos: default, muted, soft, surface.</Text>
    <div class="demo-note">Cada seccion de esta pagina usa un variant distinto para que veas la diferencia.</div>
  </Section>

  <!-- 5. HEADING + 6. TEXT -->
  <Section variant="soft" id="heading-text">
    <Heading level={2}>5. Heading + 6. Text</Heading>
    <Text variant="muted">Titulos con niveles, eyebrow y kicker. Parrafos con variantes.</Text>
    <div class="demo-col">
      <Heading level={1} eyebrow="Eyebrow H1">Titulo nivel 1</Heading>
      <Heading level={2} kicker="Kicker H2">Titulo nivel 2</Heading>
      <Heading level={3}>Titulo nivel 3</Heading>
      <Text>Parrafo body normal.</Text>
      <Text variant="muted">Parrafo muted.</Text>
      <Text variant="small">Texto small.</Text>
    </div>
  </Section>

  <!-- 7. GRID -->
  <Section variant="default" id="grid">
    <Heading level={2}>7. Grid</Heading>
    <Text variant="muted">Cuadricula responsive.<br/><code>columns={2|3|4}</code> — se adapta a movil.</Text>
    <Grid columns={4}>
      {#each Array(4) as _, i}
        <Card variant="soft" className="center"><Text variant="small">Columna</Text></Card>
      {/each}
    </Grid>
  </Section>

  <!-- 8. HERO SECTION -->
  <Section variant="muted" id="hero-section">
    <Heading level={2}>8. HeroSection</Heading>
    <Text variant="muted">Hero completo con titulo, subtitulo y 2 CTAs.</Text>
    <HeroSection
      eyebrow="Componente Hero"
      title="Un hero listo en una linea."
      subtitle="Con titulo, subtitulo, boton primario y secundario. Ideal para landings."
      primaryLabel="Accion principal"
      primaryHref="#"
      secondaryLabel="Accion secundaria"
      secondaryHref="#"
    />
  </Section>

  <!-- 9. FEATURES SECTION -->
  <Section variant="default" id="features-section">
    <Heading level={2}>9. FeaturesSection</Heading>
    <Text variant="muted">Grid de caracteristicas con icono, titulo y descripcion.</Text>
    <FeaturesSection
      eyebrow="Features"
      title="Caracteristicas en grid"
      subtitle="Array de items con icono, titulo y descripcion."
      {items}
    />
  </Section>

  <!-- 10. SPINNER + 11. LOADING BLOCK -->
  <Section variant="soft" id="spinner-loading">
    <Heading level={2}>10. Spinner + 11. LoadingBlock</Heading>
    <Text variant="muted">Indicadores de carga animados.</Text>
    <div class="demo-row">
      <Spinner />
      <Spinner size={40} />
      <LoadingBlock loading={true} message="Cargando datos del servidor..." />
    </div>
  </Section>

  <!-- 12. SKELETON -->
  <Section variant="default" id="skeleton">
    <Heading level={2}>12. Skeleton</Heading>
    <Text variant="muted">Placeholders animados mientras carga el contenido.</Text>
    <div class="demo-col">
      <Skeleton width="60%" height="1.5rem" />
      <Skeleton width="100%" height="1rem" />
      <Skeleton width="80%" height="1rem" />
      <Skeleton width="40%" height="3rem" borderRadius="12px" />
    </div>
  </Section>

  <!-- 13. MODAL -->
  <Section variant="muted" id="modal">
    <Heading level={2}>13. Modal</Heading>
    <Text variant="muted">Ventana emergente. Se cierra con click fuera, ESC o boton.</Text>
    <div class="demo-row">
      <Button variant="primary" onclick={() => (modalOpen = true)}>Abrir modal</Button>
    </div>
  </Section>

  <!-- 14. TOAST -->
  <Section variant="default" id="toast">
    <Heading level={2}>14. Toast</Heading>
    <Text variant="muted">Notificaciones temporales.<br/><code>toast('mensaje', 'success|error|info|warning')</code></Text>
    <div class="demo-row wrap">
      <Button variant="primary" onclick={() => toast('Operacion completada!', 'success')}>Toast success</Button>
      <Button variant="secondary" onclick={() => toast('Algo salio mal', 'error')}>Toast error</Button>
      <Button variant="ghost" onclick={() => toast('Aviso importante', 'warning')}>Toast warning</Button>
    </div>
  </Section>

  <!-- 15. COPY BUTTON -->
  <Section variant="soft" id="copy">
    <Heading level={2}>15. CopyButton</Heading>
    <Text variant="muted">Copia texto al portapapeles con feedback visual.</Text>
    <div class="demo-row">
      <CopyButton text="npm create svelte@latest" />
      <CopyButton text="https://ejemplo.com/api" label="Copiar URL" />
    </div>
  </Section>

  <!-- 16. NEWSLETTER -->
  <Section variant="default" id="newsletter">
    <Heading level={2}>16. Newsletter</Heading>
    <Text variant="muted">Formulario de suscripcion listo para conectar a una API.</Text>
    <Newsletter buttonLabel="Suscribirse gratis" />
  </Section>

  <!-- 17. THEME TOGGLE -->
  <Section variant="muted" id="theme">
    <Heading level={2}>17. ThemeToggle</Heading>
    <Text variant="muted">Toggle dark/light mode. Guarda preferencia en localStorage.<br/>Ya esta en el header de todas las paginas.</Text>
    <div class="demo-row"><ThemeToggle /></div>
  </Section>

  <!-- 18. COOKIE CONSENT -->
  <Section variant="default" id="cookie">
    <Heading level={2}>18. CookieConsent</Heading>
    <Text variant="muted">Banner GDPR. Aparece automaticamente en todas las paginas. Solo se muestra una vez.</Text>
    <div class="demo-note">Recarga la pagina para verlo (si no lo has aceptado ya). Esta en el layout global.</div>
  </Section>

  <!-- 19. JSON-LD -->
  <Section variant="soft" id="jsonld">
    <Heading level={2}>19. JsonLd</Heading>
    <Text variant="muted">Schema.org JSON-LD automatico. Inyecta Organization, WebSite, pagina actual y breadcrumbs.</Text>
    <div class="demo-note">Esta en el layout global. Todas las paginas tienen Schema.org sin hacer nada.</div>
  </Section>

  <!-- 20. ANALYTICS -->
  <Section variant="default" id="analytics">
    <Heading level={2}>20. Analytics</Heading>
    <Text variant="muted">Placeholder para Google Analytics o Plausible. Solo pon el ID y la URL del script.</Text>
    <div class="demo-note"><code>&lt;Analytics id="TU_ID" src="https://plausible.io/js/script.js" /&gt;</code></div>
  </Section>

  <!-- 21. LIVE CHAT -->
  <Section variant="muted" id="livechat">
    <Heading level={2}>21. LiveChat</Heading>
    <Text variant="muted">Widget de chat para Crisp, Intercom o Tawk.<br/><code>provider="crisp|intercom|tawk"</code></Text>
    <div class="demo-note"><code>&lt;LiveChat provider="crisp" /&gt;</code></div>
  </Section>

  <!-- 22. AI PROMPT -->
  <Section variant="default" id="aiprompt">
    <Heading level={2}>22. AiPrompt</Heading>
    <Text variant="muted">Textarea con contador listo para conectar a una API de IA.</Text>
    <div class="demo-col">
      <AiPrompt placeholder="Escribe aqui tu pregunta..." message="Conecta este componente a la API de tu IA favorita." maxLength={500} />
    </div>
  </Section>

  <!-- 23. COOKIE CONSENT ya mostrado -->

  <div class="gallery-footer">
    <Text variant="muted" align="center">23 componentes. Todos listos para usar. Revisa <code>AGENTS.md</code> para ver imports y props.</Text>
  </div>
</Container>

<Modal title="Modal de ejemplo" open={modalOpen} onclose={() => (modalOpen = false)}>
  <Text>Este es un modal. Se cierra con:</Text>
  <br />
  <Text variant="small">- Click fuera del panel</Text>
  <Text variant="small">- Tecla Escape</Text>
  <Text variant="small">- Boton de cerrar (✕)</Text>
  <br />
  <Button variant="primary" onclick={() => (modalOpen = false)}>Cerrar modal</Button>
</Modal>

<style>
  .gallery-head { padding-top: 8rem; padding-bottom: 2rem; }
  .gallery-footer { padding: 2rem 0 4rem; }
  .demo-row { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
  .demo-col { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
  .wrap { flex-direction: row; flex-wrap: wrap; }
  .center { display: flex; align-items: center; justify-content: center; padding: 1.2rem; }
  .demo-note { margin-top: 1rem; padding: 0.8rem 1rem; background: rgba(99,102,241,0.05); border-radius: 8px; font-size: 0.85rem; color: var(--text-secondary); }
  .demo-note code { background: rgba(99,102,241,0.1); padding: 0.15rem 0.4rem; border-radius: 4px; }
  section { scroll-margin-top: 100px; }
</style>
