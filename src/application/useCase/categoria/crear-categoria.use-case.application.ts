import { Observable } from 'rxjs';
import { CategoriaDomainEntity } from 'src/domain/entities/categoria.entity.domain';
import { ICategoriaDomainService } from 'src/domain/services/categoria.service.domain';
import { CrearCategoriaDto } from 'src/infrastructure/dto/create/create-categoria.dto';

export class CrearCategoriaUseCase {
  constructor(
    private readonly categoriaService: ICategoriaDomainService<CategoriaDomainEntity>,
  ) {}

  execute(data: CrearCategoriaDto): Observable<CategoriaDomainEntity> {
    const newCategoria = new CategoriaDomainEntity();
    newCategoria.nombre = data.nombre;
    return this.categoriaService.register(newCategoria);
  }
}
