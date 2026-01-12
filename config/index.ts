import { ThemeKey } from "@/constants/colors";

export interface SiteConfig {
  business: {
    name: string;
    description: string;
    url: string;
    city: string;
    address: string;
    postalCode: string;
    country: string;
    phone: string;
    whatsapp: string;
    googleMapsLink: string;
    geo: {
      latitude: string;
      longitude: string;
    };
    schedule: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };

  seo: {
    titleTemplate: string;
    defaultDescription: string;
    keywords: string[];
    locale: string;
  };

  design: {
    backgroundVariant: 'urban' | 'beauty' | 'clean'; // Tipado estricto: solo permite estas 3 opciones
    themeColor: ThemeKey; // Tipado estricto
  };

  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };

  navigation: NavigationItem[];
  
  cta: {
    label: string;
    whatsappMessage: string;
  };

  services: ServiceItem[];
}

// Sub-tipos reutilizables
export interface NavigationItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  description: string;
  iconName: string; // Haremos el match con el diccionario de iconos
}

export const SITE_CONFIG: SiteConfig = {
  // 1. Datos del Negocio
  business: {
    name: "[ Nombre ]",
    description: "Barbería especialista en degradados y arreglos de barba.",
    url: "http://localhost:3000",
    city: "[Silla]",
    address: "[Av. Luis Vives 14]",
    postalCode: "[46460]",
    country: "ES",
    phone: "[+34 600 87 79 77]",
    whatsapp: "[34600877977]", // Sin el +
    googleMapsLink: "https://maps.app.goo.gl/...",
    
    geo: {
      latitude: "39.36", 
      longitude: "-0.41"
    },

    schedule: {
      weekdays: "10:00 - 20:00",
      saturday: "09:00 - 14:00",
      sunday: "Cerrado"
    }
  },

  // 2. Configuración SEO
  seo: {
    titleTemplate: "%s | Celda Barber",
    defaultDescription: "La mejor referencia de peluquería masculina y estética en Silla.",
    keywords: ["Barbería", "Peluquería", "Cortes Modernos", "Silla"],
    locale: "es_ES"
  },

  // 3. Textos Hero
  hero: {
    badge: "Peluquería en Ciudad Est. 2026",
    title: "Tu Estilo \nDefinitivo",
    subtitle: "Especialistas en imagen personal. Tu sitio de confianza.",
    ctaPrimary: "Reservar Cita",
    ctaSecondary: "Ver Servicios"
  },

  // 4. Navegación
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Servicios", href: "/servicios" }, // <--- Esto activa el desplegable en el Navbar
    { name: "Galería", href: "/galeria" },
    { name: "Contacto", href: "/contacto" },
  ],

  // --- LO QUE FALTABA (AÑADIDO AHORA) ---

  // 5. Configuración del Botón de Acción (Navbar)
  cta: {
    label: "Reservar Cita",
    whatsappMessage: "Hola, vengo de la web y me gustaría reservar una cita."
  },

  // 6. Lista de Servicios (Para el Desplegable del Navbar)
  services: [
    {
      id: "[Servicio 1]",
      title: "[Servicio 1]",
      price: "15€",
      iconName: "Scissors", // Nombre exacto del icono de Lucide
      description: "[Descripción Servicio 1]"
    },
    {
      id: "[Servicio 2]",
      title: "[Servicio 2]",
      price: "17€",
      iconName: "Sparkles",
      description: "[Descripción Servicio 2]"
    },
    {
      id: "[Servicio 3]",
      title: "[Servicio 3]",
      price: "10€",
      iconName: "User",
      description: "[Descripción Servicio 3]"
    },
    {
      id: "[Servicio 4]",
      title: "[Servicio 4]",
      price: "25€",
      iconName: "SprayCan",
      description: "[Descripción Servicio 4]"
    }
  ],
  design: {
  backgroundVariant: "urban", 
  themeColor: 'morado'
}
}