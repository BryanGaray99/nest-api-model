import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersService {
    private orders;
    findAll(): Order[];
    findOne(id: string): Order;
    findByUserId(userId: string): Order[];
    create(createOrderDto: CreateOrderDto): Order;
    update(id: string, updateOrderDto: UpdateOrderDto): Order;
    remove(id: string): void;
}
