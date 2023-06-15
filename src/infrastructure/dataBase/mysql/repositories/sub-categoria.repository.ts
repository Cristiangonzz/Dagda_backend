import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import { SubCategoriaMySqlEntity } from '../entities/sub-categoria-mysql.entity';

@Injectable()
export class SubCategoriaRepository implements IRepository<SubCategoriaMySqlEntity> {
  constructor(
    @InjectRepository(SubCategoriaMySqlEntity)
    private readonly subCategoriaRepository: Repository<SubCategoriaMySqlEntity>,
  ) {}
  findByNombre(nombre: string): Observable<SubCategoriaMySqlEntity> {
    throw new Error('Method not implemented.');
  }

  findAll(): Observable<SubCategoriaMySqlEntity[]> {
    return from(this.subCategoriaRepository.find()).pipe(
      map((cursos: SubCategoriaMySqlEntity[]) => {
        return cursos;
      }),
    );
  }

  findById(subCategoriaId: string): Observable<SubCategoriaMySqlEntity> {
    return from(this.subCategoriaRepository.findOneBy({ subCategoriaId })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }

  create(entity: SubCategoriaMySqlEntity): Observable<SubCategoriaMySqlEntity> {
    return from(this.subCategoriaRepository.save(entity));
  }

  update(
    subCategoriaId: string,
    entity: SubCategoriaMySqlEntity,
  ): Observable<SubCategoriaMySqlEntity> {

    return from(this.findById(subCategoriaId)).pipe(
      switchMap( (data:SubCategoriaMySqlEntity ) => {
        if(data){
          entity.subCategoriaId = data.subCategoriaId;
          const newEntity = {
            ...data,
            ...entity,
            subCategoriaId,
          };
          return from(this.subCategoriaRepository.save(newEntity)).pipe(
            catchError((err: Error) => {
              throw new Error(err.message);
            }),
          );
        } else {
          throw new NotFoundException('Categoria no encontrada');
        }
      })
    )
  }

  delete(subCategoriaId: string): Observable<boolean> {
    return from(
      this.subCategoriaRepository.findOneBy({
        subCategoriaId,
      }),
    ).pipe(
      map((curso: SubCategoriaMySqlEntity) => {
        if (curso) {
          this.subCategoriaRepository.remove(curso);
          return true;
        } else {
          return false;
        }
      }),
    );
  }
}
