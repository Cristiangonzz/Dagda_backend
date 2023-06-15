import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ISubCategoriaDomainService } from 'src/domain/services/sub-categoria.service.domain';
import { SubCategoriaMySqlEntity } from '../entities/sub-categoria-mysql.entity';
import { SubCategoriaRepository } from '../repositories/sub-categoria.repository';

@Injectable()
export class SubCategoriaMySqlService
  implements ISubCategoriaDomainService<SubCategoriaMySqlEntity>
{
  constructor(
    private readonly subCategoriaRepository: SubCategoriaRepository,
  ) {}

  register(
    entity: SubCategoriaMySqlEntity,
  ): Observable<SubCategoriaMySqlEntity> {
    return this.subCategoriaRepository.create(entity);
  }
  update(
    id: string,
    persona: SubCategoriaMySqlEntity,
  ): Observable<SubCategoriaMySqlEntity> {
    return this.subCategoriaRepository.update(id, persona);
  }
  delete(id: string): Observable<boolean> {
    return this.subCategoriaRepository.delete(id);
  }
  findAll(): Observable<SubCategoriaMySqlEntity[]> {
    return this.subCategoriaRepository.findAll();
  }
  findOneBy(id: string): Observable<SubCategoriaMySqlEntity> {
    return this.subCategoriaRepository.findById(id);
  }
}
