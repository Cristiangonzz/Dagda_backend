import { Observable } from "rxjs";
import { UsuarioReferenciaDomainEntity } from "src/domain/entities/usuario-referencia.entity.domain";
import { UsuarioDomainEntity } from "src/domain/entities/usuario.entity.domain";
import { IUsuarioReferenciaDomainService } from "src/domain/services/usuario.-referencia.service.domain";
import { UpdateUsuarioReferenciaDto } from "src/infrastructure/dto/create/update-usuario-referencia.dto";

export class UpdateUsuarioReferenciaUseCase {
    constructor(
      private readonly usuarioReferenciaService: IUsuarioReferenciaDomainService<UsuarioReferenciaDomainEntity>,
    ) {}
  
    execute(
      id: string,
      data: UpdateUsuarioReferenciaDto,
    ): Observable<UsuarioReferenciaDomainEntity> {
      const updateUsuario = new UsuarioReferenciaDomainEntity();
  
      updateUsuario.usu_referente = data.referente;
      updateUsuario.usu_referido = data.referido;
  
      return this.usuarioReferenciaService.update(id, updateUsuario);
    }
  }
  