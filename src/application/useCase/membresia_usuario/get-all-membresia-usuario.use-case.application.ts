import { Observable } from 'rxjs';
import { MembresiaUsuarioDomainEntity } from 'src/domain/entities/membresia-usuario.entity.domain';
import { IMembresiaUsuarioDomainService } from 'src/domain/services/membresia-usuario.service.domain';

export class GetAllMembresiaUsuarioUseCase {
  constructor(
    private readonly membresiaUsuarioService: IMembresiaUsuarioDomainService<MembresiaUsuarioDomainEntity>,
  ) {}

  execute(): Observable<MembresiaUsuarioDomainEntity[]> {
    return this.membresiaUsuarioService.findAll();
  }
}
