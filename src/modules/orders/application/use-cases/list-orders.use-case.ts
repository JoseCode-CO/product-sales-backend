import { Injectable } from '@nestjs/common';

import { Order } from '../../domain/order.entity';
import { OrderRepository } from '../../infrastructure/order.repository';

@Injectable()
export class ListOrdersUseCase {
  constructor(private readonly orderRepo: OrderRepository) {}
  async execute(): Promise<Order[]> {
    return this.orderRepo.findAll();
  }
}