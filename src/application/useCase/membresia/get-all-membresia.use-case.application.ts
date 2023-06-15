import { Observable } from 'rxjs';
import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { IMembresiaDomainService } from 'src/domain/services/membresia.service.domain';

export class GetAllMembresiaUseCase {
  constructor(
    private readonly membresiaervice: IMembresiaDomainService<MembresiaDomainEntity>,
  ) {}

  execute(): Observable<MembresiaDomainEntity[]> {
    return this.membresiaervice.findAll();
  }
}
