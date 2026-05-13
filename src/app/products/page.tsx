import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Wall Panels — Class C Rated | Supply & Installation",
  description: "Commercial-grade Class C FRP fiberglass wall panels in 8×4 and 10×4 sizes, smooth and pebbled finishes. In stock. Same-day GTA delivery. Corevance — Toronto's FRP specialists.",
  alternates: { canonical: "https://corevance.ca/products" },
  keywords: [
    "FRP wall panels Canada",
    "buy FRP panels Toronto",
    "Class C FRP panels",
    "fiberglass reinforced panels supplier",
    "FRP panels GTA",
    "FRP panel sizes",
    "commercial kitchen wall panels",
    "FRP panel pebbled smooth",
  ],
  openGraph: {
    title: "FRP Wall Panels — Class C Rated | Corevance",
    description: "Commercial-grade Class C FRP panels in 8×4 and 10×4, smooth and pebbled. In stock. Same-day GTA delivery.",
    url: "https://corevance.ca/products",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "Corevance FRP Wall Panels" }],
    locale: "en_CA",
  },
};

const products = [
  { name: "Class C FRP Panel — 8′ × 4′ Pebbled", sku: "FRP-8X4-PEB", size: "8′ × 4′ (96″ × 48″)", finish: "Pebbled texture", thickness: "2mm", fireRating: "Class C (ASTM E84)", inStock: true, img: "/acc_frp_pebbled.png" },
  { name: "Class C FRP Panel — 8′ × 4′ Smooth",  sku: "FRP-8X4-SMO", size: "8′ × 4′ (96″ × 48″)", finish: "Smooth surface",  thickness: "2mm", fireRating: "Class C (ASTM E84)", inStock: true, img: "/frp_smooth.jpg" },
  { name: "Class C FRP Panel — 10′ × 4′ Pebbled", sku: "FRP-10X4-PEB", size: "10′ × 4′ (120″ × 48″)", finish: "Pebbled texture", thickness: "2mm", fireRating: "Class C (ASTM E84)", inStock: true, img: "/acc_frp_pebbled.png" },
  { name: "Class C FRP Panel — 10′ × 4′ Smooth",  sku: "FRP-10X4-SMO", size: "10′ × 4′ (120″ × 48″)", finish: "Smooth surface",  thickness: "2mm", fireRating: "Class C (ASTM E84)", inStock: true, img: "/frp_smooth.jpg" },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Corevance FRP Wall Panels",
  description: "Commercial Class C FRP fiberglass wall panels available for supply and installation across the GTA.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      sku: p.sku,
      description: `${p.size} commercial FRP fiberglass reinforced panel. ${p.finish}. ${p.thickness} thick. ${p.fireRating} fire rating. CFIA-accepted for food facilities.`,
      brand: { "@type": "Brand", name: "Corevance" },
      material: "Fiberglass Reinforced Polymer",
      color: "White/Almond",
      size: p.size,
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
        areaServed: "Greater Toronto Area",
      },
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What sizes do Corevance FRP panels come in?",
      acceptedAnswer: { "@type": "Answer", text: "Corevance stocks FRP panels in 8′ × 4′ and 10′ × 4′ standard sizes, both in pebbled and smooth finishes. Custom sizes up to 12′ × 5′ are available on special order. All panels are 2mm thick with a Class C ASTM E84 fire rating." },
    },
    {
      "@type": "Question",
      name: "What is the difference between Class A and Class C FRP panels?",
      acceptedAnswer: { "@type": "Answer", text: "Class A FRP panels have a higher fire resistance rating (flame spread index 0–25) and are required in some commercial and institutional settings. Class C panels (flame spread 76–200) are CFIA-accepted for food facilities, commercial kitchens, and most industrial applications. Corevance supplies Class C panels, which meet the requirements for the vast majority of commercial projects in Ontario." },
    },
    {
      "@type": "Question",
      name: "Do FRP panels come in different colours?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Corevance FRP panels are available in Almond, Ivory, Beige, Light Gray, Silver, and Black. Standard stock colours ship same-day across the GTA. Custom colours are available on special order with a 7–14 business day lead time." },
    },
  ],
};

