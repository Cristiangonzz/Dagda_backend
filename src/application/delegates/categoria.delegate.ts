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

export class CategoriaDelegate implements IUseCase {
  private delegate: IUseCase;

  constructor(private readonly categoriaService: ICategoriaDomainService<CategoriaDomainEntity>) { }

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateCategoria(): void {
    this.delegate = new CrearCategoriaUseCase(this.categoriaService);
  }

  toFindAllCategorias(): void {
    this.delegate = new GetAllCategoriaUseCase(this.categoriaService);
  }
  toDeleteCategoria(): void {
    this.delegate = new DeleteCategoriaUseCase(this.categoriaService);
  }

  toFindIdCategorias(): void {
    this.delegate = new GetIdCategoriaUseCase(this.categoriaService);
  }
  toFindNombreCategorias(): void {
    this.delegate = new GetNombreCategoriaUseCase(this.categoriaService);
  }

  toUpdateCategoria(): void {
    this.delegate = new UpdateCategoriaUseCase(this.categoriaService);
  }

 
}
