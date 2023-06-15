import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MembresiaService } from '../services/membresia.service';
import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { MembresiaUsuarioDelegate } from 'src/application/delegates/membresia-usuario.delegate';
import { MembresiaUsuarioService } from '../services/membresia-usuario.service';
import { UsuarioService } from '../services/usuario.service';
import { CrearMembresiaUsuarioDto } from '../dto/create/create-membresia-usuario.dto';
import { MembresiaUsuarioDomainEntity } from 'src/domain/entities/membresia-usuario.entity.domain';

@ApiTags('membresia Usuario')
@Controller('membresia-usuario')
export class MembresiaUsuarioController {
  private readonly useCase: MembresiaUsuarioDelegate;
  constructor(
    private readonly membresiaUsuarioService: MembresiaUsuarioService,
    private readonly usuarioService: UsuarioService,
    private readonly membresiaService: MembresiaService,
    ) {
    this.useCase = new MembresiaUsuarioDelegate(this.membresiaUsuarioService,this.usuarioService,this.membresiaService);
  }

  @ApiOperation({ summary: 'create  Membresia Usuario' })
  @Post()
  createMembresiaUsuario(
    @Body() newMembresiausuario: CrearMembresiaUsuarioDto,
  ): Observable<MembresiaDomainEntity> {
    this.useCase.toCreateMembresiaUsuario();
    return this.useCase.execute(newMembresiausuario);
  }

  @ApiOperation({ summary: 'Get Id MembresiaUsuario' })
  @Get('getId/:id')
  getIdMembresiaUsuario(
    @Param('id') id: string,
  ): Observable<MembresiaUsuarioDomainEntity> {
    this.useCase.toFindIdMembresiaUsuario();
    return this.useCase.execute(id);
  }

  @ApiOperation({ summary: 'Delete  Membresia Usuario'})
  @Delete('delete/:nombre')
  deleteMembresiaUsuario(@Param('nombre') nombre: string): Observable<boolean> {
    this.useCase.toDeleteMembresiaUsuario();
    return this.useCase.execute(nombre);
  }

  @ApiOperation({ summary: 'find All Membresia Usuario' })
  @Get()
  findAllMembresiaUsuario(): Observable<MembresiaUsuarioDomainEntity[]> {
    this.useCase.toFindAllMembresiaUsuario();
    return this.useCase.execute();
  }
}
