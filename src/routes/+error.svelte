<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>Error {page.status} | Mi Proyecto</title>
</svelte:head>

<div class="error-page">
  <div class="error-inner">
    <p class="error-code">{page.status}</p>
    <h1 class="error-title">
      {#if page.status === 404}
        Página no encontrada
      {:else}
        Algo salió mal
      {/if}
    </h1>
    <p class="error-message">
      {page.error?.message || 'Ha ocurrido un error inesperado.'}
    </p>
    <a href="/" class="btn-primary">Volver al inicio</a>
  </div>
</div>

<style>
  .error-page {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center;
  }
  .error-inner {
    max-width: 480px;
  }
  .error-code {
    font-size: 6rem;
    font-weight: 800;
    color: var(--accent, #2563eb);
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  .error-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
  .error-message {
    color: var(--text-secondary, #6b7280);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  .btn-primary {
    display: inline-block;
    background: var(--accent, #2563eb);
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.2s;
  }
  .btn-primary:hover {
    background: var(--accent-hover, #1d4ed8);
  }
</style>
