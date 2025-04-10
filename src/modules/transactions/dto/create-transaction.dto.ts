import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsEmail, Min } from 'class-validator';

export enum PaymentMethod {
  CARD = 'CARD',
}

export class CreateTransactionDto {

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

  paymentSourceId: string;

  @IsEmail()
  customerEmail: string;

  @IsString()
  @IsNotEmpty()
  currency: 'COP' | 'USD';

  @IsOptional()
  @IsString()
  description?: string;

  // 🆕 Campos agregados
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsString()
  @IsNotEmpty()
  customerIdentification: string;
}
