import { Body, Controller, Get, Post,UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { CreateOrderUseCase } from '../application/use-cases/create-order.use-case';
import { ListOrdersUseCase } from '../application/use-cases/list-orders.use-case';
import { OrderResponseDto } from '../dto/order-response.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly createOrder: CreateOrderUseCase,
    private readonly listOrders: ListOrdersUseCase,
  ) {}


  @Get()
  async findAll(): Promise<{ data: OrderResponseDto[] }> {
    const orders = await this.listOrders.execute();
    return {
      data: orders.map((p) => ({ ...p })),
    };
  }
  
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() data: CreateOrderDto): Promise<{ data: CreateOrderDto }> {
      const product = await this.createOrder.execute(data);
      return {
        data: { ...product },
      };
    }


}

