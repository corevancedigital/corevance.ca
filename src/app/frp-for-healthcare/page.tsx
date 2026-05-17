import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://corevance.ca";
const PHONE_DISPLAY = "437-849-3781";
const PHONE_TEL = "4378493781";
const PAGE_URL = `${BASE_URL}/frp-for-healthcare`;

export const metadata: Metadata = {
  title: "FRP Wall Panels for Healthcare Ontario | Corevance",
  description:
    "FRP wall cladding for Ontario healthcare facilities — utility, soiled holding, cafeteria, LTC corridors. IPAC-aligned, CSA Z8000 conformant, off-hours install. $8–$18/sq ft.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "healthcare wall panels Ontario",
    "FRP for hospital",
    "IPAC Canada wall cladding",
    "long-term care wall panels",
    "CSA Z8000 wall cladding",
    "hospital utility room FRP",
    "LTC corridor wall panels",
    "Ontario healthcare FRP installer",
  ],
  openGraph: {
    title: "FRP Wall Panels for Ontario Healthcare Facilities | Corevance",
    description:
      "IPAC-aligned FRP wall systems for Ontario hospitals and LTC homes. Utility rooms, soiled holding, cafeteria, corridors. Daily disinfection-safe. Off-hours install. $8–$18/sq ft.",
    url: PAGE_URL,
    type: "website",
    siteName: "Corevance",
    images: [
      {
        url: "/corevance-logo-full.png",
        width: 1200,
        height: 630,
        alt: "FRP Wall Panels for Healthcare — Corevance Ontario",
      },
    ],
    locale: "en_CA",
  },
};

const FAQS = [
  {
    q: "Is FRP cleared by IPAC Canada?",
    a: "IPAC Canada does not 'clear' specific products — it sets cleanability and disinfection criteria for healthcare environments. Class C FRP, installed as a sealed system with PVC trim and food-safe adhesive, meets the requirement that wall surfaces be smooth, non-porous, and tolerant of routine disinfection with quaternary ammonium, hydrogen peroxide, and accelerated hydrogen peroxide cleaners. We provide the product documentation so your IPAC lead can verify it against your facility's policy.",
  },
  {
    q: "Where exactly do you NOT install FRP in a hospital?",
    a: "Patient rooms behind beds, operating theatres, sterile processing departments, and any clean-room or barrier-precaution environment. For those locations the correct spec is a PVC-skinned hygienic cladding like Altro Whiterock — purpose-built for sterile fields with heat-welded seams. We will say so up front and quote the appropriate product rather than force-fit FRP into a zone it was not designed for.",
  },
  {
    q: "CSA Z8000 conformance — yes?",
    a: "Yes, in the zones FRP belongs in. CSA Z8000 (Canadian healthcare facilities) requires wall surfaces in clinical support, utility, and food-service areas to be cleanable, durable, and impact-tolerant. Class C FRP meets the cleanability and durability criteria, and we detail corner guards and full-height runs where gurney and cart traffic is heavy. For zones specifically requiring monolithic, seamless surfaces (sterile, isolation), we spec the appropriate alternative.",
  },
  {
    q: "Can you install in an operating LTC home overnight?",
    a: "Yes. Long-term care corridors and resident-facing washrooms are typically refit in 10 pm to 6 am windows, room-by-room or section-by-section, so resident routines are not disrupted. We use low-VOC, fast-cure food-safe adhesive, manage dust with negative-pressure isolation, and turn over each section clean before moving on.",
  },
  {
    q: "Antimicrobial options?",
    a: "Yes — Class C FRP is available with factory-applied antimicrobial coatings that inhibit surface microbial growth between routine disinfection cycles. We are clear with clients that this is supplementary to, not a replacement for, IPAC-aligned cleaning protocols. We will spec the antimicrobial variant where the facility's IPAC committee has approved it.",
  },
  {
    q: "Cost for a 500 sq ft clinic refit?",
    a: "A 500 sq ft clinic refit typically lands between $4,000 and $9,000 installed — based on $8–$18/sq ft. Drivers are off-hours labour, the complexity of existing finishes to be stripped, antimicrobial vs standard panel, and whether the work needs to coordinate with active patient flow. Written quote within 24 hours of a site walk.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "FRP Wall Panel Installation for Healthcare Facilities",
  name: "FRP Wall Panels for Healthcare",
  description:
    "IPAC-aligned FRP wall cladding installation for Ontario hospitals, clinics, and LTC homes. Class C, daily disinfection-safe, off-hours install. $8–$18/sq ft.",
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
    name: "Healthcare FRP Panel Options",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Class C FRP for utility, soiled holding & support areas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Antimicrobial-coated FRP variants",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Impact-tolerant FRP for LTC corridors & cart routes",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PVC-skinned hygienic cladding for sterile fields (spec & source)",
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
      name: "FRP for Healthcare",
      item: PAGE_URL,
    },
  ],
};

const AUTHORITIES = [
  "Public Health Ontario",
  "IPAC Canada",
  "CSA Z8000 (Canadian healthcare facilities)",
  "Ministry of Long-Term Care",
  "Ontario Building Code §3.1.13",
];

const FRP_ZONES = [
  "Utility rooms — full-height Class C, sealed at floor cove",
  "Soiled holding rooms — wash-down tolerant, disinfection-safe",
  "Lab back-of-house — chemical-tolerant, easy daily wipedown",
  "Cafeteria & servery walls — food-service rated Class C",
  "Staff washrooms — full-height, sealed at fixtures",
  "Long-term care corridors — impact-tolerant, with corner guards",
  "Clinic vestibules & non-patient-care zones — smooth Class C",
  "Sterile fields & patient rooms — we spec Altro Whiterock or similar PVC cladding",
];

