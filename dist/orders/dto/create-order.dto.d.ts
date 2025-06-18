export declare class OrderItemDto {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
}
export declare class AddressDto {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}
export declare class CreateOrderDto {
    userId: string;
    items: OrderItemDto[];
    shippingAddress: AddressDto;
}
