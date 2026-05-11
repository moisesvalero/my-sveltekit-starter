<script lang="ts">
  import { setSeo } from '$lib/seo';
  import Container from '$lib/components/ui/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Card from '$lib/components/ui/Card.svelte';

  setSeo({ title: 'Blog', description: 'Blog de Mi Proyecto.' });

  const posts = [
    {
      title: 'Mi primer post con SvelteKit',
      slug: '/blog/primer-post',
      date: '2026-05-11',
      description: 'Un ejemplo de blog usando mdsvex y Markdown.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Mi Proyecto</title>
</svelte:head>

<Container>
  <div class="blog-head">
    <Heading level={1} eyebrow="Blog">Ultimos articulos</Heading>
    <Text variant="muted">Tutoriales, novedades y reflexiones sobre desarrollo web.</Text>
  </div>

  <div class="blog-list">
    {#each posts as post (post.slug)}
      <a href={post.slug} class="blog-link">
        <Card variant="soft" clickable>
          <Heading level={3}>{post.title}</Heading>
          <Text variant="small">{post.date}</Text>
          <Text variant="muted">{post.description}</Text>
        </Card>
      </a>
    {/each}
  </div>
</Container>

<style>
  .blog-head {
    padding-top: 8rem;
    padding-bottom: 2rem;
  }
  .blog-list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding-bottom: 4rem;
    max-width: 720px;
  }
  .blog-link {
    text-decoration: none;
    display: block;
  }
</style>
