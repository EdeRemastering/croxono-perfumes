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
  },
  {
    id: 5,
    name: "Valentino Uomo Born In Roma Intense",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.78740.2x.avif",
    description: "Oriental vainilla masculino con lavanda y vetiver.",
    notes: ["Vainilla", "Lavanda", "Vetiver", "Salvia", "Ámbar", "Cedro"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Italia",
    brand: "Valentino",
    collection: "Born In Roma"
  },
  {
    id: 6,
    name: "Asad Bourbon",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.101124.2x.avif",
    description: "Oriental vainilla masculino con notas dulces y especiadas.",
    notes: ["Bergamota", "Piña", "Manzana", "Pachulí", "Jazmín", "Rosa", "Vainilla", "Almizcle", "Ámbar"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Asad"
  },
  {
    id: 7,
    name: "Le Male",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.430.2x.avif",
    description: "Aromático fougère masculino icónico con menta y lavanda.",
    notes: ["Menta", "Lavanda", "Bergamota", "Canela", "Comino", "Flor de Azahar", "Vainilla", "Haba Tonka", "Sándalo", "Cedro"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Francia",
    brand: "Jean Paul Gaultier",
    collection: "Le Male"
  },
  {
    id: 8,
    name: "Le Male Elixir",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.81642.2x.avif",
    description: "Oriental vainilla masculino con acordes especiados.",
    notes: ["Bergamota", "Menta", "Lavanda", "Canela", "Vainilla", "Haba Tonka", "Sándalo"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Francia",
    brand: "Jean Paul Gaultier",
    collection: "Le Male"
  },
  {
    id: 9,
    name: "Viking Cairo",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.103876.2x.avif",
    description: "Oriental amaderado masculino con rosas y especias.",
    notes: ["Limón", "Bergamota", "Rosa", "Jazmín", "Sándalo", "Pachulí", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Viking",
    collection: "Cairo"
  },
  {
    id: 10,
    name: "Odyssey Mandarin Sky",
    price: "$100.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.83132.2x.avif",
    description: "Aromático fougère masculino con mandarina y haba tonka.",
    notes: ["Mandarina", "Bergamota", "Lavanda", "Geranio", "Vainilla", "Ámbar", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Armaf",
    collection: "Odyssey"
  }
]; 