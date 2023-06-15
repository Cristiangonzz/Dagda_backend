import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { CursoMySqlEntity } from '../entities/curso-mysql.entity';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import { CategoriaMySqlEntity } from '../entities/categoria-mysql.entity';

@Injectable()
export class CategoriaRepository implements IRepository<CategoriaMySqlEntity> {
  constructor(
    @InjectRepository(CategoriaMySqlEntity)
    private readonly categoriaRepository: Repository<CategoriaMySqlEntity>,
  ) {}

  findAll(): Observable<CategoriaMySqlEntity[]> {
    return from(this.categoriaRepository.find()).pipe(
      map((cursos: CategoriaMySqlEntity[]) => {
        return cursos;
      }),
    );
  }

  findById(categoriaId: string): Observable<CategoriaMySqlEntity> {
    return from(this.categoriaRepository.findOneBy({ categoriaId })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }

  findByNombre(nombre: string): Observable<CategoriaMySqlEntity> {
    return from(this.categoriaRepository.findOneBy({ nombre })).pipe(
      catchError((err: Error) => {
        throw new Error(`Error al buscar Categoria con el nombre ${nombre}`+ err.message);
      }),
    );
  }

  create(entity: CategoriaMySqlEntity): Observable<CategoriaMySqlEntity> {
    return from(this.categoriaRepository.save(entity));
  }

  update(
    nombre: string,
    entity: CategoriaMySqlEntity,
  ): Observable<CategoriaMySqlEntity> {

    return from(this.findByNombre(nombre)).pipe(
      switchMap( (data:CategoriaMySqlEntity ) => {
        if(data){
          entity.categoriaId = data.categoriaId;
          const newEntity = {
            ...data,
            ...entity,
          };
          return from(this.categoriaRepository.save(newEntity)).pipe(
            catchError((err: Error) => {
              throw new Error( `No se pudo actualizar Categoria con el nombre ${nombre}` + err.message);
            }),
          );
        } else {
          throw new NotFoundException('Categoria no encontrada');
        }
      })
    )
  }

  delete(nombre: string): Observable<boolean> {
    return from(
      this.categoriaRepository.findOneBy({
        nombre,
      }),
    ).pipe(
      map((curso: CategoriaMySqlEntity) => {
        if (curso) {
          this.categoriaRepository.remove(curso);
          return true;
        } else {
          return false;
        }
      }),
    );
  }
}
