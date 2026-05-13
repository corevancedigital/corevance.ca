import type { Metadata } from "next";
import Image from "next/image";
import MaterialEstimator from "../components/MaterialEstimator";

export const metadata: Metadata = {
  title: "FRP Panel Material & Budget Estimator",
  description: "Instantly estimate FRP wall panels, accessories, and material cost for your commercial project. Compare Corevance pricing vs. retail. Free — no signup required.",
  alternates: { canonical: "https://corevance.ca/estimate" },
  keywords: [
    "FRP panel calculator",
    "FRP material estimator",
    "FRP cost calculator Canada",
    "how many FRP panels do I need",
    "FRP panel budget tool",
    "commercial FRP estimate GTA",
  ],
  openGraph: {
    title: "FRP Panel Estimator — Corevance",
    description: "Free FRP material estimator for commercial kitchen and facility projects. Get quantities for panels, divider bars, corners, and adhesive instantly.",
    url: "https://corevance.ca/estimate",
    type: "website",
    siteName: "Corevance",
    images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630, alt: "Corevance FRP Panel Estimator" }],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRP Panel Estimator — Corevance",
    description: "Free FRP material estimator for commercial kitchen and facility projects.",
    images: ["/corevance-logo-full.png"],
  },
};

export default function EstimatePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header — identical to homepage */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
          <a href="/" aria-label="Corevance home">
            <Image
              src="/corevance-logo-symbol.png"
              alt="Corevance — FRP Wall Panel Supplier Toronto"
              width={278}
              height={61}
              priority
              className="object-contain w-[150px] h-auto sm:w-[220px] lg:w-[278px]"
            />
          </a>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <span className="text-xs sm:text-[24px] font-semibold text-[#1e3a5f] whitespace-nowrap uppercase">Call us now</span>
            <a href="tel:4378493781" aria-label="Call Corevance at 437-849-3781" className="no-underline group">
              <div className="flex items-center px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full transition-opacity hover:opacity-90" style={{ background: "#ff6b35" }}>
                <span className="text-xs sm:text-[24px] font-bold text-white whitespace-nowrap">437-849-3781</span>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Estimator content */}
      <main>
        <MaterialEstimator />
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-gray-200 bg-white py-6 px-5 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Corevance Inc. · Greater Toronto Area</p>
          <div className="flex gap-5">
            <a href="mailto:corevancesales@gmail.com" className="hover:text-[#1e3a5f] transition-colors">corevancesales@gmail.com</a>
            <a href="tel:4378493781" className="hover:text-[#1e3a5f] transition-colors">437-849-3781</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
