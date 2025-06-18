import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { AddItemDto } from './dto/add-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ApiResponse as CustomApiResponse } from '../common/interfaces/api-response.interface';

@ApiTags('cart')
@Controller('api/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':userId')
  @ApiOperation({ summary: 'Get user cart' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Cart retrieved successfully' })
  getCart(@Param('userId') userId: string): CustomApiResponse {
    const cart = this.cartService.findByUserId(userId);
    return {
      success: true,
      data: cart,
      message: 'Cart retrieved successfully',
      timestamp: new Date().toISOString(),
    };
  }

  @Post(':userId/items')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Add item to cart' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 201, description: 'Item added to cart successfully' })
  addItem(@Param('userId') userId: string, @Body() addItemDto: AddItemDto): CustomApiResponse {
    const cart = this.cartService.addItem(userId, addItemDto);
    return {
      success: true,
      data: cart,
      message: 'Item added to cart successfully',
      timestamp: new Date().toISOString(),
    };
  }

  @Patch(':userId/items/:productId')
  @ApiOperation({ summary: 'Update item quantity in cart' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiParam({ name: 'productId', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Cart item updated successfully' })
  updateItem(
    @Param('userId') userId: string,
    @Param('productId') productId: string,
    @Body() updateItemDto: UpdateItemDto,
  ): CustomApiResponse {
    const cart = this.cartService.updateItem(userId, productId, updateItemDto);
    return {
      success: true,
      data: cart,
      message: 'Cart item updated successfully',
      timestamp: new Date().toISOString(),
    };
  }

  @Delete(':userId/items/:productId')
  @ApiOperation({ summary: 'Remove item from cart' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiParam({ name: 'productId', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Item removed from cart successfully' })
  removeItem(@Param('userId') userId: string, @Param('productId') productId: string): CustomApiResponse {
    const cart = this.cartService.removeItem(userId, productId);
    return {
      success: true,
      data: cart,
      message: 'Item removed from cart successfully',
      timestamp: new Date().toISOString(),
    };
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Clear cart' })
  @ApiParam({ name: 'userId', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'Cart cleared successfully' })
  clearCart(@Param('userId') userId: string): CustomApiResponse {
    const cart = this.cartService.clearCart(userId);
    return {
      success: true,
      data: cart,
      message: 'Cart cleared successfully',
      timestamp: new Date().toISOString(),
    };
  }
}