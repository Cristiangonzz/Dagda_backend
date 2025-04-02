import {  IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CrearCategoriaDto {

    @ApiProperty()
    @IsString()
    nombre: string;
    
}