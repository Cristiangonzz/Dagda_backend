import { Observable } from "rxjs";
import { MembresiaDomainEntity } from "../entities/membresia.entity.domain";

export interface IMembresiaDomainService<T extends MembresiaDomainEntity = MembresiaDomainEntity> {
    
    register(entity: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    findOneNombre(nombre: string): Observable<T>
    update(id :string ,persona: T): Observable<T>;
    delete(id: string): Observable<boolean>;
    findAll(): Observable<T[]>;
}