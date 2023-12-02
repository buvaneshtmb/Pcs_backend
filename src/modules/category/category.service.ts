import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CategoryEntity } from 'src/entities/category.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    constructor ( 
        @InjectDataSource() private dataSource : DataSource,
        @InjectRepository(CategoryEntity)  private readonly categoryEntity : Repository<CategoryEntity>
        ) {}

    async categories(category : string){
        const data = await this.dataSource.query(
            `select t2.id, t2.name, t2.subname, t2.image, t2.size, t2.likes, t2.trending, t2.description
            from category as t1 join product as t2 on t1.id = t2.categoryId
             where t1.name like '%${category}%'`
            )
        return {
            "statusCode" : 200,
             data
        }
    }

    async updatelikes(user_id : any ,CategoryDto : CategoryDto ){

        const product = await ProductEntity.findOne({where : {id : Number(CategoryDto.Category_id)}});

        const getvalue = product.likes.includes(user_id)

        if (getvalue){
            const updatedLikes = product?.likes?.filter(likeId => likeId !== user_id);
            product.likes = updatedLikes;

        return await product.save();
        }

        product.likes.push(user_id);

        return await product.save();
    }
}
