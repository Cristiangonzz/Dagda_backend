import {  IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CrearIncripcionDto {
    @ApiProperty()
    @IsString()
    usuario: string;
    
    @ApiProperty()
    @IsString()
    curso: string;
}