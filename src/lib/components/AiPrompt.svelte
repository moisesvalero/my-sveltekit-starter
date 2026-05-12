<script lang="ts">
  let {
    placeholder = '',
    message = 'Estamos en ello...',
    maxLength = 999
  }: {
    placeholder?: string;
    message?: string;
    maxLength?: number;
  } = $props();

  let result = $state('');
  let loading = $state(false);
  let error = $state('');
</script>

<form class="ai-form">
  <textarea bind:value={result} {placeholder} rows={3} maxlength={maxLength}></textarea>
  <div class="ai-form-footer">
    <button type="button" disabled={loading || !result.trim()}>
      {loading ? 'Pensando...' : 'Preguntar a la IA'}
    </button>
    <span class="ai-form-counter">{result.length}/{maxLength}</span>
  </div>
  {#if error}
    <p class="ai-form-error">{error}</p>
  {/if}
  {#if message && !error}
    <p class="ai-form-hint">{message}</p>
  {/if}
</form>

<style>
  .ai-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .ai-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    font: inherit;
    font-size: 0.9rem;
    resize: vertical;
    background: var(--bg-main, #fff);
    color: var(--text-main, #111827);
  }
  .ai-form textarea:focus {
    outline: none;
    border-color: var(--accent, #2563eb);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  .ai-form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ai-form-footer button {
    padding: 0.5rem 1.2rem;
    background: var(--accent, #2563eb);
    color: #fff;
    border: none;
    border-radius: 999px;
    font: inherit;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }
  .ai-form-footer button:hover:not(:disabled) {
    background: var(--accent-hover, #1d4ed8);
  }
  .ai-form-footer button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .ai-form-counter {
    font-size: 0.75rem;
    color: var(--text-secondary, #6b7280);
  }
  .ai-form-error {
    color: #ef4444;
    font-size: 0.8rem;
  }
  .ai-form-hint {
    color: var(--text-secondary, #6b7280);
    font-size: 0.8rem;
  }
</style>
