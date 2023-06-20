import { MensajeCorreoDomainEntity } from 'src/domain/entities/mensaje-correo.entity.domain';
import { IMensajeCorreoDomain } from 'src/domain/interfaces/mensaje-correo.inteface.domain';
import { INodeMailerDomainService } from 'src/domain/services/nodemailer.service.domain';
import { SendEmailDto } from 'src/infrastructure/dto/create/send-email.dto';
import nodemailer = require("nodemailer");
import Mail = require("nodemailer/lib/mailer");

export class NodeMailerUseCase {
  private readonly transporter : Mail;
  constructor(    private readonly nodeMailerService: INodeMailerDomainService<IMensajeCorreoDomain>,
    ) {
      this.transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
              user: "academiadagda@gmail.com",
              pass: "ezxwafugoqofhxjt", // generated ethereal password
          },
      });
  }
  async execute(entity: SendEmailDto): Promise<MensajeCorreoDomainEntity> {
      const data =  await this.transporter.sendMail({
          to: {
              name: entity.nombreTo,
              address: entity.emailTo,
          }
          ,
          from: {
              name: entity.nombreFrom,
              address: entity.emailFrom,
          },
          subject: entity.subject,
          html: entity.body,
      });
      return this.nodeMailerService.sendMail(data);
  }
}
