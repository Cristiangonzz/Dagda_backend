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
import { CursoDelegate } from 'src/application/delegates/curso.delegate';
import { CursoService } from '../services/curso.service';
import { CategoriaService } from '../services/categoria.service';
import { CrearCursoDto } from '../dto/create/create-curso.dto';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { UpdateCursoDto } from '../dto/create/update-curso.dto';

@ApiTags('curso')
@Controller('curso')
export class CursoController {
  private readonly useCase: CursoDelegate;
  constructor(
    private readonly cursoService: CursoService,
    private readonly categoriaService: CategoriaService
    ) {
    this.useCase = new CursoDelegate(this.cursoService,this.categoriaService);
  }

  @ApiOperation({ summary: 'create  curso' })
  @Post('/create')
  createCurso(
    @Body() curso: CrearCursoDto,
  ): Observable<CursoDomainEntity> {
    this.useCase.toCreateCurso();
    return this.useCase.execute(curso);
  }

  @ApiOperation({ summary: 'update  Curso' })
  @Put('update/:titulo')
  updateCurso(
    @Param('titulo') titulo: string,
    @Body() newCurso: UpdateCursoDto,
  ): Observable<CursoDomainEntity> {
    this.useCase.toUpdateCurso();
    return this.useCase.execute(titulo, newCurso);
  }

  @ApiOperation({ summary: 'Get Curso' })
  @Get('getId/:id')
  getIdCurso(
    @Param('id') id: string,
  ): Observable<CursoDomainEntity> {
    this.useCase.toFindIdCursos();
    return this.useCase.execute(id);
  }
  @ApiOperation({ summary: 'Get Curso' })
  @Get('getTitulo/:titulo')
  getTituloCurso(
    @Param('titulo') titulo: string,
  ): Observable<CursoDomainEntity> {
    this.useCase.toFindTituloCursos();
    return this.useCase.execute(titulo);
  }


  @ApiOperation({ summary: 'Delete  Curso'})
  @Delete('delete/:titulo')
  deleteCurso(@Param('titulo') titulo: string): Observable<boolean> {
    this.useCase.toDeleteCurso();
    return this.useCase.execute(titulo);
  }

  @ApiOperation({ summary: 'find All Curso' })
  @Get()
  findAllCurso(): Observable<CursoDomainEntity[]> {
    this.useCase.toFindAllCursos();
    return this.useCase.execute();
  }
}
