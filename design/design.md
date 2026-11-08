# Seed Design Document
SOURCE: https://www.agrumeafarm.it/ | GALLERY: awwwards.com Sites of the Day archive (Position 4) | DATE CRAWLED: 2026-11-08 | PAGES VISITED: ['/', '/chi-siamo', '/prodotti']

## 1. Concept and voice
- **Big idea in one sentence:** An artisanal Sicilian citrus and gourmet preserve farm turned into a visceral, tactile digital showcase blending Mediterranean heritage with cutting-edge 3D WebGL jar physics.
- **Tone of copy:** Artisanal, visceral, unhurried; recurring patterns of provenance storytelling ("Dalla terra al barattolo", "Sole, terra, agrumi") with zero corporate buzzwords.

## 2. Color system
| Token/role | Hex | Approx. share of screen | Used for |
|---|---|---|---|
| `--color-white` (paper surface) | `#fdf3eb` | 65% | Primary warm organic background canvas |
| `--color-border` (oxblood / terracotta) | `#762530` | 20% | Structural borders, editorial typography, framing lines |
| `--color-orange` (blood orange accent) | `#e94e1b` | 10% | Interactive CTA pills, active indicators, hover highlights |
| `--color-yellow` (citron accent) | `#f39200` | 5% | Secondary badges, sun stamps, product highlights |

- **Contrast structure:** Warm eggshell paper ground (`#fdf3eb`) with deep earthy oxblood typography and hairline structural borders (`#762530`), with blazing citrus accents (`#e94e1b`) reserved strictly for interactions.
- **Overlays/Blend modes:** Natural grain overlay, multiply blend modes on fruit cutouts, subtle canvas vignetting.

## 3. Typography
| Role | Family | Size (clamp or px) | Weight | Line-height | Tracking | Case |
|---|---|---|---|---|---|---|
| Display / Big Hero | `ivymode` (serif) | `clamp(4rem, calc(2.9rem + 11vw), 999999px)` | 400 | 1 | -0.02em | Normal |
| Section Headline | `ivymode` | `clamp(2.5rem, calc(1rem + 8vw), 999999px)` | 400 / 600 | 1.1 | -0.01em | Normal |
| Editorial Subheads | `ivystyle-sans` | `2rem` | 500 | 1.2 | 0 | Normal |
| Body / Paragraph | `ivystyle-sans` | `1rem` (16px) | 400 | 1.45 | 0.01em | Normal |
| Labels / Metadata | `ivystyle-sans` | `0.875rem` (14px) | 600 | 1.3 | 0.05em | Uppercase |

- **Scale ratio:** ~1.414 (Augmented Fourth) with extreme hero clamps.
- **Signature typographic detail:** High-contrast editorial pairing between warm human serif display and condensed geometric grotesque accents with generous tracking on labels.

## 4. Layout and spacing
- **Grid:** 12-column flexible fluid CSS grid, `--grid-gap-x: clamp(12px, 1.45vw, 30px)`, `--container-padding: clamp(30px, 2vw, 40px)`.
- **Spacing scale:** `--space-s: 2.5rem`, `--space-xs: 3.75rem`, `--space-l: 6.25rem`, `--space-xl: clamp(6rem, 12.5rem, 999999px)`.
- **Section structure in order:**
  1. *Hero Viewport:* Pinned 3D rotating preserve jar with radial typography arc and floating citrus cuts.
  2. *Story Arc:* Split grid with sticky narrative panel on left and scrolling archival photos on right.
  3. *Product Carousel / Showcase:* Horizontal card drag rail with tactile physics and hover-lift.
  4. *Artisanal Method:* Full-bleed process grid with typography marquee.
  5. *Footer:* Monumental oversized typography marquee with newsletter seal and origin badge.

## 5. Components
- **Buttons / Pills:** Oval capsules with 1px border (`var(--color-border)`), magnetic pull on cursor hover, color-fill sweep on pointer-enter.
- **Navigation:** Floating pill bar offset by `clamp(20px, 2vw, 30px)` from top, with custom animated disc/diamond toggle icon.
- **Product Cards:** Framed cards with 15px rounded corners (`--border-round: 15px`), depth elevation, and interactive 3D parallax tilt.
- **Cursor:** Custom interactive circular follower expanding into "DRAG" or "VIEW" badge over active sectors.

