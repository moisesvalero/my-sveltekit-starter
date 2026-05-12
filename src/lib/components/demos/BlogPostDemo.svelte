<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
</script>

<Container>
  <article class="blog-post-demo max-w-[720px] text-left">
    <header class="mb-8">
      <p class="text-sm text-muted-foreground">2026-05-11</p>
      <h2 class="text-3xl font-bold tracking-tight text-foreground">
        Mi primer post con SvelteKit
      </h2>
      <p class="mt-2 text-muted-foreground">
        Ejemplo de blog con Markdown/mdsvex (antes en ruta propia; ahora demo en galería).
      </p>
    </header>

    <h3 class="text-xl font-semibold text-foreground">Bienvenido al blog</h3>
    <p class="text-muted-foreground">
      Ejemplo de <strong>Markdown</strong> y <strong>mdsvex</strong> en la misma página.
    </p>

    <h3 class="mt-8 text-xl font-semibold text-foreground">Como crear un post nuevo</h3>
    <ol class="list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>
        Crea una carpeta en <code class="rounded bg-muted px-1 py-0.5 text-sm"
          >src/routes/blog/tu-post/</code
        >
      </li>
      <li>
        Crea un archivo <code class="rounded bg-muted px-1 py-0.5 text-sm">+page.svx</code> dentro
      </li>
      <li>Escribe tu contenido en Markdown</li>
      <li>
        Añade frontmatter con <code class="rounded bg-muted px-1 py-0.5 text-sm">title</code>,
        <code class="rounded bg-muted px-1 py-0.5 text-sm">date</code>
        y <code class="rounded bg-muted px-1 py-0.5 text-sm">description</code>
      </li>
    </ol>

    <h3 class="mt-8 text-xl font-semibold text-foreground">Ejemplo de codigo</h3>
    <pre class="mb-6 overflow-x-auto rounded-xl bg-[#1a1a2e] p-4 text-sm text-slate-100"><code
        >function saludo(nombre: string) {'{'}
  return 'Hola ' + nombre + '!';
}</code
      ></pre>

    <h3 class="text-xl font-semibold text-foreground">Por que usar SvelteKit para tu blog</h3>
    <ul class="list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Velocidad: las paginas se generan en build time</li>
      <li>Markdown: escribes en texto plano, se convierte a HTML</li>
      <li>Componentes: puedes meter componentes Svelte dentro del Markdown</li>
      <li>SEO: cada post puede tener su propio title y description</li>
    </ul>
  </article>
</Container>

<style>
  .blog-post-demo :global(p) {
    margin-bottom: 1rem;
    line-height: 1.75;
  }
</style>
