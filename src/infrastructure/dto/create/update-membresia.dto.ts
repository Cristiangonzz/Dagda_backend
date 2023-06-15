import {  IsBoolean, IsNumber, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateMembresiaDto {

    @ApiProperty()
    @IsString()
    nombre?: string;
    
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    costo?: number;

    @ApiProperty()
    @IsBoolean()
    vigente?: boolean;

    @ApiProperty()
    @IsBoolean()
    puede_referenciar?: boolean;
    
}