import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Order, OrderStatus } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: string): Order {
    const order = this.orders.find(o => o.id === id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  findByUserId(userId: string): Order[] {
    return this.orders.filter(o => o.userId === userId);
  }

  create(createOrderDto: CreateOrderDto): Order {
    const totalAmount = createOrderDto.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );

    const orderItems = createOrderDto.items.map(item => ({
      ...item,
      subtotal: item.price * item.quantity,
    }));

    const newOrder: Order = {
      id: uuidv4(),
      userId: createOrderDto.userId,
      items: orderItems,
      status: OrderStatus.PENDING,
      totalAmount,
      shippingAddress: createOrderDto.shippingAddress,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  update(id: string, updateOrderDto: UpdateOrderDto): Order {
    const orderIndex = this.orders.findIndex(o => o.id === id);
    if (orderIndex === -1) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    this.orders[orderIndex] = {
      ...this.orders[orderIndex],
      ...updateOrderDto,
      updatedAt: new Date(),
    };

    return this.orders[orderIndex];
  }

  remove(id: string): void {
    const orderIndex = this.orders.findIndex(o => o.id === id);
    if (orderIndex === -1) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    this.orders.splice(orderIndex, 1);
  }
}