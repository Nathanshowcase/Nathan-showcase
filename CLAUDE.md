# Nathan's Showcase

A website for Nathan (Brooklyn Technical High School) to showcase his work: art, images, and
product design projects. Not a formal college-admissions portfolio — a flexible showcase he
controls, with room to grow into whatever he wants it to be (and eventually run himself).

## Stack

- **Astro** — static site framework, builds to plain HTML/CSS. Fast, simple, good fit for an
  image-heavy showcase site.
- **Decap CMS** — a no-code editor at `/admin` on the live site. Lets Nathan add/edit projects
  and upload images through a form, without touching code.
- **Netlify** — hosting. Auto-deploys the live site every time changes are pushed to the `main`
  branch on GitHub.
- **GitHub** — stores the code (`Nathanshowcase/Nathan-showcase`) and triggers Netlify deploys.

## Commands

- `npm run dev` — run the site locally at http://localhost:4321 to preview changes before pushing.
- `npm run build` — build the production version into `dist/` (this is what Netlify runs).
- `npm run preview` — preview the built `dist/` output locally.

## Where things live

- `src/content/projects/` — one file per showcased project (Decap CMS writes here too).
- `src/pages/` — site pages (homepage, project detail template, etc.).
- `public/` — static files served as-is (favicon, etc.).
- `public/admin/` — Decap CMS admin UI config.

## Don'ts

- Never commit `.env` / `.env.local` — real secrets never go in a committed file, ever.
- Don't hand-edit files under `src/content/projects/` and expect Decap CMS's UI to "know" —
  it reads/writes the same files, so either editing method is fine, just don't fight each other
  mid-edit.
- Don't rename or restructure `src/content/projects/` fields without also updating
  `public/admin/config.yml` — Decap's form fields must match the content schema exactly.

## Before saying "done"

- `npm run build` completes with no errors.
- The change is visible when running `npm run dev` and clicking through locally.
- Changes are committed and pushed to `main` — check the Netlify deploy succeeds (Netlify
  dashboard shows "Published"), not just that the push succeeded.
