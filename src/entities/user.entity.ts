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
import { OtpEntity } from './otp.entity'

export enum Flags{
    N = 'N',
    Y = 'Y'
}

export enum Roles{
    ADMIN = "Admin",
    USER = "User"
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
    checkforwhatsapp : Flags

    @Column()
    email : string

    @Column()
    pincode : string

    @Column({
        type : 'enum',
        enum : Roles,
        default : Roles.USER
    })
    role : string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => OtpEntity,(otp)=>otp.user)
    otp : OtpEntity
}
