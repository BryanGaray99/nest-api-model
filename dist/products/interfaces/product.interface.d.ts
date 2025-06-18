export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    categoryId: string;
    stock: number;
    imageUrl?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
