"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const order_interface_1 = require("./interfaces/order.interface");
let OrdersService = class OrdersService {
    constructor() {
        this.orders = [];
    }
    findAll() {
        return this.orders;
    }
    findOne(id) {
        const order = this.orders.find(o => o.id === id);
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        return order;
    }
    findByUserId(userId) {
        return this.orders.filter(o => o.userId === userId);
    }
    create(createOrderDto) {
        const totalAmount = createOrderDto.items.reduce((total, item) => total + item.price * item.quantity, 0);
        const orderItems = createOrderDto.items.map(item => ({
            ...item,
            subtotal: item.price * item.quantity,
        }));
        const newOrder = {
            id: (0, uuid_1.v4)(),
            userId: createOrderDto.userId,
            items: orderItems,
            status: order_interface_1.OrderStatus.PENDING,
            totalAmount,
            shippingAddress: createOrderDto.shippingAddress,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.orders.push(newOrder);
        return newOrder;
    }
    update(id, updateOrderDto) {
        const orderIndex = this.orders.findIndex(o => o.id === id);
        if (orderIndex === -1) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        this.orders[orderIndex] = {
            ...this.orders[orderIndex],
            ...updateOrderDto,
            updatedAt: new Date(),
        };
        return this.orders[orderIndex];
    }
    remove(id) {
        const orderIndex = this.orders.findIndex(o => o.id === id);
        if (orderIndex === -1) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        this.orders.splice(orderIndex, 1);
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
//# sourceMappingURL=orders.service.js.map