import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class JobService {
    constructor(
        @InjectDataSource() private dataSource : DataSource 
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

    async getFile(files, req, applicantDto){

    }
}
