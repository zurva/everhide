// Maps human-readable color names found in product data to a CSS color
// for rendering small swatch circles next to color labels.
const COLOR_MAP: Record<string, string> = {
  black: "#000000",
  white: "#ffffff",
  brown: "#6b3a1f",
  "dark brown": "#3e2212",
  "light brown": "#a87147",
  tan: "#d2a679",
  beige: "#e8d5b7",
  cream: "#f5e6cf",
  camel: "#c19a6b",
  cognac: "#9a463d",
  burgundy: "#5e1a1a",
  red: "#c0392b",
  "dark red": "#8b0000",
  maroon: "#800000",
  orange: "#e67e22",
  yellow: "#f1c40f",
  gold: "#c9a84c",
  green: "#2e8b57",
  "dark green": "#1b4332",
  olive: "#6b7a3a",
  blue: "#1e4d8b",
  "dark blue": "#0d2a52",
  navy: "#0a1f44",
  "royal blue": "#1d4ed8",
  grey: "#7f8c8d",
  gray: "#7f8c8d",
  "dark grey": "#3d3d3d",
  "dark gray": "#3d3d3d",
  "light grey": "#bdc3c7",
  "light gray": "#bdc3c7",
  silver: "#c0c0c0",
  pink: "#e8a4b8",
  purple: "#6b3fa0",
};

const PALETTE = ["#c0392b", "#1e4d8b", "#2e8b57", "#e67e22", "#6b3fa0", "#c9a84c"];

const norm = (s: string) => s.trim().toLowerCase();

export const getColorSwatch = (label: string): { color: string; isMulti: boolean; second?: string } => {
  const cleaned = label
    .replace(/\(.*?\)/g, "")
    .replace(/\bon (request|buyer request)\b/gi, "")
    .trim();

  // Multi-tone like "Black / Orange"
  if (cleaned.includes("/")) {
    const parts = cleaned.split("/").map(norm);
    const a = COLOR_MAP[parts[0]] ?? fallback(parts[0]);
    const b = COLOR_MAP[parts[1]] ?? fallback(parts[1]);
    return { color: a, isMulti: true, second: b };
  }

  const key = norm(cleaned);
  if (COLOR_MAP[key]) return { color: COLOR_MAP[key], isMulti: false };

  // Try matching any known color word inside the label
  for (const k of Object.keys(COLOR_MAP)) {
    if (key.includes(k)) return { color: COLOR_MAP[k], isMulti: false };
  }

  return { color: fallback(key), isMulti: false };
};

function fallback(key: string) {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}
