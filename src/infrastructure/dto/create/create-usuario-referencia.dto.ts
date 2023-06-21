import {  IsEmail, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegistrarUsuarioReferenciaDto {

    @ApiProperty()
    @IsString()
    @IsEmail()
    usu_referente: string;
    
    @ApiProperty()
    @IsString()
    @IsEmail()
    usu_referido: string;
    
}
