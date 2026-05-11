<script lang="ts">
  type Props = {
    columns?: number;
    gap?: string;
    className?: string;
  };

  let {
    columns = 3,
    gap = '1.5rem',
    className = ''
  }: Props = $props();

  const style = $derived(`--nk-grid-cols:${columns};--nk-grid-gap:${gap};`);
</script>

<div
  class={`nk-grid ${className}`.trim()}
  {style}
>
  <slot />
</div>

<style>
  .nk-grid {
    display: grid;
    grid-template-columns: repeat(var(--nk-grid-cols), minmax(0, 1fr));
    gap: var(--nk-grid-gap);
  }

  @media (max-width: 900px) {
    .nk-grid {
      grid-template-columns: repeat(
        min(var(--nk-grid-cols), 2),
        minmax(0, 1fr)
      );
    }
  }

  @media (max-width: 640px) {
    .nk-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>
