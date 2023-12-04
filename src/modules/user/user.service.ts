import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Flags } from 'src/entities/user.entity';
import { ContactNumberDto } from './dto/phone_number.dto';
import { OtpEntity } from 'src/entities/otp.entity';
import { VerifyOtpDto } from './dto/verifyotp.dto';
// import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UserService {
    constructor(
    @InjectRepository(UserEntity) 
    private readonly userRepository : Repository<UserEntity> ,
    @InjectRepository(OtpEntity) 
    private readonly otpRepository : Repository<OtpEntity>,
    @InjectDataSource()  private dataSource : DataSource,
    private readonly jwtService : JwtService  ) {}

    async signup(UserDto : UserDto){
        try {
            const existingUser = await this.dataSource.query(
                `select * from users where email = '${UserDto.email}' or phone_number = '${UserDto.phone_number}' `
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
            console.log(error)
            throw error
            // throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async sendOtp(contactNumberDto : ContactNumberDto){
        try {
            const user = await this.dataSource.query(`
            select * from users where phone_number = ${contactNumberDto.phone_number}`)

            console.log("user------->>>",user)
            if(user?.length === 0){
                return {
                    statusCode : 404,
                    message : "Phone Number Does Not Exist"
                } 
               }

            let otp = ''
            let length = 6
            let charset = '123456789'   
            for(let i = 0, n = charset.length; i<length; ++i){
                otp += charset.charAt(Math.floor(Math.random() * n))
            }

            await this.dataSource.query(
                `delete from otp where userId = ${user[0].id}`
            )

            let newOtp = new OtpEntity()
            newOtp.user = user[0].id
            newOtp.otp = Number(otp) 
            console.log("newOtp-------->>>",newOtp)  

            await this.otpRepository.save(newOtp)

            ///Required for SMS config and function







            return {
                statusCode :201,
                message : "Otp Send Successfully"
            }

        } catch (error) {
            console.log(error)
        }
    }

    async jwtToken(name : string ,email : string ,phone_number : string){

        const payload = { name , email ,phone_number}
        return {
            access_token : this.jwtService.sign(payload)
        }
    }

    async verifyOtp(VerifyOtpDto : VerifyOtpDto){
        try {
            const user = await this.dataSource.query(`
            select * from users as t1 join otp as t2 on t1.id = t2.userId
             where t1.phone_number = ${VerifyOtpDto.phone_number}
             and t2.otp = ${VerifyOtpDto.otp}`)
        
        if(user?.length === 1){
            const { name, email, phone_number } = user[0]
            const { access_token } = await this.jwtToken( name, email , phone_number )
            return {
                statusCode : 200,
                message:"User Signin Successful",
                name,
                email,
                phone_number,
                access_token
            }
            }
        else {
            return{
                statusCode : 400,
                message : "Invalid or expired OTP. Login again to get new OTP"
            }
        }

        } catch (error) {
            console.log(error)
        }  
    }

}
