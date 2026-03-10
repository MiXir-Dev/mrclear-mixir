import { ServiceAreaPageContent } from "@/consts/service-area-content";
import {
  BASE_LOCAL_BUSINESS_STRUCTURED_DATA,
  HOME_SEO_DEFAULT,
  SITE_URL,
} from "@/consts/seo";
import {
  localizeMetaDescription,
  localizeMetaTitle,
} from "@/lib/localize-service-area";

export interface HomeSeoPayload {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  canonicalUrl: string;
  geoRegion: string;
  geoPlacename: string;
  structuredData: Record<string, unknown>;
}

const LOCAL_KEYWORDS = [
  "lavage de vitres",
  "nettoyage de vitres",
  "lavage de fenêtres",
  "nettoyage de fenêtres",
  "lavage de vitres résidentiel",
  "lavage de vitres commercial",
  "devis lavage de vitres",
] as const;

const withCityKeywords = (city: string) => {
  const localizedTerms = LOCAL_KEYWORDS.map((keyword) => `${keyword} ${city}`);
  return [...LOCAL_KEYWORDS, ...localizedTerms, city, "Rive-Nord"].join(", ");
};

export const getHomeSeo = (
  serviceArea?: ServiceAreaPageContent
): HomeSeoPayload => {
  const canonicalUrl = serviceArea
    ? `${SITE_URL}${serviceArea.path}`
    : HOME_SEO_DEFAULT.canonicalUrl;

  const description = localizeMetaDescription(
    HOME_SEO_DEFAULT.description,
    serviceArea
  );

  const title = localizeMetaTitle(HOME_SEO_DEFAULT.title, serviceArea);
  const ogTitle = serviceArea
    ? `Lavage de vitres à ${serviceArea.displayName} | Mr. Clear`
    : HOME_SEO_DEFAULT.ogTitle;

  const areaServed = serviceArea
    ? Array.from(
        new Set([
          serviceArea.displayName,
          ...(serviceArea.nearbyRegions ?? []),
          "Rive-Nord",
        ])
      )
    : [...BASE_LOCAL_BUSINESS_STRUCTURED_DATA.areaServed];

  return {
    title,
    description,
    keywords: serviceArea
      ? withCityKeywords(serviceArea.displayName)
      : HOME_SEO_DEFAULT.keywords,
    ogTitle,
    ogDescription: serviceArea ? description : HOME_SEO_DEFAULT.ogDescription,
    ogUrl: canonicalUrl,
    canonicalUrl,
    geoRegion: HOME_SEO_DEFAULT.geoRegion,
    geoPlacename: serviceArea
      ? `${serviceArea.displayName}, Québec, Canada`
      : HOME_SEO_DEFAULT.geoPlacename,
    structuredData: {
      ...BASE_LOCAL_BUSINESS_STRUCTURED_DATA,
      url: canonicalUrl,
      description,
      areaServed,
    },
  };
};
