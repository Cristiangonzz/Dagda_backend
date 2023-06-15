import { Module } from '@nestjs/common';
import { TypeOrmMySqlConfigService } from './configs/type-orm-my-sql-config.service';
import { CategoriaMySqlEntity } from './entities/categoria-mysql.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoMySqlEntity } from './entities/curso-mysql.entity';
import { MembresiaMySqlEntity } from './entities/membresia-mysql.entity';
import { MembresiaUsuarioMySqlEntity } from './entities/membresia-usuario-mysql.entity';
import { SubCategoriaMySqlEntity } from './entities/sub-categoria-mysql.entity';
import { UsuarioMySqlEntity } from './entities/usuario-mysql.entity';
import { UsuarioReferenciaMySqlEntity } from './entities/usuario-referente-mysql.entity';
import { CategoriaMySqlService } from './services/categoria.mysql.service';
import { CursoMySqlService } from './services/curso.mysql.service';
import { MembresiaMySqlService } from './services/membresia.mysql.service';
import { MembresiaUsuarioMySqlService } from './services/membresia-usuario.mysql.service';
import { SubCategoriaMySqlService } from './services/sub-categoria.mysql.service';
import { UsuarioMySqlService } from './services/usuario.mysql.service';
import { UsuarioReferenciaMySqlService } from './services/usuario-referencia.mysql.service';
import { CategoriaRepository } from './repositories/categoria.repository';
import { CursoRepository } from './repositories/curso.repository';
import { MembresiaRepository } from './repositories/membresia.repository';
import { MembresiaUsuarioRepository } from './repositories/membresia-usuario.repository';
import { SubCategoriaRepository } from './repositories/sub-categoria.repository';
import { UsuarioRepository } from './repositories/usuario.repository';
import { UsuarioReferenciaRepository } from './repositories/usuario-referente.repository';
import { IncripcionMySqlEntity } from './entities/incripcion-mysql.entity';
import { IncripcionMySqlService } from './services/incripcion.mysql.service';
import { IncripcionRepository } from './repositories/incripcion.repository';
import { NodeMailerMySqlEntity } from './entities/nodemailer-mysql.entity';
import { NodeMailerMySqlService } from './services/nodemailer.mysql.service';
import { NodeMailerRepository } from './repositories/nodemailer.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmMySqlConfigService,
    }),
    TypeOrmModule.forFeature([
      CategoriaMySqlEntity,
      CursoMySqlEntity,
      MembresiaMySqlEntity,
      MembresiaUsuarioMySqlEntity,
      SubCategoriaMySqlEntity,
      UsuarioMySqlEntity,
      IncripcionMySqlEntity,
      UsuarioReferenciaMySqlEntity,
      NodeMailerMySqlEntity,
    ]),
  ],
  controllers: [],
  providers: [
    TypeOrmMySqlConfigService,
    NodeMailerMySqlService,
    CategoriaMySqlService,
    CursoMySqlService,
    MembresiaMySqlService,
    MembresiaUsuarioMySqlService,
    SubCategoriaMySqlService,
    UsuarioMySqlService,
    IncripcionMySqlService,
    UsuarioReferenciaMySqlService,
    NodeMailerRepository,
    CategoriaRepository,
    CursoRepository,
    MembresiaRepository,
    MembresiaUsuarioRepository,
    SubCategoriaRepository,
    UsuarioRepository,
    UsuarioReferenciaRepository,
    IncripcionRepository,
  ],
  exports: [
    TypeOrmMySqlConfigService,
    NodeMailerMySqlService,
    CategoriaMySqlService,
    IncripcionMySqlService,
    CursoMySqlService,
    MembresiaMySqlService,
    MembresiaUsuarioMySqlService,
    SubCategoriaMySqlService,
    UsuarioMySqlService,
    UsuarioReferenciaMySqlService,
    NodeMailerRepository,
    CategoriaRepository,
    CursoRepository,
    MembresiaRepository,
    MembresiaUsuarioRepository,
    SubCategoriaRepository,
    UsuarioRepository,
    UsuarioReferenciaRepository,
    IncripcionRepository,
  ],
})
export class MySqlModule {}
