import { Injectable } from '@nestjs/common';
import { IncripcionMySqlService } from '../dataBase/mysql/services/incripcion.mysql.service';

@Injectable()
export class IncripcionService extends IncripcionMySqlService  {
}
