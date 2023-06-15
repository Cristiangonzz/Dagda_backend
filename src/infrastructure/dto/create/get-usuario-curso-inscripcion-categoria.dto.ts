import {  IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class GetUsuarioCursoInscripcionDto {

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    curso: string;
}