import { 
    Entity, BaseEntity, Column, PrimaryGeneratedColumn ,CreateDateColumn 
    , UpdateDateColumn, BeforeInsert , BeforeUpdate , ManyToOne
} from 'typeorm'
import { JobRequirementEntity } from './JobRequirement .entity'

export enum Flags{
    N = 'N',
    Y = 'Y'
}

@Entity({ name : "applicant"})
export class ApplicantEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    resume : string

    @Column()
    portfolio : string

    @Column()
    firstName : string
    
    @Column()
    LastName : string

    @Column()
    email : string

    @Column()
    mobile : string

    @Column()
    currentCtc : string

    @Column()
    expectedCtc : string

    @Column()
    preferredLocation : string

    @Column({
        type :"enum",
        enum : Flags,
        default : Flags.N
    })
    NoticePeriod : Flags

    @ManyToOne( () =>JobRequirementEntity, (business) => business.id )
    business :  JobRequirementEntity
}