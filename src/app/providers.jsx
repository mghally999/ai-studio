"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const THEMES = [
  {
    id: "noir",
    label: "Noir",
    brandName: "NOIR SUITE",
    tagline: "Stealth & contrast",
    fontUi: "var(--font-space)",
  },
  {
    id: "cobalt",
    label: "Cobalt",
    brandName: "COBALT LAB",
    tagline: "Dark blue energy",
    fontUi: "var(--font-jakarta)",
  },
  {
    id: "ultra",
    label: "Ultra",
    brandName: "ULTRAVIOLET",
    tagline: "Purple glow mode",
    fontUi: "var(--font-sora)",
  },
  {
    id: "ice",
    label: "Ice",
    brandName: "ICE STUDIO",
    tagline: "White + cool blue",
    fontUi: "var(--font-plex)",
  },
];

const ThemeContext = createContext(null);

function applyTheme(themeId, fontUi) {
  document.documentElement.dataset.theme = themeId;
  document.documentElement.style.setProperty("--font-ui", fontUi);
}

export default function Providers({ children }) {
  const [themeId, setThemeId] = useState(() => {
    if (typeof window === "undefined") return "noir";
    try {
      return localStorage.getItem("ai_studio_theme") || "noir";
    } catch {
      return "noir";
    }
  });

  const active = useMemo(
    () => THEMES.find((t) => t.id === themeId) || THEMES[1],
    [themeId],
  );

  useEffect(() => {
    applyTheme(themeId, active.fontUi);
    try {
      localStorage.setItem("ai_studio_theme", themeId);
    } catch {}
  }, [themeId, active.fontUi]);

  const value = useMemo(
    () => ({ themes: THEMES, themeId, setThemeId, active }),
    [themeId, active],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <Providers />");
  return ctx;
}
