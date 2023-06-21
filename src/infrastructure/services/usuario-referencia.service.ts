import { Injectable } from '@nestjs/common';
import { UsuarioReferenciaMySqlService } from '../dataBase/mysql/services/usuario-referencia.mysql.service';

@Injectable()
export class UsuarioReferenciaService extends UsuarioReferenciaMySqlService  {
}
