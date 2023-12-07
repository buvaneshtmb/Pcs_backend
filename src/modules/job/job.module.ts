import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';
import { extname } from 'path';
import { ApplicantEntity } from 'src/entities/applicant.entity';
import { JobRequirementEntity } from 'src/entities/JobRequirement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';




@Module({
  imports: [
    MulterModule.register({
      storage: multer.diskStorage({
        destination: (req, file, cb) => {
          // Specify destination directory
          cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
          const ext = extname(file.originalname)
          const filename = `${file.originalname}-${uniqueSuffix}${ext}`
          // Specify filename logic
          cb(null, filename);
        },
      }),
    }),
    TypeOrmModule.forFeature([
      ApplicantEntity ,
      JobRequirementEntity
    ])
    
  ],
  controllers: [JobController],
  providers: [JobService]
})
export class JobModule {}
