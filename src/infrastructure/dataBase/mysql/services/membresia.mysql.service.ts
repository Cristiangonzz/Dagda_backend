import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MembresiaMySqlEntity } from '../entities/membresia-mysql.entity';
import { IMembresiaDomainService } from 'src/domain/services/membresia.service.domain';
import { MembresiaRepository } from '../repositories/membresia.repository';

@Injectable()
export class MembresiaMySqlService
  implements IMembresiaDomainService<MembresiaMySqlEntity>
{
 
  constructor(private readonly membresiaRepository: MembresiaRepository) {}
  
  register(entity: MembresiaMySqlEntity): Observable<MembresiaMySqlEntity> {
    return this.membresiaRepository.create(entity);
  }

  update(id: string, persona: MembresiaMySqlEntity): Observable<MembresiaMySqlEntity> {
    return this.membresiaRepository.update(id, persona);
  }

  delete(id: string): Observable<boolean> {
    return this.membresiaRepository.delete(id);
  }

  findAll(): Observable<MembresiaMySqlEntity[]> {
    return this.membresiaRepository.findAll();
  }
  
  findOneBy(id: string): Observable<MembresiaMySqlEntity> {
      return this.membresiaRepository.findById(id);
  }
  findOneNombre(nombre: string): Observable<MembresiaMySqlEntity> {
    return this.membresiaRepository.findByNombre(nombre);
  }
  
}
