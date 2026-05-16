import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CITIES_LIST, type City } from "@/lib/cities";
import AreasMapWrapper from "./AreasMapWrapper";

const BASE_URL = "https://corevance.ca";
const PHONE_TEL = "4378493781";
const PHONE_DISPLAY = "437-849-3781";

export const metadata: Metadata = {
  title: "Areas We Serve — 32 Ontario Cities | Commercial FRP Installation",
  description:
    "Corevance delivers commercial FRP wall panel installation to 32 cities across Ontario from our Mississauga home base. Same-day delivery across the GTA, scheduled service to Hamilton, Waterloo Region, Durham, Niagara, Southwestern and Eastern Ontario.",
  alternates: { canonical: `${BASE_URL}/areas-we-serve` },
  keywords: [
    "FRP installation Ontario",
    "commercial FRP coverage map",
    "GTA FRP service area",
    "Ontario commercial wall panel installer",
    "Mississauga FRP supplier",
  ],
  openGraph: {
    title: "Areas We Serve — 32 Ontario Cities | Corevance",
    description:
      "Interactive coverage map of 32 Ontario cities served by Corevance from our Mississauga home base.",
    url: `${BASE_URL}/areas-we-serve`,
    type: "website",
    siteName: "Corevance",
    images: [
      {
        url: "/corevance-logo-full.png",
        width: 1200,
        height: 630,
        alt: "Corevance — Areas We Serve",
      },
    ],
    locale: "en_CA",
  },
};

function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial FRP Wall Panel Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "Corevance",
      url: BASE_URL,
      telephone: "+1-437-849-3781",
      email: "corevancesales@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mississauga",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    areaServed: CITIES_LIST.map((c) => ({
      "@type": "City",
      name: c.shortName,
      url: `${BASE_URL}/${c.slug}`,
    })),
  };
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Areas We Serve",
        item: `${BASE_URL}/areas-we-serve`,
      },
    ],
  };
}

function groupByRegion(cities: City[]): Record<string, City[]> {
  return cities.reduce<Record<string, City[]>>((acc, city) => {
    (acc[city.region] ||= []).push(city);
    return acc;
  }, {});
}

const REGION_ORDER = [
  "Toronto",
  "Peel Region",
  "York Region",
  "Halton Region",
  "Hamilton",
  "Niagara Region",
  "Waterloo Region",
  "Wellington County",
  "Brant County",
  "Southwestern Ontario",
  "Simcoe County",
  "Durham Region",
  "Eastern Ontario",
];

export default function AreasWeServePage() {
  const grouped = groupByRegion(CITIES_LIST);
  const regions = REGION_ORDER.filter((r) => grouped[r]?.length);

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema()),
        }}
      />

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
          <Link href="/" aria-label="Corevance home">
            <Image
              src="/corevance-logo-symbol.png"
              alt="Corevance — FRP Wall Panel Supplier"
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
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-16 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">
              Service Coverage
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Areas We Serve
            </h1>
            <p className="text-white/80 text-lg mb-6">
              Commercial FRP wall panel installation across 32 Ontario cities,
              dispatched from our Mississauga home base. Same-day delivery
              across the GTA, scheduled service to Hamilton, Waterloo Region,
              Durham, Niagara, Southwestern and Eastern Ontario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-[#ff6b35] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#e55a28] transition-all no-underline"
              >
                Request a Free Quote
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="border-2 border-white/50 text-white/90 font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <AreasMapWrapper />
            <p className="text-center text-xs text-gray-500 mt-4">
              Click any city on the map for FRP service details and a free
              quote.
            </p>
          </div>
        </section>

        <section className="py-12 px-5 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">
              All 32 Service Areas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <div
                  key={region}
                  className="bg-white rounded-2xl border border-gray-100 p-5"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#ff6b35] mb-3">
                    {region}
                  </h3>
                  <ul className="space-y-1.5">
                    {grouped[region].map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/${c.slug}`}
                          className="text-[#1e3a5f] hover:text-[#ff6b35] text-sm font-semibold no-underline transition-colors"
                        >
                          FRP Installation {c.shortName}
                          {c.slug === "frp-installation-mississauga" ? (
                            <span className="ml-2 inline-block px-2 py-0.5 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-[10px] font-bold uppercase tracking-wide">
                              Home Base
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-5 bg-[#ff6b35] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">
              Don&apos;t see your city?
            </h2>
            <p className="text-white/90 mb-6">
              Corevance services larger commercial projects across Ontario on
              scheduled delivery. Call to confirm coverage for your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-block bg-white text-[#ff6b35] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all no-underline"
              >
                Request a Free Quote
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-block border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#ff6b35] transition-all no-underline"
              >
                Call {PHONE_DISPLAY}
              </a>
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
        </p>
      </footer>
    </div>
  );
}
