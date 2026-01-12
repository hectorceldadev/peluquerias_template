import { ReactNode } from "react";

interface BeautySoftProps {
  children: ReactNode;
}

export default function BeautySoft({ children }: BeautySoftProps) {
  return (
    <div className="relative w-full min-h-screen bg-background">
      
      {/* --- PATRÓN DE PUNTOS (Dots Pattern) --- */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage: `radial-gradient(circle, var(--secondary) 1px, transparent 1px)`,
             backgroundSize: '24px 24px' // Separación entre puntos
           }}
      >
        {/* Viñeta para suavizar los bordes (Efecto Halo) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
      </div>

      {/* --- EL CONTENIDO --- */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}