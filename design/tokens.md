# Design Tokens System (`tokens.md`)

## 1. Typography Tokens
- **Display & Headlines:** `Schibsted Grotesk` (weights 700, 800, 900) via Google Fonts.
- **Human Handwritten / Annotations:** `Caveat` (weights 600, 700) via Google Fonts.
- **Body & Functional UI:** `Schibsted Grotesk` (weights 400, 500, 600).
- **Code & Command Snippets:** `Courier Prime` or `Fira Code` (weight 400, strictly for functional terminal commands, not for fake labels).

```css
:root {
  --font-editorial: 'Schibsted Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-marker: 'Caveat', cursive;
  --font-code: 'Courier Prime', 'Consolas', monospace;

  /* Typographic scale (Fluid clamp scale) */
  --text-hero: clamp(3.2rem, 2rem + 4.8vw, 6.2rem);
  --text-title-1: clamp(2.2rem, 1.4rem + 3.2vw, 4rem);
  --text-title-2: clamp(1.6rem, 1.1rem + 2vw, 2.5rem);
  --text-title-3: clamp(1.25rem, 1rem + 0.8vw, 1.75rem);
  --text-body-lg: clamp(1.1rem, 1rem + 0.3vw, 1.35rem);
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-micro: 0.75rem;

  --lh-tight: 1.05;
  --lh-snug: 1.2;
  --lh-normal: 1.55;
  --lh-relaxed: 1.7;

  --ls-tight: -0.03em;
  --ls-snug: -0.015em;
  --ls-normal: 0em;
  --ls-tracked: 0.06em;
}
```

## 2. Color Palette Tokens
Cool slate/steel monochrome grounded with heavy dark charcoal ink, crisp white elevation surfaces, and a high-voltage electric hyper-orange spot color.

```css
:root {
  /* Surface & Base Ground */
  --color-ground: #eef2f6;          /* Cool technical light gray */
  --color-ground-alt: #e3e8ef;      /* Muted section background */
  --color-surface: #ffffff;         /* Crisp elevated card surface */
  --color-surface-dim: #f5f8fb;     /* Recessed panels */

  /* Text & Ink */
  --color-ink-heavy: #0d1218;       /* Primary intense black-slate */
  --color-ink-body: #2d3744;        /* Legible body text */
  --color-ink-muted: #5e6d82;       /* Secondary notes & metadata */
  --color-ink-faint: #8d9ba8;       /* Muted lines & placeholders */

  /* Structural Borders */
  --color-border: #d2dbe5;          /* Crisp technical divider */
  --color-border-heavy: #0d1218;    /* Stark editorial borders */

  /* The Loud Unexpected Accent (from opposite side of cool wheel) */
  --color-accent: #ff4500;          /* Electric hyper-orange / vermilion */
  --color-accent-hover: #e03a00;    /* Darkened hover fill */
  --color-accent-soft: rgba(255, 69, 0, 0.08); /* Glow & badge ground */
  --color-accent-ring: rgba(255, 69, 0, 0.25);

  /* Tactical Zine Markers */
  --color-marker-yellow: #f59e0b;
  --color-marker-cyan: #06b6d4;
  --color-todo-bg: #fffbeb;
  --color-todo-border: #fcd34d;
  --color-todo-ink: #92400e;
}
```

## 3. Spacing & Layout Tokens
```css
:root {
  --container-max: 1380px;
  --container-pad: clamp(1.25rem, 3vw, 3rem);

  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1.25rem;
  --space-lg: 2rem;
  --space-xl: 3.5rem;
  --space-2xl: clamp(4rem, 6vw, 7.5rem);
  --space-3xl: clamp(6rem, 10vw, 12rem);

  --radius-none: 0px;
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-pill: 9999px;
  
  --shadow-tactile: 4px 4px 0px #0d1218;
  --shadow-tactile-lg: 8px 8px 0px #0d1218;
  --shadow-tactile-accent: 4px 4px 0px #ff4500;
  --shadow-hover: 6px 6px 0px #0d1218;
}
```

## 4. Motion Tokens (Inherited from Seed + Signature WebGL/Canvas)
```css
:root {
  /* Easings (Directly measured from Agrumea Farm) */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-premium: cubic-bezier(0.645, 0.045, 0.355, 1);

  /* Timings */
  --dur-instant: 120ms;
  --dur-fast: 220ms;
  --dur-normal: 400ms;
  --dur-smooth: 700ms;
  --dur-deliberate: 1100ms;

  /* Staggers */
  --stagger-tight: 0.035s;
  --stagger-normal: 0.08s;
}
```

## 5. Reduced-Motion Tokens
When `@media (prefers-reduced-motion: reduce)` is triggered:
- Transitions snap to `0.01ms`.
- Lenis smooth momentum is bypassed.
- WebGL canvas distortion and rotational scrub are disabled.

