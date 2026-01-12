// constants/colors.ts

export const THEMES = {
  // 1. AMARILLO (Dark Gold) - ✅ OK
  amarillo: {
    background: "#0a0a0a",
    foreground: "#fafafa",
    primary: "#ca8a04",    // Yellow 600 (Oscurecido un poco para que el texto blanco se lea mejor)
    secondary: "#262626",
    muted: "#a3a3a3",
  },

  // 2. VERDE (Dark Emerald) - ✅ OK
  verde: {
    background: "#022c22",
    foreground: "#ecfdf5",
    primary: "#059669",    // Emerald 600 (Mejor contraste que el 500)
    secondary: "#064e3b",
    muted: "#6ee7b7",
  },

  // 3. NARANJA (Dark Orange) - ✅ OK
  naranja: {
    background: "#0c0a09",
    foreground: "#fafafa",
    primary: "#ea580c",    // Orange 600 (Más sólido)
    secondary: "#292524",
    muted: "#a8a29e",
  },

  // 4. ROJO (Dark Red) - ✅ OK
  rojo: {
    background: "#020617",
    foreground: "#fafafa",
    primary: "#dc2626",    // Red 600
    secondary: "#450a0a",
    muted: "#f87171",
  },

  // 5. AZUL (Dark Blue) - ✅ OK
  azul: {
    background: "#0f172a",
    foreground: "#f8fafc",
    primary: "#2563eb",    // Blue 600 (El estándar para texto blanco)
    secondary: "#1e293b",
    muted: "#94a3b8",
  },

  // 6. VIOLETA (Celda Original) - ✅ OK
  violeta: {
    background: "#020617",
    foreground: "#fafafa",
    primary: "#7c3aed",    // Violet 600
    secondary: "#2e1065",
    muted: "#a78bfa",
  },

  // 7. ROSA (Vibrant Pink) - ✅ OK
  rosa: {
    background: "#fdf2f8",
    foreground: "#831843",
    primary: "#db2777",    // Pink 600
    secondary: "#fce7f3",
    muted: "#f472b6",
  },

  // 8. ROSE (Pastel Elegant) - ✅ OK
  rose: {
    background: "#fff1f2",
    foreground: "#881337",
    primary: "#be123c",    // Rose 700 (Oscuro para elegancia y contraste)
    secondary: "#ffe4e6",
    muted: "#fb7185",
  },

  // 9. MORADO (Dark Purple) - ⚠️ CORREGIDO
  morado: {
    background: "#3b0764", // Purple 950
    foreground: "#f3e8ff",
    primary: "#9333ea",    // Purple 600 (Antes era 300 pastel, ilegible con texto blanco)
    secondary: "#581c87",
    muted: "#c084fc",
  },

  // 10. BLANCO (Clean) - ✅ OK
  blanco: {
    background: "#ffffff",
    foreground: "#0a0a0a",
    primary: "#171717",    // Neutral 900 (Botón Negro sobre fondo blanco = Perfecto)
    secondary: "#f5f5f5",
    muted: "#737373",
  },

  // 11. NEGRO (Luxury Monocromo) - ⚠️ CORREGIDO
  negro: {
    background: "#000000",
    foreground: "#ffffff",
    primary: "#404040",    // Neutral 700 (Gris oscuro). 
                           // Si poníamos Blanco (#fff), el texto blanco del botón desaparecía.
                           // Con Gris oscuro (#4040) se mantiene el look "All Black" y se lee.
    secondary: "#262626",
    muted: "#a3a3a3",
  },

  // 12. SLATE (Corporate) - ✅ OK
  slate: {
    background: "#0f172a",
    foreground: "#f8fafc",
    primary: "#475569",    // Slate 600
    secondary: "#1e293b",
    muted: "#94a3b8",
  }
};

export type ThemeKey = keyof typeof THEMES;