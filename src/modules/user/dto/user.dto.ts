import { 
    IsNotEmpty, 
    IsNumber, 
    IsString ,
    IsEmail
    } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto{

    @IsString()
    name : string
    
    @IsString()
    phone_number : string

    @IsString()
    checkforwhatsapp : Boolean

    @IsEmail()
    email :string

    @IsString()
    pincode : string

}