import {  IsBoolean, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoriaDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    nombre?: string;
    
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    vigente?: boolean;
    
}