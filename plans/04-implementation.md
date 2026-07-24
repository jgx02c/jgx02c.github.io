# Implementation Plan

Build order chosen so every step ships a visibly better page.

## Phase 0 — Copy triage (minutes)
1. Kill "machined by hand" in `finned.tsx`; replace with precision-machined
   framing. Fix Finned founding year to Jan 2023 anywhere it says 2022.

## Phase 1 — Assets (do first; everything downstream consumes them)
2. Copy `Emblem_White.svg` + `dia-onboarding.mp4` from the Dialogica repo;
   compress the video (≤3MB, muted, H.264).
3. Harvest Finned video from finnedmugs.com via Playwright (Shopify defers
   video; 429s need backoff) — or source originals from Joshua if scraping
   stays blocked. Optimize.
4. Playwright screenshots of optionality.biz; optimize `optionality_logo.png`.
5. Re-optimize the stragglers: `dia-hero.png`, `outlook.png`, `word.png`,
   `selfie.png`.

## Phase 2 — Founder timeline scaffold
6. Build `founder-timeline/` (spine, sticky year, chapter scaffold, tint
   system) with the three chapters as placeholder content; wire into
   `HomePage.tsx`.
7. Port the Optionality chapter (new) and rework Finned into chapter form.

## Phase 3 — The orb
8. Build `dia-orb/` per [03-dia-orb-interactive.md](./03-dia-orb-interactive.md):
   static orb + pill first (pixel-match against the real product), then the
   scroll state machine, then reduced-motion/mobile fallbacks.
9. Fold today's Dia walkthrough content into the chapter (condensed grid,
   metrics, integrations, onboarding clip).

## Phase 4 — Verify & ship
10. `make typecheck && make build`; Playwright screenshots at 1440/768/390 wide
    for every chapter state; check total transfer ≤6MB; commit in one go
    (matching the established single-commit style).

## Risks

| Risk | Mitigation |
|------|-----------|
| Solid → React port drifts from the real orb | Port *values*, not vibes: the spec in doc 03 is extracted verbatim from source; screenshot-compare against the product |
| Scroll pinning jank / mobile weirdness | `position: sticky` + framer-motion `useScroll` only (no scroll-hijack libs); degrade to static lockup below 768px |
| Finned video unobtainable (429s persist) | Chapter is designed stills-first with a video slot — ships either way |
| Page weight creep from video | Lazy-load all below-fold media; poster frames; hard 6MB budget in the verify step |

## Definition of done

- Home reads as one timeline: 2021 → 2023 → 2025, spine connecting all three.
- Dialogica chapter has a working scroll-interactive orb that matches the
  product visually and respects `prefers-reduced-motion`.
- No "machined by hand" anywhere. Finned dates correct.
- Optionality chapter exists with real copy from the live site.
- Typecheck + build clean; screenshots verified at three widths.
