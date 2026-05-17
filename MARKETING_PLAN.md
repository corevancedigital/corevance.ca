# Corevance.ca — Zero-Cost Marketing Plan

**Goal:** maximum visibility + qualified inbound for commercial FRP supply & install in the GTA / Ontario, with $0 in paid spend.
**Audience:** general contractors, restaurant owners, food processing FMs, car-wash operators, commercial property managers, architects/designers.
**Trust hooks already in place:** CFIA-accepted, Class C fire rating, same-day GTA delivery, 24-hr quote turnaround.

---

## TL;DR — The 7 highest-ROI moves (do these first)

1. **Claim & saturate Google Business Profile.** Single highest-ROI free channel for a local trade. Get it from "exists" to "best-in-category" within 14 days.
2. **Ship the 10 content-gap blog posts.** SERP gaps are confirmed (see §3). One post a week for 10 weeks.
3. **Build 4 industry-vertical landing pages** (`/frp-for-restaurants`, `/frp-for-food-processing`, `/frp-for-car-washes`, `/frp-for-healthcare`). Bridges the keyword gap and gives sales a per-vertical pitch URL.
4. **Citation blitz: 30 free directories in 30 days.** Same NAP (name/address/phone) everywhere. Compounds GBP authority.
5. **Permit-triggered cold outreach.** Toronto building permits portal exposes restaurant/retail renovations in near-real-time — the most under-used B2B lead source in the trade. 3-touch email sequence.
6. **Get listed on the 3 FRP manufacturer installer programs** (Crane Composites, Marlite, Nudo). Warm referrals from people whose product you sell.
7. **LinkedIn cadence: 3 posts/week for 90 days.** Before/after carousels + install time-lapses + "code corner" explainers. Trade B2B buyers live here, not on Instagram.

Skip everything else until these are done.

---

## 1. Current state — what's strong, what's missing

### Strong
- Stack is modern (Next.js 16 / Tailwind 4) and SEO-aware: `generateMetadata`, sitemap, canonical URLs, JSON-LD on most pages.
- 32 city landing pages already live via `src/lib/cities.ts` (template-driven — not duplicated as earlier review suggested).
- 6 blog posts published, all targeting decent commercial intent.
- Material estimator at [/estimate](src/app/estimate) is a strong lead magnet (rare in this niche).
- Resend wired up + Google Form mirror = reliable form capture.

### Gaps that cost visibility right now
- **No Review / AggregateRating schema** — losing rich-result stars on SERP.
- **No industry-vertical landing pages** (`/frp-for-restaurants`, etc.) — biggest content-side gap.
- **No FAQPage schema on city pages** — FAQ components render client-side only ([src/app/components/FAQSection.tsx](src/app/components/FAQSection.tsx)); search engines miss the structured FAQ.
- **No case studies / project gallery** — every other competitor with one wins B2B trust.
- **No testimonials displayed** + no Google reviews count visible.
- **GBP presence appears unclaimed or thin** (only a `share.google/...` link in [src/app/page.tsx:315](src/app/page.tsx) — no embedded reviews, no review count).
- **No `robots.ts`** — works on defaults, but explicit file is better for crawl directives.
- **Hero form submits to Google Form in a new tab** (`target="_blank"`) — leaks conversions on mobile. Already flagged in [SITE_REVIEW.md](SITE_REVIEW.md).

---

## 2. Channel ranking by ROI (this business specifically)

