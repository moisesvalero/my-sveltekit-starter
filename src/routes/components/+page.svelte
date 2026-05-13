<script lang="ts">
  import { untrack } from 'svelte';
  import { get } from 'svelte/store';
  import { enhance } from '$app/forms';
  import { setSeo } from '$lib/seo';
  import { locale, t } from '$lib/i18n';
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
  import AboutDemo from '$lib/components/demos/AboutDemo.svelte';
  import PricingDemo from '$lib/components/demos/PricingDemo.svelte';
  import FaqDemo from '$lib/components/demos/FaqDemo.svelte';
  import SsrDemoPanel from '$lib/components/demos/SsrDemoPanel.svelte';
  import BlogPostDemo from '$lib/components/demos/BlogPostDemo.svelte';

  /** Build date: alimenta dateModified para que LLMs sepan la frescura del contenido. */
  const buildDate = new Date().toISOString();

  $effect(() => {
    void $locale;
    const tr = get(t);
    setSeo({
      title: tr('componentsPage.seo.title'),
      description: tr('componentsPage.seo.description'),
      ogTitle: tr('componentsPage.seo.title'),
      ogDescription: tr('componentsPage.seo.description'),
      schemaType: 'CollectionPage',
      headline: tr('componentsPage.title'),
      locale: $locale,
      dateModified: buildDate,
      keywords: [
        'componentes Svelte',
        'shadcn-svelte',
        'UI kit',
        'Tailwind CSS',
        'demos SvelteKit',
        'FAQ',
        'pricing',
        'blog mdsvex'
      ]
    });
  });

  let {
    form,
    data
  }: {
    form?: {
      name?: string;
      email?: string;
      message?: string;
      errorKey?: 'allRequired' | 'invalidEmail';
      success?: boolean;
    };
    data: { serverTime: string; serverFactKey: 'compiler'; magicNumber: number };
  } = $props();

  let name = $state(untrack(() => form?.name ?? ''));
  let email = $state(untrack(() => form?.email ?? ''));
  let message = $state(untrack(() => form?.message ?? ''));

  $effect(() => {
    if (form?.errorKey) {
      name = form.name ?? '';
      email = form.email ?? '';
      message = form.message ?? '';
    }
  });

  $effect(() => {
    if (form?.success) {
      toast(get(t)('componentsPage.toastDemoSent'), 'success');
      name = '';
      email = '';
      message = '';
    }
  });

  const categories = $derived.by(() => {
    void $locale;
    const tr = get(t);
    return [
      {
        label: tr('componentsPage.nav.uiBase'),
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
        label: tr('componentsPage.nav.advanced'),
        items: [
          { id: 'copy', name: 'CopyButton' },
          { id: 'newsletter', name: 'Newsletter' },
          { id: 'toast', name: 'Toast' },
          { id: 'aiprompt', name: 'AiPrompt' }
        ]
      },
      {
        label: tr('componentsPage.nav.templateExamples'),
        items: [
          { id: 'about-demo', name: tr('componentsPage.nav.about') },
          { id: 'pricing-demo', name: tr('componentsPage.nav.pricing') },
          { id: 'faq-demo', name: tr('componentsPage.nav.faq') },
          { id: 'ssr-demo', name: tr('componentsPage.nav.serverData') },
          { id: 'blog-demo', name: tr('componentsPage.nav.blogList') },
          { id: 'blog-post-demo', name: tr('componentsPage.nav.sampleArticle') },
          { id: 'contact-demo', name: tr('componentsPage.nav.contactForm') }
        ]
      }
    ];
  });
</script>

