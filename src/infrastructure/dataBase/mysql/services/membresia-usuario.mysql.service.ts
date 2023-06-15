import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CursoMySqlEntity } from '../entities/curso-mysql.entity';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';
import { CursoRepository } from '../repositories/curso.repository';
import { IMembresiaUsuarioDomainService } from 'src/domain/services/membresia-usuario.service.domain';
import { MembresiaUsuarioMySqlEntity } from '../entities/membresia-usuario-mysql.entity';
import { MembresiaUsuarioRepository } from '../repositories/membresia-usuario.repository';

@Injectable()
export class MembresiaUsuarioMySqlService
  implements IMembresiaUsuarioDomainService<MembresiaUsuarioMySqlEntity>
{
 
  constructor(private readonly membresiaUsuarioRepository: MembresiaUsuarioRepository) {}
  findOneNombre(nombre: string): Observable<MembresiaUsuarioMySqlEntity> {
    throw new Error('Method not implemented.');
  }
  
  register(entity: MembresiaUsuarioMySqlEntity): Observable<MembresiaUsuarioMySqlEntity> {
    return this.membresiaUsuarioRepository.create(entity);
  }

  update(id: string, persona: MembresiaUsuarioMySqlEntity): Observable<MembresiaUsuarioMySqlEntity> {
    return this.membresiaUsuarioRepository.update(id, persona);
  }

  delete(id: string): Observable<boolean> {
    return this.membresiaUsuarioRepository.delete(id);
  }

  findAll(): Observable<MembresiaUsuarioMySqlEntity[]> {
    return this.membresiaUsuarioRepository.findAll();
  }
  
  findOneBy(id: string): Observable<MembresiaUsuarioMySqlEntity> {
      return this.membresiaUsuarioRepository.findById(id);
  }
  
  
}
