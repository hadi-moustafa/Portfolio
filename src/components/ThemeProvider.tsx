"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_THEME, type ThemeId } from "@/lib/theme";

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext<{
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
}>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export const NO_FLASH_SCRIPT = `
(function () {
  try {
    var t = localStorage.getItem("${STORAGE_KEY}") || "${DEFAULT_THEME}";
    document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
`;

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    // The DOM's data-theme attribute is already set correctly pre-hydration by
    // NO_FLASH_SCRIPT; this just syncs React state to match so UI controls
    // (e.g. ThemeDock's active-selection highlight) reflect the real theme.
    // Reading localStorage during render instead would cause a hydration
    // mismatch, since the server has no access to it.
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemeId | null) ?? DEFAULT_THEME;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setThemeState(stored);
  }, []);

  const setTheme = (t: ThemeId) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem(STORAGE_KEY, t);
  };

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
