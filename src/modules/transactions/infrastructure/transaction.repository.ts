import { PrismaService } from './../../../prisma.services';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionStatus } from '../domain/entities/transaction.entity';

@Injectable()
export class TransactionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTransactionDto & { status: TransactionStatus }) {
    return this.prisma.transaction.create({
      data,
    });
  }

  // puedes agregar más métodos: findById, updateStatus, etc.
}
