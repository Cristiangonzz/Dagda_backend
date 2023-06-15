import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import { UsuarioReferenciaMySqlEntity } from '../entities/usuario-referente-mysql.entity';

@Injectable()
export class UsuarioReferenciaRepository implements IRepository<UsuarioReferenciaMySqlEntity> {
  constructor(
    @InjectRepository(UsuarioReferenciaMySqlEntity)
    private readonly usuarioReferenciaRepository: Repository<UsuarioReferenciaMySqlEntity>,
  ) {}
  findByNombre(nombre: string): Observable<UsuarioReferenciaMySqlEntity> {
    throw new Error('Method not implemented.');
  }

  findAll(): Observable<UsuarioReferenciaMySqlEntity[]> {
    return from(this.usuarioReferenciaRepository.find()).pipe(
      map((cursos: UsuarioReferenciaMySqlEntity[]) => {
        return cursos;
      }),
    );
  }

  findById(usuarioReferenciaId: string): Observable<UsuarioReferenciaMySqlEntity> {
    return from(this.usuarioReferenciaRepository.findOneBy({ usuarioReferenciaId })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }

  create(entity: UsuarioReferenciaMySqlEntity): Observable<UsuarioReferenciaMySqlEntity> {
    return from(this.usuarioReferenciaRepository.save(entity));
  }

  update(
    usuarioReferenciaId: string,
    entity: UsuarioReferenciaMySqlEntity,
  ): Observable<UsuarioReferenciaMySqlEntity> {

    return from(this.findById(usuarioReferenciaId)).pipe(
      switchMap( (data:UsuarioReferenciaMySqlEntity ) => {
        if(data){
          entity.usuarioReferenciaId = data.usuarioReferenciaId;
          const newEntity = {
            ...data,
            ...entity,
            usuarioReferenciaId,
          };
          return from(this.usuarioReferenciaRepository.save(newEntity)).pipe(
            catchError((err: Error) => {
              throw new Error(err.message);
            }),
          );
        } else {
          throw new NotFoundException('Referencia de usuarios no encontrado');
        }
      })
    )
  }

  delete(usuarioReferenciaId: string): Observable<boolean> {
    return from(
      this.usuarioReferenciaRepository.findOneBy({
        usuarioReferenciaId,
      }),
    ).pipe(
      map((curso: UsuarioReferenciaMySqlEntity) => {
        if (curso) {
          this.usuarioReferenciaRepository.remove(curso);
          return true;
        } else {
          return false;
        }
      }),
    );
  }
}