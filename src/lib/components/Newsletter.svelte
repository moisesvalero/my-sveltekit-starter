<script lang="ts">
  import { toast } from '$lib/stores/toast';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';

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

<div class="flex flex-col gap-4">
  {#if title}
    <h3 class="text-xl font-semibold text-foreground">{title}</h3>
  {/if}
  {#if subtitle}
    <p class="text-sm text-muted-foreground">{subtitle}</p>
  {/if}

  <form
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
    class="flex gap-2"
  >
    <Input type="email" bind:value={email} placeholder="tu@email.com" required class="flex-1" />
    <Button type="submit" disabled={loading}>
      {loading ? 'Enviando...' : buttonLabel}
    </Button>
  </form>
</div>
