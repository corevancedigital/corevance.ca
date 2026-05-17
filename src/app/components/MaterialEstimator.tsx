"use client";
import { useState, useMemo, useActionState } from "react";
import Image from "next/image";
import { submitQuote } from "../actions/submit-quote";
import { INITIAL_QUOTE_STATE } from "../actions/submit-quote-types";

// ── Types ──────────────────────────────────────────────────────────────────────
type SurfaceType = "smooth" | "pebbled";
type PanelSize = "8x4" | "10x4" | "12x4" | "10x5" | "12x5";

interface WallInput {
  id: number;
  active: boolean;
  height: string;
  width: string;
}

interface ColorOption { name: string; hex: string; }

interface EstimatorState {
  walls: WallInput[];
  color: ColorOption;
  surface: SurfaceType;
  insideCorners: string;
  outsideCorners: string;
  additionalEndCaps: string;
}

interface PriceRange { min: number; max: number; }

interface LineItem { item: string; qty: number; unit: string; hdUnit: PriceRange; coreUnit: number | null; note?: string; }

interface HdPanelInfo { price: number | null; available: boolean; note: string; }

interface EstimatorResults {
  isValid: boolean;
  totalWallArea: number;
  totalWallWidth: number;
  panelsForWalls: number;
  atticStockPanels: number;
  panelsNeeded: number;
  dividerBarsNeeded: number;
  insideCornersNeeded: number;
  endCapsNeeded: number;
  outsideCornersNeeded: number;
  rivetPacksNeeded: number;
  adhesivePails: number;
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
  installedTotal: PriceRange;
}

// ── Constants ──────────────────────────────────────────────────────────────────
const PANEL_SIZES: Record<PanelSize, { label: string; sqFt: number; dims: string; widthFt: number; heightFt: number; stock: boolean }> = {
  "8x4":  { label: "8′ × 4′",  sqFt: 32, dims: "96″ × 48″",  widthFt: 4, heightFt: 8,  stock: true  },
  "10x4": { label: "10′ × 4′", sqFt: 40, dims: "120″ × 48″", widthFt: 4, heightFt: 10, stock: true  },
  "12x4": { label: "12′ × 4′", sqFt: 48, dims: "144″ × 48″", widthFt: 4, heightFt: 12, stock: false },
  "10x5": { label: "10′ × 5′", sqFt: 50, dims: "120″ × 60″", widthFt: 5, heightFt: 10, stock: false },
  "12x5": { label: "12′ × 5′", sqFt: 60, dims: "144″ × 60″", widthFt: 5, heightFt: 12, stock: false },
};

const COLORS: ColorOption[] = [
  { name: "White",      hex: "#ffffff" },
  { name: "Almond",     hex: "#f5f0e8" },
  { name: "Ivory",      hex: "#fffff0" },
  { name: "Beige",      hex: "#f5f5dc" },
  { name: "Light Gray", hex: "#d3d3d3" },
  { name: "Silver",     hex: "#c0c0c0" },
  { name: "Black",      hex: "#1a1a1a" },
];

// 15% waste factor on top of per-wall ceiling math — covers cuts at fittings,
// minor on-site damage, and offcuts that cannot be cross-utilised across walls.
const WASTE_FACTOR = 1.15;
// Adhesive is sold in 4-gallon pails. Field average is 1 pail per 6 × 8′ × 4′
// panels (192 sq ft of panel face) with full-coverage notched-trowel. For larger
// panel sizes the per-panel count scales down proportionally — see ADHESIVE_PAIL_SQFT.
const ADHESIVE_PAIL_GAL = 4;
const ADHESIVE_PAIL_SQFT = 192; // 6 panels × 32 sq ft (8′ × 4′ baseline)
// Always include one extra panel for repair stock + dye-lot matching.
const ATTIC_STOCK_PANELS = 1;
// Rivets — 8 per panel (perimeter fastening), sold in 50-packs.
const RIVETS_PER_PANEL = 8;
const RIVETS_PER_PACK = 50;
// Trim mouldings ship in 8-ft sticks.
const ACCESSORY_LENGTH_FT = 8;
const MAX_WALLS = 8;
// Installed-cost range (per sq ft of wall) — Corevance install incl. materials.
const INSTALL_RATE_MIN = 8;
const INSTALL_RATE_MAX = 18;
// Panel size cutoff — recommend 10×4 only at heights ≥ 9.5 ft. Anything shorter
// stays on 8×4 (the universal stock panel).
const PANEL_10x4_HEIGHT_THRESHOLD = 9.5;

