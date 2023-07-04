import { Observable } from "rxjs";
import { MembresiaUsuarioDomainEntity } from "../entities/membresia-usuario.entity.domain";

export interface IMembresiaUsuarioDomainService<T extends MembresiaUsuarioDomainEntity = MembresiaUsuarioDomainEntity> {
    
    register(entity: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    findOneNombre(nombre: string): Observable<T>
    update(id :string ,persona: T): Observable<T>;
    delete(id: string): Observable<boolean>;
    findAll(): Observable<T[]>;
    findUsuarioMembresia(usuario : string , membresia : string ): Promise<T[]>;
}