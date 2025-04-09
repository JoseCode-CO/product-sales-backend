import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { Order } from '../domain/order.entity';
import { OrderItem } from '../domain/order-item.entity';
import { PrismaService } from '../../../prisma.services';

@Injectable()
export class OrderRepository  {
  constructor(private readonly prisma: PrismaService) {}


  async create(dto: CreateOrderDto): Promise<Order> {
    const totalAmount = dto.items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0,
    );

    const prismaOrder = await this.prisma.order.create({
      data: {
        userId: dto.userId,
        totalAmount,
        status: 'active',
        items: {
          create: dto.items,
        },
      },
      include: {
        items: true,
      },
    });

    const items = prismaOrder.items.map(
      (item) => new OrderItem(item.id, item.orderId, item.productId, item.quantity, item.unitPrice),
    );

    return new Order(
      prismaOrder.id,
      prismaOrder.userId,
      prismaOrder.totalAmount,
      prismaOrder.status,
      prismaOrder.createdAt,
      prismaOrder.updatedAt,
      items,
    );
  }

  async findAll(): Promise<Order[]> {
    const prismaOrders = await this.prisma.order.findMany({
      include: { items: true },
    });

    return prismaOrders.map((order) => {
      const items = order.items.map(
        (item) => new OrderItem(item.id, item.orderId, item.productId, item.quantity, item.unitPrice),
      );

      return new Order(
        order.id,
        order.userId,
        order.totalAmount,
        order.status,
        order.createdAt,
        order.updatedAt,
        items,
      );
    });
  }
}