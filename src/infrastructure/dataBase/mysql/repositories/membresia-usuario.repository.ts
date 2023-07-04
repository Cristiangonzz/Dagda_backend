import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRepository } from './interfaces/repository.interface';
import { Observable, catchError, from, map, switchMap } from 'rxjs';
import { MembresiaUsuarioMySqlEntity } from '../entities/membresia-usuario-mysql.entity';

@Injectable()
export class MembresiaUsuarioRepository implements IRepository<MembresiaUsuarioMySqlEntity> {
  constructor(
    @InjectRepository(MembresiaUsuarioMySqlEntity)
    private readonly membresiaRepository: Repository<MembresiaUsuarioMySqlEntity>,
  ) {}
  
  findByNombre(nombre: string): Observable<MembresiaUsuarioMySqlEntity> {
    throw new Error('Method not implemented.');
  }

  findAll(): Observable<MembresiaUsuarioMySqlEntity[]> {
    return from(this.membresiaRepository.find()).pipe(
      map((cursos: MembresiaUsuarioMySqlEntity[]) => {
        return cursos;
      }),
    );
  }

  findById(membresiaUsuarioId: string): Observable<MembresiaUsuarioMySqlEntity> {
    return from(this.membresiaRepository.findOneBy({ membresiaUsuarioId })).pipe(
      catchError((err: Error) => {
        throw new Error(err.message);
      }),
    );
  }
  

  create(entity: MembresiaUsuarioMySqlEntity): Observable<MembresiaUsuarioMySqlEntity> {
    return from(this.membresiaRepository.save(entity));
  }

  update(
    membresiaUsuarioId: string,
    entity: MembresiaUsuarioMySqlEntity,
  ): Observable<MembresiaUsuarioMySqlEntity> {

    return from(this.findById(membresiaUsuarioId)).pipe(
      switchMap( (data:MembresiaUsuarioMySqlEntity ) => {
        if(data){
          entity.membresiaUsuarioId = data.membresiaUsuarioId;
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

  delete(membresiaUsuarioId: string): Observable<boolean> {
    return from(
      this.membresiaRepository.findOneBy({
        membresiaUsuarioId,
      }),
    ).pipe(
      map((curso: MembresiaUsuarioMySqlEntity) => {
        if (curso) {
          this.membresiaRepository.remove(curso);
          return true;
        } else {
          return false;
        }
      }),
    );
  }

  async findByUsuarioMembresia(usuario: string,membresia:string): Promise<MembresiaUsuarioMySqlEntity[]> {
    return await this.membresiaRepository
    .createQueryBuilder('entity')
    .leftJoinAndSelect('entity.usuario', 'usuario')
    .leftJoinAndSelect('entity.membresia', 'membresia')
    .where('usuario.email = :usuario', { usuario })
    .andWhere('membresia.nombre = :membresia', { membresia })
    .getMany();
  }
}
