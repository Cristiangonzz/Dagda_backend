import { Observable } from "rxjs";
import { IncripcionDomainEntity } from "src/domain/entities/incripcion.entity.domain";
import { IIncripcionDomainService } from "src/domain/services/incripcion.service.domain";


export class GetIdIncripcionUseCase {
  constructor(
    private readonly incripcionService: IIncripcionDomainService<IncripcionDomainEntity>,
  ) {}

  execute(data: string): Observable<IncripcionDomainEntity> {
    return this.incripcionService.findOneBy(data);
  }
}
