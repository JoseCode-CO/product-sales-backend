import { CreateProductDto } from './../dto/create-product.dto';
import { Injectable,ConflictException } from '@nestjs/common';
import { Product } from '../domain/product.entity';
import { PrismaService } from '../../../prisma.services';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters?: { activeOnly?: boolean; withStock?: boolean }): Promise<Product[]> {
    const where: any = {};
  
    if (filters?.activeOnly) {
      where.status = 'active';
    }
  
    if (filters?.withStock) {
      where.stock = { gt: 0 };
    }
  
    const products = await this.prisma.product.findMany({ where });
  
    return products.map((p) => new Product(
      p.id, p.name, p.description, p.price, p.category, p.brand,
      p.images, p.stock, p.discount, p.salesCount, p.status, p.code,
      p.createdAt, p.updatedAt
    ));
  }
  

  async create(data: CreateProductDto): Promise<Product> {
    
    const existingProduct = await this.prisma.product.findUnique({
      where: { code: data.code },
    });
  
    if (existingProduct) {
      throw new ConflictException(`Ya existe un producto con el código: ${data.code}`);
    }
  
    const created = await this.prisma.product.create({ data });
  
    return new Product(
      created.id, created.name, created.description, created.price,
      created.category, created.brand, created.images, created.stock,
      created.discount, created.salesCount, created.status, created.code,
      created.createdAt, created.updatedAt
    );
  }


  


  /*
  async findById(id: string): Promise<Product> {
    const p = await this.prisma.product.findUnique({ where: { id } });
    if (!p) throw new Error('Product not found');
    return new Product(
      p.id, p.name, p.description, p.price, p.category, p.brand,
      p.images, p.stock, p.discount, p.salesCount, p.status,p.code,
      p.createdAt, p.updatedAt
    );
  }

  async update(id: string, data: Partial<Product>): Promise<Product> {
    const updated = await this.prisma.product.update({ where: { id }, data });
    return new Product(
      updated.id, updated.name, updated.description, updated.price,
      updated.category, updated.brand, updated.images, updated.stock,
      updated.discount, updated.salesCount, updated.status, updated.code,
      updated.createdAt, updated.updatedAt
    );
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }*/
}