| Rank | Channel | Effort | Time to first result | Compounding? | Why |
|------|---------|--------|----------------------|--------------|-----|
| 1 | Google Business Profile | Low | 7-14 days | Yes | B2B local search — the dominant discovery path |
| 2 | Content SEO (blog + vertical pages) | Med-High | 60-120 days | Yes | Gap is real, SERP is winnable |
| 3 | Citation building | Low | 14-30 days | Yes | Cheap GBP signal multiplier |
| 4 | Manufacturer installer programs | Low | 30-60 days | Yes | Warm referrals, near-zero CAC |
| 5 | Building-permit cold outreach | Med | 14-30 days | No (manual) | Unique lead source, near-zero competition |
| 6 | LinkedIn organic | Med | 60-90 days | Yes | Where commercial PMs and FMs actually browse |
| 7 | GC / restaurant equipment partnerships | Med-High | 60-180 days | Yes | Recurring referrals once one job lands |
| 8 | Reddit / ContractorTalk | Low | 90+ days | Slow | Builds trust + backlinks, not direct leads |
| 9 | HARO / Featured.com press pitches | Low | 30-90 days | Yes | Free DR70+ backlinks when a pitch lands |
| 10 | Industry events (attend, don't exhibit) | Med | 30-180 days | Yes | RC Show, Construct Canada, IFMA Toronto monthly |

---

## 3. Content plan — 10 posts to publish (in this order)

Each one targets a confirmed SERP gap (top results are weak: foreign sites, manufacturer PDFs, or vendor-controlled narratives).

| # | Title | Target keyword | Why the gap exists |
|---|-------|----------------|---------------------|
| 1 | FRP Wall Panel Installation Cost in Toronto (2026): Real GTA Pricing per Sq Ft | `frp panel installation cost toronto` | Top results are GTOFRP (Chinese mfr), Homewyse, Duramax — zero Canadian installer pricing |
| 2 | CFIA-Approved Wall Panels for Ontario Food Processors: Plain-English Compliance Guide | `cfia approved wall panels ontario` | Trusscore + Structural Panels own the SERP with PVC — no FRP-specific Canadian voice |
| 3 | FRP vs Trusscore PVC: When FRP Is Actually the Better Choice (Canadian Contractor View) | `frp vs pvc commercial kitchen canada` | Trusscore controls 100% of the SERP with anti-FRP content. Counter-narrative is wide open |
| 4 | Class C vs Class A FRP for Ontario Restaurants: What the OBC Actually Requires | `class c frp ontario building code` | No one ties this to the actual Ontario Building Code §3.1.13 |
| 5 | FRP Panels for GTA Car Washes: Why Pebbled Class C Beats Drywall + Tile | `car wash wall panels ontario` | PVC vendors own this; no FRP advocate ranks |
| 6 | Top 7 FRP Installation Mistakes We Fix Most Often (GTA Restaurant Kitchens) | `frp panel installation mistakes` | SERP is generic supplier listicles. An installer's POV is unique |
| 7 | FRP for Daycares and Schools in Ontario: Cleanability, Impact, and Ministry Compliance | `frp panels school ontario` | SERP empty of Canadian-specific content |
| 8 | FRP vs Ceramic Tile in a Commercial Kitchen: A Toronto Cost Breakdown | `frp vs tile commercial kitchen` | Quora + US blogs only. (Existing post #1 — refresh with hard Toronto $/sqft numbers) |
| 9 | How to Clean Class C FRP Panels Without Voiding the Warranty (Cleaning SOP for GTA Operators) | `how to clean frp panels` | SERP = US manufacturer PDFs |
| 10 | FRP Panels for GTA Healthcare Facilities: Infection Control, Impact, and Ontario Hospital Standards | `frp panels hospital ontario` | Wall Protection Ontario + Gerflor own healthcare cladding — no FRP voice |

**Format spec for each post:** 1,500-2,200 words, real GTA pricing where applicable, original photos from job sites, internal-link to the relevant city pages + vertical landing pages + Material Estimator, FAQ block at the bottom with `FAQPage` JSON-LD.

---

## 4. New pages to build (one sprint each)

### 4 industry-vertical landing pages
- **/frp-for-restaurants** — kitchen, prep area, server stations; CFIA + grease + impact angle
- **/frp-for-food-processing** — wash-down ratings, CFIA, USDA-equivalent, sanitation cycles
- **/frp-for-car-washes** — tunnel walls, chemical resistance, Class C
- **/frp-for-healthcare** — hospitals, clinics, long-term care; infection control + impact

Each page needs: hero with vertical-specific photo, problem framing, our spec answer, 3-5 case study mini-cards, FAQ with `FAQPage` schema, "request a CFIA-spec one-pager" lead magnet.

### Case studies page
**/case-studies** + 3-5 individual `/case-studies/[slug]` pages. Even 3 short ones (project name, sq ft, timeline, panel spec, photos, owner quote) closes the trust gap vs. every competitor.

### Trade resources hub
**/resources** — CFIA compliance one-pager, OBC §3.1.13 cheat sheet, FRP cleaning SOP, panel comparison chart. Each downloadable. Email-gate the high-value ones for lead capture.

---

## 5. Schema markup gaps to fill

Open the existing JSON-LD in [src/app/layout.tsx:83](src/app/layout.tsx) and city pages — add:

1. **`AggregateRating` + `Review`** in the LocalBusiness block on root layout. Pull from real Google reviews. Rich-result stars in SERP = ~30% CTR lift.
2. **`FAQPage` schema** on every city page and every new vertical page. Currently FAQs only render client-side via `FAQSection.tsx`.
3. **`BreadcrumbList`** on every leaf page (city pages, blog posts, vertical pages).
4. **`Article` + `Author` + `datePublished` schema** on all blog posts.
5. **`Product` schema with `Offer.priceRange`** on `/products` and per-panel-type detail.
6. **`Service` with `areaServed`** listing all 32 cities — boosts local pack visibility per-city.

Validate every one with Google's Rich Results Test before pushing.

---

## 6. Google Business Profile — 14-day saturation plan

### Setup (Day 1-2)
- Claim/verify via business.google.com (postcard PIN takes 5-14 days — start now).
- Use exact NAP: `Corevance` / `437-849-3781` / your service-area address.
- Category: primary **"Wall and Floor Contractor"**, secondary **"Building Materials Supplier"**.
- Service area: list all 32 cities from `src/lib/cities.ts`.

### Fill (Day 3-5)
- **Services** — add each as a separate service with description: FRP Panel Installation, FRP Panel Supply, Custom FRP Solutions, Commercial Kitchen Wall Panels, CFIA-Compliant Wall Panels, Class C FRP Installation, Car Wash Wall Panels, Healthcare Wall Panels.
- **Products** — each FRP panel type from `/products` with photo, dimensions, price range.
- **Photos** — minimum 25 to start: 10 job-site (before/during/after), 5 panel close-ups, 5 install-crew, 3 vehicle/branded gear, 2 office/storefront. **Geotag each.**
- **Logo + cover photo** (1080×608).
- **Hours** — match what's on [src/app/page.tsx:321](src/app/page.tsx).
- **Description** (750 chars) — template below.

### Activate (Day 6-14)
- **Q&A** — pre-seed 8-10 questions yourself, answer them yourself: "Is FRP CFIA approved?", "How fast can you install in a GTA kitchen?", "What's the cost per sq ft in Toronto?", "Do you do car washes?", "Class C vs Class A?", "Do you deliver same-day?", etc.
- **Posts** — publish 1 Update/week, 1 Offer/month, 1 Event (case study reveal) every 2 weeks. Use real photos from jobs.
- **Reviews** — text every recent customer with the GBP review link, target 10 reviews in 30 days. Reply to every one within 24 hours.
- **Booking link** — point to [/estimate](src/app/estimate).
- Turn on **messaging**.

### GBP description (paste into profile)
> Corevance supplies and installs commercial FRP (fiberglass-reinforced plastic) wall panels across the Greater Toronto Area and Ontario. CFIA-accepted, Class C fire-rated panels for restaurant kitchens, food processing facilities, car washes, healthcare spaces, and industrial buildings. Same-day GTA delivery, certified install crews, 24-hour free quotes, and projects completed in 1-3 days. Serving Toronto, Mississauga, Brampton, Vaughan, Markham, Etobicoke, Scarborough, North York, and 24 more Ontario cities. Call 437-849-3781 or request a quote at corevance.ca.

---

## 7. Citation rollout — 30 directories in 30 days

Same NAP across every listing. Decline every paid upsell call for the first 90 days.

**Week 1 — Tier 1 anchors (highest authority):**
- Day 1: Google Business Profile, Bing Places, Apple Business Connect
- Day 2: Facebook Business Page, Instagram Business, LinkedIn Company Page
- Day 3: Yellow Pages Canada (auto-syncs to Canada411)
- Day 4: Yelp, Foursquare, 411.ca
- Day 5: BBB Canada, Cylex Canada

**Week 2 — Contractor verticals:**
- Day 6: HomeStars (Basic)
- Day 7: Houzz Pro (Basic)
- Day 8: BuildZoom (claim)
- Day 9: Blue Book Network (free listing request) + Construction Links Network
- Day 10: GBP optimization pass — add Posts, Products, seed Q&A

**Week 3 — GTA local:**
- Day 11: City of Toronto business listing, Vaughan Business Directory
- Day 12: vaughanbusiness.ca, Region of Peel
- Day 13: Region of York (yorklink.ca), Region of Durham (investdurham.ca)
- Day 14: Ontario Made (if Ontario-manufactured products qualify)
- Day 15: Buffer day for PIN verifications

**Week 4 — Niche / authority:**
- Day 16: Crunchbase
- Day 17: Wikidata item (Q-number)
- Day 18: Clutch (Basic), F6S
- Day 19: ContractorTalk forum profile + 3 helpful answers
- Day 20: Quora — 3 answers on FRP topics, link only when relevant
- Days 21-30: respond to GBP reviews, weekly Post, request reviews from past customers

**Skip these (paid disguised as free):** Yellow Pages paid upsells, Houzz Pro after trial, Clutch sponsored placement, BBB accreditation, all Boards of Trade memberships, ORHMA / Restaurants Canada / F&B Ontario "supplier directories" (member-paid).

---

## 8. AI search (GEO) — own 5 queries

Live probing confirmed Corevance is **not cited** in any of these AI-style queries today. Top sources are either US/foreign or PVC-vendor controlled. Path to citation: publish the content (§3) + earn the citations (§7) — Perplexity / ChatGPT / Google AI Overviews ground against the same web.

| Query | Currently cited | Path to displace |
|-------|-----------------|------------------|
| "best FRP panel installer in Toronto" | Express Drywall, Plastics Source, Canada Plastics | Build a pillar page `/best-frp-installer-toronto`; earn 10+ GBP reviews; get HomeStars + Houzz reviews live |
| "CFIA approved wall panels Ontario supplier" | Trusscore, Structural Panels (all PVC) | Publish post #2 with hard CFIA reference numbers; earn 1-2 industry citations |
| "FRP vs PVC wall panels which is better" | 3 Trusscore-owned blogs | Publish post #3; pitch HARO/Featured.com on the same angle |
| "FRP panel installation cost Toronto per sq ft" | GTOFRP, Homewyse, Duramax | Publish post #1 with real GTA pricing tables — likely fastest win |
| "Class C fire rated FRP panels Canada" | frppanels.ca, avantabuilds.ca | Hardest — focus on OBC §3.1.13 angle in post #4 |

Re-probe monthly. Track citation share, not just rank.

---

## 9. Partnerships — 5 to pursue first

| Priority | Partner type | Specific targets | First move |
|----------|--------------|------------------|------------|
| 1 | FRP manufacturer installer programs | Crane Composites (Glasbord), Marlite (APPs), Nudo (FiberLite) | Email territory rep; request "find an installer" listing |
| 2 | Top 10 GTA commercial GCs | GTA General Contractors, HKC Construction, Fresco, BUILD IT, Pacific GC, Masterstrux | Capability brief + CFIA one-pager to estimator |
| 3 | Restaurant equipment dealers | Russell Hendrix Toronto, Pre-Owned Restaurant Equipment, Nella Cutlery | Visit Toronto branch; offer co-quote arrangement |
| 4 | Commercial cleaning companies (BSCAI Ontario) | Largest 10 GTA commercial cleaners | Referral-fee email — they see failing walls first |
| 5 | Canadian Carwash Association | Burlington HQ — join as supplier member | CCA membership + attend CARWACS show |

Stagger outreach — don't blast all in one week. Track in a free Notion / Airtable / Google Sheet CRM.

---

## 10. Cold outreach — the building-permit angle

This is the single most under-used B2B lead source for trade contractors in Ontario.

### Lead source
- **Toronto Open Data — Building Permits:** filter by `STRUCTURE_TYPE = "Commercial"` + `WORK = "Renovation"` + permit dates within the last 14 days.
- **TorontoPermits.ca** — friendlier UI over the same dataset.
- Cross-reference owner names with LinkedIn + Hunter.io (25 free searches/mo) for emails.

### 3-touch sequence

**Day 0 — initial**
> Subject: Quick question re: [Permit address] wall scope
>
> Hi [Name] — saw your renovation permit went in for [address] last week. Quick question: do you have the wall finish scope sorted yet?
>
> Most GTA kitchen renovations fail first health inspection on wall finish (we fix it after the fact 2-3 times a month). CFIA-spec Class C FRP, installed in 1-3 days, $8-$18/sq ft.
>
> Happy to send a no-obligation quote for the wall scope only — takes us 24 hours.
>
> — [Your name], Corevance

**Day 4 — follow-up**
> Following up on the [address] permit. Even if you've got wall scope handled, I'm putting together a CFIA wall-finish spec sheet for restaurant GCs — happy to send if useful (one page, plain English). Just reply "send it."

**Day 11 — soft close**
> Last note from me on this one. If wall scope is locked, no worries. If it isn't and you want a 24-hour quote, the permit area gives me everything I need to ballpark it: [https://corevance.ca/estimate]
>
> Either way — good luck with the build.

Send 10 a day, Mon-Thu, until you hit pipeline. Track open + reply rate.

---

## 11. LinkedIn — 90-day cadence

### Setup
- Convert personal profile headline to "FRP Wall Panels — Commercial Kitchens, Food Processing, Healthcare | GTA & Ontario | Corevance".
- Company page live with logo, banner, services, location.
- Connect with 50 target accounts/week (Director of Construction at QSR brands, FMs at food processors, GTA commercial PMs).

### Content cadence (3/week)
- **Mon — Carousel** (10 slides): before/after of a recent install, with spec details.
- **Wed — Short video** (30-60s): install time-lapse, panel cut demo, CFIA myth-bust, or "what code says" explainer.
- **Fri — Text post**: code corner, pricing transparency, customer story, or industry hot-take.

### Hooks that work for trades 2026
- "If your kitchen wall finish looks like this, you'll fail inspection on day 1."
- "We get called to fix this exact mistake 2-3x a month. Here's what to avoid."
- "Ontario Building Code §3.1.13 in plain English."
- "Real cost of a 1,200 sq ft commercial kitchen wall job in Toronto, 2026."

### Groups to join (verify activity before posting)
- Toronto Construction Association group
- IFMA Greater Toronto
- FCSI Canada
- Restaurants Canada
- BOMA Toronto
- Canadian Carwash Association

---

## 12. Reddit + ContractorTalk

Strict rule: **never promote directly.** Reputation play only — links happen organically when you're credible.

- **r/Construction** — answer technical FRP / wall-finish / CFIA questions. Flair as "Installer."
- **r/KitchenConfidential** — comment on renovation horror stories, never sell.
- **r/Carwash** — small but operator-dense, AMA format works once.
- **ContractorTalk.com — Commercial subforum** — daily presence, answer install/spec questions in depth.
- **One AMA when ready:** "I install FRP in GTA commercial kitchens — ask me about CFIA wall finish compliance."

---

## 13. Press / HARO

Free DR70+ backlinks when a pitch lands.

- **Featured.com** (HARO successor) — set alerts for: restaurant, food safety, commercial kitchen, hospitality, food processing, building code, contractor.
- **Qwoted** — same alerts.
- **Source of Sources** (free tier).
- **Pitch angle:** "GTA commercial wall-finish expert" / "FRP installer with CFIA compliance experience."
- Target 3 pitches/week. 1 in 20 lands. 5-10 placements/year = ~5-10 high-authority backlinks at $0.

---

## 14. 90-day calendar

### Days 1-14 — Foundation
- [ ] Claim GBP, start PIN verification
- [ ] Add Review/AggregateRating + FAQPage schema to existing pages
- [ ] Fix hero form `target="_blank"` regression (SITE_REVIEW.md #3)
- [ ] Citation rollout Week 1 + Week 2 (15 listings)
- [ ] Apply to 3 manufacturer installer programs
- [ ] Set up Featured.com / Qwoted alerts
- [ ] Build Case Studies page shell + write 3 case studies (even short ones)

### Days 15-30 — Visibility
- [ ] Publish blog post #1 (Toronto cost guide — fastest win)
- [ ] Build `/frp-for-restaurants` and `/frp-for-food-processing` pages
- [ ] Citation rollout Week 3 + Week 4 (15 more listings)
- [ ] LinkedIn — 12 posts published (Mon/Wed/Fri)
- [ ] Outreach to top 10 GTA GCs with capability brief
- [ ] First permit-triggered cold email batch (40 sends)
- [ ] Request first 10 GBP reviews from past customers

### Days 31-60 — Acceleration
- [ ] Publish blog posts #2, #3, #4 (one per week)
- [ ] Build `/frp-for-car-washes` and `/frp-for-healthcare`
- [ ] LinkedIn — 24 more posts
- [ ] 80 more permit-triggered cold emails
- [ ] Outreach to 10 restaurant equipment dealers
- [ ] First HARO/Featured pitch land (target)
- [ ] First GBP review milestone: 20 reviews

### Days 61-90 — Compounding
- [ ] Publish blog posts #5-#7
- [ ] Resources hub live (`/resources` + 4 downloadables)
- [ ] LinkedIn — 24 more posts
- [ ] 120 more permit-triggered cold emails
- [ ] Reddit + ContractorTalk: 30 helpful answers across all communities
- [ ] AMA on r/Carwash or r/KitchenConfidential
- [ ] Re-run AI query probe (§8) — measure citation share lift

---

## 15. KPIs (review monthly)

| Metric | Baseline today | 30-day target | 90-day target | Source |
|--------|----------------|---------------|---------------|--------|
| GBP profile views | unknown | 500 / mo | 2,000 / mo | GBP Insights |
| GBP calls + direction requests | unknown | 25 / mo | 100 / mo | GBP Insights |
| GBP reviews | unknown | 10 | 30 | GBP |
| Organic clicks (Search Console) | establish | +50% | +200% | GSC |
| Indexed pages | ~22 + 32 cities | + 4 vertical pages | + 4 vertical + 7 posts + 3 case studies | GSC |
| Backlinks (referring domains) | establish | +15 | +40 | free Ahrefs Webmaster Tools |
| AI engine citation share (§8 queries) | 0/5 | 1/5 | 3/5 | manual re-probe |
| Inbound form fills / month | unknown | +30% | +100% | Resend log |
| Cold outreach reply rate | n/a | 8% | 12% | manual |

Free tools to track: Google Search Console, GBP Insights, Ahrefs Webmaster Tools (free tier), Bing Webmaster Tools.

---

## 16. What NOT to spend time on (zero-cost discipline)

- Paid Boards of Trade / Chamber memberships (skip — Tier 1 directories deliver more for $0).
- Yelp paid ads (they will call 3x/week; decline politely).
- Houzz Pro paid tier (Basic is enough until you have 5+ portfolio projects to showcase).
- Instagram organic for B2B trades — low ROI. Maintain a presence (NAP citation) but don't invest cadence.
- TikTok — irrelevant for this buyer.
- ORHMA / Restaurants Canada paid supplier listings until you have 1+ named restaurant case study.
- Cold-LinkedIn-DM blasts with no context — kills sender reputation fast.
- Building a podcast — too high effort/payoff ratio at this stage. Be a guest on others (§5 of partnerships brief).
- SEO tools beyond GSC + Bing Webmaster Tools + Ahrefs free — diminishing returns.

---

## 17. Templates library

### A. Manufacturer installer program email
> Subject: GTA installer interested in your installer-finder listing
>
> Hi [Name] — I run Corevance, a commercial FRP installer based in the GTA. We supply and install [Glasbord / Marlite / FiberLite] panels for restaurants, food processing, car washes, and healthcare facilities across Ontario.
>
> We're CFIA-accepted, certified for Class C installs, and ship/install across 32 Ontario cities. Currently doing [N] commercial installs per month.
>
> Would love to be added to your "find an installer" page for the Ontario region. Happy to share project photos, references, or anything else you need.
>
> Thanks,
> [Your name] — Corevance — 437-849-3781

### B. GC capability email
> Subject: Specialty wall scope coverage for your GTA commercial projects
>
> Hi [Name] — quick intro. Corevance is a GTA-based commercial FRP installer (CFIA-accepted, Class C). We handle the wall scope on commercial fit-outs that GCs don't want to self-perform — typical job is 1,200-4,000 sq ft, completed in 1-3 days, quoted in 24 hours.
>
> If you've got upcoming restaurant, food processing, or healthcare projects, would it be useful to have us on your subcontractor list? Happy to send our capability brief and pricing sheet.
>
> — [Your name], Corevance, 437-849-3781

### C. LinkedIn DM (after they've engaged with your post)
> Hi [Name] — thanks for engaging with the [post topic] post. Saw you're at [company] handling [their work]. If you ever want a second opinion on a commercial wall-finish spec or a quick CFIA compliance gut-check, happy to help — no pitch. — [Your name]

### D. Restaurant owner cold email (post-permit)
See §10 above.

### E. Past customer review request (text or email)
> Hi [Name] — hope the [project] kitchen has been holding up well! Quick favour: would you be able to leave a quick review of our work on Google? Helps a lot — takes 30 seconds. Link: [GBP review link]. Thanks again for trusting us with the build.

### F. HARO / Featured.com pitch template (for journalist queries on "commercial kitchen / food safety / contractor / building code")
> [Your Name], owner of Corevance — a GTA commercial FRP wall panel installer (CFIA-accepted, Class C fire-rated). We've installed in 100+ commercial kitchens, food processing facilities, and car washes across Ontario.
>
> On [topic]:
> [2-3 specific, quotable sentences with a concrete data point or example.]
>
> Bio: [Your name] is the founder of Corevance, a commercial FRP wall panel supplier and installer serving the GTA. Reach: corevance.ca, 437-849-3781.

---

## 18. The one number to watch

**Inbound qualified leads per month from organic sources** (search + GBP + LinkedIn + referrals — exclude any paid).

Today: unknown baseline. Set a starting count this week. 90-day target: **2x that baseline.** Everything in this plan is in service of that number — if a tactic isn't moving it after 60 days, kill it and double down on the ones that are.

---

*Plan written 2026-05-16. Re-review monthly. The 7 TL;DR moves are the entire plan if anything else gets dropped — they cover 80% of the upside.*
