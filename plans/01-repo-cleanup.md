# Phase 1 — Repo Cleanup & Standardization

Pure hygiene. No visual or behavioral changes to the site.

## 1. Git hygiene

- [ ] Add a proper `.gitignore` (`node_modules/`, `dist/`, `.DS_Store`, editor junk, env files, sass cache).
- [ ] Untrack what's already committed but shouldn't be: `git rm -r --cached node_modules dist .DS_Store`.
      Files stay on disk; git just stops tracking them. (~4,900 files leave the index.)
- [ ] Keep `.gitattributes` and `CNAME` (custom domain: `joshuagoodman.me`).

## 2. Makefile

Single entry point for every common operation:

| Target | Does |
|--------|------|
| `make help` | List targets (default) |
| `make install` | `npm ci` (falls back to `npm install` when lockfile is out of sync) |
| `make dev` | Vite dev server |
| `make build` | Typecheck + production build to `dist/` |
| `make preview` | Serve the production build locally |
| `make typecheck` | `tsc --noEmit` |
| `make deploy` | Build + publish `dist/` to the `gh-pages` branch |
| `make clean` | Remove `dist/` and build caches |
| `make nuke` | `clean` + remove `node_modules/` |

## 3. package.json standardization

- [ ] Fix `homepage`: `https://joshuagoodman.me` (currently the wrong doubled-up GitHub URL).
- [ ] Add `typecheck` script; make `build` use it.
- [ ] Remove Codux dependency `@wixc3/react-board` (unused outside Codux itself).
- [ ] Pin the Node version with `.nvmrc` (Node 20 LTS).

## 4. Remove Codux & template leftovers

- [ ] Delete `codux.config.json`.
- [ ] Delete dead components (nothing imports them):
      `work-card-one` … `work-card-six`, `timeline-component-left`, `timeline-comonent-right` (sic),
      `home-projects`, `projects-intro`.
- [ ] Delete stale generated files: `src/index.css.map` (sass build artifact).
- [ ] Strip "created using Codux" template comments where encountered.

## 5. GitHub Pages correctness

- [ ] Add `public/CNAME` so `vite build` copies the custom domain file into `dist/` —
      otherwise `gh-pages -d dist` deploys wipe the domain setting.
- [ ] Add `public/404.html` that redirects to `index.html` (SPA fallback so deep links like
      `/work` don't 404 on GitHub Pages with BrowserRouter).

## 6. README rewrite

Replace the Codux template README with a real one: what the site is, the stack,
`make` commands, deploy story.