const COLOURS = ["Almond", "Ivory", "Beige", "Light Gray", "Silver", "Black"];

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
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
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-16 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">In Stock · Same-Day GTA Delivery</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">FRP Wall Panels — Class C Rated</h1>
            <p className="text-white/80 text-lg">
              Commercial-grade 2mm Class C fiberglass reinforced panels. CFIA-accepted for food facilities. Available in pebbled and smooth finishes, multiple sizes and colours.
            </p>
          </div>
        </section>

        {/* Quick Answer — AEO optimized */}
        <section className="bg-amber-50 border-b border-amber-100 py-6 px-5">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              <strong>FRP (Fiberglass Reinforced Panels)</strong> are rigid, moisture-resistant commercial wall panels made from a polyester resin matrix reinforced with fiberglass strands. Corevance supplies Class C FRP panels (2mm, ASTM E84) in 8×4 and 10×4 sizes with same-day GTA delivery. Installed price: $8–$18/sq ft. Supply-only pricing available for contractors.
            </p>
          </div>
        </section>

        {/* Product grid */}
        <section className="py-20 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] text-center mb-3">Standard Panel Sizes</h2>
            <p className="text-center text-gray-500 mb-12">All panels are 2mm thick, Class C fire-rated, CFIA-accepted for food facilities.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {products.map((p) => (
                <div key={p.sku} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all">
                  <div className="h-48 relative">
                    <Image src={p.img} alt={p.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">In Stock</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-[#1e3a5f] mb-4">{p.name}</h3>
                    <ul className="text-xs text-gray-600 space-y-2 mb-5">
                      {[["Size", p.size], ["Finish", p.finish], ["Thickness", p.thickness], ["Fire Rating", p.fireRating]].map(([k, v]) => (
                        <li key={k} className="flex justify-between border-b border-gray-50 pb-1">
                          <span className="font-semibold text-[#1e3a5f]">{k}:</span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="/#contact" className="block text-center bg-[#ff6b35] text-white font-bold py-2.5 rounded-full text-sm hover:bg-[#e55a28] transition-all no-underline">Get Pricing</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Colours */}
        <section className="py-16 px-5 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] text-center mb-3">Available Colours</h2>
            <p className="text-center text-gray-500 mb-10">Standard colours ship same-day. Custom colours available on special order (7–14 days).</p>
            <div className="flex flex-wrap justify-center gap-4">
              {COLOURS.map(c => (
                <div key={c} className="text-center">
                  <div className="w-16 h-16 rounded-full border-2 border-gray-200 mx-auto mb-2 shadow-sm" style={{ background: c === "Almond" ? "#F5F0E8" : c === "Ivory" ? "#FFFFF0" : c === "Beige" ? "#F5F5DC" : c === "Light Gray" ? "#D3D3D3" : c === "Silver" ? "#C0C0C0" : "#1a1a1a" }} />
                  <p className="text-xs font-semibold text-gray-700">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom sizes */}
        <section className="py-16 px-5 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Custom Sizes Available</h2>
            <p className="text-gray-600 mb-8">Need something non-standard? We special-order panels up to 12′ × 5′ for projects that require oversized coverage or unique dimensions.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1e3a5f] text-white">
                    <th className="py-3 px-4 text-left font-semibold">Size</th>
                    <th className="py-3 px-4 text-left font-semibold">Type</th>
                    <th className="py-3 px-4 text-left font-semibold">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["8′ × 4′ (96″ × 48″)", "Standard", "In Stock"],
                    ["10′ × 4′ (120″ × 48″)", "Standard", "In Stock"],
                    ["12′ × 4′ (144″ × 48″)", "Large", "Special Order"],
                    ["10′ × 5′ (120″ × 60″)", "Wide", "Special Order"],
                    ["12′ × 5′ (144″ × 60″)", "Extra Large", "Special Order"],
                  ].map(([size, type, avail], i) => (
                    <tr key={size} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-4 font-medium text-[#1e3a5f]">{size}</td>
                      <td className="py-3 px-4 text-gray-600">{type}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${avail === "In Stock" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{avail}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-5 bg-[#ff6b35]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Order?</h2>
            <p className="text-white/90 mb-8">Call us or use our free estimator to calculate exactly how many panels you need. Same-day delivery across the GTA.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/estimate" className="bg-white text-[#ff6b35] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all no-underline">Estimate Materials Free</Link>
              <a href="tel:4378493781" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#ff6b35] transition-all no-underline">Call 437-849-3781</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-5 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">Product FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "What sizes do Corevance FRP panels come in?", a: "Standard stock sizes are 8′ × 4′ and 10′ × 4′, both in pebbled and smooth finishes. Custom sizes up to 12′ × 5′ are available on special order. All panels are 2mm thick with a Class C ASTM E84 fire rating." },
                { q: "What is the difference between Class A and Class C FRP panels?", a: "Class A has a higher fire resistance rating and is required in some institutional settings. Class C panels are CFIA-accepted for food facilities, commercial kitchens, and most industrial applications in Ontario. Corevance supplies Class C, which covers the vast majority of commercial projects." },
                { q: "Do FRP panels come in different colours?", a: "Yes — Almond, Ivory, Beige, Light Gray, Silver, and Black. Standard colours ship same-day across the GTA. Custom colours are available with a 7–14 business day lead time." },
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
          <Link href="/services" className="hover:text-[#ff6b35] transition-colors">Services</Link>
          {" · "}
          <Link href="/estimate" className="hover:text-[#ff6b35] transition-colors">Estimate</Link>
        </p>
      </footer>
    </div>
  );
}
