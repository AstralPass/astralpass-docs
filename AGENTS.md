# AGENTS.md

## Project

This repository contains the end-user documentation site for AstralPass.

- Framework: Astro Starlight
- Deployment target: Cloudflare Pages
- Production domain: `docs.astralpass.com`

## Content intent

These docs are for **end users** first.

Prefer:
- practical explanations
- short task-oriented pages
- calm, direct wording
- Star Atlas terms explained in plain English

Avoid:
- internal architecture detail unless it helps users complete a task
- speculative features presented as current behavior
- marketing fluff in place of useful guidance

## Structure

Current primary sections:
- `src/content/docs/core/`
- `src/content/docs/star-atlas/`

Keep the navigation shallow and understandable.
If adding pages, prefer expanding these sections before inventing many new top-level groups.

## Branding

- Reuse the AstralPass branding already in the repo.
- Site logo in Starlight config should use an Astro-managed asset from `src/assets/`.
- Public pages may reference `/public/brand/*` assets directly when needed.

## Workflow

- Run `npm run build` before claiming the docs site is in a good state.
- When changing copy or navigation, check for broken links and awkward page sequencing.
- If adding new sections, update both `astro.config.mjs` sidebar configuration and `README.md` when appropriate.

## Style guidance

Write as if the reader is:
- intelligent
- busy
- not deeply familiar with AstralPass terminology yet

A good page should quickly answer:
1. what this means
2. why it matters
3. what the user should do next
