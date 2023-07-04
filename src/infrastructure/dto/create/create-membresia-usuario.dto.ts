import {  IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CrearMembresiaUsuarioDto {

    @ApiProperty()
    @IsString()
    email: string;
    
    @ApiProperty()
    @IsString()
    nombre: string;


    
}