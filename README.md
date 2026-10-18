# Md Saif Ahmed — Portfolio

Personal portfolio website.

```
site/                  Portfolio website (Astro, static)
  src/data/profile.ts  All site content
  src/pages/index.astro
  src/styles/global.css
  public/cv/           CV PDFs served as download links
.github/workflows/     GitHub Pages deploy
```

## Website

```sh
cd site
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in site/dist
```

The CV PDFs in `site/public/cv/` are built from LaTeX in a separate private repo and copied here;
commit them like any other change.

### Deploy

Push to `main` on GitHub, then in the repo's **Settings → Pages** set the source to
**GitHub Actions**. The workflow sets the base path automatically
(`/portfolio/` for a project repo, `/` for `saif-sakib.github.io`).
