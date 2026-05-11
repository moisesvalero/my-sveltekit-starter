<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  import { clickOutside } from '$lib/actions/clickOutside';

  const { open = false, title = '', onclose } = $props<{
    open?: boolean;
    title?: string;
    onclose?: () => void;
  }>();

  function handleEscape(e: KeyboardEvent) {
    if (e.key === 'Escape') onclose?.();
  }

  function close() {
    onclose?.();
  }
</script>

{#if open}
  <div class="modal-backdrop" transition:fade={{ duration: 150 }} onclick={close} onkeydown={handleEscape} role="dialog" tabindex="-1">
    <div
      class="modal-panel"
      transition:scale={{ start: 0.95, duration: 200 }}
      onclick={(e) => e.stopPropagation()}
      use:clickOutside={close}
    >
      <div class="modal-header">
        <h2>{title}</h2>
        <button class="modal-close" onclick={close} aria-label="Cerrar">✕</button>
      </div>
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 9998;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    backdrop-filter: blur(4px);
  }
  .modal-panel {
    background: var(--bg-main, #fff);
    border-radius: 20px;
    width: 100%;
    max-width: 480px;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
  }
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
  .modal-header h2 {
    font-size: 1.1rem;
    margin: 0;
  }
  .modal-close {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: var(--text-secondary, #6b7280);
    padding: 4px;
  }
  .modal-close:hover {
    color: var(--text-main, #111827);
  }
  .modal-body {
    padding: 1.5rem;
  }
</style>
