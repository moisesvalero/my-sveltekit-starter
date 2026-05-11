<script lang="ts">
  const { provider = 'crisp' } = $props<{
    provider?: 'crisp' | 'intercom' | 'tawk';
  }>();

  const configs = {
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

  const cfg = configs[provider];
</script>

<svelte:head>
  {#if cfg.init}
    <script>{cfg.init}</script>
  {/if}
  {@html `<script async defer src="${cfg.src}"></` + `script>`}
</svelte:head>
