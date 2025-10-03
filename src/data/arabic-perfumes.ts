export interface ArabicPerfume {
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
  type?: "Unisex" | "Masculino" | "Femenino";
}

export const arabicPerfumes: ArabicPerfume[] = [
  {
    id: 1,
    name: "Khamrah",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.75805.2x.avif",
    description: "Dulce especiada con dátiles y vainilla (unisex).",
    notes: ["Dátiles", "Canela", "Nuez Moscada", "Praliné", "Nardos", "Caoba", "Vainilla", "Haba Tonka", "Benjuí", "Mirra", "Ámbar", "Akigalawood"],
    concentration: "Eau de Parfum",
    duration: "10-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Khamrah",
    type: "Unisex"
  },
  {
    id: 2,
    name: "Khamrah Qahwa",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.88175.2x.avif",
    description: "Gourmand de café especiado (unisex).",
    notes: ["Jengibre", "Canela", "Cardamomo", "Praliné", "Frutas Confitadas", "Flores Blancas", "Café Arábica", "Haba Tonka", "Almizcle", "Benjuí", "Vainilla"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Khamrah",
    type: "Unisex"
  },
  {
    id: 3,
    name: "Khamrah Dukhan",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.104529.2x.avif",
    description: "Ámbar ahumado especiado (unisex).",
    notes: ["Mandarina", "Pimienta", "Especias Ahumadas", "Cistus", "Azahar", "Incienso", "Pachulí", "Tabaco", "Ámbar", "Haba Tonka", "Benjuí", "Praliné"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Khamrah",
    type: "Unisex"
  },
  {
    id: 4,
    name: "Bharara Onyx",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.123456.2x.avif",
    description: "Oriental amaderado con acordes de oud y especias (unisex).",
    notes: ["Lavanda", "Mandarina", "Bergamota", "Albahaca", "Cardamomo", "Geranio", "Pachulí", "Cuero", "Musgo de Roble", "Benjuí", "Ámbar"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Bharara",
    collection: "Onyx",
    type: "Unisex"
  },
  {
    id: 5,
    name: "Bade'e Al Oud Amethyst",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.123457.2x.avif",
    description: "Oriental con oud, rosas y especias (unisex).",
    notes: ["Azafrán", "Bergamota", "Pimienta Rosa", "Rosa de Bulgaria", "Rosa Turca", "Jazmín", "Oud", "Ámbar", "Vainilla"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Bade'e Al Oud",
    type: "Unisex"
  },
  {
    id: 6,
    name: "Bade'e Al Oud Sublime",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.123458.2x.avif",
    description: "Oriental amaderado con oud y notas florales (unisex).",
    notes: ["Azafrán", "Bergamota", "Frambuesa", "Rosa de Bulgaria", "Rosa Turca", "Jazmín", "Geranio", "Oud", "Vainilla", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Bade'e Al Oud",
    type: "Unisex"
  },
  {
    id: 7,
    name: "Fakhar Extrait",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.123459.2x.avif",
    description: "Oriental amaderado con aldehídos y flores blancas (unisex).",
    notes: ["Aldehídos", "Lirios", "Granada", "Frutas", "Rosa", "Jazmín", "Gardenia", "Vainilla", "Sándalo", "Ambroxán", "Almizcle Blanco"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Lattafa",
    collection: "Fakhar",
    type: "Unisex"
  },
  {
    id: 8,
    name: "Oud for Greatness",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.123460.2x.avif",
    description: "Oriental amaderado con oud y especias (unisex).",
    notes: ["Azafrán", "Nuez Moscada", "Lavanda", "Oud", "Pachulí", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Francia",
    brand: "Initio",
    collection: "Oud for Greatness",
    type: "Unisex"
  },
  {
    id: 9,
    name: "Erotique",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.123461.2x.avif",
    description: "Oriental vainilla con rosas y especias (unisex).",
    notes: ["Pimienta Rosa", "Bergamota", "Rosa", "Jazmín", "Vainilla", "Ámbar", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "ILMIN",
    collection: "Erotique",
    type: "Unisex"
  },
  {
    id: 10,
    name: "Arabians Tonka",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.123462.2x.avif",
    description: "Oriental vainilla con oud y haba tonka (unisex).",
    notes: ["Azafrán", "Bergamota", "Oud", "Rosa", "Haba Tonka", "Ámbar", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "Francia",
    brand: "Montale",
    collection: "Arabians Tonka",
    type: "Unisex"
  },
  {
    id: 11,
    name: "Bharara Rose",
    price: "$120.000",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.123463.2x.avif",
    description: "Floral oriental con rosas y especias (unisex).",
    notes: ["Rosa", "Jazmín", "Azafrán", "Bergamota", "Vainilla", "Ámbar", "Almizcle"],
    concentration: "Eau de Parfum",
    duration: "8-12 horas",
    size: "100ml",
    origin: "EAU",
    brand: "Bharara",
    collection: "Rose",
    type: "Unisex"
  }
]