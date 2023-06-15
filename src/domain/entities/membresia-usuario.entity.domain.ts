import { IMembresiaUsuarioDomain } from '../interfaces/membresia-usuario.inteface.domain';
import { v4 as uuidv4 } from 'uuid';
import { IMembresiaDomain } from '../interfaces/membresia.inteface.domain';
import { IUsuarioDomain } from '../interfaces/usuario.interface.domain';
export class MembresiaUsuarioDomainEntity implements IMembresiaUsuarioDomain {
  id: string;
  membresia?: IMembresiaDomain;
  usuario?: IUsuarioDomain;
  fecha_creado?: number | Date;
  activo?: boolean;

  constructor(membresiaUsuario?: IMembresiaUsuarioDomain) {
    if (membresiaUsuario?.id) this.id = membresiaUsuario.id;
    else this.id = uuidv4();
    if (membresiaUsuario?.membresia)
      this.membresia = membresiaUsuario.membresia;
    if (membresiaUsuario?.usuario)
      this.usuario = membresiaUsuario.usuario;
    if (membresiaUsuario?.fecha_creado)
      this.fecha_creado = membresiaUsuario.fecha_creado;
    if (membresiaUsuario?.activo) this.activo = membresiaUsuario.activo;
  }
}
