import Navbar from "@/components/NavBar";
import "./globals.css";
// import { GoogleAnalytics } from '@next/third-parties/google';
import { SITE_CONFIG } from "@/config";
import type { Metadata } from "next";
import BackgroundWrapper from "@/components/backgrounds/BackgroundWrapper";

export const metadata: Metadata = {
  //** metadataBase: new URL(SITE_CONFIG.business.url), 

  title: {
    default: SITE_CONFIG.business.name, 
    template: SITE_CONFIG.seo.titleTemplate, 
  },
  description: SITE_CONFIG.seo.defaultDescription,
  keywords: SITE_CONFIG.seo.keywords,

  openGraph: {
    title: SITE_CONFIG.business.name,
    description: SITE_CONFIG.seo.defaultDescription,
    url: SITE_CONFIG.business.url,
    siteName: SITE_CONFIG.business.name,
    locale: SITE_CONFIG.seo.locale,
    type: "website",
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.business.name} - ${SITE_CONFIG.business.city}`
      }
    ]
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon", //* Definir tipo de negocio
  "name": SITE_CONFIG.business.name,
  "image": `${SITE_CONFIG.business.url}/imagen del negocio`, //* Poner imagen del negocio 
  "@id": SITE_CONFIG.business.url,
  "url": SITE_CONFIG.business.url,
  "telephone": SITE_CONFIG.business.phone,
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE_CONFIG.business.address,
    "addressLocality": SITE_CONFIG.business.city,
    "postalCode": SITE_CONFIG.business.postalCode, 
    "addressCountry": SITE_CONFIG.business.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": SITE_CONFIG.business.geo.latitude,
    "longitude": SITE_CONFIG.business.geo.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": SITE_CONFIG.business.schedule.weekdays.split(' - ')[0], // Truco para sacar la hora
      "closes": SITE_CONFIG.business.schedule.weekdays.split(' - ')[1]
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": SITE_CONFIG.business.schedule.saturday.split(' - ')[0],
      "closes": SITE_CONFIG.business.schedule.saturday.split(' - ')[1]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {/* Inyección del Schema Automático */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundWrapper >
          <Navbar />
            {children}
           {/* <Footer /> */}
        </BackgroundWrapper>
        
        {/* <GoogleAnalytics gaId={SITE_CONFIG.analyticsId} /> */}
      </body>
    </html>
  );
}