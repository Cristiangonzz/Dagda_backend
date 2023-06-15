import { Injectable } from '@nestjs/common';
import { NodeMailerMySqlService } from '../dataBase/mysql/services/nodemailer.mysql.service';

@Injectable()
export class NodeMailerService extends NodeMailerMySqlService  {
}