// HD Canada panel availability — only 8'x4' pebbled confirmed at $95 (before tax)
const HD_PANEL_INFO: Record<string, HdPanelInfo> = {
  "8x4_pebbled":  { price: 95,   available: true,  note: "" },
  "8x4_smooth":   { price: null, available: false, note: "Smooth surface not stocked at Home Depot — consultation required" },
  "10x4_pebbled": { price: null, available: false, note: "10′ × 4′ panels require consultation at Home Depot" },
  "10x4_smooth":  { price: null, available: false, note: "Not available at Home Depot" },
};

const HD_ACC: Record<string, PriceRange> = {
  divider_bar:    { min: 10, max: 10 },
  inside_corner:  { min: 10, max: 10 },
  end_cap:        { min: 10, max: 10 },
  outside_corner: { min: 10, max: 10 },
  nylon_rivets:   { min: 10, max: 10 },
  adhesive:       { min: 40, max: 55 },
};

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

const CORE_TRIM = 8.00;
const CORE_OUTSIDE_CORNER_STD = 8.00;
const CORE_OUTSIDE_CORNER_LG = 17.00;
const CORE_RIVETS = 20.00;
const CORE_ADHESIVE_EST = 45;

const INITIAL_WALLS: WallInput[] = Array.from({ length: MAX_WALLS }, (_, i) => ({
  id: i + 1,
  active: i < 2,
  height: "",
  width: "",
}));

// ── Panel size recommendation ──────────────────────────────────────────────────
// Default: 8×4. Only recommend 10×4 if any wall is 9.5 ft or taller.
function recommendPanelSize(walls: WallInput[]): PanelSize {
  const heights = walls
    .filter(w => w.active)
    .map(w => parseFloat(w.height) || 0)
    .filter(h => h > 0);
  if (heights.length === 0) return "8x4";
  const maxH = Math.max(...heights);
  return maxH >= PANEL_10x4_HEIGHT_THRESHOLD ? "10x4" : "8x4";
}

// ── Per-wall panel calculation ────────────────────────────────────────────────
function panelsForWall(wallW: number, wallH: number, panelSize: PanelSize): { panels: number; bays: number; rows: number } {
  if (wallW <= 0 || wallH <= 0) return { panels: 0, bays: 0, rows: 0 };
  const p = PANEL_SIZES[panelSize];
  const bays = Math.ceil(wallW / p.widthFt);
  const rows = Math.ceil(wallH / p.heightFt);
  return { panels: bays * rows, bays, rows };
}

