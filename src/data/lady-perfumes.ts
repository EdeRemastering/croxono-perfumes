export interface LadyPerfume {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  notes: string[];
  concentration: string;
  duration: string;
  size: string;
  origin: string;
  brand?: string;
  collection?: string;
}

export const ladyPerfumes: LadyPerfume[] = [
  {
    id: 1,
    name: "Club de Nuit Woman",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.27655.2x.avif",
    description: "Fragancia femenina con carácter moderno y elegante.",
    notes: ["Cítricos", "Rosa", "Jazmín", "Vainilla"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Armaf",
    collection: "Club de Nuit"
  },
  {
    id: 2,
    name: "Yara Moi",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.80722.2x.avif",
    description: "Dulce y cremosa, con acorde gourmand tropical.",
    notes: ["Mandarina", "Heliotropo", "Orquídea", "Vainilla", "Sándalo", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Yara"
  },
  {
    id: 3,
    name: "Fakhar Rose",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.70466.2x.avif",
    description: "Floral intenso con rosas y vainilla.",
    notes: ["Pimienta Rosa", "Bergamota", "Rosa", "Jazmín", "Vainilla", "Ámbar"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Fakhar"
  },
  {
    id: 4,
    name: "Good Girl",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.39681.2x.avif",
    description: "Icono femenino, dulce y sensual.",
    notes: ["Haba Tonka", "Cacao", "Jazmín", "Tuberosa"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "80ml",
    origin: "España",
    brand: "Carolina Herrera",
    collection: "Good Girl"
  },
  {
    id: 5,
    name: "Viva La Juicy",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.4410.2x.avif",
    description: "Gourmand frutal femenino, juvenil y brillante.",
    notes: ["Caramelo", "Vainilla", "Baya", "Flor de Azahar"],
    concentration: "Eau de Parfum",
    duration: "6-8 horas",
    size: "100ml",
    origin: "EEUU",
    brand: "Juicy Couture",
    collection: "Viva La Juicy"
  }
]; 