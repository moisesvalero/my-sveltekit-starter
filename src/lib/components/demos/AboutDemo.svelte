<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { Card } from '$lib/components/ui/card';
</script>

<div class="demo-pages text-left">
  <Container>
    <div class="pb-6 pt-2">
      <p class="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">Sobre nosotros</p>
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Construimos herramientas que la gente ama usar.
      </h2>
      <p class="text-lg text-muted-foreground">
        Un equipo pequeño con un objetivo grande: hacer software que marque la diferencia.
      </p>
    </div>
  </Container>

  <Section variant="muted">
    <Container>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          class="border-blue-100/50 bg-gradient-to-br from-blue-50/50 to-transparent p-6 dark:border-border dark:from-blue-950/20"
        >
          <h3 class="mb-2 text-lg font-semibold text-foreground">Mision</h3>
          <p class="text-sm leading-relaxed text-muted-foreground">
            Crear herramientas digitales que resuelvan problemas reales de forma simple y elegante.
          </p>
        </Card>
        <Card
          class="border-blue-100/50 bg-gradient-to-br from-blue-50/50 to-transparent p-6 dark:border-border dark:from-blue-950/20"
        >
          <h3 class="mb-2 text-lg font-semibold text-foreground">Vision</h3>
          <p class="text-sm leading-relaxed text-muted-foreground">
            Ser la plataforma de referencia para equipos que quieren construir rapido y bien.
          </p>
        </Card>
        <Card
          class="border-blue-100/50 bg-gradient-to-br from-blue-50/50 to-transparent p-6 dark:border-border dark:from-blue-950/20"
        >
          <h3 class="mb-2 text-lg font-semibold text-foreground">Valores</h3>
          <p class="text-sm leading-relaxed text-muted-foreground">
            Transparencia, velocidad, calidad y obsesion por la experiencia de usuario.
          </p>
        </Card>
      </div>
    </Container>
  </Section>

  <Section variant="default">
    <Container>
      <h3 class="mb-4 text-center text-2xl font-bold text-foreground">
        Las personas detras del proyecto
      </h3>
      <p class="mb-8 text-center text-muted-foreground">
        Un equipo distribuido trabajando desde cualquier parte del mundo.
      </p>
      <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
        {#each ['Alex', 'Maria', 'Carlos', 'Lucia'] as name (name)}
          <Card class="p-6 text-center">
            <div
              class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-lg font-bold text-white"
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
</div>
