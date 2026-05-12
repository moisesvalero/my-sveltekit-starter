<script lang="ts">
  import { fade } from 'svelte/transition';
  import { Spinner } from '$lib/components/ui/spinner';

  const { loading = false, message = 'Cargando...' } = $props<{
    loading?: boolean;
    message?: string;
  }>();
</script>

{#if loading}
  <div class="flex items-center justify-center min-h-[60vh]" transition:fade={{ duration: 200 }}>
    <div class="flex flex-col items-center gap-4">
      <Spinner class="size-8" />
      <p class="text-sm text-muted-foreground">{message}</p>
    </div>
  </div>
{/if}
