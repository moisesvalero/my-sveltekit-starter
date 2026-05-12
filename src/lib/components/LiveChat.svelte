<script lang="ts">
  type Provider = 'crisp' | 'intercom' | 'tawk';

  let { provider = 'crisp' }: { provider?: Provider } = $props();

  const configs: Record<Provider, { src: string; init: string }> = {
    crisp: {
      src: 'https://client.crisp.chat/l.js',
      init: `window.$crisp=[];window.CRISP_WEBSITE_ID="TU_CRISP_ID";`
    },
    intercom: {
      src: 'https://widget.intercom.io/widget/TU_INTERCOM_ID',
      init: ''
    },
    tawk: {
      src: 'https://embed.tawk.to/TU_TAWK_ID/default',
      init: ''
    }
  };

  const cfg = $derived(configs[provider]);
</script>

<svelte:head>
  {#if cfg.init}
    <script>
      {
        cfg.init;
      }
    </script>
  {/if}
  {@html `<script async defer src="${cfg.src}"></` + `script>`}
</svelte:head>
