# Home: The Founder Timeline

Home becomes one continuous scroll story. Component work:

- **New** `founder-timeline/` — the spine: a vertical line running through all
  three chapters, a sticky year indicator (small serif numeral that swaps
  2021 → 2023 → 2025 as chapters cross the viewport), and shared chapter
  scaffolding (year marker, lockup, statement, media slot, milestones).
- **Rework** `finned/` into chapter form (copy fixes included).
- **Rework** `dia/` into the 50/50 orb showcase ([03](./03-dia-orb-interactive.md)).
- **New** `optionality/` chapter.
- `HomePage.tsx` becomes: `HomeIntro` → `FounderTimeline` (wrapping the three
  chapters) → footer CTA. Ventures/selected-projects stay retired from home.

Shared chapter skeleton (identical rhythm = the storytelling device):

```
[year on the spine]   [company lockup]
one serif statement — the leap this company represents
[media evidence]
[3–5 milestones]                       [link to the living company]
```

---

## Chapter 1 · 2021 · Optionality — *"The first company"*

**The leap:** a 19-year-old turns "I can build websites" into a real company
with real clients.

- **Statement direction:** *"Founded at 19 to serve the businesses nobody else
  would — because every business deserves a chance, no matter how small."*
- **Media:** framed screenshot(s) of [optionality.biz](https://optionality.biz/)
  (harvested via Playwright), gear artwork (`artboard.png`) as the accent.
- **Milestones:** Founded June 2021 · Six service lines (web, social, tech,
  content, consulting, accessibility) · Clients across restaurants, retail,
  fitness · Serving San Dimas, Glendora, La Verne, Covina.
- **What it taught (one line, sets up Finned):** how to find customers, ship for
  them, and run a business end-to-end.
- **Tint:** Optionality's warm yellow on card accents/milestone markers.
- Compact chapter — roughly half the height of Finned's.

## Chapter 2 · 2023 · Finned — *"The first product"*

**The leap:** from selling services to designing, patenting, manufacturing, and
retailing a physical product.

- **Statement direction:** *"A coffee mug precision-machined like the air-cooled
  engine cylinders that inspired it."* (Explicitly replaces "machined by hand.")
- **Media:** **video first** — Finned site footage as a muted autoplay loop in
  the evidence slot; stills (`ad.jpg`, `render.jpg`, `mug.jpg`) as the milestone
  strip. Variant photography strip (silver / gold / black) if harvested.
- **Milestones (idea → customer, dated):** Jan 2023 concept from the air-cooled
  community · CAD + precision-machined prototypes · Design patent US 29/879,585
  filed Jul 10 2023 · Brand + Shopify launch, 13.5% conversion · Retail
  distribution, lifetime warranty.
- **What it taught (sets up Dialogica):** taking one obsessive idea all the way
  to shelves — supply chain, brand, patents, customers.
- **Tint:** machined silver/graphite accents.

## Chapter 3 · 2025 · Dialogica AI — *"The company"*

**The leap:** everything compounds — the flagship, twice the visual weight of
the other chapters, and interactive.

- **Statement direction:** *"Voice-native AI that thinks alongside attorneys —
  built local-first, so privileged work never leaves the machine."*
- **Media:** the **50/50 interactive orb showcase** — left: scroll-driven
  narrative beats; right: the real product's orb, ported from the Dialogica
  codebase, reacting to scroll (full spec in
  [03-dia-orb-interactive.md](./03-dia-orb-interactive.md)).
- **Below the showcase, condensed from today's Dia section:** capability grid
  (short), metrics row (75+ integrations, AmLaw100, local-first), integration
  logo strip, `dia-onboarding.mp4` as a "see it move" clip, CTA to
  dialogicaai.com.
- **Tint:** full brand treatment — maroon on cream, Ibarra Real Nova headlines.
- Ends the page at the top of the arc; footer CTA follows.

---

## Motion language (whole timeline)

- Spine draws itself in as you scroll (SVG line, `useScroll` progress).
- Year markers pop with the existing `Reveal` primitive; chapters stagger in.
- `prefers-reduced-motion`: spine fully drawn, everything visible, no pinning.
