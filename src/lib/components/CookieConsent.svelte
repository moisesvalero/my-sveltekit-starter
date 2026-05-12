<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { toast } from '$lib/stores/toast';

  let show = $state(false);

  onMount(() => {
    if (typeof localStorage !== 'undefined' && !localStorage.getItem('cookies_accepted')) {
      setTimeout(() => (show = true), 800);
    }
  });

  function acceptAll() {
    localStorage.setItem('cookies_accepted', 'all');
    show = false;
    toast('Preferencias guardadas', 'success');
  }

  function acceptNecessary() {
    localStorage.setItem('cookies_accepted', 'necessary');
    show = false;
    toast('Solo cookies necesarias', 'info');
  }
</script>

{#if show}
  <div class="cookie-banner" transition:fade={{ duration: 300 }}>
    <div class="cookie-content">
      <p>
        Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra
        <a href="/politica-cookies">politica de cookies</a>.
      </p>
      <div class="cookie-actions">
        <button class="cookie-btn secondary" onclick={acceptNecessary}>Solo necesarias</button>
        <button class="cookie-btn primary" onclick={acceptAll}>Aceptar todas</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9997;
    background: var(--bg-main, #fff);
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding: 1rem 1.5rem;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);
  }
  .cookie-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .cookie-content p {
    font-size: 0.85rem;
    color: var(--text-secondary, #6b7280);
    margin: 0;
  }
  .cookie-content a {
    color: var(--primary);
    text-decoration: underline;
  }
  .cookie-actions {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }
  .cookie-btn {
    padding: 0.5rem 1.2rem;
    border-radius: 999px;
    font: inherit;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
  }
  .cookie-btn.primary {
    background: var(--primary);
    color: var(--primary-foreground);
  }
  .cookie-btn.secondary {
    background: var(--bg-soft, #f9fafb);
    color: var(--text-main, #111827);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
