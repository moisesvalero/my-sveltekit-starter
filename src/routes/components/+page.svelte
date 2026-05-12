<script lang="ts">
  import { untrack } from 'svelte';
  import { enhance } from '$app/forms';
  import { setSeo } from '$lib/seo';
  import Heading from '$lib/components/ui/Heading.svelte';
  import { Button } from '$lib/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { Spinner } from '$lib/components/ui/spinner';
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Label } from '$lib/components/ui/label';
  import { toast } from '$lib/stores/toast';
  import { reveal } from '$lib/reveal';
  import CopyButton from '$lib/components/CopyButton.svelte';
  import Newsletter from '$lib/components/Newsletter.svelte';
  import AiPrompt from '$lib/components/AiPrompt.svelte';

  setSeo({
    title: 'Componentes | My SvelteKit Starter',
    description:
      'Galería de componentes UI shadcn-svelte, bloques del proyecto y demos de blog + formulario.'
  });

  let {
    form
  }: {
    form?: { name?: string; email?: string; message?: string; error?: string; success?: boolean };
  } = $props();

  let name = $state(untrack(() => form?.name ?? ''));
  let email = $state(untrack(() => form?.email ?? ''));
  let message = $state(untrack(() => form?.message ?? ''));

  $effect(() => {
    if (form?.error) {
      name = form.name ?? '';
      email = form.email ?? '';
      message = form.message ?? '';
    }
  });

  $effect(() => {
    if (form?.success) {
      toast('Mensaje enviado (demo)', 'success');
      name = '';
      email = '';
      message = '';
    }
  });

  const categories = [
    {
      label: 'UI Base',
      items: [
        { id: 'button', name: 'Button' },
        { id: 'card', name: 'Card' },
        { id: 'input', name: 'Input' },
        { id: 'textarea', name: 'Textarea' },
        { id: 'label', name: 'Label' },
        { id: 'spinner', name: 'Spinner' },
        { id: 'skeleton', name: 'Skeleton' }
      ]
    },
    {
      label: 'Avanzados',
      items: [
        { id: 'copy', name: 'CopyButton' },
        { id: 'newsletter', name: 'Newsletter' },
        { id: 'toast', name: 'Toast' },
        { id: 'aiprompt', name: 'AiPrompt' }
      ]
    },
    {
      label: 'Ejemplos plantilla',
      items: [
        { id: 'blog-demo', name: 'Blog (mdsvex)' },
        { id: 'contact-demo', name: 'Formulario contacto' }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Componentes | My SvelteKit Starter</title>
</svelte:head>

<div class="flex w-full min-h-0 flex-1 flex-col lg:flex-row">
  <aside
    class="sticky top-28 z-10 hidden h-[calc(100vh-8rem)] w-[220px] shrink-0 self-start overflow-y-auto border-r border-border bg-background/80 p-6 backdrop-blur-sm lg:block lg:top-32"
  >
    <nav class="flex flex-col gap-1">
      <a
        href="/components"
        class="mb-4 rounded-md px-3 py-2 text-sm font-bold text-foreground no-underline hover:bg-muted/60"
        >Componentes</a
      >
      {#each categories as cat (cat.label)}
        <p
          class="px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-widest text-muted-foreground opacity-60"
        >
          {cat.label}
        </p>
        {#each cat.items as item (item.id)}
          <a
            href="#{item.id}"
            class="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground no-underline transition-colors hover:bg-primary/5 hover:text-primary"
            >{item.name}</a
          >
        {/each}
      {/each}
    </nav>
  </aside>

  <main class="min-w-0 flex-1 px-4 pb-16 pt-2 sm:px-6 lg:max-w-[800px] lg:px-8">
    <section class="mb-8 border-b border-border pb-8">
      <span
        class="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[0.6rem] font-extrabold uppercase tracking-widest text-primary"
        >COMPONENTES UI</span
      >
      <Heading
        level={1}
        className="!gap-2 border-0 pb-0"
        kicker="Svelte 5 + Tailwind CSS. Listos para copiar y personalizar."
        title="Componentes"
      />
    </section>

    <section
      id="button"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Button</h2>
          <p class="text-sm text-muted-foreground">
            5 variantes · 3 tamaños · enlace · disabled · loading
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/button</code
        >
      </div>
      <div
        class="flex flex-col gap-4 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <div class="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Medium</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </section>

    <section
      id="card"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Card</h2>
          <p class="text-sm text-muted-foreground">3 variantes · composición</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/card</code
        >
      </div>
      <div
        class="flex flex-wrap gap-4 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Card class="min-w-[140px] flex-1 p-5">
          <CardHeader><CardTitle>Default</CardTitle></CardHeader>
          <CardContent><p class="text-sm text-muted-foreground">Contenido del card</p></CardContent>
        </Card>
        <Card
          class="min-w-[140px] flex-1 border-primary/25 bg-gradient-to-br from-primary/10 to-transparent p-5 dark:from-primary/15"
        >
          <CardHeader><CardTitle>Soft</CardTitle></CardHeader>
          <CardContent><p class="text-sm text-muted-foreground">Contenido del card</p></CardContent>
        </Card>
        <Card class="min-w-[140px] flex-1 border-dashed p-5">
          <CardHeader><CardTitle>Outline</CardTitle></CardHeader>
          <CardContent><p class="text-sm text-muted-foreground">Contenido del card</p></CardContent>
        </Card>
      </div>
    </section>

    <section
      id="input"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Input</h2>
          <p class="text-sm text-muted-foreground">Texto, email y contraseña</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/input</code
        >
      </div>
      <div
        class="flex max-w-sm flex-col gap-4 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Input type="text" placeholder="Placeholder" />
        <Input type="email" placeholder="email@example.com" />
        <Input type="password" placeholder="Password" />
      </div>
    </section>

    <section
      id="textarea"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Textarea</h2>
          <p class="text-sm text-muted-foreground">Entrada multilínea</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/textarea</code
        >
      </div>
      <div class="max-w-sm rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15">
        <Textarea placeholder="Type your message here..." rows={4} />
      </div>
    </section>

    <section
      id="label"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Label</h2>
          <p class="text-sm text-muted-foreground">Etiqueta accesible</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/label</code
        >
      </div>
      <div
        class="flex max-w-sm flex-col gap-2 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Label for="demo-input">Nombre</Label>
        <Input id="demo-input" type="text" placeholder="Tu nombre" />
      </div>
    </section>

    <section
      id="spinner"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Spinner</h2>
          <p class="text-sm text-muted-foreground">Indicador SVG</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/spinner</code
        >
      </div>
      <div
        class="flex items-center gap-6 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Spinner class="size-4" />
        <Spinner class="size-6" />
        <Spinner class="size-8" />
      </div>
    </section>

    <section
      id="skeleton"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Skeleton</h2>
          <p class="text-sm text-muted-foreground">Placeholder con pulso</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/skeleton</code
        >
      </div>
      <div
        class="flex flex-col gap-3 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Skeleton class="h-4 w-[90%]" />
        <Skeleton class="h-4 w-[60%]" />
        <Skeleton class="h-4 w-[80%]" />
        <Skeleton class="h-4 w-[40%]" />
        <Skeleton class="h-8 w-[30%] rounded-lg" />
      </div>
    </section>

    <section
      id="copy"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">CopyButton</h2>
          <p class="text-sm text-muted-foreground">Copiar al portapapeles</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/CopyButton.svelte</code
        >
      </div>
      <div
        class="flex items-center justify-center rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <CopyButton text="npm create svelte@latest" />
      </div>
    </section>

    <section
      id="newsletter"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Newsletter</h2>
          <p class="text-sm text-muted-foreground">Suscripción por email</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/Newsletter.svelte</code
        >
      </div>
      <div
        class="flex items-start justify-center rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Newsletter buttonLabel="Suscribirse" />
      </div>
    </section>

    <section
      id="toast"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Toast</h2>
          <p class="text-sm text-muted-foreground">success · error · info · warning</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/stores/toast</code
        >
      </div>
      <div
        class="flex flex-wrap justify-center gap-2 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Button variant="default" size="sm" onclick={() => toast('Completado!', 'success')}
          >Success</Button
        >
        <Button variant="secondary" size="sm" onclick={() => toast('Error!', 'error')}>Error</Button
        >
        <Button variant="outline" size="sm" onclick={() => toast('Aviso', 'warning')}
          >Warning</Button
        >
        <Button variant="ghost" size="sm" onclick={() => toast('Info', 'info')}>Info</Button>
      </div>
    </section>

    <section
      id="aiprompt"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">AiPrompt</h2>
          <p class="text-sm text-muted-foreground">Área de prompt para IA</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/AiPrompt.svelte</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15">
        <AiPrompt placeholder="Pregunta lo que quieras..." maxLength={300} />
      </div>
    </section>

    <section
      id="blog-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Blog (mdsvex)</h2>
          <p class="text-sm text-muted-foreground">
            Ejemplo de post en Markdown — la ruta /blog redirige aquí; el artículo sigue en su URL.
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >src/routes/blog/primer-post/</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15">
        <a href="/blog/primer-post" class="block no-underline">
          <Card class="cursor-pointer p-6 transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle>Mi primer post con SvelteKit</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="mb-2 text-sm text-muted-foreground">2026-05-11</p>
              <p class="text-base text-muted-foreground">
                Demo con mdsvex: Markdown + componentes Svelte en la misma página.
              </p>
            </CardContent>
          </Card>
        </a>
      </div>
    </section>

    <section
      id="contact-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">Formulario de contacto</h2>
          <p class="text-sm text-muted-foreground">
            Misma acción de servidor que antes en /contacto; esa URL ahora solo redirige aquí.
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >action=&quot;?/contact&quot;</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15">
        <form
          method="POST"
          action="?/contact"
          class="flex max-w-[520px] flex-col gap-5"
          use:enhance
        >
          {#if form?.error}
            <div
              class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400"
            >
              {form.error}
            </div>
          {/if}

          <div class="flex flex-col gap-1.5">
            <Label for="contact-name">Nombre</Label>
            <Input
              type="text"
              id="contact-name"
              name="name"
              bind:value={name}
              required
              placeholder="Tu nombre"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <Label for="contact-email">Email</Label>
            <Input
              type="email"
              id="contact-email"
              name="email"
              bind:value={email}
              required
              placeholder="tu@email.com"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <Label for="contact-message">Mensaje</Label>
            <Textarea
              id="contact-message"
              name="message"
              bind:value={message}
              required
              rows={5}
              placeholder="Mensaje de prueba…"
            />
          </div>
          <Button type="submit" class="w-full sm:w-auto">Enviar (demo)</Button>
        </form>
      </div>
    </section>
  </main>
</div>
