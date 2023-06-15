import { Observable } from 'rxjs';
import { IUseCase } from '../../domain/interfaces/use-case.interface.domain';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';
import { CrearCursoUseCase } from '../useCase/curso/crear-curso.use-case.application';
import { CategoriaDomainEntity } from 'src/domain/entities/categoria.entity.domain';
import { ICategoriaDomainService } from 'src/domain/services/categoria.service.domain';
import { GetAllCursoUseCase } from '../useCase/curso/get-all-curso.use-case.application';
import { UpdateCursoUseCase } from '../useCase/curso/update-curso.use-case.application';
import { DeleteCursoUseCase } from '../useCase/curso/delete-curso.use-case.application';
import { GetIdCursoUseCase } from '../useCase/curso/get-by-id-curso.use-case.application';
import { GetTituloCursoUseCase } from '../useCase/curso/get-by-titulo-curso.use-case.application';

export class CursoDelegate implements IUseCase {
  private delegate: IUseCase;

  constructor(
    private readonly cursoService: ICursoDomainService<CursoDomainEntity>,
    private readonly categoriaService: ICategoriaDomainService<CategoriaDomainEntity>
    ) { }

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateCurso(): void {
    this.delegate = new CrearCursoUseCase(this.cursoService,this.categoriaService);
  }

  toDeleteCurso(): void {
    this.delegate = new DeleteCursoUseCase(this.cursoService);
  }

  toFindIdCursos(): void {
    this.delegate = new GetIdCursoUseCase(this.cursoService);
  }
  toFindTituloCursos(): void {
    this.delegate = new GetTituloCursoUseCase(this.cursoService);
  }
  toFindAllCursos(): void {
    this.delegate = new GetAllCursoUseCase(this.cursoService);
  }

  toUpdateCurso(): void {
    this.delegate = new UpdateCursoUseCase(this.cursoService,this.categoriaService);
  }

}
