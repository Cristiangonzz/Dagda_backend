import { Observable } from "rxjs";
import { IncripcionDomainEntity } from "src/domain/entities/incripcion.entity.domain";
import { IIncripcionDomainService } from "src/domain/services/incripcion.service.domain";


export class GetUsuarioCursoIncripcionUseCase {
  constructor(
    private readonly incripcionService: IIncripcionDomainService<IncripcionDomainEntity>,
  ) {}

   execute(usuario: string,curso: string): Promise<IncripcionDomainEntity[]> {
    return  this.incripcionService.findUsuarioCursos(usuario,curso);
  }
}
