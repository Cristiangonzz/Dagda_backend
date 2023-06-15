import { IDireccionCorreoDomain } from "./direccion-correo.inteface.domain";

export interface IMensajeCorreoDomain {
  id?: string;
  to: IDireccionCorreoDomain;
  from: IDireccionCorreoDomain;
  subject: string;
  body: string ;

}
