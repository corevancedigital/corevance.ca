"use client";

import dynamic from "next/dynamic";

const AreasMap = dynamic(() => import("./AreasMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center"
      style={{ height: "min(70vh, 640px)" }}
    >
      <div className="text-center px-4">
        <div className="w-10 h-10 rounded-full border-4 border-gray-200 border-t-[#ff6b35] animate-spin mx-auto mb-3" />
        <p className="text-sm text-gray-500">Loading service area map…</p>
      </div>
    </div>
  ),
});

export default function AreasMapWrapper() {
  return <AreasMap />;
}
