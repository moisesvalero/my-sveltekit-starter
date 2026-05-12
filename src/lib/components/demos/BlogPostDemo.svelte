<script lang="ts">
  import Container from '$lib/components/ui/Container.svelte';
  import { t } from '$lib/i18n';
</script>

<Container>
  <article class="blog-post-demo max-w-[720px] text-left">
    <header class="mb-8">
      <p class="text-sm text-muted-foreground">{$t('componentsPage.demos.blogPost.date')}</p>
      <h2 class="text-3xl font-bold tracking-tight text-foreground">
        {$t('componentsPage.demos.blogPost.title')}
      </h2>
      <p class="mt-2 text-muted-foreground">
        {$t('componentsPage.demos.blogPost.lead')}
      </p>
    </header>

    <h3 class="text-xl font-semibold text-foreground">{$t('componentsPage.demos.blogPost.h1')}</h3>
    <p class="text-muted-foreground">
      {$t('componentsPage.demos.blogPost.p1')}
    </p>

    <h3 class="mt-8 text-xl font-semibold text-foreground">
      {$t('componentsPage.demos.blogPost.h2')}
    </h3>
    <ol class="list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>{$t('componentsPage.demos.blogPost.ol1')}</li>
      <li>{$t('componentsPage.demos.blogPost.ol2')}</li>
      <li>{$t('componentsPage.demos.blogPost.ol3')}</li>
      <li>{$t('componentsPage.demos.blogPost.ol4')}</li>
    </ol>

    <h3 class="mt-8 text-xl font-semibold text-foreground">
      {$t('componentsPage.demos.blogPost.h3')}
    </h3>
    <pre class="mb-6 overflow-x-auto rounded-xl bg-[#1a1a2e] p-4 text-sm text-slate-100"><code
        >{$t('componentsPage.demos.blogPost.code')}</code
      ></pre>

    <h3 class="text-xl font-semibold text-foreground">{$t('componentsPage.demos.blogPost.h4')}</h3>
    <ul class="list-disc space-y-2 pl-6 text-muted-foreground">
      <li>{$t('componentsPage.demos.blogPost.li1')}</li>
      <li>{$t('componentsPage.demos.blogPost.li2')}</li>
      <li>{$t('componentsPage.demos.blogPost.li3')}</li>
      <li>{$t('componentsPage.demos.blogPost.li4')}</li>
    </ul>
  </article>
</Container>

<style>
  .blog-post-demo :global(p) {
    margin-bottom: 1rem;
    line-height: 1.75;
  }
</style>
