import {  IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { isRegExp } from "util/types";

export class CrearCategoriaDto {

    @ApiProperty()
    @IsString()
    nombre: string;
}