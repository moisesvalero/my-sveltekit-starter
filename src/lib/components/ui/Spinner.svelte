<script lang="ts">
  const { size = 24 } = $props<{ size?: number }>();
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  class="spinner"
  aria-label="Cargando..."
>
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.2" />
  <path
    d="M12 2a10 10 0 0 1 10 10"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"
  />
</svg>

<style>
  .spinner {
    animation: spin 0.8s linear infinite;
    color: var(--accent, #6366f1);
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
