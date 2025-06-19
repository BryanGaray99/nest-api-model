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
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiResponse as CustomApiResponse } from '../common/interfaces/api-response.interface';

@ApiTags('categories')
@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({ status: 201, description: 'Category created successfully' })
  create(@Body() createCategoryDto: CreateCategoryDto): CustomApiResponse {
    const category = this.categoriesService.create(createCategoryDto);
    return {
      success: true,
      data: category,
      message: 'Category created successfully',
      timestamp: new Date().toISOString(),
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiQuery({ name: 'parentId', required: false, description: 'Filter by parent category ID. Use "null" for root categories.' })
  @ApiResponse({ status: 200, description: 'Categories retrieved successfully' })
  findAll(@Query('parentId') parentId?: string): CustomApiResponse {
    const categories = this.categoriesService.findAll(parentId);
    return {
      success: true,
      data: categories,
      message: 'Categories retrieved successfully',
      timestamp: new Date().toISOString(),
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a category by ID' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({ status: 200, description: 'Category retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Category not found' })
  findOne(@Param('id') id: string): CustomApiResponse {
    const category = this.categoriesService.findOne(id);
    return {
      success: true,
      data: category,
      message: 'Category retrieved successfully',
      timestamp: new Date().toISOString(),
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a category' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({ status: 200, description: 'Category updated successfully' })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): CustomApiResponse {
    const category = this.categoriesService.update(id, updateCategoryDto);
    return {
      success: true,
      data: category,
      message: 'Category updated successfully',
      timestamp: new Date().toISOString(),
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a category' })
  @ApiParam({ name: 'id', description: 'Category ID' })
  @ApiResponse({ status: 204, description: 'Category deleted successfully' })
  remove(@Param('id') id: string): void {
    this.categoriesService.remove(id);
  }
}