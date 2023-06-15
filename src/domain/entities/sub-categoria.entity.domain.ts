import { ICategoriaDomain } from '../interfaces/categoria.inteface.domain';
import { ISubCategoriaDomain } from '../interfaces/sub-categoria.inteface.domain';
import { v4 as uuidv4 } from 'uuid';
export class SubCategoriaEntityDomain implements ISubCategoriaDomain {
  id: string;
  categoria?: ICategoriaDomain;
  nombre?: string;
  vigente?: boolean;

  constructor(data: ISubCategoriaDomain) {
    if (data?.id) this.id = data.id;
    else this.id = uuidv4();
    if (data?.categoria) this.categoria = data.categoria;
    if (data?.nombre) this.nombre = data.nombre;
    if (data?.vigente) this.vigente = data.vigente;
  }
}
