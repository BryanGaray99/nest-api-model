import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiResponse as CustomApiResponse } from '../common/interfaces/api-response.interface';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): CustomApiResponse;
    findAll(parentId?: string): CustomApiResponse;
    findOne(id: string): CustomApiResponse;
    update(id: string, updateCategoryDto: UpdateCategoryDto): CustomApiResponse;
    remove(id: string): void;
}
