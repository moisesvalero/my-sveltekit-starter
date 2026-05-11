<script lang="ts">
  type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'link';
  type Size = 'sm' | 'md' | 'lg';

  type Props = {
    as?: 'button' | 'a';
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    loading?: boolean;
    className?: string;
  };

  let {
    as = 'button',
    href = undefined,
    type = 'button',
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    className = ''
  }: Props = $props();
</script>

<svelte:element
  this={as}
  {href}
  type={as === 'button' ? type : undefined}
  class={`nk-btn nk-btn--${variant} nk-btn--${size} ${className}`.trim()}
  disabled={as === 'button' ? disabled || loading : undefined}
  aria-disabled={as !== 'button' && (disabled || loading) ? 'true' : undefined}
>
  <span class="nk-btn-inner">
    <slot />
  </span>
</svelte:element>

<style>
  .nk-btn {
    --nk-btn-bg: var(--accent, #2563eb);
    --nk-btn-bg-hover: var(--accent-hover, #1d4ed8);
    --nk-btn-color: #ffffff;
    --nk-btn-border: transparent;
    --nk-btn-shadow: 0 10px 26px rgba(99, 102, 241, 0.25);

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-decoration: none;
    border-radius: 999px;
    border: 1px solid var(--nk-btn-border);
    padding-inline: 1.2rem;
    min-height: 40px;
    cursor: pointer;
    background: var(--nk-btn-bg);
    color: var(--nk-btn-color);
    box-shadow: var(--nk-btn-shadow);
    position: relative;
    overflow: hidden;
    transition:
      background-color 0.2s ease-out,
      color 0.2s ease-out,
      box-shadow 0.2s ease-out,
      transform 0.15s ease-out,
      border-color 0.2s ease-out,
      opacity 0.2s ease-out;
  }

  .nk-btn-inner {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding-inline: 0.1rem;
  }

  .nk-btn--sm {
    padding-inline: 0.9rem;
    min-height: 32px;
    font-size: 0.8rem;
  }

  .nk-btn--md {
    padding-inline: 1.2rem;
    min-height: 40px;
  }

  .nk-btn--lg {
    padding-inline: 1.6rem;
    min-height: 46px;
    font-size: 0.95rem;
  }

  .nk-btn--primary {
    --nk-btn-border: rgba(139, 92, 246, 0.45);
  }

  .nk-btn--secondary {
    --nk-btn-bg: var(--bg-soft, #f3f4f6);
    --nk-btn-bg-hover: #e5e7eb;
    --nk-btn-color: var(--text-main, #0f172a);
    --nk-btn-border: rgba(148, 163, 184, 0.6);
    --nk-btn-shadow: none;
  }

  .nk-btn--ghost {
    --nk-btn-bg: transparent;
    --nk-btn-bg-hover: rgba(15, 23, 42, 0.03);
    --nk-btn-color: var(--text-main, #0f172a);
    --nk-btn-border: transparent;
    --nk-btn-shadow: none;
  }

  .nk-btn--outline {
    --nk-btn-bg: transparent;
    --nk-btn-bg-hover: rgba(99, 102, 241, 0.04);
    --nk-btn-color: var(--accent, #1d4ed8);
    --nk-btn-border: rgba(129, 140, 248, 0.7);
    --nk-btn-shadow: none;
  }

  .nk-btn--link {
    --nk-btn-bg: transparent;
    --nk-btn-bg-hover: transparent;
    --nk-btn-color: var(--accent, #1d4ed8);
    --nk-btn-border: transparent;
    --nk-btn-shadow: none;
    padding-inline: 0;
    min-height: auto;
  }

  .nk-btn--link .nk-btn-inner {
    padding-inline: 0;
  }

  .nk-btn:hover {
    background: var(--nk-btn-bg-hover);
    transform: translateY(-1px);
  }

  .nk-btn--secondary:hover,
  .nk-btn--ghost:hover,
  .nk-btn--outline:hover {
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
  }

  .nk-btn--link:hover {
    text-decoration: underline;
    box-shadow: none;
    transform: none;
  }

  .nk-btn:disabled,
  .nk-btn[aria-disabled='true'] {
    opacity: 0.65;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
</style>

