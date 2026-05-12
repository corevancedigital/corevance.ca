import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Panels for Contractors | Trade Pricing & Bulk Supply",
  description: "Contractor accounts for drywall contractors, general contractors, and commercial renovation firms. Volume pricing, same-day GTA delivery, and FRP supply or installation subcontracting.",
  alternates: { canonical: "https://corevance.ca/contractors" },
  keywords: [
    "FRP panels for contractors",
    "FRP wholesale Canada",
    "contractor FRP supply Toronto",
    "B2B FRP panels GTA",
    "drywall contractor FRP",
    "general contractor FRP supply Ontario",
    "FRP trade account",
    "bulk FRP panels Toronto",
  ],
  openGraph: {
    title: "FRP Panels for Contractors | Trade Pricing | Corevance",
    description: "Contractor accounts with volume pricing, same-day GTA delivery, and FRP installation subcontracting. Apply for a trade account today.",
    url: "https://corevance.ca/contractors",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "Corevance Contractor Program" }],
    locale: "en_CA",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corevance Contractor FRP Supply Program",
  description: "Trade accounts for drywall contractors, general contractors, and commercial renovation firms. Volume pricing on Class C FRP panels with same-day GTA delivery.",
  provider: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
  audience: { "@type": "BusinessAudience", audienceType: "Contractors" },
  areaServed: "Greater Toronto Area",
  serviceType: "Commercial Building Materials Supply",
  offers: [
    { "@type": "Offer", name: "Standard Contractor Discount", description: "15% below retail pricing for registered trade accounts", priceCurrency: "CAD" },
    { "@type": "Offer", name: "Volume Tier Discount", description: "Additional 5% off orders of 20+ panels", priceCurrency: "CAD" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I open a contractor account with Corevance?",
      acceptedAnswer: { "@type": "Answer", text: "Call 437-849-3781 or fill out our contact form with your business name, trade, and typical project volume. We verify contractor credentials and activate accounts within 1 business day. No minimum purchase required to open an account." },
    },
    {
      "@type": "Question",
      name: "What discounts do contractor accounts receive?",
      acceptedAnswer: { "@type": "Answer", text: "Registered trade accounts receive 15% below retail pricing on all standard FRP panels. Orders of 20+ panels receive an additional 5% volume discount. We also offer referral credits of $200 CAD for any project referral that results in a confirmed installation contract valued at $2,000 or more." },
    },
    {
      "@type": "Question",
      name: "Can Corevance handle FRP installation as a subcontractor?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Corevance is available as a subcontractor for general contractors who manage commercial renovation projects. We handle the complete FRP scope: material supply, installation, CFIA compliance documentation, and clean-up. You project-manage; we execute the FRP work." },
    },
  ],
};

