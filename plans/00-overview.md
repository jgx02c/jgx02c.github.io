# Portfolio Overhaul — Overview

**Site:** joshuagoodman.me (`jgx02c.github.io`)
**Owner:** Joshua Goodman — Co-Founder & CTO, [Dialogica AI](https://www.dialogicaai.com)

## The problem

This repo is a 2023-era Codux/Vite template that has drifted:

- **4,843 `node_modules` files and the entire `dist/` build are committed to git.** There is no `.gitignore`.
- No Makefile, no standard entry points; tooling knowledge lives in one person's head.
- Codux leftovers everywhere (`codux.config.json`, `@wixc3/react-board`, template comments).
- `package.json` `homepage` points at the wrong URL (`jgx02c.github.io/jgx02c.github.io` instead of `joshuagoodman.me`).
- ~10 dead components (`work-card-one` … `work-card-six`, orphaned timeline halves, etc.).
- The content is stale: the site introduces Joshua as a "Contract Software Engineer at Mercor" — not as the co-founder & CTO of Dialogica AI. The work history has **no Dialogica entry at all**.
- The design is a generic template look; it should hold up next to dialogicaai.com.

## The goal

A portfolio that reads like it was built by the person who built Dialogica: restrained, confident,
editorial, fast. Dialogica AI front and center as the flagship, everything else as supporting
evidence of range (products shipped, companies founded, an npm package, systems work in Rust).

## Phases

| Phase | Doc | Outcome |
|-------|-----|---------|
| 1. Repo cleanup & standardization | [01-repo-cleanup.md](./01-repo-cleanup.md) | Clean git history going forward, Makefile, standard project hygiene |
| 2. Portfolio transformation | [02-portfolio-transformation.md](./02-portfolio-transformation.md) | The redesigned experience |

Phase 1 lands first as pure hygiene (no visual changes), so it can be committed and verified
independently before the redesign touches anything.
