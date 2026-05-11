<script lang="ts">
  import { fade } from 'svelte/transition';
  import Spinner from './ui/Spinner.svelte';

  const { loading = false, message = 'Cargando...' } = $props<{
    loading?: boolean;
    message?: string;
  }>();
</script>

{#if loading}
  <div class="loading-overlay" transition:fade={{ duration: 200 }}>
    <div class="loading-inner">
      <Spinner size={32} />
      <p>{message}</p>
    </div>
  </div>
{/if}

<style>
  .loading-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
  }
  .loading-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .loading-inner p {
    color: var(--text-secondary, #6b7280);
    font-size: 0.9rem;
  }
</style>
