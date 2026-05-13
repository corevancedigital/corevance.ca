import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Wall Panel Installation Vaughan | Commercial Contractor Supply | Corevance",
  description: "FRP fiberglass wall panel installation and supply in Vaughan, Ontario. CFIA-accepted, Class C rated. Commercial kitchens, food processing, industrial facilities. Same-day delivery. Free quote.",
  alternates: { canonical: "https://corevance.ca/frp-installation-vaughan" },
  keywords: [
    "FRP panels Vaughan",
    "FRP installation Vaughan",
    "commercial kitchen wall panels Vaughan",
    "FRP contractor Vaughan Ontario",
    "fiberglass wall panels Vaughan",
    "FRP supply Vaughan",
  ],
  openGraph: {
    title: "FRP Wall Panel Installation Vaughan | Corevance",
    description: "CFIA-accepted FRP wall panel installation and supply in Vaughan. Class C rated. Commercial kitchens and food facilities. Same-day delivery. Free quote within 24 hours.",
    url: "https://corevance.ca/frp-installation-vaughan",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "FRP Wall Panel Installation Vaughan — Corevance" }],
    locale: "en_CA",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corevance — FRP Installation Vaughan",
  description: "Commercial FRP fiberglass wall panel installation and supply in Vaughan, Ontario. CFIA-accepted, Class C rated. Specialists in commercial kitchen and food processing wall systems.",
  url: "https://corevance.ca/frp-installation-vaughan",
  telephone: "+1-437-849-3781",
  email: "corevancesales@gmail.com",
  areaServed: { "@type": "City", name: "Vaughan", containedInPlace: { "@type": "State", name: "Ontario" } },
  serviceType: "FRP Wall Panel Installation",
  priceRange: "$$",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install FRP wall panels in Vaughan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Corevance installs and supplies FRP wall panels throughout Vaughan, including the Concord, Maple, Woodbridge, and Highway 400 industrial corridor areas. Same-day delivery available. Call 437-849-3781 for a free quote.",
      },
    },
    {
      "@type": "Question",
      name: "How much does FRP panel installation cost in Vaughan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FRP wall panel installation in Vaughan costs $8–$18 per square foot installed, depending on wall condition, ceiling height, and project scope. Corevance provides free on-site assessments and written quotes within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What industries use FRP panels in Vaughan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vaughan's diverse economy includes food manufacturing, distribution, commercial kitchens, and healthcare facilities — all of which benefit from FRP wall panels. Corevance serves commercial contractors and facility managers in all these sectors across Vaughan.",
      },
    },
  ],
};

