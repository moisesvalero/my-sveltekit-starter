<script lang="ts">
  import Container from './Container.svelte';
  import Section from './Section.svelte';
  import Heading from './Heading.svelte';
  import { Input } from './input';
  import { Button } from './button';
  import { Spinner } from './spinner';
  import { toast } from 'svelte-sonner';

  type Props = {
    id?: string;
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    placeholder?: string;
    buttonLabel?: string;
    privacyNote?: string;
    actionUrl?: string;
    onSubmit?: (email: string) => Promise<boolean | void> | boolean | void;
    className?: string;
  };

  let {
    id,
    eyebrow = 'Acceso Anticipado',
    title = 'Únete a la lista de espera',
    subtitle = 'Sé el primero en acceder al lanzamiento y recibe actualizaciones exclusivas.',
    placeholder = 'tu@email.com',
    buttonLabel = 'Unirme ahora',
    privacyNote = 'Cero spam. Puedes darte de baja con un solo clic en cualquier momento.',
    actionUrl,
    onSubmit,
    className = ''
  }: Props = $props();

  let email = $state('');
  let loading = $state(false);
  let submitted = $state(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit(event: SubmitEvent) {
    if (actionUrl) {
      // Dejar que el formulario envíe el POST estándar a la actionUrl
      return;
    }

    event.preventDefault();

    const trimmed = email.trim();
    if (!trimmed || !emailRegex.test(trimmed)) {
      toast.error('Por favor, introduce un correo electrónico válido.');
      return;
    }

    loading = true;

    try {
      if (onSubmit) {
        const result = await onSubmit(trimmed);
        if (result === false) {
          loading = false;
          return;
        }
      } else {
        // Simulación de respuesta rápida para prototipado vibe coding
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      submitted = true;
      toast.success('¡Te has registrado con éxito! Te avisaremos pronto.');
      email = '';
    } catch {
      toast.error('Hubo un error al procesar tu solicitud. Inténtalo de nuevo.');
    } finally {
      loading = false;
    }
  }
</script>

<Section {id} className="py-20 md:py-28 {className}">
  <Container>
    <div
      class="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-8 text-center shadow-xl backdrop-blur-md sm:p-12 md:p-16"
    >
      <div class="flex flex-col items-center gap-4 mb-8">
        <Heading level={2} align="center" {eyebrow} kicker={subtitle} {title} />
      </div>

      {#if submitted}
        <div class="rounded-2xl bg-primary/10 p-6 border border-primary/20">
          <p class="text-base font-semibold text-primary">
            🎉 ¡Gracias por unirte! Revisa tu bandeja de entrada para confirmar.
          </p>
        </div>
      {:else}
        <form
          action={actionUrl}
          method="POST"
          onsubmit={handleSubmit}
          class="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <div class="relative flex-1">
            <Input
              type="email"
              name="email"
              required
              aria-label={placeholder}
              {placeholder}
              bind:value={email}
              disabled={loading}
              class="h-11 px-4 text-base shadow-sm"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={loading}
            class="h-11 px-6 font-semibold shadow-sm shrink-0"
          >
            {#if loading}
              <Spinner class="size-4 mr-2" />
              <span>Enviando...</span>
            {:else}
              {buttonLabel}
            {/if}
          </Button>
        </form>

        {#if privacyNote}
          <p class="mt-4 text-xs text-muted-foreground">
            {privacyNote}
          </p>
        {/if}
      {/if}
    </div>
  </Container>
</Section>
