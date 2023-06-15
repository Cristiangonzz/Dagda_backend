import { Observable } from 'rxjs';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';

export class DeleteCursoUseCase {
  constructor(
    private readonly cursoService: ICursoDomainService<CursoDomainEntity>,
  ) {}

  execute(id : string): Observable<boolean> {
    return this.cursoService.delete(id);
  }
}
