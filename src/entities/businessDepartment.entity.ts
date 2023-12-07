import { 
    Entity, BaseEntity, Column, PrimaryGeneratedColumn ,CreateDateColumn 
    , UpdateDateColumn, BeforeInsert , BeforeUpdate , OneToMany
} from 'typeorm'

import { JobRequirementEntity } from './JobRequirement.entity'

@Entity({ name : "businessdepartment" })
export class BusinessDepartmentEntity extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    department : string

    @OneToMany( () => JobRequirementEntity,(job) => job.department)
    job : JobRequirementEntity
}