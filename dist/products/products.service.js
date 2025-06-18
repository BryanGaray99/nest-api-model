"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [
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
    }
    findAll() {
        return this.products.filter(product => product.isActive);
    }
    findOne(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    create(createProductDto) {
        const newProduct = {
            id: (0, uuid_1.v4)(),
            ...createProductDto,
            isActive: createProductDto.isActive ?? true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, updateProductDto) {
        const productIndex = this.products.findIndex(p => p.id === id);
        if (productIndex === -1) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        this.products[productIndex] = {
            ...this.products[productIndex],
            ...updateProductDto,
            updatedAt: new Date(),
        };
        return this.products[productIndex];
    }
    remove(id) {
        const productIndex = this.products.findIndex(p => p.id === id);
        if (productIndex === -1) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        this.products.splice(productIndex, 1);
    }
    findByCategory(categoryId) {
        return this.products.filter(p => p.categoryId === categoryId && p.isActive);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map