import { 
    IsNotEmpty, 
    IsNumber, 
    IsString ,
    IsEmail
    } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto{

    @ApiProperty({ description : "User Name", example : "Buvanesh"})
    @IsString()
    name : string
    
    @ApiProperty({ description : "Phone Number", example : "9688327012"})
    @IsString()
    phone_number : string

    @ApiProperty({ description : "Check for Whatsapp", example : false})
    @IsString()
    checkforwhatsapp : Boolean

    @ApiProperty({ description : "Email ", example : "buvaneshtmb@gmail.com"})
    @IsEmail()
    email :string

    @ApiProperty({ description : "Pincode", example : "627808"})
    @IsString()
    pincode : string

}