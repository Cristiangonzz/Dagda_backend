import { Observable } from 'rxjs';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';
import { RegistrarUsuarioDto } from 'src/infrastructure/dto/create/create-usuario.dto';

export class RegistrarUsuarioUseCase {
  constructor(
    private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
  ) {}

  execute(data: RegistrarUsuarioDto): Observable<UsuarioDomainEntity> {
    const usu = new UsuarioDomainEntity();
    usu.primer_nombre = data.primer_nombre;
    usu.segundo_nombre = data.segundo_nombre;
    usu.primer_apellido = data.primer_apellido;
    usu.segundo_apellido = data.segundo_apellido;
    usu.usuario = data.usuario;
    usu.foto = data.foto;
    usu.email = data.email;
    usu.clave = data.clave;
    usu.telefono = data.telefono;
    return this.usuarioService.register(usu);
  }
}
