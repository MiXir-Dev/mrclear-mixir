export type ServiceAreaSlug =
  | "laval"
  | "montreal"
  | "repentigny"
  | "terrebonne"
  | "mascouche"
  | "assomption"
  | "boisbriand"
  | "lorraine"
  | "rosemere"
  | "bois-des-filion";

export interface ServiceArea {
  slug: ServiceAreaSlug;
  name: string;
  path: `/lavage-de-vitres-${ServiceAreaSlug}`;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { slug: "laval", name: "Laval", path: "/lavage-de-vitres-laval" },
  { slug: "montreal", name: "Montréal", path: "/lavage-de-vitres-montreal" },
  { slug: "repentigny", name: "Repentigny", path: "/lavage-de-vitres-repentigny" },
  { slug: "terrebonne", name: "Terrebonne", path: "/lavage-de-vitres-terrebonne" },
  { slug: "mascouche", name: "Mascouche", path: "/lavage-de-vitres-mascouche" },
  { slug: "assomption", name: "L'Assomption", path: "/lavage-de-vitres-assomption" },
  { slug: "boisbriand", name: "Boisbriand", path: "/lavage-de-vitres-boisbriand" },
  { slug: "lorraine", name: "Lorraine", path: "/lavage-de-vitres-lorraine" },
  { slug: "rosemere", name: "Rosemère", path: "/lavage-de-vitres-rosemere" },
  {
    slug: "bois-des-filion",
    name: "Bois-des-Filion",
    path: "/lavage-de-vitres-bois-des-filion",
  },
];

// Roll out local SEO gradually: phase 1 towns go indexable first.
export const STRATEGY_B_PHASE1_SERVICE_AREA_SLUGS: ServiceAreaSlug[] = [
  "montreal",
  "laval",
  "terrebonne",
  "repentigny",
  "mascouche",
];

export const INDEXABLE_SERVICE_AREA_SLUGS = STRATEGY_B_PHASE1_SERVICE_AREA_SLUGS;

export const SERVICE_AREAS_BY_SLUG: Record<ServiceAreaSlug, ServiceArea> =
  SERVICE_AREAS.reduce((acc, area) => {
    acc[area.slug] = area;
    return acc;
  }, {} as Record<ServiceAreaSlug, ServiceArea>);

export const isServiceAreaSlug = (slug: string): slug is ServiceAreaSlug =>
  Object.prototype.hasOwnProperty.call(SERVICE_AREAS_BY_SLUG, slug);

export const getServiceAreaBySlug = (slug: string) =>
  isServiceAreaSlug(slug) ? SERVICE_AREAS_BY_SLUG[slug] : undefined;
