import { Injectable } from '@nestjs/common';
import { MembresiaMySqlService } from '../dataBase/mysql/services/membresia.mysql.service';

@Injectable()
export class MembresiaService extends MembresiaMySqlService  {
}
