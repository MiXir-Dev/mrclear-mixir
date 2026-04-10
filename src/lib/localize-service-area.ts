interface WithCityOptions {
  preposition?: "a" | "de";
}

const PREPOSITIONS = {
  a: "à",
  de: "de",
} as const;

const HOME_VARIANT_PREFIX = "/lavage-de-vitres-";

export const withCity = (
  text: string,
  city?: string,
  options: WithCityOptions = {}
) => {
  if (!city) return text;

  const preposition = PREPOSITIONS[options.preposition ?? "a"];
  return `${text} ${preposition} ${city}`;
};

export const localizeHeading = (base: string, city?: string) =>
  withCity(base, city);

export const localizeFaqQuestion = (base: string, city?: string) =>
  withCity(base, city);

export const localizeMetaTitle = (
  fallback: string,
  area?: { fullTitleVariant: string }
) => area?.fullTitleVariant ?? fallback;

export const localizeMetaDescription = (
  fallback: string,
  area?: { metaDescription: string }
) => area?.metaDescription ?? fallback;

export const isHomeVariantPath = (pathname: string) =>
  pathname === "/" || pathname.startsWith(HOME_VARIANT_PREFIX);
