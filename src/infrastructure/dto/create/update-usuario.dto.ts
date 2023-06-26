import {
    IsBoolean,
    IsEmail,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  export class UpdateUsuarioDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    primer_nombre?: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    segundo_nombre?: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    primer_apellido?: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    segundo_apellido?: string;
  
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    telefono?: number;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    foto?: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    usuario?: string;
  
    @ApiProperty()
    @IsString()
    @IsOptional()
    clave?: string;
  
    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsOptional()
    email?: string;
  
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    tipo_usuario?: number;
  
    @ApiProperty()
    @IsNumber()
    @IsOptional()
    usuario_verificado?: number;
  
    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    vigente?: boolean;
  }
  