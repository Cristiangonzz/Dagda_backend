import { Injectable } from '@nestjs/common';
import { CursoMySqlService } from '../dataBase/mysql/services/curso.mysql.service';

@Injectable()
export class CursoService extends CursoMySqlService  {
}
