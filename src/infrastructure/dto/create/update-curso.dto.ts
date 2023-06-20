import {  IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCursoDto {

    @ApiProperty()
    @IsString()
    titulo?: string;
    
    @ApiProperty()
    @IsString()
    imagen?: string;

    @ApiProperty()
    @IsString()
    descripcion?: string;

    @ApiProperty()
    @IsString()
    categoria?: string;

    @ApiProperty()
    @IsString()
    subCategoria?: string;

    
    @ApiProperty()
    @IsString()
    detalle?: string;

    @ApiProperty()
    @IsNumber()
    precio?: number;

    
}