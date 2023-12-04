import { 
    IsNotEmpty, 
    IsNumber, 
    IsString ,
    IsEmail
    } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class VerifyOtpDto{
    @IsString()
    otp : string

    @IsString()
    phone_number : string
}