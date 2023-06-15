import { Observable } from 'rxjs';
import { CategoriaDomainEntity } from 'src/domain/entities/categoria.entity.domain';
import { ICategoriaDomainService } from 'src/domain/services/categoria.service.domain';

export class GetAllCategoriaUseCase {
  constructor(
    private readonly categoriaService: ICategoriaDomainService<CategoriaDomainEntity>,
  ) {}

  execute(): Observable<CategoriaDomainEntity[]> {
    return this.categoriaService.findAll();
  }
}
