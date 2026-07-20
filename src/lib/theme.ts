export type Mode = "dark" | "light";
export type Accent = "amber" | "blue" | "green";
export type Preset = "autumn" | "winter" | "cozy" | "retro";
export type ThemeId = `${Mode}-${Accent}` | Preset;

export const DEFAULT_THEME: ThemeId = "dark-amber";

export const presets: { id: Preset; label: string; icon: string }[] = [
  { id: "autumn", label: "Autumn", icon: "🍂" },
  { id: "winter", label: "Winter", icon: "❄️" },
  { id: "cozy", label: "Cozy corner", icon: "☕" },
  { id: "retro", label: "Retro terminal", icon: "▮" },
];

export const accents: { id: Accent; swatch: string }[] = [
  { id: "amber", swatch: "#f59e0b" },
  { id: "blue", swatch: "#3b82f6" },
  { id: "green", swatch: "#22c55e" },
];

export function isPreset(theme: ThemeId): theme is Preset {
  return presets.some((p) => p.id === theme);
}

export function parseCombo(theme: ThemeId): { mode: Mode; accent: Accent } {
  if (isPreset(theme)) return { mode: "dark", accent: "amber" };
  const [mode, accent] = theme.split("-") as [Mode, Accent];
  return { mode, accent };
}

export function comboId(mode: Mode, accent: Accent): ThemeId {
  return `${mode}-${accent}`;
}
