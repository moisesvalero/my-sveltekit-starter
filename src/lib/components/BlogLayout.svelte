<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  const { children } = $props<{ children?: any }>();
</script>

<Container>
  <article class="blog-post">
    {#if children}
      {@render children()}
    {/if}
  </article>
</Container>

<style>
  .blog-post {
    padding-top: 8rem;
    padding-bottom: 4rem;
    max-width: 720px;
  }
  .blog-post :global(h1) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .blog-post :global(p) {
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.2rem;
  }
  .blog-post :global(code) {
    background: rgba(99, 102, 241, 0.08);
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }
  .blog-post :global(pre) {
    background: #1a1a2e;
    color: #e2e8f0;
    padding: 1.2rem;
    border-radius: 12px;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }
  .blog-post :global(pre code) {
    background: none;
    padding: 0;
    color: inherit;
  }
</style>
