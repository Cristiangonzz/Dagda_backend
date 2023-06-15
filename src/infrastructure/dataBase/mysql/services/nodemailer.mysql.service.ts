import { Injectable } from '@nestjs/common';
import { NodeMailerMySqlEntity } from '../entities/nodemailer-mysql.entity';
import { INodeMailerDomainService } from 'src/domain/services/nodemailer.service.domain';
import { NodeMailerRepository } from '../repositories/nodemailer.repository';

@Injectable()
export class NodeMailerMySqlService
  implements INodeMailerDomainService<NodeMailerMySqlEntity>
{
  constructor(private readonly nodeMailerRepository: NodeMailerRepository) {}
  
  sendMail(entity: NodeMailerMySqlEntity): Promise<NodeMailerMySqlEntity> {
    return this.nodeMailerRepository.sendMail(entity);
  }

}
