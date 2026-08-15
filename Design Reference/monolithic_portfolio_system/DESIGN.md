---
name: Monolithic Portfolio System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Libre Caslon Text
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 110px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
  label-mono:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  grid-columns: '12'
---

## Brand & Style

The design system is engineered for architectural professionals, emphasizing structural integrity, spatial rhythm, and absolute clarity. The brand personality is authoritative yet restrained, mimicking the permanence of stone and steel.

The visual style is a fusion of **High-Contrast Minimalism** and **Digital Brutalism**. It relies on aggressive whitespace to frame high-resolution architectural photography, treating the UI as a secondary scaffold to the content. Key characteristics include:
- **Structural Tension:** Using extreme scale differences in typography to create visual weight.
- **Architectural Grid:** A rigid, non-negotiable alignment system that reflects blueprints and floor plans.
- **Monochrome Dominance:** A strict lack of hue to focus entirely on light, shadow, and form.

## Colors

This design system utilizes a binary palette to maximize contrast and focus.
- **Primary (Ink):** Pure black (#000000) for all primary text, borders, and structural icons.
- **Secondary (Paper):** Pure white (#FFFFFF) for the base canvas, providing maximum "breathing room."
- **Tertiary (Cement):** A mid-range gray (#666666) used exclusively for metadata, labels, and secondary supporting text to reduce visual noise.
- **Neutral (Surface):** A very light gray (#F2F2F2) used for background blocks or placeholder states, maintaining a soft distinction from the pure white background.

## Typography

The typography strategy relies on the juxtaposition between the traditional, intellectual weight of **Libre Caslon Text** and the clinical, modern precision of **Hanken Grotesk**.

- **Display & Headlines:** Use Libre Caslon Text. Large headings should use tight letter spacing to create a dense, "ink-on-paper" feel.
- **Body & Metadata:** Use Hanken Grotesk. Keep body text sizes slightly larger than standard to ensure readability against the high-contrast background.
- **Micro-copy:** All labels and navigation items should be set in Hanken Grotesk with increased letter spacing and uppercase styling to evoke blueprint annotations.

## Layout & Spacing

The layout is governed by a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid that maintains a generous outer margin, creating a "frame" effect around the work.

- **The Frame:** Desktop screens must maintain a minimum 80px margin. This margin acts as a literal border, reinforcing the portfolio's "gallery" aesthetic.
- **The Rhythm:** All vertical spacing should be multiples of 8px. Use large "breaks" (80px, 120px, 160px) between sections to allow the architectural forms in photos to stand alone.
- **Mobile Reflow:** On mobile, the 12-column grid collapses to 4 columns. Margins reduce to 20px, and large display type scales down significantly to prevent awkward word breaks.

## Elevation & Depth

This design system rejects shadows and blurs. Depth is communicated solely through **Tonal Layering** and **Bold Outlines**.

- **Flat Hierarchy:** All elements exist on the same Z-axis. Physicality is implied through the use of 1px or 2px black borders rather than shadows.
- **Solid Overlays:** When menus or modals appear, they should be solid black or solid white blocks that abruptly cut into the existing layout, reinforcing the "brutalist" philosophy.
- **Photography Depth:** Depth should come from the content (the architectural photos) rather than the UI. The UI remains a flat, two-dimensional map.

## Shapes

The shape language is **Strictly Geometric and Sharp**. 
- **Zero Radius:** No rounded corners are permitted in the design system. Every button, input field, and image container must have 90-degree angles.
- **Structural Lines:** Use 1px black horizontal and vertical lines to separate content sections, mimicking the appearance of drafting paper.

## Components

### Buttons
Primary buttons are solid black rectangles with white, uppercase Hanken Grotesk text. Secondary buttons are white with a 1px black border. There is no hover "glow"; instead, use a simple color inversion (Black → White) on interaction.

### Input Fields
Fields consist of a single 1px black bottom border. Labels are placed above the line in 12px uppercase bold. Error states are indicated by a thicker (2px) border rather than a color change.

### Cards & Image Containers
Images should be treated as structural elements. Containers should never have padding; the image should bleed to the edge of its assigned grid columns. Captions should be placed directly beneath the image, aligned to the left grid line.

### Progress Indicators
Use a simple, thin horizontal line that fills from left to right. Avoid circular loaders or "spinning" icons which clash with the rigid grid.

### Navigation
Vertical navigation is encouraged, placed on the far right or left margin, with text rotated 90 degrees to follow the vertical axis of the screen frame.