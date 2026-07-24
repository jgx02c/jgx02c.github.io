# The Interactive Dia Orb — Porting the Real Product

The Dialogica chapter's centerpiece: a 50/50 split where the right half is the
actual product's orb, rebuilt from the real codebase, performing its real states
as you scroll.

## Source of truth

`~/Documents/GitHub/dialogica/src/sidecar/components/orb/` — **written in
SolidJS** (`class=`, `classList`, `<Show>`), so code cannot be imported
directly into this React app. The plan is a faithful **visual port**: lift the
exact gradients, dimensions, shadows, keyframes, and easing into a small React
component pair, so the portfolio orb is pixel-true to production.

### Extracted visual spec (from `OrbBar.tsx` + `OrbBarStyles.tsx` + `window.config.ts`)

**The orb (sphere):**
- 48px circle (portfolio renders it larger — ~96–120px — same ratios)
- `background: linear-gradient(145deg, #6B2028 0%, #340404 100%)`
- `box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04), 0 2px 4px rgba(0,0,0,.04)`
- Centered `Emblem_White.svg` at ~42% of orb diameter
- Voice activity = an additional box-shadow glow driven by input level
  (portfolio: driven by scroll instead of mic)

**The pill (prompt bar):**
- White surface (`ORB_SURFACE_BG #FFFFFF`), fully rounded, sits beside the orb
- Placeholder in **Ibarra Real Nova, italic, #727272**: *"How can I help you?"*

**Motion system:**
- Master easing: `cubic-bezier(0.28, 0.11, 0.32, 1)`; inner fades 280ms
- Keyframes to port verbatim: `orbPulse` (scale 1→1.06, breathing),
  `orbListeningPulse` (scale 1→1.12), `orbShimmer` (opacity 0.4→0.8),
  `orbGradientRotate` (thinking spinner ring, cream `#F7F1E8` arc, 0.9s),
  `orbContentIn` (pill entrance, scale 0.96→1), quick-actions slide-in
- Emblem ↔ close-icon crossfade: `scale(0.78) rotate(±10deg)` swap, 220ms

## New components (portfolio side)

```
src/components/dia-orb/
  dia-orb.tsx          The sphere: emblem, glow, pulse/listen/think states
  orb-pill.tsx         The prompt bar: typewriter placeholder, send affordance
  orb-showcase.tsx     Pinned 50/50 stage wiring scroll → orb state
  dia-orb.module.scss  Ported keyframes + spec above
```

`OrbShowcase` is a tall scroll container (~300vh) with a sticky inner stage.
`framer-motion` `useScroll` yields progress 0→1; progress maps to a state
machine and to continuous values (glow intensity, pill width) via `useTransform`.

## Scroll choreography

Left column: four narrative beats that swap in sync with the orb's state.
Right column: the orb performing.

| Progress | Orb (right) | Narrative beat (left) |
|----------|-------------|----------------------|
| 0 – 0.25 | **Idle** — orb alone, soft `orbPulse` breathing | "Meet Dia. It lives on the desktop, one keystroke away." |
| 0.25 – 0.5 | **Listening** — pill slides out (`orbContentIn`), glow swells, `orbListeningPulse` | "You talk to it like a colleague." — pill typewrites a real prompt: *"Redline this MSA against our playbook…"* |
| 0.5 – 0.75 | **Thinking** — cream spinner ring (`orbGradientRotate`), shimmer | "It reads, reasons, and drafts — entirely on the machine. Privileged work never leaves." |
| 0.75 – 1 | **Responding** — compact response card slides from the orb (summary-block aesthetic: serif heading, checklist rows) | "And hands back work product: redlines, summaries, logged time." → CTA |

Prompts can rotate per visit ("Log 1.2 hours to the Meridian matter…",
"Summarize yesterday's deposition…") — small detail, big alive-ness.

## Fallbacks & constraints

- `prefers-reduced-motion`: no pinning; render the final composed state
  (orb + pill + response card) as a static lockup.
- Mobile (<768px): no 50/50 — stack the orb stage above the beats, shorten the
  scroll length, or degrade to the static lockup. Decide against real devices.
- The orb is pure CSS/DOM (no canvas/WebGL) — cheap, crisp, GitHub-Pages-safe.
- Requires `Emblem_White.svg` from the Dialogica repo (see asset plan).
