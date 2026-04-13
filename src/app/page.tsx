import Image from "next/image";
import Link from "next/link";

/* ── Ticker Bar ───────────────────────────────────────────────── */
function TickerBar() {
  const items = [
    { icon: "📞", text: "437-849-3781", href: "tel:4378493781" },
    { icon: "✉️", text: "corevancesales@gmail.com", href: "mailto:corevancesales@gmail.com" },
    { icon: "📞", text: "437-849-3781", href: "tel:4378493781" },
    { icon: "✉️", text: "corevancesales@gmail.com", href: "mailto:corevancesales@gmail.com" },
  ];
  return (
    <div className="bg-[#ff6b35] text-white text-sm overflow-hidden whitespace-nowrap">
      <div className="flex animate-ticker">
        {[...items, ...items].map((item, i) => (
          <a key={i} href={item.href} className="inline-flex items-center gap-2.5 px-10 py-3 font-semibold hover:underline">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ── Navbar ───────────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5" style={{ paddingTop: 12, paddingBottom: 12 }}>
        <Image src="/corevance-logo-full.png" alt="Corevance" width={200} height={52} priority className="object-contain" />
        <ul className="hidden md:flex gap-8 list-none">
          {[["#contact", "Get a Quote"], ["#services", "Services"], ["#products", "Products"]].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-[#1e3a5f] font-semibold hover:text-[#ff6b35] transition-colors no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="text-white text-center py-24 px-5" style={{
      background: "linear-gradient(135deg, rgba(30,58,95,0.97), rgba(24,47,76,0.97))"
    }}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-5 leading-tight">
          Transform Commercial Spaces with<br />Expert FRP Wall Panel Solutions
        </h1>
        <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto">
          Trusted installation and supply partner for contractors building commercial kitchens, healthcare facilities, and food processing environments across the Greater Toronto Area
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {["✓ Expert Installation Teams", "✓ Same-Day GTA Delivery", "✓ Custom Color Solutions"].map(b => (
            <span key={b} className="px-6 py-3 rounded-full font-semibold text-sm border-2 border-white/30 bg-white/15">{b}</span>
          ))}
        </div>
        <a href="#contact" className="inline-block bg-[#ff6b35] text-white font-bold py-4 px-11 rounded-full text-lg transition-all hover:bg-[#e55a28] hover:-translate-y-0.5 shadow-lg">
          Start Your Project Today
        </a>
      </div>
    </section>
  );
}

/* ── Contact Form ─────────────────────────────────────────────── */
function ContactForm() {
  return (
    <section id="contact" className="py-20 px-5" style={{ background: "linear-gradient(135deg,#f8f9fa,#e9ecef)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#1e3a5f] mb-3">Tell Us About Your Project</h2>
        <p className="text-center text-gray-500 text-lg mb-10">Get expert consultation and a detailed quote within 24 hours</p>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-12">
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-6">
            {[
              { id: "name", label: "Name *", type: "text" },
              { id: "phone", label: "Phone *", type: "tel" },
              { id: "email", label: "Email *", type: "email" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block mb-2 font-semibold text-[#1e3a5f] text-sm">{label}</label>
                <input id={id} name={id} type={type} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors" />
              </div>
            ))}
            <div>
              <label htmlFor="project" className="block mb-2 font-semibold text-[#1e3a5f] text-sm">Tell us about your project *</label>
              <textarea id="project" name="project" required rows={5} placeholder="Describe your project scope, timeline, square footage, and any specific requirements..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-[#ff6b35] transition-colors resize-y" />
            </div>
            <button type="submit" className="w-full bg-[#ff6b35] text-white font-bold py-4 rounded-full text-lg hover:bg-[#e55a28] hover:-translate-y-0.5 transition-all shadow-md">
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

/* ── Services ─────────────────────────────────────────────────── */
function Services() {
  const items = [
    { icon: "🔧", title: "Professional Installation", desc: "Certified installation crews specializing in commercial kitchens and food facilities. Code-compliant execution with meticulous attention to detail and on-schedule project completion." },
    { icon: "📦", title: "Material Supply", desc: "Premium Class-C FRP panels in stock and ready to ship. Same-day delivery across the GTA with flexible order quantities tailored to your project needs." },
    { icon: "🎨", title: "Custom Solutions", desc: "Special order capabilities for unique project specifications. Custom colors, non-standard dimensions, and project-specific accessories to match your exact requirements." },
    { icon: "📋", title: "Project Consultation", desc: "Complimentary on-site assessments and material planning. Expert recommendations to meet health code standards and optimize your installation approach." },
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

/* ── Products ─────────────────────────────────────────────────── */
function Products() {
  const products = [
    { title: "Class C – 8′ × 4′ Pebbled", specs: [["Size", "8′ × 4′ (96″ × 48″)"], ["Finish", "Pebbled texture"], ["Thickness", "2mm"], ["Class", "C Fire Rating"]] },
    { title: "Class C – 8′ × 4′ Smooth",  specs: [["Size", "8′ × 4′ (96″ × 48″)"], ["Finish", "Smooth surface"],  ["Thickness", "2mm"], ["Class", "C Fire Rating"]] },
    { title: "Class C – 10′ × 4′ Pebbled",specs: [["Size", "10′ × 4′ (120″ × 48″)"],["Finish", "Pebbled texture"], ["Thickness", "2mm"], ["Class", "C Fire Rating"]] },
    { title: "Class C – 10′ × 4′ Smooth", specs: [["Size", "10′ × 4′ (120″ × 48″)"],["Finish", "Smooth surface"],  ["Thickness", "2mm"], ["Class", "C Fire Rating"]] },
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

/* ── Colors ───────────────────────────────────────────────────── */
function Colors() {
  const colors = [
    { name: "Bright White", bg: "#fafafa" }, { name: "Almond", bg: "#f5f0e8" },
    { name: "Ivory", bg: "#fffff0" },        { name: "Beige", bg: "#f5f5dc" },
    { name: "Light Gray", bg: "#d3d3d3" },   { name: "Silver", bg: "#c0c0c0" },
    { name: "Black", bg: "#1a1a1a" },
  ];
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#1e3a5f] mb-3">Available Colors</h2>
        <p className="text-center text-gray-500 text-lg mb-10">Standard stock colors available for immediate delivery · Custom colors on request</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-5 max-w-4xl mx-auto">
          {colors.map(({ name, bg }) => (
            <div key={name} className="text-center p-4 border-2 border-gray-200 rounded-xl hover:border-[#ff6b35] hover:scale-105 transition-all cursor-pointer">
              <div className="w-full h-24 rounded-lg mb-2 border border-gray-300" style={{ background: bg }} />
              <p className="font-semibold text-[#1e3a5f] text-sm">{name}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-gray-500">
          Need a custom color?{" "}
          <a href="#contact" className="text-[#ff6b35] font-semibold">Contact us</a>{" "}
          for special orders and custom color matching.
        </p>
      </div>
    </section>
  );
}

/* ── Accessories ──────────────────────────────────────────────── */
function Accessories() {
  const items = [
    { icon: "🔩", name: "Divider Bar" },
    { icon: "📐", name: "Inside Corner" },
    { icon: "🔲", name: "End Cap" },
    { icon: "📏", name: "Outside Corner" },
    { icon: "📐", name: "Outside Corner Angle" },
    { icon: "🔘", name: "Nylon Rivets" },
    { icon: "🪣", name: "Titebond Adhesive" },
  ];
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#1e3a5f] mb-3">FRP Installation Accessories</h2>
        <p className="text-center text-gray-500 text-lg mb-12">Complete your installation with professional-grade accessories</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
          {items.map(({ icon, name }) => (
            <div key={name} className="bg-gray-50 p-6 rounded-xl text-center border-2 border-gray-200 hover:border-[#ff6b35] hover:-translate-y-1 transition-all">
              <div className="text-5xl mb-3">{icon}</div>
              <h4 className="font-semibold text-[#1e3a5f] text-sm">{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose Us ────────────────────────────────────────────── */
function WhyChooseUs() {
  const features = [
    { icon: "🏆", title: "Trusted Brand", desc: "Established reputation for delivering excellence in commercial FRP installations across the Greater Toronto Area." },
    { icon: "⚡", title: "Rapid Response", desc: "Same-day delivery available for urgent projects. We understand contractor timelines and deliver accordingly." },
    { icon: "🎯", title: "Expert Execution", desc: "Certified installation teams with specialized commercial kitchen and food facility experience." },
    { icon: "🤝", title: "Service Excellence", desc: "Dedicated support from consultation through completion. Your success is our priority on every project." },
  ];
  return (
    <section className="py-20 px-5" style={{ background: "linear-gradient(135deg,#1e3a5f,#2d4f7a)" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mb-3">Why Choose Corevance</h2>
        <p className="text-center text-white/90 text-lg mb-12">Built from the core, engineered to advance your commercial projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="text-center p-9 rounded-2xl border-2 border-white/20 bg-white/10 hover:bg-white/15 hover:-translate-y-1 transition-all">
              <div className="text-6xl mb-5">{icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-white/90 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <h3 className="text-[#ff6b35] font-bold text-lg mb-4">Corevance</h3>
          <p className="text-gray-300 leading-loose text-sm">Professional FRP wall panel installation and supply services for commercial applications across the Greater Toronto Area.</p>
          <p className="text-gray-300 text-sm mt-4"><strong>Service Area:</strong><br />Greater Toronto Area & Southern Ontario</p>
        </div>
        <div>
          <h3 className="text-[#ff6b35] font-bold text-lg mb-4">Services</h3>
          {["Professional Installation", "Material Supply", "Custom Solutions", "Get a Quote"].map(s => (
            <a key={s} href="#services" className="block text-gray-300 hover:text-[#ff6b35] leading-loose text-sm transition-colors">{s}</a>
          ))}
        </div>
        <div>
          <h3 className="text-[#ff6b35] font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm leading-loose">📞 <a href="tel:4378493781" className="hover:text-[#ff6b35]">437-849-3781</a></p>
          <p className="text-gray-300 text-sm leading-loose">✉️ <a href="mailto:corevancesales@gmail.com" className="hover:text-[#ff6b35]">corevancesales@gmail.com</a></p>
          <p className="text-gray-300 text-sm mt-4 leading-loose"><strong>Business Hours:</strong><br />Mon–Fri: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 2:00 PM<br />Sunday: By Appointment</p>
        </div>
        <div>
          <h3 className="text-[#ff6b35] font-bold text-lg mb-4">Product Standards</h3>
          {["✓ Class C Fire Rating", "✓ Commercial Grade Materials", "✓ Food-Safe Applications", "✓ Health Code Compliant"].map(s => (
            <p key={s} className="text-gray-300 text-sm leading-loose">{s}</p>
          ))}
          <p className="text-gray-300 text-sm mt-4">Built from the Core,<br />Engineered to Advance</p>
        </div>
      </div>
      <div className="text-center border-t border-white/10 pt-8 text-gray-400 text-sm">
        <p>© 2025 Corevance. All rights reserved.</p>
        <p className="mt-2 text-xs">Professional FRP wall panel installation and supply services in the Greater Toronto Area</p>
      </div>
    </footer>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <TickerBar />
      <Navbar />
      <main>
        <Hero />
        <ContactForm />
        <Services />
        <Products />
        <Colors />
        <Accessories />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
