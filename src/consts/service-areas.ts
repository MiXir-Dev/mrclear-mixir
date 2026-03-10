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
  path: `/secteurs/${ServiceAreaSlug}`;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { slug: "laval", name: "Laval", path: "/secteurs/laval" },
  { slug: "montreal", name: "Montréal", path: "/secteurs/montreal" },
  { slug: "repentigny", name: "Repentigny", path: "/secteurs/repentigny" },
  { slug: "terrebonne", name: "Terrebonne", path: "/secteurs/terrebonne" },
  { slug: "mascouche", name: "Mascouche", path: "/secteurs/mascouche" },
  { slug: "assomption", name: "L'Assomption", path: "/secteurs/assomption" },
  { slug: "boisbriand", name: "Boisbriand", path: "/secteurs/boisbriand" },
  { slug: "lorraine", name: "Lorraine", path: "/secteurs/lorraine" },
  { slug: "rosemere", name: "Rosemère", path: "/secteurs/rosemere" },
  {
    slug: "bois-des-filion",
    name: "Bois-des-Filion",
    path: "/secteurs/bois-des-filion",
  },
];

export const SERVICE_AREAS_BY_SLUG: Record<ServiceAreaSlug, ServiceArea> =
  SERVICE_AREAS.reduce((acc, area) => {
    acc[area.slug] = area;
    return acc;
  }, {} as Record<ServiceAreaSlug, ServiceArea>);

export const isServiceAreaSlug = (slug: string): slug is ServiceAreaSlug =>
  Object.prototype.hasOwnProperty.call(SERVICE_AREAS_BY_SLUG, slug);

export const getServiceAreaBySlug = (slug: string) =>
  isServiceAreaSlug(slug) ? SERVICE_AREAS_BY_SLUG[slug] : undefined;
