<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  let copied = $state(false);

  const { text, label = 'Copiar' } = $props<{ text: string; label?: string }>();

  function handleCopy() {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<Button variant="outline" size="sm" onclick={handleCopy}>
  {#if copied}
    Copiado
  {:else}
    {label}
  {/if}
</Button>
