import { IsString, IsNumber, ArrayMinSize } from 'class-validator';
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
  @ArrayMinSize(1)
  @IsString({each : true})
  tituloPrograma?: string[];

  @ApiProperty()
  @ArrayMinSize(1)
  @IsString({each : true})
  descripcionPrograma?: string[];

}
