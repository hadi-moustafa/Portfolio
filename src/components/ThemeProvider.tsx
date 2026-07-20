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
    const stored = (localStorage.getItem(STORAGE_KEY) as ThemeId | null) ?? DEFAULT_THEME;
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
