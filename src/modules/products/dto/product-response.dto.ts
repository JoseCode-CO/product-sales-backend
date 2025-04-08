export class ProductDto {
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  images: string[];
  stock: number;
  discount?: number;
  salesCount?: number;
  code: string;
  status: 'active' | 'inactive' | 'archived';
}
