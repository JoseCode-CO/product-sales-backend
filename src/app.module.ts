import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { OrderModule } from './modules/orders/order.module';
import { Transaction } from './modules/transactions/domain/entities/transaction.entity';

@Module({
  imports: [ProductModule, OrderModule, Transaction],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
