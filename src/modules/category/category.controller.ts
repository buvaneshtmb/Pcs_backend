import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryDto } from './dto/category.dto';

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) {}

    @ApiOperation({ summary : "Get All Categories"})
    @Get('/:category')
    async categories(@Param('category') category : string){
        return await this.categoryService.categories(category)
    }

    @ApiOperation({ summary : "Update Likes and DisLikes"})
    @Put('/:user_id')
    async updatelikes(@Param('user_id') user_id : string , @Body() CategoryDto: CategoryDto){
        return await this.categoryService.updatelikes(user_id , CategoryDto)
    }
}
