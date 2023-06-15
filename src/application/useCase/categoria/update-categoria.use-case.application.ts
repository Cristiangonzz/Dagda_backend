import { Observable } from "rxjs";
import { CategoriaDomainEntity } from "src/domain/entities/categoria.entity.domain";
import { ICategoriaDomainService } from "src/domain/services/categoria.service.domain";
import { UpdateCategoriaDto } from "src/infrastructure/dto/create/update-categoria.dto";

export class UpdateCategoriaUseCase {
    constructor(
      private readonly categoriaService: ICategoriaDomainService<CategoriaDomainEntity>,
    ) {}
  
    execute(
      id: string,
      data: UpdateCategoriaDto,
    ): Observable<CategoriaDomainEntity> {
      const updateCategoria = new CategoriaDomainEntity();
  
      updateCategoria.nombre = data.nombre;

      updateCategoria.vigente = data.vigente;
  
      return this.categoriaService.update(id, updateCategoria);
    }
  }
  