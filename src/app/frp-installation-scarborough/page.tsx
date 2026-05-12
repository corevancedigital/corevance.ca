import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Panel Installation in Scarborough | Commercial Wall Panels",
  description: "FRP fiberglass wall panel installation and supply in Scarborough. CFIA-accepted, Class C rated. Commercial kitchens, food processing, industrial spaces. Same-day delivery. Free quote.",
  alternates: { canonical: "https://corevance.ca/frp-installation-scarborough" },
  keywords: ["FRP installation Scarborough", "FRP panels Scarborough", "commercial kitchen wall panels Scarborough", "FRP contractor Scarborough"],
  openGraph: {
    title: "FRP Panel Installation in Scarborough | Corevance",
    description: "CFIA-accepted FRP wall panel installation in Scarborough. Class C rated. Food processing specialists. Same-day delivery. Free quote.",
    url: "https://corevance.ca/frp-installation-scarborough",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "FRP Installation Scarborough" }],
    locale: "en_CA",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corevance — FRP Installation Scarborough",
  description: "Commercial FRP wall panel installation and supply in Scarborough. CFIA-accepted, Class C rated. Specialists in food processing facility wall systems.",
  url: "https://corevance.ca/frp-installation-scarborough",
  telephone: "+1-437-849-3781",
  email: "corevancesales@gmail.com",
  areaServed: { "@type": "City", name: "Scarborough", containedInPlace: { "@type": "State", name: "Ontario" } },
  serviceType: "FRP Wall Panel Installation",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you install FRP panels in Scarborough?", acceptedAnswer: { "@type": "Answer", text: "Yes. Corevance serves Scarborough including Warden, Birchmount, Morningside, and the Scarborough industrial districts with significant food processing infrastructure. Same-day delivery. Call 437-849-3781 for a free quote." } },
    { "@type": "Question", name: "How much does FRP installation cost in Scarborough?", acceptedAnswer: { "@type": "Answer", text: "FRP wall panel installation in Scarborough ranges from $8 to $18 per square foot installed. Corevance provides free on-site assessments and written quotes within 24 hours." } },
  ],
};

export default function ScarboroughPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
          <Link href="/" aria-label="Corevance home">
            <Image src="/corevance-logo-symbol.png" alt="Corevance" width={278} height={61} priority className="object-contain w-[150px] h-auto sm:w-[220px] lg:w-[278px]" />
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
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">Scarborough, Ontario · Food Processing Specialists</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">FRP Wall Panel Installation in Scarborough</h1>
            <p className="text-white/80 text-lg mb-8">
              Scarborough&apos;s food processing and manufacturing sector is one of the densest in the GTA. Corevance specializes in CFIA-accepted FRP wall panel systems for food processing facilities, commercial kitchens, and industrial spaces across Scarborough. Same-day delivery. Free quotes in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Get a Free Scarborough Quote</a>
              <a href="tel:4378493781" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline">Call 437-849-3781</a>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 border-b border-amber-100 py-6 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Corevance installs Class C FRP wall panels in Scarborough — particularly for the area&apos;s large food processing and manufacturing sector. Installed cost: <strong>$8–$18/sq ft</strong>. Same-day delivery. CFIA-compliant. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.
            </p>
          </div>
        </section>

        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5">FRP Installation Across Scarborough</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Scarborough hosts one of the GTA&apos;s largest concentrations of food processing and manufacturing facilities — along the Warden, Birchmount, and Morningside industrial corridors. These facilities operate under rigorous CFIA and federal/provincial health standards. Corevance installs the complete CFIA-compliant FRP wall systems these facilities require.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We also serve Scarborough&apos;s extensive commercial kitchen market — from busy restaurants along Markham Road, Lawrence Avenue East, and Scarborough Town Centre to institutional kitchens in schools and healthcare facilities across the district.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Corevance is uniquely positioned to serve Scarborough&apos;s food industry — we understand CFIA requirements, stock panels for same-day delivery, and have crews experienced in food facility FRP system installation.
              </p>
              <ul className="space-y-3 mb-8">
                {["Food processing facility specialists", "Same-day delivery to Scarborough", "CFIA-compliant complete systems", "Toronto Public Health code compliant", "Free on-site assessment"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ff6b35]/15 text-[#ff6b35] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1e3a5f] mb-4">Scarborough Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Warden / Birchmount", "Morningside", "Scarborough Town Centre", "Lawrence East", "Agincourt", "Malvern", "Highland Creek", "Cliffside"].map(n => (
                    <span key={n} className="bg-white border border-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-600">{n}</span>
                  ))}
                </div>
              </div>
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
            </div>
          </div>
        </section>

        <section className="py-16 px-5 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Scarborough FRP FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Do you install FRP panels in Scarborough?", a: "Yes. Corevance serves Scarborough including Warden, Birchmount, Morningside, and the Scarborough industrial districts with significant food processing infrastructure. Same-day delivery. Call 437-849-3781 for a free quote." },
                { q: "How much does FRP installation cost in Scarborough?", a: "FRP wall panel installation in Scarborough ranges from $8 to $18 per square foot installed. Free on-site assessments and written quotes within 24 hours." },
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
              {[{ city: "Toronto", href: "/frp-installation-toronto" }, { city: "Mississauga", href: "/frp-installation-mississauga" }, { city: "Brampton", href: "/frp-installation-brampton" }, { city: "North York", href: "/frp-installation-north-york" }].map(({ city, href }) => (
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
