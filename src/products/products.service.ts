import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './interfaces/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 'prod-1',
      name: 'iPhone 15 Pro',
      description: 'Latest Apple iPhone with advanced features',
      price: 999.99,
      categoryId: 'cat-1',
      stock: 50,
      imageUrl: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'prod-2',
      name: 'MacBook Air M2',
      description: 'Powerful laptop with Apple M2 chip',
      price: 1299.99,
      categoryId: 'cat-2',
      stock: 25,
      imageUrl: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Product[] {
    return this.products.filter(product => product.isActive);
  }

  findOne(id: string): Product {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  create(createProductDto: CreateProductDto): Product {
    const newProduct: Product = {
      id: uuidv4(),
      ...createProductDto,
      isActive: createProductDto.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, updateProductDto: UpdateProductDto): Product {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    this.products[productIndex] = {
      ...this.products[productIndex],
      ...updateProductDto,
      updatedAt: new Date(),
    };

    return this.products[productIndex];
  }

  remove(id: string): void {
    const productIndex = this.products.findIndex(p => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    this.products.splice(productIndex, 1);
  }

  findByCategory(categoryId: string): Product[] {
    return this.products.filter(p => p.categoryId === categoryId && p.isActive);
  }
}