## 6. Motion spec
- **Libraries & Config:** GSAP 3, ScrollTrigger, Lenis smooth scroll (`lerp: 0.1`, `smoothWheel: true`), Three.js for 3D jar rendering.
- **Easing library (measured from CSS variables):**
  - `--ease-out-expo: cubic-bezier(.16, 1, .3, 1)` (used for entrance reveals & hero elements)
  - `--ease-soft: cubic-bezier(.22, 1, .36, 1)` (used for hover transitions & smooth state changes)
  - `--ease-premium: cubic-bezier(.645, .045, .355, 1)` (used for curtain page transitions & jar spins)
  - `--ease-don-expo: cubic-bezier(.19, 1, .22, 1)`
  - `--ease-don-power: cubic-bezier(.165, .84, .44, 1)`
- **Timing library:**
  - Page transition duration: `1.8s`
  - Page cover lift: `975ms`
  - Element fade / entry: `350ms - 450ms`
  - Hover response: `250ms`
- **Animation catalog:**
  | # | Trigger | Target | Properties from -> to | Duration | Ease | Notes |
  |---|---|---|---|---|---|---|
  | 1 | Load | Hero jar 3D | scale: 1.25 -> 1.0, y: 120px -> 0px | 1.8s | `--ease-premium` | Central hero entrance |
  | 2 | Load | Hero headline letters | y: 100%, opacity: 0 -> y: 0%, opacity: 1 | 1.2s | `--ease-out-expo` | Staggered 0.04s per word |
  | 3 | Scroll | Story photos | y: 60px -> -60px (parallax) | scrub | linear | ScrollTrigger parallax |
  | 4 | Scroll | Citrus cutouts | rotation: 0deg -> 45deg, scale: 0.9 -> 1.1 | scrub | linear | Continuous scrub |
  | 5 | Hover | Pill buttons | background: transparent -> color-fill, letter-spacing: 0 -> 0.05em | 0.3s | `--ease-soft` | Snappy interactive feel |
  | 6 | Hover | Product cards | y: 0 -> -8px, shadow blur: 0 -> 20px | 0.35s | `--ease-soft` | Tactile lift |
  | 7 | Click | Nav toggle | diamond icon scale: 0 -> 1.2 -> 1.0, menu drawer slide | 0.5s | `--ease-out-expo` | Morphing icon state |
  | 8 | Scroll | Marquee banner | xPercent: 0 -> -50% | scrub: 1 | linear | Infinite ticker scrub |

- **Reduced-motion behavior:** Animations disabled via `@media (prefers-reduced-motion: reduce)`, transitions set to `0ms`, static display of all products.

## 7. Interaction catalog
- **Custom Cursor Follower:** Follows mouse with inertia, scales up 3x on interactive elements with text labels.
- **3D Jar Drag / Orbit:** Visitor can click-drag the central 3D jar to spin 360 degrees.
- **Smooth Horizontal Rail:** Drag-to-pan gallery on product listings with momentum glide.
- **Magnetic Nav Toggle:** Header pill pulls toward pointer when within 40px radius.

## 8. Media treatment
- Highly art-directed product cutouts composited with Three.js WebGL lighting.
- Halftone grain overlay layered over canvas to evoke physical Sicilian paper packaging.

## 9. Tech and performance
- **Stack:** Nuxt 3, Vue 3, Three.js, GSAP + ScrollTrigger, Lenis.
- **Strengths:** Silky smooth scrolling, impeccable frame pacing, tactile micro-delights.

## 10. Why it works
1. **Measured Craft:** Every transition uses deliberate non-standard cubic-bezier easings (`.16, 1, .3, 1`), creating an organic snap.
2. **Editorial Weight:** Heavy typography anchor creates instant authority without feeling stuffy.
3. **Tactile Cohesion:** Palette feels like real Mediterranean sun, soil, and orange zest.
4. **Hero Presence:** First screen has a singular massive focal point with zero competing widget clutter.
5. **Momentum:** Lenis smooth scroll combined with scrubbed parallax makes every gesture feel weightless.

## 11. Never copy
- Brand name "Agrumea Farm", logo mark, Sicilian copy texts, custom jar 3D assets, proprietary IvyMode/IvyStyle web fonts, and Nuxt application bundle source.

