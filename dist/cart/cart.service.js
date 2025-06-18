"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CartService = class CartService {
    constructor() {
        this.carts = [];
    }
    findByUserId(userId) {
        let cart = this.carts.find(c => c.userId === userId);
        if (!cart) {
            cart = this.createEmptyCart(userId);
        }
        return cart;
    }
    addItem(userId, addItemDto) {
        let cart = this.carts.find(c => c.userId === userId);
        if (!cart) {
            cart = this.createEmptyCart(userId);
        }
        const existingItemIndex = cart.items.findIndex(item => item.productId === addItemDto.productId);
        if (existingItemIndex >= 0) {
            cart.items[existingItemIndex].quantity += addItemDto.quantity;
            cart.items[existingItemIndex].subtotal =
                cart.items[existingItemIndex].price * cart.items[existingItemIndex].quantity;
        }
        else {
            const newItem = {
                ...addItemDto,
                subtotal: addItemDto.price * addItemDto.quantity,
            };
            cart.items.push(newItem);
        }
        cart.totalAmount = cart.items.reduce((total, item) => total + item.subtotal, 0);
        cart.updatedAt = new Date();
        return cart;
    }
    updateItem(userId, productId, updateItemDto) {
        const cart = this.carts.find(c => c.userId === userId);
        if (!cart) {
            throw new common_1.NotFoundException(`Cart for user ${userId} not found`);
        }
        const itemIndex = cart.items.findIndex(item => item.productId === productId);
        if (itemIndex === -1) {
            throw new common_1.NotFoundException(`Item with product ID ${productId} not found in cart`);
        }
        cart.items[itemIndex].quantity = updateItemDto.quantity;
        cart.items[itemIndex].subtotal = cart.items[itemIndex].price * updateItemDto.quantity;
        cart.totalAmount = cart.items.reduce((total, item) => total + item.subtotal, 0);
        cart.updatedAt = new Date();
        return cart;
    }
    removeItem(userId, productId) {
        const cart = this.carts.find(c => c.userId === userId);
        if (!cart) {
            throw new common_1.NotFoundException(`Cart for user ${userId} not found`);
        }
        const itemIndex = cart.items.findIndex(item => item.productId === productId);
        if (itemIndex === -1) {
            throw new common_1.NotFoundException(`Item with product ID ${productId} not found in cart`);
        }
        cart.items.splice(itemIndex, 1);
        cart.totalAmount = cart.items.reduce((total, item) => total + item.subtotal, 0);
        cart.updatedAt = new Date();
        return cart;
    }
    clearCart(userId) {
        const cart = this.carts.find(c => c.userId === userId);
        if (!cart) {
            throw new common_1.NotFoundException(`Cart for user ${userId} not found`);
        }
        cart.items = [];
        cart.totalAmount = 0;
        cart.updatedAt = new Date();
        return cart;
    }
    createEmptyCart(userId) {
        const newCart = {
            id: (0, uuid_1.v4)(),
            userId,
            items: [],
            totalAmount: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.carts.push(newCart);
        return newCart;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
//# sourceMappingURL=cart.service.js.map