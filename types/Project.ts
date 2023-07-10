import { PortableTextBlock } from "sanity";

export type Pizza = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  price: number[];
  contect: PortableTextBlock[];
}