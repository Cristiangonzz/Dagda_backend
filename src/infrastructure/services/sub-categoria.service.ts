import { Injectable } from '@nestjs/common';
import { SubCategoriaMySqlService } from '../dataBase/mysql/services/sub-categoria.mysql.service';

@Injectable()
export class SubCategoriaService extends SubCategoriaMySqlService  {
}
