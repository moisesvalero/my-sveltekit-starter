<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Button from '$lib/components/ui/Button.svelte';

  setSeo({ title: 'Precios', description: 'Planes y precios transparentes.' });

  const plans = [
    { name: 'Starter', price: '19', desc: 'Para empezar', features: ['5 proyectos', 'Soporte basico', 'Actualizaciones'], featured: false },
    { name: 'Pro', price: '49', desc: 'Para profesionales', features: ['Proyectos ilimitados', 'Soporte prioritario', 'API access'], featured: true },
    { name: 'Enterprise', price: '99', desc: 'Para equipos', features: ['Todo en Pro', 'SLA garantizado', 'Onboarding dedicado'], featured: false }
  ];
</script>

<svelte:head>
  <title>Precios | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="page-head">
    <Heading level={1} eyebrow="Precios" align="center">Planes simples y transparentes</Heading>
    <Text variant="muted" align="center">Elige el plan que mejor se adapte a ti. Sin sorpresas.</Text>
  </div>
</Container>

<Section variant="default">
  <Container>
    <Grid columns={3}>
      {#each plans as plan (plan.name)}
        <Card variant={plan.featured ? 'default' : 'soft'}>
          <div class="plan">
            <Heading level={3}>{plan.name}</Heading>
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">{plan.price}</span>
              <span class="period">/mes</span>
            </div>
            <Text variant="muted">{plan.desc}</Text>
            <ul class="features">
              {#each plan.features as f (f)}
                <li>✓ {f}</li>
              {/each}
            </ul>
            <Button variant={plan.featured ? 'primary' : 'outline'} size="lg" className="full-width">
              {plan.featured ? 'Empezar ahora' : 'Elegir plan'}
            </Button>
          </div>
        </Card>
      {/each}
    </Grid>
  </Container>
</Section>

<style>
  .page-head { padding-top: 8rem; padding-bottom: 2rem; }
  .plan { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1rem; }
  .price { font-size: 3rem; font-weight: 800; letter-spacing: -0.04em; }
  .currency { font-size: 1.5rem; vertical-align: super; color: var(--text-secondary); }
  .period { font-size: 1rem; font-weight: 400; color: var(--text-secondary); }
  .features { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.6rem; }
  .features li { color: var(--text-secondary); }
  :global(.full-width) { width: 100%; }
</style>
