import { 
    Entity, BaseEntity, Column, PrimaryGeneratedColumn ,CreateDateColumn 
    , UpdateDateColumn,
    ManyToOne,
    OneToMany
} from 'typeorm'

import { ProductEntity } from './product.entity'

export enum Flags{
    N = 'N',
    Y = 'Y'
}


@Entity({ name : 'category'})
export class CategoryEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @OneToMany(() => ProductEntity,(product)=> product.category)
    product : ProductEntity

}