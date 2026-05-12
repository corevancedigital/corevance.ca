import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Panel Installation in Toronto | Commercial Kitchen Wall Panels",
  description: "Professional FRP fiberglass wall panel installation in Toronto. CFIA-accepted, Class C rated. Serving commercial kitchens, restaurants, food processing facilities, and industrial spaces. Free quote in 24 hours.",
  alternates: { canonical: "https://corevance.ca/frp-installation-toronto" },
  keywords: [
    "FRP installation Toronto",
    "FRP panels Toronto",
    "commercial kitchen wall panels Toronto",
    "fiberglass wall panels Toronto",
    "FRP contractor Toronto",
    "CFIA FRP Toronto",
  ],
  openGraph: {
    title: "FRP Panel Installation in Toronto | Corevance",
    description: "Professional CFIA-accepted FRP wall panel installation in Toronto. Class C rated. Commercial kitchens, food facilities, industrial spaces. Free quote in 24 hours.",
    url: "https://corevance.ca/frp-installation-toronto",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "FRP Installation Toronto" }],
    locale: "en_CA",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Corevance — FRP Installation Toronto",
  description: "Commercial FRP wall panel installation and supply in Toronto. CFIA-accepted, Class C rated for commercial kitchens, food processing facilities, and industrial spaces.",
  url: "https://corevance.ca/frp-installation-toronto",
  telephone: "+1-437-849-3781",
  email: "corevancesales@gmail.com",
  areaServed: {
    "@type": "City",
    name: "Toronto",
    containedInPlace: { "@type": "State", name: "Ontario", containedInPlace: { "@type": "Country", name: "Canada" } },
  },
  serviceType: "FRP Wall Panel Installation",
  priceRange: "$$",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you install FRP panels in Toronto?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Corevance provides FRP wall panel installation and supply throughout Toronto, including downtown, East Toronto, North York, and Scarborough. We offer same-day delivery on standard panels and can mobilize installation crews within 3–5 business days of quote approval. Call 437-849-3781 for a free quote." },
    },
    {
      "@type": "Question",
      name: "How much does FRP installation cost in Toronto?",
      acceptedAnswer: { "@type": "Answer", text: "FRP wall panel installation in Toronto costs between $8 and $18 per square foot installed, depending on project scope, wall condition, and accessibility. Material-only supply is also available for contractors who self-install. Contact Corevance for a free on-site quote." },
    },
    {
      "@type": "Question",
      name: "How quickly can you start an FRP project in Toronto?",
      acceptedAnswer: { "@type": "Answer", text: "Standard panels can be delivered to Toronto job sites the same business day. Installation crews are typically available to begin within 3–5 business days of quote approval, depending on project scope." },
    },
  ],
};

export default function TorontoPage() {
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
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">Toronto, Ontario · Same-Day Delivery</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">FRP Wall Panel Installation in Toronto</h1>
            <p className="text-white/80 text-lg mb-8">
              Corevance provides professional FRP fiberglass wall panel installation and supply for commercial kitchens, restaurants, food processing facilities, and industrial spaces throughout Toronto. CFIA-accepted. Class C rated. Free quotes within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Get a Free Toronto Quote</a>
              <a href="tel:4378493781" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline">Call 437-849-3781</a>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="bg-amber-50 border-b border-amber-100 py-6 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Corevance installs Class C FRP wall panels in Toronto for commercial kitchens, food processing facilities, restaurants, and industrial spaces. Installed cost: <strong>$8–$18/sq ft</strong>. Same-day panel delivery. Crews available within 3–5 business days. CFIA-compliant systems. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a> for a free quote.
            </p>
          </div>
        </section>

        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-5">FRP Installation Across Toronto</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Toronto&apos;s commercial food service industry — from the dense restaurant corridors of downtown and the Entertainment District to the food processing facilities of North York and Scarborough — demands wall systems that meet CFIA and health code standards without the maintenance burden of grouted tile.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Corevance serves commercial kitchen operators, restaurant chains, food manufacturing facilities, healthcare spaces, and car washes throughout the City of Toronto. We understand Toronto Public Health&apos;s requirements for food service establishments and install complete FRP systems — panels, PVC moldings, nylon rivets, and food-safe adhesive — that pass inspection.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From a single kitchen renovation in the Junction to a full facility fitout in Etobicoke, we deliver the same standard: expert crews, same-day material availability, and zero shortcuts on compliance.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Same-day FRP panel delivery to Toronto job sites",
                  "CFIA-compliant installation systems",
                  "Toronto Public Health code compliant",
                  "1–3 day project completion",
                  "Free on-site assessment and written quote",
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ff6b35]/15 text-[#ff6b35] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                <h3 className="font-bold text-[#1e3a5f] mb-4">Toronto Neighbourhoods We Serve</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  {["Downtown Toronto", "East Toronto", "North York", "Scarborough", "Etobicoke", "York", "East York", "Entertainment District", "Junction", "Leslieville", "Liberty Village", "Midtown"].map(n => (
                    <span key={n} className="bg-white border border-gray-100 rounded-lg px-3 py-1.5 text-xs">{n}</span>
                  ))}
                </div>
              </div>
              <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Pricing Guide</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[["Standard installation", "$8–$12/sq ft"], ["Complex or multi-surface", "$12–$18/sq ft"], ["Material supply only", "Call for pricing"], ["Custom panel order", "Call for pricing"]].map(([label, price]) => (
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
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Toronto FRP FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "Do you install FRP panels in Toronto?", a: "Yes. Corevance provides FRP wall panel installation and supply throughout Toronto. We offer same-day delivery on standard panels and can mobilize installation crews within 3–5 business days of quote approval." },
                { q: "How much does FRP installation cost in Toronto?", a: "FRP wall panel installation in Toronto costs between $8 and $18 per square foot installed, depending on project scope, wall condition, and accessibility. Contact Corevance for a free on-site quote." },
                { q: "How quickly can you start an FRP project in Toronto?", a: "Standard panels deliver to Toronto job sites the same business day. Installation crews are typically available within 3–5 business days of quote approval." },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="text-[#1e3a5f] font-bold mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-5 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-500 text-sm mb-4">We also serve these nearby communities:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { city: "Mississauga", href: "/frp-installation-mississauga" },
                { city: "Brampton", href: "/frp-installation-brampton" },
                { city: "North York", href: "/frp-installation-north-york" },
                { city: "Scarborough", href: "/frp-installation-scarborough" },
              ].map(({ city, href }) => (
                <Link key={city} href={href} className="bg-gray-50 border border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-5 py-2 rounded-full text-sm transition-all no-underline">
                  FRP Installation {city}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-4 border-[#ff6b35] py-8 px-5 text-center">
        <p className="text-[#1e3a5f] font-semibold text-sm">© 2025 Corevance. All rights reserved.</p>
        <p className="text-gray-400 text-xs mt-1">
          <a href="tel:4378493781" className="hover:text-[#ff6b35] transition-colors">437-849-3781</a>
          {" · "}
          <Link href="/" className="hover:text-[#ff6b35] transition-colors">Home</Link>
          {" · "}
          <Link href="/services" className="hover:text-[#ff6b35] transition-colors">Services</Link>
          {" · "}
          <Link href="/products" className="hover:text-[#ff6b35] transition-colors">Products</Link>
        </p>
      </footer>
    </div>
  );
}
