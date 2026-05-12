<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { Card } from '$lib/components/ui/card';

  setSeo({ title: 'Sobre nosotros', description: 'Conoce mas sobre nuestro proyecto.' });
</script>

<svelte:head>
  <title>Sobre nosotros | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="pt-32 pb-8">
    <p class="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-4">Sobre nosotros</p>
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
      Construimos herramientas que la gente ama usar.
    </h1>
    <p class="text-lg text-muted-foreground">
      Un equipo pequeño con un objetivo grande: hacer software que marque la diferencia.
    </p>
  </div>
</Container>

<Section variant="muted">
  <Container>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card class="p-6 bg-gradient-to-br from-blue-50/50 to-transparent border-blue-100/50">
        <h3 class="text-lg font-semibold text-foreground mb-2">Mision</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Crear herramientas digitales que resuelvan problemas reales de forma simple y elegante.
        </p>
      </Card>
      <Card class="p-6 bg-gradient-to-br from-blue-50/50 to-transparent border-blue-100/50">
        <h3 class="text-lg font-semibold text-foreground mb-2">Vision</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Ser la plataforma de referencia para equipos que quieren construir rapido y bien.
        </p>
      </Card>
      <Card class="p-6 bg-gradient-to-br from-blue-50/50 to-transparent border-blue-100/50">
        <h3 class="text-lg font-semibold text-foreground mb-2">Valores</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Transparencia, velocidad, calidad y obsesion por la experiencia de usuario.
        </p>
      </Card>
    </div>
  </Container>
</Section>

<Section variant="default">
  <Container>
    <h2 class="text-3xl font-bold text-center mb-4">Las personas detras del proyecto</h2>
    <p class="text-muted-foreground text-center mb-8">
      Un equipo distribuido trabajando desde cualquier parte del mundo.
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {#each ['Alex', 'Maria', 'Carlos', 'Lucia'] as name (name)}
        <Card class="p-6 text-center">
          <div
            class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
          >
            {name[0]}
          </div>
          <h4 class="text-base font-semibold text-foreground">{name}</h4>
          <p class="text-sm text-muted-foreground">Rol del equipo</p>
        </Card>
      {/each}
    </div>
  </Container>
</Section>
