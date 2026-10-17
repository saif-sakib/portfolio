# CV & Portfolio Workspace — Md Saif Ahmed

This folder holds my CVs and my portfolio website for job applications.

## Layout
- `profile/contents.txt` — **master profile, the single source of truth.** Every fact (contests, ranks, roles, dates, projects, skills, links) lives here first.
- `cv/src/*.tex` → `cv/pdf/*.pdf` — the five CVs (below). Build with `./cv/build.sh [General|...]`.
- `site/` — portfolio website (Astro, static, deployed to GitHub Pages by `.github/workflows/deploy.yml`). All content is in `site/src/data/profile.ts`, mirrored from `contents.txt`; styles in `site/src/styles/global.css`. `pnpm build` copies `cv/pdf/*.pdf` into `site/public/cv/` (gitignored).

CVs:
- `Saif_Ahmed_CV_General.tex/.pdf` — general CV (SWE + CP + security).
- `Saif_Ahmed_CV_Software_Engineering.tex/.pdf` — full-stack/SWE focus; CP condensed at the bottom.
- `Saif_Ahmed_CV_Cybersecurity.tex/.pdf` — CTFs, security roles, BruteBuddy, secure-dev skills.
- `Saif_Ahmed_CV_DevOps.tex/.pdf` — cloud hosting, CI/CD, containers, monitoring (Hasnahena, QuestBoard CI, HallBridge CD, MCC Docker).
- `Saif_Ahmed_CV_AI_ML.tex/.pdf` — LLM integration (Claude API), Python tooling, algorithms. Thinnest variant; strengthen it as real AI/ML work is added to contents.txt.

## Rules
- **Never delete or drop facts from `contents.txt`.** Add new info there; mark outdated values instead of removing them.
- When updating a CV, take facts from `contents.txt`, not from another CV. If a CV conflicts with `contents.txt`, `contents.txt` wins.
- Don't invent numbers, ranks, metrics or skills. Ask if something is missing.
- Only my own teams' results belong in `contents.txt` (my team names are listed there).
- For group projects, don't claim specific parts as mine unless contents.txt says so.
- Ranks: CVs use my rank "excluding BDOI teams" for ICPC Dhaka Regional; the official standings rank is recorded alongside it.
- All five CVs share one style file, `cv/src/saifcv.sty` (Charter body, TeX Gyre Heros headings, navy accent; macros `\cvheader`, `\highlights`/`\stat`, `\entry`, `results`, `skills`). Change layout there, not in individual CVs. Each CV follows the same order: header → summary → highlight strip → sections.
- Every CV must stay **one page**. `./cv/build.sh` runs `pdflatex -interaction=nonstopmode` into `cv/pdf/`, checks the page count with `pdfinfo`, and deletes `*.aux *.log *.out`.
- When `contents.txt` changes, update `site/src/data/profile.ts` too. The site follows the same fact rules as the CVs; it omits the phone number on purpose (public page).
- Section titles are uppercased, so the colour names are also defined in UPPERCASE (`ACCENT`, `LIGHTGRAY`); keep both versions.

## Open TODOs (from contents.txt)
- Hasnahena: number of live members/transactions, if it can be published. Source repo: `../hasnahena` (docs/ has architecture, deployment, testing, scaling).
- MCC website: my own contribution (local clone at `../mcc_website`; `git log --author` can show it).
- Other local repos next to this folder: `../questboard`, `../content-automation-202605` (JBC), `../Bup-Hackathon`, `../HallBridge`, `../Code_Library`.
- KUET IUPC 2025 rank: my notes say 88th, the standings say 89th.
