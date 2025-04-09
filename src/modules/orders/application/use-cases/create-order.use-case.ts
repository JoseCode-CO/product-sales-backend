import { OrderRepository } from '../../infrastructure/order.repository';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { Order } from '../../domain/order.entity';

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly orderRepo: OrderRepository) {}
  async execute(dto: CreateOrderDto): Promise<Order> {
    return this.orderRepo.create(dto);
  }
}