---
name: SvelteKit Starter Dark
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#b8c4ff'
  on-secondary: '#1a2b6a'
  secondary-container: '#334282'
  on-secondary-container: '#a2b1f9'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b8c4ff'
  on-secondary-fixed: '#001354'
  on-secondary-fixed-variant: '#334282'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  h1:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  h2:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is a high-fidelity, developer-centric environment designed for SvelteKit applications that require a premium, technical aesthetic. It utilizes a **Minimalist-Technical** style, drawing inspiration from high-end developer tools. The UI is characterized by high information density without clutter, relying on strict alignment, subtle borders, and purposeful motion.

The emotional response should be one of precision, speed, and reliability. By utilizing a deep, near-black foundation with vibrant indigo accents, the system creates a focused "cockpit" experience that minimizes eye strain while highlighting critical call-to-actions.

## Colors

This design system uses a deep zinc-based palette to establish a sophisticated dark mode environment. The primary background (#09090b) provides a "void" effect, allowing the surface layers (#18181b) to appear physically elevated through color rather than heavy shadows.

The indigo primary (#6366f1) is the sole driver of attention. On dark surfaces, it is often paired with a secondary, desaturated indigo (#a5b4fc) for non-critical interactive elements. Semantic colors (Success: #10b981, Error: #ef4444, Warning: #f59e0b) should be used sparingly, primarily in small indicators or icons to maintain the monochromatic technical feel of the system.

## Typography

The typography system relies on **Geist** for its neutral, geometric precision and high legibility in dark environments. For data-heavy or technical labels, **JetBrains Mono** is introduced to reinforce the developer-tool aesthetic.

Heading weights remain semi-bold to avoid visual "bleeding" (where light text appears to expand on dark backgrounds). Line heights are generous to ensure readability against high-contrast backgrounds. Use the `label-caps` style for section headers and small metadata to create a distinct hierarchy between structural navigation and content.

## Layout & Spacing

The system follows a strict 12-column fluid grid for main content areas, with a maximum width of 1280px to maintain comfortable reading lines. Layouts should favor "Stack" and "Inset" patterns using an 8pt grid system.

On mobile, margins compress to 16px, and the grid typically collapses to a single column. On desktop, sidebars should be fixed (240px-280px) while the primary content area expands. Components use internal padding following the `stack` variables to ensure a consistent rhythm of whitespace that feels intentional and airy despite the dense information.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** rather than traditional drop shadows. In this system:
1. **Background (#09090b):** The furthest plane.
2. **Surface (#18181b):** Primary cards and containers. These use a 1px solid border (`border`) to define their edges.
3. **Surface-Raised (#27272a):** Modals, popovers, and hovered states.

To simulate "light" in a dark environment, use a subtle top-down gradient on primary buttons and active states. For high-priority elements like active modals, a soft, wide-spread outer glow using the `accent-glow` color may be applied to suggest a neon-like luminance.

## Shapes

The design system utilizes a **Rounded** shape language to soften the technical "edge" of the dark mode. 

- **Standard Elements (Buttons, Inputs):** Use `rounded-xl` (0.75rem / 12px) for a modern, approachable feel.
- **Large Containers (Cards, Modals):** Use `rounded-2xl` (1rem / 16px) to clearly define content groupings.
- **Inner elements:** When nesting elements (e.g., a button inside a card), the inner radius should be 4px smaller than the outer radius to maintain geometric harmony.

## Components

### Buttons
- **Primary:** Solid `#6366f1` background with white text. High-contrast, no shadow.
- **Secondary:** Subtle `#18181b` surface with a `border-strong` outline.
- **Ghost:** No background or border, Indigo text on hover with a 10% opacity indigo background.

### Input Fields
Inputs use the `#09090b` background with a `border` stroke. On focus, the border transitions to the primary indigo with a 2px outer ring of `accent-glow`. Labels are always positioned above the input using the `body-sm` style in `text-secondary`.

### Cards
Cards are the primary organizational unit. They use the `#18181b` surface color and a subtle 1px border. Card headers should be separated by a thin horizontal rule if they contain complex actions.

### Chips & Badges
Chips use a low-contrast background (zinc-800) with `text-secondary`. Status badges (e.g., "Active", "Error") should use a small 6px dot of the semantic color next to the label rather than a full colored background to keep the UI clean.

### Lists
Lists items should have a hover state of `surface-raised` with a transition speed of 150ms. Use the `border` color for dividers between items, ensuring the divider does not touch the edges of the container for a more modern, "inset" look.