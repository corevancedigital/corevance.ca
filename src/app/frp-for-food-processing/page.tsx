import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE_URL = "https://corevance.ca";
const PHONE_DISPLAY = "437-849-3781";
const PHONE_TEL = "4378493781";
const PAGE_URL = `${BASE_URL}/frp-for-food-processing`;

export const metadata: Metadata = {
  title: "FRP Wall Panels for Food Processing Ontario | Corevance",
  description:
    "CFIA-accepted FRP wall cladding for Ontario food processing plants. Full PCP documentation, wash-down rated, night-shift installs. Class C, $8–$18/sq ft. Free quote.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "food processing wall cladding Ontario",
    "CFIA wall panels food processor",
    "hygienic wall panels Ontario plant",
    "SFCR FRP installer",
    "SQF BRC wall cladding Ontario",
    "wash-down FRP panels",
    "Ontario food plant FRP",
    "CFIA-accepted wall system",
  ],
  openGraph: {
    title: "FRP Wall Panels for Food Processing Facilities | Corevance",
    description:
      "Ontario-wide FRP installation for CFIA-regulated food processors. Full PCP documentation, wash-down rated panels, Class C, night-shift installs. $8–$18/sq ft.",
    url: PAGE_URL,
    type: "website",
    siteName: "Corevance",
    images: [
      {
        url: "/corevance-logo-full.png",
        width: 1200,
        height: 630,
        alt: "FRP Wall Panels for Food Processing — Corevance Ontario",
      },
    ],
    locale: "en_CA",
  },
};

const FAQS = [
  {
    q: "Will inspectors accept the system without seeing a test report?",
    a: "Some will, most will not. Under the Safe Food for Canadians Regulations (SFCR), your Preventive Control Plan (PCP) needs to document that wall surfaces are non-porous and cleanable. CFIA inspectors increasingly ask for the underlying product spec. We provide the full assembly documentation up front so it sits in your PCP binder before the inspector ever walks in.",
  },
  {
    q: "What documentation do you provide?",
    a: "A complete PCP package: panel data sheet (CFIA acceptance, Class C flame-spread, food-contact suitability), adhesive SDS and food-safe statement, nylon rivet spec, PVC trim sheet, sealant data, and a written scope-of-work showing the assembly was installed per manufacturer instructions. That goes to your QA team for the PCP and to your SQF/BRC/FSSC 22000 auditor.",
  },
  {
    q: "Can you install in a SQF / BRC / FSSC 22000-audited plant?",
    a: "Yes. We work to plant GMPs — designated entrances, hairnets, beard nets, smocks, footwear control, allergen segregation, and tool sanitation. We coordinate with your QA lead on swabbing the area before turnover and we leave a clean, documented assembly that an auditor can verify against your PCP.",
  },
  {
    q: "Do you do night-shift installs to avoid production downtime?",
    a: "Yes — most processing rooms cannot lose a full production day. We work overnights and during 24-hour shutdowns, sequence the build so production-critical walls are turned over first, and use rapid-cure food-safe adhesive so the room is ready for sanitation when your shift comes back on.",
  },
  {
    q: "Allergen-segregation wall colour-coding — possible?",
    a: "Yes. FRP comes in a range of stock colours; we routinely use a distinct panel colour or a coloured PVC trim to mark allergen-segregated rooms, packaging-only zones, or raw-vs-ready-to-eat boundaries. We coordinate with your allergen control program so the colour story matches the rest of your facility.",
  },
  {
    q: "Cost for a 3,000 sq ft processing room?",
    a: "A 3,000 sq ft processing room typically lands between $24,000 and $54,000 installed — based on $8–$18/sq ft. Drivers are washdown rating, the number of equipment penetrations and floor-to-ceiling coves, whether the work is night-shift, and whether old finishes need stripping. We deliver a written, line-item quote within 24 hours of a site walk.",
  },
];

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "FRP Wall Panel Installation for Food Processing Facilities",
  name: "FRP Wall Panels for Food Processing",
  description:
    "CFIA-accepted FRP wall cladding installation for Ontario food processing plants. Full PCP documentation, wash-down rated panels, Class C, night-shift installs. $8–$18/sq ft.",
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
    name: "Food Processing FRP Panel Options",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Class C wash-down rated FRP panels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Allergen-segregation colour-coded FRP",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sanitary PVC trim & floor-to-wall cove detailing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full PCP documentation package",
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
      name: "FRP for Food Processing",
      item: PAGE_URL,
    },
  ],
};

const AUTHORITIES = [
  "Canadian Food Inspection Agency (CFIA)",
  "Safe Food for Canadians Regulations (SFCR)",
  "SQF / BRC / FSSC 22000",
  "Ontario Building Code §3.1.13",
];

