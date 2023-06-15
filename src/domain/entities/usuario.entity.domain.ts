import { IUsuarioDomain } from '../interfaces/usuario.interface.domain';
import { v4 as uuidv4 } from 'uuid';
export class UsuarioDomainEntity implements IUsuarioDomain {
  id: string;
  primer_nombre?: string;
  segundo_nombre?: string;
  primer_apellido?: string;
  segundo_apellido?: string;
  cod_telefono?: string;
  telefono?: string;
  usuario?: string;
  foto?: string;
  tipo_usuario?: number;
  clave?: string;
  usuario_verificado?: number;
  email?: string;
  vigente?: boolean;

  constructor(usuario?: IUsuarioDomain) {
    if (usuario?.id) this.id = usuario.id;
    else this.id = uuidv4();
    if (usuario?.primer_nombre) this.primer_nombre = usuario.primer_nombre;
    if (usuario?.segundo_nombre) this.segundo_nombre = usuario.segundo_nombre;
    if (usuario?.primer_apellido)
      this.primer_apellido = usuario.primer_apellido;
    if (usuario?.segundo_apellido)
      this.segundo_apellido = usuario.segundo_apellido;
    if (usuario?.cod_telefono) this.cod_telefono = usuario.cod_telefono;
    if (usuario?.telefono) this.telefono = usuario.telefono;
    if (usuario?.usuario) this.usuario = usuario.usuario;

    if (usuario?.clave) this.clave = usuario.clave;
    if (usuario?.tipo_usuario) this.tipo_usuario = usuario.tipo_usuario;
    if (usuario?.usuario_verificado)
      this.usuario_verificado = usuario.usuario_verificado;
    if (usuario?.email) this.email = usuario.email;
    if (usuario?.vigente) this.vigente = usuario.vigente;
    if (usuario?.foto) this.foto = usuario.foto;
  }
}
