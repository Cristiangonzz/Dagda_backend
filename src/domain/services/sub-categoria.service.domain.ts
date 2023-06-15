import { Observable } from "rxjs";
import { SubCategoriaEntityDomain } from "../entities/sub-categoria.entity.domain";

export interface ISubCategoriaDomainService<T extends SubCategoriaEntityDomain = SubCategoriaEntityDomain> {
    
    register(entity: T): Observable<T>;
    findOneBy(id: string): Observable<T>
    update(id :string ,persona: T): Observable<T>;
    delete(id: string): Observable<boolean>;
    findAll(): Observable<T[]>;
}