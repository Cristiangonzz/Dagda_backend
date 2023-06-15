import {
  Body,
  Controller,
  Post
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SendEmailDto } from '../dto/create/send-email.dto';
import { transporter } from '../../config/mailer-prueba';
import { NodeMailerDelegate } from 'src/application/delegates/nodemailer.delegate';
import { NodeMailerService } from '../services/nodemailer.service';
import { MensajeCorreoDomainEntity } from 'src/domain/entities/mensaje-correo.entity.domain';

@ApiTags('nodemailer')
@Controller('nodemailer')
export class NodeMailerController {
  private readonly useCase: NodeMailerDelegate;
  constructor(private readonly nodeMailerService: NodeMailerService) {
    this.useCase = new NodeMailerDelegate(this.nodeMailerService);
  }

  @ApiOperation({ summary: 'Enviar Correo' })
  @Post()
  sendMail(
    @Body() mail: SendEmailDto,
  ): Promise<MensajeCorreoDomainEntity> {
    this.useCase.toNodeMailer();
    return this.useCase.execute(mail);
  }


  // @ApiOperation({ summary: 'Send Email' })
  // @Post('email/')
  // async sendEmail( @Body() email: SendEmailDto): Promise<void> {
  //   await transporter.sendMail({
  //     from: '"Desde mi app amor👻" <cristianuruuy@gmail.com>', // sender address
  //     to: email.email, // list of receivers
  //     subject: "I Love amor👻✔", // Subject line
  //     html: "<b>I Love amor</b>", // html body
  //   });
  // }
    
  
}
