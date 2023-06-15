import { IUsuarioDomain } from "./usuario.interface.domain";

export interface IUsuarioReferenciaDomain{
    id: string;
    usu_referente?: IUsuarioDomain;
    usu_referido?: IUsuarioDomain;
    fecha_referencia?: Date | number;
}