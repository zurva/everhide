// Maps human-readable color names found in product data to a CSS color
// for rendering small swatch circles next to color labels.
//
// Returns a CSS `background` string ready for inline style use. Handles:
//  - Single named colors (Black, Brown, Navy Blue, Burgundy, ...)
//  - Multi-tone slash combos with 2 or 3 segments (Black / Red / White)
//  - Special non-color labels (Custom, Camouflage, Stonewashed, On Request,
//    Full Black, Stealth, OEM bulk-order variants) which render either a
//    representative swatch or a multi-stripe "varies" indicator.

// Canonical color dictionary. Keys are lowercased.
const COLOR_MAP: Record<string, string> = {
  // Neutrals
  black: "#0a0a0a",
  white: "#ffffff",
  ivory: "#f5f0e1",
  cream: "#f5e6cf",
  beige: "#e8d5b7",
  tan: "#d2a679",
  camel: "#c19a6b",
  // Browns
  brown: "#6b3a1f",
  "dark brown": "#3e2212",
  "light brown": "#a87147",
  cognac: "#9a463d",
  chestnut: "#5a2d1a",
  "chestnut brown": "#5a2d1a",
  mocha: "#7a5230",
  "mocha mousse": "#a47864", // 2025 Pantone hue
  // Reds & burgundies
  red: "#c0392b",
  "dark red": "#8b0000",
  maroon: "#800000",
  burgundy: "#5e1a1a",
  merlot: "#73263d",
  "burgundy / merlot": "#6a1f30",
  "italian plum": "#5a2a4a",
  plum: "#5a2a4a",
  // Oranges / yellows
  orange: "#e67e22",
  "apricot crush": "#e8864d",
  apricot: "#e8864d",
  yellow: "#f1c40f",
  gold: "#c9a84c",
  // Greens
  green: "#2e8b57",
  "dark green": "#1b4332",
  "deep forest": "#1f3d2b",
  forest: "#1f3d2b",
  olive: "#6b7a3a",
  // Blues
  blue: "#1e4d8b",
  "dark blue": "#0d2a52",
  navy: "#0a1f44",
  "navy blue": "#0a1f44",
  "royal blue": "#1d4ed8",
  "electric blue": "#1f6feb",
  // Greys
  grey: "#7f8c8d",
  gray: "#7f8c8d",
  "dark grey": "#3d3d3d",
  "dark gray": "#3d3d3d",
  "light grey": "#bdc3c7",
  "light gray": "#bdc3c7",
  "pewter grey": "#8a8d8f",
  "pewter gray": "#8a8d8f",
  pewter: "#8a8d8f",
  silver: "#c0c0c0",
  // Pinks / purples
  pink: "#e8a4b8",
  purple: "#6b3fa0",
};

// Multi-stripe rainbow gradient used to indicate "varies / on request /
// custom / camouflage" — i.e. labels that don't resolve to a real single hue.
const VARIES_BG =
  "conic-gradient(from 45deg, #c0392b, #e67e22, #f1c40f, #2e8b57, #1e4d8b, #6b3fa0, #c0392b)";

// A subtle camo-like swatch for "Camouflage" labels.
const CAMO_BG =
  "radial-gradient(circle at 30% 30%, #6b7a3a 0 30%, transparent 31%), radial-gradient(circle at 70% 60%, #3e2212 0 28%, transparent 29%), linear-gradient(135deg, #4a5d23, #6b7a3a)";

// A washed-look swatch for "Stonewashed" finishes.
const STONEWASHED_BG =
  "linear-gradient(135deg, #6b6b6b 0%, #9aa0a6 50%, #cfcfcf 100%)";

const norm = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

// Strip parentheticals and trailing qualifier phrases so we can match the
// underlying color. e.g. "Full Black (Stealth Look)" -> "full black".
const stripQualifiers = (s: string) =>
  s
    .replace(/\(.*?\)/g, "")
    .replace(/\b(on (buyer )?request|bulk orders?|stealth look|stealth|edition|all black|racing edition|variations?)\b/gi, "")
    .replace(/[—\-:]+$/g, "")
    .trim();

const lookup = (raw: string): string | null => {
  const key = norm(raw);
  if (!key) return null;
  if (COLOR_MAP[key]) return COLOR_MAP[key];
  // Try matching the longest known color phrase contained in the label.
  const sorted = Object.keys(COLOR_MAP).sort((a, b) => b.length - a.length);
  for (const k of sorted) {
    // Match as a whole word/phrase, not a partial substring like "red" in "stretched".
    const re = new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`);
    if (re.test(key)) return COLOR_MAP[k];
  }
  return null;
};

export interface SwatchResult {
  /** Ready-to-use CSS `background` value. */
  background: string;
  /** Back-compat: solid color (first segment for multi-tone). */
  color: string;
  /** True if the label is a multi-tone combination. */
  isMulti: boolean;
  /** Back-compat: second segment for multi-tone (undefined otherwise). */
  second?: string;
}

export const getColorSwatch = (label: string): SwatchResult => {
  const original = label;
  const lowered = original.toLowerCase();

  // Special non-color / "varies" labels.
  if (/\bcustom\b/.test(lowered)) {
    return { background: VARIES_BG, color: "#888888", isMulti: false };
  }
  if (/\bcamou?flage\b/.test(lowered)) {
    return { background: CAMO_BG, color: "#6b7a3a", isMulti: false };
  }
  if (/\bstonewashed\b/.test(lowered)) {
    return { background: STONEWASHED_BG, color: "#9aa0a6", isMulti: false };
  }

  // Strip parentheticals and qualifiers, then handle multi-tone "/" splits.
  const cleaned = stripQualifiers(original);

  if (cleaned.includes("/")) {
    const parts = cleaned
      .split("/")
      .map((p) => p.trim())
      .filter(Boolean);

    // "Burgundy / Merlot" is a single named tone — try the joined key first.
    const joined = norm(parts.join(" / "));
    if (COLOR_MAP[joined]) {
      const c = COLOR_MAP[joined];
      return { background: c, color: c, isMulti: false };
    }

    const resolved = parts.map((p) => lookup(p) ?? "#888888");

    if (resolved.length === 2) {
      return {
        background: `linear-gradient(135deg, ${resolved[0]} 0%, ${resolved[0]} 50%, ${resolved[1]} 50%, ${resolved[1]} 100%)`,
        color: resolved[0],
        isMulti: true,
        second: resolved[1],
      };
    }

    if (resolved.length >= 3) {
      const a = resolved[0];
      const b = resolved[1];
      const c = resolved[2];
      return {
        background: `conic-gradient(from 0deg, ${a} 0deg 120deg, ${b} 120deg 240deg, ${c} 240deg 360deg)`,
        color: a,
        isMulti: true,
        second: b,
      };
    }
  }

  const single = lookup(cleaned);
  if (single) {
    return { background: single, color: single, isMulti: false };
  }

  // Final fallback: neutral grey rather than a misleading random color.
  return { background: "#9aa0a6", color: "#9aa0a6", isMulti: false };
};
