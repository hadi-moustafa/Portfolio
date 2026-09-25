"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { accents, presets, parseCombo, comboId, isPreset } from "@/lib/theme";

export default function ThemeDock() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { mode, accent } = parseCombo(theme);
  const preset = isPreset(theme) ? theme : null;

  return (
    <div className="fixed bottom-28 left-4 sm:bottom-6 sm:left-6 z-[100]">
      {open && (
        <div className="mb-2 w-56 max-w-[80vw] rounded-[10px] border border-line bg-bg2/95 backdrop-blur-sm p-3.5 shadow-2xl">
          <div className="mb-3">
            <div className="font-mono text-[0.62rem] text-ink-dim uppercase tracking-wide mb-1.5">
              mode
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setTheme(comboId("dark", accent))}
                className={`flex-1 py-1.5 rounded-md text-xs font-mono border ${
                  !preset && mode === "dark"
                    ? "border-amber text-amber"
                    : "border-line text-ink-dim"
                }`}
              >
                ☾ dark
              </button>
              <button
                onClick={() => setTheme(comboId("light", accent))}
                className={`flex-1 py-1.5 rounded-md text-xs font-mono border ${
                  !preset && mode === "light"
                    ? "border-amber text-amber"
                    : "border-line text-ink-dim"
                }`}
              >
                ☀ light
              </button>
            </div>
          </div>

          <div className="mb-3">
            <div className="font-mono text-[0.62rem] text-ink-dim uppercase tracking-wide mb-1.5">
              accent
            </div>
            <div className="flex gap-2.5">
              {accents.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setTheme(comboId(mode === "light" ? "light" : "dark", a.id))}
                  aria-label={a.id}
                  className={`w-6 h-6 rounded-full border-2 ${
                    !preset && accent === a.id ? "border-ink" : "border-transparent"
                  }`}
                  style={{ background: a.swatch }}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="font-mono text-[0.62rem] text-ink-dim uppercase tracking-wide mb-1.5">
              themes
            </div>
            <div className="grid grid-cols-2 gap-2">
              {presets.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setTheme(p.id)}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs border ${
                    preset === p.id ? "border-amber text-amber" : "border-line text-ink-dim"
                  }`}
                >
                  <span>{p.icon}</span>
                  <span className="truncate">{p.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 bg-bg2/85 backdrop-blur-sm border border-line rounded-[10px] px-2.5 py-2"
        aria-label="Theme settings"
      >
        <span className="font-mono text-[0.65rem] text-ink-dim pr-1">theme</span>
        <span
          className="w-3.5 h-3.5 rounded-[4px] border-2 border-bg"
          style={{ background: preset ? "var(--amber)" : accents.find((a) => a.id === accent)?.swatch }}
        />
        <span className="w-[26px] h-[26px] rounded-md flex items-center justify-center text-xs font-mono text-ink-dim">
          {mode === "dark" && !preset ? "☾" : "☀"}
        </span>
      </button>
    </div>
  );
}
