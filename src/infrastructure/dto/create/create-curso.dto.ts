import { IsString, IsNumber, IsArray, IsOptional } from 'class-validator';
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
  @IsNumber()
  precio: number;
  //programa
  @ApiProperty()
  @IsOptional()
 // @IsString({ each: true })
  tituloPrograma?: string[];

  @ApiProperty()
  @IsOptional()
 // @IsString({ each: true })
  descripcionPrograma?: string[];

}
