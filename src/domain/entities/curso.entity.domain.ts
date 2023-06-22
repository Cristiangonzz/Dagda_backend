import { ICategoriaDomain } from '../interfaces/categoria.inteface.domain';
import { ICursoDomain } from '../interfaces/curso.interface.domain';
import { v4 as uuidv4 } from 'uuid';
import { IProgramaCursoDomain } from '../interfaces/programa-curso.interface.domain';

export class CursoDomainEntity implements ICursoDomain {
  cursoId: string;
  fecha_creada?: string | number | Date;
  titulo: string;
  imagen?: string;
  descripcion?: string;
  categoria: ICategoriaDomain;
  vigente? = true;
  detalle?: string;
  precio?: number;
  programa?: IProgramaCursoDomain[];


  constructor(curso?: ICursoDomain) {
    if (curso?.cursoId) this.cursoId = curso.cursoId;
    else this.cursoId = uuidv4();
    if (curso?.fecha_creada) this.fecha_creada = curso.fecha_creada;
    if (curso?.titulo) this.titulo = curso.titulo;
    if (curso?.imagen) this.imagen = curso.imagen;
    if (curso?.descripcion) this.descripcion = curso.descripcion;
    if (curso?.categoria) this.categoria = curso.categoria;
  
    if (curso?.vigente) this.vigente = curso.vigente;
    if (curso?.detalle) this.detalle = curso.detalle;
    if (curso?.precio) this.precio = curso.precio;
    if (curso?.programa) this.programa = curso.programa;
  }
}
