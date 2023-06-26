import { IsString, IsNumber, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CrearCursoDto {
  @ApiProperty()
  @IsString()
  titulo: string;

  @ApiProperty()
  @IsString()
  imagen?: string;

  @ApiProperty()
  @IsString()
  descripcion?: string;

  @ApiProperty()
  @IsString()
  categoria: string;

  @ApiProperty()
  @IsString()
  detalle?: string;

  @ApiProperty()
  @IsNumber()
  precio: number;
  //programa
  @ApiProperty()
  @IsArray()
  tituloPrograma?: string[];

  @ApiProperty()
  @IsArray()
  descripcionPrograma?: string[];

}
