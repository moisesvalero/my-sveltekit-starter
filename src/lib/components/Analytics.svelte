<script lang="ts">
  const { id = '', src = '' } = $props<{ id?: string; src?: string }>();
</script>

<svelte:head>
  {#if src}
    {@html `<script defer src="${src}" data-domain="${id}"></` + `script>`}
  {/if}
</svelte:head>
