import {  IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CrearMembresiaUsuarioDto {

    @ApiProperty()
    @IsString()
    usuario: string;
    
    @ApiProperty()
    @IsString()
    membresia: string;


    
}