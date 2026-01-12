import { ReactNode } from "react";

interface UrbanGridProps {
  children: ReactNode;
}

export default function UrbanGrid({ children }: UrbanGridProps) {
  return (
    // 1. CONTENEDOR PRINCIPAL (Wrapper)
    // Es relative para ser la referencia del grid absoluto.
    // min-h-screen asegura que cubra al menos toda la pantalla si hay poco contenido.
    <div className="relative w-full min-h-screen bg-background selection:bg-primary/20">
      
      {/* 2. LA CAPA DEL GRID (Fondo) */}
      {/* absolute inset-0 hace que ocupe el 100% del padre (que crece con el scroll) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "35px 35px",
        }}
      >
        {/* Viñeta opcional: Oscurece los bordes para centrar la atención (puedes quitarla si prefieres grid puro) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
      </div>

      {/* 3. EL CONTENIDO (Tus páginas) */}
      {/* z-10 para que los botones y textos estén ENCIMA del grid */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}