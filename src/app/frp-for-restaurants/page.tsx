import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://corevance.ca";
const PHONE_DISPLAY = "437-849-3781";
const PHONE_TEL = "4378493781";
const PAGE_URL = `${BASE_URL}/frp-for-restaurants`;

export const metadata: Metadata = {
  title: "FRP Wall Panels for Restaurants GTA | Corevance",
  description:
    "CFIA & Toronto Public Health-accepted FRP wall panel installation for GTA restaurant kitchens. Class C, 1–3 day install, $8–$18/sq ft. Free quote in 24 hours.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "restaurant kitchen wall panels Toronto",
    "FRP for restaurants GTA",
    "commercial kitchen FRP installer",
    "restaurant FRP Toronto",
    "FRP restaurant kitchen Mississauga",
    "Toronto Public Health wall panels",
    "CFIA restaurant FRP",
    "commercial kitchen wall cladding GTA",
  ],
  openGraph: {
    title: "FRP Wall Panels for Restaurants in the GTA | Corevance",
    description:
      "Restaurant-focused FRP installation across the GTA. CFIA + Toronto Public Health acceptance, Class C, 1–3 day install. $8–$18/sq ft.",
    url: PAGE_URL,
    type: "website",
    siteName: "Corevance",
    images: [
      {
        url: "/corevance-logo-full.png",
        width: 1200,
        height: 630,
        alt: "FRP Wall Panels for Restaurants — Corevance GTA",
      },
    ],
    locale: "en_CA",
  },
};

