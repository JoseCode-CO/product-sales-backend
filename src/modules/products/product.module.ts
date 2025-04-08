import { PrismaService } from './../../prisma.services';
// product.module.ts
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ListProductsUseCase } from './application/use-cases/list-products.use-case';
import { PrismaProductRepository } from './infrastructure/prisma-product.repository';

@Module({
  controllers: [ProductsController],
  providers: [ListProductsUseCase, PrismaProductRepository, PrismaService]
})
export class ProductModule {}
