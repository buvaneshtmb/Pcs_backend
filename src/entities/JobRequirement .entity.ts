import { 
    Entity, BaseEntity, Column, PrimaryGeneratedColumn ,CreateDateColumn 
    , UpdateDateColumn, BeforeInsert , BeforeUpdate , ManyToOne, OneToMany
} from 'typeorm'
import { BusinessDepartmentEntity } from './businessDepartment.entity'
import { ApplicantEntity } from './applicant.entity'

@Entity({ name : 'jobrequirement'})
export class JobRequirementEntity  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    jobRole : string

    @Column({ type : 'text'})
    jobDescription : string

    @Column()
    experience : string 

    @Column()
    qualification : string

    @Column()
    jobType : string

    @Column()
    salary : string

    @Column()
    location : string  

    @ManyToOne(() => BusinessDepartmentEntity , (business) => business.id)
    department : BusinessDepartmentEntity

    @OneToMany( () => ApplicantEntity, (applicant) => applicant.business )
    applicant : ApplicantEntity
}