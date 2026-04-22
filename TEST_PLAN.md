# TEST_PLAN.md

## Scope

Initial scaffold for the AstralPass end-user documentation site.

This PR adds:
- Starlight configuration for `docs.astralpass.com`
- AstralPass branding
- initial Core and Star Atlas docs pages
- custom 404 page
- repository guidance files (`README.md`, `AGENTS.md`)

## Risks

### 1. Routing and navigation regressions
- Sidebar links may point to missing pages.
- The custom 404 route may conflict with Starlight routing.

### 2. Content structure issues
- Home page may point to stale or incorrect docs paths.
- Newly added docs pages may not be reachable from the intended navigation.

### 3. Build/deploy issues
- Starlight or Astro config may be invalid.
- `site` configuration may be missing or malformed for sitemap generation.
- Branding assets may fail to resolve in production.

### 4. Documentation drift
- README may lag behind the real docs structure.
- AI guidance may diverge from the actual repo setup.

## Validation strategy

### Automated
1. Run `npm run build`
   - verifies content collection validity
   - verifies route generation
   - verifies asset resolution
   - verifies sitemap generation

### Manual review checklist
1. Confirm the sidebar contains the intended Core and Star Atlas sections.
2. Confirm the home page links point to real pages.
3. Confirm the custom 404 page exists and routes cleanly.
4. Confirm README and AGENTS reflect the current repo structure.

## Current gate for this repo

For this initial scaffold, the enforced automated gate is:
- `npm run build`

Future improvements can add:
- link checking
- visual regression or browser smoke tests
- content linting
