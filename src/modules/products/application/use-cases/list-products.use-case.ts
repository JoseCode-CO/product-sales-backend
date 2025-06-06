import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../infrastructure/product.repository';
import { Product } from '../../domain/product.entity';

@Injectable()
export class ListProductsUseCase {
  constructor(private readonly repo: ProductRepository) {}
  async execute(): Promise<Product[]> {
    return this.repo.findAll({
      activeOnly: true,
      withStock: true,
    });
  }
  
}