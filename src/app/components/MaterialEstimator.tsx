"use client";
import { useState, useMemo } from "react";

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
  panelSize: PanelSize;
  outsideCorners: number;
  doorWindowArea: string;
  showAdvanced: boolean;
}

interface PriceRange { min: number; max: number; }

interface LineItem { item: string; qty: number; unit: string; hdUnit: PriceRange; coreUnit: number | null; }

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
  lineItems: LineItem[];
  hdTotal: PriceRange;
  coreTotal: PriceRange | null;   // null when custom size
  corePanelUnitPrice: number | null;
  isCustomSize: boolean;
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
const RIVETS_PER_PANEL = 50;
const RIVETS_PER_PACK = 50;    // Corevance sells packs of 50
const PANEL_WIDTH_FT = 4;
const ACCESSORY_LENGTH_FT = 8;
const DEFAULT_INSIDE_CORNERS = 4;

// ⚠️ HD CANADA PRICES (CAD) — PLACEHOLDERS, verify before launch:
//   Panels:      https://www.homedepot.ca/product/exceliner-fibreglass-reinforced-polyester-resin-wall-panel/1000154234
//   Accessories: https://www.homedepot.ca/en/home/categories/building-materials/wall-panelling/frp-panels.html
const HD: Record<string, PriceRange> = {
  panel_8x4:        { min: 52,  max: 58  },
  panel_10x4:       { min: 68,  max: 76  },
  panel_12x4:       { min: 86,  max: 96  },
  panel_10x5:       { min: 84,  max: 94  },
  panel_12x5:       { min: 108, max: 120 },
  divider_bar:      { min: 11,  max: 14  },
  inside_corner:    { min: 10,  max: 13  },
  end_cap:          { min: 8,   max: 11  },
  outside_corner:   { min: 10,  max: 13  },
  nylon_rivets:     { min: 8,   max: 11  },  // per pack
  adhesive_gallon:  { min: 34,  max: 44  },
};

// Corevance exact prices (CAD)
// Panels priced by size × surface — null = custom order, contact for pricing
const CORE_PANEL: Record<string, number | null> = {
  "8x4_pebbled":  85,
  "8x4_smooth":   80,
  "10x4_pebbled": 95,
  "10x4_smooth":  90,
  "12x4_pebbled": null,
  "12x4_smooth":  null,
  "10x5_pebbled": null,
  "10x5_smooth":  null,
  "12x5_pebbled": null,
  "12x5_smooth":  null,
};

// PVC trim · Rivets · Adhesive
const CORE_TRIM = 6.98;               // Divider Bar, Inside Corner, End Cap
const CORE_OUTSIDE_CORNER_STD = 6.98; // 8′ outside corner
const CORE_OUTSIDE_CORNER_LG = 17.00; // 10′ large outside corner (10x4 and larger)
const CORE_RIVETS = 20.00;            // per pack of 50
const CORE_ADHESIVE_EST = 39;         // adhesive — market rate estimate (no Corevance price on file)

const INITIAL_WALLS: WallInput[] = [
  { id: 1, active: true,  height: "", width: "", exposedEdges: 0 },
  { id: 2, active: true,  height: "", width: "", exposedEdges: 0 },
  { id: 3, active: false, height: "", width: "", exposedEdges: 0 },
  { id: 4, active: false, height: "", width: "", exposedEdges: 0 },
];

