# Asset Inventory, Harvest & Optimization

Everything the redesign needs, where it lives today, and how it gets web-ready.
Optimization rule for the whole site: stills go through `sips` (resize ≤1600px,
JPEG q≈82); video gets compressed (H.264, ≤1280px, muted, `playsinline`, target
≤3–4MB) — check for `ffmpeg`, fall back to shortest usable clip if unavailable.

## Dialogica — source: `~/Documents/GitHub/dialogica`

### Already in the portfolio (`src/assets/Dialogica/`)
- `brand/emblem-{maroon,black}.svg`, `brand/logo-full-{maroon,black}.svg`
- `integrations/` — Clio, iManage, MS365, Outlook, Word, Google, Intapp, Aderant
- `dia-hero.png` (1.75MB — regenerate as optimized JPEG during implementation)

### To pull
| Asset | Source path | Use |
|-------|------------|-----|
| `Emblem_White.svg` | `public/assets/` | The orb renders the **white** emblem on the maroon sphere — required for the orb port |
| `dia-onboarding.mp4` (5.9MB) | `public/assets/video/` | Real product footage for the Dialogica chapter; compress to ≤3MB, muted loop |
| Ibarra Real Nova `.ttf` set | `public/fonts/` | Option: self-host instead of Google Fonts (faster, exact brand cut). Decide at implementation |
| Orb visual spec | `src/sidecar/components/orb/` | Not an asset file — a code port, spec'd in [03-dia-orb-interactive.md](./03-dia-orb-interactive.md) |

## Finned — sources: local `src/assets/finned/` + finnedmugs.com

### Already local
- `web/ad.jpg` (304KB) — "Unmistakably Iconic" lifestyle shot
- `web/render.jpg` (66KB) — nickel-plated CAD render (the *design* milestone)
- `web/mug.jpg` (214KB) — product beauty shot
- `finned_logo.png` — script wordmark
- `fnned.png` (385KB) — unreviewed; inspect during implementation, optimize if used
- Originals (`AD-2.png` 4.8MB, `mug.png` 2MB, `nickle_plated.png` 939KB) stay as
  source-of-truth; the site only imports `web/` copies

### To harvest from finnedmugs.com (Shopify)
- **Video assets** — the site hosts product/lifestyle video. Homepage HTML didn't
  expose `.mp4` URLs on first fetch and the CDN answered `429` on retry, so:
  1. Fetch with backoff (or via the rendered DOM with Playwright — video URLs load
     lazily as `deferred-media` on Shopify themes) and pull from
     `cdn.shopify.com/.../videos/…`
  2. **Better:** if Joshua has the original footage locally, drop it in
     `src/assets/finned/video/` and skip scraping entirely
- Product variant photography (silver, silver/black, gold/black, black) from the
  shop gallery — nice-to-have for a variant strip in the chapter

### Story facts to encode (from the live site + workHistory)
- Air-cooled VW/Porsche heritage; "looks like it came off an engine"
- Precision-machined — **never say "by hand"**
- Design patent US 29/879,585, filed Jul 10 2023
- $91.20 cylinder mug, $9 cup-holder adapter, lifetime warranty, international shipping
- 13.5% conversion on launch; sold and distributed to retailers

## Optionality — sources: local assets + [optionality.biz](https://optionality.biz/)

### Already local
- `optionality_logo.png` (1.8MB — optimize to a small web copy)
- `logos/artboard.png` (195KB, yellow gear artwork — the chapter's visual accent)

### To harvest
- **Playwright screenshots of the live site** (hero + services grid) as the
  chapter's "evidence" media — the company's web presence *is* the product
- Copy, verbatim where possible:
  - Mission: *"We believe every business deserves a chance, no matter how small."*
  - Founded 2021 "to serve others in our local community"
  - Service list: Web Design · Social Media Marketing · Technology · Content
    Creation · Consulting · Accessibility
  - Clients: local restaurants, online retailers, fitness brands
  - Communities: San Dimas, Glendora, La Verne, Covina

## Weight budget

Home page target after this redesign: **≤ 6MB total transfer on first load**,
videos lazy/deferred below the fold, every raster asset behind `loading="lazy"`
except the hero. Current oversized files to fix while we're in here:
`dia-hero.png` (1.75MB), `optionality_logo.png` (1.8MB), `integrations/outlook.png`
(811KB), `integrations/word.png` (427KB), `selfie.png` (973KB, about page).
