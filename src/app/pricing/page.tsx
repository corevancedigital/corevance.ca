import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Panel Pricing | Installation & Supply Costs in GTA",
  description: "FRP wall panel installation costs in the GTA: $8–$18 per sq ft installed. Supply-only pricing available. Class C panels, same-day delivery. Free quote within 24 hours.",
  alternates: { canonical: "https://corevance.ca/pricing" },
  keywords: [
    "FRP panel cost Canada",
    "FRP installation price Toronto",
    "how much do FRP panels cost",
    "FRP panel price per square foot",
    "commercial FRP pricing GTA",
    "FRP supply cost Ontario",
  ],
  openGraph: {
    title: "FRP Panel Pricing | Corevance GTA",
    description: "FRP wall panel installation: $8–$18/sq ft installed in the GTA. Free quote within 24 hours. Contractor pricing available.",
    url: "https://corevance.ca/pricing",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "Corevance FRP Pricing" }],
    locale: "en_CA",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "FRP Wall Panel Installation & Supply",
  provider: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
  areaServed: "Greater Toronto Area",
  description: "Commercial FRP fiberglass wall panel installation and supply. Class C fire-rated, CFIA-accepted. $8–$18 per square foot installed.",
  offers: [
    { "@type": "Offer", name: "Standard FRP Installation", description: "Standard wall conditions, typical height. $8–$12 per sq ft installed.", priceCurrency: "CAD", price: "8.00", priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "CAD", price: "8.00", unitText: "per square foot" } },
    { "@type": "Offer", name: "Complex FRP Installation", description: "Challenging substrate, high ceilings, many corners. $12–$18 per sq ft installed.", priceCurrency: "CAD", price: "12.00" },
    { "@type": "Offer", name: "FRP Project Consultation", description: "Free on-site assessment and written quote within 24 hours.", priceCurrency: "CAD", price: "0.00" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does FRP panel installation cost in Toronto?", acceptedAnswer: { "@type": "Answer", text: "FRP wall panel installation in Toronto costs $8–$18 per square foot installed. Standard wall conditions with typical ceiling height fall in the $8–$12 range. Complex installations (poor substrate, high ceilings, many corners) range $12–$18/sq ft. Corevance provides free on-site quotes within 24 hours." } },
    { "@type": "Question", name: "What is the cost of FRP panels per square foot in Canada?", acceptedAnswer: { "@type": "Answer", text: "Material cost for Class C FRP panels in Canada varies by size and quantity. For installed price (materials + labour), expect $8–$18/sq ft across the GTA. For supply-only pricing, contact Corevance at 437-849-3781." } },
    { "@type": "Question", name: "Are there volume discounts for FRP panels?", acceptedAnswer: { "@type": "Answer", text: "Yes. Contractor accounts receive 15% below retail pricing, with an additional 5% discount on orders of 20+ panels. Contact Corevance to open a contractor account." } },
  ],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
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
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-16 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">Transparent Pricing · No Hidden Fees</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">FRP Panel Pricing in the GTA</h1>
            <p className="text-white/80 text-lg">Real price ranges from Corevance project history. Free quotes within 24 hours.</p>
          </div>
        </section>

        {/* Quick Answer — AEO optimized */}
        <section className="bg-amber-50 border-b border-amber-100 py-6 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              <strong>FRP wall panel installation in the GTA costs $8–$18 per square foot installed</strong> (Class C, 2mm panels, complete system with PVC trim). Standard conditions: $8–$12/sq ft. Complex installations: $12–$18/sq ft. Material supply only is also available. Free on-site quotes within 24 hours. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="py-20 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-3">Installation Pricing</h2>
            <p className="text-center text-gray-500 mb-12">All pricing includes Class C FRP panels, PVC divider bars, corner moldings, nylon rivets, and food-safe adhesive. CFIA-compliant systems.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {[
                { label: "Standard", price: "$8–$12", unit: "/sq ft installed", desc: "Good wall condition, standard ceiling height (up to 9′), typical number of corners and cutouts.", includes: ["FRP panel supply", "PVC trim system", "Nylon rivets", "Food-safe adhesive", "Installation labour", "CFIA-compliant system"] },
                { label: "Complex", price: "$12–$18", unit: "/sq ft installed", desc: "Challenging substrate (old tile removal, uneven walls), high ceilings (9′+), many corners, or confined spaces.", includes: ["All Standard inclusions", "Substrate preparation", "Extended staging", "Additional trim work", "Complex corner solutions"] },
                { label: "Consultation", price: "Free", unit: "", desc: "On-site assessment, material take-off, health code compliance review, and detailed written quote. No obligation.", includes: ["On-site measurement", "Material calculation", "Compliance review", "Written quote", "24-hour turnaround"] },
              ].map(({ label, price, unit, desc, includes }) => (
                <div key={label} className={`rounded-2xl p-8 border-2 ${label === "Standard" ? "border-[#ff6b35] bg-white shadow-lg" : "border-gray-200 bg-white"}`}>
                  {label === "Standard" && <span className="inline-block bg-[#ff6b35] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Most Common</span>}
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{label}</h3>
                  <p className="text-[#ff6b35] font-bold text-3xl mb-1">{price}<span className="text-sm font-normal text-gray-400 ml-1">{unit}</span></p>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{desc}</p>
                  <ul className="space-y-2 mb-6">
                    {includes.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#ff6b35] font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={label === "Consultation" ? "/#contact" : "/#contact"} className="block text-center bg-[#ff6b35] text-white font-bold py-3 rounded-full hover:bg-[#e55a28] transition-all no-underline text-sm">
                    {label === "Consultation" ? "Book Free Consultation" : "Get a Quote"}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What affects pricing */}
        <section className="py-16 px-5 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8">What Affects FRP Installation Cost?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { factor: "Wall condition", impact: "Major", desc: "Existing tile removal adds $2–$4/sq ft. Uneven substrate requiring levelling adds $1–$3/sq ft." },
                { factor: "Ceiling height", impact: "Moderate", desc: "Walls over 9 feet require staging equipment, adding to labour costs." },
                { factor: "Number of corners", impact: "Moderate", desc: "Each inside and outside corner requires custom-cut PVC trim and precise panel fitting." },
                { factor: "Panel size", impact: "Minor", desc: "8×4 panels are easiest to handle. 10×4 panels require additional care and coordination." },
                { factor: "Cutouts", impact: "Minor", desc: "Electrical boxes, plumbing penetrations, and ventilation cutouts each add to labour time." },
                { factor: "Access", impact: "Variable", desc: "Confined spaces, basement kitchens, or active commercial environments during installation affect scheduling and cost." },
              ].map(({ factor, impact, desc }) => (
                <div key={factor} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-[#1e3a5f]">{factor}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${impact === "Major" ? "bg-red-100 text-red-700" : impact === "Moderate" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}`}>{impact} impact</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-5 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Pricing FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "How much does FRP panel installation cost in Toronto?", a: "FRP wall panel installation in Toronto costs $8–$18 per square foot installed. Standard wall conditions with typical ceiling height fall in the $8–$12 range. Complex installations range $12–$18/sq ft. Corevance provides free on-site quotes within 24 hours." },
                { q: "What is the cost of FRP panels per square foot in Canada?", a: "Material cost for Class C FRP panels varies by size and quantity. For installed price (materials + labour), expect $8–$18/sq ft across the GTA. For supply-only pricing, contact Corevance at 437-849-3781." },
                { q: "Are there volume discounts for FRP panels?", a: "Yes. Contractor accounts receive 15% below retail pricing, with an additional 5% discount on orders of 20+ panels. Contact Corevance to open a contractor account." },
                { q: "Does the quote include all accessories?", a: "Yes. All Corevance installation quotes include FRP panels, PVC divider bars, corner and ceiling moldings, nylon rivets, and food-safe adhesive. There are no hidden material costs." },
              ].map(({ q, a }) => (
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
            <h2 className="text-2xl font-bold text-white mb-3">Get Your Free Quote</h2>
            <p className="text-white/90 mb-6">Detailed quotes within 24 hours. No surprises. What we quote is what you pay.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-white text-[#ff6b35] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all no-underline">Request Free Quote</a>
              <Link href="/estimate" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#ff6b35] transition-all no-underline">Estimate Materials</Link>
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
