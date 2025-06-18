export interface Cart {
    id: string;
    userId: string;
    items: CartItem[];
    totalAmount: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface CartItem {
    productId: string;
    productName: string;
    price: number;
    quantity: number;
    subtotal: number;
}
