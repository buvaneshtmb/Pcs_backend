import { 
    Entity, BaseEntity, Column, PrimaryGeneratedColumn ,CreateDateColumn 
    , UpdateDateColumn,
    ManyToOne
} from 'typeorm'
import { UserEntity } from './user.entity';

@Entity({ name : 'logins'})
export class LoginEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    otp : number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(()=>UserEntity, (user) => user.id)
    user : UserEntity
}