import nodemailer = require("nodemailer");
import Mail = require("nodemailer/lib/mailer");
import { MensajeCorreoDomainEntity } from "src/domain/entities/mensaje-correo.entity.domain";
import { IMensajeCorreoDomain } from "src/domain/interfaces/mensaje-correo.inteface.domain";
import { INodeMailerDomainService } from "src/domain/services/nodemailer.service.domain";


  export class NodeMailerProvider implements INodeMailerDomainService {
    private readonly transporter : Mail;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "cristianuruuy@gmail.com",
                pass: "esfmfbmffnhynykv", // generated ethereal password
            },
        });
    }
    async sendMail(entity: IMensajeCorreoDomain): Promise<MensajeCorreoDomainEntity> {
        return await this.transporter.sendMail({
            to: {
                name: entity.to.nombre,
                address: entity.to.email,
            }
            ,
            from: {
                name: entity.from.nombre,
                address: entity.from.email,
            },
            subject: entity.subject,
            html: entity.body,
        });
    }
    
}