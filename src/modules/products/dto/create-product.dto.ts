import { IsEnum, IsString, IsNotEmpty, IsNumber, IsArray, IsOptional, IsInt, Min } from 'class-validator';
import { ProductStatus } from '@prisma/client'; // 👈 Importa el enum desde Prisma Client

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsInt()
  @Min(0)
  stock: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  discount?: number = 0;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsEnum(ProductStatus)
  status: ProductStatus; // 👈 Ahora es tipo enum, no string
}
