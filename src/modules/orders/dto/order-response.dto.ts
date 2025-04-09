export class OrderItemResponseDto {
    productId: string;
    quantity: number;
    unitPrice: number;
  }
  
  export class OrderResponseDto {
    id: string;
    userId: string;
    totalAmount: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    items: OrderItemResponseDto[];
  }