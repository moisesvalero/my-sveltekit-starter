<script lang="ts">
  import { toasts, dismissToast } from '$lib/stores/toast';
  import { fly } from 'svelte/transition';
</script>

<div class="toast-container">
  {#each $toasts as t (t.id)}
    <div
      class="toast toast--{t.type}"
      transition:fly={{ y: 20, duration: 200, opacity: 0 }}
    >
      <span class="toast-icon">
        {#if t.type === 'success'}✓
        {:else if t.type === 'error'}✕
        {:else if t.type === 'warning'}⚠
        {:else}ℹ
        {/if}
      </span>
      <span class="toast-message">{t.message}</span>
      <button class="toast-close" onclick={() => dismissToast(t.id)}>✕</button>
    </div>
  {/each}
</div>

<style>
  .toast-container {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 380px;
  }
  .toast {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.85rem 1.1rem;
    border-radius: 14px;
    background: #1a1a2e;
    color: #fff;
    font-size: 0.88rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
  }
  .toast--success {
    border-left: 3px solid #34c759;
  }
  .toast--error {
    border-left: 3px solid #ef4444;
  }
  .toast--info {
    border-left: 3px solid #2563eb;
  }
  .toast--warning {
    border-left: 3px solid #f59e0b;
  }
  .toast-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
  }
  .toast--success .toast-icon {
    background: #34c759;
  }
  .toast--error .toast-icon {
    background: #ef4444;
  }
  .toast--info .toast-icon {
    background: #2563eb;
  }
  .toast--warning .toast-icon {
    background: #f59e0b;
  }
  .toast-message {
    flex: 1;
  }
  .toast-close {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    font-size: 12px;
    padding: 2px;
  }
  .toast-close:hover {
    color: #fff;
  }
</style>
