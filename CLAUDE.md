# Portfolio — Md Saif Ahmed

My portfolio website. CVs, the master profile and job-hunt notes live in the private repo `../job-pilot`.

## Layout
- `site/` — portfolio website (Astro, static, deployed to GitHub Pages by `.github/workflows/deploy.yml`). All content is in `site/src/data/profile.ts`, mirrored from `../job-pilot/profile/contents.txt`; styles in `site/src/styles/global.css`.
- `site/public/cv/Saif_Ahmed_CV_General.pdf` — the one CV the site offers (the General CV), behind both download links. It is committed here and updated by `../job-pilot/cv/publish.sh`; don't edit it by hand. The tailored CVs stay private in job-pilot.

## Rules
- `../job-pilot/profile/contents.txt` is the single source of truth. Change it there first, then mirror the change into `site/src/data/profile.ts`.
- Don't invent numbers, ranks, metrics or skills. Ask if something is missing.
- For group projects, don't claim specific parts as mine unless contents.txt says so.
- The site omits the phone number on purpose (public page). Don't copy `contents.txt` or anything from `../job-pilot/job-hunt/` into this repo: it is public.
