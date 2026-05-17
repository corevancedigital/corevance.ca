import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* ─── Blog post data ─────────────────────────────────────────────────── */

function PostContent({ slug }: { slug: string }) {
  switch (slug) {
    case "frp-vs-tile-commercial-kitchen":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              FRP panels outperform ceramic tile in commercial kitchens because they have no grout lines (zero bacterial harborage), are easier to clean, install faster, cost less over 10 years, and are CFIA-accepted for food facilities. The main trade-off: FRP is less heat-resistant directly behind cooking equipment, though this is managed with stainless steel splash guards.
            </p>
          </aside>
          <h2>Why Commercial Kitchens Need CFIA-Compliant Wall Systems</h2>
          <p>Commercial kitchen wall systems in Ontario are regulated by Toronto Public Health, Peel Public Health, the CFIA (Canadian Food Inspection Agency), and provincial building codes. The primary concern is bacterial harborage — any gap, crack, or porous surface where foodborne pathogens can survive cleaning cycles is a health code violation risk.</p>
          <p>Ceramic tile was the historical standard, but its grout lines are a persistent problem. Even properly maintained tile grout harbours bacteria, discolours, cracks, and ultimately fails — requiring expensive replacement. FRP panels, installed correctly, eliminate this problem entirely.</p>
          <h2>FRP vs. Tile: The Comparison</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Criteria</th><th className="py-3 px-4 text-left">FRP Panels</th><th className="py-3 px-4 text-left">Ceramic Tile</th></tr></thead>
              <tbody>
                {[["Grout lines", "None — fully seamless", "Present — bacterial risk"], ["CFIA acceptance", "✓ Accepted (Class C system)", "Conditional — grout must be maintained"], ["Installation time", "1–3 days", "3–7 days (including cure time)"], ["Installation cost", "$8–$18/sq ft installed", "$15–$35/sq ft installed"], ["10-year maintenance", "Low — wipe clean", "High — grout re-sealing, repairs"], ["Impact resistance", "Good — flex absorbs minor impacts", "Poor — chips and cracks"], ["Moisture resistance", "Excellent — non-porous", "Grout absorbs moisture"], ["Heat resistance", "Moderate — not for direct heat", "Better for high-heat zones"]].map(([k, v1, v2], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{k}</td>
                    <td className="py-3 px-4 text-gray-700">{v1}</td>
                    <td className="py-3 px-4 text-gray-700">{v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>When to Choose FRP Over Tile</h2>
          <ul>
            <li><strong>Food processing facilities:</strong> FRP is the clear choice. CFIA requires seamless, non-porous wall surfaces. FRP panels installed with PVC moldings and food-safe adhesive meet this standard.</li>
            <li><strong>Commercial restaurant kitchens:</strong> FRP wins on cost, speed, and maintenance. Behind cooking equipment, use stainless steel for the direct splash zone and FRP for surrounding walls.</li>
            <li><strong>Institutional kitchens (healthcare, schools):</strong> FRP is preferred for its hygienic properties and impact resistance.</li>
          </ul>
          <h2>When Tile May Still Make Sense</h2>
          <ul>
            <li>Front-of-house decorative walls where aesthetics drive the decision</li>
            <li>Directly behind open-flame cooking equipment (use stainless steel instead)</li>
          </ul>
          <h2>The Bottom Line</h2>
          <p>For the vast majority of commercial kitchen, food processing, and food service applications in Ontario, FRP panels are the better choice: faster to install, cheaper over time, easier to keep clean, and CFIA-accepted. The total cost of ownership over 10 years is consistently lower than tile when you factor in grout maintenance and replacement costs.</p>
        </>
      );
    case "what-is-frp-wall-panel":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              <strong>FRP wall panels (Fiberglass Reinforced Panels)</strong> are rigid, moisture-resistant commercial wall panels made from a polyester resin matrix reinforced with fiberglass strands. They are used in commercial kitchens, food processing facilities, healthcare spaces, car washes, and industrial environments where hygiene and durability are critical. Class C FRP panels meet CFIA standards for food facility wall systems in Canada.
            </p>
          </aside>
          <h2>What Is an FRP Panel?</h2>
          <p>FRP stands for Fiberglass Reinforced Panel (also called Fiberglass Reinforced Plastic or Fiberglass Reinforced Polymer). An FRP panel is a rigid, lightweight, non-porous sheet material made from a thermoset polymer resin — typically polyester or vinyl ester — reinforced with glass fiber strands embedded throughout the matrix.</p>
          <p>The result is a panel that is:</p>
          <ul>
            <li>Non-porous — liquids, oils, and cleaning chemicals do not penetrate</li>
            <li>Seamless — no grout lines, no bacterial harborage</li>
            <li>Impact-resistant — the flexible fiber matrix absorbs minor impacts without cracking</li>
            <li>Moisture-resistant — ideal for wet or humid commercial environments</li>
            <li>Cleanable — smooth or pebbled surface wipes clean with standard commercial cleaners</li>
            <li>Fire-rated — Class C panels carry ASTM E84 flame spread ratings accepted for commercial use</li>
          </ul>
          <h2>FRP Panel Standards in Canada</h2>
          <p>In Canada, FRP panels used in food facilities must comply with CFIA (Canadian Food Inspection Agency) Safe Food for Canadians Act (SFCA) requirements. The relevant standard is: panels must create a non-porous, smooth, and cleanable wall surface with no open joints or gaps that can trap food particles or moisture.</p>
          <p>A compliant FRP installation uses:</p>
          <ol>
            <li>Class C FRP panels (ASTM E84 fire rating)</li>
            <li>PVC divider bars and corner moldings at all joints</li>
            <li>Nylon rivets at specified fastening intervals</li>
            <li>Food-safe construction adhesive (e.g., Titebond or equivalent)</li>
          </ol>
          <h2>FRP Panel Sizes Available in Canada</h2>
          <p>Standard FRP panels in Canada are typically available in:</p>
          <ul>
            <li>8′ × 4′ (96″ × 48″) — most common size for standard ceiling height installations</li>
            <li>10′ × 4′ (120″ × 48″) — for taller commercial spaces</li>
            <li>Custom sizes up to 12′ × 5′ — special order, 7–14 business day lead time</li>
          </ul>
          <h2>Where Are FRP Panels Used?</h2>
          <ul>
            <li><strong>Commercial kitchens and restaurants</strong> — the most common application</li>
            <li><strong>Food processing and manufacturing facilities</strong> — CFIA compliance critical</li>
            <li><strong>Healthcare facilities and hospitals</strong> — hygienic wall systems for clinical areas</li>
            <li><strong>Car washes</strong> — moisture-resistant walls that handle constant water exposure</li>
            <li><strong>Industrial and warehouse spaces</strong> — impact resistance for high-traffic areas</li>
          </ul>
        </>
      );
    case "frp-panel-cost-toronto":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              FRP wall panel installation in Toronto costs <strong>$8–$18 per square foot installed</strong>, depending on scope, wall condition, and accessibility. Material-only supply (for self-install) is also available. Corevance provides free on-site assessments and written quotes within 24 hours.
            </p>
          </aside>
          <h2>FRP Panel Installation Cost Breakdown</h2>
          <p>FRP panel installation pricing in Toronto (2025) depends on several factors: the size of the project, the condition of existing walls, the finish and size of panels chosen, and whether accessories (corner moldings, divider bars, adhesive) are included.</p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Installation Type</th><th className="py-3 px-4 text-left">Cost Range (per sq ft)</th><th className="py-3 px-4 text-left">Notes</th></tr></thead>
              <tbody>
                {[["Standard installation", "$8–$12/sq ft", "Good wall condition, standard height"], ["Complex installation", "$12–$18/sq ft", "Poor substrate, high ceilings, complex corners"], ["Material supply only", "Call for pricing", "Panels + accessories, no labour"], ["Custom panel order", "Call for pricing", "Non-standard sizes, lead time 7–14 days"]].map(([type, cost, note], i) => (
                  <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{type}</td>
                    <td className="py-3 px-4 font-bold text-[#ff6b35]">{cost}</td>
                    <td className="py-3 px-4 text-gray-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>What Affects FRP Installation Cost?</h2>
          <ul>
            <li><strong>Wall condition:</strong> Existing walls with uneven surfaces, old tile removal, or moisture damage add to substrate preparation costs.</li>
            <li><strong>Panel size:</strong> 8×4 panels are easiest to handle; 10×4 panels require additional coordination.</li>
            <li><strong>Number of corners and cutouts:</strong> Each inside corner, outside corner, and cutout (for electrical boxes, pipes) adds labour time.</li>
            <li><strong>Ceiling height:</strong> Walls above 9 feet require extended staging, increasing labour costs.</li>
            <li><strong>Finish:</strong> Pebbled and smooth panels are the same price; custom colours may carry a small premium.</li>
          </ul>
          <h2>FRP vs. Tile: 10-Year Cost Comparison</h2>
          <p>For a typical 500 sq ft commercial kitchen wall area in Toronto:</p>
          <ul>
            <li><strong>FRP installed:</strong> $5,000–$7,500 (year 0) + minimal maintenance ($500/10 years)</li>
            <li><strong>Ceramic tile installed:</strong> $10,000–$17,500 (year 0) + grout maintenance/repair ($2,000–$4,000/10 years)</li>
          </ul>
          <p>FRP is consistently $10,000–$15,000 cheaper over a 10-year horizon for a mid-sized commercial kitchen.</p>
        </>
      );
    case "frp-vs-trusscore-pvc-canadian-installer":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Both FRP and Trusscore PVC are CFIA-accepted. PVC wins on ease-of-install, scratch resistance, and Class A fire rating out of the box. FRP wins on cost, impact resistance, real-world durability in high-traffic commercial kitchens, and repairability of localized damage. Most GTA commercial kitchens and food processors do better with <strong>Class C FRP at $8–$18/sq ft installed</strong>.
            </p>
          </aside>
          <h2>The Trusscore Marketing Problem</h2>
          <p>If you have spent ten minutes researching commercial wall panels in 2025, you have seen the Trusscore comparison pages. They argue PVC is lighter, faster, and cleaner than FRP. Most of that is technically true. What those pages leave out is that for a busy GTA commercial kitchen or a Mississauga food processor, the panel that looks best on a brochure is not always the panel that survives ten years of dish carts, mop buckets, and inspectors.</p>
          <p>We install both. This article is what we tell facility managers when they ask us, honestly, which one they should put on the wall.</p>
          <h2>What Each Panel Actually Is</h2>
          <p>FRP is a fiberglass-reinforced polyester sheet, typically 0.090 inches thick, with a smooth or pebbled gel-coat face. It flexes slightly, takes adhesive well, and is fastened with nylon rivets through PVC divider bars at joints.</p>
          <p>Trusscore (and similar PVC wall panel systems) is a hollow-core extruded PVC plank, usually 0.5 inch thick, that interlocks tongue-and-groove and screws directly to studs or strapping. The hollow core is what makes it light. It is solid PVC on the outside, but air on the inside.</p>
          <h2>Side-by-Side Comparison</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Criteria</th><th className="py-3 px-4 text-left">FRP (Class C)</th><th className="py-3 px-4 text-left">Trusscore PVC</th></tr></thead>
              <tbody>
                {[
                  ["Fire rating (out of box)", "Class C (flame spread ≤ 150)", "Class A (flame spread ≤ 25)"],
                  ["CFIA acceptance", "✓ Accepted with PVC moldings", "✓ Accepted (interlocking joints)"],
                  ["Installed cost (GTA)", "$8–$18/sq ft", "$14–$24/sq ft"],
                  ["Material weight", "~0.7 lb/sq ft", "~0.55 lb/sq ft"],
                  ["Impact resistance", "Excellent — fibre matrix absorbs hits", "Moderate — hollow core can crush"],
                  ["Scratch resistance", "Moderate — gel-coat can mark", "Better — PVC surface harder"],
                  ["Repair of localized damage", "Cut out one panel between dividers", "Replace full plank, may need to unzip run"],
                  ["Heat tolerance near equipment", "Up to ~150°F continuous", "Up to ~140°F — softens sooner"],
                  ["Install speed (per crew/day)", "300–500 sq ft", "500–800 sq ft"],
                  ["Substrate requirement", "Smooth flat wall (drywall, OSB, ply)", "Studs or strapping — no full substrate needed"],
                  ["Look", "Flat, panelled, professional", "Vertical plank lines visible"],
                ].map(([k, v1, v2], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{k}</td>
                    <td className="py-3 px-4 text-gray-700">{v1}</td>
                    <td className="py-3 px-4 text-gray-700">{v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Where PVC Honestly Wins</h2>
          <ul>
            <li><strong>New-build with exposed studs.</strong> If you are framing fresh and the studs are already bare, Trusscore mounts directly to the framing. No drywall, no prep. This is a real labour saving on a greenfield project.</li>
            <li><strong>Class A fire rating without modification.</strong> If your occupancy classification under the Ontario Building Code requires Class A (exits, certain assembly spaces), PVC gets you there without specifying a special FRP backer or upgraded substrate.</li>
            <li><strong>Walk-in coolers and freezers.</strong> The interlocking joint with no exposed adhesive bead handles thermal cycling slightly better than FRP run with butt joints.</li>
            <li><strong>Surface hardness against carts and shelving.</strong> If your operation runs a lot of stainless wire shelving against the wall, PVC marks less.</li>
          </ul>
          <h2>Where FRP Wins (Most GTA Commercial Jobs)</h2>
          <ul>
            <li><strong>Cost.</strong> The price gap is real. On a 1,200 sq ft kitchen retrofit, FRP runs roughly $9,600–$21,600 installed, while PVC runs $16,800–$28,800. For most independent restaurant operators and food processors, that gap pays for a year of payroll for a line cook.</li>
            <li><strong>Impact from dish carts, hand trucks, and dropped equipment.</strong> A loaded dish cart hitting a hollow-core PVC plank can crush the core and leave a dent that does not pop back. The same impact on FRP bonded to drywall flexes and recovers.</li>
            <li><strong>Repairing one damaged section.</strong> FRP between two PVC divider bars is one panel. Cut the adhesive, pop it out, slide a new one in, re-rivet. A damaged PVC plank in the middle of a 30-foot run can require unzipping multiple planks to swap out.</li>
            <li><strong>Retrofitting over existing drywall or tile.</strong> Most GTA commercial kitchens already have a wall surface. FRP glues directly over sound drywall or even over old tile after a skim coat. PVC wants strapping or a stud cavity, which means tearing the old wall down first.</li>
            <li><strong>Look.</strong> Some owners do not want vertical plank lines every 16 inches in their kitchen. FRP in 4×8 or 4×10 sheets reads as a flat clean wall.</li>
          </ul>
          <h2>The Class A vs Class C Question, Honestly</h2>
          <p>This is where Trusscore marketing pushes hardest. Class A sounds safer than Class C, so why would anyone choose Class C? Because the Ontario Building Code §3.1.13 does not require Class A for most commercial kitchen and food processing occupancies. Class C (flame spread ≤ 150, smoke developed ≤ 300 per CAN/ULC-S102) is accepted for these spaces. If you are spec&apos;ing wall finish for an exit corridor in a larger building, you need Class A — and we will tell you that. For the back-of-house in a restaurant, Class C is what code requires and what inspectors approve.</p>
          <h2>Real Install Time, Not Brochure Time</h2>
          <p>PVC brochures love to show a two-person crew installing 800 sq ft in a day. That is true on a clean rectangular wall with no plumbing penetrations, no electrical, no corners, and a substrate that is already ready. A real GTA commercial kitchen has hoods, gas lines, electrical, three-compartment sinks, and corners every 8 feet. The real install difference between FRP and PVC on a typical retrofit job is closer to half a day, not three days.</p>
          <h2>Our Honest Recommendation</h2>
          <p>Pick PVC if you are framing new from scratch, you need Class A without spec&apos;ing a backer, or you are doing a walk-in cooler. Pick FRP for almost every other commercial kitchen, food processing room, or retrofit in the GTA. The cost difference is real, the impact-resistance difference is real, and the ability to swap one damaged panel without tearing apart a 30-foot run matters more than the brochures suggest.</p>
          <p>If you are unsure, call us at <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>. We will tell you which one fits your job — even if the answer is PVC.</p>
        </>
      );
    case "class-c-frp-ontario-building-code":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              The Ontario Building Code §3.1.13 governs interior finish flame spread. <strong>Class C FRP</strong> (flame spread ≤ 150, smoke developed ≤ 300 per ASTM E84 / CAN/ULC-S102) is accepted for most commercial kitchens, food processing facilities, and car washes in Ontario. Class A is required for exits and certain assembly occupancies. Always confirm panel test reports before installation.
            </p>
          </aside>
          <h2>What §3.1.13 Actually Says</h2>
          <p>Division B, Part 3 of the Ontario Building Code regulates large-building construction. Section 3.1.13 is the part everyone references but few read carefully. It governs the flame-spread rating and smoke-developed classification of interior finishes — meaning anything you stick to a wall or ceiling that is exposed to the room. FRP panels installed on the interior face of a commercial kitchen wall fall squarely under this section.</p>
          <p>The code does two things. First, it sets numerical limits on how fast flame can travel across a finish and how much smoke that finish produces while burning. Second, it tells you which limit applies based on where the finish is installed.</p>
          <h2>Flame Spread and Smoke Developed, in Plain English</h2>
          <p>Both numbers come from the same standardised test, performed in Canada under CAN/ULC-S102 (or its American twin, ASTM E84). A 25-foot panel is mounted in a horizontal tunnel, gas burners are lit at one end, and a measured airflow pushes flame down the panel. Two things get recorded: how far the flame travels in a fixed time (the flame spread index, or FSI), and how much smoke is produced (the smoke developed index, or SDI).</p>
          <ul>
            <li><strong>Class A:</strong> FSI 0–25, SDI 0–450</li>
            <li><strong>Class B:</strong> FSI 26–75, SDI 0–450</li>
            <li><strong>Class C:</strong> FSI 76–150, SDI 0–450 (Ontario typically holds SDI ≤ 300 for finishes)</li>
          </ul>
          <p>Lower is better, but &ldquo;better&rdquo; is not always required. The code asks for the rating that matches the risk of the room.</p>
          <h2>Where Each Rating Is Required (Common Occupancies)</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Space</th><th className="py-3 px-4 text-left">OBC Group</th><th className="py-3 px-4 text-left">Minimum Wall Finish</th></tr></thead>
              <tbody>
                {[
                  ["Exit stairwells, exit corridors", "Any", "Class A"],
                  ["Public corridor in assembly building", "A2 / A1", "Class B"],
                  ["Restaurant kitchen (back of house)", "A2", "Class C"],
                  ["Food processing production room", "F2 / F3", "Class C"],
                  ["Car wash bay (tunnel or self-serve)", "F2", "Class C"],
                  ["Daycare or school classroom", "A2", "Class C"],
                  ["School cafeteria", "A2", "Class B or C (depends on size)"],
                  ["Hospital patient corridor", "B2", "Class A"],
                  ["Warehouse, low-hazard storage", "F3", "Class C"],
                ].map(([space, group, rating], i) => (
                  <tr key={space} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{space}</td>
                    <td className="py-3 px-4 text-gray-700">{group}</td>
                    <td className="py-3 px-4 font-bold text-[#ff6b35]">{rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>This table covers the common cases. Always check with your local Building Department and reference the current edition of the OBC for your specific project — sprinklered vs non-sprinklered status changes some of these.</p>
          <h2>Why Class C Covers Most FRP Jobs in Ontario</h2>
          <p>The reason most FRP installations in the GTA spec out as Class C is that the rooms FRP belongs in — commercial kitchens, food prep, processing, car washes — are not exit routes and not assembly spaces over the size thresholds. They are working rooms. The code recognises that a working room with a sprinkler system and a clear path of egress does not need the same finish rating as a stairwell people are running down during an alarm.</p>
          <p>Specifying Class A FRP when Class C is allowed costs you more money for no compliance benefit. It is one of the most common ways money gets wasted on a fit-out.</p>
          <h2>What Inspectors Actually Ask For</h2>
          <p>When a Building Inspector or Public Health Inspector shows up to sign off on an FRP wall, they want three things in hand:</p>
          <ol>
            <li><strong>A current CAN/ULC-S102 or ASTM E84 test report</strong> from the panel manufacturer showing the FSI and SDI numbers for the exact panel being installed.</li>
            <li><strong>The manufacturer&apos;s installation instructions</strong> — confirming the panel was installed in the same configuration it was tested in (substrate, adhesive, joint treatment).</li>
            <li><strong>Confirmation that the rating matches the occupancy classification</strong> assigned to the room by the building&apos;s permit drawings.</li>
          </ol>
          <p>If any of these are missing, the inspection fails. Keep the test reports on file at the site for the duration of the job.</p>
          <h2>The &ldquo;Tested Assembly&rdquo; Detail That Trips People Up</h2>
          <p>Flame-spread numbers apply to the panel as tested. If the test report shows the panel was tested glued to 5/8&quot; Type X drywall, but you install it glued to 1/2&quot; OSB, you technically no longer have the same fire performance. Most inspectors are reasonable about this — drywall is more common than OSB as a substrate, and adhesive over drywall is the standard tested configuration — but if you are installing over an unusual substrate, ask the panel manufacturer for a tested-assembly letter.</p>
          <h2>Smoke Developed Is the Quiet Killer of Bad Panels</h2>
          <p>Flame spread gets all the attention, but smoke developed is what kills people in a fire. Cheap import FRP panels sometimes meet Class C on flame spread (FSI under 150) but generate enormous amounts of smoke (SDI well over 450). Those panels will not pass Ontario inspection. Always check both numbers, not just the class.</p>
          <h2>Sprinklered vs Non-Sprinklered Buildings</h2>
          <p>One detail the OBC bakes into §3.1.13 that is easy to miss: a fully sprinklered building can use a finish that is one class lower than the same space would otherwise require. For example, a public corridor in an A2 occupancy that would normally need Class B finish can drop to Class C if the building is sprinklered throughout. For most modern GTA commercial buildings — which are sprinklered as a baseline — this is the reason Class C FRP shows up in so many spec packages.</p>
          <p>Older buildings without sprinklers are a different conversation. If you are doing tenant fit-out work in a non-sprinklered legacy building (common in older parts of Toronto, Hamilton, and Brantford), confirm the sprinkler status with the building owner before locking in the FRP spec. Going from Class C to Class A is not a price change — it is a different product line and sometimes a different substrate detail.</p>
          <h2>How Corevance Verifies Every Panel</h2>
          <p>Every FRP panel we install on a commercial job in the GTA comes with the CAN/ULC-S102 test report attached to the quote. The report lists the FSI, SDI, substrate, and adhesive system the panel was tested with. We will not install a panel we cannot show paperwork for. If you have been quoted FRP and the contractor cannot produce the test report, that is a problem before the job even starts.</p>
          <p>Questions about whether Class C is sufficient for your specific Ontario project? Call us at <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a> — we will walk through your occupancy classification with you.</p>
        </>
      );
    case "frp-panels-gta-car-washes":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              GTA car wash tunnels destroy drywall in 18 months and break tile grout in under 3 years. <strong>Class C pebbled FRP</strong> holds up to chemical soaps, freeze-thaw cycles, and 24/7 moisture exposure for 15+ years. A typical 6-bay automatic tunnel (~2,400 sq ft) installs in 2–3 days at $8–$14/sq ft.
            </p>
          </aside>
          <h2>Why Car Wash Walls Are the Hardest Job in the GTA</h2>
          <p>A car wash interior is one of the most punishing environments any wall finish in southern Ontario sees. The bays cycle from near-freezing to 30°C several times a day in spring and fall. Hot wax application can drive bay temperatures briefly to 40°C. Acidic pre-soaks (pH 1–3) and alkaline degreasers (pH 11–13) hit the walls every cycle. Brushes throw water sideways. Customers in self-serve bays point wands at angles the manufacturer never intended. And it never stops — most GTA washes run from 6 a.m. to 11 p.m., 365 days a year.</p>
          <p>This is why drywall in a car wash is a 12 to 18 month decision. Even moisture-resistant (&ldquo;green board&rdquo;) drywall absorbs water at the cut edges, swells, delaminates from the paper, and falls off the studs. Tile lasts longer, but tile grout absorbs detergents, breaks down, then water gets behind the tile and the whole field comes loose. We have replaced tile fields in Etobicoke and Brampton car washes that were less than three years old.</p>
          <h2>What Class C Pebbled FRP Actually Does Differently</h2>
          <p>FRP is non-porous through the full thickness of the panel. There is no paper face to absorb water, no grout joint to break down, no cut edge that swells. The polyester resin and glass-fibre matrix is chemically resistant to the common car wash chemistries — acidic pre-soaks, alkaline foam, hot wax, tire shine, glass cleaner — at the concentrations and contact times these chemicals see on a wall.</p>
          <p>The pebbled surface texture (vs. smooth FRP) does two important things in a car wash. First, it hides scuffs and water-spotting that show on smooth panels. Second, in the wet zones where staff occasionally walk along the wall to clear brushes or service equipment, the pebbled surface is less slippery against a wet boot or glove.</p>
          <h2>Freeze-Thaw: The GTA-Specific Reason FRP Wins</h2>
          <p>Toronto, Mississauga, Brampton, Vaughan — every GTA municipality cycles through freeze-thaw 50 to 70 times per winter. A car wash bay door opens, cold air rushes in, water on the wall surface goes from liquid to ice in minutes. Then a warm car comes in, the wash cycle starts, and the wall is back above freezing.</p>
          <p>Any porous surface — concrete block, drywall, grouted tile — absorbs water before the freeze. When that water freezes, it expands 9%. That expansion is what spalls concrete, cracks tile, and delaminates drywall. FRP has nothing to absorb water into. The freeze-thaw cycle just happens on the panel face, and the panel does not care.</p>
          <h2>Comparing Wall Finish Lifespans in a GTA Car Wash</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Wall Finish</th><th className="py-3 px-4 text-left">Realistic Lifespan</th><th className="py-3 px-4 text-left">Failure Mode</th></tr></thead>
              <tbody>
                {[
                  ["Painted moisture-resistant drywall", "12–18 months", "Paper face delaminates, drywall swells and falls off"],
                  ["Ceramic tile with portland grout", "2–3 years", "Grout breaks down, water gets behind, field releases"],
                  ["Ceramic tile with epoxy grout", "5–7 years", "Tile chips from impacts, grout eventually fails at corners"],
                  ["Painted concrete block", "3–5 years", "Paint peels, block absorbs water, efflorescence"],
                  ["Stainless steel sheet", "15+ years", "Holds up but cost is 3–5× higher than FRP"],
                  ["Class C pebbled FRP", "15+ years", "Eventual UV chalking on high-sun panels — cosmetic only"],
                ].map(([finish, life, mode], i) => (
                  <tr key={finish} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{finish}</td>
                    <td className="py-3 px-4 text-gray-700">{life}</td>
                    <td className="py-3 px-4 text-gray-700">{mode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Automatic Tunnel vs Self-Serve Bay — Different Specs</h2>
          <p>The specification for an automatic tunnel and a self-serve bay are not the same.</p>
          <ul>
            <li><strong>Automatic tunnel:</strong> The walls take constant water and chemistry but very little wand impact, because customers stay in their cars. We typically spec 0.090&quot; Class C pebbled FRP, glued over moisture-resistant substrate, with PVC divider bars at every joint and full-height corner mouldings at every inside corner. Bottom 24&quot; of every wall gets a stainless or aluminum kick guard to handle impact from the conveyor entry and exit.</li>
            <li><strong>Self-serve bay:</strong> The wand-impact load is much higher. Customers will spray a high-pressure wand straight at the wall, repeatedly. We spec the same 0.090&quot; pebbled FRP, but with a heavier kick guard up to 48&quot; and additional adhesive coverage behind the panel (not just perimeter beads). Joints get reinforced with double-bead adhesive in the divider bar channel.</li>
          </ul>
          <h2>What a Typical 6-Bay Tunnel Install Looks Like</h2>
          <p>A standard 6-bay automatic tunnel in the GTA runs roughly 120 feet long with 10-foot ceilings. Wall area on both sides plus the end walls works out to around 2,400 square feet. Here is what the install looks like:</p>
          <ol>
            <li><strong>Day 1 morning:</strong> Substrate inspection and prep. Any failed drywall comes down, any soft block gets sealed. Layout chalked on walls.</li>
            <li><strong>Day 1 afternoon:</strong> First-pass adhesive and panels go up on both side walls. Divider bars and corner mouldings staged and dry-fit.</li>
            <li><strong>Day 2:</strong> Second wall completed, end walls completed, divider bars and corner mouldings rivetted in, sealant beads run.</li>
            <li><strong>Day 3:</strong> Kick guards installed, cutouts (electrical, water, equipment penetrations) sealed, final walk-through and CFIA/Public Health documentation handed over.</li>
          </ol>
          <p>Total installed cost typically lands between $19,200 and $33,600 for the tunnel at $8–$14/sq ft. Compared to repainting drywall every 18 months for the life of the business, the math is not close.</p>
          <h2>What Kills FRP in a Car Wash (Almost Always Install Error)</h2>
          <p>When we get called to look at FRP that has failed in a GTA car wash, it is almost never the panel. It is one of these:</p>
          <ul>
            <li>Wrong adhesive — silicone or general-purpose construction adhesive instead of a moisture-rated, panel-rated adhesive.</li>
            <li>Missing or skipped PVC divider bars at panel joints — water gets behind the panels and the whole field releases.</li>
            <li>No kick guard, so dropped equipment or carwash conveyor entry damages the bottom 12 inches and water tracks up behind the panel.</li>
            <li>Sealant beads skipped at penetrations (water lines, electrical) — water enters at the cutout, runs behind the field.</li>
          </ul>
          <h2>How to Get a Real Quote</h2>
          <p>If you operate a car wash anywhere in the GTA — Scarborough, Etobicoke, Mississauga, Brampton, Vaughan, Markham, Pickering, Oshawa — we will come out and measure the bays, look at substrate condition, and give you a fixed installed price within 24 hours. Most jobs install over a 2 to 3 day window. Call us at <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.</p>
        </>
      );
    case "frp-installation-mistakes-gta-kitchens":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              The most common FRP install failures in GTA commercial kitchens come from <strong>wrong adhesive, missing PVC mouldings at joints, and inadequate substrate prep</strong>. Each is a CFIA inspection failure waiting to happen. Fixing them after the fact runs $1,500–$8,000 depending on how much wall has to come back down.
            </p>
          </aside>
          <h2>Why This List Exists</h2>
          <p>About a third of the FRP work Corevance does in the GTA is fixing someone else&apos;s installation. The mistakes are not random. The same seven things go wrong on almost every failed job, whether it was a general contractor who took on FRP for the first time or an owner who tried to save money with a weekend DIY. Here is the list in the order we see them most often, with what should have happened and what it costs to fix.</p>
          <h2>1. Wrong Adhesive (The Silicone Mistake)</h2>
          <p><strong>What we see:</strong> Clear or white silicone caulking used to glue panels to the wall, often in big squeeze-bottle beads.</p>
          <p><strong>What went wrong:</strong> Silicone is not a structural adhesive. It does not bond to the gel-coat face of FRP reliably, and it does not bond to drywall paper well either. Within 6 to 18 months the panels start to separate, especially at the top where they hang the heaviest. In a CFIA-regulated kitchen, any gap between the panel and the wall is a harborage failure.</p>
          <p><strong>What should have happened:</strong> A panel-rated, food-safe construction adhesive (Titebond Fast Set FRP, Liquid Nails FRP, or equivalent) applied with a notched trowel for full-coverage transfer to the back of the panel, then back-rolled or pressed for contact.</p>
          <p><strong>Cost to fix:</strong> $2,500–$5,000 for an average kitchen. Every panel comes down, substrate gets cleaned, and the work re-does properly. The old silicone is the worst part — it has to be scraped off the wall before new adhesive can bond.</p>
          <h2>2. Missing PVC Mouldings at Joints</h2>
          <p><strong>What we see:</strong> Two FRP panels butted edge-to-edge with no divider bar between them. Sometimes a bead of silicone in the joint, sometimes nothing at all.</p>
          <p><strong>What went wrong:</strong> CFIA-accepted FRP installations require a sealed joint detail. The standard detail is a PVC divider bar (an &ldquo;H&rdquo; channel) that captures the edges of both panels and gives a clean sealable line. Without the divider bar, the joint opens within months as the panels expand and contract with temperature and humidity. An open joint is a CFIA inspection failure — full stop.</p>
          <p><strong>What should have happened:</strong> Every vertical joint between two panels gets a PVC divider bar, set in adhesive, rivetted through the bar into the substrate, and bead-sealed where the panel meets the bar.</p>
          <p><strong>Cost to fix:</strong> $1,500–$3,500 depending on linear footage. The good news is you can sometimes do this without removing all panels — cut a relief, slide a divider in, re-seal. The bad news is when the joints failed because the panels also moved, you are usually replacing panels too.</p>
          <h2>3. Panel Installed Over Wet or Unprepared Substrate</h2>
          <p><strong>What we see:</strong> Panels glued directly over old painted drywall that was never washed, or over a wall that had a slow plumbing leak the installer did not catch.</p>
          <p><strong>What went wrong:</strong> Adhesive needs a clean, sound, dry substrate. Old grease film on a restaurant wall (which is everywhere even when you cannot see it) prevents the adhesive from bonding. A wet substrate means the adhesive will never fully cure and the panel will release.</p>
          <p><strong>What should have happened:</strong> Substrate gets degreased with a TSP or commercial degreaser, rinsed, dried fully, and any soft or damaged drywall replaced before any adhesive goes on.</p>
          <p><strong>Cost to fix:</strong> $3,000–$8,000 depending on what is behind the panels. If the substrate was wet because of an active leak, that leak has to be repaired first and any damaged structure replaced.</p>
          <h2>4. Wrong Fastener (Steel Rivets in a Wet Kitchen)</h2>
          <p><strong>What we see:</strong> Standard steel pop rivets used to fasten divider bars and corner mouldings instead of nylon or stainless rivets.</p>
          <p><strong>What went wrong:</strong> Steel rivets in a commercial kitchen rust. Within 3 to 6 months you have visible rust streaks running down the panels from every rivet. CFIA inspectors do not like rust in a food prep area, and customers definitely notice it in an open kitchen.</p>
          <p><strong>What should have happened:</strong> Nylon rivets are the standard for FRP installations in food facilities. They are non-corroding, easy to install, and CFIA-friendly. Stainless rivets are acceptable but cost more without a real benefit indoors.</p>
          <p><strong>Cost to fix:</strong> $800–$2,000. Old rivets get drilled out, holes get re-drilled if needed, new nylon rivets go in, rust streaks on panel face get cleaned (and sometimes the panel needs replacement if the stain has set in).</p>
          <h2>5. No Expansion Gap at Floor and Ceiling</h2>
          <p><strong>What we see:</strong> FRP panels installed tight to the floor and tight to the ceiling, no gap left for thermal movement.</p>
          <p><strong>What went wrong:</strong> FRP expands and contracts with temperature. In a kitchen with no expansion gap, the panels can buckle outward in summer and pull at the divider bars in winter. We have seen panels actually pop loose from the wall in a hot pizza kitchen because there was nowhere for the expansion to go.</p>
          <p><strong>What should have happened:</strong> A minimum 1/4&quot; gap at the floor (covered by base trim or cove base) and 1/4&quot; gap at the ceiling (covered by ceiling cap moulding). The gap lets the panel breathe.</p>
          <p><strong>Cost to fix:</strong> $1,200–$3,000. Panels need to come down, get re-cut to the right height, and go back up with the right gap and trim.</p>
          <h2>6. Butt Joints With No Divider Bar (The Gap Forms in 6 Months)</h2>
          <p><strong>What we see:</strong> Similar to #2 but specifically the failure mode where two panels were caulk-jointed instead of divider-bar jointed. The caulk looks fine on day 1.</p>
          <p><strong>What went wrong:</strong> The caulk bead cannot accommodate the seasonal movement of the FRP panels on either side. Within 6 months a hairline gap opens up. Within 12 months it is wide enough to insert a fingernail into. By month 18, food residue is wedged in there and you have a CFIA inspection problem.</p>
          <p><strong>What should have happened:</strong> Every joint gets a real divider bar. Caulk alone is never the joint detail in a CFIA-accepted system.</p>
          <p><strong>Cost to fix:</strong> $1,500–$3,500. Often combined with #2 — the same fix.</p>
          <h2>7. Skipped Corner Trim (The Open Inside Corner)</h2>
          <p><strong>What we see:</strong> Two FRP panels meeting at an inside corner with no corner moulding — just a bead of caulk in the corner.</p>
          <p><strong>What went wrong:</strong> An inside corner is where two panels meet at 90 degrees. Without a PVC inside-corner moulding to receive both panel edges, the corner is structurally an open joint. The caulk fails the same way the butt-joint caulk fails. The corner becomes a bacterial harborage point — exactly what CFIA does not want in a food facility.</p>
          <p><strong>What should have happened:</strong> A PVC inside-corner moulding installed first, then both panels slide into the moulding&apos;s receiver channels. Sealant bead in the receiver before the panel goes in. Sealant bead at the top and bottom of the corner moulding.</p>
          <p><strong>Cost to fix:</strong> $1,000–$2,500. Cleaner than some of the others because the panels usually come off intact and the corner trim can be retrofit in.</p>
          <h2>The Pattern</h2>
          <p>Look at the seven mistakes together. Six of them come from one root cause: the installer treated FRP as if it were a finish material like wainscoting or tile board. It is not. FRP is a sealed wall system. The panel, the divider bars, the corner mouldings, the adhesive, the rivets, and the sealant are all parts of one system. Leave any of them out, and the system fails.</p>
          <p>If you have an FRP installation in a GTA commercial kitchen that you are not sure about, we will come out and inspect it for free. If it is sound, we will tell you. If it has one of these seven problems, we will tell you that too — with a written quote to fix it. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.</p>
        </>
      );
    case "frp-panels-schools-daycares-ontario":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              <strong>Class C FRP panels</strong> are accepted for Ontario daycares and schools under OBC §3.1.13 and provincial Ministry of Education facility standards. They handle the daily disinfection cycles post-2020, the impact wear from K-8 corridors, and install over a weekend or PA day with no off-gassing concerns once cured.
            </p>
          </aside>
          <h2>Why Schools and Daycares Are Different From Restaurants</h2>
          <p>Most FRP we install in the GTA goes into commercial kitchens and food processing. Schools and daycares are different. The hygiene requirement is real but not CFIA-driven. The fire-rating requirement comes from a different part of the building code. The impact load is enormous — a corridor of 7-year-olds running between classes hits a wall harder over a year than a restaurant kitchen does. And the install window is tight: schools want the work done over a weekend or a PA day, not during operating hours.</p>
          <p>This article covers what facility managers at Ontario school boards, private schools, and licensed daycare operators need to know before specifying FRP.</p>
          <h2>The Compliance Stack: OBC + Provincial Ministries</h2>
          <p>For a school or licensed daycare in Ontario, the wall finish has to satisfy two parallel sets of rules:</p>
          <ul>
            <li><strong>Ontario Building Code §3.1.13</strong> for interior finish flame spread (covered in detail in our <a href="/blog/class-c-frp-ontario-building-code" className="text-[#ff6b35] font-semibold">OBC §3.1.13 article</a>). For a typical school classroom, daycare playroom, or institutional corridor, Class C FRP meets code. For exit corridors and stairs, Class A is required.</li>
            <li><strong>Ministry of Education facility standards</strong> and (for licensed child care) the <strong>Child Care and Early Years Act</strong> requirements administered by the Ministry of Education&apos;s child-care licensing branch. These set expectations for cleanability, hygiene, and durability of wall surfaces in spaces children occupy. Both have requirements consistent with what Class C FRP delivers.</li>
          </ul>
          <p>FRP is not specifically named in either ministry&apos;s standards — neither is tile, drywall, or any other finish. The standards are performance-based: surfaces must be smooth, cleanable, durable, and free of harborage points. FRP installed correctly meets all four.</p>
          <h2>Cleanability Post-2020</h2>
          <p>The cleaning protocols at Ontario daycares and elementary schools changed permanently after 2020. Daily disinfection of high-touch surfaces (door frames, washroom walls, cubby areas, lunchroom walls at child height) is now standard. The chemicals being used — quaternary ammoniums, hydrogen peroxide solutions, and the various branded disinfectants approved on the Health Canada list — are harder on wall finishes than the soap-and-water cleaning that came before.</p>
          <p>Painted drywall does not hold up. After 18 months of daily disinfection, the paint dulls and starts to chalk. After 3 years, the drywall paper at chair-rail height shows through. FRP holds up indefinitely. The same gel-coat surface that takes commercial kitchen degreasers takes daycare disinfectants without dulling.</p>
          <h2>Impact Resistance for K-8 Corridors</h2>
          <p>The real durability test in a school is not the cleaning chemistry — it is the kids. Backpacks dragging along walls. Lockers slamming. Lunch trays bumping. A folding table being wheeled to the gym hits the corner at every classroom door. Wainscoting in painted MDF dies in 2 to 3 years. Painted concrete block survives but looks tired by year 5.</p>
          <p>FRP at typical 0.090&quot; thickness installed over sound drywall or directly over block handles K-8 impact for 15+ years. The pebbled surface (which we typically recommend for schools) hides scuffs and minor marks much better than smooth FRP.</p>
          <h2>Where FRP Belongs in a School or Daycare</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Space</th><th className="py-3 px-4 text-left">FRP Recommended?</th><th className="py-3 px-4 text-left">Why</th></tr></thead>
              <tbody>
                {[
                  ["Daycare washroom (kids')", "Yes — full height", "Disinfection + splash + impact"],
                  ["Daycare diaper-change area", "Yes — full wall", "Disinfection compliance is non-negotiable"],
                  ["Daycare classroom (general)", "Optional — wainscot to 48\"", "Impact at child height"],
                  ["Daycare lunch / snack area", "Yes — full height to ceiling", "Food residue + cleaning"],
                  ["School cafeteria back wall + serving line", "Yes — full height behind line", "Same as commercial kitchen behaviour"],
                  ["School corridor (K-8)", "Yes — wainscot to 48\"", "Backpack and locker abuse"],
                  ["School corridor (high school)", "Optional", "Less child-height impact"],
                  ["School washroom", "Yes — full height in stalls and around sinks", "Vandalism + cleaning"],
                  ["Gymnasium", "No — use proper gym wall padding / coating", "Ball impact is different load"],
                  ["Classroom (general teaching wall)", "Optional", "Whiteboards and tackboards usually drive this spec"],
                ].map(([space, rec, why], i) => (
                  <tr key={space} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{space}</td>
                    <td className="py-3 px-4 font-bold text-[#ff6b35]">{rec}</td>
                    <td className="py-3 px-4 text-gray-700">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Typical Install Scope</h2>
          <p>For budgeting purposes, these are the typical wall areas we install for daycare and school clients across the GTA:</p>
          <ul>
            <li><strong>Small in-home licensed daycare (12-child centre):</strong> 600–900 sq ft of FRP. Mostly washroom, change area, and lunch wall. One-day install.</li>
            <li><strong>Standalone licensed daycare (24–49 children):</strong> 1,000–1,500 sq ft. Add the playroom wainscoting and corridor wainscot to the above. Two-day install.</li>
            <li><strong>Elementary school cafeteria refresh:</strong> 2,000–3,500 sq ft. Full-height behind serving line, wainscot in seating area. Weekend or two PA days.</li>
            <li><strong>Elementary school corridor wainscot refresh (whole school):</strong> 3,500–5,000 sq ft of wainscot in a typical 12-classroom school. March break or summer.</li>
          </ul>
          <p>At our standard $8–$18/sq ft installed range, the costs map predictably from those areas.</p>
          <h2>Working Around the School Calendar</h2>
          <p>For operating schools and daycares, the install timing is as important as the cost. We routinely schedule:</p>
          <ul>
            <li><strong>Weekend installs</strong> for jobs under 1,500 sq ft. Crew arrives Friday after dismissal, panels go up Saturday, sealant cures Sunday, ready for Monday opening.</li>
            <li><strong>PA day installs</strong> for jobs that can be staged in one section at a time. We complete one corridor wing on a single PA day.</li>
            <li><strong>March break and summer</strong> for whole-school corridor wainscot refreshes and any larger scope.</li>
            <li><strong>After-hours weeknight installs</strong> for daycares that close at 6 p.m. — we work from 6:30 p.m. to roughly midnight, panels cure overnight, daycare opens at 7 a.m.</li>
          </ul>
          <h2>&ldquo;Is FRP Safe for Kids?&rdquo; — The Parent Question</h2>
          <p>This comes up at every daycare board meeting. The honest answer is yes. Class C FRP panels are inert once cured. The polyester resin and glass-fibre matrix do not off-gas at room temperature after installation. The food-safe construction adhesives we use are low-VOC and fully cured within 24 to 48 hours of install. There is no ongoing chemical exposure.</p>
          <p>FRP is the same material category used on the walls of CFIA-regulated food facilities and Ontario hospital clinical spaces. If it is safe enough for a NICU corridor, it is safe enough for a Grade 2 hallway.</p>
          <h2>Antimicrobial Coatings — A Brief Note</h2>
          <p>Some FRP product lines are sold with antimicrobial additives baked into the gel-coat. These are real — they reduce bacterial growth on the panel surface — but we do not lean on them as a selling point because the panel is non-porous and easy to clean either way. If a particular board or licensing inspector wants antimicrobial-specified FRP, we can source it. For most projects, the daily disinfection routine is doing the work.</p>
          <h2>Getting Started</h2>
          <p>If you operate or specify for an Ontario daycare or school, Corevance can come out for a site visit, measure the scope, and give you a quote within 24 hours. We have done weekend installs at locations from Oshawa to Burlington and are familiar with the staging requirements for operating-during-construction projects. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.</p>
        </>
      );
    case "how-to-clean-frp-panels-sop":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Clean Class C FRP panels with <strong>neutral-pH commercial cleaners</strong> or quaternary ammonium sanitizers. Avoid steel wool, undiluted bleach above 5%, solvents like acetone, and pressure washing above 1500 PSI — these void most manufacturer warranties. A daily wipedown and weekly deep clean keeps panels CFIA-compliant for 15+ years.
            </p>
          </aside>
          <h2>Why a Written Cleaning SOP Matters</h2>
          <p>Most FRP warranty claims we see in the GTA are not panel failures — they are cleaning failures. A line cook reaches for the closest jug of degreaser, an overnight crew runs a 3000 PSI pressure washer at the floor-wall joint, or a contracted cleaner uses steel wool on a baked-on grease spot. Six months later the panel surface hazes, the PVC mouldings yellow, the seams open up, and the manufacturer denies the claim.</p>
          <p>A one-page Standard Operating Procedure posted at the cleaning supply station prevents almost all of this. It also gives Toronto Public Health, Peel Public Health, York Region inspectors, and CFIA auditors something concrete to reference during a walk-through — which goes a long way when they are deciding whether your facility is being run carefully.</p>
          <h2>What Is Actually Safe on Class C FRP</h2>
          <p>The resin face of a Class C FRP panel is a thermoset polyester with a gel-coat finish. It tolerates a wide range of food-service chemistry, but a few categories are non-negotiable:</p>
          <ul>
            <li><strong>Neutral-pH cleaners (pH 6–8):</strong> first-line option for daily wipedown. Removes oils and food residue without attacking the gel coat.</li>
            <li><strong>Quaternary ammonium (&ldquo;quat&rdquo;) sanitizers at label dilution:</strong> the workhorse for food-contact-zone walls. Safe on FRP at standard 200–400 ppm dilutions.</li>
            <li><strong>Dilute sodium hypochlorite (household bleach):</strong> acceptable at a maximum 1:10 dilution (roughly 5,000 ppm chlorine). Rinse with potable water after dwell time.</li>
            <li><strong>Food-safe peroxide sanitizers (accelerated hydrogen peroxide):</strong> safe at label dilution, gentle on the gel coat.</li>
            <li><strong>Microfibre cloths and soft nylon brushes:</strong> the only abrasion tools that belong anywhere near FRP.</li>
          </ul>
          <h2>What Voids Most FRP Warranties</h2>
          <p>The following list is the consolidated &ldquo;do not use&rdquo; from the major North American FRP manufacturers we spec for in the GTA. Any one of these in your cleaning procedure can void the panel warranty:</p>
          <ul>
            <li>Steel wool, green scour pads, or any abrasive pad above a white nylon pad.</li>
            <li>Undiluted bleach, or any chlorinated cleaner above 5% sodium hypochlorite.</li>
            <li>Solvents — acetone, MEK, lacquer thinner, denatured alcohol at full strength.</li>
            <li>Strong acids (muriatic / hydrochloric, sulfuric, phosphoric above 10%).</li>
            <li>Strong caustics (sodium hydroxide / lye drain cleaners).</li>
            <li>Pressure washing above 1500 PSI, or any pressure washer held closer than 18&quot; from the surface.</li>
            <li>Steam at the seam line — steam can blow through mouldings and lift the adhesive bond.</li>
          </ul>
          <h2>Daily Wipedown (End of Each Service)</h2>
          <ol>
            <li>Scrape food and grease debris off the wall surface with a plastic scraper. No metal.</li>
            <li>Spray a neutral-pH degreaser on the panel face. Let it dwell 30–60 seconds.</li>
            <li>Wipe top-down with a clean microfibre cloth. Use a fresh cloth for every 100 sq ft.</li>
            <li>Spray quat sanitizer at label dilution on all food-contact-zone walls. Let air-dry.</li>
            <li>Check seams and base trim for trapped debris. Wipe out with a microfibre or soft brush.</li>
          </ol>
          <h2>Weekly Deep Clean</h2>
          <ol>
            <li>Pre-rinse panels with warm potable water (low pressure — a hose with a fan nozzle is fine, not a pressure washer).</li>
            <li>Apply a heavy-duty neutral-pH degreaser. Dwell 2–3 minutes — do not let it dry on the surface.</li>
            <li>Agitate with a soft nylon brush on a long handle. Top-down, no scrubbing in tight circles.</li>
            <li>Rinse fully with potable water. Any cleaner residue left to dry will haze the gel coat over time.</li>
            <li>Sanitize with quat or food-safe peroxide. Air-dry — no towel drying with reused cloths.</li>
          </ol>
          <h2>Monthly Inspection Checklist</h2>
          <ul>
            <li>Walk every wall with a flashlight. Look for hairline gaps at PVC mouldings, divider bars, and base trim.</li>
            <li>Check the food-safe caulk bead at floor and ceiling lines for shrinkage or mould growth.</li>
            <li>Press on each panel face. Any soft spot or hollow tap means the adhesive bond is failing — call your installer.</li>
            <li>Inspect rivets: they should be flush, tight, and white (nylon). Any rust streak means a steel rivet was used by mistake.</li>
            <li>Note any haze, yellowing, or cleaner staining. Document with a phone photo for warranty records.</li>
          </ul>
          <h2>Commercial Cleaner Categories: Safe vs Avoid</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Cleaner Category</th><th className="py-3 px-4 text-left">Use on FRP?</th><th className="py-3 px-4 text-left">Notes</th></tr></thead>
              <tbody>
                {[
                  ["Neutral-pH foodservice degreaser", "Safe", "First-line daily cleaner"],
                  ["Quaternary ammonium sanitizer", "Safe", "Standard food-contact-zone sanitizer"],
                  ["Accelerated hydrogen peroxide", "Safe", "Good alternative to quat"],
                  ["Bleach at 1:10 or weaker", "Safe with rinse", "Never leave to dry; rinse with potable water"],
                  ["Undiluted bleach / industrial chlorine", "Avoid", "Voids warranty; attacks gel coat"],
                  ["Heavy-duty alkaline degreaser (caustic)", "Avoid", "Strips gel coat over time"],
                  ["Acetone / MEK / lacquer thinner", "Avoid", "Dissolves resin surface"],
                  ["Oven cleaner (lye-based)", "Avoid", "Strong caustic — permanent damage"],
                  ["Acid descalers (muriatic, sulfuric)", "Avoid", "Etches surface; voids warranty"],
                  ["Citrus solvent / d-limonene at full strength", "Caution", "OK at label dilution only; never neat"],
                ].map(([k, v1, v2], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{k}</td>
                    <td className="py-3 px-4 text-gray-700">{v1}</td>
                    <td className="py-3 px-4 text-gray-700">{v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Steam Cleaning and Pressure Washing</h2>
          <p>Steam is a grey area. A low-pressure steam vapour system held at least 12&quot; off the wall, used on the panel face only, is generally safe. The problem is the seams: high-pressure steam directed at a PVC moulding can lift the seal, push water behind the panel, and create a hidden mould risk. If your facility uses steam cleaning, write into the SOP that the wand never points directly at any seam, corner, or base trim.</p>
          <p>Pressure washing is the single biggest cause of preventable FRP damage in the GTA. We see it most often in car wash bays and meat processing back-of-house. The rule is simple: <strong>1500 PSI maximum, fan nozzle only, held 18&quot; or more from the surface, and never aimed at a seam or rivet</strong>. Anything beyond that and you are blasting the gel coat off and forcing water behind the panel.</p>
          <h2>Commercial Dishwasher Splash Zones</h2>
          <p>The wall behind and beside a commercial dishwasher is the most chemically abused FRP in the building. Detergent overspray, rinse-aid mist, and 180°F sanitizer water hit the panel constantly. Three things protect it: (1) a stainless splash guard from the floor to 24&quot; above the dish machine top; (2) daily neutral-pH wipedown of all surrounding FRP; (3) a weekly check of the silicone bead between the splash guard and the FRP — replace it at the first sign of mould or shrinkage.</p>
          <h2>One-Page SOP for the Cleaning Supply Station</h2>
          <p>The SOP your night crew actually reads is one page, laminated, and posted above the cleaning supply shelf. Keep it short: the daily four-step wipedown, the &ldquo;never use&rdquo; list of five items, and the phone number to call if a panel gets damaged. We give every Corevance install client a printable version. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a> and we&apos;ll email you the editable file.</p>
        </>
      );
    case "frp-panels-healthcare-facilities-ontario":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Class C FRP panels are accepted for <strong>non-patient-care zones</strong> in Ontario healthcare facilities — utility rooms, soiled holding, lab back-of-house, cafeteria walls, staff washrooms, and long-term care corridors. They meet CSA Z8000 cleanability requirements and IPAC Canada wall surface guidance. For patient rooms and sterile fields, specify Altro Whiterock or similar PVC-skinned cladding instead.
            </p>
          </aside>
          <h2>Where FRP Fits in an Ontario Healthcare Build</h2>
          <p>FRP is not a hospital-wide cladding answer, and any supplier who says otherwise is overselling. It is, however, the right answer for a long list of specific zones in Ontario hospitals, long-term care homes, retirement residences, dental clinics, urgent care centres, and diagnostic labs — typically the back-of-house, support, and non-clinical-contact areas where cleanability and impact resistance matter but full sterile-field performance does not.</p>
          <p>The Canadian standards that govern wall surfaces in these spaces are CSA Z8000 (Canadian Health Care Facilities), the Infection Prevention and Control (IPAC) guidance maintained by IPAC Canada and Public Health Ontario, and the Ontario Building Code §3.1.13 for surface flame-spread. Class C FRP, installed with PVC mouldings and food-safe construction adhesive, satisfies all three for the zones listed below.</p>
          <h2>Healthcare Standards FRP Has to Meet</h2>
          <ul>
            <li><strong>CSA Z8000 — Canadian Health Care Facilities:</strong> requires wall finishes to be smooth, non-absorbent, easily cleanable, and resistant to the disinfectants used in the facility. Class C FRP meets this for non-sterile zones.</li>
            <li><strong>IPAC Canada wall surface guidance:</strong> wall surfaces must withstand routine cleaning and disinfection with hospital-grade quat, accelerated hydrogen peroxide, and dilute sodium hypochlorite. FRP tolerates all three at label dilution.</li>
            <li><strong>Public Health Ontario — Best Practices for Environmental Cleaning:</strong> calls for non-porous, seamless, washable surfaces in clinical support areas. A correctly installed FRP system (panels + PVC mouldings + sealed joints) is seamless.</li>
            <li><strong>Ontario Building Code §3.1.13:</strong> Class C surface flame-spread is accepted for the occupancy classifications most healthcare support zones fall under. Exit corridors and certain assembly spaces require Class A — see our <a href="/blog/class-c-fire-rating-explained" className="text-[#ff6b35] font-semibold">Class C fire rating guide</a>.</li>
          </ul>
          <h2>Where FRP Belongs in a Hospital or LTC Home</h2>
          <p>From our project history across the GTA — Trillium, Mackenzie Health catchment, Markham Stouffville area, and several long-term care builds in Durham — these are the zones FRP routinely lands in:</p>
          <ul>
            <li><strong>Soiled utility / soiled holding rooms:</strong> high splash, frequent disinfection, impact from carts. FRP excels here.</li>
            <li><strong>Clean utility back walls (non-prep zones):</strong> behind shelving and supply storage.</li>
            <li><strong>Equipment processing back-of-house:</strong> walls behind sinks and cart wash bays.</li>
            <li><strong>Lab support areas:</strong> sample receiving, glassware wash, back corridors. Not the sterile bench wall.</li>
            <li><strong>Cafeteria and servery walls:</strong> CFIA-style food-handling zones inside a healthcare facility.</li>
            <li><strong>Staff washrooms and locker rooms:</strong> moisture resistance and easy cleaning.</li>
            <li><strong>Long-term care corridors:</strong> high gurney and wheelchair traffic. FRP&apos;s impact resistance is the selling point — drywall in these corridors gets destroyed in 3–5 years.</li>
            <li><strong>Dietary and central kitchen:</strong> identical spec to a CFIA-compliant commercial kitchen.</li>
            <li><strong>Loading dock vestibules and clean linen receiving:</strong> moisture, abrasion, and frequent cleaning.</li>
          </ul>
          <h2>Where FRP Is the Wrong Specification</h2>
          <p>FRP is the wrong wall finish in spaces where the surface has to perform as part of an infection-control envelope or withstand continuous wet contact at clinical standards:</p>
          <ul>
            <li><strong>Patient rooms behind the bed (headwall):</strong> specify Altro Whiterock or equivalent PVC-skinned hygienic cladding. The surface continuity, weldable seams, and chemical resistance to clinical disinfectants are at a higher standard.</li>
            <li><strong>Operating room sterile fields:</strong> requires specialized OR cladding with welded, gap-free seams and a written disinfection compatibility statement from the manufacturer.</li>
            <li><strong>Isolation rooms (airborne / contact precautions):</strong> wall and ceiling continuity matters; PVC-skinned cladding with heat-welded joints is the standard.</li>
            <li><strong>Endoscopy reprocessing and CSPD clean side:</strong> typically welded PVC cladding for chemical resistance to OPA, peracetic acid, and similar high-level disinfectants.</li>
            <li><strong>Pharmacy clean rooms (USP 797/800):</strong> require monolithic, gap-free wall systems certified for the cleanroom classification.</li>
          </ul>
          <h2>FRP vs. Altro Whiterock vs. Tile in Healthcare</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Criteria</th><th className="py-3 px-4 text-left">Class C FRP</th><th className="py-3 px-4 text-left">Altro Whiterock / PVC clad</th><th className="py-3 px-4 text-left">Ceramic tile</th></tr></thead>
              <tbody>
                {[
                  ["Best fit", "Non-clinical support zones", "Patient rooms, sterile zones", "Front of house, decorative"],
                  ["Seam type", "PVC moulding + rivets", "Heat-welded continuous", "Grouted joints"],
                  ["IPAC cleanability", "Meets non-clinical std", "Meets clinical std", "Grout is a known weakness"],
                  ["Impact resistance", "Excellent", "Good", "Poor — chips"],
                  ["Installed cost", "$8–$18/sq ft", "$25–$45/sq ft", "$15–$35/sq ft"],
                  ["10-year maintenance", "Low", "Low", "High (grout)"],
                ].map(([k, v1, v2, v3], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{k}</td>
                    <td className="py-3 px-4 text-gray-700">{v1}</td>
                    <td className="py-3 px-4 text-gray-700">{v2}</td>
                    <td className="py-3 px-4 text-gray-700">{v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Antimicrobial-Coated FRP — Is It Worth Specifying?</h2>
          <p>Several manufacturers now offer FRP with a factory-applied antimicrobial coating (typically silver-ion or similar). For non-clinical support zones the honest answer is: a properly cleaned standard FRP panel performs almost identically over a normal cleaning cycle, and IPAC guidance is clear that no surface treatment substitutes for routine disinfection. Antimicrobial FRP carries a 10–20% material premium and is most defensible in dietary, long-term care, and shared washroom corridors where touch frequency is high and cleaning intervals are longer than ideal. For most projects we recommend standard Class C FRP plus a documented cleaning SOP — see our <a href="/blog/how-to-clean-frp-panels-sop" className="text-[#ff6b35] font-semibold">cleaning SOP guide</a>.</p>
          <h2>Working with Infection Control on the Spec</h2>
          <p>Bring the hospital&apos;s IPAC lead into the spec conversation early. They will want three things on the FRP submittal: (1) the panel&apos;s ASTM E84 / CAN/ULC-S102 test report showing Class C, (2) the manufacturer&apos;s disinfectant compatibility list (quat, AHP, dilute hypochlorite at minimum), and (3) the installation detail showing PVC mouldings at every joint and sealed floor/ceiling lines. If those three are in the submittal package, FRP rarely gets pushed back in non-clinical zones.</p>
          <h2>Impact Resistance and Long-Term Care Corridor Wear</h2>
          <p>The single most underrated benefit of FRP in healthcare is impact resistance in high-traffic corridors. Walk any long-term care home that is more than five years old and you will see the same pattern on the lower 36&quot; of drywall: gouges from wheelchair footrests, scuff lines from food carts, bashed-in inside corners at every doorway, and patched repairs that no longer match the surrounding paint. Drywall in an LTC corridor has a realistic service life of three to five years before it looks tired.</p>
          <p>A Class C FRP wainscot from the floor to 48&quot; absorbs that traffic without showing wear. The flex of the fiberglass-reinforced matrix takes minor impacts without cracking; the gel-coat face wipes clean of cart scuffs with a damp microfibre. For a 200-bed LTC home, that is roughly 1,500–2,000 linear feet of corridor where the lower wall section stays presentable through the full 15–20 year capital cycle instead of needing patch-and-paint every 3 years.</p>
          <p>The same logic applies in retirement residence corridors, dialysis clinic waiting areas, and outpatient imaging back corridors — anywhere mobility devices and equipment carts move repeatedly through the same path.</p>
          <h2>Get a Healthcare-Ready Spec Review</h2>
          <p>Corevance handles healthcare and long-term care builds across the GTA — from small dental and clinic fit-outs in Mississauga and Markham to corridor refits in Durham region LTC homes. Every submittal includes the panel test report, disinfectant compatibility statement, and installation detail drawings your IPAC lead and capital planning team will want to see. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a> for a free walkthrough and spec review.</p>
        </>
      );
    case "cfia-frp-installation-requirements":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              A CFIA-compliant FRP install requires <strong>Class C panels, PVC mouldings at every joint, nylon rivets</strong> (steel rivets corrode and fail inspection), food-safe construction adhesive, and zero open joints or gaps. Inspectors can request panel test reports, adhesive SDS, and an installer declaration. Get it wrong and the wall surface fails the Preventive Control Plan review.
            </p>
          </aside>
          <h2>What CFIA Actually Requires of a Wall Surface</h2>
          <p>The Safe Food for Canadians Act (SFCA) and its regulations (SFCR) do not list FRP by brand. What they require is a performance outcome: any wall surface in a food establishment must be smooth, non-absorbent, durable, and constructed of materials that do not contaminate food. The surface must be cleanable, sealed against pest harborage, and free of open joints or gaps that can trap food residue or moisture.</p>
          <p>A correctly installed Class C FRP system is one of the few finishes that meets all four — smooth, non-absorbent, durable, sealed — at a reasonable installed cost. But the panels alone are not the compliance story. The system spec is what passes inspection.</p>
          <h2>The Four-Part System Spec That Passes CFIA</h2>
          <ol>
            <li><strong>Class C FRP panels</strong> — test reported under ASTM E84 or CAN/ULC-S102 with flame spread index 76–200 and smoke developed ≤450. Standard sizes are 8′ × 4′ or 10′ × 4′.</li>
            <li><strong>PVC mouldings at every joint</strong> — inside corner, outside corner, divider bar, top cap, and base cove. Mouldings close the joint and create a cleanable, gap-free surface. Aluminum mouldings are not CFIA-acceptable because the joint with the panel is not sealed.</li>
            <li><strong>Nylon rivets at the specified interval</strong> — typically 8&quot; on centre along every moulding. Steel or aluminum rivets corrode in food-facility wash-down environments, leave rust streaks, and fail inspection. Nylon is the only correct choice.</li>
            <li><strong>Food-safe construction adhesive</strong> — full-coverage application with a notched trowel. The adhesive must be listed as suitable for food-contact-zone walls — most major brands have a food-safe variant; the SDS must be on file.</li>
          </ol>
          <h2>What an Inspector Actually Looks At</h2>
          <p>CFIA inspectors and Public Health inspectors do not test the chemistry of your panel. They look at the wall and they touch it. The pass/fail criteria are practical:</p>
          <ul>
            <li>Is the surface smooth and continuous, or are there open joints, gaps, or chipped edges?</li>
            <li>When they run a finger along a seam, is it sealed flush, or can they feel a gap?</li>
            <li>Is there any rust on the rivet heads? (Steel rivet = automatic deficiency note.)</li>
            <li>At the floor-wall junction, is there a sealed cove or a clean caulk bead, or is there a 3 mm gap where dust and water collect?</li>
            <li>At the ceiling line, is the top of the panel capped, or is the cut edge exposed?</li>
            <li>Are panel cutouts around pipes and electrical penetrations sealed with food-safe caulk?</li>
            <li>Is there visible moisture damage, delamination, or panel bulging that suggests adhesive failure?</li>
          </ul>
          <h2>Common Inspection Failures and How They Happen</h2>
          <ul>
            <li><strong>Steel rivets used in place of nylon.</strong> Usually a job-site shortcut when the box of nylon rivets runs out on a Friday afternoon. Within 6–12 months the rivets rust and the wall fails the next inspection.</li>
            <li><strong>Adhesive applied in dollops instead of full-coverage trowel.</strong> Panels look fine for a year, then start to tap hollow and bulge. The CFIA inspector taps the wall — hollow tap means probable harborage void behind the panel.</li>
            <li><strong>No PVC moulding at the inside corner.</strong> Two panels butted together with caulk only. The joint opens within a year and becomes a permanent deficiency note.</li>
            <li><strong>Missing base cove or top cap.</strong> The cut panel edge is exposed, which is both unsightly and an absorbent edge into the panel core.</li>
            <li><strong>Caulk used where moulding is required.</strong> Caulk-only joints fail. The moulding is the structural seal; caulk is only the finishing bead.</li>
            <li><strong>Pipe and electrical penetrations not sealed.</strong> Every cutout for a refrigeration line, electrical box, or floor drain has to be caulked to the penetration with food-safe sealant.</li>
          </ul>
          <h2>Documentation an Inspector Can Request</h2>
          <p>For a Preventive Control Plan (PCP) review — which CFIA requires of most federally regulated food businesses under SFCR Part 4 — the wall surface is part of the facility documentation. An inspector can ask for:</p>
          <ul>
            <li>The FRP panel manufacturer&apos;s ASTM E84 / CAN/ULC-S102 fire test report (showing Class C).</li>
            <li>The panel manufacturer&apos;s product data sheet showing food-contact-zone suitability.</li>
            <li>The construction adhesive SDS (Safety Data Sheet) and a statement of food-zone compatibility.</li>
            <li>The PVC moulding and nylon rivet product cut sheets.</li>
            <li>An installer declaration: a signed statement from the contractor that the install was completed to the manufacturer&apos;s system specification, with photos of typical joints.</li>
            <li>The cleaning and maintenance SOP for the wall surface — see our <a href="/blog/how-to-clean-frp-panels-sop" className="text-[#ff6b35] font-semibold">cleaning SOP guide</a>.</li>
          </ul>
          <p>A Corevance install includes all of the above in a single submittal package, ready to file in the facility&apos;s PCP binder.</p>
          <h2>Relationship to the Ontario Building Code (OBC §3.1.13)</h2>
          <p>OBC §3.1.13 governs interior finish flame-spread and smoke-developed indices. For most commercial kitchens, food processing facilities, and food retail back-of-house spaces in Ontario, a Class C interior finish (FSR 76–200, SDC ≤450) is accepted. Exit stairwells, exit corridors in some occupancies, and certain high-hazard assembly spaces require Class A (FSR ≤25). The detailed breakdown is in our <a href="/blog/class-c-fire-rating-explained" className="text-[#ff6b35] font-semibold">Class C fire rating guide</a>.</p>
          <p>CFIA acceptance and OBC compliance are two separate reviews. A wall surface needs to pass both. Class C FRP installed to the system spec above passes both for the vast majority of food facility occupancies in Ontario.</p>
          <h2>CFIA-Compliant Install Checklist</h2>
          <ol>
            <li>Substrate flat to ±1/8&quot; over 10′, dry, free of dust and grease, primed if required.</li>
            <li>Class C FRP panels, full-coverage notched-trowel adhesive on every panel back.</li>
            <li>PVC moulding at every inside corner, outside corner, panel-to-panel butt joint, top, and base.</li>
            <li>Nylon rivets at 8&quot; on centre along every moulding edge. No steel, no aluminum.</li>
            <li>1/8&quot; expansion gap at all wall terminations, hidden behind moulding.</li>
            <li>Food-safe caulk bead at floor-wall junction, ceiling line, and every pipe / electrical penetration.</li>
            <li>No hollow taps. Every panel firmly bonded.</li>
            <li>No exposed cut edges. All panel terminations capped with moulding.</li>
            <li>Submittal package on file: panel test report, adhesive SDS, moulding cut sheet, installer declaration.</li>
            <li>Cleaning SOP posted at the cleaning supply station for the facility cleaning crew.</li>
          </ol>
          <h2>Get a CFIA-Ready Quote</h2>
          <p>Corevance has installed CFIA-compliant FRP systems across the GTA for commercial kitchens, federally regulated processors, bakeries, and meat facilities. Every install ships with the documentation package above. Free on-site assessments, written quotes within 24 hours. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.</p>
        </>
      );
    case "how-to-install-frp-panels":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Commercial FRP install: prep the substrate flat to <strong>±1/8&quot; over 10 ft</strong>, full-coverage notched-trowel construction adhesive (not dollops), PVC mouldings at every joint and corner, nylon rivets every 8&quot; on mouldings, 1/8&quot; expansion gap at all edges, food-safe caulk at floor/ceiling line. Skip any of these and you&apos;ll fail a CFIA wall inspection.
            </p>
          </aside>
          <h2>Who This Guide Is For</h2>
          <p>This is a working installer&apos;s guide — commercial contractor, experienced finishing crew, or a confident facility maintenance lead doing a small repair or back-of-house refit. It assumes you have done interior finishing work before and know how to read a level. The CFIA-compliance section is non-negotiable for any food-facility install; the rest is the same craft as any commercial wall finish.</p>
          <h2>Tools You Need on Site</h2>
          <ul>
            <li>Notched trowel — 1/4&quot; × 1/4&quot; square notch or V-notch for full-coverage adhesive.</li>
            <li>Jigsaw with fine-tooth carbide blade (10–14 TPI) for cutouts. A standard wood blade tears the gel coat.</li>
            <li>Circular saw with carbide blade for long straight cuts (score-and-snap also works for clean straight lines).</li>
            <li>Drill with a rivet bit sized for the nylon rivet (typically 3/16&quot; or per the rivet spec).</li>
            <li>Manual or pneumatic rivet gun rated for nylon rivets.</li>
            <li>4′ and 6′ spirit levels.</li>
            <li>Snap-line / chalk line.</li>
            <li>Caulk gun and food-safe construction sealant (silicone or polyurethane rated for food-contact zones).</li>
            <li>Construction adhesive — food-safe variant from a major brand (Titebond, LePage, or equivalent).</li>
            <li>Tape measure, framing square, utility knife, fine-grit sanding block, microfibre cloths for cleanup.</li>
            <li>Two suction-cup panel lifters (an 8′ × 4′ panel is not a one-person carry).</li>
            <li>PPE: safety glasses, N95 dust mask when cutting, cut-resistant gloves.</li>
          </ul>
          <h2>Substrate Preparation</h2>
          <p>The single biggest cause of failed FRP installs is bad substrate prep. The wall behind the panel has to be flat, dry, structurally sound, and clean.</p>
          <ul>
            <li><strong>Flatness:</strong> ±1/8&quot; deviation over a 10′ straightedge, in any direction. Anything worse and the panel will telegraph the high and low spots, the adhesive coverage will be inconsistent, and you will get hollow taps.</li>
            <li><strong>Dryness:</strong> moisture meter reading below 16% for wood-based substrates, below 4% MVER for concrete. Adhering FRP over damp substrate guarantees bond failure within 12 months.</li>
            <li><strong>Acceptable substrates:</strong> moisture-resistant drywall (green or purple board), cement board, fiber-cement panel, structural plywood. Standard drywall is acceptable for non-wet zones only.</li>
            <li><strong>Cleanliness:</strong> no dust, grease, paint chalking, loose joint compound, or wallpaper residue. Wipe with a damp cloth, let dry.</li>
            <li><strong>Primer:</strong> if the substrate is bare drywall paper, painted with a glossy finish, or has any chalky paint, prime with a bonding primer per the adhesive manufacturer&apos;s recommendation.</li>
          </ul>
          <p><em>Common mistake:</em> skipping the moisture check on a basement or below-grade wall. Concrete that looks dry can still wick moisture from below grade. A 24-hour plastic-sheet test ($2 of plastic, taped to the wall overnight) tells you whether you have a vapour problem before you bond panels to it.</p>
          <h2>Cutting Panels</h2>
          <p>FRP cuts cleanly with the right tooling and is a disaster with the wrong one.</p>
          <ul>
            <li><strong>Straight cuts:</strong> score-and-snap with a sharp utility knife and a straightedge works for any straight cut. Score the face 3–4 passes deep, bend the panel down against a table edge — it snaps clean. Alternatively, a circular saw with a fine-tooth carbide blade, panel face up, cuts straight runs fast.</li>
            <li><strong>Cutouts (outlets, switches, pipes):</strong> drill a starter hole, then jigsaw with a fine-tooth carbide blade. Tape the cut line first to reduce gel-coat chipping. Cut from the back of the panel if your jigsaw cuts on the upstroke.</li>
            <li><strong>Curved cuts (drain penetrations):</strong> use a hole saw rated for fiberglass, drill at low RPM with light pressure. Going fast cracks the panel.</li>
            <li><strong>Edge finishing:</strong> light pass with a sanding block to break the cut edge. Do not over-sand — you are just removing the sharp corner.</li>
          </ul>
          <p><em>Common mistake:</em> using a standard wood-cutting blade. It will tear the gel coat into a chipped, white-edged mess. Carbide-tipped, fine-tooth blades only.</p>
          <h2>Adhesive Application</h2>
          <p>This is where most YouTube guides get it wrong. Dollops of adhesive on the back of the panel will hold for a year and then start to fail. The correct method is full-coverage with a notched trowel:</p>
          <ol>
            <li>Lay the panel face-down on a clean surface (two sawhorses with foam padding).</li>
            <li>Apply a generous bead of food-safe construction adhesive across the back of the panel.</li>
            <li>Spread with a 1/4&quot; × 1/4&quot; notched trowel held at a 45° angle. Cover the entire back, edge to edge, in parallel ridges.</li>
            <li>The notched ridges collapse when you press the panel to the wall, giving you 100% coverage with no voids.</li>
            <li>Work within the adhesive&apos;s open time — typically 15–20 minutes. Do not pre-spread more panels than you can place.</li>
          </ol>
          <p><em>Common mistake:</em> dollops or perimeter-only adhesive. CFIA inspectors tap walls. A hollow tap is a deficiency. Full-coverage trowelled adhesive is the only correct method for a commercial install.</p>
          <h2>Setting Panels</h2>
          <ol>
            <li>Snap a level baseline 1/8&quot; up from the floor — this is your panel bottom edge. The 1/8&quot; gap is your expansion gap; it will be hidden behind the base cove.</li>
            <li>Snap a vertical plumb line at the first panel edge.</li>
            <li>With a helper, lift the panel to the wall using suction cups. Set the bottom edge on the baseline first, then ease the top in to plumb.</li>
            <li>Press the panel firmly across the full face — use a J-roller or a clean rubber-faced block — to crush the adhesive ridges flat.</li>
            <li>Drill rivet holes through the panel at the moulding line, 8&quot; on centre. Set nylon rivets.</li>
            <li>Move to the next panel. Leave 1/8&quot; gap between adjacent panels for the PVC divider bar.</li>
          </ol>
          <h2>Fitting PVC Mouldings</h2>
          <ul>
            <li><strong>Inside corner moulding:</strong> goes in first at every inside corner. Both panel edges slide into the moulding channel.</li>
            <li><strong>Divider bar (H-moulding):</strong> at every panel-to-panel butt joint. Slide first panel edge into one side of the H, set the second panel into the other side.</li>
            <li><strong>Outside corner moulding:</strong> wraps the corner; both panel edges slide into the corresponding channels.</li>
            <li><strong>Top cap (J-moulding):</strong> at the ceiling line. Caps the cut top edge of the panel.</li>
            <li><strong>Base cove:</strong> at the floor. Closes the 1/8&quot; expansion gap and gives a cleanable floor-wall transition.</li>
          </ul>
          <p>Set all mouldings into a continuous bead of food-safe sealant before sliding the panel in. The sealant fills any micro-gap between moulding and panel. Wipe excess with a damp microfibre.</p>
          <h2>Nylon Rivet Schedule</h2>
          <p>Nylon rivets, 8&quot; on centre, along every moulding edge. That is the standard for commercial CFIA-compliant installs. Do not substitute steel rivets — they will rust in any wash-down environment and fail the next inspection. The rivet body should sit flush with the moulding face after setting; a proud rivet snags cleaning cloths and traps debris.</p>
          <h2>Expansion Gap and Final Seal</h2>
          <p>FRP panels move with temperature and humidity. A 1/8&quot; gap at every wall termination — top, bottom, both vertical edges — accommodates this movement without buckling the panel face. The gap is always hidden behind moulding; it is never visible after install.</p>
          <p>Final seal pass with food-safe sealant:</p>
          <ul>
            <li>Continuous bead along the base cove at the floor.</li>
            <li>Continuous bead along the top cap at the ceiling.</li>
            <li>Every pipe, electrical, and equipment penetration sealed to the panel face.</li>
            <li>Any inside or outside corner moulding sealed at both ends.</li>
          </ul>
          <p>Tool the bead with a wet finger or a caulk tool — a clean, slightly concave bead is cleanable; a rough bead traps food and fails inspection.</p>
          <h2>Final QC Walk-Through</h2>
          <ol>
            <li>Tap every panel face — listen for hollow spots. Hollow = re-do.</li>
            <li>Run a fingernail along every moulding edge — no gaps, no proud rivets.</li>
            <li>Visually inspect every seal — continuous, concave, no skips.</li>
            <li>Check every cut edge — all hidden behind moulding, none exposed.</li>
            <li>Walk away for 24 hours before letting the cleaning crew use any liquid on the wall.</li>
          </ol>
          <h2>When to Call a Professional Installer</h2>
          <p>If the project is more than 200 sq ft, involves CFIA-regulated food production, has complex corners or curved transitions, or carries a warranty obligation back to the building owner — get a specialist. A Corevance crew will install the same area in 1–2 days that a generalist will spend a week on, and the submittal package for the inspector is ready on day one. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a> for a free site walkthrough across the GTA.</p>
        </>
      );
    case "class-c-fire-rating-explained":
      return (
        <>
          <aside className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-gray-800 text-sm leading-relaxed">
              Class C FRP panels have a <strong>flame spread index between 76 and 200</strong> (per ASTM E84 / CAN/ULC-S102) — accepted by the Ontario Building Code for most commercial kitchens, food processing, car washes, and back-of-house spaces. Class A (≤25) is required only for exits and certain assembly occupancies. Class C is not &ldquo;less safe&rdquo; — it is correctly rated for its intended use.
            </p>
          </aside>
          <h2>What the Fire Rating Actually Measures</h2>
          <p>The fire rating on an FRP panel is not a measure of whether the panel burns. It is a measure of two specific things: how fast flame spreads across its surface, and how much smoke it generates while doing so. Both values come from a single test — the Steiner Tunnel — run under either ASTM E84 (the U.S. standard) or CAN/ULC-S102 (the Canadian equivalent). The two test methods are functionally identical and the results are interchangeable for Ontario Building Code purposes.</p>
          <p>In the test, a 24′-long sample of the material is mounted in the ceiling of an enclosed tunnel and exposed to a calibrated gas flame for 10 minutes. Instruments measure how far the flame travels along the surface and how much light a smoke beam can still pass through the exhaust. The two numbers that come out are the Flame Spread Index (FSI) and the Smoke Developed Index (SDI), each scored against red oak (FSI 100) and inorganic reinforced cement board (FSI 0).</p>
          <h2>Class A, B, C — What Each One Means</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Class</th><th className="py-3 px-4 text-left">Flame Spread Index</th><th className="py-3 px-4 text-left">Smoke Developed Index</th><th className="py-3 px-4 text-left">Typical Use</th></tr></thead>
              <tbody>
                {[
                  ["Class A (Class 1)", "0 – 25", "0 – 450", "Exit corridors, assembly, high-occupancy spaces"],
                  ["Class B (Class 2)", "26 – 75", "0 – 450", "Many commercial occupancies, light-use corridors"],
                  ["Class C (Class 3)", "76 – 200", "0 – 450", "Commercial kitchens, food processing, back-of-house, car washes"],
                ].map(([k, v1, v2, v3], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{k}</td>
                    <td className="py-3 px-4 text-gray-700">{v1}</td>
                    <td className="py-3 px-4 text-gray-700">{v2}</td>
                    <td className="py-3 px-4 text-gray-700">{v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Notice that the smoke developed limit (≤450) is the same for all three classes. The difference between Class A, B, and C is entirely about how quickly flame can travel across the surface — not about how much smoke is produced or whether the material is &ldquo;safe.&rdquo;</p>
          <h2>What These Numbers Mean in a Real Fire</h2>
          <p>Plain English: in a building fire, the wall finish is rarely the source of ignition. The contents — cooking oils, packaging, paper goods, plastics — are what start and sustain fires. The wall finish matters because if flame reaches it, the question is how fast it spreads to the next room.</p>
          <ul>
            <li><strong>Class A surfaces</strong> burn slowly enough that they buy occupants extra evacuation time even in spaces with high occupancy or long egress paths. Required where the consequences of trapped occupants are highest — exit corridors, assembly halls, schools.</li>
            <li><strong>Class B surfaces</strong> are an intermediate tier — acceptable in many commercial occupancies under the OBC where Class A is not specifically required.</li>
            <li><strong>Class C surfaces</strong> contribute to flame spread more than Class A, but in occupancies where contents and equipment are the dominant fire load (a commercial kitchen has cooking oils everywhere; a food plant has packaging stacks), the wall finish is not the controlling factor. Class C is the correct rating for the use.</li>
          </ul>
          <h2>How to Read an FRP Panel&apos;s Test Report</h2>
          <p>Any reputable FRP manufacturer publishes a test report (sometimes called a &ldquo;classification report&rdquo; or &ldquo;test certificate&rdquo;) for each product. Ask for it before you spec. The report will state:</p>
          <ul>
            <li>The test method (ASTM E84 or CAN/ULC-S102).</li>
            <li>The laboratory that conducted the test (Intertek, UL, QAI, etc.).</li>
            <li>The exact panel composition and thickness tested.</li>
            <li>The Flame Spread Index value and the Smoke Developed Index value.</li>
            <li>The classification: Class A, B, or C.</li>
            <li>The date of the test (most jurisdictions accept reports within 10 years).</li>
          </ul>
          <p>If a supplier cannot produce a current test report for the exact panel they are quoting you, do not spec the product. The OBC, CFIA, and Public Health inspectors can all request the report.</p>
          <h2>Ontario Building Code §3.1.13 — Where Class C Is Accepted</h2>
          <p>OBC §3.1.13 governs the flame spread and smoke developed ratings of interior finishes. The detailed table in the Code maps each occupancy classification to a required maximum FSI. The simplified version that covers most commercial FRP applications:</p>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-[#1e3a5f] text-white"><th className="py-3 px-4 text-left">Space Type</th><th className="py-3 px-4 text-left">Typical Required Rating</th><th className="py-3 px-4 text-left">Class C OK?</th></tr></thead>
              <tbody>
                {[
                  ["Commercial kitchen", "Class C", "Yes"],
                  ["Food processing back-of-house", "Class C", "Yes"],
                  ["Restaurant prep / dish room", "Class C", "Yes"],
                  ["Grocery / retail back-of-house", "Class C", "Yes"],
                  ["Car wash bay", "Class C", "Yes"],
                  ["Commercial cafeteria walls", "Class C", "Yes"],
                  ["Long-term care corridor (non-exit)", "Class B or C (verify)", "Verify with AHJ"],
                  ["Hospital non-clinical corridor", "Class B or C (verify)", "Verify with AHJ"],
                  ["Exit stairwell / exit corridor", "Class A", "No — use Class A finish"],
                  ["Assembly hall / auditorium (high occupancy)", "Class A", "No — use Class A finish"],
                  ["School corridor", "Class A or B (verify)", "Often no — use Class A or B"],
                ].map(([k, v1, v2], i) => (
                  <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 font-semibold text-[#1e3a5f]">{k}</td>
                    <td className="py-3 px-4 text-gray-700">{v1}</td>
                    <td className="py-3 px-4 text-gray-700">{v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>This table is a starting point — always verify the specific requirement with the Authority Having Jurisdiction (the local building department) for your occupancy classification, sprinkler status, and building height/area. A sprinklered building often gets a one-class reduction allowance under the OBC; an unsprinklered high-occupancy space may need a higher class than the table suggests.</p>
          <h2>Is Class C &ldquo;Less Safe&rdquo; Than Class A?</h2>
          <p>This is the most common question we get from facility managers, and the honest answer is no — for the right occupancy. The fire-rating classes are a building-code tool for matching surface flame-spread performance to the consequences of failure in a given space. A Class C panel in a kitchen is not &ldquo;less safe&rdquo; than a Class A panel in an exit corridor; they are correctly rated for different jobs. Specifying a Class A panel in a commercial kitchen does not make the kitchen safer — it just costs more money for a margin the code does not require.</p>
          <p>Where Class C is wrong is when the OBC requires Class A or B for the space — exit paths, assembly, certain school and care occupancies — and someone substitutes Class C anyway. That is a code violation and a real safety issue, but the failure is the substitution, not the panel itself.</p>
          <h2>How Class C Relates to CFIA Compliance</h2>
          <p>CFIA cares about the wall surface being smooth, non-absorbent, durable, and cleanable. It does not specify the fire rating — that is the OBC&apos;s job. But the CFIA-acceptable system spec we use for food facility installs is built on Class C FRP because it is the right OBC rating for almost every food-facility occupancy. Both reviews — CFIA wall surface and OBC §3.1.13 — pass with the same Class C panel installed to the system spec. Detail in our <a href="/blog/cfia-frp-installation-requirements" className="text-[#ff6b35] font-semibold">CFIA install requirements guide</a>.</p>
          <h2>Specifying the Right Rating for Your Project</h2>
          <p>If you are building or refitting in the GTA and not sure whether your space requires Class A, B, or C, the safest path is a 10-minute call with your architect or local building department before you spec the wall finish. Corevance regularly works alongside designers and AHJs to confirm the correct rating, supply the matching panel test reports, and install to the OBC and CFIA spec. Call <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a> for a free spec review.</p>
        </>
      );
    default:
      return (
        <p className="text-gray-600 italic">Full article content coming soon. For immediate information, call Corevance at <a href="tel:4378493781" className="text-[#ff6b35] font-semibold">437-849-3781</a>.</p>
      );
  }
}

const postMeta: Record<string, { title: string; description: string; category: string; readTime: string; keywords: string[] }> = {
  "frp-vs-tile-commercial-kitchen": { title: "FRP vs. Tile for Commercial Kitchens: The Complete 2025 Comparison", description: "FRP panels vs ceramic tile for commercial kitchens — comparison table, CFIA compliance, 10-year cost analysis, and when to choose each. From Corevance, GTA's FRP specialist.", category: "Comparison", readTime: "8 min read", keywords: ["FRP vs tile commercial kitchen", "FRP panel vs ceramic tile", "commercial kitchen wall panel comparison", "CFIA FRP tile"] },
  "what-is-frp-wall-panel": { title: "What Are FRP Wall Panels? Complete Guide for Commercial Facilities", description: "FRP wall panels explained — materials, standards, sizes, CFIA compliance, and commercial applications. Everything facility managers and contractors need to know.", category: "Guide", readTime: "10 min read", keywords: ["what is FRP panel", "FRP wall panel guide", "fiberglass reinforced panel Canada", "FRP panel CFIA"] },
  "cfia-frp-installation-requirements": { title: "CFIA FRP Installation Requirements for Canadian Food Facilities", description: "What makes an FRP install CFIA-compliant under SFCA/SFCR — panels, PVC mouldings, nylon rivets, adhesive, documentation, and a 10-point install checklist.", category: "Compliance", readTime: "9 min read", keywords: ["CFIA FRP requirements", "FRP panels CFIA approved", "CFIA food facility wall panels", "FRP SFCA compliance", "CFIA wall surface inspection"] },
  "how-to-install-frp-panels": { title: "How to Install FRP Wall Panels: Commercial Installation Guide", description: "Step-by-step commercial FRP install — tools, substrate prep, cutting, adhesive, mouldings, nylon rivets, expansion gap, and food-safe sealing. Contractor-ready.", category: "How-To", readTime: "12 min read", keywords: ["how to install FRP panels", "FRP installation guide", "FRP panel installation commercial", "FRP installation steps", "CFIA FRP install"] },
  "frp-panel-cost-toronto": { title: "FRP Panel Installation Cost in Toronto (2025 Pricing Guide)", description: "FRP wall panel installation costs in Toronto 2025 — $8–$18/sq ft installed. Cost breakdown by scope, wall condition, and panel type.", category: "Pricing", readTime: "6 min read", keywords: ["FRP installation cost Toronto", "FRP panel pricing Toronto", "commercial FRP cost 2025", "how much does FRP installation cost"] },
  "class-c-fire-rating-explained": { title: "Class C Fire Rating for FRP Panels: What It Means for Your Building", description: "Class C fire rating explained — ASTM E84 / CAN/ULC-S102 method, flame spread and smoke developed thresholds, and which Ontario occupancies accept Class C.", category: "Standards", readTime: "8 min read", keywords: ["Class C fire rating FRP", "ASTM E84 FRP", "FRP fire rating Canada", "Class A vs Class C FRP", "CAN/ULC-S102 FRP", "OBC 3.1.13 FRP"] },
  "frp-vs-trusscore-pvc-canadian-installer": { title: "FRP vs Trusscore PVC: When FRP Is Actually the Better Choice (Canadian Installer View)", description: "FRP vs Trusscore PVC compared by a Canadian installer — fire rating, CFIA acceptance, cost, impact resistance, and when each one wins for GTA commercial kitchens.", category: "Comparison", readTime: "9 min read", keywords: ["FRP vs Trusscore", "FRP vs PVC wall panel", "Trusscore alternative Canada", "commercial wall panel GTA", "Class C FRP vs Class A PVC"] },
  "class-c-frp-ontario-building-code": { title: "Class C FRP and the Ontario Building Code: What §3.1.13 Actually Requires", description: "Ontario Building Code §3.1.13 explained for FRP wall panels — flame spread, smoke developed, ASTM E84 / CAN/ULC-S102 testing, and when Class C is enough vs Class A.", category: "Compliance", readTime: "8 min read", keywords: ["Class C FRP Ontario", "Ontario Building Code 3.1.13", "CAN/ULC-S102 FRP", "ASTM E84 FRP Ontario", "FRP flame spread Ontario"] },
  "frp-panels-gta-car-washes": { title: "FRP Panels for GTA Car Washes: Why Pebbled Class C Beats Drywall and Tile", description: "GTA car wash walls fail fast with drywall and tile. Class C pebbled FRP holds up to chemical soaps, freeze-thaw, and 24/7 moisture for 15+ years at $8–$14/sq ft.", category: "Guide", readTime: "9 min read", keywords: ["FRP car wash GTA", "car wash wall panels Toronto", "pebbled FRP car wash", "car wash tunnel wall finish", "FRP vs tile car wash"] },
  "frp-installation-mistakes-gta-kitchens": { title: "Top 7 FRP Installation Mistakes We Fix Most Often in GTA Restaurant Kitchens", description: "The 7 most common FRP install failures in GTA commercial kitchens — wrong adhesive, missing PVC mouldings, bad substrate prep — and what they cost to fix.", category: "How-To", readTime: "10 min read", keywords: ["FRP installation mistakes", "FRP install failure GTA", "commercial kitchen FRP repair", "CFIA FRP inspection failure", "FRP installer Toronto"] },
  "frp-panels-schools-daycares-ontario": { title: "FRP for Ontario Daycares and Schools: Cleanability, Impact Resistance, and Ministry Compliance", description: "Class C FRP for Ontario daycares and K-8 schools — cleanability for post-2020 disinfection, impact resistance for corridors, weekend installs, and Ministry compliance.", category: "Guide", readTime: "10 min read", keywords: ["FRP daycare Ontario", "FRP school wall panels", "Ontario school FRP", "daycare wall finish CCEYA", "school corridor wainscot FRP"] },
  "how-to-clean-frp-panels-sop": { title: "How to Clean Class C FRP Panels Without Voiding the Warranty (Cleaning SOP for GTA Operators)", description: "FRP panel cleaning SOP for GTA operators — safe chemicals, daily wipedown, weekly deep clean, monthly inspection, and what voids the manufacturer warranty.", category: "How-To", readTime: "9 min read", keywords: ["how to clean FRP panels", "FRP cleaning SOP", "FRP warranty cleaning", "CFIA FRP cleaning procedure", "commercial kitchen FRP cleaning"] },
  "frp-panels-healthcare-facilities-ontario": { title: "FRP Panels for GTA Healthcare Facilities: Infection Control, Impact Resistance, and Ontario Hospital Standards", description: "Where Class C FRP fits in Ontario healthcare — CSA Z8000, IPAC Canada, OBC §3.1.13, plus the zones where Altro Whiterock or specialized cladding is required instead.", category: "Compliance", readTime: "9 min read", keywords: ["FRP panels healthcare Ontario", "hospital FRP wall panels", "CSA Z8000 wall finishes", "IPAC FRP", "long-term care wall panels Ontario"] },
};

export async function generateStaticParams() {
  return Object.keys(postMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = postMeta[slug];
  if (!meta) return { title: "Not Found" };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://corevance.ca/blog/${slug}` },
    keywords: meta.keywords,
    openGraph: {
      title: `${meta.title} | Corevance`,
      description: meta.description,
      url: `https://corevance.ca/blog/${slug}`,
      type: "article",
      siteName: "Corevance",
      images: [{ url: "/corevance-logo-full.png", width: 1200, height: 630 }],
      locale: "en_CA",
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = postMeta[slug];
  if (!meta) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    author: { "@type": "Organization", name: "Corevance", url: "https://corevance.ca" },
    publisher: { "@type": "Organization", name: "Corevance", logo: { "@type": "ImageObject", url: "https://corevance.ca/corevance-logo-symbol.png" } },
    datePublished: "2025-06-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `https://corevance.ca/blog/${slug}`,
    mainEntityOfPage: `https://corevance.ca/blog/${slug}`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3">
          <Link href="/" aria-label="Corevance home">
            <Image src="/corevance-logo-symbol.png" alt="Corevance" width={278} height={61} priority className="object-contain w-[150px] h-auto sm:w-[220px] lg:w-[278px]" />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <span className="hidden sm:block text-sm font-semibold text-[#1e3a5f] uppercase">Call us now</span>
            <a href="tel:4378493781" className="bg-[#ff6b35] text-white font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm hover:bg-[#e55a28] transition-all no-underline">437-849-3781</a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#0d1b2a] to-[#1e3a5f] py-16 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors no-underline">← All Resources</Link>
              <span className="text-white/30">·</span>
              <span className="text-[#ff6b35] text-sm font-semibold">{meta.category}</span>
              <span className="text-white/30">·</span>
              <span className="text-white/60 text-sm">{meta.readTime}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">{meta.title}</h1>
            <p className="mt-4 text-white/70 text-sm">By <strong className="text-white">Corevance</strong> — Commercial FRP Specialists, Greater Toronto Area</p>
          </div>
        </section>

        <section className="py-12 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-slate max-w-none prose-h2:text-[#1e3a5f] prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-[#1e3a5f]">
              <PostContent slug={slug} />
            </div>

            <div className="mt-12 bg-[#1e3a5f] rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Get a Free FRP Quote</h2>
              <p className="text-white/70 mb-6 text-sm">Corevance provides free on-site assessments and detailed quotes within 24 hours for commercial FRP projects across the GTA.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/#contact" className="bg-[#ff6b35] text-white font-bold px-7 py-3 rounded-full hover:bg-[#e55a28] transition-all no-underline text-sm">Request Free Consultation</a>
                <Link href="/estimate" className="border-2 border-white text-white font-bold px-7 py-3 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all no-underline text-sm">Estimate Materials</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-5 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-500 text-sm font-semibold mb-4">Related Resources</p>
            <div className="flex flex-wrap gap-3">
              {Object.entries(postMeta).filter(([s]) => s !== slug).slice(0, 3).map(([s, m]) => (
                <Link key={s} href={`/blog/${s}`} className="bg-white border border-gray-200 hover:border-[#ff6b35] text-[#1e3a5f] font-semibold px-4 py-2 rounded-full text-xs transition-all no-underline">{m.title.split(":")[0]}</Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t-4 border-[#ff6b35] py-8 px-5 text-center">
        <p className="text-[#1e3a5f] font-semibold text-sm">© 2025 Corevance. All rights reserved.</p>
        <p className="text-gray-400 text-xs mt-1">
          <a href="tel:4378493781" className="hover:text-[#ff6b35] transition-colors">437-849-3781</a>
          {" · "}<Link href="/" className="hover:text-[#ff6b35] transition-colors">Home</Link>
          {" · "}<Link href="/blog" className="hover:text-[#ff6b35] transition-colors">Resources</Link>
        </p>
      </footer>
    </div>
  );
}
