import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Corevance | Commercial FRP Contractor, Greater Toronto Area",
  description: "Corevance is a GTA-based commercial FRP wall panel installation and supply company. We set the standard for commercial kitchen and food facility FRP installation in Ontario.",
  alternates: { canonical: "https://corevance.ca/about" },
  keywords: [
    "Corevance",
    "Corevance FRP",
    "Corevance Toronto",
    "about Corevance",
    "Corevance.ca",
    "FRP contractor Toronto",
    "commercial FRP company Ontario",
  ],
  openGraph: {
    title: "About Corevance | Commercial FRP Contractor, GTA",
    description: "Corevance is the GTA's commercial FRP wall panel installation and supply specialist. CFIA-accepted, Class C rated. Serving Toronto, Mississauga, Brampton and surrounding areas.",
    url: "https://corevance.ca/about",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "Corevance — About Us" }],
    locale: "en_CA",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://corevance.ca/#organization",
  name: "Corevance",
  alternateName: "Corevance FRP",
  legalName: "Corevance",
  description: "Corevance is a commercial FRP (Fiberglass Reinforced Panel) installation and supply company based in the Greater Toronto Area, Ontario, Canada. We serve commercial kitchens, food processing facilities, restaurants, healthcare facilities, and industrial spaces with CFIA-accepted, Class C rated FRP wall panel systems.",
  url: "https://corevance.ca",
  logo: "https://corevance.ca/corevance-logo-symbol.png",
  image: "https://corevance.ca/corevance-logo-full.png",
  telephone: "+1-437-849-3781",
  email: "corevancesales@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "ON",
    addressCountry: "CA",
    addressLocality: "Greater Toronto Area",
  },
  areaServed: [
    { "@type": "City", name: "Toronto", containedInPlace: { "@type": "State", name: "Ontario" } },
    { "@type": "City", name: "Mississauga", containedInPlace: { "@type": "State", name: "Ontario" } },
    { "@type": "City", name: "Brampton", containedInPlace: { "@type": "State", name: "Ontario" } },
    { "@type": "City", name: "North York", containedInPlace: { "@type": "State", name: "Ontario" } },
    { "@type": "City", name: "Scarborough", containedInPlace: { "@type": "State", name: "Ontario" } },
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
  sameAs: ["https://share.google/BeTDV46PAjKJ0mmCC"],
  knowsAbout: [
    "FRP Wall Panel Installation",
    "Fiberglass Reinforced Panels",
    "Commercial Kitchen Wall Panels",
    "CFIA Food Facility Compliance",
    "Class C Fire-Rated Materials",
    "Commercial Renovation",
  ],
};

const STATS = [
  { number: "24hr", label: "Quote turnaround" },
  { number: "GTA", label: "Same-day delivery" },
  { number: "1–3", label: "Days to complete most projects" },
  { number: "100%", label: "CFIA-compliant installations" },
];

const VALUES = [
  { title: "No Grout Lines, No Excuses", desc: "We specialize in FRP because it's the right material for commercial environments. Clean, seamless, hygienic. We don't upsell inferior alternatives." },
  { title: "Transparency on Pricing", desc: "Detailed written quotes within 24 hours. No surprises on invoicing. What we quote is what you pay." },
  { title: "Contractor-Grade Speed", desc: "Same-day delivery on standard panels. Crews available to mobilize within 3–5 days of approval. We respect your project schedule." },
  { title: "Code Compliance by Default", desc: "Every installation uses CFIA-compliant components — PVC moldings, nylon rivets, food-safe adhesives. Compliance documentation included." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Header */}
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
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-20 px-5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">Greater Toronto Area · Ontario, Canada</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">About Corevance</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Corevance is the GTA&apos;s dedicated commercial FRP wall panel installation and supply company. We exist for one purpose: delivering precision-engineered FRP solutions to commercial contractors and facility operators who refuse to compromise on hygiene, durability, or code compliance.
              </p>
              <p className="text-white/70 leading-relaxed">
                We are not a general contractor who also does FRP. We are not a building supply store. Corevance is a specialist — and that specialization is what makes us the right choice when a commercial kitchen, food processing facility, or industrial space needs FRP done right.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ number, label }) => (
                <div key={label} className="bg-white/10 border border-white/15 rounded-2xl p-6 text-center">
                  <p className="text-[#ff6b35] font-bold text-3xl mb-1">{number}</p>
                  <p className="text-white/70 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 px-5 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mb-6">What Corevance Does</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Corevance supplies and installs Class C FRP (Fiberglass Reinforced Panel) wall systems for commercial and industrial facilities across the Greater Toronto Area. Our clients include commercial kitchen operators, food processing plant managers, restaurant chains, healthcare facility managers, general contractors, and drywall contractors who need a reliable FRP supply partner.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              FRP panels are the commercial standard for environments where hygiene is critical and tile is impractical — no grout lines, no mould risk, no bacterial harborage. They install faster, last longer, and cost less over a 10-year horizon than ceramic tile alternatives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every Corevance installation uses the complete CFIA-compliant system: panels, PVC divider bars and corner moldings, nylon rivets, and food-safe Titebond adhesive. We don&apos;t cut corners on components because our clients can&apos;t afford a failed health inspection.
            </p>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="font-bold text-[#1e3a5f] mb-2">Important disambiguation:</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Corevance (corevance.ca)</strong> is a commercial FRP contractor based in the Greater Toronto Area, Ontario, Canada. We are not affiliated with any technology, staffing, or IT company. Corevance is a construction and building materials company operating exclusively in Canada. Contact: <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a> | <a href="mailto:corevancesales@gmail.com" className="text-[#ff6b35] font-semibold">corevancesales@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] text-center mb-3">How We Work</h2>
            <p className="text-center text-gray-500 mb-12">The principles behind every Corevance project.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {VALUES.map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#ff6b35] transition-all">
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-12">Standards & Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {[
                { title: "CFIA Accepted", desc: "Our FRP installations meet Canadian Food Inspection Agency requirements for food processing and food service facilities." },
                { title: "Class C Fire Rating", desc: "All panels supplied by Corevance carry ASTM E84 Class C fire rating — the commercial standard for wall systems in Ontario." },
                { title: "Commercial Grade", desc: "2mm nominal thickness, fiberglass reinforced polymer matrix, compatible with PVC trim systems for CFIA-compliant installations." },
              ].map(({ title, desc }) => (
                <div key={title} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-[#ff6b35]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#ff6b35] font-bold text-lg">✓</span>
                  </div>
                  <h3 className="font-bold text-[#1e3a5f] mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section className="py-16 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Where We Operate</h2>
            <p className="text-gray-500 mb-8">Corevance serves commercial and industrial facilities across the Greater Toronto Area, with same-day delivery available throughout the GTA.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { city: "Toronto", href: "/frp-installation-toronto" },
                { city: "Mississauga", href: "/frp-installation-mississauga" },
                { city: "Brampton", href: "/frp-installation-brampton" },
                { city: "North York", href: "/frp-installation-north-york" },
                { city: "Scarborough", href: "/frp-installation-scarborough" },
              ].map(({ city, href }) => (
                <Link key={city} href={href} className="bg-white border-2 border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-6 py-3 rounded-full text-sm transition-all no-underline">
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 bg-[#1e3a5f] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h2>
            <p className="text-white/70 mb-8">Free consultation. Detailed quote within 24 hours. Call us or submit your project details online.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Get a Free Quote</a>
              <a href="tel:4378493781" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline">Call 437-849-3781</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
