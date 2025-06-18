export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    address: Address;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface Address {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}
