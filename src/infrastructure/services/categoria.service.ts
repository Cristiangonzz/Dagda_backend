import { Injectable } from '@nestjs/common';
import { CategoriaMySqlService } from '../dataBase/mysql/services/categoria.mysql.service';

@Injectable()
export class CategoriaService extends CategoriaMySqlService  {
}
