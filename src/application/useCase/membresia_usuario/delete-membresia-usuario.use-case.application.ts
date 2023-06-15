import { Observable } from 'rxjs';
import { MembresiaUsuarioDomainEntity } from 'src/domain/entities/membresia-usuario.entity.domain';
import { IMembresiaUsuarioDomainService } from 'src/domain/services/membresia-usuario.service.domain';

export class DeleteMembresiaUsuarioUseCase {
  constructor(
    private readonly membresiaUsuarioService: IMembresiaUsuarioDomainService<MembresiaUsuarioDomainEntity>,
  ) {}

  execute(data: string): Observable<boolean> {
    return this.membresiaUsuarioService.delete(data);
  }
}
