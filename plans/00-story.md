# The Story — One Founder Arc, Three Companies

**Thesis of the site:** *"I build products from first idea to first customer."*
The home page proves it three times, in chronological order, as one continuous timeline.
Each section is a company Joshua founded. Each one is a bigger leap than the last.

## The arc

| Year | Company | The leap | Proof |
|------|---------|----------|-------|
| 2021 | **Optionality** | Services → a real business, at 19 | "Every business deserves a chance, no matter how small." Clients across restaurants, retailers, fitness brands in San Dimas / Glendora / La Verne / Covina |
| 2023 | **Finned** | Services → a physical product brand | Precision-machined cylinder mugs, design patent US 29/879,585 (filed Jul 10, 2023), 13.5% conversion, retail distribution, lifetime warranty |
| 2025 | **Dialogica AI** | Product → a venture-scale AI company | Co-founder & CTO. Voice-native legal cognition, local-first AI, AmLaw100 attorneys, 75+ integrations |

The page reads bottom of the arc first (2021) and crescendos at Dialogica —
which lands as the payoff of everything before it, and is where the reader
already knows he is today (the hero says so).

## Copy corrections carried into this redesign

- **Finned is precision-machined (CNC), not "machined by hand."** Kill that line
  everywhere. The story is *engineering precision*: modeled in CAD, machined like
  the engine cylinders that inspired it.
- Finned founded **Jan 2023** (not 2022 — match `workHistory.json`).
- Optionality founded **June 2021**, mission verbatim from the live site:
  *"We believe every business deserves a chance, no matter how small."*

## Page structure (the fix)

```
/            Hero (unchanged positioning, "first idea to first customer")
             ── FOUNDER TIMELINE (one continuous spine, 3 chapters) ──
             2021 · Optionality      (compact chapter)
             2023 · Finned           (medium chapter, product story + video)
             2025 · Dialogica AI     (flagship chapter, 50/50 interactive orb)
             Footer CTA

/work        Full employment history (unchanged role)
/projects    Repos, merged GitHub activity, skills (unchanged role)
/contact     About + contact (unchanged role)
```

The timeline is a real visual spine: one vertical line that runs the length of
the three chapters, with year markers that stick as you scroll. Every chapter
follows the same skeleton so the repetition itself tells the story:

1. Year marker + company lockup
2. One serif statement (the leap)
3. The evidence (media: video/screenshot/product photography)
4. Milestones or capabilities
5. Link out to the living company

Each chapter may tint its cards toward its own brand inside our cream canvas
(Optionality's warm yellow accents, Finned's machined silver/graphite,
Dialogica's maroon) — one design system, three personalities.

## Docs in this plan

| Doc | Contents |
|-----|----------|
| [01-assets.md](./01-assets.md) | Full asset inventory + harvest + optimization pipeline |
| [02-home-timeline.md](./02-home-timeline.md) | Chapter-by-chapter structure and copy direction |
| [03-dia-orb-interactive.md](./03-dia-orb-interactive.md) | Porting the real product orb + scroll choreography |
| [04-implementation.md](./04-implementation.md) | Build order, risks, definition of done |
