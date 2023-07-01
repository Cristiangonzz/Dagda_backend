import { IMembresiaDomain } from '../interfaces/membresia.inteface.domain';
import { v4 as uuidv4 } from 'uuid';
export class MembresiaDomainEntity implements IMembresiaDomain {
  id: string;
  nombre?: string;
  beneficios?:string;
  fecha_adquirida?: string | number | Date;
  vigente?: boolean;
  puede_referenciar? = false;
  costo?: number;

  constructor(membresia?: IMembresiaDomain) {
    if (membresia?.id) this.id = membresia.id;
    else this.id = uuidv4();

    if (membresia?.nombre) this.nombre = membresia.nombre;
    if (membresia?.beneficios) this.beneficios = membresia.beneficios;
    if (membresia?.fecha_adquirida) this.fecha_adquirida = membresia.fecha_adquirida;
    if (membresia?.vigente) this.vigente = membresia.vigente;
    if (membresia?.puede_referenciar)
      this.puede_referenciar = membresia.puede_referenciar;
    if (membresia?.costo) this.costo = membresia.costo;
  }
}
