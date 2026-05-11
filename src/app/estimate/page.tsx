import type { Metadata } from "next";
import Image from "next/image";
import MaterialEstimator from "../components/MaterialEstimator";

export const metadata: Metadata = {
  title: "Material & Budget Estimator",
  description: "Instantly estimate how many FRP wall panels and accessories you need for your project, with a side-by-side price comparison between Corevance and Home Depot.",
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
              alt="Corevance – Commercial FRP Wall Panel Installation & Supply"
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
