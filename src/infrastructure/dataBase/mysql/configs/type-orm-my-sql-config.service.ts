import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { CategoriaMySqlEntity } from '../entities/categoria-mysql.entity';
import { CursoMySqlEntity } from '../entities/curso-mysql.entity';
import { MembresiaMySqlEntity } from '../entities/membresia-mysql.entity';
import { MembresiaUsuarioMySqlEntity } from '../entities/membresia-usuario-mysql.entity';
import { SubCategoriaMySqlEntity } from '../entities/sub-categoria-mysql.entity';
import { UsuarioMySqlEntity } from '../entities/usuario-mysql.entity';
import { UsuarioReferenciaMySqlEntity } from '../entities/usuario-referente-mysql.entity';
import { IncripcionMySqlEntity } from '../entities/incripcion-mysql.entity';
import { NodeMailerMySqlEntity } from '../entities/nodemailer-mysql.entity';
import { imagenMySqlEntity } from '../entities/imagen-mysql';
import {
  MYSQLCLAVE,
  MYSQLHOST,
  MYSQLNOMBREDATEBASE,
  MYSQLPORT,
  MYSQLUSER} from "../../../../config/config";
@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      name: connectionName,
      host: MYSQLHOST || 'localhost',
      port: MYSQLPORT || 3306,
      username: MYSQLUSER || 'academy', 
      password: MYSQLCLAVE || 'jn316rom623',
      database: MYSQLNOMBREDATEBASE || 'academy', 
      autoLoadEntities: true,
      entities: [
        CategoriaMySqlEntity,
        CursoMySqlEntity,
        MembresiaMySqlEntity,
        MembresiaUsuarioMySqlEntity,
        SubCategoriaMySqlEntity,
        UsuarioMySqlEntity,
        UsuarioReferenciaMySqlEntity,
        IncripcionMySqlEntity,
        NodeMailerMySqlEntity,
        imagenMySqlEntity,
      ],
      synchronize: false,
    };
  }
}
