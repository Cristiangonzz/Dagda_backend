import { IUsuarioReferenciaDomain } from '../interfaces/usuario-referencia.interface.domain';
import { IUsuarioDomain } from '../interfaces/usuario.interface.domain';
export class UsuarioReferenciaDomainEntity implements IUsuarioReferenciaDomain {
  id: string;
  usu_referente?: IUsuarioDomain;
  usu_referido?: IUsuarioDomain;
  fecha_referencia?: number | Date;

  constructor(
    id?: string,
    usu_referente?: IUsuarioDomain,
    usu_referido?: IUsuarioDomain,
    fecha_referencia?: number | Date,
  ) {
    this.id = id as string;
    this.usu_referente = usu_referente as IUsuarioDomain;
    this.usu_referido = usu_referido as IUsuarioDomain;
    this.fecha_referencia = fecha_referencia as number | Date;
  }
}
