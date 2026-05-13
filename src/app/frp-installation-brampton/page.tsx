import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Panel Installation in Brampton | Commercial Wall Panels",
  description: "FRP fiberglass wall panel installation and supply in Brampton. CFIA-accepted, Class C rated. Commercial kitchens, food facilities, industrial spaces. Same-day delivery. Free quote.",
  alternates: { canonical: "https://corevance.ca/frp-installation-brampton" },
  keywords: ["FRP installation Brampton", "FRP panels Brampton", "commercial kitchen wall panels Brampton", "FRP contractor Brampton"],
  openGraph: {
    title: "FRP Panel Installation in Brampton | Corevance",
    description: "CFIA-accepted FRP wall panel installation in Brampton. Class C rated. Same-day delivery. Free quote in 24 hours.",
    url: "https://corevance.ca/frp-installation-brampton",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "FRP Installation Brampton" }],
    locale: "en_CA",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corevance — FRP Installation Brampton",
  description: "Commercial FRP wall panel installation and supply in Brampton. CFIA-accepted, Class C rated.",
  url: "https://corevance.ca/frp-installation-brampton",
  telephone: "+1-437-849-3781",
  email: "corevancesales@gmail.com",
  areaServed: { "@type": "City", name: "Brampton", containedInPlace: { "@type": "State", name: "Ontario" } },
  serviceType: "FRP Wall Panel Installation",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you install FRP panels in Brampton?", acceptedAnswer: { "@type": "Answer", text: "Yes. Corevance serves Brampton including Bramalea, Heart Lake, Castlemore, and the Highway 410 industrial corridor. Same-day delivery on standard panels. Call 437-849-3781 for a free quote." } },
    { "@type": "Question", name: "How much does FRP installation cost in Brampton?", acceptedAnswer: { "@type": "Answer", text: "FRP wall panel installation in Brampton ranges from $8 to $18 per square foot installed. Corevance provides free on-site assessments and written quotes within 24 hours." } },
  ],
};

export default function BramptonPage() {
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
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-20 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">Brampton, Ontario · Same-Day Delivery</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">FRP Wall Panel Installation in Brampton</h1>
            <p className="text-white/80 text-lg mb-8">
              Commercial FRP installation and supply across Brampton. Serving food manufacturing facilities along the 410 corridor, commercial kitchens in Bramalea and Heart Lake, and industrial spaces throughout Peel Region. CFIA-accepted. Free quotes in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Get a Free Brampton Quote</a>
              <Link href="/estimate" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline">Estimate Your Materials →</Link>
              <a href="tel:4378493781" className="border-2 border-white/50 text-white/80 font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline">Call 437-849-3781</a>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-b border-amber-100 py-6 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Corevance installs Class C FRP wall panels in Brampton for commercial kitchens, food processing, and industrial spaces. Installed cost: <strong>$8–$18/sq ft</strong>. Same-day delivery. CFIA-compliant. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.
            </p>
          </div>
        </section>

        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5">FRP Installation Across Brampton</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Brampton&apos;s significant food manufacturing and distribution sector — concentrated along the Highway 410, 427, and Steeles Avenue industrial corridors — demands hygienic, CFIA-compliant wall systems. Corevance delivers exactly that for food processors, commercial kitchen operators, and industrial facility managers across the city.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With Brampton&apos;s growing commercial restaurant strip along Hurontario, Queen Street, and Kennedy Road, demand for commercial kitchen renovations with FRP panels is strong. We serve those projects with the same expert standard: complete CFIA systems, no shortcuts, same-day material availability.
              </p>
              <ul className="space-y-3 mb-8">
                {["Same-day delivery to Brampton job sites", "Peel Region health code compliant", "Highway 410 corridor food facility experience", "Complete CFIA-accepted systems", "Free on-site assessment"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ff6b35]/15 text-[#ff6b35] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1e3a5f] mb-4">Brampton Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Bramalea", "Heart Lake", "Castlemore", "Fletcher&apos;s Creek", "Mount Pleasant", "Springdale", "Sandringham", "Gore Industrial"].map(n => (
                    <span key={n} className="bg-white border border-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-600">{n}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Pricing Guide</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[["Standard installation", "$8–$12/sq ft"], ["Complex or multi-surface", "$12–$18/sq ft"], ["Material supply only", "Call for pricing"]].map(([label, price]) => (
                      <tr key={label} className="border-b border-white/15">
                        <td className="py-2 text-white/70">{label}</td>
                        <td className="py-2 text-right font-bold text-[#ff6b35]">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a href="/#contact" className="block mt-4 text-center bg-[#ff6b35] text-white font-bold py-3 rounded-full hover:bg-[#e55a28] transition-all no-underline text-sm">Get Exact Quote</a>
              </div>
              <Link href="/estimate" className="block text-center border-2 border-[#1e3a5f] text-[#1e3a5f] font-bold py-3 rounded-full hover:bg-[#1e3a5f] hover:text-white transition-all no-underline text-sm">Estimate Your Materials</Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-5 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Brampton FRP FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Do you install FRP panels in Brampton?", a: "Yes. Corevance serves Brampton including Bramalea, Heart Lake, Castlemore, and the Highway 410 industrial corridor. Same-day delivery on standard panels. Call 437-849-3781 for a free quote." },
                { q: "How much does FRP installation cost in Brampton?", a: "FRP wall panel installation in Brampton ranges from $8 to $18 per square foot installed. Corevance provides free on-site assessments and written quotes within 24 hours." },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="text-[#1e3a5f] font-bold mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-5 bg-white text-center">
          <div className="max-w-6xl mx-auto">
            <p className="text-gray-500 text-sm mb-4">Other GTA communities we serve:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[{ city: "Toronto", href: "/frp-installation-toronto" }, { city: "Mississauga", href: "/frp-installation-mississauga" }, { city: "North York", href: "/frp-installation-north-york" }, { city: "Scarborough", href: "/frp-installation-scarborough" }].map(({ city, href }) => (
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
        </p>
      </footer>
    </div>
  );
}
