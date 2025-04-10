import { Body, Controller, Post, ValidationPipe,UsePipes } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { CreateCardDto } from '../dto/create-token-card.dto';
import { CreateTransactionUseCase } from '../application/use-cases/create-transaction.use-case';
import { TokenCardUseCase } from '../application/use-cases/token-card-transaction.use-case';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly createTransaction: CreateTransactionUseCase,
    private readonly createCardToken: TokenCardUseCase,
  ) {}

  @Post('create')
  async create(@Body() dto: CreateTransactionDto) {
    return this.createTransaction.execute(dto);
  }

  @Post('token-card')
  @UsePipes(new ValidationPipe())
  async createTokenCard(@Body() dto: CreateTransactionDto) {
    return this.createCardToken.execute(dto);
  }
}
