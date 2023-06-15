import { Observable } from 'rxjs';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';

export class GetTituloCursoUseCase {
  constructor(
    private readonly cursoService: ICursoDomainService<CursoDomainEntity>,
  ) {}

  execute(titulo : string): Observable<CursoDomainEntity> {
    return this.cursoService.findOneNombre(titulo);
  }
}
