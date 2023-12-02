import { 
    Entity, BaseEntity, Column, PrimaryGeneratedColumn ,CreateDateColumn 
    , UpdateDateColumn,
    ManyToOne
} from 'typeorm'

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

    @Column()
    subname : string

    @Column()
    image : string

    @Column()
    size : string

    @Column("simple-array")
    likes: number[]

    // @Column({ type: 'varchar', length: 255, default: '[]' })
    // likes: number[];


    // @Column(
    //     {
    //     type : 'enum',
    //     enum : Flags,
    //     default :Flags.N
    // }
    // )
    // likes : number

}