import { Observable } from "rxjs";
import { UsuarioReferenciaDomainEntity } from "../entities/usuario-referencia.entity.domain";

export interface IUsuarioReferenciaDomainService<T extends UsuarioReferenciaDomainEntity = UsuarioReferenciaDomainEntity> {
    
    register(entity: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    findEmailReferido(id: string): Observable<T>
    update(id :string ,persona: T): Observable<T>;
    delete(id: string): Observable<boolean>;
    findAll(): Observable<T[]>;
}