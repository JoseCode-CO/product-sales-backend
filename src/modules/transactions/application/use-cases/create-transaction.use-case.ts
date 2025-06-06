import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../../dto/create-transaction.dto';
import { TransactionRepository } from '../../infrastructure/transaction.repository';
import { TransactionStatus } from '../../domain/entities/transaction.entity';

@Injectable()
export class CreateTransactionUseCase {
  constructor(private readonly repo: TransactionRepository) {}

  async execute(dto: CreateTransactionDto): Promise<any> {
    return this.repo.createTransaction(dto);
  }
}
