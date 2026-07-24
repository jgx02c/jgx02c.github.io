# Phase 2 — Portfolio Transformation

Turn a template portfolio into the site you'd expect from the CTO who built dialogicaai.com.

## Positioning

The current site introduces Joshua as a "Contract Software Engineer at Mercor." The new site leads with:

> **Joshua Goodman — Co-Founder & CTO, Dialogica AI.**
> Building a new class of legal cognition. Previously: founder (Optionality, Finned),
> full-stack engineer across AI products, published npm author, systems work in Rust.

Everything on the site is evidence for one claim: *this person conceives, builds, and ships
entire products.*

## Design language

Dialogica's brand is elegant and editorial — big serif-italic statements, generous whitespace,
confident metrics ("$400k recaptured value", "21.5% productivity gain"). The portfolio should
feel like a sibling, not a clone:

- **Theme:** near-black canvas (`#0a0a0b`), warm off-white type, one restrained accent
  (electric blue, echoing the existing brand color, used sparingly).
- **Type:** `Inter` for UI/body, `Instrument Serif` (italic) for display accents —
  the "editorial statement" look. Fluid type scale via `clamp()`.
- **Motion:** `framer-motion` for scroll-reveals and staggered entrances. Subtle only —
  fades, small translates. Respect `prefers-reduced-motion`.
- **Design tokens:** CSS custom properties in one place (`src/styles/`), kill the scattered
  hex values and utility-class soup in `global.scss`.

## Information architecture

Keep the four routes; rebuild what's on them.

### Home `/`
1. **Hero** — name, "Co-Founder & CTO, Dialogica AI", one editorial statement line,
   links (LinkedIn, GitHub, email). No headshot-in-a-circle template energy; typography leads.
2. **Flagship: Dialogica** — full-width feature with the product story and real metrics,
   linking to dialogicaai.com.
3. **Ventures** — Finned (patent filed), Optionality — compact cards, founder-track evidence.
4. **Selected projects** — 3 highlights pulled from projects data, link to `/projects`.
5. **CTA footer** — "Let's build something" + contact.

### Work `/work`
- Timeline restyled to the new language.
- **Add the missing Dialogica AI entry** (Co-Founder & CTO, 2025–present) at the top.
- Fix data typos: "Agust" → "August", "Feburary" → "February", "wether" → "weather".

### Projects `/projects`
- Same data, redesigned cards: cleaner grid, tech tags, hover states, modal kept.
- GitHub contribution graph + skills stay, restyled.

### About/Contact `/contact`
- Short bio told as a narrative (founder path → Dialogica), photo allowed here,
  clear contact block.

## Technical changes

- Add `framer-motion` (already resolvable in the lockfile tree; add as a direct dep).
- Replace `src/index.css` (compiled sass artifact) with a proper global stylesheet imported
  from `main.tsx`.
- `index.html`: real meta description, Open Graph / Twitter tags, favicon, font preloads,
  `theme-color`.
- Remove the unused `react-cursive-handwrite` import in `home-intro`; drop `react-particles` /
  `tsparticles` if nothing uses them after the redesign.
- Keep Microsoft Clarity analytics.

## Definition of done

- `make build` passes (typecheck + vite build).
- Every route renders correctly at desktop and mobile widths.
- Lighthouse-friendly: fonts preloaded, images lazy where offscreen, no layout shift in hero.
- The first screen of the site says "Dialogica AI CTO", not "template portfolio".
