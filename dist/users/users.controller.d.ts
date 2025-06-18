import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse as CustomApiResponse } from '../common/interfaces/api-response.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): CustomApiResponse;
    findAll(): CustomApiResponse;
    findOne(id: string): CustomApiResponse;
    update(id: string, updateUserDto: UpdateUserDto): CustomApiResponse;
    remove(id: string): void;
}
