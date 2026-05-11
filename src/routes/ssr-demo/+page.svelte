<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';

  const { data } = $props<{
    data: {
      serverTime: string;
      serverFact: string;
      magicNumber: number;
    };
  }>();

  setSeo({ title: 'Demo SSR | SvelteKit', description: 'Ejemplo de carga de datos desde el servidor.' });
</script>

<svelte:head>
  <title>Demo SSR | SvelteKit</title>
</svelte:head>

<Container>
  <div class="demo-head">
    <Heading level={1} eyebrow="Server Side Rendering" align="center">Demo de carga de datos</Heading>
    <Text variant="muted" align="center">
      Esta pagina carga datos desde el servidor usando <code>+page.ts</code> con la funcion <code>load()</code>.
      Los datos se renderizan en el servidor antes de enviar el HTML al navegador.
    </Text>
  </div>

  <Grid columns={3}>
    <Card variant="soft">
      <Heading level={4}>Hora del servidor</Heading>
      <Text variant="muted">{new Date(data.serverTime).toLocaleString()}</Text>
    </Card>
    <Card variant="soft">
      <Heading level={4}>Dato del servidor</Heading>
      <Text variant="muted">{data.serverFact}</Text>
    </Card>
    <Card variant="soft">
      <Heading level={4}>Numero magico</Heading>
      <Text variant="muted">{data.magicNumber}</Text>
    </Card>
  </Grid>

  <div class="demo-info">
    <Card variant="outline">
      <Heading level={3}>Como funciona</Heading>
      <Text variant="muted">
        1. El archivo <code>+page.ts</code> tiene una funcion <code>load()</code><br/>
        2. Esa funcion se ejecuta en el servidor<br/>
        3. Los datos se pasan a la pagina via <code>data</code><br/>
        4. La pagina los recibe con <code>$props()</code>
      </Text>
    </Card>
  </div>
</Container>

<style>
  .demo-head {
    padding-top: 8rem;
    padding-bottom: 2rem;
  }
  .demo-info {
    margin-top: 2rem;
    padding-bottom: 4rem;
  }
  code {
    background: rgba(99, 102, 241, 0.08);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-size: 0.85em;
  }
</style>
