import { Observable } from "rxjs";

export interface IRepository<Entity> {
  findAll(...arg): Observable<Entity[]>;
  findById(id: string): Observable<Entity>;
  findByNombre(nombre: string): Observable<Entity>;
  create(entity: Entity): Observable<Entity>;
  update(id: string, entity: Entity): Observable<Entity>;
  delete(id: string): Observable<boolean>;
}
