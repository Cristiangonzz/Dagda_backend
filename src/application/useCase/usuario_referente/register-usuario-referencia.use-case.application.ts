import { Observable } from 'rxjs';
import { UsuarioReferenciaDomainEntity } from 'src/domain/entities/usuario-referencia.entity.domain';
import { IUsuarioReferenciaDomainService } from 'src/domain/services/usuario.-referencia.service.domain';
import { RegistrarUsuarioReferenciaDto } from 'src/infrastructure/dto/create/create-usuario-referencia.dto';

export class RegistrarUsuarioReferenciaUseCase {
  constructor(
    private readonly usuarioReferenciaService: IUsuarioReferenciaDomainService<UsuarioReferenciaDomainEntity>,
  ) {}

  execute(data: RegistrarUsuarioReferenciaDto): Observable<UsuarioReferenciaDomainEntity> {
    const usu = new UsuarioReferenciaDomainEntity();
    usu.usu_referente = data.usu_referente;
    usu.usu_referido = data.usu_referido;
    return this.usuarioReferenciaService.register(usu);
  }
}
