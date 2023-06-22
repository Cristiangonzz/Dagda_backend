import { Observable, map, switchMap } from 'rxjs';
import { CategoriaDomainEntity } from 'src/domain/entities/categoria.entity.domain';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { ICategoriaDomainService } from 'src/domain/services/categoria.service.domain';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';
import { CrearCursoDto } from 'src/infrastructure/dto/create/create-curso.dto';
import { GetNombreCategoriaUseCase } from '../categoria/get-nombre-categoria.use-case.application copy';
import { IProgramaCursoDomain } from '../../../domain/interfaces/programa-curso.interface.domain';




export class CrearCursoUseCase {
  constructor(
    private readonly cursoService: ICursoDomainService<CursoDomainEntity>,
    private readonly categoriaService: ICategoriaDomainService<CategoriaDomainEntity>,
  ) 
  {}

  execute(data: CrearCursoDto): Observable<CursoDomainEntity> {
    const newCurso = new CursoDomainEntity();
    let newCategoria: IProgramaCursoDomain[] = [];
    const caseCategoria = new GetNombreCategoriaUseCase(this.categoriaService);
    //Guardar imagen en el servidor
    if(data.tituloPrograma){
      data.tituloPrograma.forEach((element, index) => {
        newCategoria.push({
          tituloPrograma: element,
          descripcionPrograma: data.descripcionPrograma[index],
        });
      });
      newCurso.programa = newCategoria;
    }
    return caseCategoria.execute(data.categoria).pipe(
      map((value: CategoriaDomainEntity) => {
        if (value) {
          newCurso.titulo = data.titulo;
          newCurso.imagen = data.imagen;
          newCurso.descripcion = data.descripcion;
          newCurso.detalle = data.detalle;
          newCurso.precio = data.precio;
          newCurso.categoria = value;
         
          return newCurso;
        } else {
          throw new Error('No se encontro la categoria');
        }
      }),
      switchMap((curso: CursoDomainEntity) => {
        console.log('switch map crear curso', curso);
        return this.cursoService.register(newCurso);
      }),
    );
  }
}
