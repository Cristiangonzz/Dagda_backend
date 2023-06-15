import { CrearCursoDto } from 'src/app/infrastructure/dto/create/create-curso.dto';
import { CursoDomainEntity } from '../entities/curso.entity.domain';
import { BaseService } from './base.service.domain';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateCursoDto } from 'src/app/infrastructure/dto/create/update-curso.dto';

@Injectable({
  providedIn: 'root',
})
export abstract class CursoService extends BaseService<CursoDomainEntity> {
  abstract create(data: CrearCursoDto): Observable<CursoDomainEntity>;
  abstract update(id: string, entity: UpdateCursoDto): Observable<CursoDomainEntity>;
}
