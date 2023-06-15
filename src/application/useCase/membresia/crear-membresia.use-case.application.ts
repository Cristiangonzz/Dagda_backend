import { Observable, map, switchMap } from 'rxjs';
import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { IMembresiaDomainService } from 'src/domain/services/membresia.service.domain';
import { CrearMembresiaDto } from 'src/infrastructure/dto/create/create-membresia.dto';

export class CrearMembresiaUseCase {
  constructor(
    private readonly membresiaervice: IMembresiaDomainService<MembresiaDomainEntity>,
  ) 
  {}

  execute(data: CrearMembresiaDto): Observable<MembresiaDomainEntity> {
    const membresia = new MembresiaDomainEntity();
    membresia.nombre = data.nombre;
    membresia.costo = data.costo;
    return this.membresiaervice.register(membresia);
  }
}
