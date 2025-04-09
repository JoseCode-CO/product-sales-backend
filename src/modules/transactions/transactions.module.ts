import { Module } from '@nestjs/common';
import { TransactionRepository } from './infrastructure/transaction.repository';
import { CreateTransactionUseCase } from './application/use-cases/create-transaction.use-case';
import { TransactionController } from './controllers/transaction.controller';

@Module({
  controllers: [TransactionController],
  providers: [TransactionRepository, CreateTransactionUseCase],
})
export class TransactionsModule {}
