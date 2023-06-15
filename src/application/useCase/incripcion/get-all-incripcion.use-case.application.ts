import { Observable } from 'rxjs';
import { IncripcionDomainEntity } from 'src/domain/entities/incripcion.entity.domain';
import { IIncripcionDomainService } from 'src/domain/services/incripcion.service.domain';

export class GetAllIncripcionUseCase {
  constructor(
    private readonly incripcionService: IIncripcionDomainService<IncripcionDomainEntity>,
  ) {}

  execute(): Observable<IncripcionDomainEntity[]> {
    return this.incripcionService.findAll();
  }
}
