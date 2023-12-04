import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { OtpEntity } from 'src/entities/otp.entity';
import { AuthService } from '../auth/auth.service';
// import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/configs.constants';


@Module({
  imports : [TypeOrmModule.forFeature([
    UserEntity,
    OtpEntity
  ]) ,
  JwtModule.register({
    secret : jwtConfig.secret,
    signOptions : { expiresIn : jwtConfig.expiresIn }
  })
],
  controllers: [UserController],
  providers: [UserService ]
})
export class UserModule {}
