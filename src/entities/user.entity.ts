import { 
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToMany,
    ManyToOne,
    Generated
} from 'typeorm'
import { LoginEntity } from './login.entity'

export enum Flags{
    N = 'N',
    Y = 'Y'
}

@Entity({ name : 'users'})
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column()
    phone_number : string

    @Column({
        type : 'enum',
        enum : Flags,
        default : Flags.N
    })
    checkforwhatsapp : Boolean

    @Column()
    email : string

    @Column()
    pincode : string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => LoginEntity,(otp)=>otp.user)
    otp : LoginEntity
}