const RELATED_VERTICALS = [
  { href: "/frp-for-restaurants", label: "FRP for Restaurants" },
  { href: "/frp-for-food-processing", label: "FRP for Food Processing" },
  { href: "/frp-for-car-washes", label: "FRP for Car Washes" },
];

const RELATED_CITIES = [
  { href: "/frp-installation-toronto", label: "FRP Installation Toronto" },
  { href: "/frp-installation-mississauga", label: "FRP Installation Mississauga" },
  { href: "/frp-installation-markham", label: "FRP Installation Markham" },
  { href: "/frp-installation-richmond-hill", label: "FRP Installation Richmond Hill" },
];

export default function FrpForHealthcarePage() {
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
              ONTARIO HEALTHCARE FACILITIES
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              FRP Wall Panels for Ontario Healthcare Facilities
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Class C FRP wall systems for Ontario hospitals, clinics, and
              long-term care homes — utility rooms, soiled holding, cafeteria,
              LTC corridors, staff washrooms. IPAC-aligned, CSA Z8000
              conformant, and installed during off-hours so resident and
              patient flow keeps moving. $8–$18/sq ft installed.
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
              Corevance installs Class C FRP wall systems in Ontario
              healthcare facilities — utility rooms, soiled holding,
              cafeteria, LTC corridors, staff washrooms, clinic vestibules —
              for <strong>$8–$18/sq ft</strong> installed. Daily
              disinfection-safe with quaternary ammonium and peroxide
              cleaners, CSA Z8000 conformant in non-patient-care zones, and
              installed during off-hours. For sterile fields and patient
              rooms we spec Altro Whiterock or equivalent. Call{" "}
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
                Built for IPAC, CSA Z8000, and the 10 pm to 6 am Window
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Healthcare facilities have the strictest wall-surface
                requirements of any vertical we serve. IPAC Canada
                guidelines call for cleanability and tolerance of routine
                disinfection — quaternary ammonium, hydrogen peroxide,
                accelerated hydrogen peroxide. CSA Z8000 (Canadian
                healthcare facilities) layers on durability and impact
                tolerance for the gurney, cart, and bed traffic of a working
                hospital. And the facility itself rarely closes, so the
                install window is overnight or weekend, with rigorous dust
                and infection-control protocols.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Class C FRP, installed as a complete sealed system, is the
                right answer for clinical-support and non-patient-care zones:
                utility rooms, soiled holding, lab back-of-house, cafeteria
                and servery walls, staff washrooms, long-term care corridors,
                and clinic vestibules. The panel is smooth, non-porous,
                impact-tolerant, and survives the daily disinfection cycle
                without degradation. Antimicrobial-coated variants are
                available where the facility's IPAC committee has approved
                them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We will tell you where FRP does not belong. Patient rooms
                behind beds, operating theatres, sterile processing, and
                barrier-precaution rooms need a PVC-skinned hygienic
                cladding like Altro Whiterock with heat-welded seams. We
                spec and source it rather than push FRP into a zone it was
                not designed for.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Install windows are typically 10 pm to 6 am for LTC homes
                and hospitals, with negative-pressure isolation, low-VOC
                fast-cure adhesive, and section-by-section turnover so
                resident routines and patient flow are not disrupted. We
                coordinate with your IPAC lead, environmental services, and
                facilities team on every project.
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
                <h3 className="font-bold mb-3">Healthcare Pricing Guide</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Standard utility / support install", "$8–$12/sq ft"],
                      ["Antimicrobial / complex install", "$12–$18/sq ft"],
                      ["Off-hours / overnight labour", "Quoted separately"],
                      ["Altro Whiterock spec & supply", "Call for pricing"],
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
                  Why FRP for Healthcare
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• IPAC-aligned cleanability & disinfection tolerance</li>
                  <li>• CSA Z8000 conformant in support zones</li>
                  <li>• Impact-tolerant for gurney & cart traffic</li>
                  <li>• 10 pm to 6 am install windows respected</li>
                  <li>• Antimicrobial coating options available</li>
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
              IPAC Canada, CSA Z8000 & Healthcare Regulatory Alignment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ontario healthcare facilities operate under guidance from
              Public Health Ontario and IPAC Canada for infection prevention
              and control, with the physical environment standards set by
              CSA Z8000 (Canadian healthcare facilities). Long-term care
              homes carry the additional layer of Ministry of Long-Term Care
              oversight. Class C FRP installed as a sealed system meets
              IPAC cleanability and disinfection-tolerance criteria, and
              meets CSA Z8000 durability and impact requirements in
              clinical-support and non-patient-care zones. Flame-spread
              requirements under Ontario Building Code §3.1.13 are respected
              throughout. For sterile fields, patient rooms, and barrier
              precaution areas, we honestly spec a PVC-skinned hygienic
              cladding instead.
            </p>
            <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              Regulatory & guidance authorities
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
              Healthcare FRP — Frequently Asked Questions
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
              Get Your Healthcare Facility Quote
            </h2>
            <p className="text-white/90 mb-6">
              Written, line-item quotes within 24 hours. Off-hours and
              overnight installs across Ontario. IPAC-aligned, CSA Z8000
              conformant.
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
              Other industries & Ontario cities we serve:
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
