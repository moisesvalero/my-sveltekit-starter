<script lang="ts">
  let copied = $state(false);

  const { text, label = 'Copiar' } = $props<{ text: string; label?: string }>();

  function handleCopy() {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<button class="copy-btn" onclick={handleCopy} type="button">
  {#if copied}
    Copiado ✓
  {:else}
    {label}
  {/if}
</button>

<style>
  .copy-btn {
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background: var(--bg-soft, #f9fafb);
    cursor: pointer;
    font: inherit;
    font-size: 0.8rem;
    transition: all 0.2s;
  }
  .copy-btn:hover {
    background: var(--accent, #6366f1);
    color: #fff;
    border-color: var(--accent);
  }
</style>
