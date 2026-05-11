<script lang="ts">
  import { setSeo } from '$lib/seo';
  import { toast } from '$lib/stores/toast';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';

  let { form } = $props<{ form?: any }>();

  setSeo({ title: 'Contacto', description: 'Formulario de contacto.' });

  let name = $state(form?.name ?? '');
  let email = $state(form?.email ?? '');
  let message = $state(form?.message ?? '');
  let error = $state(form?.error ?? '');
  let success = $state(form?.success ?? false);

  // Show toast if form action returned success
  $effect(() => {
    if (form?.success) {
      toast('Mensaje enviado correctamente!', 'success');
      name = '';
      email = '';
      message = '';
      error = '';
    }
  });
</script>

<svelte:head>
  <title>Contacto | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="contact-head">
    <Heading level={1} eyebrow="Contacto">Hablemos</Heading>
    <Text variant="muted">Cuentame tu proyecto y te respondere lo antes posible.</Text>
  </div>

  <form method="POST" class="contact-form">
    {#if error}
      <div class="form-error">{error}</div>
    {/if}
    {#if success}
      <div class="form-success">Mensaje enviado! Te respondere pronto.</div>
    {/if}

    <label>
      Nombre
      <input type="text" name="name" bind:value={name} required placeholder="Tu nombre" />
    </label>

    <label>
      Email
      <input type="email" name="email" bind:value={email} required placeholder="tu@email.com" />
    </label>

    <label>
      Mensaje
      <textarea name="message" bind:value={message} required rows={5} placeholder="Cuentame..."></textarea>
    </label>

    <button type="submit" class="btn-primary">Enviar mensaje</button>
  </form>
</Container>

<style>
  .contact-head {
    padding-top: 8rem;
    padding-bottom: 1rem;
  }
  .contact-form {
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding-bottom: 4rem;
  }
  .contact-form label {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
  }
  .contact-form input,
  .contact-form textarea {
    padding: 0.7rem 0.9rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    font: inherit;
    font-size: 0.9rem;
    background: var(--bg-main, #fff);
    color: var(--text-main);
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  .form-error {
    background: #fef2f2;
    border: 1px solid #fecaca;
    color: #dc2626;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    font-size: 0.85rem;
  }
  .form-success {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    color: #16a34a;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    font-size: 0.85rem;
  }
  .btn-primary {
    padding: 0.85rem 2rem;
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 12px;
    font: inherit;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-primary:hover {
    background: var(--accent-hover);
  }
</style>
