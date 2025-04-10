// src/modules/transactions/application/use-cases/create-payment-source.use-case.ts
import { Injectable } from '@nestjs/common';
import { CreateCardDto } from '../../dto/create-token-card.dto';
import { TransactionRepository } from '../../infrastructure/transaction.repository';
import { CreateTransactionDto } from '../../dto/create-transaction.dto';

@Injectable()
export class TokenCardUseCase {
  constructor(private readonly repository: TransactionRepository) {}

  async execute(dto: CreateTransactionDto) {
    return this.repository.createCardAndPaymentSource(dto);
  }
}