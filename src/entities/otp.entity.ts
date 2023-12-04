import { 
    Entity, BaseEntity, Column, PrimaryGeneratedColumn ,CreateDateColumn 
    , UpdateDateColumn, BeforeInsert , BeforeUpdate , ManyToOne
} from 'typeorm'
import { UserEntity } from './user.entity';

@Entity({ name : 'otp'})
export class OtpEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number
    
    @Column()
    otp : number

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ default: () => 'CURRENT_TIMESTAMP' })
    expire: Date;

    @BeforeInsert()
    @BeforeUpdate()
    updateExpire() {
        const now = new Date();

        // Check if the current record has expired
        if (this.expire && this.expire <= now) {
        // Handle expiration logic, e.g., throw an exception or mark the entity as expired
        throw new Error('Record has expired.');
        }

        // Update the expire column to be 30 seconds from now
        now.setSeconds(now.getSeconds() + 30);
        this.expire = now;
    }

    // @Column({ default: () => 'CURRENT_TIMESTAMP' })
    // expire: Date;

    // @BeforeInsert()
    // updateExpire() {
    //     const now = new Date();
    //     now.setSeconds(now.getSeconds() + 30); // Set expire time to 30 seconds from now
    //     this.expire = now;
    // }

    @ManyToOne(() => UserEntity, (user) => user.id)
    user : UserEntity
}