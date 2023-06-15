import { IMensajeCorreoDomain } from '../interfaces/mensaje-correo.inteface.domain';
import { IDireccionCorreoDomain } from '../interfaces/direccion-correo.inteface.domain';
import { v4 as uuidv4 } from 'uuid';

export class MensajeCorreoDomainEntity implements IMensajeCorreoDomain {
  id?: string;
  to: IDireccionCorreoDomain;
  from: IDireccionCorreoDomain;
  subject: string;
  body: string;

  constructor(data?: IMensajeCorreoDomain) {
    if (data?.id) this.id = data.id;
    else this.id = uuidv4();
    if (data?.to) this.to = data.to;
    if (data?.from) this.from = data.from;
    if (data?.subject) this.subject = data.subject;
    if (data?.body) this.body = data.body;
  }
}
