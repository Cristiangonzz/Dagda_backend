import {  IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GetNombreCategoriaDto {

    @ApiProperty()
    @IsString()
    nombre: string;
}