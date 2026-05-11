<script lang="ts">
  import Container from './Container.svelte';
  import Heading from './Heading.svelte';
  import Text from './Text.svelte';
  import Card from './Card.svelte';

  export type FeatureItem = {
    icon?: string;
    title: string;
    description: string;
  };

  type Props = {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    items?: FeatureItem[];
    id?: string;
  };

  let {
    eyebrow = undefined,
    title = '',
    subtitle = undefined,
    items = [],
    id = undefined
  }: Props = $props();
</script>

<section class="nk-features" {id}>
  <Container>
    <div class="nk-features-head">
      <Heading level={2} {eyebrow} align="center">
        {title}
      </Heading>
      {#if subtitle}
        <Text variant="muted" align="center">
          {subtitle}
        </Text>
      {/if}
    </div>

    <div class="nk-features-grid">
      {#each items as item (item.title)}
        <Card variant="soft" className="nk-features-card">
          {#if item.icon}
            <div class="nk-features-icon">{item.icon}</div>
          {/if}
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Card>
      {/each}
    </div>
  </Container>
</section>

<style>
  .nk-features {
    padding-block: 96px;
    background: #ffffff;
  }

  .nk-features-head {
    max-width: 640px;
    margin: 0 auto 3rem;
  }

  .nk-features-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.4rem;
  }

  .nk-features-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
    color: var(--text-main, #0f172a);
  }

  .nk-features-card p {
    font-size: 0.95rem;
    color: var(--text-secondary, #6b7280);
    line-height: 1.7;
  }

  .nk-features-icon {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    background: radial-gradient(circle at top, #eff6ff, #dbeafe);
  }

  @media (max-width: 900px) {
    .nk-features-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .nk-features {
      padding-block: 80px;
    }

    .nk-features-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>

