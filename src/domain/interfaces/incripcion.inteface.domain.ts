import { ICursoDomain } from "./curso.interface.domain";
import { IUsuarioDomain } from "./usuario.interface.domain";

export interface IIncripcionDomain{
    incripcionId: string;
    curso?: ICursoDomain
    usuario?: IUsuarioDomain;
    fechaIncripcion?: Date;
    pago?:boolean;
} 