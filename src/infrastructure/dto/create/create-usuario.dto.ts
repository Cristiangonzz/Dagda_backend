import {  IsEmail, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegistrarUsuarioDto {

    @ApiProperty()
    primer_nombre: string;
    
    @ApiProperty()
    segundo_nombre?: string;

    @ApiProperty()
    primer_apellido: string;

    @ApiProperty()
    segundo_apellido?: string;

    @ApiProperty()
    telefono: number;

    @ApiProperty()
    foto?: string;

    @ApiProperty()
    usuario: string;

    @ApiProperty()
    clave: string;
 
    @ApiProperty()
    @IsEmail()
    email: string;
}
