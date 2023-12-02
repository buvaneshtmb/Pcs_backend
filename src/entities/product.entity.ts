import { 
    Entity, BaseEntity, Column, PrimaryGeneratedColumn ,CreateDateColumn 
    , UpdateDateColumn,
    ManyToOne
} from 'typeorm'
import { CategoryEntity } from './category.entity'

export enum Flags{
    N = 'N',
    Y = 'Y'
}


@Entity({ name : 'product'})
export class ProductEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column()
    subname : string

    @Column()
    image : string

    @Column()
    size : string

    @Column("simple-array")
    likes: number[]

    @Column({type : 'enum',
            enum : Flags,
            default : Flags.N
            })
    trending : Flags

    @Column({ type : 'text'})
    description : string

    @CreateDateColumn()
    createdAt : Date

    @UpdateDateColumn()
    updatedAt :Date

    @ManyToOne(() => CategoryEntity, (category) => category.id)
    category : CategoryEntity

}