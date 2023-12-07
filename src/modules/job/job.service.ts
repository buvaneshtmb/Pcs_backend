import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ApplicantEntity } from 'src/entities/applicant.entity';
import { ApplicantDto } from './dto/applicant.dto';
import { JobRequirementEntity } from 'src/entities/JobRequirement.entity';

@Injectable()
export class JobService {
    constructor(
        @InjectDataSource() private dataSource : DataSource ,
        @InjectRepository(ApplicantEntity) 
        private readonly applicantRepository : Repository<ApplicantEntity>,
        @InjectRepository(JobRequirementEntity) 
        private readonly jobRequiremenRepository : Repository<JobRequirementEntity>
    ){}


    async getJob(){
        const job = await this.dataSource.query(
            `select t2.*, t1.department from businessdepartment 
            as t1 join jobrequirement as t2 on t1.id = t2.departmentId
            order by t2.id asc`
        )

        return{
            statusCode : 200,
            job 
        }
    }

    async getFile(requirementId : any ,files : any, req :any , applicantDto : ApplicantDto){
            try {
                const applicant = new ApplicantEntity()

                applicant.firstName = applicantDto.firstName
                applicant.LastName = applicantDto.LastName
                applicant.email = applicantDto.email
                applicant.mobile = applicantDto.mobile
                applicant.currentCtc = applicantDto.currentCtc
                applicant.expectedCtc = applicantDto.expectedCtc
                applicant.expectedCtc = applicantDto.expectedCtc
                applicant.preferredLocation = applicantDto.preferredLocation
                applicant.resume = files[0].path
                applicant.portfolio = files[1].path ?? null

                const jobRequirement = await this.jobRequiremenRepository.findOne({where : {id : Number(requirementId)}})
                applicant.jobRequirement = jobRequirement

                await this.applicantRepository.save(applicant)
                return {
                    statusCode : 201,
                    message : "Successfully Applied"
                }
                    } catch (error) {
                        console.log("errror--------->>>",error)
                    }


    }
}
