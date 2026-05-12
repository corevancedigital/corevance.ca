import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ─── Blog post data ─────────────────────────────────────────────────── */

type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  keywords: string[];
  content: React.ReactNode;
};

function PostContent({ slug }: { slug: string }) {
  switch (slug) {
    case "frp-vs-tile-commercial-kitchen":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              FRP panels outperform ceramic tile in commercial kitchens because they have no grout lines (zero bacterial harborage), are easier to clean, install faster, cost less over 10 years, and are CFIA-accepted for food facilities. The main trade-off: FRP is less heat-resistant directly behind cooking equipment, though this is managed with stainless steel splash guards.
            </p>
          </aside>
          <h2>Why Commercial Kitchens Need CFIA-Compliant Wall Systems</h2>
          <p>Commercial kitchen wall systems in Ontario are regulated by Toronto Public Health, Peel Public Health, the CFIA (Canadian Food Inspection Agency), and provincial building codes. The primary concern is bacterial harborage — any gap, crack, or porous surface where foodborne pathogens can survive cleaning cycles is a health code violation risk.</p>
          <p>Ceramic tile was the historical standard, but its grout lines are a persistent problem. Even properly maintained tile grout harbours bacteria, discolours, cracks, and ultimately fails — requiring expensive replacement. FRP panels, installed correctly, eliminate this problem entirely.</p>
          <h2>FRP vs. Tile: The Comparison</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Criteria</th><th className="py-3 px-4 text-left">FRP Panels</th><th className="py-3 px-4 text-left">Ceramic Tile</th></tr></thead>
              <tbody>
                {[["Grout lines", "None — fully seamless", "Present — bacterial risk"], ["CFIA acceptance", "✓ Accepted (Class C system)", "Conditional — grout must be maintained"], ["Installation time", "1–3 days", "3–7 days (including cure time)"], ["Installation cost", "$8–$18/sq ft installed", "$15–$35/sq ft installed"], ["10-year maintenance", "Low — wipe clean", "High — grout re-sealing, repairs"], ["Impact resistance", "Good — flex absorbs minor impacts", "Poor — chips and cracks"], ["Moisture resistance", "Excellent — non-porous", "Grout absorbs moisture"], ["Heat resistance", "Moderate — not for direct heat", "Better for high-heat zones"]].map(([k, v1, v2], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{k}</td>
                    <td className="py-3 px-4 text-gray-700">{v1}</td>
                    <td className="py-3 px-4 text-gray-700">{v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>When to Choose FRP Over Tile</h2>
          <ul>
            <li><strong>Food processing facilities:</strong> FRP is the clear choice. CFIA requires seamless, non-porous wall surfaces. FRP panels installed with PVC moldings and food-safe adhesive meet this standard.</li>
            <li><strong>Commercial restaurant kitchens:</strong> FRP wins on cost, speed, and maintenance. Behind cooking equipment, use stainless steel for the direct splash zone and FRP for surrounding walls.</li>
            <li><strong>Institutional kitchens (healthcare, schools):</strong> FRP is preferred for its hygienic properties and impact resistance.</li>
          </ul>
          <h2>When Tile May Still Make Sense</h2>
          <ul>
            <li>Front-of-house decorative walls where aesthetics drive the decision</li>
            <li>Directly behind open-flame cooking equipment (use stainless steel instead)</li>
          </ul>
          <h2>The Bottom Line</h2>
          <p>For the vast majority of commercial kitchen, food processing, and food service applications in Ontario, FRP panels are the better choice: faster to install, cheaper over time, easier to keep clean, and CFIA-accepted. The total cost of ownership over 10 years is consistently lower than tile when you factor in grout maintenance and replacement costs.</p>
        </>
      );
    case "what-is-frp-wall-panel":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              <strong>FRP wall panels (Fiberglass Reinforced Panels)</strong> are rigid, moisture-resistant commercial wall panels made from a polyester resin matrix reinforced with fiberglass strands. They are used in commercial kitchens, food processing facilities, healthcare spaces, car washes, and industrial environments where hygiene and durability are critical. Class C FRP panels meet CFIA standards for food facility wall systems in Canada.
            </p>
          </aside>
          <h2>What Is an FRP Panel?</h2>
          <p>FRP stands for Fiberglass Reinforced Panel (also called Fiberglass Reinforced Plastic or Fiberglass Reinforced Polymer). An FRP panel is a rigid, lightweight, non-porous sheet material made from a thermoset polymer resin — typically polyester or vinyl ester — reinforced with glass fiber strands embedded throughout the matrix.</p>
          <p>The result is a panel that is:</p>
          <ul>
            <li>Non-porous — liquids, oils, and cleaning chemicals do not penetrate</li>
            <li>Seamless — no grout lines, no bacterial harborage</li>
            <li>Impact-resistant — the flexible fiber matrix absorbs minor impacts without cracking</li>
            <li>Moisture-resistant — ideal for wet or humid commercial environments</li>
            <li>Cleanable — smooth or pebbled surface wipes clean with standard commercial cleaners</li>
            <li>Fire-rated — Class C panels carry ASTM E84 flame spread ratings accepted for commercial use</li>
          </ul>
          <h2>FRP Panel Standards in Canada</h2>
          <p>In Canada, FRP panels used in food facilities must comply with CFIA (Canadian Food Inspection Agency) Safe Food for Canadians Act (SFCA) requirements. The relevant standard is: panels must create a non-porous, smooth, and cleanable wall surface with no open joints or gaps that can trap food particles or moisture.</p>
          <p>A compliant FRP installation uses:</p>
          <ol>
            <li>Class C FRP panels (ASTM E84 fire rating)</li>
            <li>PVC divider bars and corner moldings at all joints</li>
            <li>Nylon rivets at specified fastening intervals</li>
            <li>Food-safe construction adhesive (e.g., Titebond or equivalent)</li>
          </ol>
          <h2>FRP Panel Sizes Available in Canada</h2>
          <p>Standard FRP panels in Canada are typically available in:</p>
          <ul>
            <li>8′ × 4′ (96″ × 48″) — most common size for standard ceiling height installations</li>
            <li>10′ × 4′ (120″ × 48″) — for taller commercial spaces</li>
            <li>Custom sizes up to 12′ × 5′ — special order, 7–14 business day lead time</li>
          </ul>
          <h2>Where Are FRP Panels Used?</h2>
          <ul>
            <li><strong>Commercial kitchens and restaurants</strong> — the most common application</li>
            <li><strong>Food processing and manufacturing facilities</strong> — CFIA compliance critical</li>
            <li><strong>Healthcare facilities and hospitals</strong> — hygienic wall systems for clinical areas</li>
            <li><strong>Car washes</strong> — moisture-resistant walls that handle constant water exposure</li>
            <li><strong>Industrial and warehouse spaces</strong> — impact resistance for high-traffic areas</li>
          </ul>
        </>
      );
    case "frp-panel-cost-toronto":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              FRP wall panel installation in Toronto costs <strong>$8–$18 per square foot installed</strong>, depending on scope, wall condition, and accessibility. Material-only supply (for self-install) is also available. Corevance provides free on-site assessments and written quotes within 24 hours.
            </p>
          </aside>
          <h2>FRP Panel Installation Cost Breakdown</h2>
          <p>FRP panel installation pricing in Toronto (2025) depends on several factors: the size of the project, the condition of existing walls, the finish and size of panels chosen, and whether accessories (corner moldings, divider bars, adhesive) are included.</p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Installation Type</th><th className="py-3 px-4 text-left">Cost Range (per sq ft)</th><th className="py-3 px-4 text-left">Notes</th></tr></thead>
              <tbody>
                {[["Standard installation", "$8–$12/sq ft", "Good wall condition, standard height"], ["Complex installation", "$12–$18/sq ft", "Poor substrate, high ceilings, complex corners"], ["Material supply only", "Call for pricing", "Panels + accessories, no labour"], ["Custom panel order", "Call for pricing", "Non-standard sizes, lead time 7–14 days"]].map(([type, cost, note], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{type}</td>
                    <td className="py-3 px-4 font-bold text-[#ff6b35]">{cost}</td>
                    <td className="py-3 px-4 text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>What Affects FRP Installation Cost?</h2>
          <ul>
            <li><strong>Wall condition:</strong> Existing walls with uneven surfaces, old tile removal, or moisture damage add to substrate preparation costs.</li>
            <li><strong>Panel size:</strong> 8×4 panels are easiest to handle; 10×4 panels require additional coordination.</li>
            <li><strong>Number of corners and cutouts:</strong> Each inside corner, outside corner, and cutout (for electrical boxes, pipes) adds labour time.</li>
            <li><strong>Ceiling height:</strong> Walls above 9 feet require extended staging, increasing labour costs.</li>
            <li><strong>Finish:</strong> Pebbled and smooth panels are the same price; custom colours may carry a small premium.</li>
          </ul>
          <h2>FRP vs. Tile: 10-Year Cost Comparison</h2>
          <p>For a typical 500 sq ft commercial kitchen wall area in Toronto:</p>
          <ul>
            <li><strong>FRP installed:</strong> $5,000–$7,500 (year 0) + minimal maintenance ($500/10 years)</li>
            <li><strong>Ceramic tile installed:</strong> $10,000–$17,500 (year 0) + grout maintenance/repair ($2,000–$4,000/10 years)</li>
          </ul>
          <p>FRP is consistently $10,000–$15,000 cheaper over a 10-year horizon for a mid-sized commercial kitchen.</p>
        </>
      );
    default:
      return (
        <p className="text-gray-600 italic">Full article content coming soon. For immediate information, call Corevance at <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.</p>
      );
  }
}

const postMeta: Record<string, { title: string; description: string; category: string; readTime: string; keywords: string[] }> = {
  "frp-vs-tile-commercial-kitchen": { title: "FRP vs. Tile for Commercial Kitchens: The Complete 2025 Comparison", description: "FRP panels vs ceramic tile for commercial kitchens — comparison table, CFIA compliance, 10-year cost analysis, and when to choose each. From Corevance, GTA's FRP specialist.", category: "Comparison", readTime: "8 min read", keywords: ["FRP vs tile commercial kitchen", "FRP panel vs ceramic tile", "commercial kitchen wall panel comparison", "CFIA FRP tile"] },
  "what-is-frp-wall-panel": { title: "What Are FRP Wall Panels? Complete Guide for Commercial Facilities", description: "FRP wall panels explained — materials, standards, sizes, CFIA compliance, and commercial applications. Everything facility managers and contractors need to know.", category: "Guide", readTime: "10 min read", keywords: ["what is FRP panel", "FRP wall panel guide", "fiberglass reinforced panel Canada", "FRP panel CFIA"] },
  "cfia-frp-installation-requirements": { title: "CFIA FRP Installation Requirements for Canadian Food Facilities", description: "CFIA requirements for FRP wall panel systems in food facilities — panel spec, PVC moldings, nylon rivets, adhesive, and inspection compliance checklist.", category: "Compliance", readTime: "7 min read", keywords: ["CFIA FRP requirements", "FRP panels CFIA approved", "CFIA food facility wall panels", "FRP SFCA compliance"] },
  "how-to-install-frp-panels": { title: "How to Install FRP Wall Panels: Commercial Installation Guide", description: "Step-by-step commercial FRP panel installation guide — substrate prep, adhesive, fastening patterns, trim installation, and CFIA compliance tips.", category: "How-To", readTime: "12 min read", keywords: ["how to install FRP panels", "FRP installation guide", "FRP panel installation commercial", "FRP installation steps"] },
  "frp-panel-cost-toronto": { title: "FRP Panel Installation Cost in Toronto (2025 Pricing Guide)", description: "FRP wall panel installation costs in Toronto 2025 — $8–$18/sq ft installed. Cost breakdown by scope, wall condition, and panel type.", category: "Pricing", readTime: "6 min read", keywords: ["FRP installation cost Toronto", "FRP panel pricing Toronto", "commercial FRP cost 2025", "how much does FRP installation cost"] },
  "class-c-fire-rating-explained": { title: "Class C Fire Rating for FRP Panels: What It Means for Your Building", description: "Class C FRP fire rating explained — ASTM E84 standards, Class A vs C comparison, and which applications require which rating in Ontario.", category: "Standards", readTime: "5 min read", keywords: ["Class C fire rating FRP", "ASTM E84 FRP", "FRP fire rating Canada", "Class A vs Class C FRP"] },
};

export async function generateStaticParams() {
  return Object.keys(postMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = postMeta[slug];
  if (!meta) return { title: "Not Found" };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://corevance.ca/blog/${slug}` },
    keywords: meta.keywords,
    openGraph: {
      title: `${meta.title} | Corevance`,
      description: meta.description,
      url: `https://corevance.ca/blog/${slug}`,
      type: "article",
      siteName: "Corevance",
      images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630 }],
      locale: "en_CA",
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = postMeta[slug];
  if (!meta) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
    publisher: { "@type": "Organization", name: "Corevance", logo: { "@type": "ImageObject", url: "https://corevance.ca/corevance-logo-symbol.png" } },
    datePublished: "2025-06-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `https://corevance.ca/blog/${slug}`,
    mainEntityOfPage: `https://corevance.ca/blog/${slug}`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-16 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors no-underline">← All Resources</Link>
              <span className="text-white/30">·</span>
              <span className="text-[#ff6b35] text-sm font-semibold">{meta.category}</span>
              <span className="text-white/30">·</span>
              <span className="text-white/60 text-sm">{meta.readTime}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">{meta.title}</h1>
            <p className="mt-4 text-white/70 text-sm">By <strong className="text-white">Corevance</strong> — Commercial FRP Specialists, Greater Toronto Area</p>
          </div>
        </section>

        <section className="py-12 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate max-w-none prose-h2:text-[#1e3a5f] prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-[#1e3a5f]">
              <PostContent slug={slug} />
            </div>

            <div className="mt-12 bg-[#1e3a5f] rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Get a Free FRP Quote</h2>
              <p className="text-white/70 mb-6 text-sm">Corevance provides free on-site assessments and detailed quotes within 24 hours for commercial FRP projects across the GTA.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-7 py-3 rounded-full hover:bg-[#e55a28] transition-all no-underline text-sm">Request Free Consultation</a>
                <Link href="/estimate" className="border-2 border-white text-white font-bold px-7 py-3 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline text-sm">Estimate Materials</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-5 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500 text-sm font-semibold mb-4">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(postMeta).filter(([s]) => s !== slug).slice(0, 3).map(([s, m]) => (
                <Link key={s} href={`/blog/${s}`} className="bg-white border border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-4 py-2 rounded-full text-xs transition-all no-underline">{m.title.split(":")[0]}</Link>
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
          {" · "}<Link href="/blog" className="hover:text-[#ff6b35] transition-colors">Resources</Link>
        </p>
      </footer>
    </div>
  );
}
