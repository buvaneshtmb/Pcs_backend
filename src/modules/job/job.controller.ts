import { Controller, Post, Get, Res, Req, UploadedFiles ,UploadedFile, UseInterceptors, Body, Param} from '@nestjs/common';
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

    @ApiOperation({ summary: "Applied for the Job" })
    @Post(':requirementId')
    @UseInterceptors(FilesInterceptor('file'),)
    async getFile(  @Param('requirementId') requirementId : string,
                    @UploadedFiles() files : Express.Multer.File, 
                    @Req() req : Request, @Body() applicantDto : ApplicantDto
                ){
        return this.jobservice.getFile(requirementId, files, req, applicantDto)
                }

}
