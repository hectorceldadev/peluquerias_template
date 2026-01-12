"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/config";
import { THEMES, ThemeKey } from "@/constants/colors";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  
  useEffect(() => {
    // 1. Leemos el color del config (ej: "amarillo")
    const themeName = SITE_CONFIG.design.themeColor as ThemeKey;
    
    // 2. Buscamos la paleta. Si no existe (error humano), usamos 'violeta' por defecto
    const theme = THEMES[themeName] || THEMES.violeta;

    // 3. Inyectamos las variables en el HTML
    const root = document.documentElement;
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.foreground);
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--muted", theme.muted);

  }, []);

  return <>{children}</>;
}