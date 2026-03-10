import { CONTACT, SOCIAL_LINKS } from "@/consts/contact";
import { SERVICE_AREAS } from "@/consts/service-areas";
import { SERVICE_TYPES } from "@/consts/services";

export const HOME_SEO = {
  title:
    "Mr. Clear | Service professionnel de lavage de vitres à Laval, Montréal et Rive-Nord",
  description:
    "Entreprise spécialisée en nettoyage de vitres résidentiel et commercial à Laval, Montréal et Rive-Nord. Devis gratuit, service fiable et résultats impeccables!",
  keywords:
    "lavage de vitres, nettoyage de vitres, lavage de fenêtres, prix lavage de vitres, Laval, Montréal, Terrebonne, Repentigny, service nettoyage vitres, entreprise lavage vitre, vidage de gouttières",
  ogTitle: "Mr. Clear - Service professionnel de lavage de vitres",
  ogDescription:
    "Service professionnel de nettoyage de vitres résidentiel et commercial à Terrebonne, Repentigny, sur toute la Rive-Nord, Laval et Montréal",
  ogUrl: "https://mr-clear.com",
  geoRegion: "CA-QC",
  geoPlacename:
    "Terrebonne, Repentigny, Rive-Nord, Laval, L'Assomption, Boisbriand, Lorraine, Rosemère, Bois-des-Fillion, Mascouche, Montréal",
  canonicalUrl: "https://mr-clear.com",
} as const;

export const HOME_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mr. Clear",
  description:
    "Service professionnel de nettoyage de vitres résidentiel et commercial à Laval, Montréal, Terrebonne, Repentigny et toute la Rive-Nord.",
  url: "https://mr-clear.com",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Quebec",
    addressLocality: "Laval, Montréal",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "45.606649",
    longitude: "-73.712409",
  },
  areaServed: SERVICE_AREAS.map((area) => area.name),
  serviceType: SERVICE_TYPES,
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
} as const;

export const buildServiceAreaStructuredData = (
  city: string,
  description: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `Service de lavage de vitres à ${city}`,
  description,
  provider: {
    "@type": "LocalBusiness",
    name: "Mr. Clear",
    image: "https://mr-clear.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: "Quebec",
      addressCountry: "CA",
    },
    telephone: CONTACT.phone,
    priceRange: "$$",
  },
  areaServed: {
    "@type": "City",
    name: city,
  },
  serviceType: "Lavage de vitres",
  offers: {
    "@type": "Offer",
    description: `Service professionnel de nettoyage de vitres à ${city}`,
    areaServed: city,
  },
});
