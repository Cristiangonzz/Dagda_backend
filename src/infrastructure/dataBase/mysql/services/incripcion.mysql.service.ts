import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IncripcionMySqlEntity } from '../entities/incripcion-mysql.entity';
import { IIncripcionDomainService } from 'src/domain/services/incripcion.service.domain';
import { IncripcionRepository } from '../repositories/incripcion.repository';

@Injectable()
export class IncripcionMySqlService
  implements IIncripcionDomainService<IncripcionMySqlEntity>
{
  constructor(private readonly incripcionRepository: IncripcionRepository) {}

  register(entity: IncripcionMySqlEntity): Observable<IncripcionMySqlEntity> {
    return this.incripcionRepository.create(entity);
  }
  delete(id: string): Observable<boolean> {
    return this.incripcionRepository.delete(id);
  }
  findAll(): Observable<IncripcionMySqlEntity[]> {
    return this.incripcionRepository.findAll();
  }
  findOneBy(id: string): Observable<IncripcionMySqlEntity> {
    return this.incripcionRepository.findById(id);
  }
  findUsuarioCursos(usuario: string ,curso: string): Promise<IncripcionMySqlEntity[]> {
    return this.incripcionRepository.findByUsuarioCurso(usuario,curso);
  }

}
