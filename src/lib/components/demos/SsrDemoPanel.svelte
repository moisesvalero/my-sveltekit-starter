<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Grid from '$lib/components/ui/Grid.svelte';
  import { Card } from '$lib/components/ui/card';
  import { t } from '$lib/i18n';

  let {
    serverTime,
    serverFactKey,
    magicNumber
  }: {
    serverTime: string;
    serverFactKey: string;
    magicNumber: number;
  } = $props();
</script>

<div class="demo-pages text-left">
  <Container>
    <div class="pb-6 pt-2 text-center">
      <p class="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {$t('componentsPage.demos.ssr.eyebrow')}
      </p>
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {$t('componentsPage.demos.ssr.title')}
      </h2>
      <p class="mx-auto max-w-[640px] text-lg text-muted-foreground">
        {$t('componentsPage.demos.ssr.intro')}
      </p>
    </div>
  </Container>

  <Section variant="default">
    <Container>
      <Grid columns={3}>
        <Card class="bg-gradient-to-br from-blue-50/30 to-transparent p-5 dark:from-blue-950/20">
          <h4 class="mb-2 text-base font-semibold text-foreground">
            {$t('componentsPage.demos.ssr.serverTime')}
          </h4>
          <p class="text-sm text-muted-foreground">{new Date(serverTime).toLocaleString()}</p>
        </Card>
        <Card class="bg-gradient-to-br from-blue-50/30 to-transparent p-5 dark:from-blue-950/20">
          <h4 class="mb-2 text-base font-semibold text-foreground">
            {$t('componentsPage.demos.ssr.serverFact')}
          </h4>
          <p class="text-sm text-muted-foreground">
            {$t(`componentsPage.demos.ssr.facts.${serverFactKey}`)}
          </p>
        </Card>
        <Card class="bg-gradient-to-br from-blue-50/30 to-transparent p-5 dark:from-blue-950/20">
          <h4 class="mb-2 text-base font-semibold text-foreground">
            {$t('componentsPage.demos.ssr.magic')}
          </h4>
          <p class="text-sm text-muted-foreground">{magicNumber}</p>
        </Card>
      </Grid>

      <div class="mt-8 pb-2">
        <Card class="border border-dashed border-border p-6">
          <h3 class="mb-3 text-lg font-semibold text-foreground">
            {$t('componentsPage.demos.ssr.howTitle')}
          </h3>
          <p class="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
            {$t('componentsPage.demos.ssr.howBody')}
          </p>
        </Card>
      </div>
    </Container>
  </Section>
</div>
