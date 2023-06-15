import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import { UsuarioMySqlEntity } from '../entities/usuario-mysql.entity';

@Injectable()
export class UsuarioRepository implements IRepository<UsuarioMySqlEntity> {
  constructor(
    @InjectRepository(UsuarioMySqlEntity)
    private readonly usuarioRepository: Repository<UsuarioMySqlEntity>,
  ) {}
  findByNombre(nombre: string): Observable<UsuarioMySqlEntity> {
    throw new Error('Method not implemented.');
  }

  findAll(): Observable<UsuarioMySqlEntity[]> {
    return from(this.usuarioRepository.find()).pipe(
      map((cursos: UsuarioMySqlEntity[]) => {
        return cursos;
      }),
    );
  }

  findById(usuarioId: string): Observable<UsuarioMySqlEntity> {
    return from(this.usuarioRepository.findOneBy({ usuarioId })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }
  findByEmail(email: string): Observable<UsuarioMySqlEntity> {
    return from(this.usuarioRepository.findOneBy({ email })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }

  create(entity: UsuarioMySqlEntity): Observable<UsuarioMySqlEntity> {
    return from(this.usuarioRepository.save(entity));
  }

  update(
    email: string,
    entity: UsuarioMySqlEntity,
  ): Observable<UsuarioMySqlEntity> {

    return from(this.findByEmail(email)).pipe(
      switchMap( (data:UsuarioMySqlEntity ) => {
        if(data){
          entity.usuarioId = data.usuarioId;
          const newEntity = {
            ...data,
            ...entity,
          };
          return from(this.usuarioRepository.save(newEntity)).pipe(
            catchError((err: Error) => {
              throw new Error(err.message);
            }),
          );
        } else {
          throw new NotFoundException('Usuario no encontrado');
        }
      })
    )
  }

  delete(email: string): Observable<boolean> {
    return from(
      this.usuarioRepository.findOneBy({
        email,
      }),
    ).pipe(
      map((curso: UsuarioMySqlEntity) => {
        if (curso) {
          this.usuarioRepository.remove(curso);
          return true;
        } else {
          return false;
        }
      }),
    );
  }
}