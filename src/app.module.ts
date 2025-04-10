import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { OrderModule } from './modules/orders/order.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [ProductModule, OrderModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
