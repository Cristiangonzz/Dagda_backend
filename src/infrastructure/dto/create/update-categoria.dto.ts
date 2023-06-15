import {  IsBoolean, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoriaDto {

    @ApiProperty()
    @IsString()
    nombre?: string;
    
    @ApiProperty()
    @IsBoolean()
    vigente?: boolean;
    
}