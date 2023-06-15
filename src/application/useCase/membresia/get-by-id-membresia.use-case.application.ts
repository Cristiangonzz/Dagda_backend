import { Observable } from 'rxjs';
import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { IMembresiaDomainService } from 'src/domain/services/membresia.service.domain';

export class GetIdMembresiaUseCase {
  constructor(
    private readonly membresiaervice: IMembresiaDomainService<MembresiaDomainEntity>,
  ) {}

  execute(data: string): Observable<MembresiaDomainEntity> {
    return this.membresiaervice.findOneBy(data);
  }
}
