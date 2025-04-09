import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  Min,
} from 'class-validator';
import { PaymentMethod } from '../domain/entities/transaction.entity';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsNumber()
  @Min(0)
  discount: number;

  @IsNumber()
  @Min(0)
  fee: number;

  @IsEnum(PaymentMethod)
  method: PaymentMethod;

  @IsString()
  @IsNotEmpty()
  deliveryName: string;

  @IsString()
  @IsNotEmpty()
  deliveryPhone: string;

  @IsString()
  @IsNotEmpty()
  deliveryCity: string;

  @IsString()
  @IsNotEmpty()
  deliveryAddress: string;
}
