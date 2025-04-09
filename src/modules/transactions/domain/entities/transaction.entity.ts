export enum PaymentMethod {
    CREDIT_CARD = 'credit_card',
  }
  
  export enum TransactionStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    FAILED = 'failed',
  }
  
  export class Transaction {
    constructor(
      public readonly id: string,
      public readonly orderId: string,
      public readonly amount: number,
      public readonly discount: number,
      public readonly fee: number,
      public readonly method: PaymentMethod,
      public readonly status: TransactionStatus,
      public readonly createdAt: Date,
      public readonly deliveryName: string,
      public readonly deliveryPhone: string,
      public readonly deliveryCity: string,
      public readonly deliveryAddress: string,
    ) {}
  }
  