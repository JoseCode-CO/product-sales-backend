//import { IsEnum, IsNumber, IsString } from 'class-validator';
import { PaymentMethod } from '../domain/entities/transaction.entity';

export class CreateTransactionDto {
  orderId: string;

  amount: number;

  discount: number;

  fee: number;

  method: PaymentMethod;

  deliveryName: string;

  deliveryPhone: string;

  deliveryCity: string;

  deliveryAddress: string;
}
