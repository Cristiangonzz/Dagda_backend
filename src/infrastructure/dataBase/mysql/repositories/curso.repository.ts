import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { CursoMySqlEntity } from '../entities/curso-mysql.entity';
import { Observable, catchError, from, map, switchMap } from 'rxjs';

@Injectable()
export class CursoRepository implements IRepository<CursoMySqlEntity> {
  constructor(
    @InjectRepository(CursoMySqlEntity)
    private readonly cursoRepository: Repository<CursoMySqlEntity>,
  ) {}

  findAll(): Observable<CursoMySqlEntity[]> {
    return from(this.cursoRepository.find()).pipe(
      map((cursos: CursoMySqlEntity[]) => {
        return cursos;
      }),
    );
  }

  findById(cursoId: string): Observable<CursoMySqlEntity> {
    return from(this.cursoRepository.findOneBy({ cursoId })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }

  findByNombre(titulo: string): Observable<CursoMySqlEntity> {
    return from(this.cursoRepository.findOneBy({ titulo })).pipe(
      catchError((err: Error) => {
        throw new Error(`No se encontro curso por nombre ${titulo}` + err.message);
      }),
    );
  }

  create(entity: CursoMySqlEntity): Observable<CursoMySqlEntity> {
    return from(this.cursoRepository.save(entity));
  }

  update(titulo: string, entity: CursoMySqlEntity): Observable<CursoMySqlEntity> {
    return from(this.findByNombre(titulo)).pipe(
      switchMap((data: CursoMySqlEntity) => {
        if (data) {
          entity.cursoId = data.cursoId;
          const updatedEntity = {
            ...data,
            ...entity,
          };
          return from(this.cursoRepository.save(updatedEntity)).pipe(
            catchError((err: Error) => {
              throw new Error('No se puedo guardar el cambio : ' + err.message);
            }),
          );
        } else {
          throw new NotFoundException('Curso no encontrado');
        }
      }),
    );
  }
  
  

  delete(titulo: string): Observable<boolean> {
    return from(
      this.cursoRepository.findOneBy({
        titulo,
      }),
    ).pipe(
      map((curso: CursoMySqlEntity) => {
       
        if (curso) {
          return curso;
        } else {
          throw new NotFoundException('No se encontro el curso');
        }
      }),switchMap((data: CursoMySqlEntity) => {
        if (data) {
          return this.cursoRepository.remove(data).then(() => {
            return true;
          }).catch((err) => {
            throw new Error('No se puedo eliminar el curso : ' + err.message);
          });
        } else {
          throw new NotFoundException('No se encontro el curso');
        }
      }),
    );
  }
}