export default function VaughanPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
          <Link href="/" aria-label="Corevance home">
            <Image src="/corevance-logo-symbol.png" alt="Corevance — FRP Wall Panel Supplier Toronto" width={278} height={61} priority className="object-contain w-[150px] h-auto sm:w-[220px] lg:w-[278px]" />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <span className="hidden sm:block text-sm font-semibold text-[#1e3a5f] uppercase">Call us now</span>
            <a href="tel:4378493781" className="bg-[#ff6b35] text-white font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm hover:bg-[#e55a28] transition-all no-underline">437-849-3781</a>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-20 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">Vaughan, Ontario · Commercial FRP Specialist</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">FRP Wall Panel Installation in Vaughan</h1>
            <p className="text-white/80 text-lg mb-8">
              Vaughan contractors and facility operators choose Corevance for CFIA-accepted FRP wall panel installation and supply. We serve commercial kitchens, food manufacturing facilities, warehouses, and medical clinics across Vaughan with same-day delivery and free on-site quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Get a Free Vaughan Quote</a>
              <Link href="/estimate" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline">Estimate Your Materials →</Link>
              <a href="tel:4378493781" className="border-2 border-white/50 text-white/80 font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline">Call 437-849-3781</a>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-amber-50 border-b border-amber-100 py-6 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Corevance installs and supplies Class C FRP wall panels in Vaughan for commercial kitchens, food processing facilities, warehouses, and healthcare spaces. Installed cost: <strong>$8–$18/sq ft</strong>. Same-day delivery across Vaughan. CFIA-compliant complete systems. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a> for a free quote.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5">FRP Panel Installation Across Vaughan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vaughan is one of the fastest-growing commercial centres in Ontario, home to a large concentration of food manufacturing, distribution, and light industrial facilities along the Highway 400 and Highway 7 corridors. Corevance installs complete CFIA-accepted FRP wall panel systems that meet the rigorous hygiene and building code requirements these facilities demand.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We also serve Vaughan&apos;s growing commercial kitchen sector — from restaurants along Rutherford Road and Weston Road to catering operations and institutional kitchens in schools and healthcare facilities across the city. FRP wall panels eliminate the grout lines and bacterial harborage points that cause commercial kitchens to fail health inspections.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every Corevance installation in Vaughan includes the complete CFIA-compliant system: Class C panels, PVC divider bars, inside and outside corner trim, nylon rivets, and Titebond FRP adhesive. No hidden costs. Free on-site assessment and written quote within 24 hours.
              </p>
              <ul className="space-y-3">
                {["Food processing and manufacturing specialists", "Same-day delivery to Vaughan", "CFIA-compliant complete FRP systems", "Free on-site measurement and quote", "Class C fire-rated panels in stock"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ff6b35]/15 text-[#ff6b35] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1e3a5f] mb-4">Vaughan Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Concord", "Maple", "Woodbridge", "Kleinburg", "Thornhill (Vaughan)", "Highway 400 Corridor", "Highway 7 / VMC", "Rutherford"].map(n => (
                    <span key={n} className="bg-white border border-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-600">{n}</span>
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
                        <td className="py-2 text-right font-bold text-[#ff6b35]">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a href="/#contact" className="block mt-4 text-center bg-[#ff6b35] text-white font-bold py-3 rounded-full hover:bg-[#e55a28] transition-all no-underline text-sm">Get Exact Quote</a>
              </div>
              <Link href="/estimate" className="block text-center border-2 border-[#1e3a5f] text-[#1e3a5f] font-bold py-3 rounded-full hover:bg-[#1e3a5f] hover:text-white transition-all no-underline text-sm">Estimate Your Materials →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-5 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Vaughan FRP Panel FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Do you install FRP wall panels in Vaughan?", a: "Yes. Corevance installs and supplies FRP wall panels throughout Vaughan, including the Concord, Maple, Woodbridge, and Highway 400 industrial corridor areas. Same-day delivery available. Call 437-849-3781 for a free quote." },
                { q: "How much does FRP panel installation cost in Vaughan?", a: "FRP wall panel installation in Vaughan costs $8–$18 per square foot installed, depending on wall condition, ceiling height, and project scope. Corevance provides free on-site assessments and written quotes within 24 hours." },
                { q: "What industries use FRP panels in Vaughan?", a: "Vaughan's diverse economy includes food manufacturing, distribution, commercial kitchens, and healthcare facilities — all of which benefit from FRP wall panels. Corevance serves commercial contractors and facility managers in all these sectors across Vaughan." },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="text-[#1e3a5f] font-bold mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-5 bg-[#ff6b35] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">Get Your Free Vaughan Quote</h2>
            <p className="text-white/90 mb-6">Detailed quotes within 24 hours. Same-day delivery across Vaughan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="inline-block bg-white text-[#ff6b35] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all no-underline">Request Free Quote</a>
              <Link href="/estimate" className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#ff6b35] transition-all no-underline">Estimate Materials →</Link>
            </div>
          </div>
        </section>

        {/* Other cities */}
        <section className="py-12 px-5 bg-white text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-500 text-sm mb-4">Other GTA communities we serve:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { city: "Toronto",     href: "/frp-installation-toronto" },
                { city: "Mississauga", href: "/frp-installation-mississauga" },
                { city: "Brampton",    href: "/frp-installation-brampton" },
                { city: "Scarborough", href: "/frp-installation-scarborough" },
                { city: "North York",  href: "/frp-installation-north-york" },
                { city: "Etobicoke",   href: "/frp-installation-etobicoke" },
              ].map(({ city, href }) => (
                <Link key={city} href={href} className="bg-gray-50 border border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-5 py-2 rounded-full text-sm transition-all no-underline">FRP Installation {city}</Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-4 border-[#ff6b35] py-8 px-5 text-center">
        <p className="text-[#1e3a5f] font-semibold text-sm">© 2025 Corevance. All rights reserved.</p>
        <p className="text-gray-400 text-xs mt-1">
          <a href="tel:4378493781" className="hover:text-[#ff6b35] transition-colors">437-849-3781</a>
          {" · "}<Link href="/" className="hover:text-[#ff6b35] transition-colors">Home</Link>
          {" · "}<Link href="/services" className="hover:text-[#ff6b35] transition-colors">Services</Link>
          {" · "}<Link href="/products" className="hover:text-[#ff6b35] transition-colors">Products</Link>
          {" · "}<Link href="/pricing" className="hover:text-[#ff6b35] transition-colors">Pricing</Link>
        </p>
      </footer>
    </div>
  );
}
