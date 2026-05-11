"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

// ── Types ──────────────────────────────────────────────────────────────────────
type SurfaceType = "smooth" | "pebbled";
type PanelSize = "8x4" | "10x4" | "12x4" | "10x5" | "12x5";

interface WallInput {
  id: number;
  active: boolean;
  height: string;
  width: string;
  exposedEdges: number;
}

interface ColorOption { name: string; hex: string; }

interface EstimatorState {
  walls: WallInput[];
  color: ColorOption;
  surface: SurfaceType;
  outsideCorners: number;
  doorWindowArea: string;
  showAdvanced: boolean;
}

interface PriceRange { min: number; max: number; }

interface LineItem { item: string; qty: number; unit: string; hdUnit: PriceRange; coreUnit: number | null; }

interface HdPanelInfo { price: number | null; available: boolean; note: string; }

interface EstimatorResults {
  isValid: boolean;
  totalWallArea: number;
  areaAfterDeductions: number;
  panelsNeeded: number;
  dividerBarsNeeded: number;
  insideCornersNeeded: number;
  endCapsNeeded: number;
  outsideCornersNeeded: number;
  rivetPacksNeeded: number;
  adhesiveGallons: number;
  panelItems: LineItem[];
  accessoryItems: LineItem[];
  hdPanelTotal: PriceRange;
  hdAccessoryTotal: PriceRange;
  hdTotal: PriceRange;
  corePanelTotal: number | null;
  coreAccessoryTotal: number | null;
  coreTotal: PriceRange | null;
  corePanelUnitPrice: number | null;
  isCustomSize: boolean;
  hdPanelInfo: HdPanelInfo;
}

// ── Constants ──────────────────────────────────────────────────────────────────
const PANEL_SIZES: Record<PanelSize, { label: string; sqFt: number; dims: string; stock: boolean }> = {
  "8x4":  { label: "8′ × 4′",  sqFt: 32, dims: "96″ × 48″",  stock: true  },
  "10x4": { label: "10′ × 4′", sqFt: 40, dims: "120″ × 48″", stock: true  },
  "12x4": { label: "12′ × 4′", sqFt: 48, dims: "144″ × 48″", stock: false },
  "10x5": { label: "10′ × 5′", sqFt: 50, dims: "120″ × 60″", stock: false },
  "12x5": { label: "12′ × 5′", sqFt: 60, dims: "144″ × 60″", stock: false },
};

// White is first and selected by default
const COLORS: ColorOption[] = [
  { name: "White",      hex: "#ffffff" },
  { name: "Almond",     hex: "#f5f0e8" },
  { name: "Ivory",      hex: "#fffff0" },
  { name: "Beige",      hex: "#f5f5dc" },
  { name: "Light Gray", hex: "#d3d3d3" },
  { name: "Silver",     hex: "#c0c0c0" },
  { name: "Black",      hex: "#1a1a1a" },
];

const WASTE_FACTOR = 1.1;
const ADHESIVE_COVERAGE = 40;  // sq ft per gallon
const RIVETS_PER_PANEL = 8;    // ~8 rivets per panel (perimeter fastening)
const RIVETS_PER_PACK = 50;    // 1 pack = 50 rivets (Corevance)
const PANEL_WIDTH_FT = 4;
const ACCESSORY_LENGTH_FT = 8;
const DEFAULT_INSIDE_CORNERS = 4;

// HD Canada panel availability — only 8'x4' pebbled confirmed at $95 (before tax)
// Smooth surfaces and 10'x4' require consultation at Home Depot
const HD_PANEL_INFO: Record<string, HdPanelInfo> = {
  "8x4_pebbled":  { price: 95,   available: true,  note: "" },
  "8x4_smooth":   { price: null, available: false, note: "Smooth surface not stocked at Home Depot — consultation required" },
  "10x4_pebbled": { price: null, available: false, note: "10′ × 4′ panels require consultation at Home Depot" },
  "10x4_smooth":  { price: null, available: false, note: "Not available at Home Depot" },
};

