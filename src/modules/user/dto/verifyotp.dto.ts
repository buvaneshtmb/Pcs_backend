import { 
    IsNotEmpty, 
    IsNumber, 
    IsString ,
    IsEmail
    } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class VerifyOtpDto {

    @ApiProperty({ description : "otp" , example : "423424"})
    @IsString()
    otp : string
 
    @ApiProperty({ description : "phone_number" , example : "9688327012"})
    @IsString()
    phone_number : string
}