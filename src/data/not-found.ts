export interface NotFoundPerfume {
  id: number;
  name: string;
  price: string;
  image: string;
  note?: string;
}

export const notFoundPerfumes: NotFoundPerfume[] = [
  { id: 1, name: "Bharara Ónix", price: "$150.000", image: "/assets/perfumes/bharara-onix.jpg" },
];



