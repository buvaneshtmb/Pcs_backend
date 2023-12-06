import { 
    IsEmail,
    IsNotEmpty, 
    IsNumber, 
    IsString 
    } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export enum Flags{
    N = 'N',
    Y = 'Y'
}

export class ApplicantDto{
    @IsString()
    firstName :string
    
    @IsString()
    LastName :string  

    @IsEmail()
    email :string

    @IsString()
    mobile :string

    @IsString()
    currentCtc :string

    @IsString()
    expectedCtc :string

    @IsString()
    preferredLocation :string

    @IsString()
    NoticePeriod : Flags

    @IsString()
    resume :string

    @IsString()
    portfolio :string

    @IsNumber()
    businessId : number
    

}