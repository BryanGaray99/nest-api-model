import { Category } from './interfaces/category.interface';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesService {
    private categories;
    findAll(parentId?: string): Category[];
    findOne(id: string): Category;
    create(createCategoryDto: CreateCategoryDto): Category;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Category;
    remove(id: string): void;
}
