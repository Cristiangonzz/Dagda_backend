import { Observable } from 'rxjs';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';

export class GetAllUsuarioUseCase {
  constructor(
    private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(): Observable<UsuarioDomainEntity[]> {
    return this.usuarioService.findAll();
  }
}
