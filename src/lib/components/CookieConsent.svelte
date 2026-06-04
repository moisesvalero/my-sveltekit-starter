<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { resolve } from '$app/paths';
  import { t } from '$lib/i18n';
  import { toast } from '$lib/stores/toast';
  import { Button } from '$lib/components/ui/button';

  let show = $state(false);

  onMount(() => {
    if (typeof localStorage !== 'undefined' && !localStorage.getItem('cookies_accepted')) {
      setTimeout(() => (show = true), 800);
    }
  });

  function acceptAll() {
    localStorage.setItem('cookies_accepted', 'all');
    show = false;
    toast($t('layout.cookies.savedAll'), 'success');
  }

  function acceptNecessary() {
    localStorage.setItem('cookies_accepted', 'necessary');
    show = false;
    toast($t('layout.cookies.savedNecessary'), 'info');
  }
</script>

{#if show}
  <div class="cookie-banner" transition:fade={{ duration: 300 }}>
    <div class="cookie-content">
      <p>
        {$t('layout.cookies.message')}
        <a href={resolve('/politica-cookies')}>{$t('layout.cookies.policy')}</a>.
      </p>
      <div class="cookie-actions">
        <Button variant="secondary" size="sm" onclick={acceptNecessary}>
          {$t('layout.cookies.necessary')}
        </Button>
        <Button size="sm" onclick={acceptAll}>{$t('layout.cookies.all')}</Button>
      </div>
    </div>
  </div>
{/if}

<style>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9997;
    background: var(--bg-main, #fff);
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding: 1rem 1.5rem;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);
  }
  .cookie-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .cookie-content p {
    font-size: 0.85rem;
    color: var(--text-secondary, #6b7280);
    margin: 0;
  }
  .cookie-content a {
    color: var(--primary);
    text-decoration: underline;
  }
  .cookie-actions {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }
</style>