const FAQS = [
  {
    q: "Will FRP pass Toronto Public Health inspection?",
    a: "Yes — Class C FRP panels installed with food-safe adhesive, sealed PVC trim, and nylon rivets meet Toronto Public Health's non-porous, easily-cleanable wall surface requirements under the Ontario Food Premises Regulation. We install the complete CFIA-accepted system so the inspector sees a single documented assembly, not a hodgepodge of materials.",
  },
  {
    q: "Can you install over a weekend close?",
    a: "Yes — most restaurant kitchens of 800–1,500 sq ft can be turned over between a Sunday close and a Tuesday open. We coordinate around your hood-cleaning and equipment schedule, work nights when needed, and seal all penetrations before we leave the site. Larger or multi-room jobs run 2–3 days.",
  },
  {
    q: "FRP behind a 6-burner range — yes or no?",
    a: "No. FRP is Class C flame-spread rated, not zero-rated, and Ontario Building Code §3.1.13 requires non-combustible material directly behind cooking equipment with an open flame. We stop the FRP at the stainless backsplash and detail the transition. Specifying stainless behind the range and FRP everywhere else is the correct, code-compliant build.",
  },
  {
    q: "What's the cost for a 1,200 sq ft kitchen?",
    a: "Most 1,200 sq ft restaurant kitchen jobs land between $9,600 and $21,600 installed — based on $8–$18/sq ft. The variance is mostly tile removal, the number of penetrations (sinks, hoods, conduits), and whether you need after-hours labour. We provide a written, line-item quote within 24 hours of a site visit.",
  },
  {
    q: "Do you handle the disposal of old tile?",
    a: "Yes — we strip the existing tile or failed drywall, dispose of it through a licensed waste hauler, and prep the substrate (cement-board or moisture-resistant gypsum) before panel install. Disposal volume and asbestos screening on pre-1990 buildings are scoped separately in the quote.",
  },
  {
    q: "What's the warranty?",
    a: "Panels carry a 10-year manufacturer warranty against delamination and corrosion. Our installation workmanship is warranted for 2 years — including adhesive bond, trim seal, and rivet integrity. Outside of physical impact damage, an FRP wall in a restaurant kitchen routinely lasts 15–20 years.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "FRP Wall Panel Installation for Restaurants",
  name: "FRP Wall Panels for Restaurants",
  description:
    "Commercial-kitchen FRP wall panel installation for restaurants across the GTA. CFIA + Toronto Public Health accepted. Class C, 1–3 day install, $8–$18/sq ft.",
  provider: {
    "@type": "LocalBusiness",
    name: "Corevance",
    url: BASE_URL,
    telephone: "+1-437-849-3781",
    email: "corevancesales@gmail.com",
    image: `${BASE_URL}/corevance-logo-full.png`,
    priceRange: "$$",
  },
  areaServed: {
    "@type": "State",
    name: "Ontario",
    containedInPlace: { "@type": "Country", name: "Canada" },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Restaurant FRP Panel Options",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Class C smooth FRP wall panels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pebbled FRP wall panels for wash & dish areas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PVC trim, moldings, and nylon rivet kits",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Food-safe adhesive and sealant systems",
        },
      },
    ],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: `${BASE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FRP for Restaurants",
      item: PAGE_URL,
    },
  ],
};

const AUTHORITIES = [
  "Canadian Food Inspection Agency (CFIA)",
  "Toronto Public Health",
  "Peel Public Health",
  "York Region Public Health",
  "Ontario Building Code §3.1.13",
];

const FRP_ZONES = [
  "Prep & wash areas — full-height FRP, sealed at floor cove",
  "Server station & pass — smooth Class C, easy daily wipedown",
  "Dish pit — pebbled FRP rated for constant moisture & detergent",
  "Walk-in cooler vestibule — moisture-tolerant assembly",
  "Staff washroom walls — full-height, sealed at fixtures",
  "Stainless behind direct flame — we detail the transition honestly",
];

const RELATED_VERTICALS = [
  { href: "/frp-for-food-processing", label: "FRP for Food Processing" },
  { href: "/frp-for-car-washes", label: "FRP for Car Washes" },
  { href: "/frp-for-healthcare", label: "FRP for Healthcare" },
];

const RELATED_CITIES = [
  { href: "/frp-installation-toronto", label: "FRP Installation Toronto" },
  { href: "/frp-installation-mississauga", label: "FRP Installation Mississauga" },
  { href: "/frp-installation-brampton", label: "FRP Installation Brampton" },
  { href: "/frp-installation-scarborough", label: "FRP Installation Scarborough" },
];

export default function FrpForRestaurantsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
          <Link href="/" aria-label="Corevance home">
            <Image
              src="/corevance-logo-symbol.png"
              alt="Corevance — FRP Wall Panel Supplier Toronto"
              width={278}
              height={61}
              priority
              className="object-contain w-[150px] h-auto sm:w-[220px] lg:w-[278px]"
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <span className="hidden sm:block text-sm font-semibold text-[#1e3a5f] uppercase">
              Call us now
            </span>
            <a
              href={`tel:${PHONE_TEL}`}
              className="bg-[#ff6b35] text-white font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm hover:bg-[#e55a28] transition-all no-underline"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-20 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">
              GTA RESTAURANT KITCHENS
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              FRP Wall Panels for Restaurants in the GTA
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Stop failing on wall finish. Corevance installs CFIA and Toronto
              Public Health-accepted FRP wall systems in GTA restaurant kitchens
              — Class C panels, sealed PVC trim, food-safe adhesive — in 1 to 3
              days, including weekend closes. $8–$18/sq ft installed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/estimate"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline"
              >
                Estimate Your Materials →
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="border-2 border-white/50 text-white/80 font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-b border-amber-100 py-6 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">
              Quick Answer
            </p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Corevance installs Class C FRP wall panels in GTA restaurant
              kitchens for <strong>$8–$18/sq ft</strong> installed, accepted by
              Toronto Public Health, Peel Public Health, York Region Public
              Health, and CFIA. Most jobs finish in 1–3 days, weekend closes
              included. Call{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                className="text-[#ff6b35] font-semibold"
              >
                {PHONE_DISPLAY}
              </a>{" "}
              for a free quote within 24 hours.
            </p>
          </div>
        </section>

        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5">
                Built for the Health Inspector and the Friday Night Rush
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most restaurant operators we meet are working through one of
                three problems: a first health inspection coming up on a freshly
                renovated kitchen, grout that has decayed behind the line and
                started harbouring grease, or drywall that has soaked through
                from steam, washdown, and splash. FRP solves all three — but
                only if it is installed as a complete, documented system.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Corevance specs and installs the CFIA-accepted assembly: Class C
                fibreglass-reinforced panels, food-safe adhesive, PVC inside and
                outside corner trim, end caps, and nylon rivets at the
                manufacturer-required spacing. Every transition is sealed. Every
                penetration around sinks, conduits, hood corners, and outlets is
                detailed so the inspector sees a continuous, easily-cleanable
                surface.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We also work the schedule restaurants actually have. Most 800 to
                1,500 sq ft kitchen jobs are turned over between a Sunday close
                and a Tuesday open. Larger fitouts and full back-of-house
                refits run 2 to 3 days. We coordinate with hood cleaners,
                equipment installers, and your refrigeration tech so we are not
                the bottleneck on your reopen.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                And we will tell you where FRP does not belong. Directly behind
                a 6-burner range or under a salamander, Ontario Building Code
                §3.1.13 calls for non-combustible material — that is stainless,
                not FRP. We detail the transition and quote both materials on
                the same line item.
              </p>
              <ul className="space-y-3">
                {FRP_ZONES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-700 text-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#ff6b35]/15 text-[#ff6b35] flex items-center justify-center text-xs font-bold shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Restaurant Pricing Guide</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Standard kitchen install", "$8–$12/sq ft"],
                      ["Complex / multi-surface", "$12–$18/sq ft"],
                      ["Weekend / overnight labour", "Quoted separately"],
                      ["Material supply only", "Call for pricing"],
                    ].map(([label, price]) => (
                      <tr key={label} className="border-b border-white/15">
                        <td className="py-2 text-white/70">{label}</td>
                        <td className="py-2 text-right font-bold text-[#ff6b35]">
                          {price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link
                  href="/#contact"
                  className="block mt-4 text-center bg-[#ff6b35] text-white font-bold py-3 rounded-full hover:bg-[#e55a28] transition-all no-underline text-sm"
                >
                  Get Exact Quote
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1e3a5f] mb-3">
                  Why FRP for Restaurants
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Passes Toronto Public Health on first review</li>
                  <li>• No grout — nothing for grease to colonize</li>
                  <li>• Survives daily washdown and degreaser</li>
                  <li>• Installs over weekend closes</li>
                  <li>• 15–20 year service life in active kitchens</li>
                </ul>
              </div>
              <Link
                href="/estimate"
                className="block text-center border-2 border-[#1e3a5f] text-[#1e3a5f] font-bold py-3 rounded-full hover:bg-[#1e3a5f] hover:text-white transition-all no-underline text-sm"
              >
                Estimate Your Materials →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-5 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5">
              Toronto Public Health, CFIA & Ontario Building Code Compliance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Restaurant wall finishes in Ontario food premises are reviewed
              under Toronto Public Health (and the equivalent regional units
              in Peel and York) using the Ontario Food Premises Regulation,
              which requires walls in food prep, wash, and storage areas to be
              non-absorbent, smooth, and easily cleanable. Corevance installs
              the complete CFIA-accepted FRP system — Class C panels, PVC trim,
              food-safe adhesive, nylon rivets — and provides the supporting
              product documentation if the inspector requests it. Flame-spread
              requirements under Ontario Building Code §3.1.13 are respected by
              transitioning to stainless behind open-flame cooking equipment.
            </p>
            <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              Inspecting & regulatory authorities
            </p>
            <div className="flex flex-wrap gap-2">
              {AUTHORITIES.map((auth) => (
                <span
                  key={auth}
                  className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-xs font-semibold text-[#1e3a5f]"
                >
                  {auth}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-5 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">
              Restaurant FRP — Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="text-[#1e3a5f] font-bold mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-5 bg-[#ff6b35] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get Your Restaurant Kitchen Quote
            </h2>
            <p className="text-white/90 mb-6">
              Written, line-item quotes within 24 hours. Same-day panel
              delivery across the GTA. Weekend installs available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-[#ff6b35] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all no-underline"
              >
                Request Free Quote
              </Link>
              <Link
                href="/estimate"
                className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#ff6b35] transition-all no-underline"
              >
                Estimate Materials →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-5 bg-white text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-500 text-sm mb-4">
              Other industries & GTA cities we serve:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {RELATED_VERTICALS.map((v) => (
                <Link
                  key={v.href}
                  href={v.href}
                  className="bg-gray-50 border border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-5 py-2 rounded-full text-sm transition-all no-underline"
                >
                  {v.label}
                </Link>
              ))}
              {RELATED_CITIES.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="bg-gray-50 border border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-5 py-2 rounded-full text-sm transition-all no-underline"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-4 border-[#ff6b35] py-8 px-5 text-center">
        <p className="text-[#1e3a5f] font-semibold text-sm">
          © 2025 Corevance. All rights reserved.
        </p>
        <p className="text-gray-400 text-xs mt-1">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hover:text-[#ff6b35] transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
          {" · "}
          <Link href="/" className="hover:text-[#ff6b35] transition-colors">
            Home
          </Link>
          {" · "}
          <Link
            href="/services"
            className="hover:text-[#ff6b35] transition-colors"
          >
            Services
          </Link>
          {" · "}
          <Link
            href="/products"
            className="hover:text-[#ff6b35] transition-colors"
          >
            Products
          </Link>
          {" · "}
          <Link
            href="/pricing"
            className="hover:text-[#ff6b35] transition-colors"
          >
            Pricing
          </Link>
          {" · "}
          <Link href="/blog" className="hover:text-[#ff6b35] transition-colors">
            Blog
          </Link>
        </p>
      </footer>
    </div>
  );
}
