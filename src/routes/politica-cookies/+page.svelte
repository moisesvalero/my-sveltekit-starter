<script lang="ts">
  import { get } from 'svelte/store';
  import { resolve } from '$app/paths';
  import { locale, t } from '$lib/i18n';
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Section from '$lib/components/ui/Section.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import { Button } from '$lib/components/ui/button';

  $effect(() => {
    void $locale;
    const tr = get(t);
    setSeo({
      title: tr('cookiePolicy.seo.title'),
      description: tr('cookiePolicy.seo.description'),
      ogTitle: tr('cookiePolicy.seo.title'),
      ogDescription: tr('cookiePolicy.seo.description'),
      schemaType: 'WebPage',
      headline: tr('cookiePolicy.title'),
      locale: $locale,
      dateModified: new Date().toISOString()
    });
  });
</script>

<Section variant="soft">
  <Container className="max-w-3xl">
    <div class="space-y-8">
      <Heading
        level={1}
        eyebrow={$t('cookiePolicy.eyebrow')}
        title={$t('cookiePolicy.title')}
        kicker={$t('cookiePolicy.subtitle')}
      />

      <div class="space-y-5 rounded-xl border border-border bg-background p-6 shadow-sm">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-foreground">
            {$t('cookiePolicy.sections.used.title')}
          </h2>
          <Text>{$t('cookiePolicy.sections.used.body')}</Text>
        </div>

        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-foreground">
            {$t('cookiePolicy.sections.optional.title')}
          </h2>
          <Text>{$t('cookiePolicy.sections.optional.body')}</Text>
        </div>

        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-foreground">
            {$t('cookiePolicy.sections.control.title')}
          </h2>
          <Text>{$t('cookiePolicy.sections.control.body')}</Text>
        </div>
      </div>

      <Button href={resolve('/')}>{$t('cookiePolicy.backHome')}</Button>
    </div>
  </Container>
</Section>
