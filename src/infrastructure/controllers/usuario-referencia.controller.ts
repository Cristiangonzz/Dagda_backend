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
import { UsuarioReferenciaService } from '../services/usuario-referencia.service';
import { UsuarioReferenciaDelegate } from 'src/application/delegates/usuario-referencia.delegate';
import { RegistrarUsuarioReferenciaDto } from '../dto/create/create-usuario-referencia.dto';
import { UsuarioReferenciaDomainEntity } from 'src/domain/entities/usuario-referencia.entity.domain';
import { UpdateUsuarioReferenciaDto } from '../dto/create/update-usuario-referencia.dto';

@ApiTags('usuario Referencia')
@Controller('usuarioReferencia')
export class UsuarioReferenciaController {
  private readonly useCase: UsuarioReferenciaDelegate;
  constructor(private readonly usuarioReferenciaService: UsuarioReferenciaService) {
    this.useCase = new UsuarioReferenciaDelegate(this.usuarioReferenciaService);
  }

  @ApiOperation({ summary: 'create  Usuario Referencia' })
  @Post()
  createUsuarioReferencia(
    @Body() usuarioReferencia: RegistrarUsuarioReferenciaDto,
  ): Observable<UsuarioReferenciaDomainEntity> {
    this.useCase.toCreateUsuarioReferencias();
    return this.useCase.execute(usuarioReferencia);
  }

  @ApiOperation({ summary: 'update  Usuario Referencia' })
  @Put('update/:id')
  updateUsuarioReferencia(
    @Param('id') id: string,
    @Body() newUsuarioReferencia: UpdateUsuarioReferenciaDto,
  ): Observable<UsuarioReferenciaDomainEntity> {
    this.useCase.toUpdateUsuarioReferencia();
    return this.useCase.execute(id, newUsuarioReferencia);
  }

  @ApiOperation({ summary: 'Get Id Usuario Referencia' })
  @Get('getId/:id')
  getIdUsuarioReferencia(@Param('id') id: string): Observable<UsuarioReferenciaDomainEntity> {
    this.useCase.toFindIdUsuarioReferencias();
    return this.useCase.execute(id);
  }
  @ApiOperation({ summary: 'Get Email Referido' })
  @Get('getReferido/:email')
  getEmailUsuarioReferencia(
    @Param('email') email: string,
  ): Observable<UsuarioReferenciaDomainEntity> {
    this.useCase.toFindEmailUsuarioReferencias();
    return this.useCase.execute(email);
  }

  @ApiOperation({ summary: 'Delete  Usuario Referencia' })
  @Delete('delete/:id')
  deleteUsuarioReferencia(@Param('id') id: string): Observable<boolean> {
    this.useCase.toDeleteUsuarioReferencia();
    return this.useCase.execute(id);
  }

  @ApiOperation({ summary: 'find All Usuario Referencia' })
  @Get()
  findAllUsuarioReferencia(): Observable<UsuarioReferenciaDomainEntity[]> {
    this.useCase.toFindAllUsuarioReferencias();
    return this.useCase.execute();
  }

}
