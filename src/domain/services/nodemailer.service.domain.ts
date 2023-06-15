import { Observable } from "rxjs";
import { IMensajeCorreoDomain } from "../interfaces/mensaje-correo.inteface.domain";
import { MensajeCorreoDomainEntity } from "../entities/mensaje-correo.entity.domain";

export interface INodeMailerDomainService<T extends IMensajeCorreoDomain = IMensajeCorreoDomain> {
    sendMail(entity: T): Promise<MensajeCorreoDomainEntity>;
}
