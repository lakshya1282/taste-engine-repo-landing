# Taste Engine: Site Pack

Everything needed to build the Taste Engine website: site-wide copy, content for all four pages (Landing, How it works, Docs, Install), and two ready-to-paste build prompts.

Anything in [BRACKETS] is something you must fill in or confirm before publishing. Do not invent numbers, testimonials, logos or "works with" claims. Only list agents you have actually tested.

---

## PART A: Site-wide

**Name:** Taste Engine
**Primary tagline:** Give your AI agent taste.
**Alternates:**
- Stop shipping AI-looking websites.
- Your agent builds fast. Now it builds different.

**Navigation (4 items + 1 button):** How it works / Docs / Install / [GitHub] + button "Get the skill"

**Footer:** Taste Engine is a free [confirm: free / open source] agent skill. One text file. No account, no server, no telemetry. [License: confirm] / [GitHub URL] / [Your name or handle]

**Footer note (honesty):** Taste Engine studies public websites for inspiration and never copies their code, text, images or fonts. Seed sites are credited in every project.

**SEO**
- Landing title: Taste Engine: an agent skill for websites that don't look AI-made
- Landing description: A skill for your coding agent that studies real award-winning sites, rolls random design constraints and builds an original website, not another template.
- How it works title: How Taste Engine works: seed, dice, design.md, build
- Docs title: Taste Engine docs: usage, files, dice and gates
- Install title: Install Taste Engine in Antigravity, Claude Code and other agents
- Social card text: "Your AI builds fine websites. They all look the same."

---

## PART B: Page content

### PAGE 1: Landing

**Hero**
- H1: Your AI builds fine websites. They all look the same.
- Sub: Taste Engine is a skill for your coding agent. It studies a real award-winning site, rolls random design constraints, and builds something that doesn't look like a template.
- Primary button: Install the skill
- Secondary button: See how it works
- Micro line: One SKILL.md file. No account. Works with agents that support Agent Skills. [List only tested agents here.]

**Problem section: "You've seen this site"**
- Heading: You've seen this site before.
- Body: A dark background. A gold accent. A serif headline with a wide sans word next to it. Tiny monospace labels. A fake clock. Three big numbers nobody measured. One stock photo in a box.
- Line 2: It isn't bad. It's just the average of the internet. That's what an AI gives you when nobody tells it what to avoid.
- Pull line: Same prompt. Same face. Every time.

**How it works in three steps**
1. **Study.** Your agent opens a randomly picked award-winning site and measures it: real fonts, colors, easing curves, scroll behavior, interactions. It writes everything into a design.md.
2. **Roll.** Dice decide the background, palette logic, type personality, layout skeleton, a motion signature and one hard constraint. No "I like this one" allowed.
3. **Build.** Your idea gets a concept first, then a clean-room build from the design system. Gates check that it's original and not generic before it ships.

Link: See the full pipeline

**What you get (list of outputs)**
- A working site, previewed on desktop and mobile
- `design/design.md`: the seed site's full design document (colors, type, layout, motion catalog)
- `design/tokens.md`: your own design system
- `design/direction.md`: the concept, dice results and what was inherited vs changed
- `design/critique.md`: the scores and the fixes

**Before / after slot**
- Heading: Same prompt. Two runs.
- Caption left: Default agent output. [Use a real screenshot you generated.]
- Caption right: Taste Engine output. [Use a real screenshot from a real run.]
- Note under images: Both made from the same one-line brief: "[paste the exact brief you used]"
- Rule: Only use real screenshots. If you don't have a convincing "after" yet, hide this section until you do.

**Why it's different**
- **It measures, it doesn't guess.** Fonts, colors and animations come from the page itself.
- **It uses randomness on purpose.** Two runs on similar briefs don't converge.
- **It makes you pick an idea first.** The first two ideas are always deleted.
- **It checks itself.** A similarity gate, a slop scan and a side-by-side with real winners.

**Who it's for**
- Developers and vibe coders who ship with AI agents and want it to stop looking like AI
- Designers who want a fast, opinionated first draft to react to
- Founders who need a landing page that doesn't look like everyone else's

**What it won't do (honest limits)**
- It won't clone a site. Concept, copy, media and structure are always new, and a similarity gate enforces it.
- It won't replace a designer's judgment. Treat the output as a strong first draft.
- It can't fully recreate custom WebGL or paid fonts from a seed. It will say what it couldn't measure.
- Runs take a while, because it actually crawls and measures a site.
- It works best when your agent has a browser tool and a terminal.

