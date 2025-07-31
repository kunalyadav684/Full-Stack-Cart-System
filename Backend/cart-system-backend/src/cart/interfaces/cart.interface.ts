export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface Cart extends Document {
    userId: string;
    items: CartItem[];
  }
  