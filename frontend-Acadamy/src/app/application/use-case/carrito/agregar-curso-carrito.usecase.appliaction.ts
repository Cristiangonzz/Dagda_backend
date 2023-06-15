import { Injectable } from '@angular/core';
import { BehaviorSubject, asyncScheduler } from 'rxjs';
import {  CursoDomainEntity } from 'src/app/domain/entities/curso.entity.domain';
import {  CursoService } from 'src/app/domain/services/curso.service.domain';

@Injectable({
  providedIn: 'root',
})
export class AgregarCursoCarritoUseCase {
  private cursoCarrito: CursoDomainEntity [] =  [];

  public cursosCarritoEmmit: BehaviorSubject<CursoDomainEntity[]> = 
  new BehaviorSubject<CursoDomainEntity[]>(this.cursoCarrito);

  execute (curso: CursoDomainEntity): void {
    if (this.cursosCarritoEmmit.observed && !this.cursosCarritoEmmit.closed) {
        this.cursoCarrito.push(curso);
        this.cursosCarritoEmmit.next(this.cursoCarrito);
    } 
  };
}
