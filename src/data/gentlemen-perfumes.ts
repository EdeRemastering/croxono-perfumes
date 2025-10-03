export interface GentlemanPerfume {
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

export const gentlemanPerfumes: GentlemanPerfume[] = [
  {
    id: 1,
    name: "9PM",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.65414.2x.avif",
    description: "Dulce ambarado masculino inspirado en Azzaro Wanted by Night.",
    notes: ["Manzana", "Canela", "Vainilla", "Ámbar", "Tonka"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Afnan",
    collection: "9PM"
  },
  {
    id: 2,
    name: "Fakhar Black",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.70465.2x.avif",
    description: "Aromático especiado con salida frutal y base amaderada.",
    notes: ["Manzana", "Bergamota", "Jengibre", "Lavanda", "Haba Tonka", "Cedro"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Fakhar"
  },
  {
    id: 3,
    name: "Asad Zanzibar",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.90713.2x.avif",
    description: "Ambarado con especias cálidas y maderas.",
    notes: ["Pimienta Negra", "Cardamomo", "Vainilla", "Ámbar", "Maderas"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Asad"
  },
  {
    id: 4,
    name: "Honor & Glory",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.84302.2x.avif",
    description: "Amaderado especiado con acordes de oud y resinas.",
    notes: ["Azafrán", "Nuez Moscada", "Lavanda", "Oud", "Pachulí", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Bade'e Al Oud"
  }
]; 