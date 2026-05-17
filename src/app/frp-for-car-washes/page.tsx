import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://corevance.ca";
const PHONE_DISPLAY = "437-849-3781";
const PHONE_TEL = "4378493781";
const PAGE_URL = `${BASE_URL}/frp-for-car-washes`;

export const metadata: Metadata = {
  title: "FRP Wall Panels for Car Washes GTA | Corevance",
  description:
    "Chemical-resistant, freeze-thaw rated FRP wall panels for GTA car wash tunnels and self-serve bays. Pebbled or smooth, Class C, 2–3 day install. $8–$18/sq ft.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "car wash wall panels Ontario",
    "FRP for car wash tunnel",
    "pebbled FRP installer Toronto",
    "car wash tunnel cladding GTA",
    "chemical resistant wall panels Ontario",
    "freeze thaw FRP",
    "self serve bay wall panels",
    "car wash FRP installer",
  ],
  openGraph: {
    title: "FRP Wall Panels for Car Washes in the GTA | Corevance",
    description:
      "Pebbled and smooth FRP for GTA car wash tunnels, self-serve bays, vacuum islands, and mechanical rooms. Chemical and freeze-thaw resistant. 2–3 day install. $8–$18/sq ft.",
    url: PAGE_URL,
    type: "website",
    siteName: "Corevance",
    images: [
      {
        url: "/corevance-logo-full.png",
        width: 1200,
        height: 630,
        alt: "FRP Wall Panels for Car Washes — Corevance GTA",
      },
    ],
    locale: "en_CA",
  },
};

const FAQS = [
  {
    q: "Pebbled vs smooth — which do I want?",
    a: "Pebbled FRP for any wall a customer or attendant might brace against — self-serve bays, vacuum islands, the lower 4 ft of tunnel walls. The texture diffuses light, hides minor scuffing, and adds traction-adjacent friction. Smooth FRP for upper tunnel walls, cashier office, and back-of-house where appearance and easy cleaning matter more than grip. Most car washes we do are a mix.",
  },
  {
    q: "Does FRP survive freeze-thaw?",
    a: "Yes — FRP itself is dimensionally stable through Ontario winters. The failure mode in freeze-thaw is almost always the substrate behind it (saturated drywall or cement board that wasn't sealed). We install on moisture-resistant substrate, seal every edge with a flexible sealant rated for the temperature swing, and detail the floor-to-wall transition so meltwater doesn't wick up behind the panel.",
  },
  {
    q: "Can I install while one bay stays open?",
    a: "Yes. We sequence work bay-by-bay so the operating bays stay live. We isolate the work area with poly, manage overspray and dust, and turn over each bay clean before moving to the next. A typical 6-bay tunnel (~2,400 sq ft) takes 2–3 days with one or two bays under work at a time.",
  },
  {
    q: "What happens if a single panel gets damaged — full replace?",
    a: "No. FRP is panel-replaceable. If a brush arm or a customer's roof rack tears a panel, we drill out the rivets, cut the adhesive bond, pull the panel, and replace it with a new sheet — usually within a half-day on a single panel. We stock matching panel and trim so colour and texture line up with the rest of the wall.",
  },
  {
    q: "Chemical compatibility with my current soap supplier?",
    a: "FRP is chemically compatible with the full range of car wash chemistry — acidic presoaks, alkaline degreasers, foam soaps, drying agents, ceramic sealants. We will cross-reference your specific supplier's SDS sheets against the panel and adhesive spec before quoting, and flag anything unusual (rare for car wash chemistry, but we check).",
  },
  {
    q: "Cost for a 6-bay tunnel (~2,400 sq ft)?",
    a: "A 6-bay tunnel of roughly 2,400 sq ft typically lands between $19,200 and $43,200 installed — based on $8–$18/sq ft. The variance is mostly pebbled vs smooth mix, substrate prep (whether we're stripping failed tile or starting on bare block), and the number of equipment penetrations. Written quote within 24 hours of a site visit.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "FRP Wall Panel Installation for Car Washes",
  name: "FRP Wall Panels for Car Washes",
  description:
    "Chemical-resistant, freeze-thaw rated FRP wall panel installation for GTA car wash tunnels and self-serve bays. Pebbled or smooth, Class C, 2–3 day install. $8–$18/sq ft.",
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
    name: "Car Wash FRP Panel Options",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pebbled FRP for self-serve bays & lower tunnel walls",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smooth Class C FRP for upper walls & cashier office",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chemical-resistant PVC trim & sealant systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Single-panel replacement service for impact damage",
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
      name: "FRP for Car Washes",
      item: PAGE_URL,
    },
  ],
};

const AUTHORITIES = [
  "Ontario Building Code §3.1.13",
  "Technical Standards & Safety Authority (TSSA)",
  "Ministry of the Environment, Conservation and Parks",
  "Local municipal bylaws",
];