export default function ContractorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
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
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-20 px-5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">For Drywall Contractors · General Contractors · Renovation Firms</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Contractor FRP Supply Program</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Corevance partners with drywall contractors, general contractors, and commercial renovation firms across the GTA. Trade pricing, same-day delivery, bulk discounts, and optional installation subcontracting — so you can close more commercial kitchen and food facility projects profitably.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4378493781" className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline text-center">Call to Open an Account</a>
                <a href="/#contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline text-center">Submit Your Project</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "15%", label: "Contractor discount off retail" },
                { number: "Same Day", label: "GTA delivery on standard panels" },
                { number: "20+", label: "Panels = extra 5% volume discount" },
                { number: "$200", label: "Referral credit per converted project" },
              ].map(({ number, label }) => (
                <div key={label} className="bg-white/10 border border-white/15 rounded-2xl p-5 text-center">
                  <p className="text-[#ff6b35] font-bold text-2xl mb-1">{number}</p>
                  <p className="text-white/70 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] text-center mb-3">Who We Work With</h2>
            <p className="text-center text-gray-500 mb-12">Corevance is the preferred FRP supply partner for commercial construction trades across the GTA.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {[
                { title: "Drywall Contractors", desc: "You&apos;re already on site working the walls. FRP panels are a natural extension of your scope — Corevance supplies the panels, accessories, and installation guidance so you can offer complete wall systems to your clients.", highlights: ["Same-day panel delivery to site", "Complete accessory kits (bars, rivets, adhesive)", "Technical specs and CFIA documentation"] },
                { title: "General Contractors", desc: "Don&apos;t fragment your commercial kitchen or food facility project by chasing multiple suppliers. Corevance handles the FRP scope end-to-end — supply, installation, and compliance documentation — as your subcontractor.", highlights: ["FRP subcontracting available", "Single point of contact for FRP scope", "CFIA compliance docs included"] },
                { title: "Renovation Contractors", desc: "Commercial kitchen renovations, food service build-outs, healthcare facility upgrades — if your project needs hygienic wall systems, Corevance delivers on your timeline with trade pricing and reliable supply.", highlights: ["Volume pricing on bulk orders", "Contractor account with net terms", "Rapid quote turnaround (24 hours)"] },
              ].map(({ title, desc, highlights }) => (
                <div key={title} className="border-2 border-gray-100 rounded-2xl p-8 hover:border-[#ff6b35] transition-all">
                  <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: desc }} />
                  <ul className="space-y-2">
                    {highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-[#ff6b35] font-bold mt-0.5">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="py-20 px-5 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-3">Contractor Pricing Structure</h2>
            <p className="text-center text-gray-500 mb-10">All pricing is for registered trade accounts. Call 437-849-3781 to verify your contractor credentials and activate your account.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1e3a5f] text-white">
                    <th className="py-4 px-5 text-left font-semibold">Account Type</th>
                    <th className="py-4 px-5 text-left font-semibold">Discount</th>
                    <th className="py-4 px-5 text-left font-semibold">Requirements</th>
                    <th className="py-4 px-5 text-left font-semibold">Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="py-4 px-5 font-medium text-[#1e3a5f]">Retail / One-time</td>
                    <td className="py-4 px-5 text-gray-600">Standard pricing</td>
                    <td className="py-4 px-5 text-gray-600">None</td>
                    <td className="py-4 px-5 text-gray-600">Same-day GTA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-5 font-medium text-[#1e3a5f]">Trade Account</td>
                    <td className="py-4 px-5"><span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-xs">15% off retail</span></td>
                    <td className="py-4 px-5 text-gray-600">Verified contractor</td>
                    <td className="py-4 px-5 text-gray-600">Priority same-day</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-4 px-5 font-medium text-[#1e3a5f]">Volume (20+ panels)</td>
                    <td className="py-4 px-5"><span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-xs">15% + 5% additional</span></td>
                    <td className="py-4 px-5 text-gray-600">Trade account + order size</td>
                    <td className="py-4 px-5 text-gray-600">Priority same-day</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-4 px-5 font-medium text-[#1e3a5f]">Referral Program</td>
                    <td className="py-4 px-5"><span className="bg-amber-100 text-amber-700 font-bold px-2 py-1 rounded text-xs">$200 credit / referral</span></td>
                    <td className="py-4 px-5 text-gray-600">Referred project &gt;$2,000</td>
                    <td className="py-4 px-5 text-gray-600">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How to open an account */}
        <section className="py-20 px-5 bg-[#1e3a5f]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">How to Open a Contractor Account</h2>
            <p className="text-white/70 mb-10">We activate accounts within 1 business day. No minimum purchase required.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { step: "01", title: "Contact Us", desc: "Call 437-849-3781 or submit your project details. Mention you want to open a contractor account." },
                { step: "02", title: "Verify Credentials", desc: "We confirm your trade credentials (business name, HST number, trade type). Takes less than 1 business day." },
                { step: "03", title: "Start Ordering", desc: "Account activated. Place orders by phone or email for same-day delivery at your trade pricing." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-white/10 rounded-2xl p-6 border border-white/15">
                  <p className="text-[#ff6b35] font-bold text-2xl mb-2">{step}</p>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-white/70 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <a href="tel:4378493781" className="inline-block bg-[#ff6b35] text-white font-bold px-10 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Call 437-849-3781 to Apply</a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-5 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Contractor FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "How do I open a contractor account with Corevance?", a: "Call 437-849-3781 or fill out our contact form. We verify contractor credentials and activate accounts within 1 business day. No minimum purchase required to open an account." },
                { q: "What discounts do contractor accounts receive?", a: "Registered trade accounts receive 15% below retail pricing. Orders of 20+ panels receive an additional 5% volume discount. We also offer $200 CAD referral credits for any confirmed installation project valued at $2,000 or more." },
                { q: "Can Corevance handle FRP installation as a subcontractor?", a: "Yes. Corevance is available as a subcontractor for GCs managing commercial renovation projects. We handle the complete FRP scope: supply, installation, CFIA compliance documentation, and clean-up." },
                { q: "What's the lead time for large orders?", a: "Standard-size panels (8×4 and 10×4) ship same-day across the GTA for any quantity. Custom panels (12×4, 10×5, 12×5) have a 7–14 business day lead time. Place your order early in the project planning phase to lock in availability." },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="text-[#1e3a5f] font-bold mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
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
          <Link href="/products" className="hover:text-[#ff6b35] transition-colors">Products</Link>
          {" · "}
          <Link href="/services" className="hover:text-[#ff6b35] transition-colors">Services</Link>
          {" · "}
          <Link href="/estimate" className="hover:text-[#ff6b35] transition-colors">Estimate</Link>
        </p>
      </footer>
    </div>
  );
}
