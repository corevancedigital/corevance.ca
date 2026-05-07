"use client";
import { useState } from "react";
import Image from "next/image";

type Acc = {
  id: string; name: string; img: string | null; emoji: string;
  description: string; specs: { label: string; value: string }[];
};

const ACCESSORIES: Acc[] = [
  {
    id: "divider-bar", name: "Divider Bar", img: "/divider_bar.png", emoji: "⚊",
    description: "Divider Bar creates a clean, professional joint between two FRP panels on the same wall plane. Allows for thermal expansion while sealing panel edges against moisture intrusion. Required for code-compliant installations in food processing facilities.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Application", value: "Panel joints" }, { label: "Finish", value: "White" }],
  },
  {
    id: "inside-corner", name: "Inside Corner", img: "/inside_corner.png", emoji: "📐",
    description: "Inside Corner molding creates a clean sanitary seal at 90° inside corners where two FRP panels meet. Eliminates hard-to-clean gaps and provides a professional, code-compliant corner finish. Essential for commercial kitchens and food processing facilities.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Angle", value: "90°" }, { label: "Application", value: "Inside corners" }],
  },
  {
    id: "end-cap", name: "End Cap", img: "/end_cap.png", emoji: "🔲",
    description: "End Cap molding covers and protects exposed edges of FRP panels at terminations. Provides a professional finished appearance at wall edges, door frames, and panel ends. Moisture-resistant and bacteria-resistant.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Finish", value: "Painted" }, { label: "Application", value: "Panel edges" }],
  },
  {
    id: "outside-corner", name: "Outside Corner", img: "/outside_corner.png", emoji: "📏",
    description: "Outside Corner molding protects and finishes exterior 90° corners where FRP panels meet. Guards against chipping, impact damage, and bacterial buildup at exposed corners. Required for CFIA-accepted installations.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Angle", value: "90°" }, { label: "Standard", value: "CFIA" }],
  },
  {
    id: "outside-corner-angle", name: "Outside Corner Angle", img: "/outside_corner.png", emoji: "📐",
    description: "Outside Corner Angle provides protection for non-standard angled exterior corners. Ideal for unique wall configurations and custom installation requirements where standard 90° corners are insufficient.",
    specs: [{ label: "Material", value: "PVC" }, { label: "Length", value: "8 ft" }, { label: "Application", value: "Angled corners" }],
  },
  {
    id: "nylon-rivets", name: "Nylon Rivets", img: "/rivets.png", emoji: "🔘",
    description: "Corrosion-resistant nylon rivets for secure FRP panel attachment. Non-metal construction prevents rust contamination — essential for food-safe and healthcare environments. Approved for CFIA food facility installations.",
    specs: [{ label: "Material", value: "Nylon" }, { label: "Type", value: "Pop rivet" }, { label: "Feature", value: "Rust-free" }, { label: "Standard", value: "Food-safe" }],
  },
  {
    id: "titebond", name: "Titebond Adhesive", img: "/adhesive.png", emoji: "🪣",
    description: "Professional-grade FRP panel adhesive formulated for permanent, moisture-resistant bonding to virtually any clean substrate. Specifically designed for commercial kitchen and food processing environments. Low VOC formula.",
    specs: [{ label: "Type", value: "Contact cement" }, { label: "Coverage", value: "~40 sq ft/gal" }, { label: "Feature", value: "Moisture resistant" }, { label: "VOC", value: "Low VOC" }],
  },
];

export default function AccessoriesSection() {
  const [modal, setModal] = useState<Acc | null>(null);

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-3">FRP Installation Accessories</h2>
        <p className="text-center text-lg font-semibold text-[#ff6b35] mb-2">Complete Your Installation</p>
        <p className="text-center text-gray-500 text-base mb-12">Professional-grade accessories for every joint, corner, and edge</p>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {ACCESSORIES.map(acc => (
            <div key={acc.id}
              className="flex items-center gap-5 bg-gray-50 border-2 border-gray-200 rounded-2xl p-5 hover:border-[#ff6b35] hover:shadow-md transition-all group">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                {acc.img
                  ? <Image src={acc.img} alt={acc.name} width={56} height={56} className="object-contain p-1" />
                  : <span className="text-3xl">{acc.emoji}</span>
                }
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#1e3a5f] text-lg group-hover:text-[#ff6b35] transition-colors">{acc.name}</h4>
                <p className="text-gray-400 text-sm mt-0.5">{acc.specs[0].label}: {acc.specs[0].value} · {acc.specs[1]?.label}: {acc.specs[1]?.value}</p>
              </div>
              <button onClick={() => setModal(acc)}
                aria-label={`Learn more about ${acc.name}`}
                className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#ff6b35] text-[#ff6b35] text-xl font-bold flex items-center justify-center hover:bg-[#ff6b35] hover:text-white transition-all">
                +
              </button>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={() => setModal(null)}>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}>
            <div className="flex flex-col md:flex-row" style={{ minHeight: 420 }}>
              <div className="md:w-[60%] flex flex-col items-center justify-center p-12 bg-[#f7f7f7]">
                {modal.img
                  ? <Image src={modal.img} alt={modal.name} width={300} height={300} className="object-contain mb-6" />
                  : <div className="text-[90px] mb-6 leading-none">{modal.emoji}</div>
                }
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">{modal.name}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {modal.specs.map(({ label, value }) => (
                    <div key={label} className="bg-white rounded-xl px-4 py-3 text-center shadow-sm min-w-[80px]">
                      <div className="text-[9px] font-bold text-[#ff6b35] uppercase tracking-widest border-b-2 border-[#ff6b35] pb-1 mb-1.5">{label}</div>
                      <div className="text-sm font-bold text-[#1e3a5f]">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-[40%] bg-white flex flex-col justify-center p-8">
                <button onClick={() => setModal(null)}
                  className="self-end text-gray-300 hover:text-gray-600 text-2xl leading-none mb-4 transition-colors">×</button>
                <p className="text-xs font-bold text-[#ff6b35] uppercase tracking-widest mb-3">Installation Accessory</p>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">{modal.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{modal.description}</p>
                <a href="#contact"
                  onClick={() => setModal(null)}
                  className="inline-block bg-[#ff6b35] text-white font-semibold text-sm px-6 py-3 rounded-full text-center hover:bg-[#e55a28] transition-colors no-underline">
                  Inquire about {modal.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
