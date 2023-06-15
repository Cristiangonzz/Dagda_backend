import {
    IsBoolean,
    IsEmail,
    IsNumber,
    IsPositive,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  export class UpdateUsuarioDto {
    @ApiProperty()
    @IsString()
    primer_nombre?: string;
  
    @ApiProperty()
    @IsString()
    segundo_nombre?: string;
  
    @ApiProperty()
    @IsString()
    primer_apellido?: string;
  
    @ApiProperty()
    @IsString()
    segundo_apellido?: string;
  
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    telefono?: string;
  
    @ApiProperty()
    @IsString()
    foto?: string;
  
    @ApiProperty()
    @IsString()
    usuario?: string;
  
    @ApiProperty()
    @IsString()
    clave?: string;
  
    @ApiProperty()
    @IsString()
    @IsEmail()
    email?: string;
  
    @ApiProperty()
    @IsNumber()
    tipo_usuario?: number;
  
    @ApiProperty()
    @IsNumber()
    usuario_verificado?: number;
  
    @ApiProperty()
    @IsBoolean()
    vigente?: boolean;
  }
  