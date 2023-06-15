import { Observable } from "rxjs";
import { IncripcionDomainEntity } from "../entities/incripcion.entity.domain";

export interface IIncripcionDomainService<T extends IncripcionDomainEntity = IncripcionDomainEntity> {
    
    register(entity: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    delete(id: string): Observable<boolean>;
    findAll(): Observable<T[]>;
    findUsuarioCursos(usuario: string,curso: string): Promise<T[]>

}