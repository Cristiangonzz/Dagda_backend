import {  IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateCursoDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    titulo?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    imagen?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    descripcion?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    categoria?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    subCategoria?: string;

    
    @ApiProperty()
    @IsString()
    @IsOptional()
    detalle?: string;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    precio?: number;

     //programa
  @ApiProperty()
  @IsOptional()
  // @IsArray()
  // @IsString({ each: true })
  tituloPrograma?: string[];

  @ApiProperty()
  @IsOptional()
  // @IsArray()
  // @IsString({ each: true })
  descripcionPrograma?: string[];

    
}