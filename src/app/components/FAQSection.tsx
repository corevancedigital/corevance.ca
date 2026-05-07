"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "How much does FRP panel installation cost in Toronto?",
    a: "FRP panel installation in Toronto typically costs between $8 and $18 per square foot installed, depending on project scope, wall condition, and accessibility. Corevance provides free on-site consultations and detailed quotes within 24 hours. Call 437-849-3781 for a custom estimate.",
  },
  {
    q: "Is FRP better than tile for commercial kitchens?",
    a: "Yes. FRP panels outperform ceramic tile in commercial kitchens. FRP has no grout lines where bacteria accumulate, is seamless and easier to sanitize, installs faster at lower cost, resists moisture and impact, and is CFIA-accepted for food facilities — without the ongoing maintenance burden of grouted tile.",
  },
  {
    q: "What are FRP wall panels used for?",
    a: "FRP (Fiberglass Reinforced Panels) are used in commercial kitchens, food processing facilities, restaurants, healthcare facilities, car washes, and industrial spaces. They provide a hygienic, moisture-resistant, and durable wall surface that meets CFIA, health code, and building code requirements.",
  },
  {
    q: "How long does commercial FRP installation take?",
    a: "A typical commercial FRP installation takes 1 to 3 days depending on square footage and wall condition. Corevance offers same-day material delivery across the GTA and experienced crews that minimize disruption to your operations.",
  },
  {
    q: "Are FRP panels CFIA approved for food facilities in Canada?",
    a: "Yes. Class C FRP panels installed with proper PVC moldings, nylon rivets, and food-safe adhesives are CFIA (Canadian Food Inspection Agency) accepted for food processing and food service facilities. Corevance installs complete FRP systems that meet all CFIA and provincial health code requirements.",
  },
  {
    q: "What FRP panel sizes does Corevance supply?",
    a: "Corevance stocks FRP panels in 8′ × 4′ and 10′ × 4′ sizes in pebbled and smooth finishes, 2mm thick with Class C fire rating. Custom sizes up to 12′ × 5′ are available on special order. Colours include Almond, Ivory, Beige, Light Gray, Silver, and Black.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-5 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-base sm:text-lg mb-12">
          Everything you need to know about FRP wall panel installation and supply
        </p>
        <div className="flex flex-col gap-3">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#ff6b35] transition-colors">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-[#1e3a5f] text-sm sm:text-base">{q}</span>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#ff6b35] text-[#ff6b35] flex items-center justify-center font-bold text-lg transition-transform"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-gray-500 text-sm">
          Have more questions?{" "}
          <a href="#contact" className="text-[#ff6b35] font-semibold hover:underline">
            Contact our team
          </a>{" "}
          for a free consultation.
        </p>
      </div>
    </section>
  );
}
