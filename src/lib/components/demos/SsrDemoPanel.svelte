<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import { Card } from '$lib/components/ui/card';

  let {
    serverTime,
    serverFact,
    magicNumber
  }: {
    serverTime: string;
    serverFact: string;
    magicNumber: number;
  } = $props();
</script>

<div class="demo-pages text-left">
  <Container>
    <div class="pb-6 pt-2 text-center">
      <p class="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        Server Side Rendering
      </p>
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Demo de carga de datos
      </h2>
      <p class="mx-auto max-w-[640px] text-lg text-muted-foreground">
        Los datos vienen de <code class="rounded bg-muted px-1.5 py-0.5 text-sm"
          >src/routes/components/+page.ts</code
        >
        con <code class="rounded bg-muted px-1.5 py-0.5 text-sm">load()</code>. Misma ruta que el
        formulario demo (<code class="rounded bg-muted px-1.5 py-0.5 text-sm">+page.server.ts</code
        >).
      </p>
    </div>
  </Container>

  <Section variant="default">
    <Container>
      <Grid columns={3}>
        <Card class="bg-gradient-to-br from-blue-50/30 to-transparent p-5 dark:from-blue-950/20">
          <h4 class="mb-2 text-base font-semibold text-foreground">Hora del servidor</h4>
          <p class="text-sm text-muted-foreground">{new Date(serverTime).toLocaleString()}</p>
        </Card>
        <Card class="bg-gradient-to-br from-blue-50/30 to-transparent p-5 dark:from-blue-950/20">
          <h4 class="mb-2 text-base font-semibold text-foreground">Dato del servidor</h4>
          <p class="text-sm text-muted-foreground">{serverFact}</p>
        </Card>
        <Card class="bg-gradient-to-br from-blue-50/30 to-transparent p-5 dark:from-blue-950/20">
          <h4 class="mb-2 text-base font-semibold text-foreground">Numero magico</h4>
          <p class="text-sm text-muted-foreground">{magicNumber}</p>
        </Card>
      </Grid>

      <div class="mt-8 pb-2">
        <Card class="border border-dashed border-border p-6">
          <h3 class="mb-3 text-lg font-semibold text-foreground">Como funciona</h3>
          <p class="text-sm leading-relaxed text-muted-foreground">
            1. <code class="rounded bg-muted px-1.5 py-0.5 text-sm">+page.ts</code> exporta
            <code class="rounded bg-muted px-1.5 py-0.5 text-sm">load()</code><br />
            2. Se ejecuta en el servidor<br />
            3. Los datos llegan al
            <code class="rounded bg-muted px-1.5 py-0.5 text-sm">+page.svelte</code>
            vía props<br />
            4. El componente los recibe con
            <code class="rounded bg-muted px-1.5 py-0.5 text-sm">$props()</code>
          </p>
        </Card>
      </div>
    </Container>
  </Section>
</div>
