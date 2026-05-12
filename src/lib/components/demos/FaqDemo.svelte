<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import { Card } from '$lib/components/ui/card';
  import { cn } from '$lib/utils';
  import { ChevronDown } from 'lucide-svelte';
  import { t } from '$lib/i18n';

  const faqIds = [
    'plantilla',
    'principiante',
    'comercial',
    'deploy',
    'i18n',
    'cms',
    'seo',
    'rendimiento'
  ] as const;

  let openId = $state<string | null>(faqIds[0] ?? null);

  function toggle(id: string) {
    openId = openId === id ? null : id;
  }
</script>

<div class="demo-pages text-left">
  <Container>
    <div class="pb-6 pt-2 text-center">
      <p class="mb-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">FAQ</p>
      <h2 class="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {$t('componentsPage.sections.faqDemo.title')}
      </h2>
      <p class="mx-auto max-w-xl text-lg text-muted-foreground">
        {$t('componentsPage.demos.faq.subtitle')}
      </p>
    </div>
  </Container>

  <Section variant="default">
    <Container>
      <div class="mx-auto flex max-w-[640px] flex-col gap-3 pb-4">
        {#each faqIds as id (id)}
          {@const expanded = openId === id}
          <Card
            class="overflow-visible bg-gradient-to-br from-blue-50/30 to-transparent p-0 dark:from-blue-950/15"
          >
            <button
              type="button"
              class="flex w-full cursor-pointer items-start justify-between gap-3 p-5 text-left"
              onclick={() => toggle(id)}
              aria-expanded={expanded}
              aria-controls="faq-panel-{id}"
              id="faq-trigger-{id}"
            >
              <span class="text-base font-medium text-foreground"
                >{$t(`componentsPage.demos.faq.items.${id}.q`)}</span
              >
              <ChevronDown
                class={cn(
                  'size-5 shrink-0 text-muted-foreground transition-transform duration-200',
                  expanded && 'rotate-180 text-primary'
                )}
                aria-hidden="true"
              />
            </button>
            {#if expanded}
              <div
                id="faq-panel-{id}"
                class="border-t border-border/60 px-5 pb-5 pt-0"
                role="region"
                aria-labelledby="faq-trigger-{id}"
              >
                <p class="text-sm leading-relaxed text-muted-foreground">
                  {$t(`componentsPage.demos.faq.items.${id}.a`)}
                </p>
              </div>
            {/if}
          </Card>
        {/each}
      </div>
    </Container>
  </Section>
</div>
