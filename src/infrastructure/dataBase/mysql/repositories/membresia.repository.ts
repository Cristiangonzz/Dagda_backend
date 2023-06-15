import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import { MembresiaMySqlEntity } from '../entities/membresia-mysql.entity';

@Injectable()
export class MembresiaRepository implements IRepository<MembresiaMySqlEntity> {
  constructor(
    @InjectRepository(MembresiaMySqlEntity)
    private readonly membresiaRepository: Repository<MembresiaMySqlEntity>,
  ) {}

  findAll(): Observable<MembresiaMySqlEntity[]> {
    return from(this.membresiaRepository.find()).pipe(
      map((cursos: MembresiaMySqlEntity[]) => {
        return cursos;
      }),
    );
  }

  findById(membresiaId: string): Observable<MembresiaMySqlEntity> {
    return from(this.membresiaRepository.findOneBy({ membresiaId })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }
  findByNombre(nombre: string): Observable<MembresiaMySqlEntity> {
    return from(this.membresiaRepository.findOneBy({ nombre })).pipe(
      catchError((err: Error) => {
        throw new Error( "No se encontro Membresia" + err.message);
      }),
    );
  }

  create(entity: MembresiaMySqlEntity): Observable<MembresiaMySqlEntity> {
    return from(this.membresiaRepository.save(entity));
  }

  update(
    nombre: string,
    entity: MembresiaMySqlEntity,
  ): Observable<MembresiaMySqlEntity> {

    return from(this.findByNombre(nombre)).pipe(
      switchMap( (data:MembresiaMySqlEntity ) => {
        if(data){
          entity.membresiaId = data.membresiaId;
          const newEntity = {
            ...data,
            ...entity,
          };
          return from(this.membresiaRepository.save(newEntity)).pipe(
            catchError((err: Error) => {
              throw new Error(err.message);
            }),
          );
        } else {
          throw new NotFoundException('Membresia no encontrada');
        }
      })
    )
  }

  delete(nombre: string): Observable<boolean> {
    return from(
      this.membresiaRepository.findOneBy({
        nombre,
      }),
    ).pipe(
      map((curso: MembresiaMySqlEntity) => {
        if (curso) {
          this.membresiaRepository.remove(curso);
          return true;
        } else {
          return false;
        }
      }),
    );
  }
}
