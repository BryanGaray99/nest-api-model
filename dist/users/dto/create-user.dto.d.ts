export declare class AddressDto {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}
export declare class CreateUserDto {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    address: AddressDto;
}
