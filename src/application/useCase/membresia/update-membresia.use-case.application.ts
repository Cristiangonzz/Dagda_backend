import { Observable, map, switchMap } from 'rxjs';
import { IMembresiaDomainService } from 'src/domain/services/membresia.service.domain';
import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { UpdateMembresiaDto } from 'src/infrastructure/dto/create/update-membresia.dto';

export class UpdateMembresiaUseCase {
  constructor(
    private readonly membresiaService: IMembresiaDomainService<MembresiaDomainEntity>,
  ) {}

  execute(
    id: string,
    data: UpdateMembresiaDto,
  ): Observable<MembresiaDomainEntity> {
    const updateMembresia = new MembresiaDomainEntity();

    updateMembresia.nombre = data.nombre;
    updateMembresia.beneficios = data.beneficios;
    updateMembresia.costo = data.costo;
    updateMembresia.puede_referenciar = data.puede_referenciar;
    updateMembresia.vigente = data.vigente;

    return this.membresiaService.update(id, updateMembresia);
  }
}
