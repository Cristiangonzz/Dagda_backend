import { Observable } from 'rxjs';
import { IUseCase } from '../../domain/interfaces/use-case.interface.domain';
import { IUsuarioReferenciaDomainService } from 'src/domain/services/usuario.-referencia.service.domain';
import { DeleteUsuarioReferenciaUseCase } from '../useCase/usuario_referente/delete-usuario-referente.use-case.application';
import { GetAllUsuarioReferenciaUseCase } from '../useCase/usuario_referente/get-all-usuario-referente.use-case.application';
import { GetIdUsuarioReferenciaUseCase } from '../useCase/usuario_referente/get-id-usuario-referente.use-case.application';
import { RegistrarUsuarioReferenciaUseCase } from '../useCase/usuario_referente/register-usuario-referencia.use-case.application';
import { UpdateUsuarioReferenciaUseCase } from '../useCase/usuario_referente/update-usuario-referencia.use-case.application';
import { GetEmailUsuarioReferidoUseCase } from '../useCase/usuario_referente/get-email-usuario-referente.use-case.application copy';
import { UsuarioReferenciaDomainEntity } from 'src/domain/entities/usuario-referencia.entity.domain';

export class UsuarioReferenciaDelegate implements IUseCase {
  private delegate: IUseCase;

  constructor(private readonly usuarioReferenciaService: IUsuarioReferenciaDomainService<UsuarioReferenciaDomainEntity>) { }

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateUsuarioReferencias(): void {
    this.delegate = new RegistrarUsuarioReferenciaUseCase(this.usuarioReferenciaService);
  }

  toFindAllUsuarioReferencias(): void {
    this.delegate = new GetAllUsuarioReferenciaUseCase(this.usuarioReferenciaService);
  }
  toDeleteUsuarioReferencia(): void {
    this.delegate = new DeleteUsuarioReferenciaUseCase(this.usuarioReferenciaService);
  }

  toFindIdUsuarioReferencias(): void {
    this.delegate = new GetIdUsuarioReferenciaUseCase(this.usuarioReferenciaService);
  }
  toFindEmailUsuarioReferencias(): void {
    this.delegate = new GetEmailUsuarioReferidoUseCase(this.usuarioReferenciaService);
  }

  toUpdateUsuarioReferencia(): void {
    this.delegate = new UpdateUsuarioReferenciaUseCase(this.usuarioReferenciaService);
  }

  

 
}
