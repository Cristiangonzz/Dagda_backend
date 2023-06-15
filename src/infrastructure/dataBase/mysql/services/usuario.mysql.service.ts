import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { UsuarioMySqlEntity } from '../entities/usuario-mysql.entity';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';

@Injectable()
export class UsuarioMySqlService
  implements IUsuarioDomainService<UsuarioMySqlEntity>
{
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  register(entity: UsuarioMySqlEntity): Observable<UsuarioMySqlEntity> {
    return this.usuarioRepository.create(entity);
  }
  update(
    id: string,
    persona: UsuarioMySqlEntity,
  ): Observable<UsuarioMySqlEntity> {
    return this.usuarioRepository.update(id, persona);
  }
  delete(id: string): Observable<boolean> {
    return this.usuarioRepository.delete(id);
  }
  findAll(): Observable<UsuarioMySqlEntity[]> {
    return this.usuarioRepository.findAll();
  }
  findOneBy(id: string): Observable<UsuarioMySqlEntity> {
    return this.usuarioRepository.findById(id);
  }
  findOneEmail(email: string): Observable<UsuarioMySqlEntity> {
    return this.usuarioRepository.findByEmail(email);
  }
}
