<script lang="ts">
  import Container from './Container.svelte';
  import Section from './Section.svelte';
  import Heading from './Heading.svelte';
  import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';
  import { Button } from './button';
  import { Check } from '@lucide/svelte';

  export type PricingPlan = {
    name: string;
    description: string;
    monthlyPrice: number | string;
    yearlyPrice?: number | string;
    period?: string;
    badge?: string;
    popular?: boolean;
    features: string[];
    ctaLabel: string;
    ctaHref?: string;
    onSelect?: () => void;
  };

  type Props = {
    id?: string;
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    yearlyDiscountLabel?: string;
    plans: PricingPlan[];
    defaultBilling?: 'monthly' | 'yearly';
    className?: string;
  };

  let {
    id,
    eyebrow,
    title = 'Precios simples y transparentes',
    subtitle = 'Elige el plan que mejor se adapte al tamaño de tu proyecto.',
    yearlyDiscountLabel = 'Ahorra 20%',
    plans,
    defaultBilling = 'monthly',
    className = ''
  }: Props = $props();

  let billing = $state<'monthly' | 'yearly'>('monthly');

  $effect(() => {
    billing = defaultBilling;
  });

  const hasYearlyOption = $derived(plans.some((p) => p.yearlyPrice !== undefined));
</script>

<Section {id} className="py-20 md:py-28 {className}">
  <Container>
    <div class="flex flex-col items-center text-center gap-4 mb-10">
      <Heading level={2} align="center" {eyebrow} kicker={subtitle} {title} />

      {#if hasYearlyOption}
        <div
          class="inline-flex items-center rounded-full border border-border bg-muted/60 p-1 mt-4"
        >
          <button
            type="button"
            onclick={() => (billing = 'monthly')}
            class="rounded-full px-4 py-1.5 text-xs font-semibold transition-all {billing ===
            'monthly'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'}"
          >
            Facturación Mensual
          </button>
          <button
            type="button"
            onclick={() => (billing = 'yearly')}
            class="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-all {billing ===
            'yearly'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'}"
          >
            <span>Anual</span>
            <span class="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
              {yearlyDiscountLabel}
            </span>
          </button>
        </div>
      {/if}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {#each plans as plan (plan.name)}
        {@const isYearly = billing === 'yearly' && plan.yearlyPrice !== undefined}
        {@const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice}
        {@const periodText = plan.period ?? (isYearly ? '/año' : '/mes')}

        <Card
          class="relative flex flex-col justify-between transition-all duration-200 {plan.popular
            ? 'border-primary ring-2 ring-primary/20 shadow-xl scale-[1.02] bg-card'
            : 'border-border/80 bg-card/60'}"
        >
          {#if plan.popular || plan.badge}
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span
                class="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm"
              >
                {plan.badge ?? 'Más Popular'}
              </span>
            </div>
          {/if}

          <div>
            <CardHeader class="p-6 pb-4">
              <CardTitle class="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
              <CardDescription class="text-sm text-muted-foreground min-h-[40px] pt-1">
                {plan.description}
              </CardDescription>
              <div class="pt-4 flex items-baseline gap-1">
                <span class="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                  {typeof price === 'number' ? `$${price}` : price}
                </span>
                <span class="text-sm font-medium text-muted-foreground">{periodText}</span>
              </div>
            </CardHeader>

            <CardContent class="p-6 pt-2">
              <ul class="space-y-3 text-sm text-muted-foreground">
                {#each plan.features as feature (feature)}
                  <li class="flex items-start gap-2.5">
                    <Check class="size-4 shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                {/each}
              </ul>
            </CardContent>
          </div>

          <CardFooter class="p-6 pt-4">
            <Button
              variant={plan.popular ? 'default' : 'outline'}
              size="lg"
              class="w-full font-semibold"
              href={plan.ctaHref}
              onclick={plan.onSelect}
            >
              {plan.ctaLabel}
            </Button>
          </CardFooter>
        </Card>
      {/each}
    </div>
  </Container>
</Section>
