export interface ServiceArea {
  name: string;
  path: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Laval", path: "/secteurs/laval" },
  { name: "Montréal", path: "/secteurs/montreal" },
  { name: "Repentigny", path: "/secteurs/repentigny" },
  { name: "Terrebonne", path: "/secteurs/terrebonne" },
  { name: "Mascouche", path: "/secteurs/mascouche" },
  { name: "L'Assomption", path: "/secteurs/assomption" },
  { name: "Boisbriand", path: "/secteurs/boisbriand" },
  { name: "Lorraine", path: "/secteurs/lorraine" },
  { name: "Rosemère", path: "/secteurs/rosemere" },
  { name: "Bois-des-Filion", path: "/secteurs/bois-des-filion" },
];
