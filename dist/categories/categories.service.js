"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CategoriesService = class CategoriesService {
    constructor() {
        this.categories = [
            {
                id: 'cat-1',
                name: 'Electronics',
                description: 'Electronic devices and accessories',
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'cat-2',
                name: 'Smartphones',
                description: 'Mobile phones and accessories',
                parentId: 'cat-1',
                isActive: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ];
    }
    findAll() {
        return this.categories.filter(category => category.isActive);
    }
    findOne(id) {
        const category = this.categories.find(c => c.id === id);
        if (!category) {
            throw new common_1.NotFoundException(`Category with ID ${id} not found`);
        }
        return category;
    }
    create(createCategoryDto) {
        const newCategory = {
            id: (0, uuid_1.v4)(),
            ...createCategoryDto,
            isActive: createCategoryDto.isActive ?? true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        this.categories.push(newCategory);
        return newCategory;
    }
    update(id, updateCategoryDto) {
        const categoryIndex = this.categories.findIndex(c => c.id === id);
        if (categoryIndex === -1) {
            throw new common_1.NotFoundException(`Category with ID ${id} not found`);
        }
        this.categories[categoryIndex] = {
            ...this.categories[categoryIndex],
            ...updateCategoryDto,
            updatedAt: new Date(),
        };
        return this.categories[categoryIndex];
    }
    remove(id) {
        const categoryIndex = this.categories.findIndex(c => c.id === id);
        if (categoryIndex === -1) {
            throw new common_1.NotFoundException(`Category with ID ${id} not found`);
        }
        this.categories.splice(categoryIndex, 1);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
//# sourceMappingURL=categories.service.js.map