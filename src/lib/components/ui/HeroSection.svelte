<script lang="ts">
  import Container from './Container.svelte';
  import Button from './Button.svelte';
  import Heading from './Heading.svelte';
  import Text from './Text.svelte';

  type Props = {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    align?: 'left' | 'center';
  };

  let {
    eyebrow = undefined,
    title = '',
    subtitle = undefined,
    primaryLabel = undefined,
    primaryHref = undefined,
    secondaryLabel = undefined,
    secondaryHref = undefined,
    align = 'center'
  }: Props = $props();
</script>

<section class="hero">
  <div class="hero-bg">
    <div class="hero-orb hero-orb--1"></div>
    <div class="hero-orb hero-orb--2"></div>
    <div class="hero-orb hero-orb--3"></div>
    <div class="hero-grid"></div>
  </div>

  <Container>
    <div class="hero-content hero-content--{align}">
      <Heading level={1} {eyebrow} {align}>
        {title}
      </Heading>

      {#if subtitle}
        <Text variant="muted" align={align} className="hero-subtitle">
          {subtitle}
        </Text>
      {/if}

      {#if primaryLabel || secondaryLabel}
        <div class="hero-actions">
          {#if primaryLabel}
            <Button
              as={primaryHref ? 'a' : 'button'}
              href={primaryHref}
              variant="primary"
              size="lg"
            >
              {primaryLabel}
            </Button>
          {/if}

          {#if secondaryLabel}
            <Button
              as={secondaryHref ? 'a' : 'button'}
              href={secondaryHref}
              variant="outline"
              size="lg"
            >
              {secondaryLabel}
            </Button>
          {/if}
        </div>
      {/if}
    </div>
  </Container>
</section>

<style>
  .hero {
    position: relative;
    padding-block: clamp(120px, 18vh, 180px);
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%), var(--bg-main, #fff);
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .hero-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
  }

  .hero-orb--1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(99,102,241,0.25), transparent);
    top: -150px; left: -100px;
    animation: orbFloat1 12s ease-in-out infinite;
  }

  .hero-orb--2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(139,92,246,0.18), transparent);
    top: 50%; right: -80px;
    animation: orbFloat2 15s ease-in-out infinite;
  }

  .hero-orb--3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(59,130,246,0.15), transparent);
    bottom: -80px; left: 40%;
    animation: orbFloat3 10s ease-in-out infinite;
  }

  @keyframes orbFloat1 {
    0%, 100% { transform: translate3d(0,0,0) scale(1); }
    50% { transform: translate3d(40px,-20px,0) scale(1.1); }
  }
  @keyframes orbFloat2 {
    0%, 100% { transform: translate3d(0,0,0) scale(1); }
    50% { transform: translate3d(-30px,20px,0) scale(1.15); }
  }
  @keyframes orbFloat3 {
    0%, 100% { transform: translate3d(0,0,0) scale(1); }
    50% { transform: translate3d(20px,30px,0) scale(1.08); }
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at 50% 30%, black 20%, transparent 70%);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 740px;
  }

  .hero-content--center {
    margin-inline: auto;
    align-items: center;
    text-align: center;
  }

  .hero-content--left {
    align-items: flex-start;
    text-align: left;
  }

  .hero-subtitle {
    max-width: 36rem;
    font-size: 1.05rem;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-top: 0.5rem;
  }

  .hero-content--center .hero-actions {
    justify-content: center;
  }

  @media (max-width: 640px) {
    .hero {
      padding-block: 100px;
    }
    .hero-actions {
      flex-direction: column;
      width: 100%;
    }
    .hero-actions :global(*) {
      width: 100%;
      text-align: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-orb { animation: none; }
  }
</style>
