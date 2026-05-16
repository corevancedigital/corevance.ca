import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CITY_SLUGS,
  cityMapUrl,
  getCityBySlug,
  relatedCities,
  type City,
} from "@/lib/cities";

const BASE_URL = "https://corevance.ca";
const PHONE_DISPLAY = "437-849-3781";
const PHONE_TEL = "4378493781";
const PRICE_STRONG = "$8–$18/sq ft";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SLUGS.map((citySlug) => ({ citySlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  const url = `${BASE_URL}/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: url },
    keywords: city.keywords,
    openGraph: {
      title: city.ogTitle,
      description: city.ogDescription,
      url,
      type: "website",
      siteName: "Corevance",
      images: [
        {
          url: "/corevance-logo-full.png",
          width: 1200,
          height: 630,
          alt: city.ogImageAlt,
        },
      ],
      locale: "en_CA",
    },
  };
}

function buildLocalBusinessSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: city.schemaName,
    description: city.schemaDescription,
    url: `${BASE_URL}/${city.slug}`,
    telephone: "+1-437-849-3781",
    email: "corevancesales@gmail.com",
    image: `${BASE_URL}/corevance-logo-full.png`,
    hasMap: cityMapUrl(city),
    areaServed: {
      "@type": "City",
      name: city.shortName,
      containedInPlace: {
        "@type": "State",
        name: "Ontario",
        containedInPlace: { "@type": "Country", name: "Canada" },
      },
    },
    serviceType: "FRP Wall Panel Installation",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };
}

function buildFaqSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function buildBreadcrumbSchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `FRP Installation ${city.shortName}`,
        item: `${BASE_URL}/${city.slug}`,
      },
    ],
  };
}

function QuickAnswerLine({ template }: { template: string }) {
  const parts = template.split(/\{PRICE\}|\{PHONE\}/g);
  return (
    <>
      {parts[0]}
      <strong>{PRICE_STRONG}</strong>
      {parts[1]}
      <a href={`tel:${PHONE_TEL}`} className="text-[#ff6b35] font-semibold">
        {PHONE_DISPLAY}
      </a>
      {parts[2]}
    </>
  );
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ citySlug: string }>;
}) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const localSchema = buildLocalBusinessSchema(city);
  const faqSchema = buildFaqSchema(city);
  const breadcrumbSchema = buildBreadcrumbSchema(city);
  const related = relatedCities(city.slug, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              {city.heroTagline}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              FRP Wall Panel Installation in {city.shortName}
            </h1>
            <p className="text-white/80 text-lg mb-8">{city.heroIntro}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline"
              >
                Get a Free {city.shortName} Quote
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
              <QuickAnswerLine template={city.quickAnswer} />
            </p>
          </div>
        </section>

        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5">
                {city.mainHeading}
              </h2>
              {city.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-gray-600 leading-relaxed ${
                    i === city.paragraphs.length - 1 ? "mb-8" : "mb-4"
                  }`}
                >
                  {p}
                </p>
              ))}
              <ul className="space-y-3">
                {city.bullets.map((item) => (
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
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1e3a5f] mb-4">
                  {city.shortName} Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {city.neighbourhoods.map((n) => (
                    <span
                      key={n}
                      className="bg-white border border-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-600"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Pricing Guide</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ["Standard installation", "$8–$12/sq ft"],
                      ["Complex or multi-surface", "$12–$18/sq ft"],
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
              {city.compliance.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {city.compliance.body}
            </p>
            <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">
              Inspecting & regulatory authorities
            </p>
            <div className="flex flex-wrap gap-2">
              {city.compliance.authorities.map((auth) => (
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
              {city.faqHeading}
            </h2>
            <div className="space-y-6">
              {city.faqs.map(({ q, a }) => (
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
              Get Your Free {city.shortName} Quote
            </h2>
            <p className="text-white/90 mb-6">
              Detailed quotes within 24 hours. Same-day delivery across{" "}
              {city.shortName}.
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
              Other GTA communities we serve:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="bg-gray-50 border border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-5 py-2 rounded-full text-sm transition-all no-underline"
                >
                  FRP Installation {c.shortName}
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
        </p>
      </footer>
    </div>
  );
}
