import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Wall Panel Installation & Supply Services",
  description: "Commercial FRP installation, material supply, custom panel solutions, and free project consultation across the Greater Toronto Area. CFIA-accepted. Expert crews. Free on-site quotes.",
  alternates: { canonical: "https://corevance.ca/services" },
  keywords: [
    "FRP installation service Toronto",
    "commercial FRP contractor GTA",
    "FRP supply GTA",
    "commercial kitchen wall panel installation",
    "CFIA FRP installation Ontario",
    "FRP contractor Ontario",
  ],
  openGraph: {
    title: "FRP Wall Panel Installation & Supply Services | Corevance",
    description: "Commercial FRP installation, material supply, custom solutions, and free consultation across the GTA. CFIA-accepted, Class C rated.",
    url: "https://corevance.ca/services",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "Corevance FRP Services" }],
    locale: "en_CA",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Corevance FRP Services",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "FRP Wall Panel Installation",
      provider: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
      description: "Professional CFIA-accepted FRP fiberglass wall panel installation for commercial kitchens, food processing facilities, restaurants, and industrial spaces across the Greater Toronto Area.",
      areaServed: "Greater Toronto Area",
      serviceType: "Commercial Wall Panel Installation",
    },
    {
      "@type": "Service",
      position: 2,
      name: "FRP Material Supply",
      provider: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
      description: "Class C fire-rated FRP panels in stock. Same-day delivery across the GTA in 8×4 and 10×4 sizes, pebbled and smooth finishes.",
      areaServed: "Greater Toronto Area",
      serviceType: "Commercial Building Materials Supply",
    },
    {
      "@type": "Service",
      position: 3,
      name: "Custom FRP Panel Solutions",
      provider: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
      description: "Special order FRP panels in non-standard dimensions, custom colours, and unique specifications for commercial projects.",
      areaServed: "Canada",
      serviceType: "Custom Commercial Wall Panels",
    },
    {
      "@type": "Service",
      position: 4,
      name: "FRP Project Consultation",
      provider: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
      description: "Free on-site assessments, material planning, and health-code compliance guidance. Detailed quotes within 24 hours.",
      areaServed: "Greater Toronto Area",
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD", description: "Free consultation and quote" },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can Corevance start an FRP installation project?",
      acceptedAnswer: { "@type": "Answer", text: "For GTA projects, Corevance can typically begin within 3–5 business days of quote approval. We offer same-day material delivery and maintain experienced crews ready for rapid deployment on commercial kitchen, food facility, and industrial projects." },
    },
    {
      "@type": "Question",
      name: "Do you supply FRP panels without installation?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Corevance offers material-only supply for contractors who self-install. We carry Class C FRP panels in 8×4 and 10×4 sizes with same-day GTA delivery. Contractor accounts with volume pricing are available — visit our contractors page to apply." },
    },
    {
      "@type": "Question",
      name: "Are your FRP installations CFIA accepted?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Corevance installs complete FRP systems — panels, PVC moldings, nylon rivets, and food-safe adhesives — that meet CFIA (Canadian Food Inspection Agency) and provincial health code requirements for food processing and food service facilities." },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-20 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">GTA Commercial FRP Specialists</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">FRP Wall Panel Services</h1>
            <p className="text-white/80 text-lg mb-8">
              Corevance delivers end-to-end FRP fiberglass wall panel solutions for commercial kitchens, food processing facilities, restaurants, and industrial spaces across the Greater Toronto Area. CFIA-accepted. Class C rated. Free quotes in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Get a Free Quote</a>
              <a href="/estimate" className="bg-white text-[#1e3a5f] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all no-underline">Estimate Materials</a>
            </div>
          </div>
        </section>

        {/* Service 1: Installation */}
        <section className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff6b35] font-semibold text-sm uppercase tracking-widest">Service 01</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mt-2 mb-5">Professional FRP Installation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our certified installation crews specialize in commercial FRP wall panel installation for environments where hygiene, durability, and code compliance are non-negotiable. From food processing plants to commercial kitchens and car washes, we execute every project to CFIA standards with meticulous attention to detail.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every installation uses proper PVC divider bars, nylon rivets, and food-safe adhesives — the complete system required for CFIA and provincial health code acceptance. No shortcuts. No call-backs.
              </p>
              <ul className="space-y-3 mb-8">
                {["CFIA-accepted complete FRP systems", "Code-compliant execution", "1–3 day project completion", "Minimal disruption to operations", "Same-day GTA availability"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ff6b35]/15 text-[#ff6b35] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/#contact" className="inline-block bg-[#ff6b35] text-white font-bold px-7 py-3 rounded-full hover:bg-[#e55a28] transition-all no-underline text-sm">Request Installation Quote</a>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
              <Image src="/frp_smooth.jpg" alt="FRP wall panel installation in a commercial kitchen" width={600} height={400} className="rounded-2xl object-cover w-full h-full" />
            </div>
          </div>
        </section>

        {/* Service 2: Supply */}
        <section className="py-20 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
              <Image src="/acc_frp_pebbled.png" alt="FRP panels available for supply across the GTA" width={600} height={400} className="rounded-2xl object-cover w-full h-full" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#ff6b35] font-semibold text-sm uppercase tracking-widest">Service 02</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mt-2 mb-5">FRP Material Supply</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We stock Class C fire-rated FRP panels in 8×4 and 10×4 sizes, available in pebbled and smooth finishes. All panels are 2mm thick and meet ASTM E84 Class C fire rating standards. Almond, Ivory, Beige, Light Gray, Silver, and Black colour options ship same-day across the GTA.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Contractor accounts available with volume pricing tiers. Whether you need 5 panels for a single renovation or 500 panels for a large facility, Corevance delivers on your timeline.
              </p>
              <ul className="space-y-3 mb-8">
                {["Same-day GTA delivery", "8×4 and 10×4 standard sizes", "Pebbled and smooth finishes", "6 colour options in stock", "Custom sizes up to 12×5 available"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#ff6b35]/15 text-[#ff6b35] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/products" className="inline-block bg-[#1e3a5f] text-white font-bold px-7 py-3 rounded-full hover:bg-[#16304f] transition-all no-underline text-sm">View Products</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Custom */}
        <section id="custom" className="py-20 px-5 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#ff6b35] font-semibold text-sm uppercase tracking-widest">Service 03</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] mt-2 mb-5">Custom FRP Panel Solutions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not every project fits standard dimensions. Corevance offers special-order FRP panels for unique specifications — oversized panels up to 12×5, non-standard colours, custom thicknesses, and project-specific accessory packages. We work directly with manufacturers to source exactly what your project requires.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Custom orders typically ship within 7–14 business days. Contact us early in your project planning phase so we can lock in lead times and ensure your custom materials arrive on schedule.
              </p>
              <a href="/#contact" className="inline-block bg-[#ff6b35] text-white font-bold px-7 py-3 rounded-full hover:bg-[#e55a28] transition-all no-underline text-sm">Discuss Custom Requirements</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Panels up to 12′ × 5′", "Custom colours available", "Special-order thicknesses", "Project-specific accessories", "Fast manufacturer lead times", "Expert specification guidance"].map(feat => (
                <div key={feat} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <p className="text-[#1e3a5f] font-semibold text-sm">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service 4: Consultation */}
        <section className="py-20 px-5 bg-[#1e3a5f]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#ff6b35] font-semibold text-sm uppercase tracking-widest">Service 04</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-5">Free Project Consultation</h2>
            <p className="text-white/80 text-lg mb-8">
              Not sure where to start? Our team provides complimentary on-site assessments, material take-offs, and health-code compliance guidance. We&apos;ll measure your space, calculate exact panel quantities, identify potential code requirements, and deliver a detailed written quote within 24 hours — all at no cost to you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { step: "01", title: "Contact Us", desc: "Call or fill out our form. We respond same business day." },
                { step: "02", title: "On-Site Assessment", desc: "We visit your location to measure and assess wall conditions." },
                { step: "03", title: "Detailed Quote", desc: "Receive a line-item quote within 24 hours. No surprises." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-white/10 rounded-2xl p-6 border border-white/15">
                  <p className="text-[#ff6b35] font-bold text-2xl mb-2">{step}</p>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-white/70 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <a href="/#contact" className="inline-block bg-[#ff6b35] text-white font-bold px-10 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Book Your Free Consultation</a>
          </div>
        </section>

        {/* Service areas */}
        <section className="py-16 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Service Areas</h2>
            <p className="text-gray-500 mb-8">We serve commercial and industrial facilities across the Greater Toronto Area.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { city: "Toronto", href: "/frp-installation-toronto" },
                { city: "Mississauga", href: "/frp-installation-mississauga" },
                { city: "Brampton", href: "/frp-installation-brampton" },
                { city: "North York", href: "/frp-installation-north-york" },
                { city: "Scarborough", href: "/frp-installation-scarborough" },
              ].map(({ city, href }) => (
                <Link key={city} href={href} className="bg-white border-2 border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-6 py-3 rounded-full text-sm transition-all no-underline">
                  FRP Installation {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-5 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Common Questions About Our Services</h2>
            <div className="space-y-6">
              {[
                { q: "How quickly can Corevance start an FRP installation project?", a: "For GTA projects, Corevance can typically begin within 3–5 business days of quote approval. We offer same-day material delivery and maintain experienced crews ready for rapid deployment on commercial kitchen, food facility, and industrial projects." },
                { q: "Do you supply FRP panels without installation?", a: "Yes. Corevance offers material-only supply for contractors who self-install. We carry Class C FRP panels in 8×4 and 10×4 sizes with same-day GTA delivery. Contractor accounts with volume pricing are available." },
                { q: "Are your FRP installations CFIA accepted?", a: "Yes. Corevance installs complete FRP systems — panels, PVC moldings, nylon rivets, and food-safe adhesives — that meet CFIA and provincial health code requirements for food processing and food service facilities." },
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

      {/* Footer */}
      <footer className="bg-white border-t-4 border-[#ff6b35] py-8 px-5 text-center">
        <p className="text-[#1e3a5f] font-semibold text-sm">© 2025 Corevance. All rights reserved.</p>
        <p className="text-gray-400 text-xs mt-1">
          <a href="tel:4378493781" className="hover:text-[#ff6b35] transition-colors">437-849-3781</a>
          {" · "}
          <a href="mailto:corevancesales@gmail.com" className="hover:text-[#ff6b35] transition-colors">corevancesales@gmail.com</a>
          {" · "}
          <Link href="/" className="hover:text-[#ff6b35] transition-colors">Home</Link>
          {" · "}
          <Link href="/products" className="hover:text-[#ff6b35] transition-colors">Products</Link>
        </p>
      </footer>
    </div>
  );
}
