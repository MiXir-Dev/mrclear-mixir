export const RESIDENTIAL_SERVICES = [
  "Nettoyage de vitres extérieures",
  "Nettoyage de vitres intérieures",
  "Nettoyage de cadres et rebords",
  "Nettoyage de moustiquaires",
] as const;

export const COMMERCIAL_SERVICES = [
  "Nettoyage de façades vitrées",
  "Nettoyage de fenêtres en hauteur",
  "Contrats d'entretien régulier",
  "Horaires adaptés à votre entreprise",
] as const;

export const SERVICE_AREA_BENEFITS = [
  {
    title: "Personnel qualifié",
    description: "Notre équipe est formée aux meilleures techniques.",
    icon: "check",
  },
  {
    title: "Service rapide",
    description: "Intervention rapide et efficace.",
    icon: "bolt",
  },
  {
    title: "Prix compétitifs",
    description: "Excellent rapport qualité-prix.",
    icon: "coin",
  },
] as const;

export const SERVICE_AREA_TESTIMONIALS = [
  {
    quote:
      "Service exceptionnel! L'équipe de Mr. Clear a nettoyé toutes les vitres de ma maison avec un résultat impeccable.",
    author: "— Marie T.",
  },
  {
    quote:
      "Très satisfait du travail effectué. Professionnels, rapides et efficaces. Mes fenêtres n'ont jamais été aussi propres!",
    author: "— Michel G.",
  },
] as const;
