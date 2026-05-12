<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { Card } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';

  setSeo({ title: 'Precios', description: 'Planes y precios transparentes.' });

  const plans = [
    {
      name: 'Starter',
      price: '19',
      desc: 'Para empezar',
      features: ['5 proyectos', 'Soporte basico', 'Actualizaciones'],
      featured: false
    },
    {
      name: 'Pro',
      price: '49',
      desc: 'Para profesionales',
      features: ['Proyectos ilimitados', 'Soporte prioritario', 'API access'],
      featured: true
    },
    {
      name: 'Enterprise',
      price: '99',
      desc: 'Para equipos',
      features: ['Todo en Pro', 'SLA garantizado', 'Onboarding dedicado'],
      featured: false
    }
  ];
</script>

<svelte:head>
  <title>Precios | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="pt-32 pb-8 text-center">
    <p class="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-4">Precios</p>
    <h1 class="text-4xl font-bold tracking-tight text-foreground mb-4">Planes simples y透明的</h1>
    <p class="text-lg text-muted-foreground">
      Elige el plan que mejor se adapte a ti. Sin sorpresas.
    </p>
  </div>
</Container>

<Section variant="default">
  <Container>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each plans as plan (plan.name)}
        <Card class="p-6 {plan.featured ? 'border-primary shadow-lg' : ''}">
          <div class="flex flex-col items-center text-center gap-4">
            <h3 class="text-xl font-semibold text-foreground">{plan.name}</h3>
            <div class="text-5xl font-extrabold tracking-tight">
              <span class="text-xl text-muted-foreground align-top">$</span>{plan.price}<span
                class="text-base font-normal text-muted-foreground">/mes</span
              >
            </div>
            <p class="text-sm text-muted-foreground">{plan.desc}</p>
            <ul class="flex flex-col gap-2 w-full text-sm text-muted-foreground">
              {#each plan.features as f (f)}
                <li class="flex items-center gap-2">✓ {f}</li>
              {/each}
            </ul>
            <Button variant={plan.featured ? 'default' : 'outline'} class="w-full">
              {plan.featured ? 'Empezar ahora' : 'Elegir plan'}
            </Button>
          </div>
        </Card>
      {/each}
    </div>
  </Container>
</Section>
