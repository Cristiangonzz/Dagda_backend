import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUsuarioReferenciaDomainService } from 'src/domain/services/usuario.-referencia.service.domain';
import { UsuarioReferenciaMySqlEntity } from '../entities/usuario-referente-mysql.entity';
import { UsuarioReferenciaRepository } from '../repositories/usuario-referente.repository';

@Injectable()
export class UsuarioReferenciaMySqlService
  implements IUsuarioReferenciaDomainService<UsuarioReferenciaMySqlEntity>
{
  constructor(
    private readonly usuarioReferenciaRepository: UsuarioReferenciaRepository,
  ) {}

  register(
    entity: UsuarioReferenciaMySqlEntity,
  ): Observable<UsuarioReferenciaMySqlEntity> {
    return this.usuarioReferenciaRepository.create(entity);
  }
  update(
    id: string,
    persona: UsuarioReferenciaMySqlEntity,
  ): Observable<UsuarioReferenciaMySqlEntity> {
    return this.usuarioReferenciaRepository.update(id, persona);
  }
  delete(id: string): Observable<boolean> {
    return this.usuarioReferenciaRepository.delete(id);
  }
  findAll(): Observable<UsuarioReferenciaMySqlEntity[]> {
    return this.usuarioReferenciaRepository.findAll();
  }
  findOneBy(id: string): Observable<UsuarioReferenciaMySqlEntity> {
    return this.usuarioReferenciaRepository.findById(id);
  }
}
