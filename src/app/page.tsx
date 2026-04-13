import Image from "next/image";

function TickerBar() {
  const items = [
    "📞 +1 (647) 555-0192",
    "✉️ info@corevance.ca",
    "🚀 Built from the Core. Engineered to Advance.",
    "📞 +1 (647) 555-0192",
    "✉️ info@corevance.ca",
    "🚀 Built from the Core. Engineered to Advance.",
  ];

  return (
    <div className="bg-[#1a2f6e] text-white text-sm overflow-hidden whitespace-nowrap">
      <div className="flex animate-ticker">
        {items.map((item, i) => (
          <span key={i} className="inline-block px-10 py-2">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white shadow-sm">
        <Image
          src="/corevance-logo-full.png"
          alt="CoreVance"
          width={220}
          height={60}
          priority
          className="object-contain"
        />
        <div className="flex items-center gap-2 text-[#1a2f6e] font-semibold text-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#e8610d]" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
          </svg>
          <span>+1 (647) 555-0192</span>
        </div>
      </header>

      {/* Ticker Bar */}
      <TickerBar />

      {/* Page content */}
      <main className="flex flex-1 items-center justify-center">
        <p className="text-gray-400 text-sm">Your content goes here</p>
      </main>
    </div>
  );
}
