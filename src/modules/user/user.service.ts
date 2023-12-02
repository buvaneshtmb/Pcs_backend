import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Flags } from 'src/entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) 
    private readonly userRepository : Repository<UserEntity> ,
    @InjectDataSource()  private dataSource : DataSource ) {}

    async signup(UserDto : UserDto){

        try {
            const existingUser = await this.dataSource.query(
                `select * from users where email = ${UserDto.email} or phone_number =${UserDto.phone_number} `
            )
    
            if (existingUser?.length != 0){
                 throw new HttpException('Mobile Number/Email Already Exists',HttpStatus.BAD_REQUEST)
            }

            let user = new UserEntity()
            user.name = UserDto.name
            user.phone_number = UserDto.name
            user.checkforwhatsapp = UserDto.checkforwhatsapp
            user.email = UserDto.email
            user.pincode = UserDto.pincode
            
            await this.userRepository.save(user)

            return {
                statusCode : 201,
                message : "User Sign Up Successfully"
            }
        } catch (error) {
            
        }
    }
}
