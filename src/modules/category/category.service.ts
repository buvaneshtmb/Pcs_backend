import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor ( 
        @InjectDataSource() private dataSource : DataSource,
        @InjectRepository(CategoryEntity)  private readonly categoryEntity : Repository<CategoryEntity>
        ) {}

    async categories(){
        const category = await this.dataSource.query(`select * from category`)
        return {
            "statusCode" : 200,
            data : category
        }
    }

    async updatelikes(user_id : any ,CategoryDto : CategoryDto ){

        const category = await CategoryEntity.findOne({where : {id : Number(CategoryDto.Category_id)}});

        const getvalue = category?.likes?.includes(user_id)

        if (getvalue){
            const updatedLikes = category?.likes?.filter(likeId => likeId !== user_id);
            category.likes = updatedLikes;

        return await category.save();
        }

        category.likes.push(user_id);

        return await category.save();
    }
}
