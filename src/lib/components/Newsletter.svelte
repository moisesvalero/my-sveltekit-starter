<script lang="ts">
  import { toast } from '$lib/stores/toast';

  const {
    title = 'Suscribete a la newsletter',
    subtitle = 'Recibe las ultimas novedades directamente en tu email.',
    action = '/api/newsletter',
    buttonLabel = 'Suscribirse'
  } = $props<{
    title?: string;
    subtitle?: string;
    action?: string;
    buttonLabel?: string;
  }>();

  let email = $state('');
  let loading = $state(false);
</script>

<form
  class="newsletter"
  method="POST"
  {action}
  onsubmit={async (e) => {
    e.preventDefault();
    loading = true;
    try {
      const res = await fetch(action, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) {
        toast('Gracias por suscribirte!', 'success');
        email = '';
      } else {
        toast('Error al suscribir. Intenta de nuevo.', 'error');
      }
    } catch {
      toast('Error de conexion.', 'error');
    } finally {
      loading = false;
    }
  }}
>
  <div class="newsletter-wrap">
    <input
      type="email"
      bind:value={email}
      placeholder="tu@email.com"
      required
      class="newsletter-input"
    />
    <button type="submit" disabled={loading} class="newsletter-btn">
      {loading ? 'Enviando...' : buttonLabel}
    </button>
  </div>
</form>

<style>
  .newsletter-wrap {
    display: flex;
    gap: 0.5rem;
  }
  .newsletter-input {
    flex: 1;
    padding: 0.7rem 1rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    font: inherit;
    font-size: 0.9rem;
    background: var(--bg-main, #fff);
    color: var(--text-main);
  }
  .newsletter-input:focus {
    outline: none;
    border-color: var(--accent, #6366f1);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  .newsletter-btn {
    padding: 0.7rem 1.5rem;
    background: var(--accent, #6366f1);
    color: #fff;
    border: none;
    border-radius: 12px;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
  }
  .newsletter-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>
