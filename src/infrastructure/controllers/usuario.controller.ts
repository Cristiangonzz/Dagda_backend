import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsuarioDelegate } from 'src/application/delegates/usuario.delegate';
import { UsuarioService } from '../services/usuario.service';
import { RegistrarUsuarioDto } from '../dto/create/create-usuario.dto';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { UpdateUsuarioDto } from '../dto/create/update-usuario.dto';
import { SignInDto } from '../dto/create/sign-in.dto';

@ApiTags('usuario')
@Controller('usuario')
export class UsuarioController {
  private readonly useCase: UsuarioDelegate;
  constructor(private readonly usuarioService: UsuarioService) {
    this.useCase = new UsuarioDelegate(this.usuarioService);
  }

  @ApiOperation({ summary: 'create  Usuario' })
  @Post()
  createUsuario(
    @Body() usuario: RegistrarUsuarioDto,
  ): Observable<UsuarioDomainEntity> {
    this.useCase.toCreateUsuario();
    return this.useCase.execute(usuario);
  }

  @ApiOperation({ summary: 'update  Usuario' })
  @Put('update/:email')
  updateUsuario(
    @Param('email') email: string,
    @Body() newUsuario: UpdateUsuarioDto,
  ): Observable<UsuarioDomainEntity> {
    this.useCase.toUpdateUsuario();
    return this.useCase.execute(email, newUsuario);
  }

  @ApiOperation({ summary: 'Get Id Usuario' })
  @Get('getId/:id')
  getIdUsuario(@Param('id') id: string): Observable<UsuarioDomainEntity> {
    this.useCase.toFindIdUsuarios();
    return this.useCase.execute(id);
  }
  @ApiOperation({ summary: 'Get Email Usuario' })
  @Get('getEmail/:email')
  getEmailUsuario(@Param('email') email: string): Observable<UsuarioDomainEntity> {
    this.useCase.toFindEmailUsuarios();
    return this.useCase.execute(email);
  }

  @ApiOperation({ summary: 'Delete  Usuario' })
  @Delete('delete/:email')
  deleteUsuario(@Param('email') email: string): Observable<boolean> {
    this.useCase.toDeleteUsuario();
    return this.useCase.execute(email);
  }

  @ApiOperation({ summary: 'find All Usuario' })
  @Get()
  findAllUsuario(): Observable<UsuarioDomainEntity[]> {
    this.useCase.toFindAllUsuarios();
    return this.useCase.execute();
  }

  @ApiOperation({ summary: 'Sign In Usuario' })
  @Post('signIn/')
  signInUsuario(@Body() signIn: SignInDto): Observable<string> {
    this.useCase.toSignInUsuario();
    return this.useCase.execute(signIn);
  }
}
