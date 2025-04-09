export class ListProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  images: string[];
  stock: number;
  discount: number;
  code: string;
  salesCount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
