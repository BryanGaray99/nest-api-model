import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsService {
    private products;
    findAll(): Product[];
    findOne(id: string): Product;
    create(createProductDto: CreateProductDto): Product;
    update(id: string, updateProductDto: UpdateProductDto): Product;
    remove(id: string): void;
    findByCategory(categoryId: string): Product[];
}
