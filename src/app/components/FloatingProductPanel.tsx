"use client";
import { useState, useEffect } from "react";

const products = [
  { name: "8′ × 4′ Pebbled", detail: "96″ × 48″ · Pebbled" },
  { name: "8′ × 4′ Smooth", detail: "96″ × 48″ · Smooth" },
  { name: "10′ × 4′ Pebbled", detail: "120″ × 48″ · Pebbled" },
  { name: "10′ × 4′ Smooth", detail: "120″ × 48″ · Smooth" },
];

export default function FloatingProductPanel() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => { if (!dismissed) setVisible(window.scrollY > 550); };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="hidden lg:block fixed right-5 top-1/2 -translate-y-1/2 z-40 w-60 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
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
