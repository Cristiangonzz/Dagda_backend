import {  IsBoolean, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateMembresiaDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    nombre?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    beneficios?: string;
    
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    costo?: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    vigente?: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    puede_referenciar?: boolean;
    
}