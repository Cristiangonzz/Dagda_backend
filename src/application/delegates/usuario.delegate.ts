import { Observable } from 'rxjs';
import { IUseCase } from '../../domain/interfaces/use-case.interface.domain';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { GetAllUsuarioUseCase } from '../useCase/usuario/get-all-usuario.use-case.application';
import { RegistrarUsuarioUseCase } from '../useCase/usuario/register-usuario.use-case.application';
import { DeleteUsuarioUseCase } from '../useCase/usuario/delete-usuario.use-case.application';
import { GetEmailUsuarioUseCase } from '../useCase/usuario/get-email-usuario.use-case.application copy';
import { GetIdUsuarioUseCase } from '../useCase/usuario/get-id-usuario.use-case.application';
import { UpdateUsuarioUseCase } from '../useCase/usuario/update-usuario.use-case.application';
import { SignInUsuarioUseCase } from '../useCase/sign-in/sign-in.use-case';

export class UsuarioDelegate implements IUseCase {
  private delegate: IUseCase;

  constructor(private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>) { }

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateUsuario(): void {
    this.delegate = new RegistrarUsuarioUseCase(this.usuarioService);
  }

  toFindAllUsuarios(): void {
    this.delegate = new GetAllUsuarioUseCase(this.usuarioService);
  }
  toDeleteUsuario(): void {
    this.delegate = new DeleteUsuarioUseCase(this.usuarioService);
  }

  toFindIdUsuarios(): void {
    this.delegate = new GetIdUsuarioUseCase(this.usuarioService);
  }
  toFindEmailUsuarios(): void {
    this.delegate = new GetEmailUsuarioUseCase(this.usuarioService);
  }

  toUpdateUsuario(): void {
    this.delegate = new UpdateUsuarioUseCase(this.usuarioService);
  }

  toSignInUsuario(): void {
    this.delegate = new SignInUsuarioUseCase(this.usuarioService);
  }

 
}
