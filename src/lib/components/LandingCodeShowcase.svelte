<script lang="ts">
  /** Bloque código estilo Stitch — escapado para no cerrar el script del componente */
  const lt = '<';
  const gt = '>';
  const cScript = `${lt}/script${gt}`;
  const oScript = `${lt}script`;
  const oBtn = `${lt}button`;
  const cBtn = `${lt}/button${gt}`;
</script>

<section class="mx-auto mb-24 max-w-5xl px-6 md:mb-32">
  <div
    class="overflow-hidden rounded-2xl border border-border bg-[var(--inverse-surface)] shadow-2xl dark:border-border"
  >
    <div
      class="flex items-center gap-2 border-b border-white/10 bg-[var(--inverse-surface)] px-4 py-3 dark:border-white/10"
    >
      <div class="size-3 rounded-full bg-destructive"></div>
      <div class="size-3 rounded-full bg-[#a44100]"></div>
      <div class="size-3 rounded-full bg-primary-container"></div>
      <span class="ml-4 font-mono text-xs text-muted-foreground"
        >src/lib/components/Counter.svelte</span
      >
    </div>
    <div class="overflow-x-auto p-6 font-mono text-sm leading-[1.7] md:text-[14px]">
      <pre class="text-[var(--on-primary-container)]"><code class="block whitespace-pre text-left"
          ><span class="text-[#c3c0ff]">{oScript}</span> <span class="text-[#e2dfff]"
            >lang="ts"</span
          ><span class="text-[#c3c0ff]">{gt}</span>
  <span class="text-[#ffb695]">let</span> count = <span class="text-[#b6b4ff]">$state</span>(<span
            class="text-[#b6b4ff]">0</span
          >);
  <span class="text-[#ffb695]">let</span> doubled = <span class="text-[#b6b4ff]">$derived</span
          >(count * <span class="text-[#b6b4ff]">2</span>);

  <span class="text-[#ffb695]">function</span> <span class="text-[#e2dfff]">increment</span>() {'{'}
    count += <span class="text-[#b6b4ff]">1</span>;
  }
<span class="text-[#c3c0ff]">{cScript}</span>

<span class="text-[#c3c0ff]">{oBtn}</span> <span class="text-[#e2dfff]">onclick</span
          >={'{'}increment}<span class="text-[#c3c0ff]">{gt}</span>
  Clicks: {'{'}count} (Doubled: {'{'}doubled})
<span class="text-[#c3c0ff]">{cBtn}</span></code
        ></pre>
    </div>
  </div>
</section>
