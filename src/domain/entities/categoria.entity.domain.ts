import { ICategoriaDomain } from '../interfaces/categoria.inteface.domain';
import { v4 as uuidv4 } from 'uuid';

export class CategoriaDomainEntity implements ICategoriaDomain {
  categoriaId: string;
  nombre: string;
  vigente? = true;

  constructor(categoria?: ICategoriaDomain) {
    if (categoria?.categoriaId) this.categoriaId = categoria.categoriaId;
    else this.categoriaId = uuidv4();

    if (categoria?.nombre) this.nombre = categoria.nombre;

    if (categoria?.vigente) this.vigente = categoria.vigente;
  }
}
