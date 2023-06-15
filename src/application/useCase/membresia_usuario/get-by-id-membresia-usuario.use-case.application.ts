import { Observable } from 'rxjs';
import { MembresiaUsuarioDomainEntity } from 'src/domain/entities/membresia-usuario.entity.domain';
import { IMembresiaUsuarioDomainService } from 'src/domain/services/membresia-usuario.service.domain';

export class GetIdMembresiaUsuarioUseCase {
  constructor(
    private readonly membresiaUsuarioService: IMembresiaUsuarioDomainService<MembresiaUsuarioDomainEntity>,
  ) {}

  execute(data: string): Observable<MembresiaUsuarioDomainEntity> {
    return this.membresiaUsuarioService.findOneBy(data);
  }
}
