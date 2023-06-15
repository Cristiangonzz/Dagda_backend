import { Observable } from 'rxjs';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';

export class GetIdUsuarioUseCase {
  constructor(
    private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(id : string): Observable<UsuarioDomainEntity> {
    return this.usuarioService.findOneBy(id);
  }
}
