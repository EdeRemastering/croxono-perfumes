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
  },
  {
    id: 6,
    name: "Noble Blush",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.98937.2x.avif",
    description: "Floral frutal femenino con rosas y frutas rojas.",
    notes: ["Frutas Rojas", "Bergamota", "Rosa", "Jazmín", "Vainilla", "Almizcle", "Ámbar"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Noble Blush"
  },
  {
    id: 7,
    name: "Mayar",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.84309.2x.avif",
    description: "Floral frutal femenino con frutas tropicales y flores blancas.",
    notes: ["Frutas", "Cítricos", "Flores Blancas", "Jazmín", "Vainilla", "Almizcle", "Ámbar"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Mayar"
  },
  {
    id: 8,
    name: "Yara Candy",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.95752.2x.avif",
    description: "Gourmand femenino con frutas tropicales y acordes dulces.",
    notes: ["Frutas Tropicales", "Mandarina", "Gourmand", "Flores Blancas", "Vainilla", "Almizcle", "Sándalo"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Yara"
  },
  {
    id: 9,
    name: "Yara Tous",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.83320.2x.avif",
    description: "Floral frutal femenino con mango y flores blancas.",
    notes: ["Mango", "Maracuyá", "Flores Blancas", "Vainilla", "Almizcle", "Sándalo"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Yara"
  },
  {
    id: 10,
    name: "Toy 2 Pearl",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.84718.2x.avif",
    description: "Floral frutal femenino con cítricos y flores blancas.",
    notes: ["Limón", "Mandarina", "Grosella Negra", "Jazmín", "Peonía", "Flor de Azahar", "Ámbar", "Sándalo", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "6-8 horas",
    size: "100ml",
    origin: "Italia",
    brand: "Moschino",
    collection: "Toy 2"
  },
  {
    id: 11,
    name: "Thank U, Next",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.56741.2x.avif",
    description: "Floral frutal gourmand femenino con frambuesa y coco.",
    notes: ["Frambuesa", "Pera", "Coco", "Rosa", "Macarons", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "6-8 horas",
    size: "100ml",
    origin: "EEUU",
    brand: "Ariana Grande",
    collection: "Thank U, Next"
  }
]; 