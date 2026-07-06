# Nathan's Showcase

A website for Nathan to showcase his art, images, and product design work from Brooklyn
Technical High School — built to be flexible, not a fixed "portfolio" template, and designed
so he can eventually run it himself without needing to touch code.

## Running it locally

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

## Adding a new project

No coding tools needed — do this straight from github.com:

1. Upload the image(s) first: go to the `public/images/projects/` folder in the repo on
   github.com → **Add file** → **Upload files** → drag the image(s) in → commit.
2. Copy [project-template.md](./project-template.md), fill in the blanks (title, category,
   the image filename you just uploaded, a short description), and save it as a new file
   inside `src/content/projects/` (also via **Add file** → **Create new file** on github.com).
3. Netlify rebuilds the live site automatically within a minute or two of saving.

See [CLAUDE.md](./CLAUDE.md) for the full stack details and project conventions.
