export class CreateOrderItemDto {
    productId: string;
    quantity: number;
    unitPrice: number;
  }
  
  export class CreateOrderDto {
    userId: string;
    items: CreateOrderItemDto[];
  }
  