**FAQ**
- *Is it copying other websites?* No. It studies a seed site the way a designer studies a reference: colors, type scale, motion timing, interaction mechanics. It never reuses text, images, logos, icons, font files or source code, and it must change at least 4 of 6 key dimensions before shipping.
- *Which agents does it work with?* Any agent that supports the Agent Skills format. [List the ones you've tested, e.g. Antigravity.] See the Install page.
- *Does it cost anything?* [Confirm.] Your agent or model may have its own costs.
- *Can I change the dice?* Yes. They're plain lists inside SKILL.md. Edit or add faces.
- *What if the seed site blocks it?* It never bypasses blocks, logins or captchas. It logs the skip and takes the next site.
- *How long does a run take?* Longer than a normal prompt, since it browses, measures and previews. [Add a real timing after you test.]

**Final CTA**
- Heading: Make your next site not look like an AI made it.
- Button: Install Taste Engine
- Small link: Read the docs

---

### PAGE 2: How it works

**Intro**
- H1: How Taste Engine works
- Sub: Ten steps between "I have an idea" and "this doesn't look like a template."

**The pipeline (one block per step, in order)**

1. **Brief.** You give an idea and an audience. The skill pulls out what it is, who it's for, the feeling in the first 3 seconds, the one goal and what it must never look like. It asks at most one question.

2. **Dice.** A terminal script rolls everything that usually defaults to "safe": which gallery and position to take the seed from, which 3 of 5 things to inherit, background lightness, palette logic, type personality, layout skeleton, a motion signature, an extra constraint and an unrelated "wildcard world" to borrow from. The agent doesn't get to reroll because it dislikes a result.

3. **Seed crawl.** The agent opens the picked site like a visitor. It scrolls every page, hovers every interactive thing, and runs small snippets to read the real fonts, colors, CSS variables, keyframes, transitions and scroll settings. It is polite: it reads robots.txt, waits between requests, never logs in and never bypasses a block.

4. **design.md.** Everything it measured goes into one document: color roles and ratios, type table, layout and spacing, components, a motion catalog (trigger, target, from to, duration, ease), the interaction list, media technique, tech stack, why it works, and a "never copy" list. If something can't be measured, it says so.

5. **Reference scan.** Four to six extra sites calibrate its judgment: at least two from unrelated worlds and one weird one. This is how it notices what's overused right now.

6. **Concept.** Before any visual decision, the agent writes five big ideas for your site and deletes the first two, because those are the obvious ones. Then it states one sentence: "This site is a ___ that ___." The seed gives craft, never the idea.

7. **Direction card and mutation plan.** The dice act as mutation operators. Three anchors from the seed are kept nearly intact (for example motion, type hierarchy and spacing). Everything else must change: layout order, background, palette hues, at least one font in the pairing, and the interactions' look.

8. **Clean-room build.** The agent builds from design.md and the tokens, never from the seed's code. It follows the layout skeleton and adds the rolled motion signature. It keeps the first screen to five elements or fewer, bans fake stats, fake clocks and filler labels, and previews in the browser at desktop and mobile widths.

9. **Gates.** Three checks before it ships:
   - *Similarity gate:* at least 4 of 6 dimensions must clearly differ from the seed (concept, section structure, dominant color, type pairing, media, signature interaction).
   - *Slop scan:* a list of first- and second-generation AI design clichés. Each hit costs a point.
   - *Parity test:* your screenshots next to real winners. Could it sit in the same gallery row?
   Then a score out of 40. Pass means 32 or more, nothing below 3, no slop hits. It gets two revision loops, then reports honestly if it still falls short.

10. **Delivery.** You get the site, the design files, the seed credit, the dice results and a list of placeholders to replace.

**Diagram idea for this page:** a horizontal pipeline of the ten steps with the dice drawn as a literal dice icon at step 2, and a "gate" drawn across step 9.

**Inherit vs mutate (table)**

| Always ours | Inherited from the seed (3 of 5, rolled) | Always changed |
|---|---|---|
| Concept, copy, media, logo and icons | Motion language, color relationships, type hierarchy, spacing rhythm, interaction mechanics | Section order, background, at least one font, dominant color |

**"Why dice?" explainer**
- Short copy: Left alone, models drift toward the most probable choice. Dice make the improbable choice happen. Forced constraints are what make two runs different.

**"Why a clean room?" explainer**
- Short copy: Ideas and techniques can be learned. Someone else's code, words and images can't be taken. The build step only reads the design document, never the seed's source.

**CTA:** Install it / Read the docs

---

### PAGE 3: Docs

Layout note: left sidebar with section links, content column, right "on this page" list. This page must be calm and highly readable. Same system as the rest of the site, but with the wild parts turned down.

**1. Quick start**
1. Install the skill (see Install).
2. Open a project folder in your agent.
3. Give it a brief:
   - `/taste-engine design a landing page for a thrift-resale app for college students in India`
   - or in plain words: "Use taste-engine to redesign my portfolio. Audience: startup founders hiring designers."
4. Let it run. It will show you the Direction Card, build the site, preview it and report back.

**2. What to put in your brief**
- What it is (product, service, portfolio, campaign)
- Who it's for (age, culture, where they hang out online, what they already love)
- The feeling in the first 3 seconds
- The one action a visitor should take
- What it must never look like
- Your stack (default: plain HTML, CSS, JS with GSAP and Lenis)

Tip: "Luxury" or "premium" doesn't mean dark and gold. Say what you actually mean.

**3. What it creates**

| File | What it is |
|---|---|
| `design/brief.md` | Your brief, cleaned up |
| `design/dice.md` | The dice results |
| `design/design.md` | The seed site's design document |
| `design/references.md` | Notes on the extra reference sites |
| `design/concept.md` | Five ideas, two deleted, one chosen |
| `design/direction.md` | The Direction Card and mutation plan |
| `design/tokens.md` | Your site's design system |
| `design/critique.md` | Gate results, scores and fixes |
| `design/refs/` | Private study screenshots and text. Git-ignored. Never shipped. |

**4. The dice**

| Die | What it controls |
|---|---|
| Seed source | Which gallery, listing page and position the seed comes from |
| Inherit anchors | Which 3 of 5 things to keep from the seed |
| Background | Light paper, saturated color, mid-tone, chromatic dark, split screen and more |
| Palette logic | A physical object, clashing hues, one opposite accent, fluorescent on muted and more |
| Type personality | Quirky grotesk, wedge serif, condensed poster, variable play, handwritten and more |
| Layout skeleton | Single viewport, horizontal scroll, pinned scene, interactive index, draggable canvas and more |
| Motion signature | Velocity skew, shape masks, physics, cursor as character, WebGL distortion and more |
| Extra constraint | No cards, no top nav, something to throw, max 4 elements on the first screen and more |
| Wildcard world | An unrelated industry to borrow one reference from |

The full lists live in SKILL.md. You can edit them.

**5. Inherit and mutate rules**
- Always new: concept, copy, media, logo and icons.
- Always replaced: section order (by the layout skeleton roll) and background (by the background roll).
- Anchors: keep nearly intact. For color relationships you may keep up to 3 exact hex values, but the dominant surface or main accent must change. For type hierarchy you keep the scale and relationships, but change at least one family in the pairing.
- Non-anchors: must change in kind.

**6. Gates and scoring**
- Similarity gate: 4 of 6 dimensions clearly different.
- Slop scan: each cliché hit costs 1.
- Parity test: side by side with 3 real references.
- Scorecard: eight categories scored 1 to 5. Pass is 32 out of 40 or more, with no category below 3.
- Two revision loops maximum. If it still fails, it says what's weak.

**7. Safety and etiquette**
- Reads robots.txt before fetching anything with the terminal.
- At least one second between requests, about 30 requests per site at most, stops on 403 or 429.
- Never logs in, never bypasses a login wall, captcha or block.
- Saves only text (HTML, CSS, JS) for analysis. Never downloads images, video or font files.
- Never reuses a seed's text, images, logos, icons, font files or code.
- Credits the seed site in the delivery note.

**8. Customizing**
- Add or remove faces from any die in the dice script.
- Edit the banned font list, the banned words list and the slop scan list as you spot new clichés.
- Change the default stack in Phase 1.
- Raise or lower the pass mark.

**9. Troubleshooting**
- *The skill doesn't show up.* Check the folder path is exactly `skills/taste-engine/SKILL.md` (one level deep) and start a new conversation. In Antigravity, look in the Customizations menu.
- *It skipped the crawl.* Say: "Follow the taste-engine phases in order. Start with the dice and the seed crawl."
- *It can't run console snippets.* It falls back to reading page source and marks values as "inferred".
- *The seed was blocked.* That's expected. It logs the skip and takes the next position.
- *The result looks too close to the seed.* The similarity gate should catch this. If not, ask it to mutate the dominant color, structure and type pairing, then re-run the gate.
- *The result still looks generic.* Send the output back to your agent with: "Run the slop fingerprint scan and the parity test and fix the three biggest gaps." Then add whatever it fell back on to the banned lists.

**10. FAQ / Changelog / License**
- Changelog: v1 first draft. v2 measured references, dice, concept-first, gates. v3 seed crawl, design.md, inherit and mutate. [Add dates and future versions.]
- License: [fill in]

---

### PAGE 4: Install

**Intro**
- H1: Install Taste Engine
- Sub: It's one file called SKILL.md. Put it in your agent's skills folder and you're done.

**Step 0: Get the file**
- Download SKILL.md from [GitHub release or repo URL], or clone: `git clone [your repo URL]`

**Tabs (remember the user's last tab selection):**

**Antigravity (IDE or App), all projects**
- Mac / Linux:
```bash
mkdir -p ~/.gemini/config/skills/taste-engine
cp SKILL.md ~/.gemini/config/skills/taste-engine/SKILL.md
```
- Windows (PowerShell):
```powershell
New-Item -ItemType Directory -Force "$HOME\.gemini\config\skills\taste-engine"
Copy-Item SKILL.md "$HOME\.gemini\config\skills\taste-engine\SKILL.md"
```
- Older setups may use `~/.gemini/antigravity/skills/`, which is still supported.

**Antigravity, one project only**
- Put the file at `<your-project>/.agents/skills/taste-engine/SKILL.md`. The older `.agent/skills/` folder name also works.

**Antigravity CLI**
- Global folder: `~/.gemini/antigravity-cli/skills/taste-engine/SKILL.md`
- Or, if your repo is packaged as a plugin: `agy plugin install [your repo URL]`

**Claude Code**
- All projects:
```bash
mkdir -p ~/.claude/skills/taste-engine
cp SKILL.md ~/.claude/skills/taste-engine/SKILL.md
```
- One project: `.claude/skills/taste-engine/SKILL.md`
- Note: the skill works best with a browser tool available (for example a browser extension or browser MCP) plus a terminal.

**Claude app**
- Zip a folder named `taste-engine` that contains SKILL.md, then upload it under Settings, Capabilities, Skills. [Confirm availability on your plan and test this before publishing.]

**Other agents**
- If your agent supports the Agent Skills format, copy the `taste-engine` folder (with SKILL.md inside) into its skills directory. Check your agent's docs for the exact path.
- If it doesn't support skills, paste the contents of SKILL.md into its rules or custom instructions file. Slash commands won't work, but you can say "follow the taste-engine process."

**Optional install script**
```bash
#!/usr/bin/env bash
set -e
NAME=taste-engine
if [ -d "$HOME/.gemini" ]; then
  mkdir -p "$HOME/.gemini/config/skills/$NAME"
  cp SKILL.md "$HOME/.gemini/config/skills/$NAME/SKILL.md"
  echo "Installed for Antigravity"
fi
if [ -d "$HOME/.claude" ]; then
  mkdir -p "$HOME/.claude/skills/$NAME"
  cp SKILL.md "$HOME/.claude/skills/$NAME/SKILL.md"
  echo "Installed for Claude Code"
fi
```
Tell people to read it before running it.

**Verify it worked**
- In Antigravity, open the Customizations menu in the agent panel and look for `taste-engine`.
- Start a new conversation and type `/taste-engine`, or ask: "Which skills do you have?"
- Quick test: `/taste-engine design a landing page for [any idea]`

**Requirements**
- An agent that supports skills (or a rules file)
- A browser tool (strongly recommended) and terminal access
- Internet access for the crawl

**Update:** Download the new SKILL.md and copy it over the old one. Start a new conversation.
**Uninstall:** Delete the `taste-engine` folder.

**Safety note box:** Taste Engine makes your agent browse public websites and run small scripts in the terminal. It reads robots.txt, goes slowly, and never logs in or bypasses blocks. Your agent's own permissions still apply. Review commands before approving them.

---

## PART C: Build prompts

### Prompt A (use this if you've installed the skill)

Put this file in your project as `content.md`, open the folder in Antigravity, and paste:

```
/taste-engine

Design and build the website for Taste Engine itself. Use content.md as the
single source of truth for all copy. Do not rewrite or shorten it, but you may
fix typos and trim for layout.

THE IDEA
Taste Engine is a free agent skill (one SKILL.md file) that makes AI coding
agents build original, award-level websites instead of templates. This site
sells the idea and gets people to install it.

AUDIENCE
Developers, vibe coders, designers and founders aged 18 to 30 who ship with
AI agents (India and global). They have good taste and low patience. They
already know what AI-looking design looks like and hate it.

FEELING IN 3 SECONDS
"Whoever made this has taste, and this thing might actually fix my agent."

GOAL
Click "Install the skill" and copy the install command.

NEVER
Dark + gold luxury template, generic SaaS template, gradient blobs, fake stats,
fake logos, fake testimonials, stock photos. The site must prove the pitch by
not looking AI-made itself.

PAGES (static site, plain HTML/CSS/JS with GSAP and Lenis unless you decide
otherwise, one shared design system):
1. Landing (/)
2. How it works (/how-it-works)
3. Docs (/docs)
4. Install (/install)

PAGE REQUIREMENTS
- Shared nav with the 4 links and a "Get the skill" button, shared footer.
- Landing: hero, problem, 3 steps, outputs, before/after slot, why different,
  who it's for, honest limits, FAQ, final CTA.
- How it works: the ten-step pipeline as an interactive or scroll-driven
  experience, with the dice and the gates made visible. Include the
  inherit-vs-mutate table.
- Docs: calm and highly readable. Sticky sidebar with scroll-spy, "on this
  page" list, copy buttons on every code block, tables rendered cleanly.
  Same design system as the other pages, with the wild parts turned down.
- Install: OS-aware tabs (Antigravity, Antigravity workspace, Antigravity
  CLI, Claude Code, Claude app, Other agents), remembers the last tab, one-click
  copy on every command, Windows and Mac/Linux variants, a "verify it worked"
  checklist.
- Responsive and designed for mobile, not just stacked.
- Accessible: semantic HTML, focus states, contrast, reduced-motion fallback.
- Per-page <title>, meta description and Open Graph tags from content.md.
- Fast: no heavy images on the landing page. Prefer CSS, SVG and canvas.

CONTENT RULES
- No invented numbers, testimonials, logos, user counts or "works with"
  claims. Anything in [BRACKETS] in content.md is a placeholder: render it as
  a clearly marked TODO chip and list all of them at the end.
- Before/after: build the slot and leave marked placeholders. I will add real
  screenshots.

Run the full taste-engine process (dice, seed crawl, design.md, concept,
direction card, clean-room build, gates). Do not ask me questions. State your
assumptions and keep going. When finished, tell me the seed site, the dice
results, the score, where to preview the site, and the list of placeholders.
```

### Prompt B (use this if the skill isn't installed in that agent yet)

```
Build a 4-page static website (Landing, How it works, Docs, Install) for
"Taste Engine", a free agent skill that makes AI coding agents build original
websites instead of templates. Use content.md as the only source of copy.
Anything in [BRACKETS] is a placeholder: show it as a TODO chip.

AUDIENCE: developers, vibe coders, designers and founders aged 18 to 30 who ship
with AI agents. They have taste and low patience.
FEELING: "Whoever made this has taste."
GOAL: click Install and copy a command.

PROCESS (follow in order, do not skip):
1. Open 6 recent award-winning sites (Awwwards Sites of the Day, Godly) in the
   browser, at least two from non-tech worlds (fashion, record labels, indie
   games, art publishers). For each, measure real fonts, colors, easing, scroll
   behavior and interactions. Write them into design/references.md.
2. Write 5 big concepts for the site. Delete the first two. Pick one and state
   it as "This site is a ___ that ___."
3. Choose a design system that is NOT dark + gold, NOT purple gradient, NOT
   serif display + tiny mono labels, NOT Inter/Poppins/Space Grotesk. Find
   fonts by browsing foundries, not from memory.
4. Build with a distinctive layout (not hero + logos + 3 cards + CTA), real
   motion (scroll-driven, cursor or physics), and at least two interactions
   a visitor wants to play with. First screen: 5 elements max.
5. Docs page must be calm and readable: sticky sidebar, scroll-spy, copy
   buttons on code blocks. Install page needs OS-aware tabs that remember the
   last choice and one-click copy.
6. Preview in the browser at 1440px and 390px, fix bugs, then critique your own
   work against the award sites you studied. Fix the 3 biggest gaps.

RULES: no fake stats, logos, testimonials or user counts. No stock photos.
Accessible, responsive, reduced-motion fallback, per-page meta tags.
Do not ask me questions. State assumptions and keep going.
```

---

## PART D: Repo and launch checklist

Suggested repo layout:
```
taste-engine/
  SKILL.md        (the v3 skill)
  README.md       (3-line pitch + install commands + link to the site)
  install.sh      (the optional script above)
  LICENSE         ([choose one])
  site/           (the built website)
```

Before launch:
- [ ] Test the skill in every agent you plan to list as supported
- [ ] Replace every [BRACKET] in this file
- [ ] Add real before/after screenshots and the exact brief you used
- [ ] Add a real run time to the FAQ after timing a run
- [ ] Confirm the license and the "free" claim
- [ ] Verify each install path on a clean machine (or a fresh user account)
- [ ] Host as a static site (GitHub Pages, Netlify or Vercel)
- [ ] Add an Open Graph image made from the hero