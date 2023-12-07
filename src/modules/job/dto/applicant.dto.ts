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

    @ApiProperty({ description : "firstName", example : "buvanesh"})
    @IsString()
    firstName :string
    
    @ApiProperty({ description : "LastName", example : "T"})
    @IsString()
    LastName :string  

    @ApiProperty({ description : "email", example : "buvaneshtmb@gmail.com"})
    @IsEmail()
    email :string

    @ApiProperty({ description : "mobile", example : "9688327012"})
    @IsString()
    mobile :string

    @ApiProperty({ description : "currentCtc", example : "2.4 l"})
    @IsString()
    currentCtc :string

    @ApiProperty({ description : "expectedCtc", example : "5.0 l"})
    @IsString()
    expectedCtc :string

    @ApiProperty({ description : "preferredLocation", example : "Tenkasi"})
    @IsString()
    preferredLocation :string

    @ApiProperty({ description : "NoticePeriod", example : "N"})
    @IsString()
    NoticePeriod : Flags

}