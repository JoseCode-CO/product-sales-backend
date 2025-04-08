import { Injectable } from '@nestjs/common';
import { PrismaProductRepository } from '../../infrastructure/prisma-product.repository';
import { Product } from '../../domain/product.entity';

@Injectable()
export class ListProductsUseCase {
  constructor(private readonly repo: PrismaProductRepository) {}
  async execute(): Promise<Product[]> {
    return this.repo.findAll();
  }
}