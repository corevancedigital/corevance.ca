"use client";
import { useState } from "react";

const colors = [
  { name: "Almond", bg: "#f5f0e8" },
  { name: "Ivory", bg: "#fffff0" },
  { name: "Beige", bg: "#f5f5dc" },
  { name: "Light Gray", bg: "#d3d3d3" },
  { name: "Silver", bg: "#c0c0c0" },
  { name: "Black", bg: "#1a1a1a" },
];

const sizes = [
  { dim: "8′ × 4′", inches: "96″ × 48″", tag: "Standard" },
  { dim: "10′ × 4′", inches: "120″ × 48″", tag: "Standard" },
  { dim: "12′ × 4′", inches: "144″ × 48″", tag: "Large" },
  { dim: "10′ × 5′", inches: "120″ × 60″", tag: "Wide" },
  { dim: "12′ × 5′", inches: "144″ × 60″", tag: "Extra Large" },
];

export default function ColorsAndSizes() {
  const [tab, setTab] = useState<"colors" | "sizes">("colors");

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-3">Custom Sizes and Colors Available</h2>
        <p className="text-center text-gray-500 text-base sm:text-lg mb-8">In-stock options ready for immediate delivery · Special orders welcome</p>
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-full p-1 gap-1">
            {(["colors", "sizes"] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-8 py-2.5 rounded-full font-semibold text-sm transition-all capitalize ${tab === t ? "bg-white text-[#1e3a5f] shadow-sm" : "text-gray-400 hover:text-gray-600"}`}>
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
