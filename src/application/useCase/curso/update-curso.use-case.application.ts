import { Observable, map, switchMap } from 'rxjs';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';
import { UpdateCursoDto } from 'src/infrastructure/dto/create/update-curso.dto';
import { GetNombreCategoriaUseCase } from '../categoria/get-nombre-categoria.use-case.application copy';
import { ICategoriaDomainService } from 'src/domain/services/categoria.service.domain';
import { CategoriaDomainEntity } from 'src/domain/entities/categoria.entity.domain';

export class UpdateCursoUseCase {
  constructor(
    private readonly cursoService: ICursoDomainService<CursoDomainEntity>,
    private readonly categoriaService: ICategoriaDomainService<CategoriaDomainEntity>,
  ) {}

  execute(id: string, data: UpdateCursoDto): Observable<CursoDomainEntity> {
    const newCurso = new CursoDomainEntity();

    if (data.categoria) {
      const caseCategoria = new GetNombreCategoriaUseCase(
        this.categoriaService,
      );
      return caseCategoria.execute(data.categoria).pipe(
        map((value: CategoriaDomainEntity) => {
          if (value) {
            newCurso.titulo = data.titulo;
            newCurso.imagen = data.imagen;
            newCurso.descripcion = data.descripcion;
            newCurso.detalle = data.detalle;
            newCurso.precio = data.precio;
            newCurso.categoria = value;
            //newCurso.subCategoria = data.subCategoria;
            return newCurso;
          } else {
            throw new Error('No se encontro la categoria');
          }
        }),
        switchMap((curso: CursoDomainEntity) => {
          return this.cursoService.update(id, newCurso);
        }),
      );
    } else {
      newCurso.titulo = data.titulo;
      newCurso.imagen = data.imagen;
      newCurso.descripcion = data.descripcion;
      newCurso.detalle = data.detalle;
      newCurso.precio = data.precio;
      return this.cursoService.update(id, newCurso);
    }
  }
}
