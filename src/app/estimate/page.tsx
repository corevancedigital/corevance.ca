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

      {/* Header — matches main site */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
          <a href="/" aria-label="Corevance home">
            <Image
              src="/corevance-logo-full.png"
              alt="Corevance – Commercial FRP Wall Panel Installation & Supply"
              width={220}
              height={56}
              className="w-[150px] sm:w-[200px] h-auto"
              priority
            />
          </a>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/"
              className="text-sm text-gray-500 hover:text-[#1e3a5f] font-medium transition-colors hidden sm:block"
            >
              ← Back to Home
            </a>
            <a
              href="tel:4378493781"
              className="bg-[#ff6b35] text-white font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm hover:bg-[#e55a28] hover:-translate-y-0.5 transition-all"
            >
              437-849-3781
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
