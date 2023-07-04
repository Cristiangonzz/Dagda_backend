import {  IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CrearMembresiaDto {

    @ApiProperty()
    @IsString()
    nombre: string;
   
    @ApiProperty()
    @IsString()
    beneficios: string;
    
    @ApiProperty()
    // @IsNumber()
    // @IsPositive()
    costo: number;

    
}