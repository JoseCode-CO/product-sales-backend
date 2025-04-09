import { PrismaService } from './../../prisma.services';
// product.module.ts
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ListProductsUseCase } from './application/use-cases/list-products.use-case';
import { ProductRepository } from './infrastructure/product.repository';
import { CreateProductsUseCase } from './application/use-cases/create-products.use-case';

@Module({
  controllers: [ProductsController],
  providers: [ListProductsUseCase,CreateProductsUseCase, ProductRepository, PrismaService]
})
export class ProductModule {}
