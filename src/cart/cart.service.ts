import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Cart, CartItem } from './interfaces/cart.interface';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class CartService {
  private carts: Cart[] = [];

  findByUserId(userId: string): Cart {
    let cart = this.carts.find(c => c.userId === userId);
    if (!cart) {
      cart = this.createEmptyCart(userId);
    }
    return cart;
  }

  addItem(userId: string, addItemDto: AddItemDto): Cart {
    let cart = this.carts.find(c => c.userId === userId);
    if (!cart) {
      cart = this.createEmptyCart(userId);
    }

    const existingItemIndex = cart.items.findIndex(
      item => item.productId === addItemDto.productId,
    );

    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += addItemDto.quantity;
      cart.items[existingItemIndex].subtotal = 
        cart.items[existingItemIndex].price * cart.items[existingItemIndex].quantity;
    } else {
      const newItem: CartItem = {
        ...addItemDto,
        subtotal: addItemDto.price * addItemDto.quantity,
      };
      cart.items.push(newItem);
    }

    cart.totalAmount = cart.items.reduce((total, item) => total + item.subtotal, 0);
    cart.itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);
    cart.updatedAt = new Date();

    return cart;
  }

  updateItem(userId: string, productId: string, updateItemDto: UpdateItemDto): Cart {
    const cart = this.carts.find(c => c.userId === userId);
    if (!cart) {
      throw new NotFoundException(`Cart for user ${userId} not found`);
    }

    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex === -1) {
      throw new NotFoundException(`Item with product ID ${productId} not found in cart`);
    }

    cart.items[itemIndex].quantity = updateItemDto.quantity;
    cart.items[itemIndex].subtotal = cart.items[itemIndex].price * updateItemDto.quantity;
    cart.totalAmount = cart.items.reduce((total, item) => total + item.subtotal, 0);
    cart.itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);
    cart.updatedAt = new Date();

    return cart;
  }

  removeItem(userId: string, productId: string): Cart {
    const cart = this.carts.find(c => c.userId === userId);
    if (!cart) {
      throw new NotFoundException(`Cart for user ${userId} not found`);
    }

    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    if (itemIndex === -1) {
      throw new NotFoundException(`Item with product ID ${productId} not found in cart`);
    }

    cart.items.splice(itemIndex, 1);
    cart.totalAmount = cart.items.reduce((total, item) => total + item.subtotal, 0);
    cart.itemCount = cart.items.reduce((count, item) => count + item.quantity, 0);
    cart.updatedAt = new Date();

    return cart;
  }

  clearCart(userId: string): Cart {
    const cart = this.carts.find(c => c.userId === userId);
    if (!cart) {
      throw new NotFoundException(`Cart for user ${userId} not found`);
    }

    cart.items = [];
    cart.totalAmount = 0;
    cart.itemCount = 0;
    cart.updatedAt = new Date();

    return cart;
  }

  private createEmptyCart(userId: string): Cart {
    const newCart: Cart = {
      id: uuidv4(),
      userId,
      items: [],
      totalAmount: 0,
      itemCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.carts.push(newCart);
    return newCart;
  }
}