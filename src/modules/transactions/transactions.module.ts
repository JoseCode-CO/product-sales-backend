import { Module } from '@nestjs/common';
import { TransactionRepository } from './infrastructure/transaction.repository';
import { CreateTransactionUseCase } from './application/use-cases/create-transaction.use-case';
import { TransactionController } from './controllers/transaction.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './../../prisma.services';
import { TokenCardUseCase } from './application/use-cases/token-card-transaction.use-case';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [TransactionController],
  providers: [TransactionRepository, CreateTransactionUseCase, PrismaService, TokenCardUseCase],
})
export class TransactionsModule {}
