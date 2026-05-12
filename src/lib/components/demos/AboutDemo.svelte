<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { Card } from '$lib/components/ui/card';
  import { t } from '$lib/i18n';
</script>

<div class="demo-pages text-left">
  <Container>
    <div class="pb-6 pt-2">
      <p class="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {$t('componentsPage.demos.about.eyebrow')}
      </p>
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {$t('componentsPage.demos.about.title')}
      </h2>
      <p class="text-lg text-muted-foreground">
        {$t('componentsPage.demos.about.subtitle')}
      </p>
    </div>
  </Container>

  <Section variant="muted">
    <Container>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card
          class="border-blue-100/50 bg-gradient-to-br from-blue-50/50 to-transparent p-6 dark:border-border dark:from-blue-950/20"
        >
          <h3 class="mb-2 text-lg font-semibold text-foreground">
            {$t('componentsPage.demos.about.mission')}
          </h3>
          <p class="text-sm leading-relaxed text-muted-foreground">
            {$t('componentsPage.demos.about.missionText')}
          </p>
        </Card>
        <Card
          class="border-blue-100/50 bg-gradient-to-br from-blue-50/50 to-transparent p-6 dark:border-border dark:from-blue-950/20"
        >
          <h3 class="mb-2 text-lg font-semibold text-foreground">
            {$t('componentsPage.demos.about.vision')}
          </h3>
          <p class="text-sm leading-relaxed text-muted-foreground">
            {$t('componentsPage.demos.about.visionText')}
          </p>
        </Card>
        <Card
          class="border-blue-100/50 bg-gradient-to-br from-blue-50/50 to-transparent p-6 dark:border-border dark:from-blue-950/20"
        >
          <h3 class="mb-2 text-lg font-semibold text-foreground">
            {$t('componentsPage.demos.about.values')}
          </h3>
          <p class="text-sm leading-relaxed text-muted-foreground">
            {$t('componentsPage.demos.about.valuesText')}
          </p>
        </Card>
      </div>
    </Container>
  </Section>

  <Section variant="default">
    <Container>
      <h3 class="mb-4 text-center text-2xl font-bold text-foreground">
        {$t('componentsPage.demos.about.teamTitle')}
      </h3>
      <p class="mb-8 text-center text-muted-foreground">
        {$t('componentsPage.demos.about.teamSubtitle')}
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
            <p class="text-sm text-muted-foreground">{$t('componentsPage.demos.about.role')}</p>
          </Card>
        {/each}
      </div>
    </Container>
  </Section>
</div>
