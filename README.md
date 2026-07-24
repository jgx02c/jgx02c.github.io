# joshuagoodman.me

Personal site of **Joshua Goodman** — Co-Founder & CTO of [Dialogica AI](https://www.dialogicaai.com).

Built with React 18, TypeScript, Vite, and SCSS modules. Deployed to GitHub Pages on a custom domain.

## Development

Requires Node 20 (see `.nvmrc`).

```bash
make install    # install dependencies
make dev        # start the dev server (http://localhost:5173)
make build      # typecheck + production build into dist/
make preview    # serve the production build locally
make typecheck  # tsc --noEmit
make deploy     # build and publish dist/ to the gh-pages branch
make clean      # remove dist/
make nuke       # remove dist/ and node_modules/
```

`make help` lists all targets.

## Structure

```
src/
  pages/        Route-level pages (Home, Work, Projects, Contact)
  components/   One folder per component (tsx + scss module)
  data/         Content as JSON (projects, work history, home sections)
  assets/       Images, logos, fonts
  styles/       Design tokens and global styles
plans/          Planning docs for the cleanup and redesign
```

## Deployment

`make deploy` builds and pushes `dist/` to the `gh-pages` branch via the `gh-pages` package.
The custom domain (`public/CNAME`) and SPA fallback (`public/404.html`) are copied into the
build automatically.