// HD Canada accessory prices (CAD, before tax) — $10/piece confirmed
const HD_ACC: Record<string, PriceRange> = {
  divider_bar:    { min: 10, max: 10 },
  inside_corner:  { min: 10, max: 10 },
  end_cap:        { min: 10, max: 10 },
  outside_corner: { min: 10, max: 10 },
  nylon_rivets:   { min: 10, max: 10 },  // per pack
  adhesive:       { min: 40, max: 55 },
};

// Corevance confirmed prices (CAD, before tax)
const CORE_PANEL: Record<string, number | null> = {
  "8x4_smooth":   85,
  "8x4_pebbled":  90,
  "10x4_smooth":  95,
  "10x4_pebbled": 100,
  "12x4_smooth":  null,
  "12x4_pebbled": null,
  "10x5_smooth":  null,
  "10x5_pebbled": null,
  "12x5_smooth":  null,
  "12x5_pebbled": null,
};

// Corevance accessory prices (CAD, before tax)
const CORE_TRIM = 8.00;               // Division Bar, End Cap Moulding, Inside Corner, Outside Corner
const CORE_OUTSIDE_CORNER_STD = 8.00;
const CORE_OUTSIDE_CORNER_LG = 17.00; // 10′ Large Outside Corner
const CORE_RIVETS = 20.00;            // Nylon Rivets 3/4″ — pack of 50
const CORE_ADHESIVE_EST = 45;         // market rate estimate

const INITIAL_WALLS: WallInput[] = [
  { id: 1, active: true,  height: "", width: "", exposedEdges: 0 },
  { id: 2, active: true,  height: "", width: "", exposedEdges: 0 },
  { id: 3, active: false, height: "", width: "", exposedEdges: 0 },
  { id: 4, active: false, height: "", width: "", exposedEdges: 0 },
];

// ── Panel size recommendation — capped at 10'x4' (both in stock at Corevance) ──
function recommendPanelSize(walls: WallInput[]): PanelSize {
  const heights = walls
    .filter(w => w.active)
    .map(w => parseFloat(w.height) || 0)
    .filter(h => h > 0);
  if (heights.length === 0) return "8x4";
  const maxH = Math.max(...heights);
  if (maxH <= 8) return "8x4";
  return "10x4"; // 10'x4' used for all taller walls — in stock at Corevance
}

