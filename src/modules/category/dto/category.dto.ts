import { 
    IsNotEmpty, 
    IsNumber, 
    IsString 
    } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto{

    @IsNumber()
    Category_id : Number
}