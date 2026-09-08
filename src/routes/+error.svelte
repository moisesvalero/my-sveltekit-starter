<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { siteConfig } from '$lib/site-config';
  import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
  <title>Error {page.status} | {siteConfig.name}</title>
</svelte:head>

<div class="flex min-h-[70vh] items-center justify-center px-4 py-16 text-center">
  <div class="max-w-md">
    <p class="font-extrabold text-7xl text-primary md:text-8xl">{page.status}</p>
    <h1 class="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
      {#if page.status === 404}
        Página no encontrada
      {:else}
        Algo salió mal
      {/if}
    </h1>
    <p class="mt-3 text-base text-muted-foreground">
      {page.error?.message || 'Ha ocurrido un error inesperado.'}
    </p>
    <div class="mt-8">
      <Button href={resolve('/')} size="lg">Volver al inicio</Button>
    </div>
  </div>
</div>