// ── Calculation ────────────────────────────────────────────────────────────────
function calculate(state: EstimatorState, panelSize: PanelSize): EstimatorResults {
  const EMPTY: EstimatorResults = {
    isValid: false, totalWallArea: 0, totalWallWidth: 0,
    panelsForWalls: 0, atticStockPanels: 0, panelsNeeded: 0,
    dividerBarsNeeded: 0, insideCornersNeeded: 0,
    endCapsNeeded: 0, outsideCornersNeeded: 0, rivetPacksNeeded: 0,
    adhesivePails: 0, adhesiveGallons: 0,
    panelItems: [], accessoryItems: [],
    hdPanelTotal: { min: 0, max: 0 }, hdAccessoryTotal: { min: 0, max: 0 },
    hdTotal: { min: 0, max: 0 }, corePanelTotal: null, coreAccessoryTotal: null,
    coreTotal: null, corePanelUnitPrice: null, isCustomSize: false,
    hdPanelInfo: { price: null, available: false, note: "" },
    installedTotal: { min: 0, max: 0 },
  };

  const active = state.walls
    .filter(w => w.active)
    .map(w => ({ h: parseFloat(w.height) || 0, w: parseFloat(w.width) || 0 }))
    .filter(w => w.h > 0 && w.w > 0);

  if (active.length === 0) return EMPTY;

  const totalWallArea = active.reduce((s, w) => s + w.h * w.w, 0);
  const totalWallWidth = active.reduce((s, w) => s + w.w, 0);
  const maxHeight = active.reduce((m, w) => Math.max(m, w.h), 0);
  const heightFactor = Math.max(1, Math.ceil(maxHeight / ACCESSORY_LENGTH_FT));

  // Per-wall panel count with 15% waste factor.
  const wallBreakdowns = active.map(w => ({ ...w, ...panelsForWall(w.w, w.h, panelSize) }));
  const rawPanelsPerWall = wallBreakdowns.reduce((s, w) => s + w.panels, 0);
  const panelsForWalls = Math.max(1, Math.ceil(rawPanelsPerWall * WASTE_FACTOR));
  const panelsNeeded = panelsForWalls + ATTIC_STOCK_PANELS;

  // Division bars: 1 between every pair of panels in a row, so (bays − 1) × rows per wall.
  // 2 panels in a row = 1 bar, 3 panels = 2 bars, etc.
  const dividerBarsNeeded = wallBreakdowns.reduce(
    (s, w) => s + Math.max(0, w.bays - 1) * w.rows, 0
  );

  // Inside corners: user-entered count × ceil(height / 8ft moulding stick).
  const insideCornerCount = Math.max(0, parseInt(state.insideCorners) || 0);
  const insideCornersNeeded = insideCornerCount * heightFactor;

  // Outside corners: user-entered count × height factor.
  const outsideCornerCount = Math.max(0, parseInt(state.outsideCorners) || 0);
  const outsideCornersNeeded = outsideCornerCount * heightFactor;

  // End caps: cover the top edge of every wall, distributed across panel widths.
  // 1 end-cap stick (8ft) per 8 ft of total wall width, plus user-specified
  // additional sticks for any unusual exposed edges (open ends, bulkhead returns).
  const additionalEndCaps = Math.max(0, parseInt(state.additionalEndCaps) || 0);
  const endCapsNeeded = Math.ceil(totalWallWidth / ACCESSORY_LENGTH_FT) + additionalEndCaps;

  const rivetPacksNeeded = Math.max(1, Math.ceil((panelsNeeded * RIVETS_PER_PANEL) / RIVETS_PER_PACK));

  // Adhesive: 4-gallon pails. 1 pail covers ~192 sq ft of panel face, so the
  // panels-per-pail ratio scales with panel size (6 for 8×4, ~4.8 for 10×4, etc.).
  const panelSqFt = PANEL_SIZES[panelSize].sqFt;
  const panelsPerPailForSize = ADHESIVE_PAIL_SQFT / panelSqFt;
  const adhesivePails = Math.max(1, Math.ceil((panelsForWalls * panelSqFt) / ADHESIVE_PAIL_SQFT));
  const adhesiveGallons = adhesivePails * ADHESIVE_PAIL_GAL;

  const hdPanelInfo: HdPanelInfo = HD_PANEL_INFO[`${panelSize}_${state.surface}`]
    ?? { price: null, available: false, note: "Not available at Home Depot" };
  const corePanelUnitPrice = CORE_PANEL[`${panelSize}_${state.surface}`] ?? null;
  const isCustomSize = corePanelUnitPrice === null;
  const outsideCornerCorePrice = panelSize === "10x4" ? CORE_OUTSIDE_CORNER_LG : CORE_OUTSIDE_CORNER_STD;

  const panelHdUnit: PriceRange = hdPanelInfo.available && hdPanelInfo.price !== null
    ? { min: hdPanelInfo.price, max: hdPanelInfo.price }
    : { min: 0, max: 0 };

  const panelItems: LineItem[] = [
    { item: `FRP Panel (${PANEL_SIZES[panelSize].label})`, qty: panelsForWalls, unit: "panels", hdUnit: panelHdUnit, coreUnit: corePanelUnitPrice, note: `${rawPanelsPerWall} panels (per-wall cut math) × 15% waste` },
    { item: "Attic-stock spare", qty: ATTIC_STOCK_PANELS, unit: "panel", hdUnit: panelHdUnit, coreUnit: corePanelUnitPrice, note: "Repair stock + matching dye lot — best practice" },
  ];

  const accessoryItems: LineItem[] = [
    { item: "FRP Division Bar (8ft)",   qty: dividerBarsNeeded,    unit: "pcs",   hdUnit: HD_ACC.divider_bar,    coreUnit: CORE_TRIM,                  note: "1 between every 2 panels in a row" },
    { item: "FRP Inside Corner (8ft)",  qty: insideCornersNeeded,  unit: "pcs",   hdUnit: HD_ACC.inside_corner,  coreUnit: CORE_TRIM,                  note: insideCornerCount > 0 ? `${insideCornerCount} corner${insideCornerCount === 1 ? "" : "s"} × ${heightFactor} stick${heightFactor === 1 ? "" : "s"} tall` : "Set count below" },
    { item: "FRP End Cap (8ft)",        qty: endCapsNeeded,        unit: "pcs",   hdUnit: HD_ACC.end_cap,        coreUnit: CORE_TRIM,                  note: `${Math.ceil(totalWallWidth / ACCESSORY_LENGTH_FT)} for top of walls${additionalEndCaps > 0 ? ` + ${additionalEndCaps} additional` : ""}` },
    { item: "FRP Outside Corner",       qty: outsideCornersNeeded, unit: "pcs",   hdUnit: HD_ACC.outside_corner, coreUnit: outsideCornerCorePrice,     note: outsideCornerCount > 0 ? `${outsideCornerCount} corner${outsideCornerCount === 1 ? "" : "s"} × ${heightFactor} stick${heightFactor === 1 ? "" : "s"} tall` : "Set count below" },
    { item: "Nylon Rivets (50-pk)",     qty: rivetPacksNeeded,     unit: "packs", hdUnit: HD_ACC.nylon_rivets,   coreUnit: CORE_RIVETS },
    { item: "FRP Adhesive (4-gal pail)", qty: adhesivePails,       unit: "pails", hdUnit: { min: HD_ACC.adhesive.min * ADHESIVE_PAIL_GAL, max: HD_ACC.adhesive.max * ADHESIVE_PAIL_GAL }, coreUnit: CORE_ADHESIVE_EST * ADHESIVE_PAIL_GAL, note: `1 pail (4 gal) covers ${panelsPerPailForSize % 1 === 0 ? panelsPerPailForSize : panelsPerPailForSize.toFixed(1)} × ${PANEL_SIZES[panelSize].label} panels (≈ ${ADHESIVE_PAIL_SQFT} sq ft) — total ${adhesiveGallons} gal` },
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
      + adhesivePails * CORE_ADHESIVE_EST * ADHESIVE_PAIL_GAL
    );
    const total = corePanelTotal + coreAccessoryTotal;
    coreTotal = { min: total, max: total };
  }

  const installedTotal: PriceRange = {
    min: Math.round(totalWallArea * INSTALL_RATE_MIN),
    max: Math.round(totalWallArea * INSTALL_RATE_MAX),
  };

  return {
    isValid: true, totalWallArea, totalWallWidth,
    panelsForWalls, atticStockPanels: ATTIC_STOCK_PANELS, panelsNeeded,
    dividerBarsNeeded, insideCornersNeeded, endCapsNeeded,
    outsideCornersNeeded, rivetPacksNeeded,
    adhesivePails, adhesiveGallons,
    panelItems, accessoryItems, hdPanelTotal, hdAccessoryTotal,
    hdTotal, corePanelTotal, coreAccessoryTotal, coreTotal,
    corePanelUnitPrice, isCustomSize, hdPanelInfo, installedTotal,
  };
}

