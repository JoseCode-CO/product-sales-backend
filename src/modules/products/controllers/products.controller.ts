import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ListProductsUseCase } from '../application/use-cases/list-products.use-case';
import { PrismaProductRepository } from '../infrastructure/prisma-product.repository';
import { ProductDto } from '../dto/product-response.dto';
import { Product } from '../domain/product.entity';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly listProducts: ListProductsUseCase,
    private readonly repo: PrismaProductRepository
  ) {}

  @Get()
  async findAll(): Promise<ProductDto[]> {
    const products = await this.listProducts.execute();
    return products.map((p) => ({ ...p }));
  }

  @Post()
  async create(@Body() data: ProductDto): Promise<ProductDto>
   {
    const product = await this.repo.create(data);
    return { ...product };
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ProductDto> {
    const product = await this.repo.findById(id);
    return { ...product };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Product>
  ): Promise<ProductDto> {
    const product = await this.repo.update(id, data);
    return { ...product };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.repo.delete(id);
  }
}
