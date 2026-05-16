# Site Review — Corevance.ca

Snapshot read across stack, structure, SEO, code, and recent direction. Findings only — nothing implemented. Date: 2026-05-16.

## What it is

Commercial FRP (fiberglass-reinforced plastic) wall panel supply + install for the GTA. Audience is contractors, facility managers, restaurants, food processing. Class C fire rating + CFIA compliance are the main trust hooks.

## Stack

Next.js 16 / React 19 / Tailwind 4 / TypeScript 5, deployed on Vercel. Modern, lean, no dependency bloat. Geist font via `next/font`. [AGENTS.md](AGENTS.md) flags that this is a not-the-Next-you-know version — APIs differ from training data, so code work should consult `node_modules/next/dist/docs/`.

## Structure

22 routes in the sitemap. Main pages (`/`, `/services`, `/products`, `/pricing`, `/about`, `/estimate`, `/blog`, `/blog/[slug]`) plus 9 hand-written city/product landing pages:

- `frp-installation-{toronto,mississauga,brampton,north-york,scarborough,vaughan,etobicoke}`
- `frp-panels-{etobicoke,vaughan}`

5 shared components in [src/app/components/](src/app/components/): `FloatingProductPanel`, `ColorsAndSizes`, `AccessoriesSection`, `FAQSection`, `MaterialEstimator` (702 lines — calculator).

## SEO

Mostly solid:

- `generateMetadata` / static `metadata` exports on all pages with title, description, OG, Twitter, canonical
- [src/app/sitemap.ts](src/app/sitemap.ts) generates 22 canonical URLs with priorities
- LocalBusiness JSON-LD on root + every city page, with FAQ schema on city pages
- Next/Image with proper `sizes`; alt text present on spot checks

## The 5 things actually worth fixing

### 1. City pages are 9 hand-maintained copies, not a template

~1,850 lines across 9 files that are ~90% structural duplicates. Diffing [src/app/frp-installation-toronto/page.tsx](src/app/frp-installation-toronto/page.tsx) against [src/app/frp-installation-mississauga/page.tsx](src/app/frp-installation-mississauga/page.tsx) already shows schema drift: Toronto has `priceRange` + `openingHoursSpecification`, Mississauga doesn't. Every future copy edit, layout fix, or schema improvement has to be done 9 times.

**Fix:** Convert to one dynamic route (e.g. `src/app/[locationSlug]/page.tsx` with a static `generateStaticParams`) backed by a city data map (name, neighbourhoods, FAQs, optional overrides). Keeps the same URLs and indexability.

### 2. Schema drift between city pages

Concrete instance of (1): Toronto schema is richer than Mississauga schema. Either every city should have the full LocalBusiness + hours + priceRange, or none should. Pick a canonical shape and apply uniformly. Will fall out for free once (1) is done.

### 3. Hero contact form posts to Google Forms with `target="_blank"`

[src/app/page.tsx:53-57](src/app/page.tsx). Submitting kicks the user to a Google "thank you" page in a new tab. Functional but feels duct-taped. Options:

- (a) Keep Google Forms but add inline `fetch` submit + your own thank-you state
- (b) Move to a Next.js server action with a real submit handler and pipe to email/CRM

This is the main conversion surface on the site — worth fixing.

### 4. Hero section has `id="contact"` on the whole section

[src/app/page.tsx:10](src/app/page.tsx). The "Book Your Meeting Today" anchor links to `#contact`, which is the hero itself — meaning clicking it does nothing visible since you're already there. Move the id onto the form card, or rename.

### 5. AGENTS.md warning isn't backed by a CONTRIBUTING doc

[AGENTS.md](AGENTS.md) tells contributors Next.js 16 has breaking changes and to read `node_modules/next/dist/docs/`. Worth a one-page CONTRIBUTING with the most common gotchas you've actually hit (App Router quirks, Tailwind 4 differences, server vs client component rules), so future contributors don't reinvent them.

## Smaller stuff (not urgent)

- Inline `style={{}}` for gradients/heights in [src/app/page.tsx](src/app/page.tsx) — could move to Tailwind arbitrary values, but cosmetic
- `<video preload="none">` is good for LCP; confirm the poster `/frp_smooth.jpg` is sized + optimized
- No `robots.ts` file — relying on metadata defaults, which is fine, but an explicit file is clearer if you ever need to disallow paths
- `MaterialEstimator` at 702 lines is large but justified by feature scope — flag, not a fix

## Verification (when any of the above is acted on)

For (1)/(2) — city page refactor:

1. Build the dynamic route alongside existing pages first; verify rendered HTML matches old pages
2. Hit each city URL locally and diff `<head>` against current prod
3. Validate JSON-LD via Google Rich Results Test on 2–3 city URLs
4. Check `sitemap.ts` still emits all 9 city URLs
5. Only delete the old static pages after the dynamic route is verified on all 9

For (3) — form submit:

1. Submit a test entry from the new flow
2. Confirm it lands in the same Google Form responses sheet (or wherever you redirect)
3. Test on mobile — current `target="_blank"` is especially rough on iOS

For (4) — anchor fix: open homepage, click "Book Your Meeting Today", confirm form scrolls into view.

## Bottom line

Site is in good shape — modern stack, SEO is taken seriously, recent commits show real momentum on local-search strategy. The duplicated city pages are the one structural issue that will compound; the form UX is the one user-facing thing leaking conversions. Everything else is polish.