// ── Helper: build a plain-text estimate summary for the lead capture ──────────
function buildEstimateSummary(
  state: EstimatorState,
  panelSize: PanelSize,
  results: EstimatorResults
): string {
  if (!results.isValid) return "";
  const lines = [
    "FRP Material Estimate (from corevance.ca/estimate)",
    "",
    `Panel size: ${PANEL_SIZES[panelSize].label} (${PANEL_SIZES[panelSize].dims})`,
    `Surface: ${state.surface === "smooth" ? "Smooth" : "Pebbled"}`,
    `Colour: ${state.color.name}`,
    "",
    "Walls:",
    ...state.walls
      .filter(w => w.active && parseFloat(w.height) > 0 && parseFloat(w.width) > 0)
      .map(w => `  Wall ${w.id}: ${w.height}ft H × ${w.width}ft W`),
    "",
    `Total wall area: ${Math.round(results.totalWallArea)} sq ft`,
    `Total wall width: ${Math.round(results.totalWallWidth)} ft`,
    "",
    `Inside corners: ${parseInt(state.insideCorners) || 0}`,
    `Outside corners: ${parseInt(state.outsideCorners) || 0}`,
    `Additional end caps requested: ${parseInt(state.additionalEndCaps) || 0}`,
    "",
    "Materials needed:",
    `  Panels (incl. attic stock + 15% waste): ${results.panelsNeeded}`,
    `  Division bars (8ft): ${results.dividerBarsNeeded}`,
    `  Inside corners (8ft): ${results.insideCornersNeeded}`,
    `  End caps (8ft): ${results.endCapsNeeded}`,
    `  Outside corners: ${results.outsideCornersNeeded}`,
    `  Nylon rivet packs (50-pk): ${results.rivetPacksNeeded}`,
    `  Adhesive: ${results.adhesivePails} × 4-gal pail (${results.adhesiveGallons} gal total — 1 pail per 192 sq ft of panel)`,
    "",
    results.coreTotal
      ? `Corevance materials price: $${results.coreTotal.min} CAD (before tax)`
      : "Corevance materials price: contact for custom-size quote",
    `Installed price range (materials + install): $${results.installedTotal.min}–$${results.installedTotal.max} CAD`,
    "",
    "Please send a written quote and confirm availability.",
  ];
  return lines.filter(Boolean).join("\n");
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function MaterialEstimator() {
  const [state, setState] = useState<EstimatorState>({
    walls: INITIAL_WALLS,
    color: COLORS[0],
    surface: "smooth",
    insideCorners: "",
    outsideCorners: "",
    additionalEndCaps: "",
  });

  const [leadState, leadAction, leadPending] = useActionState(submitQuote, INITIAL_QUOTE_STATE);

  const { effectivePanelSize, maxActiveHeight, results, estimateSummary } = useMemo(() => {
    const effectivePanelSize: PanelSize = recommendPanelSize(state.walls);
    const results = calculate(state, effectivePanelSize);
    const hs = state.walls.filter(w => w.active).map(w => parseFloat(w.height) || 0).filter(h => h > 0);
    const maxActiveHeight = hs.length ? Math.max(...hs) : 0;
    const estimateSummary = buildEstimateSummary(state, effectivePanelSize, results);
    return { effectivePanelSize, maxActiveHeight, results, estimateSummary };
  }, [state]);

  function updateWall(id: number, field: keyof WallInput, value: string | boolean) {
    setState(s => ({ ...s, walls: s.walls.map(w => w.id === id ? { ...w, [field]: value } : w) }));
  }

  function activateNextWall() {
    setState(s => {
      const idx = s.walls.findIndex(w => !w.active);
      if (idx === -1) return s;
      return { ...s, walls: s.walls.map((w, i) => i === idx ? { ...w, active: true } : w) };
    });
  }

  function fmt(n: number) {
    return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
  }

  const pill = (active: boolean) =>
    `px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer ${
      active ? "bg-[#1e3a5f] text-white border-[#1e3a5f]" : "bg-white text-[#1e3a5f] border-gray-200 hover:border-[#1e3a5f]"
    }`;

  const activeWallCount = state.walls.filter(w => w.active).length;
  const canAddWall = activeWallCount < MAX_WALLS;

  return (
    <div className="py-12 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Page heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-3">
            Material &amp; Budget Estimator
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Enter wall dimensions and trim counts for an instant material list.
            Per-wall cut math, 15% waste, 1 attic-stock panel, and 1 four-gallon adhesive pail per 192 sq ft of panel face (= 6 panels at 8′ × 4′, ~4.8 at 10′ × 4′) — the way commercial installers actually order.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── Inputs ─────────────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-md border-2 border-gray-200 p-6 sm:p-8">

            <h2 className="text-lg font-bold text-[#1e3a5f] mb-5">Wall Dimensions</h2>
            <div className="space-y-3 mb-3">
              {state.walls.filter(w => w.active).map(wall => (
                <div key={wall.id} className="flex items-center gap-2">
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
                      value={wall.height} min="0" step="0.5"
                      onChange={e => updateWall(wall.id, "height", e.target.value)}
                      className="w-full px-2 py-2 border-2 border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                    <span className="text-gray-400 text-sm text-center px-0.5">×</span>
                    <input
                      type="number" placeholder="Width (ft)"
                      value={wall.width} min="0" step="0.5"
                      onChange={e => updateWall(wall.id, "width", e.target.value)}
                      className="w-full px-2 py-2 border-2 border-gray-200 rounded-lg text-sm text-black focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>

            {canAddWall && (
              <button
                onClick={activateNextWall}
                className="text-sm text-[#ff6b35] font-semibold hover:underline mb-6 flex items-center gap-1"
              >
                <span aria-hidden>+</span>
                <span>Add another wall ({activeWallCount}/{MAX_WALLS})</span>
              </button>
            )}
            {!canAddWall && (
              <p className="text-xs text-gray-400 mb-6">All {MAX_WALLS} walls in use — call us for larger projects.</p>
            )}

            <div className="border-t border-gray-100 pt-6 space-y-6">

              {/* Trim configuration — all manual */}
              <div>
                <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Trim &amp; Corners</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Inside corners</label>
                    <input
                      type="number" placeholder="0" min="0" max="40"
                      value={state.insideCorners}
                      onChange={e => setState(s => ({ ...s, insideCorners: e.target.value }))}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                    <p className="text-[11px] text-gray-400 mt-1">Where 2 walls meet at 90° inside.</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Outside corners</label>
                    <input
                      type="number" placeholder="0" min="0" max="40"
                      value={state.outsideCorners}
                      onChange={e => setState(s => ({ ...s, outsideCorners: e.target.value }))}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                    <p className="text-[11px] text-gray-400 mt-1">Wraps around column / bulkhead.</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1e3a5f] mb-1">Additional end caps</label>
                    <input
                      type="number" placeholder="0" min="0" max="40"
                      value={state.additionalEndCaps}
                      onChange={e => setState(s => ({ ...s, additionalEndCaps: e.target.value }))}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                    <p className="text-[11px] text-gray-400 mt-1">Top edge auto-counted. Add extras here.</p>
                  </div>
                </div>
              </div>

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
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#1e3a5f] text-white font-semibold px-4 py-2 rounded-full text-sm">
                      {PANEL_SIZES[effectivePanelSize].label}
                    </span>
                    <span className="text-xs text-[#ff6b35] font-medium">
                      {effectivePanelSize === "10x4"
                        ? `✓ Recommended for your ${maxActiveHeight}ft walls`
                        : `✓ Default — your walls are under ${PANEL_10x4_HEIGHT_THRESHOLD}ft`}
                    </span>
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">Enter wall height and width to determine panel size</p>
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
                  {" · "}
                  Total wall width: <strong className="text-gray-600">{Math.round(results.totalWallWidth)} ft</strong>
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
                          <td className="py-2.5 text-gray-700">
                            <div>{item.item}</div>
                            {item.note && <div className="text-[11px] text-gray-400 mt-0.5">{item.note}</div>}
                          </td>
                          <td className="py-2.5 text-center font-bold text-[#1e3a5f]">{item.qty}</td>
                          <td className="py-2.5 text-right text-gray-400 text-xs hidden sm:table-cell">${item.hdUnit.min}–${item.hdUnit.max}</td>
                          <td className="py-2.5 text-right font-semibold text-[#1e3a5f]">
                            {item.coreUnit !== null ? `$${item.coreUnit.toFixed(2)}` : <span className="text-xs text-gray-400">see quote</span>}
                          </td>
                        </tr>
                      ))}
                      {!results.isCustomSize && (
                        <tr className="bg-gray-50">
                          <td colSpan={2} className="py-2 pl-2 text-xs font-bold text-gray-500">
                            Panel subtotal ({results.panelsNeeded} panels)
                          </td>
                          <td className="py-2 text-right text-xs text-gray-400 hidden sm:table-cell">${results.hdPanelTotal.min}–${results.hdPanelTotal.max}</td>
                          <td className="py-2 text-right text-xs font-bold text-[#ff6b35]">{results.corePanelTotal !== null ? `$${results.corePanelTotal}` : "—"}</td>
                        </tr>
                      )}

                      {/* ── Accessories section ── */}
                      <tr><td colSpan={4} className="pt-4 pb-1 text-xs font-bold text-[#1e3a5f] uppercase tracking-widest">Accessories</td></tr>
                      {results.accessoryItems.map((item, i) => (
                        <tr key={`a${i}`} className={`border-b border-gray-100 ${item.qty === 0 ? "opacity-35" : ""}`}>
                          <td className="py-2.5 text-gray-700">
                            <div>{item.item}</div>
                            {item.note && <div className="text-[11px] text-gray-400 mt-0.5">{item.note}</div>}
                          </td>
                          <td className="py-2.5 text-center font-bold text-[#1e3a5f]">{item.qty}</td>
                          <td className="py-2.5 text-right text-gray-400 text-xs hidden sm:table-cell">${item.hdUnit.min}–${item.hdUnit.max}</td>
                          <td className="py-2.5 text-right font-semibold text-[#1e3a5f]">
                            {item.coreUnit !== null ? `$${item.coreUnit.toFixed(2)}` : <span className="text-xs text-gray-400">market rate</span>}
                          </td>
                        </tr>
                      ))}
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

              {/* Installed cost — primary CTA surface */}
              <div className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] rounded-2xl p-6 shadow-md text-white">
                <div className="flex items-start gap-3 mb-3">
                  <span className="bg-[#ff6b35] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Recommended</span>
                  <h2 className="text-lg font-bold">Installed price — Corevance does the install</h2>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Materials + certified install by Corevance crew. CFIA-compliant joint detail,
                  nylon rivets, PVC mouldings, food-safe sealant. 1–3 day turnaround across the GTA.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <p className="text-3xl font-bold">
                      {fmt(results.installedTotal.min)} – {fmt(results.installedTotal.max)}
                    </p>
                    <p className="text-white/60 text-xs mt-1">
                      Based on {Math.round(results.totalWallArea)} sq ft · ${INSTALL_RATE_MIN}–${INSTALL_RATE_MAX}/sq ft installed · before tax
                    </p>
                  </div>
                  <a
                    href="#estimate-lead"
                    className="bg-[#ff6b35] text-white font-bold px-6 py-3 rounded-full hover:bg-[#e55a28] transition-all whitespace-nowrap text-center no-underline"
                  >
                    Get exact installed quote →
                  </a>
                </div>
              </div>

              {/* Budget comparison */}
              <div>
                <h2 className="text-lg font-bold text-[#1e3a5f] mb-3">Materials-Only Comparison</h2>

                {(() => {
                  const savings = results.coreTotal && results.hdPanelInfo.available
                    ? Math.max(0, results.hdTotal.max - results.coreTotal.min)
                    : 0;

                  const comparisonRows = [
                    {
                      feature: "Materials Total",
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
                      feature: "Pricing",
                      hd: { win: false, label: "Consultation needed", sub: "for most sizes" },
                      core: { win: true, label: "Instant estimate", sub: "no back-and-forth" },
                      highlight: false,
                    },
                  ];

                  return (
                    <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md">
                      <div className="grid grid-cols-[1fr_80px_1fr]">
                        <div className="bg-white p-3 flex items-center justify-center border-r border-gray-200 relative">
                          <Image
                            src="/corevance-logo-symbol.png"
                            alt="Corevance — FRP Wall Panel Supplier Toronto"
                            width={110}
                            height={28}
                            className="h-6 w-auto object-contain"
                          />
                          <span className="absolute top-1.5 left-2 bg-[#ff6b35] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                            Best Value
                          </span>
                        </div>
                        <div className="bg-gray-50 px-4 flex items-center justify-center border-r border-gray-200">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">vs</span>
                        </div>
                        <div className="bg-white p-3 flex items-center justify-center">
                          <div className="bg-[#F96302] rounded px-2.5 py-1.5">
                            <span className="text-white font-black text-[11px] tracking-tight leading-none">
                              The Home Depot<sup className="text-[8px]">®</sup>
                            </span>
                          </div>
                        </div>
                      </div>

                      {comparisonRows.map((row, i) => (
                        <div key={i} className={`grid grid-cols-[1fr_80px_1fr] border-t border-gray-100 ${row.highlight ? "bg-gray-50" : ""}`}>
                          <div className={`p-3 sm:p-4 border-r border-gray-100 ${row.highlight ? "bg-green-50" : "bg-[#f0f7ff]"}`}>
                            <div className="flex items-start gap-1.5">
                              <span className="text-green-500 font-bold text-base leading-none mt-0.5 flex-shrink-0">✓</span>
                              <div>
                                <p className={`text-sm font-bold text-[#1e3a5f]`}>{row.core.label}</p>
                                {row.core.sub && (
                                  <p className={`text-[11px] mt-0.5 ${row.highlight && savings > 0 ? "text-green-600 font-semibold" : "text-gray-500"}`}>
                                    {row.core.sub}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="px-2 sm:px-3 flex items-center justify-center bg-gray-50 border-r border-gray-100">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide text-center leading-tight w-full">
                              {row.feature}
                            </p>
                          </div>

                          <div className="p-3 sm:p-4 bg-white">
                            <div className="flex items-start gap-1.5">
                              <span className="text-red-400 font-bold text-base leading-none mt-0.5 flex-shrink-0">✕</span>
                              <div>
                                <p className={`text-sm font-semibold text-gray-600`}>{row.hd.label}</p>
                                {row.hd.sub && <p className="text-[11px] text-gray-400 mt-0.5">{row.hd.sub}</p>}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}

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

              {/* Lead capture — Email this estimate */}
              <div id="estimate-lead" className="bg-white rounded-2xl border-2 border-[#ff6b35] p-6 shadow-md scroll-mt-24">
                {leadState.ok ? (
                  <div className="text-center py-3">
                    <div className="text-3xl mb-2">✓</div>
                    <p className="font-bold text-[#1e3a5f] text-lg mb-1">Estimate sent.</p>
                    <p className="text-sm text-gray-500">
                      We&apos;ll reply within 24 hours with a written quote and confirm availability.
                      Need it sooner? Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-lg font-bold text-[#1e3a5f] mb-1">Email me this estimate + a written quote</h2>
                    <p className="text-xs text-gray-500 mb-4">
                      We&apos;ll send a copy of this material list and follow up with bulk pricing,
                      installed cost, and lead time within 24 hours. No spam.
                    </p>
                    <form action={leadAction} className="space-y-3">
                      <input type="hidden" name="project" value={estimateSummary} />
                      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text" name="name" placeholder="Your name" required
                          defaultValue={leadState.values?.name ?? ""}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                        />
                        <input
                          type="tel" name="phone" placeholder="Phone" required
                          defaultValue={leadState.values?.phone ?? ""}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                        />
                      </div>
                      <input
                        type="email" name="email" placeholder="Email" required
                        defaultValue={leadState.values?.email ?? ""}
                        className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                      />
                      {leadState.ok === false && leadState.error && (
                        <p className="text-xs text-red-600">{leadState.error}</p>
                      )}
                      <button
                        type="submit"
                        disabled={leadPending}
                        className="w-full bg-[#ff6b35] text-white font-bold px-6 py-3 rounded-full hover:bg-[#e55a28] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {leadPending ? "Sending…" : "Email me this estimate"}
                      </button>
                    </form>
                  </>
                )}
              </div>

              {!results.isCustomSize && (
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/#contact"
                    className="flex-1 bg-[#ff6b35] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#e55a28] hover:-translate-y-0.5 transition-all text-center">
                    Contact Us for Bulk Pricing
                  </a>
                  <a href="tel:4378493781"
                    className="flex-1 border-2 border-[#1e3a5f] text-[#1e3a5f] font-semibold px-6 py-3.5 rounded-full hover:bg-[#1e3a5f] hover:text-white hover:-translate-y-0.5 transition-all text-center">
                    Call 437-849-3781
                  </a>
                </div>
              )}

            </div>
          ) : (
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-12 flex flex-col items-center justify-center text-center min-h-80">
              <div className="text-5xl mb-5">📐</div>
              <p className="font-bold text-[#1e3a5f] text-xl mb-2">Your estimate will appear here</p>
              <p className="text-gray-400 text-sm max-w-xs">
                Enter at least one wall&apos;s height and width to see your material list and installed cost.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
