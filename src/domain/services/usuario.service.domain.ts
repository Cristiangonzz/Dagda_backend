import { Observable } from "rxjs";
import { UsuarioDomainEntity } from "../entities/usuario.entity.domain";

export interface IUsuarioDomainService<T extends UsuarioDomainEntity = UsuarioDomainEntity> {
    
    register(entity: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    findOneEmail(id: string): Observable<T>
    update(id :string ,persona: T): Observable<T>;
    delete(id: string): Observable<boolean>;
    findAll(): Observable<T[]>;
}