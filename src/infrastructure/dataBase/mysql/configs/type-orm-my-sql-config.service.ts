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

@Injectable()
export class TypeOrmMySqlConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(
    connectionName?: string,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      name: connectionName,
      host: 'localhost', //this.configService.get<string>('DB_HOST'), //
      port: 3306, //this.configService.get<number>('DB_PORT'), //3306,//
      username: 'root', // this.configService.get<string>('DB_USER'),//'cristian',//
      password: '', //this.configService.get<string>('DB_PASSWORD'), //
      database: 'dagda', //this.configService.get<string>('DB_NAME'), //
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
      ],
      synchronize: false,
    };
  }
}
