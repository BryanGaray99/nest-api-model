import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiResponse as CustomApiResponse } from '../common/interfaces/api-response.interface';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): CustomApiResponse;
    findAll(categoryId?: string): CustomApiResponse;
    findOne(id: string): CustomApiResponse;
    update(id: string, updateProductDto: UpdateProductDto): CustomApiResponse;
    remove(id: string): void;
}
