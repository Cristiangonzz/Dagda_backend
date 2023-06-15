import { Injectable } from '@nestjs/common';
import { MembresiaUsuarioMySqlService } from '../dataBase/mysql/services/membresia-usuario.mysql.service';

@Injectable()
export class MembresiaUsuarioService extends MembresiaUsuarioMySqlService  {
}
