import { ReactNode } from "react";

interface CleanNoiseProps {
  children: ReactNode;
}

export default function CleanNoise({ children }: CleanNoiseProps) {
  return (
    <div className="relative w-full min-h-screen bg-background">
      
      {/* --- CAPA DE TEXTURA --- */}
      {/* Absolute + h-full para que cubra todo el scroll */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />

      {/* --- EL CONTENIDO --- */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}