// ── Calculation ────────────────────────────────────────────────────────────────
function calculate(state: EstimatorState, panelSize: PanelSize): EstimatorResults {
  const EMPTY: EstimatorResults = {
    isValid: false, totalWallArea: 0, areaAfterDeductions: 0,
    panelsNeeded: 0, dividerBarsNeeded: 0, insideCornersNeeded: 0,
    endCapsNeeded: 0, outsideCornersNeeded: 0, rivetPacksNeeded: 0,
    adhesiveGallons: 0, panelItems: [], accessoryItems: [],
    hdPanelTotal: { min: 0, max: 0 }, hdAccessoryTotal: { min: 0, max: 0 },
    hdTotal: { min: 0, max: 0 }, corePanelTotal: null, coreAccessoryTotal: null,
    coreTotal: null, corePanelUnitPrice: null, isCustomSize: false,
    hdPanelInfo: { price: null, available: false, note: "" },
  };

  const active = state.walls
    .filter(w => w.active)
    .map(w => ({ h: parseFloat(w.height) || 0, w: parseFloat(w.width) || 0, exposedEdges: w.exposedEdges }))
    .filter(w => w.h > 0 && w.w > 0);

  if (active.length === 0) return EMPTY;

  const panelSqFt = PANEL_SIZES[panelSize].sqFt;
  const totalWallArea = active.reduce((s, w) => s + w.h * w.w, 0);
  const deduction = Math.max(0, parseFloat(state.doorWindowArea) || 0);
  const areaAfterDeductions = Math.max(0, totalWallArea - deduction);
  const panelsNeeded = Math.ceil(areaAfterDeductions * WASTE_FACTOR / panelSqFt);

  // Divider bars: joints between panels along wall width
  let dividerLinearFt = 0;
  for (const w of active) {
    dividerLinearFt += Math.max(0, Math.ceil(w.w / PANEL_WIDTH_FT) - 1) * w.h;
  }
  const dividerBarsNeeded = Math.max(0, Math.ceil(dividerLinearFt / ACCESSORY_LENGTH_FT));

  // Inside corners: 4 assumed for a typical room
  const avgHeight = active.reduce((s, w) => s + w.h, 0) / active.length;
  const insideCornersNeeded = DEFAULT_INSIDE_CORNERS * Math.ceil(avgHeight / ACCESSORY_LENGTH_FT);

  // End caps: per user-specified exposed edges
  let endCapLinearFt = 0;
  for (const w of active) endCapLinearFt += w.exposedEdges * w.h;
  const endCapsNeeded = Math.ceil(endCapLinearFt / ACCESSORY_LENGTH_FT);

  const outsideCornersNeeded = state.outsideCorners * Math.ceil(avgHeight / ACCESSORY_LENGTH_FT);
  const rivetPacksNeeded = Math.max(1, Math.ceil((panelsNeeded * RIVETS_PER_PANEL) / RIVETS_PER_PACK));
  const adhesiveGallons = Math.max(1, Math.ceil(areaAfterDeductions / ADHESIVE_COVERAGE));

  const hdPanelInfo: HdPanelInfo = HD_PANEL_INFO[`${panelSize}_${state.surface}`]
    ?? { price: null, available: false, note: "Not available at Home Depot" };
  const corePanelUnitPrice = CORE_PANEL[`${panelSize}_${state.surface}`] ?? null;
  const isCustomSize = corePanelUnitPrice === null;
  const outsideCornerCorePrice = panelSize === "10x4" ? CORE_OUTSIDE_CORNER_LG : CORE_OUTSIDE_CORNER_STD;

  // HD panel line — use price if available, zero otherwise (shown as unavailable in UI)
  const panelHdUnit: PriceRange = hdPanelInfo.available && hdPanelInfo.price !== null
    ? { min: hdPanelInfo.price, max: hdPanelInfo.price }
    : { min: 0, max: 0 };

  const panelItems: LineItem[] = [
    { item: `FRP Panel (${PANEL_SIZES[panelSize].label})`, qty: panelsNeeded, unit: "panels", hdUnit: panelHdUnit, coreUnit: corePanelUnitPrice },
  ];

  const accessoryItems: LineItem[] = [
    { item: "FRP Division Bar (8ft)",   qty: dividerBarsNeeded,    unit: "pcs",   hdUnit: HD_ACC.divider_bar,    coreUnit: CORE_TRIM },
    { item: "FRP Inside Corner (8ft)",  qty: insideCornersNeeded,  unit: "pcs",   hdUnit: HD_ACC.inside_corner,  coreUnit: CORE_TRIM },
    { item: "FRP End Cap (8ft)",        qty: endCapsNeeded,        unit: "pcs",   hdUnit: HD_ACC.end_cap,        coreUnit: CORE_TRIM },
    { item: "FRP Outside Corner",       qty: outsideCornersNeeded, unit: "pcs",   hdUnit: HD_ACC.outside_corner, coreUnit: outsideCornerCorePrice },
    { item: "Nylon Rivets (50-pk)",     qty: rivetPacksNeeded,     unit: "packs", hdUnit: HD_ACC.nylon_rivets,   coreUnit: CORE_RIVETS },
    { item: "Adhesive",                 qty: adhesiveGallons,      unit: "gal",   hdUnit: HD_ACC.adhesive,       coreUnit: CORE_ADHESIVE_EST },
  ];

  function sumHd(acc: PriceRange, item: LineItem): PriceRange {
    return { min: acc.min + item.qty * item.hdUnit.min, max: acc.max + item.qty * item.hdUnit.max };
  }
  const hdAccessoryTotal = accessoryItems.reduce(sumHd, { min: 0, max: 0 });
  const hdPanelTotal = hdPanelInfo.available && hdPanelInfo.price !== null
    ? { min: panelsNeeded * hdPanelInfo.price, max: panelsNeeded * hdPanelInfo.price }
    : { min: 0, max: 0 };
  const hdTotal = { min: hdPanelTotal.min + hdAccessoryTotal.min, max: hdPanelTotal.max + hdAccessoryTotal.max };

  let corePanelTotal: number | null = null;
  let coreAccessoryTotal: number | null = null;
  let coreTotal: PriceRange | null = null;

  if (!isCustomSize && corePanelUnitPrice !== null) {
    corePanelTotal = Math.round(panelsNeeded * corePanelUnitPrice);
    coreAccessoryTotal = Math.round(
      (dividerBarsNeeded + insideCornersNeeded + endCapsNeeded) * CORE_TRIM
      + outsideCornersNeeded * outsideCornerCorePrice
      + rivetPacksNeeded * CORE_RIVETS
      + adhesiveGallons * CORE_ADHESIVE_EST
    );
    const total = corePanelTotal + coreAccessoryTotal;
    coreTotal = { min: total, max: total };
  }

  return {
    isValid: true, totalWallArea, areaAfterDeductions, panelsNeeded,
    dividerBarsNeeded, insideCornersNeeded, endCapsNeeded,
    outsideCornersNeeded, rivetPacksNeeded, adhesiveGallons,
    panelItems, accessoryItems, hdPanelTotal, hdAccessoryTotal,
    hdTotal, corePanelTotal, coreAccessoryTotal, coreTotal,
    corePanelUnitPrice, isCustomSize, hdPanelInfo,
  };
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function MaterialEstimator() {
  const [state, setState] = useState<EstimatorState>({
    walls: INITIAL_WALLS,
    color: COLORS[0],   // White by default
    surface: "smooth",
    outsideCorners: 0,
    doorWindowArea: "",
    showAdvanced: false,
  });

  const { effectivePanelSize, maxActiveHeight, results } = useMemo(() => {
    const effectivePanelSize: PanelSize = recommendPanelSize(state.walls);
    const results = calculate(state, effectivePanelSize);
    const hs = state.walls.filter(w => w.active).map(w => parseFloat(w.height) || 0).filter(h => h > 0);
    const maxActiveHeight = hs.length ? Math.max(...hs) : 0;
    return { effectivePanelSize, maxActiveHeight, results };
  }, [state]);

  function updateWall(id: number, field: keyof WallInput, value: string | boolean | number) {
    setState(s => ({ ...s, walls: s.walls.map(w => w.id === id ? { ...w, [field]: value } : w) }));
  }

  function fmt(n: number) {
    return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
  }

  const pill = (active: boolean) =>
    `px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer ${
      active ? "bg-[#1e3a5f] text-white border-[#1e3a5f]" : "bg-white text-[#1e3a5f] border-gray-200 hover:border-[#1e3a5f]"
    }`;

  return (
    <div className="py-12 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Page heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-3">
            Material &amp; Budget Estimator
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Enter your wall dimensions for an instant material list and price comparison.
            All estimates include a 10% waste allowance for cuts and fitting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── Inputs ─────────────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-md border-2 border-gray-200 p-6 sm:p-8">

            <h2 className="text-lg font-bold text-[#1e3a5f] mb-5">Wall Dimensions</h2>
            <div className="space-y-3 mb-4">
              {state.walls.map(wall => (
                <div key={wall.id}
                  className={`flex items-center gap-2 transition-opacity ${wall.active ? "opacity-100" : "opacity-40"}`}>
                  <input
                    type="checkbox"
                    id={`wall-${wall.id}`}
                    checked={wall.active}
                    onChange={e => updateWall(wall.id, "active", e.target.checked)}
                    className="w-4 h-4 accent-[#ff6b35] cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor={`wall-${wall.id}`}
                    className="text-sm font-semibold text-[#1e3a5f] whitespace-nowrap cursor-pointer flex-shrink-0">
                    Wall {wall.id}
                  </label>
                  <div className="flex-1 grid grid-cols-[1fr_auto_1fr] items-center gap-1.5 min-w-0">
                    <input
                      type="number" placeholder="Height (ft)"
                      value={wall.height} disabled={!wall.active} min="0" step="0.5"
                      onChange={e => updateWall(wall.id, "height", e.target.value)}
                      className="w-full px-2 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                    />
                    <span className="text-gray-400 text-sm text-center px-0.5">×</span>
                    <input
                      type="number" placeholder="Width (ft)"
                      value={wall.width} disabled={!wall.active} min="0" step="0.5"
                      onChange={e => updateWall(wall.id, "width", e.target.value)}
                      className="w-full px-2 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Advanced toggle */}
            <button
              onClick={() => setState(s => ({ ...s, showAdvanced: !s.showAdvanced }))}
              className="text-sm text-[#ff6b35] font-semibold hover:underline mb-5 flex items-center gap-1"
            >
              <span>{state.showAdvanced ? "▲" : "▼"}</span>
              <span>Advanced options (doors, windows, outside corners)</span>
            </button>

            {state.showAdvanced && (
              <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-4 border border-gray-200">
                <div>
                  <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">
                    Subtract doors &amp; windows (sq ft total)
                  </label>
                  <input
                    type="number" placeholder="e.g. 21"
                    value={state.doorWindowArea} min="0"
                    onChange={e => setState(s => ({ ...s, doorWindowArea: e.target.value }))}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                  />
                  <p className="text-xs text-gray-400 mt-1">Standard door ≈ 20 sq ft · Window ≈ 9–15 sq ft</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Outside corners (count)</label>
                  <input
                    type="number" placeholder="0"
                    value={state.outsideCorners || ""} min="0" max="20"
                    onChange={e => setState(s => ({ ...s, outsideCorners: parseInt(e.target.value) || 0 }))}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                  />
                </div>
                {state.walls.some(w => w.active) && (
                  <div>
                    <label className="block text-sm font-semibold text-[#1e3a5f] mb-2">Exposed panel edges (for end caps)</label>
                    <div className="space-y-2">
                      {state.walls.filter(w => w.active).map(wall => (
                        <div key={wall.id} className="flex items-center gap-3">
                          <span className="text-sm text-gray-500 w-14 flex-shrink-0">Wall {wall.id}</span>
                          <select
                            value={wall.exposedEdges}
                            onChange={e => updateWall(wall.id, "exposedEdges", parseInt(e.target.value))}
                            className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                          >
                            {[0, 1, 2].map(n => (
                              <option key={n} value={n}>{n} exposed edge{n !== 1 ? "s" : ""}</option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="border-t border-gray-100 pt-6 space-y-6">

              {/* Color */}
              <div>
                <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Color</h2>
                <div className="flex flex-wrap items-center gap-3">
                  {COLORS.map(c => (
                    <button
                      key={c.name}
                      title={c.name}
                      aria-label={`Select ${c.name}`}
                      onClick={() => setState(s => ({ ...s, color: c }))}
                      style={{ backgroundColor: c.hex }}
                      className={`w-9 h-9 rounded-full transition-all border-2 ${
                        state.color.name === c.name
                          ? "ring-2 ring-[#ff6b35] ring-offset-2 border-gray-300 scale-110"
                          : "border-gray-300 hover:scale-105"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 font-medium">{state.color.name}</span>
                </div>
              </div>

              {/* Surface */}
              <div>
                <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Surface</h2>
                <div className="flex gap-3">
                  {(["smooth", "pebbled"] as SurfaceType[]).map(s => (
                    <button key={s} onClick={() => setState(st => ({ ...st, surface: s }))} className={pill(state.surface === s)}>
                      {s === "smooth" ? "Smooth" : "Pebbled"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Panel size — auto-determined from wall height */}
              <div>
                <h2 className="text-base font-bold text-[#1e3a5f] mb-2">Panel Size</h2>
                {maxActiveHeight > 0 ? (
                  <div className="flex items-center gap-3">
                    <span className="bg-[#1e3a5f] text-white font-semibold px-4 py-2 rounded-full text-sm">
                      {PANEL_SIZES[effectivePanelSize].label}
                    </span>
                    <span className="text-xs text-[#ff6b35] font-medium">
                      ✓ Selected for your {maxActiveHeight}ft walls
                    </span>
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">Enter wall height to determine panel size</p>
                )}
                {maxActiveHeight > 0 && !PANEL_SIZES[effectivePanelSize].stock && (
                  <p className="text-xs text-gray-400 mt-2">Custom size — contact us for lead time and availability.</p>
                )}
              </div>

            </div>
          </div>

          {/* ── Results ────────────────────────────────────────────────────── */}
          {results.isValid ? (
            <div className="space-y-5 animate-fadeSlideIn">

              {/* Material table */}
              <div className="bg-white rounded-2xl shadow-md border-2 border-gray-200 p-6">
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-1">Material Summary</h2>
                <p className="text-xs text-gray-400 mb-4">
                  Total wall area: <strong className="text-gray-600">{Math.round(results.totalWallArea)} sq ft</strong>
                  {(parseFloat(state.doorWindowArea) || 0) > 0 && (
                    <> · After deductions: <strong className="text-gray-600">{Math.round(results.areaAfterDeductions)} sq ft</strong></>
                  )}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-2 font-semibold text-[#1e3a5f]">Item</th>
                        <th className="text-center py-2 font-semibold text-[#1e3a5f] w-12">Qty</th>
                        <th className="text-right py-2 font-semibold text-gray-400 w-20 hidden sm:table-cell">HD / unit</th>
                        <th className="text-right py-2 font-semibold text-[#ff6b35] w-24">Core / unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* ── Panels section ── */}
                      <tr><td colSpan={4} className="pt-3 pb-1 text-xs font-bold text-[#1e3a5f] uppercase tracking-widest">Panels</td></tr>
                      {results.panelItems.map((item, i) => (
                        <tr key={`p${i}`} className={`border-b border-gray-100 ${item.qty === 0 ? "opacity-35" : ""}`}>
                          <td className="py-2.5 text-gray-700">{item.item}</td>
                          <td className="py-2.5 text-center font-bold text-[#1e3a5f]">{item.qty}</td>
                          <td className="py-2.5 text-right text-gray-400 text-xs hidden sm:table-cell">${item.hdUnit.min}–${item.hdUnit.max}</td>
                          <td className="py-2.5 text-right font-semibold text-[#1e3a5f]">
                            {item.coreUnit !== null ? `$${item.coreUnit.toFixed(2)}` : <span className="text-xs text-gray-400">see quote</span>}
                          </td>
                        </tr>
                      ))}
                      {/* Panel subtotal */}
                      {!results.isCustomSize && (
                        <tr className="bg-gray-50">
                          <td colSpan={2} className="py-2 pl-2 text-xs font-bold text-gray-500">Panel subtotal</td>
                          <td className="py-2 text-right text-xs text-gray-400 hidden sm:table-cell">${results.hdPanelTotal.min}–${results.hdPanelTotal.max}</td>
                          <td className="py-2 text-right text-xs font-bold text-[#ff6b35]">{results.corePanelTotal !== null ? `$${results.corePanelTotal}` : "—"}</td>
                        </tr>
                      )}

                      {/* ── Accessories section ── */}
                      <tr><td colSpan={4} className="pt-4 pb-1 text-xs font-bold text-[#1e3a5f] uppercase tracking-widest">Accessories</td></tr>
                      {results.accessoryItems.map((item, i) => (
                        <tr key={`a${i}`} className={`border-b border-gray-100 ${item.qty === 0 ? "opacity-35" : ""}`}>
                          <td className="py-2.5 text-gray-700">{item.item}</td>
                          <td className="py-2.5 text-center font-bold text-[#1e3a5f]">{item.qty}</td>
                          <td className="py-2.5 text-right text-gray-400 text-xs hidden sm:table-cell">${item.hdUnit.min}–${item.hdUnit.max}</td>
                          <td className="py-2.5 text-right font-semibold text-[#1e3a5f]">
                            {item.coreUnit !== null ? `$${item.coreUnit.toFixed(2)}` : <span className="text-xs text-gray-400">market rate</span>}
                          </td>
                        </tr>
                      ))}
                      {/* Accessory subtotal */}
                      {!results.isCustomSize && (
                        <tr className="bg-gray-50">
                          <td colSpan={2} className="py-2 pl-2 text-xs font-bold text-gray-500">Accessories subtotal</td>
                          <td className="py-2 text-right text-xs text-gray-400 hidden sm:table-cell">${results.hdAccessoryTotal.min}–${results.hdAccessoryTotal.max}</td>
                          <td className="py-2 text-right text-xs font-bold text-[#ff6b35]">{results.coreAccessoryTotal !== null ? `$${results.coreAccessoryTotal}` : "—"}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Budget comparison */}
              <div>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-3">Budget Comparison</h2>

                {(() => {
                  const savings = results.coreTotal && results.hdPanelInfo.available
                    ? Math.max(0, results.hdTotal.max - results.coreTotal.min)
                    : 0;

                  const comparisonRows = [
                    {
                      feature: "Project Total",
                      hd: results.hdPanelInfo.available
                        ? { win: false, label: `${fmt(results.hdTotal.max)} – ${fmt(results.hdTotal.min)}`, sub: "retail, before tax" }
                        : { win: false, label: "Consultation Required", sub: results.hdPanelInfo.note },
                      core: results.coreTotal
                        ? { win: true, label: fmt(results.coreTotal.min), sub: savings > 0 ? `Save up to ${fmt(savings)}` : "best available price" }
                        : { win: true, label: "Contact for quote", sub: "" },
                      highlight: true,
                    },
                    {
                      feature: "Panel Price / unit",
                      hd: results.hdPanelInfo.available
                        ? { win: false, label: `$${results.hdPanelInfo.price}`, sub: "pebbled only" }
                        : { win: false, label: "Not stocked", sub: "consultation required" },
                      core: { win: true, label: `$${results.corePanelUnitPrice}`, sub: "smooth & pebbled" },
                      highlight: false,
                    },
                    {
                      feature: "Surface Options",
                      hd: { win: false, label: "Pebbled only", sub: "smooth not available" },
                      core: { win: true, label: "Smooth & Pebbled", sub: "both in stock" },
                      highlight: false,
                    },
                    {
                      feature: "Delivery",
                      hd: { win: false, label: "Not available", sub: "in-store pickup only" },
                      core: { win: true, label: "Anywhere in Canada", sub: "to site or business" },
                      highlight: false,
                    },
                    {
                      feature: "Bulk / B2B Pricing",
                      hd: { win: false, label: "Retail only", sub: "no volume discounts" },
                      core: { win: true, label: "Volume discounts", sub: "contact for custom quote" },
                      highlight: false,
                    },
                    {
                      feature: "Pricing Transparency",
                      hd: { win: false, label: "Consultation needed", sub: "for most sizes" },
                      core: { win: true, label: "Instant estimate", sub: "no back-and-forth" },
                      highlight: false,
                    },
                  ];

                  return (
                    <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md">
                      {/* Header row */}
                      <div className="grid grid-cols-[1fr_auto_1fr]">
                        <div className="bg-white p-3 flex items-center justify-center border-r border-gray-200">
                          <div className="bg-[#F96302] rounded px-2.5 py-1.5">
                            <span className="text-white font-black text-[11px] tracking-tight leading-none">
                              The Home Depot<sup className="text-[8px]">®</sup>
                            </span>
                          </div>
                        </div>
                        <div className="bg-gray-50 px-4 flex items-center justify-center border-r border-gray-200">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">vs</span>
                        </div>
                        <div className="bg-[#1e3a5f] p-3 flex items-center justify-center relative">
                          <Image
                            src="/corevance-logo-symbol.png"
                            alt="Corevance"
                            width={110}
                            height={28}
                            className="h-6 w-auto object-contain brightness-0 invert"
                          />
                          <span className="absolute top-1.5 right-2 bg-[#ff6b35] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                            Best Value
                          </span>
                        </div>
                      </div>

                      {/* Comparison rows */}
                      {comparisonRows.map((row, i) => (
                        <div key={i} className={`grid grid-cols-[1fr_auto_1fr] border-t border-gray-100 ${row.highlight ? "bg-gray-50" : ""}`}>
                          {/* HD cell */}
                          <div className={`p-3 sm:p-4 border-r border-gray-100 ${row.hd.win ? "bg-green-50" : ""}`}>
                            <div className="flex items-start gap-1.5">
                              <span className="text-red-400 font-bold text-base leading-none mt-0.5 flex-shrink-0">✕</span>
                              <div>
                                <p className={`text-sm font-semibold ${row.highlight ? "text-gray-800" : "text-gray-600"}`}>{row.hd.label}</p>
                                {row.hd.sub && <p className="text-[11px] text-gray-400 mt-0.5">{row.hd.sub}</p>}
                              </div>
                            </div>
                          </div>

                          {/* Feature label */}
                          <div className="px-2 sm:px-3 flex items-center justify-center bg-gray-50 border-r border-gray-100">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide text-center leading-tight" style={{ writingMode: "horizontal-tb", minWidth: 64 }}>
                              {row.feature}
                            </p>
                          </div>

                          {/* Corevance cell */}
                          <div className={`p-3 sm:p-4 ${row.highlight ? "bg-green-50" : "bg-[#f0f7ff]"}`}>
                            <div className="flex items-start gap-1.5">
                              <span className="text-green-500 font-bold text-base leading-none mt-0.5 flex-shrink-0">✓</span>
                              <div>
                                <p className={`text-sm font-bold text-[#1e3a5f] ${row.highlight ? "text-base" : ""}`}>{row.core.label}</p>
                                {row.core.sub && (
                                  <p className={`text-[11px] mt-0.5 ${row.highlight && savings > 0 ? "text-green-600 font-semibold" : "text-gray-500"}`}>
                                    {row.core.sub}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}

                {/* Disclaimers */}
                <div className="mt-3 space-y-1 text-center">
                  <p className="text-xs text-gray-400">* All prices before applicable taxes (HST/GST). Retail rates shown — bulk discounts available from Corevance.</p>
                  <p className="text-xs text-gray-400">† Delivery to project site or business anywhere in Canada — contact us for rates.</p>
                </div>
              </div>

              {/* Finish preview */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-5 shadow-md flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full border-2 border-gray-300 flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: state.color.hex }}
                />
                <div>
                  <p className="font-semibold text-[#1e3a5f]">
                    {state.color.name} · {state.surface === "smooth" ? "Smooth" : "Pebbled"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {PANEL_SIZES[effectivePanelSize].label} panels · {PANEL_SIZES[effectivePanelSize].dims}
                  </p>
                  {!PANEL_SIZES[effectivePanelSize].stock && (
                    <p className="text-xs text-[#ff6b35] mt-0.5">Custom order — contact for availability</p>
                  )}
                </div>
              </div>

              {/* CTAs */}
              {!results.isCustomSize && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/#contact"
                    className="flex-1 bg-[#ff6b35] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#e55a28] hover:-translate-y-0.5 transition-all text-center">
                    Contact Us for Bulk Pricing
                  </a>
                  <a href="/#contact"
                    className="flex-1 border-2 border-[#1e3a5f] text-[#1e3a5f] font-semibold px-6 py-3.5 rounded-full hover:bg-[#1e3a5f] hover:text-white hover:-translate-y-0.5 transition-all text-center">
                    Get Free Consultation
                  </a>
                </div>
              )}

            </div>
          ) : (
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-12 flex flex-col items-center justify-center text-center min-h-80">
              <div className="text-5xl mb-5">📐</div>
              <p className="font-bold text-[#1e3a5f] text-xl mb-2">Your estimate will appear here</p>
              <p className="text-gray-400 text-sm max-w-xs">
                Enter at least one wall&apos;s height and width to see your material list and price comparison.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
