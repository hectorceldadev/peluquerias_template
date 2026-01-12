import { ReactNode } from "react";
import { SITE_CONFIG } from "@/config";
import UrbanGrid from "@/components/backgrounds/UrbanGrid";
import BeautySoft from "./BeautySoft";
import CleanNoise from "./CleanNoise";

export default function BackgroundWrapper({ children }: { children: ReactNode }) {
  const { backgroundVariant } = SITE_CONFIG.design;

  if (backgroundVariant === "urban") {
    return <UrbanGrid>{children}</UrbanGrid>;
  }

  if (backgroundVariant === "beauty") {
    return <BeautySoft>{children}</BeautySoft>;
  }
  
  return <CleanNoise>{children}</CleanNoise>
}