import { 
    IsNotEmpty, 
    IsNumber, 
    IsString 
    } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CategoryDto{

    @ApiProperty({ description : "Category_id", example : 2})
    @IsNumber()
    Category_id : Number
}