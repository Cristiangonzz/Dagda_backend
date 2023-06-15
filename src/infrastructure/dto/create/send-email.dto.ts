import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendEmailDto {
  @ApiProperty()
  @IsString()
  nombreTo: string;
  @ApiProperty()
  @IsEmail()
  emailTo: string;
  @ApiProperty()
  @IsString()
  nombreFrom: string;
  @ApiProperty()
  @IsEmail()
  emailFrom: string;
  @ApiProperty()
  @IsString()
  subject: string;
  @ApiProperty()
  @IsString()
  body: string;
}
