import { Observable } from 'rxjs';
import { IUseCase } from '../../domain/interfaces/use-case.interface.domain';
import { CrearMembresiaUseCase } from '../useCase/membresia/crear-membresia.use-case.application';
import { IMembresiaDomainService } from 'src/domain/services/membresia.service.domain';
import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { DeleteMembresiaUseCase } from '../useCase/membresia/delete-membresia.use-case.application';
import { GetIdMembresiaUseCase } from '../useCase/membresia/get-by-id-membresia.use-case.application';
import { GetAllMembresiaUseCase } from '../useCase/membresia/get-all-membresia.use-case.application';
import { UpdateMembresiaUseCase } from '../useCase/membresia/update-membresia.use-case.application';
import { GetNombreMembresiaUseCase } from '../useCase/membresia/get-by-nombre-membresia.use-case.application';
import { IMembresiaUsuarioDomainService } from 'src/domain/services/membresia-usuario.service.domain';
import { MembresiaUsuarioDomainEntity } from 'src/domain/entities/membresia-usuario.entity.domain';
import { CrearMembresiaUsuarioUseCase } from '../useCase/membresia_usuario/crear-membresia-usuario.use-case.application';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { DeleteMembresiaUsuarioUseCase } from '../useCase/membresia_usuario/delete-membresia-usuario.use-case.application';
import { GetIdMembresiaUsuarioUseCase } from '../useCase/membresia_usuario/get-by-id-membresia-usuario.use-case.application';
import { GetAllMembresiaUsuarioUseCase } from '../useCase/membresia_usuario/get-all-membresia-usuario.use-case.application';

export class MembresiaUsuarioDelegate implements IUseCase {
  private delegate: IUseCase;

  constructor(
    private readonly membresiaUsuarioService: IMembresiaUsuarioDomainService<MembresiaUsuarioDomainEntity>,
    private readonly usuarioUsuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
    private readonly membresiaService: IMembresiaDomainService<MembresiaDomainEntity>,
    ) { }

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateMembresiaUsuario(): void {
    this.delegate = new CrearMembresiaUsuarioUseCase(this.membresiaUsuarioService,this.usuarioUsuarioService,this.membresiaService);
  }

  toDeleteMembresiaUsuario(): void {
    this.delegate = new DeleteMembresiaUsuarioUseCase(this.membresiaUsuarioService);
  }

  toFindIdMembresiaUsuario(): void {
    this.delegate = new GetIdMembresiaUsuarioUseCase(this.membresiaUsuarioService);
  }
 
  toFindAllMembresiaUsuario(): void {
    this.delegate = new GetAllMembresiaUsuarioUseCase(this.membresiaUsuarioService);
  }

 

}
