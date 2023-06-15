import { IUsuarioReferenciaDomain } from '../interfaces/usuario-referencia.interface.domain';
import { IUsuarioDomain } from '../interfaces/usuario.interface.domain';
import { v4 as uuidv4 } from 'uuid';
export class UsuarioReferenciaDomainEntity implements IUsuarioReferenciaDomain {
  id: string;
  usu_referente?: IUsuarioDomain;
  usu_referido?: IUsuarioDomain;
  fecha_referencia?: number | Date;

  constructor(usuarioReferencia?: IUsuarioReferenciaDomain) {
    if (usuarioReferencia?.id) this.id = usuarioReferencia.id;
    else this.id = uuidv4();
    if (usuarioReferencia?.usu_referente)
      this.usu_referente = usuarioReferencia.usu_referente;
    if (usuarioReferencia?.usu_referido)
      this.usu_referido = usuarioReferencia.usu_referido;
    if (usuarioReferencia?.fecha_referencia)
      this.fecha_referencia = usuarioReferencia.fecha_referencia;
  }
}
