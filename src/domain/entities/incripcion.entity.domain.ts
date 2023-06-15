import { v4 as uuidv4 } from 'uuid';
import { IIncripcionDomain } from '../interfaces/incripcion.inteface.domain';
import { ICursoDomain } from '../interfaces/curso.interface.domain';
import { IUsuarioDomain } from '../interfaces/usuario.interface.domain';

export class IncripcionDomainEntity implements IIncripcionDomain {
  incripcionId: string;
  curso?: ICursoDomain;
  usuario?: IUsuarioDomain;
  fechaIncripcion?: Date;
  pago? = false;

  constructor(incripcion?: IIncripcionDomain) {
    if (incripcion?.incripcionId) this.incripcionId = incripcion.incripcionId;
    else this.incripcionId = uuidv4();

    if (incripcion?.curso) this.curso = incripcion.curso;

    if (incripcion?.usuario) this.usuario = incripcion.usuario;
    if (incripcion?.fechaIncripcion)
      this.fechaIncripcion = incripcion.fechaIncripcion;
    if (incripcion?.pago) this.pago = incripcion.pago;
  }
}
