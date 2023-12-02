import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { CategoryDto } from './dto/category.dto';

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) {}

    @Get('')
    async categories(){
        return await this.categoryService.categories()
    }

    @Put('/:user_id')
    async updatelikes(@Param('user_id') user_id : string ,@Body() CategoryDto: CategoryDto){
        return await this.categoryService.updatelikes(user_id , CategoryDto)
    }
}
