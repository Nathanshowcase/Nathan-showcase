# Nathan's Showcase

A website for Nathan (Brooklyn Technical High School) to showcase his work: art, images, and
product design projects. Not a formal college-admissions portfolio — a flexible showcase he
controls, with room to grow into whatever he wants it to be (and eventually run himself).

## Stack

- **Astro** — static site framework, builds to plain HTML/CSS. Fast, simple, good fit for an
  image-heavy showcase site.
- **Netlify** — hosting. Auto-deploys the live site every time changes are pushed to the `main`
  branch on GitHub.
- **GitHub** — stores the code (`Nathanshowcase/Nathan-showcase`) and triggers Netlify deploys.
  New projects get added directly through github.com's own file editor/uploader (see README) —
  no separate CMS. (We tried Decap CMS first, but it depends on Netlify Identity, which Netlify
  has stopped offering to new sites — removed rather than left half-working.)

## Commands

- `npm run dev` — run the site locally at http://localhost:4321 to preview changes before pushing.
- `npm run build` — build the production version into `dist/` (this is what Netlify runs).
- `npm run preview` — preview the built `dist/` output locally.

## Where things live

- `src/content/projects/` — one markdown file per showcased project.
- `project-template.md` (repo root) — copy this to start a new project entry. Kept outside
  `src/content/projects/` on purpose so it's never mistaken for a real project.
- `public/images/projects/` — where uploaded project images live.
- `src/pages/` — site pages (homepage, project detail template, etc.).
- `public/` — static files served as-is (favicon, etc.).

## Don'ts

- Never commit `.env` / `.env.local` — real secrets never go in a committed file, ever.
- Don't put a new project file directly in `src/content/projects/` with a name starting with
  `_` — the content schema explicitly excludes those (a safety net for stray template-like
  files), so it would silently fail to appear on the site.

## Before saying "done"

- `npm run build` completes with no errors.
- The change is visible when running `npm run dev` and clicking through locally.
- Changes are committed and pushed to `main` — check the Netlify deploy succeeds (Netlify
  dashboard shows "Published"), not just that the push succeeded.
