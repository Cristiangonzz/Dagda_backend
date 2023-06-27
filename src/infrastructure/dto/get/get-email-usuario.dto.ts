import { IsEmail, IsString } from "class-validator";

export class GetEmailUsuarioDTO{
    @IsEmail()
    @IsString()
    email: string;
}