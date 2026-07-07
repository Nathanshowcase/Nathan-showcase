# Nathan's Showcase — Build Plan

## Handoff block (read this first, every session)

Nathan's Showcase is a live Astro site for Nathan (Brooklyn Technical High School) to
show off his art, product design, and school work. It's deployed on Netlify
(currently `https://scintillating-dasik-107afb.netlify.app/`, confirmed live), auto-deploying
from the `main` branch of `github.com/Nathanshowcase/Nathan-showcase` on every push.

**Chosen approach:** no CMS. Content is added either by hand-editing files on github.com's
own web editor, or by dropping photos in `new-photos-to-add/` and asking Claude to process
them (crop, rotate, redact, write the entry, push live). **Rejected alternative:** Decap CMS —
built once, then abandoned, because it depends on Netlify Identity, which Netlify has stopped
offering to new sites. Also rejecting, for now: building a replacement CMS (e.g. an OAuth-based
one) purely to make Nathan's future editing prettier — the manual workflow already works, and
swapping it out would repeat the exact mistake that killed Decap: adding a moving part before
confirming it's actually needed. Revisit only if Stage 2 proves the manual workflow is
genuinely too painful for Nathan day-to-day (see Risk 3 below).

**Done so far:** homepage with category filters, individual project pages, Chelsea-blue themed
design, 11 projects live, the drop-zone workflow proven across multiple batches.

**What's next:** the two stages below — polish the showcase a bit more, then get Nathan set up
to run it himself. No deadline. No fixed "done" — this plan covers the recurring workflow, not
a finish line.

---

## Stage 1 — Polish pass (visible endpoint: a cleaner address + proof multi-image projects work)

### Step 1.1 — Rename the Netlify site to something readable
**Goal:** replace the random `scintillating-dasik-107afb` address with something like
`nathanshowcase.netlify.app`.
**Where:** Netlify dashboard only (Project configuration → Domain management → Options → Edit
site name). No code changes.
**Verify:** confirmed as of this plan — `scintillating-dasik-107afb.netlify.app` returns 200
(still live), `nathanshowcase.netlify.app` returns 404 (not yet claimed). After renaming, the
new address should return 200.
**The fence:** don't buy a custom domain in this step — that's optional and separate (noted
below, not scheduled). Don't do this step if the old link has already been sent to people you
don't want to re-send a new link to, without checking first whether Netlify keeps the old
address redirecting (unconfirmed — check Netlify's docs or just test it before relying on it).

### Step 1.2 — Prove the multi-image gallery field works
**Goal:** the content model already has an `images` array per project (for a project with
several photos, not just one cover image), but nothing has used it yet. Add it to one real
project.
**Where:** `src/content/projects/<some-project>.md` (add 1–2 filenames to the `images:` list),
matching image files in `public/images/projects/`.
**Verify:** open that project's page on the live site — the extra images should appear in the
gallery grid below the cover image.
**The fence:** don't redesign the gallery layout while doing this — just prove the existing
one works with real data.

---

## Stage 2 — Get Nathan set up to run it himself (visible endpoint: Nathan adds one project solo, with nobody else touching it)

### Step 2.1 — Write a short, teen-friendly guide
**Goal:** a `NATHAN-GUIDE.md` at the repo root — shorter and more casual than the README,
walking through the exact GitHub web-editor clicks (upload image → copy template → fill in
blanks → commit), including the one gotcha already hit once: after pasting into GitHub's
"create file" box, scroll down and confirm the text actually appears before committing — a
paste can silently fail and leave an empty file.
**Where:** new file, `NATHAN-GUIDE.md`, repo root.
**Verify:** read it back as if you've never seen the project — could you follow it with zero
other context?
**The fence:** don't duplicate the full README/CLAUDE.md content — link to them for anything
this guide doesn't need to repeat.

### Step 2.2 — Decide how Nathan gets access
**Goal:** pick one — invite Nathan as a collaborator on the GitHub repo under his own GitHub
account, or hand him the existing `Nathanshowcase` account login.
**Where:** GitHub repo settings (`Settings → Collaborators`) if inviting him separately.
**Verify:** Nathan can log into GitHub and see the repo.
**The fence:** don't skip this decision — "he'll just use my login sometimes" is how access
questions rot. Pick one on purpose.

### Step 2.3 — Nathan does one real project, solo
**Goal:** Nathan follows `NATHAN-GUIDE.md` and adds one project without Nicole or Claude doing
any part of it.
**Where:** github.com, using the guide from 2.1.
**Verify:** the new project appears live on the site, and neither Nicole nor Claude touched a
file to make it happen.
**The fence:** resist the urge to fix mistakes for him during this step — if something goes
wrong, that's real signal (see Risk 3), not a reason to quietly patch it and call it done.

---

## Optional / not scheduled

- **Custom domain** (e.g. `nathanshowcase.com`, ~$12/year) instead of a `.netlify.app`
  address. Nice-to-have, no urgency — do it if it ever comes up naturally, not as a plan step.

---

## Risks and tripwires

1. **Nathan finds the GitHub web editor confusing, same way Nicole's first attempt silently
   failed (empty pasted file).** Tripwire: his Step 2.3 attempt fails or produces a broken
   entry. Fallback: don't add more automation reflexively — sit with him once, in person, for
   the first one, the way troubleshooting happened here.
2. **Renaming the Netlify site (1.1) breaks a link already texted to someone.** Tripwire:
   check whether the old address still redirects before assuming it's safe; if it doesn't,
   confirm nobody still needs the old link before renaming.
3. **The manual workflow turns out to be too tedious for Nathan to actually keep using.**
   Tripwire: after a few real solo attempts (not just the first), if he's avoiding adding
   things because the process is annoying, that's when a real CMS discussion is worth having —
   not before, and not based on a guess.

---

## Updating this plan

Check off / annotate steps as they're completed, and add a line under "Done so far" in the
handoff block when a stage finishes, so this file stays the one place that reflects reality.
