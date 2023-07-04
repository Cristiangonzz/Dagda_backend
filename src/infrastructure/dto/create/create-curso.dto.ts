import { IsString, IsNumber, IsArray, IsOptional, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearCursoDto {
  @ApiProperty()
  @IsString()
  titulo: string;

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
  categoria: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  detalle?: string;

  @ApiProperty()
  //@IsPositive()
  precio: number;
  
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
