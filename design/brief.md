# Taste Engine: Project Brief

## What it is
Taste Engine is a free, open-source agent skill packaged in a single `SKILL.md` file. It gives AI coding agents (such as Google Antigravity, Claude Code, and other skill-compatible agents) the capability to browse real award-winning websites, measure their design specifications (colors, type, easing curves, motion catalogs), roll random design mutation dice, and construct bespoke, award-level websites with distinct concepts—eradicating the generic "second-generation AI slop" (dark background + gold accent + serif/extended sans + fake counters).

## Audience
- **Demographics:** Developers, vibe coders, digital product designers, and technical founders aged 18 to 30 (India and global).
- **Culture & Hangouts:** GitHub, X/Twitter, Discord, Read.cv, Figma community, Awwwards, Are.na.
- **Mindset:** Extreme impatience with cookie-cutter AI output; high visual literacy; loves raw craft, tactical utilities, open-source tools, and zine/hacker aesthetics; deeply allergic to enterprise SaaS fluff.

## Feeling in the first 3 seconds
*"Whoever made this has authentic taste, unapologetic craft, and this thing might actually cure my agent of building the same generic site."*

## Single Goal
Get the visitor to click "Install the skill", choose their agent, and copy the installation command into their terminal or config.

## What it must NEVER look like
- Dark + gold luxury template
- Generic purple/blue SaaS gradient blobs
- Centered headline with 3 card columns and fake star ratings
- Serif display + tiny uppercase monospace coordinates
- Fake live clocks, status toggles, or made-up statistics
- Stock photos in rounded boxes

## Tech Stack
- Multi-page static architecture:
  - `index.html` (Landing)
  - `how-it-works.html` (How It Works: 10-step interactive pipeline & inherit/mutate system)
  - `docs.html` (Docs: sticky sidebar, scroll-spy, clean codeblocks with copy)
  - `install.html` (Install: OS & agent switcher tabs, one-click copy, verify checklist)
- Plain semantic HTML5 + Modern CSS (Custom Properties, Grid, Flexbox, Clamp)
- CDN libraries:
  - GSAP 3.12+ & ScrollTrigger for precision motion and easing
  - Lenis 1.1+ for smooth momentum scrolling
  - Canvas / WebGL displacement for reactive cursor distortion
  - Custom interactive spatial zone map & rollable logo dice

