# Md Saif Ahmed — Portfolio & CVs

Personal portfolio website plus the LaTeX CVs it links to.

```
profile/contents.txt   Master profile — single source of truth for every fact
cv/src/*.tex           CV sources (General, SWE, Backend, Cybersecurity, DevOps, AI/ML)
cv/src/sections/       Sections shared by every CV
cv/pdf/*.pdf           Built CVs (gitignored; CI builds them for the site)
cv/build.sh            Build CVs, check each is at most two pages, clean aux files
site/                  Portfolio website (Astro, static)
  src/data/profile.ts  All site content, mirrored from contents.txt
  src/pages/index.astro
  src/styles/global.css
.github/workflows/     GitHub Pages deploy
```

## Website

```sh
cd site
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in site/dist
```

Run `./cv/build.sh` once first: `pnpm dev`/`build` copy `cv/pdf/*.pdf` into `site/public/cv/` (gitignored),
so the download links always serve the latest built CVs.

To edit content, change `profile/contents.txt` first, then `site/src/data/profile.ts`.

### Deploy

Push to `main` on GitHub, then in the repo's **Settings → Pages** set the source to
**GitHub Actions**. The workflow sets the base path automatically
(`/portfolio/` for a project repo, `/` for `saif-sakib.github.io`).

## CVs

```sh
./cv/build.sh            # all six
./cv/build.sh General    # just one
```
