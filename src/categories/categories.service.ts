import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Category } from './interfaces/category.interface';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
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

  findAll(parentId?: string): Category[] {
    let filteredCategories = this.categories.filter(category => category.isActive);
    
    if (parentId !== undefined) {
      if (parentId === 'null') {
        // Get root categories (no parent)
        filteredCategories = filteredCategories.filter(category => !category.parentId);
      } else {
        // Get child categories with specific parent
        filteredCategories = filteredCategories.filter(category => category.parentId === parentId);
      }
    }
    
    return filteredCategories;
  }

  findOne(id: string): Category {
    const category = this.categories.find(c => c.id === id);
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  create(createCategoryDto: CreateCategoryDto): Category {
    const newCategory: Category = {
      id: uuidv4(),
      ...createCategoryDto,
      isActive: createCategoryDto.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto): Category {
    const categoryIndex = this.categories.findIndex(c => c.id === id);
    if (categoryIndex === -1) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    this.categories[categoryIndex] = {
      ...this.categories[categoryIndex],
      ...updateCategoryDto,
      updatedAt: new Date(),
    };

    return this.categories[categoryIndex];
  }

  remove(id: string): void {
    const categoryIndex = this.categories.findIndex(c => c.id === id);
    if (categoryIndex === -1) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    this.categories.splice(categoryIndex, 1);
  }
}