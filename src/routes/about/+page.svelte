<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import Section from '$lib/components/ui/Section.svelte';

  setSeo({ title: 'Sobre nosotros', description: 'Conoce mas sobre nuestro proyecto.' });
</script>

<svelte:head>
  <title>Sobre nosotros | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="page-head">
    <Heading level={1} eyebrow="Sobre nosotros">Construimos herramientas que la gente ama usar.</Heading>
    <Text variant="muted">Un equipo pequeño con un objetivo grande: hacer software que marque la diferencia.</Text>
  </div>
</Container>

<Section variant="muted">
  <Container>
    <Grid columns={3}>
      <Card variant="soft">
        <Heading level={3}>Mision</Heading>
        <Text variant="muted">Crear herramientas digitales que resuelvan problemas reales de forma simple y elegante.</Text>
      </Card>
      <Card variant="soft">
        <Heading level={3}>Vision</Heading>
        <Text variant="muted">Ser la plataforma de referencia para equipos que quieren construir rapido y bien.</Text>
      </Card>
      <Card variant="soft">
        <Heading level={3}>Valores</Heading>
        <Text variant="muted">Transparencia, velocidad, calidad y obsesion por la experiencia de usuario.</Text>
      </Card>
    </Grid>
  </Container>
</Section>

<Section variant="default">
  <Container>
    <Heading level={2} eyebrow="Equipo" align="center">Las personas detras del proyecto</Heading>
    <Text variant="muted" align="center">Un equipo distribuido trabajando desde cualquier parte del mundo.</Text>
    <div class="team-grid">
      {#each ['Alex', 'Maria', 'Carlos', 'Lucia'] as name (name)}
        <Card variant="outline">
          <div class="avatar">{name[0]}</div>
          <Heading level={4} align="center">{name}</Heading>
          <Text variant="small" align="center">Rol del equipo</Text>
        </Card>
      {/each}
    </div>
  </Container>
</Section>

<style>
  .page-head { padding-top: 8rem; padding-bottom: 2rem; }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.2rem;
    margin-top: 2rem;
  }
  .avatar {
    width: 48px; height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent-hover));
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-weight: 700; font-size: 1.1rem;
    margin: 0 auto 1rem;
  }
  @media (max-width: 640px) {
    .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
</style>
