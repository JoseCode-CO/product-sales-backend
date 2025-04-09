import { Controller, Get, Post, Body, Param, Put, Delete,UsePipes, ValidationPipe } from '@nestjs/common';
import { ListProductsUseCase } from '../application/use-cases/list-products.use-case';
import { ProductRepository } from '../infrastructure/product.repository';
import { ListProductDto } from '../dto/product-response.dto';
import { Product } from '../domain/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { CreateProductsUseCase } from '../application/use-cases/create-products.use-case';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly listProducts: ListProductsUseCase,
    private readonly createProducts: CreateProductsUseCase,
  ) {}

  @Get()
  async findAll(): Promise<{ data: ListProductDto[] }> {
    const products = await this.listProducts.execute();
    return {
      data: products.map((p) => ({ ...p })),
    };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: CreateProductDto): Promise<{ data: CreateProductDto }> {
    const product = await this.createProducts.execute(data);
    return {
      data: { ...product },
    };
  }



  /*
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
  }*/
}
