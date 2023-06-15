import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { IncripcionMySqlEntity } from '../entities/incripcion-mysql.entity';
import { Observable, catchError, from, map, switchMap } from 'rxjs';

@Injectable()
export class IncripcionRepository
  implements IRepository<IncripcionMySqlEntity>
{
  constructor(
    @InjectRepository(IncripcionMySqlEntity)
    private readonly incripcionRepository: Repository<IncripcionMySqlEntity>,
  ) {}

  findAll(): Observable<IncripcionMySqlEntity[]> {
    return from(this.incripcionRepository.find()).pipe(
      map((incripciones: IncripcionMySqlEntity[]) => {
        return incripciones;
      }),
    );
  }

  findById(incripcionId: string): Observable<IncripcionMySqlEntity> {
    return from(this.incripcionRepository.findOneBy({ incripcionId })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }
  
  async findByUsuarioCurso(usuario: string,curso:string): Promise<IncripcionMySqlEntity[]> {
    return await this.incripcionRepository
    .createQueryBuilder('entity')
    .leftJoinAndSelect('entity.usuario', 'usuario')
    .leftJoinAndSelect('entity.curso', 'curso')
    .where('usuario.email = :usuario', { usuario })
    .andWhere('curso.titulo = :curso', { curso })
    .getMany();
  }
  create(entity: IncripcionMySqlEntity): Observable<IncripcionMySqlEntity> {
    return from(this.findByUsuarioCurso(entity.usuario.email, entity.curso.titulo))
    .pipe(
      switchMap((incripciones: IncripcionMySqlEntity[]) => {
        if (incripciones.length > 0) {
          console.log(incripciones);
          throw new Error('Ya se encuentra inscripto en el curso');
        } else {
          return from(this.incripcionRepository.save(entity));
        }
      })
    );
  }

  delete(incripcionId: string): Observable<boolean> {
    return from(
      this.incripcionRepository.findOneBy({
        incripcionId,
      }),
    ).pipe(
      map((curso: IncripcionMySqlEntity) => {
        if (curso) {
          this.incripcionRepository.remove(curso);
          return true;
        } else {
          return false;
        }
      }),
    );
  }

  //No se necesitan implementar para el proyecto
  findByNombre(nombre: string): Observable<IncripcionMySqlEntity> {
    throw new Error('Method not implemented.');
  }
  update(
    id: string,
    entity: IncripcionMySqlEntity,
  ): Observable<IncripcionMySqlEntity> {
    throw new Error('Method not implemented.');
  }
}
