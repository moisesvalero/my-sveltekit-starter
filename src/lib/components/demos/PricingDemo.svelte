<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { Card } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { t } from '$lib/i18n';

  const planKeys = ['starter', 'pro', 'enterprise'] as const;
  const prices: Record<(typeof planKeys)[number], string> = {
    starter: '19',
    pro: '49',
    enterprise: '99'
  };
  const featured: Record<(typeof planKeys)[number], boolean> = {
    starter: false,
    pro: true,
    enterprise: false
  };
</script>

<div class="demo-pages text-left">
  <Container>
    <div class="pb-6 pt-2 text-center">
      <p class="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {$t('componentsPage.demos.pricing.eyebrow')}
      </p>
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {$t('componentsPage.demos.pricing.title')}
      </h2>
      <p class="text-lg text-muted-foreground">
        {$t('componentsPage.demos.pricing.subtitle')}
      </p>
    </div>
  </Container>

  <Section variant="default">
    <Container>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        {#each planKeys as key (key)}
          <Card class="p-6 {featured[key] ? 'border-primary shadow-lg' : ''}">
            <div class="flex flex-col items-center gap-4 text-center">
              <h3 class="text-xl font-semibold text-foreground">
                {$t(`componentsPage.demos.pricing.names.${key}`)}
              </h3>
              <div class="text-5xl font-extrabold tracking-tight">
                <span class="align-top text-xl text-muted-foreground">$</span>{prices[key]}<span
                  class="text-base font-normal text-muted-foreground"
                  >{$t('componentsPage.demos.pricing.perMonth')}</span
                >
              </div>
              <p class="text-sm text-muted-foreground">
                {$t(`componentsPage.demos.pricing.${key}.desc`)}
              </p>
              <ul class="flex w-full flex-col gap-2 text-sm text-muted-foreground">
                <li class="flex items-center gap-2">
                  ✓ {$t(`componentsPage.demos.pricing.${key}.f1`)}
                </li>
                <li class="flex items-center gap-2">
                  ✓ {$t(`componentsPage.demos.pricing.${key}.f2`)}
                </li>
                <li class="flex items-center gap-2">
                  ✓ {$t(`componentsPage.demos.pricing.${key}.f3`)}
                </li>
              </ul>
              <Button variant={featured[key] ? 'default' : 'outline'} class="w-full">
                {featured[key]
                  ? $t('componentsPage.demos.pricing.ctaFeatured')
                  : $t('componentsPage.demos.pricing.ctaOther')}
              </Button>
            </div>
          </Card>
        {/each}
      </div>
    </Container>
  </Section>
</div>
