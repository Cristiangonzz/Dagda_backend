import { Observable } from "rxjs";
import { UsuarioDomainEntity } from "src/domain/entities/usuario.entity.domain";
import { IUsuarioDomainService } from "src/domain/services/usuario.service.domain";
import { UpdateUsuarioDto } from "src/infrastructure/dto/create/update-usuario.dto";

export class UpdateUsuarioUseCase {
    constructor(
      private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
    ) {}
  
    execute(
      id: string,
      data: UpdateUsuarioDto,
    ): Observable<UsuarioDomainEntity> {
      const updateUsuario = new UsuarioDomainEntity();
  
      updateUsuario.primer_nombre = data.primer_nombre;
      updateUsuario.segundo_nombre = data.segundo_nombre;
      updateUsuario.primer_apellido = data.primer_apellido;
      updateUsuario.segundo_apellido = data.segundo_apellido;
      updateUsuario.telefono = data.telefono;
      updateUsuario.tipo_usuario = data.tipo_usuario;
      updateUsuario.usuario = data.usuario;
      updateUsuario.email = data.email;
      updateUsuario.usuario_verificado = data.usuario_verificado;
      updateUsuario.clave = data.clave;
      updateUsuario.vigente = data.vigente;
  
      return this.usuarioService.update(id, updateUsuario);
    }
  }
  