import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CursoMySqlEntity } from '../entities/curso-mysql.entity';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';
import { CursoRepository } from '../repositories/curso.repository';

@Injectable()
export class CursoMySqlService
  implements ICursoDomainService<CursoMySqlEntity>
{
  constructor(private readonly cursoRepository: CursoRepository) {}

  register(entity: CursoMySqlEntity): Observable<CursoMySqlEntity> {
    return this.cursoRepository.create(entity);
  }
  update(id: string, persona: CursoMySqlEntity): Observable<CursoMySqlEntity> {
    return this.cursoRepository.update(id, persona);
  }
  delete(id: string): Observable<boolean> {
    return this.cursoRepository.delete(id);
  }
  findAll(): Observable<CursoMySqlEntity[]> {
    return this.cursoRepository.findAll();
  }
  findOneBy(id: string): Observable<CursoMySqlEntity> {
    return this.cursoRepository.findById(id);
  }

  findOneNombre(nombre: string): Observable<CursoMySqlEntity> {
    return this.cursoRepository.findByNombre(nombre);
  }
}
