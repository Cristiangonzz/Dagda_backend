import { Injectable } from '@nestjs/common';
import { UsuarioMySqlService } from '../dataBase/mysql/services/usuario.mysql.service';

@Injectable()
export class UsuarioService extends UsuarioMySqlService  {
}
