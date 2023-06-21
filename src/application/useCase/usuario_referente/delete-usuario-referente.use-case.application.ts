import { Observable } from 'rxjs';
import { UsuarioReferenciaDomainEntity } from 'src/domain/entities/usuario-referencia.entity.domain';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { IUsuarioReferenciaDomainService } from 'src/domain/services/usuario.-referencia.service.domain';

export class DeleteUsuarioReferenciaUseCase {
  constructor(
    private readonly usuarioReferenciaService: IUsuarioReferenciaDomainService<UsuarioReferenciaDomainEntity>,
  ) {}

  execute(id : string): Observable<boolean> {
    return this.usuarioReferenciaService.delete(id);
  }
}
