import {
    IsBoolean,
    IsEmail,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  export class UpdateUsuarioReferenciaDto {

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsOptional()
    referente?: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsOptional()
    referido?: string;
  
    
  }
  