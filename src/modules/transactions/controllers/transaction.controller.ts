import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { CreateTransactionUseCase } from '../application/use-cases/create-transaction.use-case';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly createTransaction: CreateTransactionUseCase) {}

  @Post()
  async create(@Body() dto: CreateTransactionDto) {
    return this.createTransaction.execute(dto);
  }
}
