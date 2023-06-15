import { Observable } from "rxjs";
import { IncripcionDomainEntity } from "src/domain/entities/incripcion.entity.domain";
import { IIncripcionDomainService } from "src/domain/services/incripcion.service.domain";


export class DeleteIncripcionUseCase {
  constructor(
    private readonly incripcionService: IIncripcionDomainService<IncripcionDomainEntity>,
  ) {}

  execute(data: string): Observable<boolean> {
    return this.incripcionService.delete(data);
  }
}
