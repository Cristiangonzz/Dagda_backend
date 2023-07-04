import { Observable } from "rxjs";
import { IncripcionDomainEntity } from "src/domain/entities/incripcion.entity.domain";
import { MembresiaUsuarioDomainEntity } from "src/domain/entities/membresia-usuario.entity.domain";
import { MembresiaDomainEntity } from "src/domain/entities/membresia.entity.domain";
import { IIncripcionDomainService } from "src/domain/services/incripcion.service.domain";
import { IMembresiaUsuarioDomainService } from "src/domain/services/membresia-usuario.service.domain";


export class GetUsuarioCursoMembresiaUseCase {
  constructor(
    private readonly membresiausuarioService: IMembresiaUsuarioDomainService<MembresiaUsuarioDomainEntity>,
  ) {}

   execute(usuario: string,membresia: string): Promise<MembresiaUsuarioDomainEntity[]> {
    return  this.membresiausuarioService.findUsuarioMembresia(usuario,membresia);
  }
}