// ── Calculation ────────────────────────────────────────────────────────────────
function calculate(state: EstimatorState): EstimatorResults {
  const EMPTY: EstimatorResults = {
    isValid: false, totalWallArea: 0, areaAfterDeductions: 0,
    panelsNeeded: 0, dividerBarsNeeded: 0, insideCornersNeeded: 0,
    endCapsNeeded: 0, outsideCornersNeeded: 0, rivetPacksNeeded: 0,
    adhesiveGallons: 0, lineItems: [],
    hdTotal: { min: 0, max: 0 }, coreTotal: null,
    corePanelUnitPrice: null, isCustomSize: false,
  };

  const active = state.walls
    .filter(w => w.active)
    .map(w => ({ h: parseFloat(w.height) || 0, w: parseFloat(w.width) || 0, exposedEdges: w.exposedEdges }))
    .filter(w => w.h > 0 && w.w > 0);

  if (active.length === 0) return EMPTY;

  const panelSqFt = PANEL_SIZES[state.panelSize].sqFt;
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

  const panelHdKey = `panel_${state.panelSize}`;
  const panelHd = HD[panelHdKey] ?? { min: 0, max: 0 };

  const lineItems: LineItem[] = [
    { item: `FRP Panel (${PANEL_SIZES[state.panelSize].label})`,  qty: panelsNeeded,         unit: "panels", hdUnit: panelHd,             coreUnit: CORE_PANEL[`${state.panelSize}_${state.surface}`] ?? null },
    { item: "Divider Bar (8ft)",                                   qty: dividerBarsNeeded,    unit: "pcs",    hdUnit: HD.divider_bar,      coreUnit: CORE_TRIM },
    { item: "Inside Corner (8ft)",                                 qty: insideCornersNeeded,  unit: "pcs",    hdUnit: HD.inside_corner,    coreUnit: CORE_TRIM },
    { item: "End Cap (8ft)",                                       qty: endCapsNeeded,        unit: "pcs",    hdUnit: HD.end_cap,          coreUnit: CORE_TRIM },
    { item: "Outside Corner",                                      qty: outsideCornersNeeded, unit: "pcs",    hdUnit: HD.outside_corner,   coreUnit: ["10x4","12x4","10x5","12x5"].includes(state.panelSize) ? CORE_OUTSIDE_CORNER_LG : CORE_OUTSIDE_CORNER_STD },
    { item: "Nylon Rivets (50-pk)",                                qty: rivetPacksNeeded,     unit: "packs",  hdUnit: HD.nylon_rivets,     coreUnit: CORE_RIVETS },
    { item: "Titebond Adhesive",                                   qty: adhesiveGallons,      unit: "gal",    hdUnit: HD.adhesive_gallon,  coreUnit: null },
  ];

  // HD total
  function sumHd(acc: PriceRange, item: LineItem): PriceRange {
    return { min: acc.min + item.qty * item.hdUnit.min, max: acc.max + item.qty * item.hdUnit.max };
  }
  const hdTotal = lineItems.reduce(sumHd, { min: 0, max: 0 });

  // Corevance total
  const corePanelUnitPrice = CORE_PANEL[`${state.panelSize}_${state.surface}`] ?? null;
  const isCustomSize = corePanelUnitPrice === null;

  let coreTotal: PriceRange | null = null;
  if (!isCustomSize && corePanelUnitPrice !== null) {
    const panelCost   = panelsNeeded         * corePanelUnitPrice;
    const outsideCornerPrice = ["10x4","12x4","10x5","12x5"].includes(state.panelSize) ? CORE_OUTSIDE_CORNER_LG : CORE_OUTSIDE_CORNER_STD;
    const trimCost    = (dividerBarsNeeded + insideCornersNeeded + endCapsNeeded) * CORE_TRIM
                      + outsideCornersNeeded * outsideCornerPrice;
    const rivetCost   = rivetPacksNeeded     * CORE_RIVETS;
    const adhesiveCost = adhesiveGallons     * CORE_ADHESIVE_EST;
    const total = Math.round(panelCost + trimCost + rivetCost + adhesiveCost);
    coreTotal = { min: total, max: total };
  }

  return {
    isValid: true, totalWallArea, areaAfterDeductions, panelsNeeded,
    dividerBarsNeeded, insideCornersNeeded, endCapsNeeded,
    outsideCornersNeeded, rivetPacksNeeded, adhesiveGallons,
    lineItems, hdTotal, coreTotal, corePanelUnitPrice, isCustomSize,
  };
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function MaterialEstimator() {
  const [state, setState] = useState<EstimatorState>({
    walls: INITIAL_WALLS,
    color: COLORS[0],   // White by default
    surface: "smooth",
    panelSize: "8x4",
    outsideCorners: 0,
    doorWindowArea: "",
    showAdvanced: false,
  });

  const results = useMemo(() => calculate(state), [state]);

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

              {/* Panel size */}
              <div>
                <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Panel Size</h2>
                <div className="flex flex-wrap gap-2">
                  {(Object.keys(PANEL_SIZES) as PanelSize[]).map(size => (
                    <button
                      key={size}
                      onClick={() => setState(s => ({ ...s, panelSize: size }))}
                      className={pill(state.panelSize === size)}
                    >
                      {PANEL_SIZES[size].label}
                      {!PANEL_SIZES[size].stock && <span className="ml-1 text-[10px] opacity-60">custom</span>}
                    </button>
                  ))}
                </div>
                {!PANEL_SIZES[state.panelSize].stock && (
                  <p className="text-xs text-gray-400 mt-2">Custom sizes on special order — contact us for lead time.</p>
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
                      <tr className="border-b-2 border-gray-100">
                        <th className="text-left py-2 font-semibold text-[#1e3a5f]">Item</th>
                        <th className="text-center py-2 font-semibold text-[#1e3a5f] w-12">Qty</th>
                        <th className="text-right py-2 font-semibold text-gray-400 w-20 hidden sm:table-cell">HD / unit</th>
                        <th className="text-right py-2 font-semibold text-[#ff6b35] w-24">Core / unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.lineItems.map((item, i) => (
                        <tr key={i} className={`border-b border-gray-100 ${item.qty === 0 ? "opacity-35" : ""}`}>
                          <td className="py-2.5 text-gray-700">{item.item}</td>
                          <td className="py-2.5 text-center font-bold text-[#1e3a5f]">{item.qty}</td>
                          <td className="py-2.5 text-right text-gray-400 text-xs hidden sm:table-cell">
                            ${item.hdUnit.min}–${item.hdUnit.max}
                          </td>
                          <td className="py-2.5 text-right font-semibold text-[#1e3a5f]">
                            {item.coreUnit !== null
                              ? `$${item.coreUnit.toFixed(2)}`
                              : <span className="text-xs text-gray-400">see quote</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-3">Adhesive priced at market rate — included in totals below.</p>
              </div>

              {/* Budget comparison */}
              <div>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-3">Budget Estimate</h2>

                {results.isCustomSize ? (
                  /* Custom size — no HD/Corevance comparison */
                  <div className="bg-[#1e3a5f] rounded-2xl p-6 shadow-md text-center">
                    <p className="text-[#ff6b35] font-semibold text-sm uppercase tracking-wide mb-3">Custom Size Selected</p>
                    <p className="text-white font-bold text-xl mb-2">Contact us for pricing</p>
                    <p className="text-blue-300 text-sm mb-5">Custom panel sizes are quoted individually based on dimensions, quantity, and project scope.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="/#contact"
                        className="bg-[#ff6b35] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e55a28] transition-all text-center text-sm">
                        Get Free Consultation
                      </a>
                      <a href="/#contact"
                        className="border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-all text-center text-sm">
                        Book Your Meeting
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Stock size — side-by-side comparison */
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white rounded-2xl border-2 border-gray-200 p-5 shadow-md">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Home Depot</p>
                        <p className="text-2xl font-bold text-gray-800">{fmt(results.hdTotal.min)}</p>
                        <p className="text-sm text-gray-400 mb-1">to {fmt(results.hdTotal.max)}</p>
                        <p className="text-xs text-gray-400">Estimated market rate (CAD)</p>
                      </div>
                      <div className="bg-[#1e3a5f] rounded-2xl p-5 shadow-md">
                        <p className="text-xs font-semibold text-[#ff6b35] uppercase tracking-wide mb-3">Corevance Inc.</p>
                        {results.coreTotal && (
                          <>
                            <p className="text-2xl font-bold text-white">{fmt(results.coreTotal.min)}</p>
                            <p className="text-sm text-blue-300 mb-1">
                              ${results.corePanelUnitPrice}/panel × {results.panelsNeeded}
                            </p>
                          </>
                        )}
                        <p className="text-xs text-blue-400">Adhesive at market rate · Contact for full quote</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 text-center">
                      HD prices are market estimates. Final Corevance pricing confirmed on your quote.
                    </p>
                  </>
                )}
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
                    {PANEL_SIZES[state.panelSize].label} panels · {PANEL_SIZES[state.panelSize].dims}
                  </p>
                  {!PANEL_SIZES[state.panelSize].stock && (
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
