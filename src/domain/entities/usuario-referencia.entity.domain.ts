import { IUsuarioReferenciaDomain } from '../interfaces/usuario-referencia.interface.domain';
import { v4 as uuidv4 } from 'uuid';
export class UsuarioReferenciaDomainEntity implements IUsuarioReferenciaDomain {
  usuarioReferenciaId: string;
  usu_referente: string;
  usu_referido: string;
  fecha_referencia?: number | Date;

  constructor(usuarioReferencia?: IUsuarioReferenciaDomain) {
    if (usuarioReferencia?.usuarioReferenciaId) this.usuarioReferenciaId = usuarioReferencia.usuarioReferenciaId;
    else this.usuarioReferenciaId = uuidv4();
    if (usuarioReferencia?.usu_referente)
      this.usu_referente = usuarioReferencia.usu_referente;
      if (usuarioReferencia?.usu_referido)
      this.usu_referido = usuarioReferencia.usu_referido;
    if (usuarioReferencia?.fecha_referencia)
      this.fecha_referencia = usuarioReferencia.fecha_referencia;
  }
}
