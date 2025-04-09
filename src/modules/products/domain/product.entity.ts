export class Product {
    constructor(
      public readonly id: string,
      public name: string,
      public description: string,
      public price: number,
      public category: string,
      public brand: string,
      public images: string[],
      public stock: number,
      public discount: number,
      public salesCount: number,
      public status: 'active' | 'inactive' | 'archived',
      public code: string,
      public readonly createdAt: Date,
      public updatedAt: Date
    ) {}

    isActive(): boolean {
      return this.status === 'active';
    }
  
    hasStock(): boolean {
      return this.stock > 0;
    }
  
    getFinalPrice(): number {
      return this.discount ? this.price - this.discount : this.price;
    }
  }