import { Injectable } from '@nestjs/common';

import { Order } from '../../domain/order.entity';
import { PrismaOrderRepository } from '../../infrastructure/prisma-order.repository';

@Injectable()
export class ListOrdersUseCase {
  constructor(private readonly orderRepo: PrismaOrderRepository) {}

  async execute(): Promise<Order[]> {
    return this.orderRepo.findAll();
  }
}