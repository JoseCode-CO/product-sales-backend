import { CreateProductDto } from './../../dto/create-product.dto';
import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../infrastructure/product.repository';
import { Product } from '../../domain/product.entity';

@Injectable()
export class CreateProductsUseCase {
  constructor(private readonly repo: ProductRepository) {}
  async execute(data: CreateProductDto): Promise<Product> {
    return this.repo.create(data);
  }
}
