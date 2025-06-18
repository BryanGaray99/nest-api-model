import { Cart } from './interfaces/cart.interface';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class CartService {
    private carts;
    findByUserId(userId: string): Cart;
    addItem(userId: string, addItemDto: AddItemDto): Cart;
    updateItem(userId: string, productId: string, updateItemDto: UpdateItemDto): Cart;
    removeItem(userId: string, productId: string): Cart;
    clearCart(userId: string): Cart;
    private createEmptyCart;
}
