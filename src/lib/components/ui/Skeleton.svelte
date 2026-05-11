<script lang="ts">
  const { width = '100%', height = '1rem', borderRadius = '6px' } = $props<{
    width?: string;
    height?: string;
    borderRadius?: string;
  }>();
</script>

<div
  class="skeleton"
  style="width:{width}; height:{height}; border-radius:{borderRadius}"
  aria-hidden="true"
></div>

<style>
  .skeleton {
    background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
  }
  :global(.dark) .skeleton {
    background: linear-gradient(90deg, #1f2937 25%, #374151 50%, #1f2937 75%);
    background-size: 200% 100%;
  }
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
</style>
