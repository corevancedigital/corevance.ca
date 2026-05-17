import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FRP Wall Panel Resources & Guides",
  description: "Expert guides on FRP wall panel installation, commercial kitchen compliance, CFIA requirements, and cost comparisons. From Corevance, the GTA's commercial FRP specialist.",
  alternates: { canonical: "https://corevance.ca/blog" },
  keywords: ["FRP panel guide", "FRP installation guide", "commercial kitchen FRP", "CFIA FRP requirements", "FRP vs tile", "FRP panel cost"],
  openGraph: {
    title: "FRP Wall Panel Resources & Guides | Corevance",
    description: "Expert FRP installation guides, compliance information, and cost breakdowns for commercial facility managers and contractors.",
    url: "https://corevance.ca/blog",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "Corevance FRP Resources" }],
    locale: "en_CA",
  },
};

const posts = [
  { slug: "frp-vs-trusscore-pvc-canadian-installer", title: "FRP vs Trusscore PVC: When FRP Is Actually the Better Choice (Canadian Installer View)", excerpt: "A Canadian installer's honest breakdown of FRP vs Trusscore PVC — where each one wins, real cost gap, and which fits a GTA commercial kitchen.", category: "Comparison", readTime: "9 min read" },
  { slug: "class-c-frp-ontario-building-code", title: "Class C FRP and the Ontario Building Code: What §3.1.13 Actually Requires", excerpt: "Ontario Building Code §3.1.13 in plain English — flame spread, smoke developed, and when Class C FRP is enough for your commercial occupancy.", category: "Compliance", readTime: "8 min read" },
  { slug: "frp-panels-gta-car-washes", title: "FRP Panels for GTA Car Washes: Why Pebbled Class C Beats Drywall and Tile", excerpt: "Drywall fails in 18 months and tile in 3 years inside a GTA car wash. Why Class C pebbled FRP lasts 15+ years through freeze-thaw and chemical exposure.", category: "Guide", readTime: "9 min read" },
  { slug: "frp-installation-mistakes-gta-kitchens", title: "Top 7 FRP Installation Mistakes We Fix Most Often in GTA Restaurant Kitchens", excerpt: "The seven FRP install failures Corevance gets called to repair most often in GTA kitchens — what went wrong, what should have happened, and what each one costs to fix.", category: "How-To", readTime: "10 min read" },
  { slug: "frp-panels-schools-daycares-ontario", title: "FRP for Ontario Daycares and Schools: Cleanability, Impact Resistance, and Ministry Compliance", excerpt: "How Class C FRP meets OBC §3.1.13 and Ontario Ministry standards for daycares and K-8 schools — plus weekend install scheduling that does not disrupt operations.", category: "Guide", readTime: "10 min read" },
  { slug: "how-to-clean-frp-panels-sop", title: "How to Clean Class C FRP Panels Without Voiding the Warranty (Cleaning SOP for GTA Operators)", excerpt: "What chemicals are safe on Class C FRP, what voids the warranty, and a daily/weekly/monthly cleaning SOP your night crew will actually follow.", category: "How-To", readTime: "9 min read" },
  { slug: "frp-panels-healthcare-facilities-ontario", title: "FRP Panels for GTA Healthcare Facilities: Infection Control, Impact Resistance, and Ontario Hospital Standards", excerpt: "Where Class C FRP belongs in an Ontario hospital or long-term care home — and where Altro Whiterock or specialized cladding is the right call instead. CSA Z8000 and IPAC Canada aligned.", category: "Compliance", readTime: "9 min read" },
  { slug: "cfia-frp-installation-requirements", title: "CFIA FRP Installation Requirements for Canadian Food Facilities", excerpt: "Class C panels, PVC mouldings, nylon rivets, food-safe adhesive, and the submittal package an inspector can request. The complete system spec that passes a CFIA wall review under the Safe Food for Canadians Act.", category: "Compliance", readTime: "9 min read" },
  { slug: "how-to-install-frp-panels", title: "How to Install FRP Wall Panels: Commercial Installation Guide", excerpt: "A working installer's walk-through of a commercial FRP job — tools, substrate prep, full-coverage adhesive, PVC mouldings, nylon rivets, expansion gap, and food-safe sealing.", category: "How-To", readTime: "12 min read" },
  { slug: "class-c-fire-rating-explained", title: "Class C Fire Rating for FRP Panels: What It Means for Your Building", excerpt: "ASTM E84 / CAN/ULC-S102 in plain English — flame spread, smoke developed, and which Ontario Building Code occupancies actually require Class A vs B vs C.", category: "Standards", readTime: "8 min read" },
  { slug: "frp-vs-tile-commercial-kitchen", title: "FRP vs. Tile for Commercial Kitchens: The Complete 2025 Comparison", excerpt: "No grout lines. No mould risk. No bacterial harborage. Here's why commercial kitchen operators across the GTA are switching from ceramic tile to FRP panels — and why the math works out.", category: "Comparison", readTime: "8 min read" },
  { slug: "what-is-frp-wall-panel", title: "What Are FRP Wall Panels? Complete Guide for Commercial Facilities", excerpt: "FRP (Fiberglass Reinforced Panels) are the commercial standard for hygiene-critical wall systems. Everything facility managers and contractors need to know — materials, standards, applications.", category: "Guide", readTime: "10 min read" },
  { slug: "frp-panel-cost-toronto", title: "FRP Panel Installation Cost in Toronto (2025 Pricing Guide)", excerpt: "What does FRP wall panel installation actually cost in Toronto? Breakdown by scope, wall condition, and panel type. Real price ranges from Corevance's project history.", category: "Pricing", readTime: "6 min read" },
];

const categoryColors: Record<string, string> = {
  Comparison: "bg-blue-100 text-blue-700",
  Guide: "bg-green-100 text-green-700",
  Compliance: "bg-purple-100 text-purple-700",
  "How-To": "bg-orange-100 text-orange-700",
  Pricing: "bg-amber-100 text-amber-700",
  Standards: "bg-gray-100 text-gray-700",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
            <p className="text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-4">FRP Knowledge Base</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">FRP Wall Panel Resources & Guides</h1>
            <p className="text-white/70">Expert guides on FRP installation, compliance, and commercial kitchen wall panel decisions — from the GTA&apos;s specialist FRP contractor.</p>
          </div>
        </section>

        <section className="py-16 px-5 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map(({ slug, title, excerpt, category, readTime }) => (
                <Link key={slug} href={`/blog/${slug}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all no-underline group">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[category] ?? "bg-gray-100 text-gray-700"}`}>{category}</span>
                      <span className="text-xs text-gray-400">{readTime}</span>
                    </div>
                    <h2 className="text-base font-bold text-[#1e3a5f] mb-3 group-hover:text-[#ff6b35] transition-colors leading-snug">{title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{excerpt}</p>
                    <p className="mt-4 text-[#ff6b35] font-semibold text-sm">Read guide →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-5 bg-[#1e3a5f] text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get a Quote?</h2>
            <p className="text-white/70 mb-8">Free consultation. Detailed quote within 24 hours. Same-day GTA delivery on standard panels.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-8 py-4 rounded-full hover:bg-[#e55a28] transition-all no-underline">Get a Free Quote</a>
              <Link href="/estimate" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline">Estimate Materials</Link>
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
