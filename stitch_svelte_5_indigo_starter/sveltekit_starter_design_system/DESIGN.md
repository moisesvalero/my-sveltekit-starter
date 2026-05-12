---
name: SvelteKit Starter Design System
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2ff'
  surface-container: '#f0ecf9'
  surface-container-high: '#eae6f4'
  surface-container-highest: '#e4e1ee'
  on-surface: '#1b1b24'
  on-surface-variant: '#464555'
  inverse-surface: '#302f39'
  inverse-on-surface: '#f3effc'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#58579b'
  on-secondary: '#ffffff'
  secondary-container: '#b6b4ff'
  on-secondary-container: '#454386'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#140f54'
  on-secondary-fixed-variant: '#413f82'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#fcf8ff'
  on-background: '#1b1b24'
  surface-variant: '#e4e1ee'
typography:
  h1:
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h2:
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  subtitle:
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body:
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label:
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    lineHeight: '1.7'
  h1-mobile:
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '6': 24px
  '8': 32px
  '12': 48px
  '16': 64px
  '24': 96px
  '32': 128px
---

## Brand & Style

This design system is built upon a foundation of clarity, precision, and technical sophistication. It draws inspiration from high-end developer tools and SaaS documentation platforms, prioritizing content legibility and functional elegance. 

The aesthetic is "Airy Modernism"—utilizing generous whitespace to reduce cognitive load while maintaining a professional, structured feel. The interface feels lightweight and responsive, using subtle depth and motion to guide the developer's journey. It avoids unnecessary ornamentation, focusing instead on the beauty of well-structured code and information.

## Colors

The palette is strictly controlled to ensure a high-signal environment. 

- **Primary:** Indigo Blue (#4f46e5) is the sole accent. Use it sparingly for primary calls to action, active states, and critical links.
- **Neutrals:** A comprehensive Zinc scale provides the structural framework.
- **Light Mode:** Uses Zinc-50 for subtle section backgrounds and Zinc-100 for borders to maintain a clean, "paper" feel.
- **Dark Mode:** Deep Zinc-950 background with Zinc-900 surfaces. Text scales up to Zinc-50 for maximum readability.
- **States:** Interactive elements shift 10% in brightness/saturation on hover (e.g., Primary Base to Primary Hover).

## Typography

The typography system prioritizes technical clarity.

- **Headlines:** Use **Geist** (or Inter) with tight tracking and bold weights to create a strong visual anchor.
- **Body:** **Inter** is used for its exceptional legibility at small sizes and extensive character support.
- **Monospace:** **JetBrains Mono** is reserved for code blocks, terminal outputs, and small labels to reinforce the developer-centric nature of the project.
- **Muted Text:** Subtitles and secondary descriptions should use a lower-contrast color (Zinc-500 in light, Zinc-400 in dark) to maintain hierarchy.

## Layout & Spacing

This design system utilizes an **8px linear grid system**. 

- **Grid:** A 12-column fixed grid with a max-width of 1200px.
- **Vertical Rhythm:** Sections are separated by generous padding (spacing-24 or spacing-32) to create the "airy" feel.
- **Card Spacing:** Use spacing-6 (24px) for internal padding on cards to ensure content doesn't feel cramped.
- **Mobile Adaptations:** At the 768px breakpoint, reduce section padding to spacing-12 and horizontal margins to 16px.

## Elevation & Depth

Hierarchy is established through soft ambient shadows and backdrop filters rather than heavy borders or solid fills.

- **Surfaces:** In light mode, primary surfaces are white (#ffffff). In dark mode, they are Zinc-900, which is slightly lighter than the Zinc-950 background.
- **Shadows:** Use extra-diffused shadows. A "standard" card shadow should be `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`.
- **Blur:** Navigation bars and modals should use a `backdrop-filter: blur(8px)` with a semi-transparent background (Zinc-50/80% for light, Zinc-950/80% for dark).
- **Outlines:** Use 1px subtle borders (Zinc-200 for light, Zinc-800 for dark) to define edges without adding visual weight.

## Shapes

The shape language is soft and approachable, contrasting with the technical typography.

- **Standard Cards:** Use **rounded-2xl** (16px) for main content containers and cards.
- **Buttons & Inputs:** Use **rounded-xl** (12px) for interactive components.
- **Navigation:** The floating navigation bar uses a full pill shape (rounded-full).
- **Code Blocks:** Use **rounded-lg** (8px) to maintain a slightly sharper technical feel.

## Components

### Navigation Bar
- **Style:** Floating pill-style bar.
- **Visuals:** Transparent background with `blur(12px)`, 1px border (Zinc-200), and a soft shadow. 
- **States:** Active links receive a Primary Blue text color and a small 4px dot below the label.

### Buttons
- **Primary:** Solid Indigo Blue, White text. Hover: Indigo-700. Focus: 2px Indigo-500 offset ring.
- **Secondary:** Zinc-100 background, Zinc-900 text. Hover: Zinc-200.
- **Ghost:** Transparent background. Hover: Zinc-100.
- **Shapes:** Always `rounded-xl` with horizontal padding of `spacing-6` and vertical padding of `spacing-3`.

### Cards
- **Structure:** 1px border (Zinc-200), White background, `rounded-2xl`. 
- **Interactive Cards:** On hover, the border should transition to Zinc-300 and the shadow should increase in diffusion.

### Input Fields
- **Base:** Zinc-50 background, 1px Zinc-200 border, `rounded-xl`.
- **Focus:** Border transitions to Indigo-500 with a subtle Indigo-500/10 inner glow.

### Code Blocks
- **Visuals:** Zinc-950 background in both modes. Syntax highlighting uses a curated palette of muted pastels. 
- **Features:** Include a "Copy" button in the top right, appearing only on hover.