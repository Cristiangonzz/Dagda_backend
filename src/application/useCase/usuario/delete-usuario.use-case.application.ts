import { Observable } from 'rxjs';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';

export class DeleteUsuarioUseCase {
  constructor(
    private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(id : string): Observable<boolean> {
    return this.usuarioService.delete(id);
  }
}
