<script lang="ts">
  import { siteConfig } from '$lib/site-config';
  import { t } from '$lib/i18n';
</script>

<!-- stitch_svelte_5_indigo_starter/sveltekit_starter_landing_page/code.html footer -->
<footer
  class="relative z-10 mt-auto flex w-full shrink-0 flex-col items-center justify-between gap-8 border-t border-outline-variant bg-inverse-surface px-8 py-12 md:flex-row dark:bg-surface-container-lowest"
>
  <div class="flex flex-col gap-2">
    <div class="font-h3 text-h3 font-bold text-surface dark:text-on-surface">{siteConfig.name}</div>
    <p class="font-body-sm text-body-sm text-outline-variant dark:text-on-surface-variant">
      © {new Date().getFullYear()}
      {siteConfig.name}. {$t('layout.footer.builtWith')}
    </p>
  </div>
  <div class="flex gap-8">
    <a
      class="font-body-sm text-body-sm text-outline-variant opacity-80 transition-colors hover:text-surface hover:opacity-100 dark:text-on-surface-variant dark:hover:text-primary"
      href="/components">{$t('layout.footer.documentation')}</a
    >
    <a
      class="font-body-sm text-body-sm text-outline-variant opacity-80 transition-colors hover:text-surface hover:opacity-100 dark:text-on-surface-variant dark:hover:text-primary"
      href={siteConfig.social.github}
      target="_blank"
      rel="noopener noreferrer">GitHub</a
    >
  </div>
</footer>