<div class="flex w-full min-h-0 flex-1 flex-col lg:flex-row">
  <aside
    class="sticky top-28 z-10 hidden h-[calc(100vh-8rem)] w-[220px] shrink-0 self-start overflow-y-auto border-r border-border bg-background/80 p-6 backdrop-blur-sm lg:block lg:top-32"
  >
    <nav class="flex flex-col gap-1">
      <a
        href="/components"
        class="mb-4 rounded-md px-3 py-2 text-sm font-bold text-foreground no-underline hover:bg-muted/60"
        >{$t('componentsPage.nav.root')}</a
      >
      {#each categories as cat, catIdx (catIdx)}
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
        >{$t('componentsPage.badge')}</span
      >
      <Heading
        level={1}
        className="!gap-2 border-0 pb-0"
        kicker={$t('componentsPage.kicker')}
        title={$t('componentsPage.title')}
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
            {$t('componentsPage.sections.button.desc')}
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.card.desc')}</p>
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
          <CardContent
            ><p class="text-sm text-muted-foreground">
              {$t('componentsPage.sections.card.content')}
            </p></CardContent
          >
        </Card>
        <Card
          class="min-w-[140px] flex-1 border-primary/25 bg-gradient-to-br from-primary/10 to-transparent p-5 dark:from-primary/15"
        >
          <CardHeader><CardTitle>Soft</CardTitle></CardHeader>
          <CardContent
            ><p class="text-sm text-muted-foreground">
              {$t('componentsPage.sections.card.content')}
            </p></CardContent
          >
        </Card>
        <Card class="min-w-[140px] flex-1 border-dashed p-5">
          <CardHeader><CardTitle>Outline</CardTitle></CardHeader>
          <CardContent
            ><p class="text-sm text-muted-foreground">
              {$t('componentsPage.sections.card.content')}
            </p></CardContent
          >
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.input.desc')}</p>
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.textarea.desc')}</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/textarea</code
        >
      </div>
      <div class="max-w-sm rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15">
        <Textarea placeholder={$t('componentsPage.sections.textarea.placeholder')} rows={4} />
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.label.desc')}</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/ui/label</code
        >
      </div>
      <div
        class="flex max-w-sm flex-col gap-2 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Label for="demo-input">{$t('componentsPage.sections.label.demo')}</Label>
        <Input
          id="demo-input"
          type="text"
          placeholder={$t('componentsPage.sections.label.placeholder')}
        />
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.spinner.desc')}</p>
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.skeleton.desc')}</p>
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.copy.desc')}</p>
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
          <p class="text-sm text-muted-foreground">
            {$t('componentsPage.sections.newsletter.desc')}
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/Newsletter.svelte</code
        >
      </div>
      <div
        class="flex items-start justify-center rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Newsletter buttonLabel={$t('componentsPage.sections.newsletter.button')} />
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.toast.desc')}</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/stores/toast</code
        >
      </div>
      <div
        class="flex flex-wrap justify-center gap-2 rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15"
      >
        <Button
          variant="default"
          size="sm"
          onclick={() => toast($t('componentsPage.sections.toast.done'), 'success')}>Success</Button
        >
        <Button
          variant="secondary"
          size="sm"
          onclick={() => toast($t('componentsPage.sections.toast.err'), 'error')}>Error</Button
        >
        <Button
          variant="outline"
          size="sm"
          onclick={() => toast($t('componentsPage.sections.toast.warn'), 'warning')}>Warning</Button
        >
        <Button
          variant="ghost"
          size="sm"
          onclick={() => toast($t('componentsPage.sections.toast.info'), 'info')}>Info</Button
        >
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
          <p class="text-sm text-muted-foreground">{$t('componentsPage.sections.aiprompt.desc')}</p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/AiPrompt.svelte</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15">
        <AiPrompt
          placeholder={$t('componentsPage.sections.aiprompt.placeholder')}
          maxLength={300}
        />
      </div>
    </section>

    <section
      id="about-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">
            {$t('componentsPage.sections.aboutDemo.title')}
          </h2>
          <p class="text-sm text-muted-foreground">
            {$t('componentsPage.sections.aboutDemo.desc')}
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/demos/AboutDemo.svelte</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-4 dark:bg-muted/15 sm:p-6">
        <AboutDemo />
      </div>
    </section>

    <section
      id="pricing-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">
            {$t('componentsPage.sections.pricingDemo.title')}
          </h2>
          <p class="text-sm text-muted-foreground">
            {$t('componentsPage.sections.pricingDemo.desc')}
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/demos/PricingDemo.svelte</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-4 dark:bg-muted/15 sm:p-6">
        <PricingDemo />
      </div>
    </section>

    <section
      id="faq-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">
            {$t('componentsPage.sections.faqDemo.title')}
          </h2>
          <p class="text-sm text-muted-foreground">
            {$t('componentsPage.sections.faqDemo.desc')}
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/demos/FaqDemo.svelte</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-4 dark:bg-muted/15 sm:p-6">
        <FaqDemo />
      </div>
    </section>

    <section
      id="ssr-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">
            {$t('componentsPage.sections.ssrDemo.title')}
          </h2>
          <p class="text-sm text-muted-foreground">
            {$t('componentsPage.sections.ssrDemo.desc')}
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >{$t('componentsPage.sections.ssrDemo.chip')}</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-4 dark:bg-muted/15 sm:p-6">
        <SsrDemoPanel
          serverTime={data.serverTime}
          serverFactKey={data.serverFactKey}
          magicNumber={data.magicNumber}
        />
      </div>
    </section>

    <section
      id="blog-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">
            {$t('componentsPage.sections.blogDemo.title')}
          </h2>
          <p class="text-sm text-muted-foreground">
            {$t('componentsPage.sections.blogDemo.desc')}
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >{$t('componentsPage.sections.blogDemo.codeChip')}</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-6 dark:bg-muted/15">
        <a href="#blog-post-demo" class="block no-underline">
          <Card class="cursor-pointer p-6 transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle>{$t('componentsPage.sections.blogCard.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="mb-2 text-sm text-muted-foreground">
                {$t('componentsPage.demos.blogPost.date')}
              </p>
              <p class="text-base text-muted-foreground">
                {$t('componentsPage.sections.blogCard.excerpt')}
              </p>
            </CardContent>
          </Card>
        </a>
      </div>
    </section>

    <section
      id="blog-post-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">
            {$t('componentsPage.sections.blogPostDemo.title')}
          </h2>
          <p class="text-sm text-muted-foreground">
            {$t('componentsPage.sections.blogPostDemo.desc')}
          </p>
        </div>
        <code
          class="font-mono text-xs font-semibold whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-2 py-1 text-primary"
          >$lib/components/demos/BlogPostDemo.svelte</code
        >
      </div>
      <div class="rounded-xl border border-border bg-muted/40 p-4 dark:bg-muted/15 sm:p-6">
        <BlogPostDemo />
      </div>
    </section>

    <section
      id="contact-demo"
      class="scroll-mt-32 border-b border-border py-10"
      use:reveal={{ stage: 'content' }}
    >
      <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 class="font-h3 text-h3 mb-1 text-foreground">
            {$t('componentsPage.sections.contactDemo.title')}
          </h2>
          <p class="text-sm text-muted-foreground">
            {$t('componentsPage.sections.contactDemo.desc')}
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
          {#if form?.errorKey}
            <div
              class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400"
            >
              {$t(`componentsPage.formErrors.${form.errorKey}`)}
            </div>
          {/if}

          <div class="flex flex-col gap-1.5">
            <Label for="contact-name">{$t('componentsPage.sections.contactDemo.name')}</Label>
            <Input
              type="text"
              id="contact-name"
              name="name"
              bind:value={name}
              required
              placeholder={$t('componentsPage.sections.contactDemo.phName')}
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <Label for="contact-email">{$t('componentsPage.sections.contactDemo.email')}</Label>
            <Input
              type="email"
              id="contact-email"
              name="email"
              bind:value={email}
              required
              placeholder={$t('componentsPage.sections.contactDemo.phEmail')}
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <Label for="contact-message">{$t('componentsPage.sections.contactDemo.message')}</Label>
            <Textarea
              id="contact-message"
              name="message"
              bind:value={message}
              required
              rows={5}
              placeholder={$t('componentsPage.sections.contactDemo.phMessage')}
            />
          </div>
          <Button type="submit" class="w-full sm:w-auto"
            >{$t('componentsPage.sections.contactDemo.submit')}</Button
          >
        </form>
      </div>
    </section>
  </main>
</div>
