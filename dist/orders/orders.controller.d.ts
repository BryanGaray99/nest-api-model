import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiResponse as CustomApiResponse } from '../common/interfaces/api-response.interface';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): CustomApiResponse;
    findAll(userId?: string): CustomApiResponse;
    findOne(id: string): CustomApiResponse;
    update(id: string, updateOrderDto: UpdateOrderDto): CustomApiResponse;
    remove(id: string): void;
}
