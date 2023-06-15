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
import { CategoriaService } from '../services/categoria.service';
import { CategoriaDelegate } from 'src/application/delegates/categoria.delegate';
import { CrearCategoriaDto } from '../dto/create/create-categoria.dto';
import { CategoriaDomainEntity } from 'src/domain/entities/categoria.entity.domain';
import { UpdateCategoriaDto } from '../dto/create/update-categoria.dto';

@ApiTags('categoria')
@Controller('categoria')
export class CategoriaController {
  private readonly useCase: CategoriaDelegate;
  constructor(
    private readonly categoriaService: CategoriaService
    ) {
    this.useCase = new CategoriaDelegate(this.categoriaService);
  }

  @ApiOperation({ summary: 'create  categoria' })
  @Post()
  createCategoria(
    @Body() categoria: CrearCategoriaDto,
  ): Observable<CategoriaDomainEntity> {
    this.useCase.toCreateCategoria();
    return this.useCase.execute(categoria);
  }

  @ApiOperation({ summary: 'update  Categoria' })
  @Put('update/:nombre')
  updateCategoria(
    @Param('nombre') nombre: string,
    @Body() newCategoria: UpdateCategoriaDto,
  ): Observable<CategoriaDomainEntity> {
    this.useCase.toUpdateCategoria();
    return this.useCase.execute(nombre, newCategoria);
  }

  @ApiOperation({ summary: 'Get By Nombre Categoria' })
  @Get('get-nombre/:nombre')
  getCategoria(
    @Param("nombre") nombre: string,
  ): Observable<CategoriaDomainEntity> {
    this.useCase.toFindNombreCategorias();
    return this.useCase.execute(nombre);
  }

  @ApiOperation({ summary: 'Delete  Categoria' })
  @Delete('delete/:nombre')
  deleteCategoria(@Param('nombre') nombre: string): Observable<boolean> {
    this.useCase.toDeleteCategoria();
    return this.useCase.execute(nombre);
  }

  @ApiOperation({ summary: 'find All Categoria' })
  @Get()
  findAllCategoria(): Observable<CategoriaDomainEntity[]> {
    this.useCase.toFindAllCategorias();
    return this.useCase.execute();
  }
}