const FRP_ZONES = [
  "Processing rooms — full-height, wash-down rated assembly",
  "Packaging line walls — impact-tolerant FRP, sealed at all penetrations",
  "Cold storage vestibules — moisture-tolerant detail at thermal break",
  "Allergen-segregated rooms — colour-coded panels and trim",
  "Washdown corridors — pebbled FRP rated for daily high-pressure cleaning",
  "Dock-area back walls — chemical and impact resistant",
  "Specialized insulated panels — recommended for freezer interiors (we'll spec)",
];

const RELATED_VERTICALS = [
  { href: "/frp-for-restaurants", label: "FRP for Restaurants" },
  { href: "/frp-for-car-washes", label: "FRP for Car Washes" },
  { href: "/frp-for-healthcare", label: "FRP for Healthcare" },
];

const RELATED_CITIES = [
  { href: "/frp-installation-mississauga", label: "FRP Installation Mississauga" },
  { href: "/frp-installation-brampton", label: "FRP Installation Brampton" },
  { href: "/frp-installation-vaughan", label: "FRP Installation Vaughan" },
  { href: "/frp-installation-scarborough", label: "FRP Installation Scarborough" },
];

export default function FrpForFoodProcessingPage() {
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
              ONTARIO FOOD PROCESSORS
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              FRP Wall Panels for Food Processing Facilities in Ontario
            </h1>
            <p className="text-white/80 text-lg mb-8">
              CFIA-accepted FRP wall systems for Ontario processing plants —
              with full Preventive Control Plan documentation, wash-down rated
              panels, allergen-segregation colour-coding, and night-shift
              installs that respect your production schedule. $8–$18/sq ft
              installed.
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
              Corevance installs CFIA-accepted, wash-down rated Class C FRP
              wall systems in Ontario food processing plants for{" "}
              <strong>$8–$18/sq ft</strong> installed, with the panel,
              adhesive, rivet, and trim documentation packaged for your PCP
              and SQF/BRC audit. Night-shift and 24-hour shutdown installs are
              standard. Call{" "}
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
                Built for the PCP Binder and the Production Line
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Federally registered food processors in Ontario operate under
                the Safe Food for Canadians Regulations, which require a
                documented Preventive Control Plan covering, among other
                things, the construction and maintenance of wall surfaces.
                CFIA inspectors are increasingly asking for the product
                documentation behind the assembly, not just a verbal
                confirmation that "it's FRP." A panel that fails during the
                first month of washdown cycles is a deviation the auditor will
                write up.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Corevance installs the complete CFIA-accepted system —
                Class C panels, food-safe adhesive, sanitary PVC trim, nylon
                rivets — and hands over the documentation as part of project
                closeout. Your QA lead drops the package into the PCP binder.
                When the SQF, BRC, or FSSC 22000 auditor arrives, the wall
                assembly is one less thing to defend.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We work the way a processing plant actually runs. We sequence
                work around 24-hour shutdowns, run night shifts when production
                cannot stop, gown to plant GMPs, segregate tools and
                debris from active production, and coordinate with your
                sanitation crew so the room is ready for swabbing as soon as
                we leave. Allergen-segregation colour-coding is built into the
                spec.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Where FRP is not the right answer, we say so. Freezer
                interiors are better served by specialized insulated wall
                panels — we will spec and source those rather than force-fit
                FRP into a thermal envelope it was not designed for.
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
                <h3 className="font-bold mb-3">Food Processing Pricing Guide</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Standard processing room", "$8–$12/sq ft"],
                      ["Wash-down / multi-surface", "$12–$18/sq ft"],
                      ["Night-shift / shutdown labour", "Quoted separately"],
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
                  Why FRP for Food Processing
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• CFIA-accepted system with full documentation</li>
                  <li>• Survives daily high-pressure washdown</li>
                  <li>• PCP-ready spec package on turnover</li>
                  <li>• Night-shift and 24-hour shutdown installs</li>
                  <li>• Allergen colour-coding available</li>
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
              CFIA, SFCR & Audit Programme Compliance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Federally registered food processors are inspected by the CFIA
              under the Safe Food for Canadians Regulations, and most carry an
              additional third-party programme — SQF, BRC, or FSSC 22000 — to
              meet retailer requirements. All of these standards require wall
              surfaces in food contact and food handling zones to be
              non-absorbent, easily cleanable, and free of harbourage points.
              Corevance installs the complete CFIA-accepted FRP assembly and
              delivers the supporting product documentation as part of project
              closeout, so the wall system is defensible against both
              regulatory and audit scrutiny. Flame-spread requirements under
              Ontario Building Code §3.1.13 are respected throughout.
            </p>
            <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              Regulatory & audit authorities
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
              Food Processing FRP — Frequently Asked Questions
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
              Get Your Processing Plant Quote
            </h2>
            <p className="text-white/90 mb-6">
              Written, line-item quotes within 24 hours. PCP documentation
              package included. Night-shift and shutdown installs available
              across Ontario.
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
    </div>
  );
}
