import {
    IsBoolean,
    IsEmail,
    IsNumber,
    IsPositive,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  
  export class UpdateUsuarioReferenciaDto {

    @ApiProperty()
    @IsString()
    @IsEmail()
    referente?: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    referido?: string;
  
    
  }
  