<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import { Card } from '$lib/components/ui/card';

  const { data } = $props<{
    data: {
      serverTime: string;
      serverFact: string;
      magicNumber: number;
    };
  }>();

  setSeo({
    title: 'Demo SSR | SvelteKit',
    description: 'Ejemplo de carga de datos desde el servidor.'
  });
</script>

<svelte:head>
  <title>Demo SSR | SvelteKit</title>
</svelte:head>

<Container>
  <div class="pt-32 pb-8 text-center">
    <p class="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-4">
      Server Side Rendering
    </p>
    <h1 class="text-4xl font-bold tracking-tight text-foreground mb-4">Demo de carga de datos</h1>
    <p class="text-lg text-muted-foreground max-w-[640px] mx-auto">
      Esta pagina carga datos desde el servidor usando <code
        class="bg-blue-100/50 px-1.5 py-0.5 rounded text-sm">+page.ts</code
      >
      con la funcion <code class="bg-blue-100/50 px-1.5 py-0.5 rounded text-sm">load()</code>. Los
      datos se renderizan en el servidor antes de enviar el HTML al navegador.
    </p>
  </div>
</Container>

<Section variant="default">
  <Container>
    <Grid columns={3}>
      <Card class="p-5 bg-gradient-to-br from-blue-50/30 to-transparent">
        <h4 class="text-base font-semibold text-foreground mb-2">Hora del servidor</h4>
        <p class="text-sm text-muted-foreground">{new Date(data.serverTime).toLocaleString()}</p>
      </Card>
      <Card class="p-5 bg-gradient-to-br from-blue-50/30 to-transparent">
        <h4 class="text-base font-semibold text-foreground mb-2">Dato del servidor</h4>
        <p class="text-sm text-muted-foreground">{data.serverFact}</p>
      </Card>
      <Card class="p-5 bg-gradient-to-br from-blue-50/30 to-transparent">
        <h4 class="text-base font-semibold text-foreground mb-2">Numero magico</h4>
        <p class="text-sm text-muted-foreground">{data.magicNumber}</p>
      </Card>
    </Grid>

    <div class="mt-8 pb-16">
      <Card class="p-6 border border-dashed border-border">
        <h3 class="text-lg font-semibold text-foreground mb-3">Como funciona</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          1. El archivo <code class="bg-blue-100/50 px-1.5 py-0.5 rounded text-sm">+page.ts</code>
          tiene una funcion
          <code class="bg-blue-100/50 px-1.5 py-0.5 rounded text-sm">load()</code><br />
          2. Esa funcion se ejecuta en el servidor<br />
          3. Los datos se pasan a la pagina via
          <code class="bg-blue-100/50 px-1.5 py-0.5 rounded text-sm">data</code><br />
          4. La pagina los recibe con
          <code class="bg-blue-100/50 px-1.5 py-0.5 rounded text-sm">$props()</code>
        </p>
      </Card>
    </div>
  </Container>
</Section>
