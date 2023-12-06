import { Controller, Post, Get, Res, Req, UploadedFiles ,UploadedFile, UseInterceptors, Body} from '@nestjs/common';
import { JobService } from './job.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response, response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'
import { ApplicantDto } from './dto/applicant.dto';

@ApiTags('job')
@Controller('job')
export class JobController {
    constructor(
        private readonly jobservice : JobService
    ){}

    @ApiOperation({ summary : "Get all the JobRequirement" }) 
    @Get()
    async getJob(){
        return this.jobservice.getJob()
    }

    @ApiOperation({ summary: "Get all the JobRequirement" })
    @Post('')
    @UseInterceptors(FilesInterceptor('file'),)
    async getFile(@UploadedFiles() files : Express.Multer.File, @Req() req : Request , @Body() applicantDto : ApplicantDto ){
        console.log(req)
        return this.jobservice.getFile(files, req, applicantDto)
    }

}
