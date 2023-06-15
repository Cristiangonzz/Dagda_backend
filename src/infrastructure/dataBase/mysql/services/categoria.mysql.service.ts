import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CategoriaMySqlEntity } from '../entities/categoria-mysql.entity';
import { ICategoriaDomainService } from 'src/domain/services/categoria.service.domain';
import { CategoriaRepository } from '../repositories/categoria.repository';

@Injectable()
export class CategoriaMySqlService
  implements ICategoriaDomainService<CategoriaMySqlEntity>
{
  constructor(private readonly categoriaRepository: CategoriaRepository) {}

  register(entity: CategoriaMySqlEntity): Observable<CategoriaMySqlEntity> {
    return this.categoriaRepository.create(entity);
  }
  update(
    id: string,
    persona: CategoriaMySqlEntity,
  ): Observable<CategoriaMySqlEntity> {
    return this.categoriaRepository.update(id, persona);
  }
  delete(id: string): Observable<boolean> {
    return this.categoriaRepository.delete(id);
  }
  findAll(): Observable<CategoriaMySqlEntity[]> {
    return this.categoriaRepository.findAll();
  }
  findOneBy(id: string): Observable<CategoriaMySqlEntity> {
    return this.categoriaRepository.findById(id);
  }
  findOneNombre(nombre: string): Observable<CategoriaMySqlEntity> {
    return this.categoriaRepository.findByNombre(nombre);
  }
}
