import { Observable } from 'rxjs';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';

export class GetAllCursoUseCase {
  constructor(
    private readonly cursoService: ICursoDomainService<CursoDomainEntity>,
  ) {}

  execute(): Observable<CursoDomainEntity[]> {
    return this.cursoService.findAll();
  }
}
