import { CartService } from './cart.service';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiResponse as CustomApiResponse } from '../common/interfaces/api-response.interface';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getCart(userId: string): CustomApiResponse;
    addItem(userId: string, addItemDto: AddItemDto): CustomApiResponse;
    updateItem(userId: string, productId: string, updateItemDto: UpdateItemDto): CustomApiResponse;
    removeItem(userId: string, productId: string): CustomApiResponse;
    clearCart(userId: string): CustomApiResponse;
}
