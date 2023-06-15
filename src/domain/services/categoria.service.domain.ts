import { Observable } from "rxjs";
import { CategoriaDomainEntity } from "../entities/categoria.entity.domain";

export interface ICategoriaDomainService<T extends CategoriaDomainEntity = CategoriaDomainEntity> {
    
    register(entity: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    findOneNombre(nombre: string): Observable<T>
    update(id :string ,persona: T): Observable<T>;
    delete(id: string): Observable<boolean>;
    findAll(): Observable<T[]>;
}