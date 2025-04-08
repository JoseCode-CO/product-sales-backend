// order.module.ts
import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { CreateOrderUseCase } from './application/use-cases/create-order.use-case';
import { ListOrdersUseCase } from './application/use-cases/list-orders.use-case';
import { PrismaOrderRepository } from './infrastructure/prisma-order.repository';
import { PrismaService } from './../../prisma.services';

@Module({
  controllers: [OrdersController],
  providers: [
    CreateOrderUseCase,
    ListOrdersUseCase,
    PrismaOrderRepository,
    PrismaService
  ]
})
export class OrderModule {}