const FRP_ZONES = [
  "Tunnel walls — smooth upper, pebbled lower for traction-adjacent zones",
  "Self-serve bay walls — full-height pebbled FRP",
  "Vestibule & entry — smooth Class C, sealed at all penetrations",
  "Cashier office back-walls — smooth FRP, easy daily wipedown",
  "Vacuum island enclosures — pebbled, chemical-resistant",
  "Mechanical room — Class C with TSSA-compliant adjacencies",
];

const RELATED_VERTICALS = [
  { href: "/frp-for-restaurants", label: "FRP for Restaurants" },
  { href: "/frp-for-food-processing", label: "FRP for Food Processing" },
  { href: "/frp-for-healthcare", label: "FRP for Healthcare" },
];

const RELATED_CITIES = [
  { href: "/frp-installation-brampton", label: "FRP Installation Brampton" },
  { href: "/frp-installation-vaughan", label: "FRP Installation Vaughan" },
  { href: "/frp-installation-etobicoke", label: "FRP Installation Etobicoke" },
  { href: "/frp-installation-markham", label: "FRP Installation Markham" },
];

export default function FrpForCarWashesPage() {
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
              GTA CAR WASH OPERATORS
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              FRP Wall Panels for Car Washes in the GTA
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Stop replacing drywall every 18 months. Corevance installs
              chemical-resistant, freeze-thaw rated FRP — pebbled where you
              need traction, smooth where you need finish — in GTA tunnels,
              self-serve bays, and vacuum islands. A typical 6-bay tunnel
              installs in 2–3 days at $8–$18/sq ft.
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
              Corevance installs pebbled and smooth Class C FRP wall systems
              in GTA car washes — tunnels, self-serve bays, vacuum islands,
              and mechanical rooms — for <strong>$8–$18/sq ft</strong>{" "}
              installed. Chemical-resistant against acidic presoaks and
              alkaline degreasers, dimensionally stable through Ontario
              freeze-thaw cycles, and bay-by-bay installable while you stay
              open. Call{" "}
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
                Built for Acid, Alkali, and Ontario Winters
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most car wash operators we meet are on their second or third
                wall finish. Drywall lasts 18 months before it crumbles. Tile
                grout starts failing in under three years, and once it goes
                the substrate behind it goes too. The villain is rarely water
                alone — it is the daily cycle of acidic presoak, alkaline
                degreaser, foam soap, and freeze-thaw that breaks down
                whatever you put on the wall.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                FRP is the standard answer because the resin matrix is
                chemically inert against the full range of car wash chemistry
                and the panel itself is dimensionally stable through Ontario
                temperature swings. The detail that matters is what is
                behind and around the panel — moisture-resistant substrate,
                sealed edges, a properly detailed floor-to-wall transition,
                and the right texture for the location.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Corevance installs pebbled FRP where customers and attendants
                touch the wall — self-serve bays, vacuum islands, the lower
                4 ft of tunnel walls — and smooth FRP everywhere else. We
                sequence work bay-by-bay so operating bays stay live, and we
                stock matching panel and trim so when a brush arm or roof
                rack damages a single sheet, we can swap it without
                refinishing the whole wall.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Where FRP touches the mechanical room and TSSA-regulated
                equipment, we detail the adjacencies to keep the boiler
                clearance and venting compliant. Where wash water discharges
                to municipal sanitary or storm, we work to the conditions in
                your existing Ministry of the Environment, Conservation and
                Parks approval — we are not changing the discharge path,
                just cladding the room.
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
                <h3 className="font-bold mb-3">Car Wash Pricing Guide</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Smooth FRP standard install", "$8–$12/sq ft"],
                      ["Pebbled / complex install", "$12–$18/sq ft"],
                      ["6-bay tunnel (~2,400 sq ft)", "$19,200–$43,200"],
                      ["Single panel replacement", "Call for pricing"],
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
                  Why FRP for Car Washes
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Chemically inert against full wash chemistry</li>
                  <li>• Survives Ontario freeze-thaw without cracking</li>
                  <li>• Pebbled texture for traction-adjacent zones</li>
                  <li>• Bay-by-bay install keeps you operating</li>
                  <li>• Panel-replaceable after impact damage</li>
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
              Ontario Building Code, TSSA & Environmental Compliance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Car wash facilities sit at the intersection of several
              regulatory regimes. The wall finish itself is reviewed under
              Ontario Building Code §3.1.13 for flame-spread — Class C FRP
              clears the requirement for the rooms we install in. Mechanical
              rooms housing boilers, water heaters, and propane storage are
              regulated by the Technical Standards & Safety Authority (TSSA);
              we detail the FRP adjacencies to respect required clearances
              and venting. Wash water discharge is governed by the Ministry
              of the Environment, Conservation and Parks and by local
              municipal sewer-use bylaws — we work to your existing approval
              rather than altering the discharge path.
            </p>
            <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              Regulatory authorities
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
              Car Wash FRP — Frequently Asked Questions
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
              Get Your Car Wash Quote
            </h2>
            <p className="text-white/90 mb-6">
              Written, line-item quotes within 24 hours. Bay-by-bay install
              keeps you operating. Same-day panel delivery across the GTA.
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
