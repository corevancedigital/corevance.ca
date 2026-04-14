"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────── TICKER BAR ──────────────────────────── */
function TickerBar() {
  // 4× duplication → animate -50% gives a seamless 2-unit loop
  const core = [
    { kind: "info", icon: "📞", text: "437-849-3781",            href: "tel:4378493781" },
    { kind: "info", icon: "✉️", text: "corevancesales@gmail.com", href: "mailto:corevancesales@gmail.com" },
    { kind: "cta",  icon: "📞", text: "Call us to discuss your project", href: "tel:4378493781" },
  ];
  const items = [...core, ...core, ...core, ...core];

  return (
    <div className="bg-[#ff6b35] overflow-hidden" style={{ height: 42 }}>
      <div className="flex items-center h-full animate-ticker">
        {items.map((item, i) =>
          item.kind === "cta" ? (
            <a key={i} href={item.href}
               className="inline-flex items-center gap-1.5 bg-yellow-300 text-gray-900 font-bold text-xs px-4 py-1.5 rounded-full mx-5 flex-shrink-0 hover:bg-yellow-200 transition-colors whitespace-nowrap">
              {item.icon} {item.text}
            </a>
          ) : (
            <a key={i} href={item.href}
               className="inline-flex items-center gap-1.5 text-white font-semibold text-sm px-3 flex-shrink-0 hover:underline whitespace-nowrap">
              {item.icon} {item.text}
            </a>
          )
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────── NAVBAR ──────────────────────────────── */
function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6" style={{ paddingTop: 12, paddingBottom: 12 }}>
        <Image src="/corevance-logo-full.png" alt="Corevance" width={200} height={52} priority className="object-contain" />
        <ul className="hidden md:flex gap-8 list-none">
          {[["#contact","Get a Quote"],["#services","Services"],["#products","Products"]].map(([href,label]) => (
            <li key={href}>
              <a href={href} className="text-[#1e3a5f] font-semibold text-sm hover:text-[#ff6b35] transition-colors no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-block bg-[#ff6b35] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#e55a28] transition-colors no-underline">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

/* ─────────────────────────── HERO ────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "92vh", background: "#0d1b2a" }}>
      {/* Atmospheric blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute" style={{ top: "10%", left: "5%",  width: 500, height: 500, background: "rgba(255,107,53,0.07)", borderRadius: "50%", filter: "blur(80px)" }} />
        <div className="absolute" style={{ bottom: "10%", right: "5%", width: 400, height: 400, background: "rgba(30,58,95,0.4)",   borderRadius: "50%", filter: "blur(80px)" }} />
        <div className="absolute" style={{ top: "40%", left: "35%", width: 300, height: 300, background: "rgba(255,107,53,0.04)", borderRadius: "50%", filter: "blur(60px)" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.15] mb-10"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Transform Commercial Spaces with<br />Expert FRP Wall Panel Solutions
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contact"
             className="bg-white text-gray-900 font-semibold px-8 py-4 rounded-full text-base hover:bg-gray-100 transition-all no-underline">
            Start your project today
          </a>
          <a href="https://calendly.com/PLACEHOLDER_URL"
             className="bg-[#3b82f6] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#2563eb] transition-all no-underline">
            Book your meeting to discuss your project needs
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

/* ──────────────── FLOATING PRODUCT PANEL ─────────────────────────── */
function FloatingProductPanel() {
  const [visible, setVisible]     = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => { if (!dismissed) setVisible(window.scrollY > 550); };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  const products = [
    { name: "8′ × 4′ Pebbled",  detail: "96″ × 48″ · Pebbled" },
    { name: "8′ × 4′ Smooth",   detail: "96″ × 48″ · Smooth"  },
    { name: "10′ × 4′ Pebbled", detail: "120″ × 48″ · Pebbled"},
    { name: "10′ × 4′ Smooth",  detail: "120″ × 48″ · Smooth" },
  ];

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 w-60 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
         style={{ background: "white", animation: "slideInRight 0.3s ease" }}>
      <div className="flex items-center justify-between px-4 py-3" style={{ background: "#1e3a5f" }}>
        <span className="text-white font-bold text-xs uppercase tracking-wide">FRP Wall Panel Products</span>
        <button onClick={() => setDismissed(true)} className="text-white/60 hover:text-white text-base leading-none ml-2">×</button>
      </div>
      <div className="p-3">
        {products.map(p => (
          <a key={p.name} href="#products"
             className="flex items-start gap-2 px-2.5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group no-underline">
            <span className="text-[#ff6b35] text-xs mt-0.5 flex-shrink-0">▪</span>
            <div>
              <p className="font-semibold text-[#1e3a5f] text-xs group-hover:text-[#ff6b35] transition-colors">Class C – {p.name}</p>
              <p className="text-gray-400 text-xs">{p.detail} · 2mm</p>
            </div>
          </a>
        ))}
        <a href="#products" className="block mt-2 pt-2 border-t border-gray-100 text-center text-xs font-semibold text-[#ff6b35] hover:underline py-1">
          View all products →
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────── CONTACT FORM ───────────────────────────── */
function ContactForm() {
  return (
    <section id="contact" className="py-20 px-5" style={{ background: "linear-gradient(135deg,#f8f9fa,#e9ecef)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#1e3a5f] mb-3">Tell Us About Your Project</h2>
        <p className="text-center text-gray-500 text-lg mb-10">Get expert consultation and a detailed quote within 24 hours</p>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-12">
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-6">
            {[
              { id: "name",  label: "Name *",  type: "text"  },
              { id: "phone", label: "Phone *", type: "tel"   },
              { id: "email", label: "Email *", type: "email" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block mb-2 font-semibold text-[#1e3a5f] text-sm">{label}</label>
                <input id={id} name={id} type={type} required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors" />
              </div>
            ))}
            <div>
              <label htmlFor="project" className="block mb-2 font-semibold text-[#1e3a5f] text-sm">Tell us about your project *</label>
              <textarea id="project" name="project" required rows={5}
                placeholder="Describe your project scope, timeline, square footage, and any specific requirements..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors resize-y" />
            </div>
            <button type="submit"
              className="w-full bg-[#ff6b35] text-white font-bold py-4 rounded-full text-lg hover:bg-[#e55a28] hover:-translate-y-0.5 transition-all shadow-md">
              Request Free Consultation
            </button>
          </form>
          <div className="text-center mt-8 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-3 font-semibold">Prefer to call directly?</p>
            <a href="tel:4378493781" className="text-3xl font-bold text-[#ff6b35] no-underline">📞 437-849-3781</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PRODUCTS ───────────────────────────────── */
function Products() {
  const products = [
    { title: "Class C – 8′ × 4′ Pebbled",  specs: [["Size","8′ × 4′ (96″ × 48″)"], ["Finish","Pebbled texture"], ["Thickness","2mm"], ["Class","C Fire Rating"]] },
    { title: "Class C – 8′ × 4′ Smooth",   specs: [["Size","8′ × 4′ (96″ × 48″)"], ["Finish","Smooth surface"],  ["Thickness","2mm"], ["Class","C Fire Rating"]] },
    { title: "Class C – 10′ × 4′ Pebbled", specs: [["Size","10′ × 4′ (120″ × 48″)"],["Finish","Pebbled texture"], ["Thickness","2mm"], ["Class","C Fire Rating"]] },
    { title: "Class C – 10′ × 4′ Smooth",  specs: [["Size","10′ × 4′ (120″ × 48″)"],["Finish","Smooth surface"],  ["Thickness","2mm"], ["Class","C Fire Rating"]] },
  ];
  return (
    <section id="products" className="py-20 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#1e3a5f] mb-3">FRP Wall Panel Products</h2>
        <p className="text-center text-gray-500 text-lg mb-12">High-performance materials engineered for demanding commercial applications</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map(({ title, specs }) => (
            <a key={title} href={`mailto:corevancesales@gmail.com?subject=Inquiry: ${title}`}
               className="bg-white rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all overflow-hidden group no-underline">
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-5xl relative overflow-hidden">
                📋
                <div className="absolute inset-x-0 bottom-0 bg-[#ff6b35]/90 text-white text-center py-3 font-semibold text-sm translate-y-full group-hover:translate-y-0 transition-transform">
                  Click to Inquire
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-4">{title}</h3>
                <ul className="text-sm text-gray-600">
                  {specs.map(([k, v]) => (
                    <li key={k} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-semibold text-[#1e3a5f]">{k}:</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────── CUSTOM SIZES & COLORS ───────────────────────── */
function ColorsAndSizes() {
  const [tab, setTab] = useState<"colors" | "sizes">("colors");

  const colors = [
    { name: "Almond",     bg: "#f5f0e8" },
    { name: "Ivory",      bg: "#fffff0" },
    { name: "Beige",      bg: "#f5f5dc" },
    { name: "Light Gray", bg: "#d3d3d3" },
    { name: "Silver",     bg: "#c0c0c0" },
    { name: "Black",      bg: "#1a1a1a" },
  ];

  const sizes = [
    { dim: "8′ × 4′",  inches: "96″ × 48″",  tag: "Standard"    },
    { dim: "10′ × 4′", inches: "120″ × 48″", tag: "Standard"    },
    { dim: "12′ × 4′", inches: "144″ × 48″", tag: "Large"       },
    { dim: "10′ × 5′", inches: "120″ × 60″", tag: "Wide"        },
    { dim: "12′ × 5′", inches: "144″ × 60″", tag: "Extra Large" },
  ];

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#1e3a5f] mb-3">Custom Sizes and Colors Available</h2>
        <p className="text-center text-gray-500 text-lg mb-8">In-stock options ready for immediate delivery · Special orders welcome</p>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
            {(["colors", "sizes"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all capitalize ${
                  tab === t ? "bg-white text-[#1e3a5f] shadow-sm" : "text-gray-400 hover:text-gray-600"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        {tab === "colors" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-4xl mx-auto">
            {colors.map(({ name, bg }) => (
              <div key={name} className="text-center p-4 border-2 border-gray-200 rounded-xl hover:border-[#ff6b35] hover:scale-105 transition-all cursor-pointer">
                <div className="w-full h-24 rounded-lg mb-3 border border-gray-300" style={{ background: bg }} />
                <p className="font-semibold text-[#1e3a5f] text-sm">{name}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "sizes" && (
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sizes.map(({ dim, inches, tag }) => (
              <div key={dim} className="border-2 border-gray-200 rounded-xl p-6 hover:border-[#ff6b35] transition-all text-center">
                <div className="text-3xl font-bold text-[#1e3a5f] mb-1">{dim}</div>
                <div className="text-sm text-gray-500 mb-3">{inches}</div>
                <span className="inline-block bg-[#ff6b35]/10 text-[#ff6b35] font-semibold text-xs px-3 py-1 rounded-full">{tag}</span>
              </div>
            ))}
          </div>
        )}

        <p className="text-center mt-10 text-gray-500 text-sm">
          Need a non-standard specification?{" "}
          <a href="#contact" className="text-[#ff6b35] font-semibold hover:underline">Contact us</a>
          {" "}for custom colors, dimensions, and special orders.
        </p>
      </div>
    </section>
  );
}

/* ─────────────── ACCESSORIES — SQUARE-STYLE 60/40 ───────────────── */
type Acc = { id: string; name: string; icon: string; bgColor: string; description: string; specs: { label: string; value: string }[] };

const ACCESSORIES: Acc[] = [
  {
    id: "divider-bar", name: "Divider Bar", icon: "🔩", bgColor: "#e8edf2",
    description: "PVC Divider Bar Molding creates a finished look and protects FRP panels when joining two panels together. Provides a sanitary sealing between seams where dirt, stains and bacteria can collect. Required for CFIA accepted installation.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Thickness", value: "1/2 in" }, { label: "Finish", value: "Painted" }, { label: "Standard", value: "CFIA" }],
  },
  {
    id: "inside-corner", name: "Inside Corner", icon: "📐", bgColor: "#e8f0e8",
    description: "Inside Corner molding creates a clean sanitary seal at 90° inside corners where two FRP panels meet. Eliminates hard-to-clean gaps and provides a professional, code-compliant corner finish.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Angle", value: "90°" }, { label: "Application", value: "Inside corners" }],
  },
  {
    id: "end-cap", name: "End Cap", icon: "🔲", bgColor: "#f0e8e8",
    description: "End Cap molding covers and protects exposed edges of FRP panels at terminations. Provides a professional finished appearance at wall edges, door frames, and panel ends.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Application", value: "Panel edges" }],
  },
  {
    id: "outside-corner", name: "Outside Corner", icon: "📏", bgColor: "#e8e8f0",
    description: "Outside Corner molding protects and finishes exterior 90° corners where FRP panels meet. Guards against chipping, impact damage, and bacterial buildup at exposed corners.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Angle", value: "90°" }, { label: "Application", value: "Outside corners" }],
  },
  {
    id: "outside-corner-angle", name: "Outside Corner Angle", icon: "📐", bgColor: "#f0ede8",
    description: "Outside Corner Angle provides protection for non-standard angled exterior corners. Ideal for unique wall configurations and custom installation requirements.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Application", value: "Angled corners" }],
  },
  {
    id: "nylon-rivets", name: "Nylon Rivets", icon: "🔘", bgColor: "#ece8f0",
    description: "Corrosion-resistant nylon rivets for secure FRP panel attachment. Non-metal construction prevents rust contamination — essential for food-safe and healthcare environments.",
    specs: [{ label: "Material", value: "Nylon" }, { label: "Type", value: "Pop rivet" }, { label: "Feature", value: "Rust-free" }],
  },
  {
    id: "titebond", name: "Titebond Adhesive", icon: "🪣", bgColor: "#e8f0ec",
    description: "Professional-grade FRP panel adhesive formulated for permanent, moisture-resistant bonding. Specifically designed for commercial kitchen and food processing environments.",
    specs: [{ label: "Type", value: "Contact cement" }, { label: "Coverage", value: "~40 sq ft/gal" }, { label: "Feature", value: "Moisture resistant" }],
  },
];

function Accessories() {
  const [activeId, setActiveId] = useState(ACCESSORIES[0].id);
  const active = ACCESSORIES.find(a => a.id === activeId)!;

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 620 }}>

        {/* Left 60% — Visual panel */}
        <div className="lg:w-[60%] flex items-center justify-center p-16 transition-colors duration-500"
             style={{ background: active.bgColor }}>
          <div className="text-center max-w-md">
            <div className="text-[100px] mb-6 leading-none">{active.icon}</div>
            <h3 className="text-3xl font-bold text-[#1e3a5f] mb-6">{active.name}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {active.specs.map(({ label, value }) => (
                <div key={label} className="bg-white/80 rounded-xl px-4 py-3 text-center backdrop-blur-sm min-w-[90px]">
                  <div className="text-[10px] font-bold text-[#ff6b35] uppercase tracking-widest border-b-2 border-[#ff6b35] pb-1 mb-1.5">{label}</div>
                  <div className="text-sm font-bold text-[#1e3a5f]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 40% — Accordion */}
        <div className="lg:w-[40%] bg-white flex flex-col justify-center py-16 px-10">
          <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-widest mb-3">FRP Installation Accessories</p>
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-8 leading-tight">
            Complete your installation with professional-grade accessories
          </h2>
          <div className="divide-y divide-gray-100">
            {ACCESSORIES.map(acc => (
              <div key={acc.id}>
                <button onClick={() => setActiveId(acc.id)}
                        className="w-full flex items-center justify-between py-4 text-left group">
                  <span className={`font-semibold text-sm transition-colors ${activeId === acc.id ? "text-[#1e3a5f]" : "text-gray-400 group-hover:text-gray-700"}`}>
                    {acc.name}
                  </span>
                  <span className={`text-xl font-light ml-4 transition-colors ${activeId === acc.id ? "text-[#ff6b35]" : "text-gray-300"}`}>
                    {activeId === acc.id ? "−" : "+"}
                  </span>
                </button>
                {activeId === acc.id && (
                  <div className="pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{acc.description}</p>
                    <a href="#contact" className="text-sm font-semibold text-[#1e3a5f] underline underline-offset-4 hover:text-[#ff6b35] transition-colors">
                      Inquire about {acc.name} →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── SERVICES ───────────────────────────────── */
function Services() {
  const items = [
    { icon: "🔧", title: "Professional Installation", desc: "Certified installation crews specializing in commercial kitchens and food facilities. Code-compliant execution with meticulous attention to detail and on-schedule project completion." },
    { icon: "📦", title: "Material Supply",           desc: "Premium Class-C FRP panels in stock and ready to ship. Same-day delivery across the GTA with flexible order quantities tailored to your project needs." },
    { icon: "🎨", title: "Custom Solutions",          desc: "Special order capabilities for unique project specifications. Custom colors, non-standard dimensions, and project-specific accessories to match your exact requirements." },
    { icon: "📋", title: "Project Consultation",      desc: "Complimentary on-site assessments and material planning. Expert recommendations to meet health code standards and optimize your installation approach." },
  ];
  return (
    <section id="services" className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#1e3a5f] mb-3">Our Services</h2>
        <p className="text-center text-gray-500 text-lg mb-12">Comprehensive FRP solutions backed by decades of commercial installation expertise</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="border-2 border-gray-200 rounded-2xl p-10 text-center hover:border-[#ff6b35] hover:-translate-y-2 hover:shadow-xl transition-all">
              <div className="text-6xl mb-5">{icon}</div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── WHY CHOOSE US ──────────────────────────── */
function WhyChooseUs() {
  const features = [
    { icon: "🏆", title: "Trusted Brand",       desc: "Established reputation for delivering excellence in commercial FRP installations across the Greater Toronto Area." },
    { icon: "⚡", title: "Rapid Response",      desc: "Same-day delivery available for urgent projects. We understand contractor timelines and deliver accordingly." },
    { icon: "🎯", title: "Expert Execution",    desc: "Certified installation teams with specialized commercial kitchen and food facility experience." },
    { icon: "🤝", title: "Service Excellence",  desc: "Dedicated support from consultation through completion. Your success is our priority on every project." },
  ];
  return (
    <section className="py-20 px-5" style={{ background: "linear-gradient(135deg,#1e3a5f,#2d4f7a)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-3">Why Choose Corevance</h2>
        <p className="text-center text-white/80 text-lg mb-12">Built from the core, engineered to advance your commercial projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="text-center p-9 rounded-2xl border-2 border-white/20 bg-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="text-6xl mb-5">{icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-white/80 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FOOTER ─────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="text-[#ff6b35] font-bold text-lg mb-4">Corevance</h3>
          <p className="text-gray-300 leading-loose text-sm">Professional FRP wall panel installation and supply services for commercial applications across the Greater Toronto Area.</p>
        </div>
        <div>
          <h3 className="text-[#ff6b35] font-bold text-lg mb-4">Services</h3>
          {["Professional Installation","Material Supply","Custom Solutions","Get a Quote"].map(s => (
            <a key={s} href="#services" className="block text-gray-300 hover:text-[#ff6b35] leading-loose text-sm transition-colors">{s}</a>
          ))}
        </div>
        <div>
          <h3 className="text-[#ff6b35] font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm leading-loose">📞 <a href="tel:4378493781" className="hover:text-[#ff6b35]">437-849-3781</a></p>
          <p className="text-gray-300 text-sm leading-loose">✉️ <a href="mailto:corevancesales@gmail.com" className="hover:text-[#ff6b35]">corevancesales@gmail.com</a></p>
          <p className="text-gray-300 text-sm mt-4 leading-loose">
            <strong>Business Hours:</strong><br />
            Mon–Fri: 8:00 AM – 6:00 PM<br />
            Saturday: 9:00 AM – 2:00 PM<br />
            Sunday: By Appointment
          </p>
        </div>
        <div>
          <h3 className="text-[#ff6b35] font-bold text-lg mb-4">Product Standards</h3>
          {[
            "✓ Class C Fire Rating",
            "✓ Commercial Grade Materials",
            "✓ CFIA Accepted Installations",
            "✓ Expert Installation Crews",
          ].map(s => (
            <p key={s} className="text-gray-300 text-sm leading-loose">{s}</p>
          ))}
        </div>
      </div>
      <div className="text-center border-t border-white/10 pt-8 text-gray-400 text-sm">
        <p>© 2025 Corevance. All rights reserved.</p>
        <p className="mt-2 text-xs">Professional FRP wall panel installation and supply services in the Greater Toronto Area</p>
      </div>
    </footer>
  );
}

/* ─────────────────────── PAGE ────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TickerBar />
      <Navbar />
      <FloatingProductPanel />
      <main>
        <Hero />
        <ContactForm />
        <Products />
        <ColorsAndSizes />
        <Accessories />
        <Services />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
