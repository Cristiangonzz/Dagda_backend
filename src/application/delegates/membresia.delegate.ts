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

export class MembresiaDelegate implements IUseCase {
  private delegate: IUseCase;

  constructor(
    private readonly membresiaService: IMembresiaDomainService<MembresiaDomainEntity>,
    ) { }

  execute<Response>(...args: any[]): Observable<Response> {
    return this.delegate.execute(...args);
  }

  toCreateMembresia(): void {
    this.delegate = new CrearMembresiaUseCase(this.membresiaService);
  }

  toDeleteMembresia(): void {
    this.delegate = new DeleteMembresiaUseCase(this.membresiaService);
  }

  toFindIdMembresia(): void {
    this.delegate = new GetIdMembresiaUseCase(this.membresiaService);
  }
  toFindNombreMembresia(): void {
    this.delegate = new GetNombreMembresiaUseCase(this.membresiaService);
  }
  toFindAllMembresia(): void {
    this.delegate = new GetAllMembresiaUseCase(this.membresiaService);
  }

  toUpdateMembresia(): void {
    this.delegate = new UpdateMembresiaUseCase(this.membresiaService);
  }

}
