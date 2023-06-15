import { Observable } from 'rxjs';
import { IUseCase } from '../../domain/interfaces/use-case.interface.domain';
import { ICategoriaDomainService } from 'src/domain/services/categoria.service.domain';
import { CategoriaDomainEntity } from 'src/domain/entities/categoria.entity.domain';
import { CrearCategoriaUseCase } from '../useCase/categoria/crear-categoria.use-case.application';
import { GetAllCategoriaUseCase } from '../useCase/categoria/get-all-categoria.use-case.application';
import { GetNombreCategoriaUseCase } from '../useCase/categoria/get-nombre-categoria.use-case.application copy';
import { GetIdCategoriaUseCase } from '../useCase/categoria/get-id-categoria.use-case.application';
import { DeleteCategoriaUseCase } from '../useCase/categoria/delete-categoria.use-case.application';
import { UpdateCategoriaUseCase } from '../useCase/categoria/update-categoria.use-case.application';
import { CrearIncripcionUseCase } from '../useCase/incripcion/crear-incripcion.use-case.application';
import { GetAllIncripcionUseCase } from '../useCase/incripcion/get-all-incripcion.use-case.application';
import { DeleteIncripcionUseCase } from '../useCase/incripcion/delete-incripcion.use-case.application';
import { GetIdIncripcionUseCase } from '../useCase/incripcion/get-id-incripcion.use-case.application';
import { IIncripcionDomainService } from 'src/domain/services/incripcion.service.domain';
import { IncripcionDomainEntity } from 'src/domain/entities/incripcion.entity.domain';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';
import { GetUsuarioCursoIncripcionUseCase } from '../useCase/incripcion/get-usuario-curso-incripcion.use-case.application';

export class IncripcionDelegate implements IUseCase {
  private delegate: IUseCase;

  constructor(
    private readonly incripcionService: IIncripcionDomainService<IncripcionDomainEntity>,
    private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
    private readonly cursoService: ICursoDomainService<CursoDomainEntity>,
    ) { }

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateIncripcion(): void {
    this.delegate = new CrearIncripcionUseCase(this.incripcionService,this.usuarioService,this.cursoService);
  }

  toFindAllIncripcions(): void {
    this.delegate = new GetAllIncripcionUseCase(this.incripcionService);
  }
  toDeleteIncripcion(): void {
    this.delegate = new DeleteIncripcionUseCase(this.incripcionService);
  }

  toFindIdIncripcions(): void {
    this.delegate = new GetIdIncripcionUseCase(this.incripcionService);
  }
 

 
}
