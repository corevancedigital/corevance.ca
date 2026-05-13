import Image from "next/image";
import FloatingProductPanel from "./components/FloatingProductPanel";
import ColorsAndSizes from "./components/ColorsAndSizes";
import AccessoriesSection from "./components/AccessoriesSection";
import FAQSection from "./components/FAQSection";

/* ─────────────────────────── HERO ────────────────────────────────── */
function Hero() {
  return (
    <section id="contact" className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "100svh" }}>
      <video
        autoPlay muted playsInline loop
        poster="/frp_smooth.jpg"
        preload="none"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.55)" }}
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,27,42,0.35) 0%, rgba(30,58,95,0.28) 100%)" }} />

      <div className="relative z-10 w-full px-4 sm:px-6 pt-10 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 items-center gap-8 lg:gap-12">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6 sm:mb-8">
              FRP Wall Panels for<br />
              GTA Commercial<br />
              Contractors
            </h1>
            <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4">
              <a href="#products"
                className="bg-white text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base hover:bg-gray-100 transition-all no-underline">
                Products
              </a>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <a href="#contact"
                  className="bg-[#3b82f6] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base hover:bg-[#2563eb] transition-all no-underline">
                  Book Your Meeting Today
                </a>
                <a href="/estimate"
                  className="bg-[#ff6b35] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base hover:bg-[#e55a28] hover:-translate-y-0.5 transition-all no-underline">
                  Estimate Materials
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 w-full">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-1 text-center">Tell Us About Your Project</h2>
              <p className="text-gray-500 text-sm mb-5 text-center">Get expert consultation and a detailed quote within 24 hours</p>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScbbYsOGM3cK0Fgal-pd9xqLk4DQtl1NCOv3QkH-Nr1R-PF4w/formResponse"
                method="POST"
                target="_blank"
                className="flex flex-col gap-4"
              >
                {[
                  { id: "name",  label: "Name *",  type: "text",  entry: "entry.798262969"  },
                  { id: "phone", label: "Phone *", type: "tel",   entry: "entry.2034387381" },
                  { id: "email", label: "Email *", type: "email", entry: "entry.1732231777" },
                ].map(({ id, label, type, entry }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block mb-1.5 font-semibold text-[#1e3a5f] text-sm">{label}</label>
                    <input id={id} name={entry} type={type} required autoComplete={id}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors" />
                  </div>
                ))}
                <div>
                  <label htmlFor="project" className="block mb-1.5 font-semibold text-[#1e3a5f] text-sm">Tell us about your project *</label>
                  <textarea id="project" name="entry.902552580" required rows={4}
                    placeholder="Describe your project scope, timeline, square footage, and any specific requirements..."
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors resize-y" />
                </div>
                <button type="submit"
                  className="w-full bg-[#ff6b35] text-white font-bold py-3.5 rounded-full text-base hover:bg-[#e55a28] hover:-translate-y-0.5 transition-all shadow-md">
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

/* ─────────────────────── PRODUCTS ───────────────────────────────── */
function Products() {
  const products = [
    { title: "Class C – 8′ × 4′ Pebbled",  finish: "pebbled", alt: "Pebbled FRP wall panel for commercial kitchens — Corevance GTA",                              specs: [["Size","8′ × 4′ (96″ × 48″)"], ["Finish","Pebbled texture"], ["Thickness","2mm"], ["Class","C Fire Rating"]] },
    { title: "Class C – 8′ × 4′ Smooth",   finish: "smooth",  alt: "Smooth FRP wall panel for food processing facilities — Corevance GTA",                         specs: [["Size","8′ × 4′ (96″ × 48″)"], ["Finish","Smooth surface"],  ["Thickness","2mm"], ["Class","C Fire Rating"]] },
    { title: "Class C – 10′ × 4′ Pebbled", finish: "pebbled", alt: "Large format pebbled FRP wall panel for warehouses and industrial spaces — Corevance GTA",      specs: [["Size","10′ × 4′ (120″ × 48″)"],["Finish","Pebbled texture"], ["Thickness","2mm"], ["Class","C Fire Rating"]] },
    { title: "Class C – 10′ × 4′ Smooth",  finish: "smooth",  alt: "Large format smooth FRP wall panel for hospital and medical clinic walls — Corevance GTA",      specs: [["Size","10′ × 4′ (120″ × 48″)"],["Finish","Smooth surface"],  ["Thickness","2mm"], ["Class","C Fire Rating"]] },
  ];
  return (
    <section id="products" className="py-20 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-3">FRP Wall Panel Products</h2>
        <p className="text-center text-gray-500 text-base sm:text-lg mb-12">High-performance materials engineered for demanding commercial applications</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map(({ title, finish, alt, specs }) => (
            <a key={title} href="#contact"
               className="bg-white rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all overflow-hidden group no-underline">
              <div className="h-48 relative overflow-hidden rounded-t-2xl" style={{ borderTop: "4px solid #e5e7eb", borderRight: "4px solid #e5e7eb", borderLeft: "4px solid #e5e7eb" }}>
                {finish === "pebbled" ? (
                  <Image
                    src="/acc_frp_pebbled.png"
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <Image
                    src="/frp_smooth.jpg"
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-[#ff6b35]/90 text-white text-center py-3 font-semibold text-sm translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform">
                  Inquire
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

/* ─────────────────────── VERTICALS ──────────────────────────────── */
function Verticals() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[#ff6b35] font-semibold uppercase tracking-widest text-sm mb-3">Industries We Serve</p>
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">FRP Wall Panels for Every Commercial Application</h2>
        <p className="text-center text-gray-500 text-base sm:text-lg mb-14 max-w-3xl mx-auto">
          Corevance supplies and installs fiberglass reinforced plastic panels GTA contractors trust across the most demanding commercial environments. CFIA-accepted systems. Class C fire-rated. Same-day delivery.
        </p>

        <div className="space-y-10">

          {/* Commercial Kitchens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-3">Commercial Kitchen FRP Panels</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Commercial kitchen FRP panels from Corevance are the top choice for Toronto restaurant owners, institutional food service operators, and GTA contractors working on kitchen renovations. Unlike ceramic tile, FRP wall panels have no grout lines — eliminating the bacterial harborage points that fail CFIA and Toronto Public Health inspections. Our Class C, 2mm panels withstand grease, steam, and daily chemical sanitation without warping or delaminating. Each installation includes PVC divider bars, inside and outside corner trim, nylon rivets, and Titebond FRP adhesive for a complete, code-compliant system. Most commercial kitchen FRP installations in the GTA complete in one to two days, minimizing restaurant downtime.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">Why FRP over tile in kitchens</p>
              <ul className="space-y-2">
                {["No grout lines — no bacterial harborage", "CFIA-accepted for food preparation areas", "Resists grease, steam, and caustic cleaners", "Seamless PVC corner trim system", "Installs in 1–2 days; no curing time"].map(pt => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#ff6b35] font-bold mt-0.5">✓</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hospitals & Medical */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <div className="order-2 lg:order-1 bg-white rounded-xl p-6 border border-gray-100">
              <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">Why FRP in healthcare facilities</p>
              <ul className="space-y-2">
                {["Non-porous — resists mould and pathogen growth", "Smooth finish cleans with hospital-grade disinfectants", "Nylon rivets eliminate metal corrosion risk", "Impact-resistant for high-traffic corridors", "Available in light neutrals matching clinical aesthetics"].map(pt => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#ff6b35] font-bold mt-0.5">✓</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-3">Hospital &amp; Medical Clinic Wall Panels</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Hospitals, medical clinics, long-term care facilities, and veterinary practices across Ontario choose FRP wall panels for their infection-control properties and durability. Corevance installs smooth-finish FRP panels in procedure rooms, corridors, utility areas, and kitchen facilities — anywhere hygiene and impact resistance are non-negotiable. Our smooth Class C panels accept all standard hospital-grade disinfectants and resist moisture intrusion that drives mould in drywall. Corrosion-free nylon rivets and PVC molding systems mean no metal components to degrade in high-humidity clinical environments. We serve GTA healthcare contractors and facility managers with same-day delivery on in-stock panel sizes.
              </p>
            </div>
          </div>

          {/* Warehouses & Industrial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border border-gray-100 bg-gray-50 p-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f] mb-3">Warehouse &amp; Industrial FRP Solutions</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Warehouses, food distribution centres, cold storage facilities, and manufacturing plants throughout the GTA rely on Corevance FRP wall panels for durable, low-maintenance wall surfaces. Our 10′ × 4′ Class C panels cover large industrial wall areas efficiently, reducing panel count and installation time. Pebbled-texture FRP panels are ideal for loading docks and utility areas where surface durability is critical; smooth panels suit clean rooms and food-grade production zones. Corevance fiberglass reinforced plastic panels Ontario contractors specify are engineered for long service life with minimal upkeep — no painting, no grouting, no rust. Bulk contractor pricing available for large-format industrial projects.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-wide mb-3">Industrial FRP advantages</p>
              <ul className="space-y-2">
                {["10′ × 4′ panels reduce seams on tall walls", "Impact and abrasion resistant surface", "No painting or refinishing required", "Class C fire-rated for building code compliance", "Bulk contractor pricing on large orders"].map(pt => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#ff6b35] font-bold mt-0.5">✓</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── SERVICE AREAS ──────────────────────────── */
function ServiceAreas() {
  const cities = [
    { name: "Mississauga", href: "/frp-installation-mississauga" },
    { name: "Brampton",    href: "/frp-installation-brampton" },
    { name: "Scarborough", href: "/frp-installation-scarborough" },
    { name: "North York",  href: "/frp-installation-north-york" },
    { name: "Vaughan",     href: "/frp-installation-vaughan" },
    { name: "Etobicoke",   href: "/frp-installation-etobicoke" },
  ];
  return (
    <section className="py-14 px-5 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-widest mb-3">GTA Service Coverage</p>
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Serving Commercial Contractors Across the GTA</h2>
        <p className="text-gray-500 text-sm mb-8">Same-day delivery and installation. Free on-site quotes within 24 hours.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/frp-installation-toronto" className="bg-white border-2 border-[#ff6b35] text-[#1e3a5f] font-bold px-6 py-2.5 rounded-full text-sm hover:bg-[#ff6b35] hover:text-white transition-all no-underline">
            FRP Installation Toronto →
          </a>
          {cities.map(({ name, href }) => (
            <a key={name} href={href} className="bg-white border border-gray-200 text-[#1e3a5f] font-semibold px-5 py-2.5 rounded-full text-sm hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all no-underline">
              Serving {name} contractors →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── SERVICES ───────────────────────────────── */
function Services() {
  const items = [
    { icon: "🔧", title: "Professional Installation", desc: "Certified installation crews specializing in commercial kitchens and food facilities. Code-compliant execution with meticulous attention to detail and on-schedule project completion." },
    { icon: "📦", title: "Material Supply", desc: "Premium Class-C FRP panels in stock and ready to ship. Same-day delivery across the GTA with flexible order quantities tailored to your project needs." },
    { icon: "🎨", title: "Custom Solutions", desc: "Special order capabilities for unique project specifications. Custom colors, non-standard dimensions, and project-specific accessories to match your exact requirements." },
    { icon: "📋", title: "Project Consultation", desc: "Complimentary on-site assessments and material planning. Expert recommendations to meet health code standards and optimize your installation approach." },
  ];
  return (
    <section id="services" className="py-20 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-3">Our Services</h2>
        <p className="text-center text-gray-500 text-base sm:text-lg mb-12">Comprehensive FRP solutions backed by decades of commercial installation expertise</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="border-2 border-gray-200 rounded-2xl p-6 lg:p-10 text-center hover:border-[#ff6b35] hover:-translate-y-2 hover:shadow-xl transition-all bg-white">
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
    { icon: "🏆", title: "Trusted Brand", desc: "Established reputation for delivering excellence in commercial FRP installations across the Greater Toronto Area." },
    { icon: "⚡", title: "Rapid Response", desc: "Same-day delivery available for urgent projects. We understand contractor timelines and deliver accordingly." },
    { icon: "🎯", title: "Expert Execution", desc: "Certified installation teams with specialized commercial kitchen and food facility experience." },
    { icon: "🤝", title: "Service Excellence", desc: "Dedicated support from consultation through completion. Your success is our priority on every project." },
  ];
  return (
    <section className="py-20 px-5" style={{ background: "linear-gradient(135deg,#0d1b2a,#1e3a5f)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">Why Choose Corevance</h2>
        <p className="text-center text-white/70 text-base sm:text-lg mb-12">Built from the core, engineered to advance your commercial projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="text-center p-9 rounded-2xl border-2 border-white/15 bg-white/8 hover:bg-white/12 hover:border-[#ff6b35] hover:-translate-y-1 transition-all">
              <div className="text-6xl mb-5">{icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{desc}</p>
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
    <footer className="bg-white pt-16 pb-8 border-t-4 border-[#ff6b35]">
      <div className="max-w-6xl mx-auto px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <Image src="/corevance-logo-symbol.png" alt="Corevance — FRP Wall Panel Supplier Toronto" width={330} height={72} className="object-contain mb-5 max-w-full w-[220px] sm:w-[280px] lg:w-[330px]" />
          <p className="text-gray-600 leading-relaxed text-sm" style={{ textAlign: "justify", hyphens: "auto" }}>
            We don&apos;t just install panels — we set the standard. Corevance delivers precision-engineered FRP solutions to commercial contractors and facility operators who refuse to compromise. From the first estimate to the final rivet, we bring craftsmanship, speed, and accountability to every project.
          </p>
        </div>
        <div>
          <h3 className="text-[#1e3a5f] font-bold text-lg mb-4">Services</h3>
          <a href="/services" className="block text-gray-500 hover:text-[#ff6b35] leading-loose text-sm transition-colors">Professional Installation</a>
          <a href="/products" className="block text-gray-500 hover:text-[#ff6b35] leading-loose text-sm transition-colors">Material Supply</a>
          <a href="/services#custom" className="block text-gray-500 hover:text-[#ff6b35] leading-loose text-sm transition-colors">Custom Solutions</a>
          <a href="/#contact" className="block text-gray-500 hover:text-[#ff6b35] leading-loose text-sm transition-colors">Get a Quote</a>
        </div>
        <div>
          <h3 className="text-[#1e3a5f] font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-600 text-sm leading-loose">📞 <a href="tel:4378493781" className="hover:text-[#ff6b35] transition-colors">437-849-3781</a></p>
          <p className="text-gray-600 text-sm leading-loose">✉️ <a href="mailto:corevancesales@gmail.com" className="hover:text-[#ff6b35] transition-colors">corevancesales@gmail.com</a></p>
          <p className="text-gray-600 text-sm leading-loose mt-3">
            <a href="https://share.google/BeTDV46PAjKJ0mmCC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#ff6b35] transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#4285F4] flex-shrink-0"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              View us on Google
            </a>
          </p>
          <p className="text-gray-600 text-sm mt-4 leading-loose">
            <strong className="text-[#1e3a5f]">Business Hours:</strong><br />
            Mon–Fri: 8:00 AM – 6:00 PM<br />
            Saturday: 9:00 AM – 2:00 PM<br />
            Sunday: By Appointment
          </p>
        </div>
        <div>
          <h3 className="text-[#1e3a5f] font-bold text-lg mb-4">Product Standards</h3>
          {[
            "✓ Class C Fire Rating",
            "✓ Commercial Grade Materials",
            "✓ CFIA Accepted Installations",
            "✓ Expert Installation Crews",
          ].map(s => (
            <p key={s} className="text-gray-600 text-sm leading-loose">{s}</p>
          ))}
        </div>
      </div>
      <div className="text-center border-t border-gray-200 pt-8 text-gray-400 text-sm">
        <p className="text-[#1e3a5f] font-semibold">© 2025 Corevance. All rights reserved.</p>
        <p className="mt-2 text-xs text-gray-400">Professional FRP wall panel installation and supply services</p>
      </div>
      </div>
    </footer>
  );
}

/* ─────────────────────── HEADER ──────────────────────────────────── */
function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
        <Image
          src="/corevance-logo-symbol.png"
          alt="Corevance — FRP Wall Panel Supplier Toronto"
          width={278} height={61} priority
          className="object-contain w-[150px] h-auto sm:w-[220px] lg:w-[278px]"
        />
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <span className="text-xs sm:text-[24px] font-semibold text-[#1e3a5f] whitespace-nowrap uppercase">Call us now</span>
          <a
            href="tel:4378493781"
            aria-label="Call Corevance at 437-849-3781"
            className="no-underline group"
          >
            <div className="flex items-center px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full transition-opacity hover:opacity-90" style={{ background: "#ff6b35" }}>
              <span className="text-xs sm:text-[24px] font-bold text-white whitespace-nowrap">437-849-3781</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────── PAGE ────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FloatingProductPanel />
      <main>
        <Hero />
        <Products />
        <ColorsAndSizes />
        <AccessoriesSection />
        <Verticals />
        <ServiceAreas />
        <Services />
        <WhyChooseUs />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
