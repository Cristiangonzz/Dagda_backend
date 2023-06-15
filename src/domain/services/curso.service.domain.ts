import { Observable } from "rxjs";
import { CursoDomainEntity } from "../entities/curso.entity.domain";

export interface ICursoDomainService<T extends CursoDomainEntity = CursoDomainEntity> {
    
    register(entity: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    findOneNombre(nombre: string): Observable<T>
    update(id :string ,persona: T): Observable<T>;
    delete(id: string): Observable<boolean>;
    findAll(): Observable<T[]>;
}