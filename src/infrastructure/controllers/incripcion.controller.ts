import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { IncripcionDelegate } from 'src/application/delegates/incripcion.delegate';
import { IncripcionDomainEntity } from 'src/domain/entities/incripcion.entity.domain';
import { CrearIncripcionDto } from '../dto/create/create-incripcion.dto';
import { UsuarioService } from '../services/usuario.service';
import { IncripcionService } from '../services/incripcion.service';
import { CursoService } from '../services/curso.service';
import { IncripcionRepository } from '../dataBase/mysql/repositories/incripcion.repository';
import { Repository } from 'typeorm';
import { IncripcionMySqlEntity } from '../dataBase/mysql/entities/incripcion-mysql.entity';
import { GetUsuarioCursoIncripcionUseCase } from 'src/application/useCase/incripcion/get-usuario-curso-incripcion.use-case.application';
import { GetUsuarioCursoInscripcionDto } from '../dto/create/get-usuario-curso-inscripcion-categoria.dto';

@ApiTags('inscripcion')
@Controller('inscripcion')
export class IncripcionController {
  private readonly useCase: IncripcionDelegate;
  constructor(
    private readonly incripcionService: IncripcionService,
    private readonly usuarioService: UsuarioService,
    private readonly cursoService: CursoService,
  ) {
    this.useCase = new IncripcionDelegate(
      this.incripcionService,
      this.usuarioService,
      this.cursoService,
    );
  }

  @ApiOperation({ summary: 'create  Incripcion' })
  @Post()
  createIncripcion(
    @Body() Incripcion: CrearIncripcionDto,
  ): Observable<IncripcionDomainEntity> {
    this.useCase.toCreateIncripcion();
    return this.useCase.execute(Incripcion);
  }

  @ApiOperation({ summary: 'Get By Id Incripcion' })
  @Get('get/:id')
  getIncripcion(@Param('id') id: string): Observable<IncripcionDomainEntity> {
    this.useCase.toFindIdIncripcions();
    return this.useCase.execute(id);
  }

  @ApiOperation({ summary: 'Delete  Incripcion' })
  @Delete('delete/:nombre')
  deleteIncripcion(@Param('nombre') nombre: string): Observable<boolean> {
    this.useCase.toDeleteIncripcion();
    return this.useCase.execute(nombre);
  }

  @ApiOperation({ summary: 'find All Incripcion' })
  @Get()
  findAllIncripcion(): Observable<IncripcionDomainEntity[]> {
    this.useCase.toFindAllIncripcions();
    return this.useCase.execute();
  }

  @ApiOperation({ summary: 'find usuario Curso Incripcion' })
  @Get('getUsuarioCurso/:email/:titulo')
  findAllUsuarioCurso(
    @Param("email") email: string, @Param("titulo") titulo: string
  ): Promise<IncripcionDomainEntity[]> {
    const casoDeUso = new GetUsuarioCursoIncripcionUseCase(
      this.incripcionService,
    );
    return casoDeUso.execute(email, titulo);
  }
}
