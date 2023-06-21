import { Module } from '@nestjs/common';
import { MySqlModule } from './dataBase/mysql/mysql.module';
import { SubCategoriaService } from './services/sub-categoria.service';
import { MembresiaService } from './services/membresia.service';
import { CategoriaService } from './services/categoria.service';
import { CursoService } from './services/curso.service';
import { UsuarioService } from './services/usuario.service';
import { CursoController } from './controllers/curso.controller';
import { CategoriaController } from './controllers/categoria.controller';
import { MembresiaController } from './controllers/membresia.controller';
import { UsuarioController } from './controllers/usuario.controller';
import { IncripcionService } from './services/incripcion.service';
import { MembresiaUsuarioController } from './controllers/membresia-usuario.controller';
import { IncripcionController } from './controllers/incripcion.controller';
import { MembresiaUsuarioService } from './services/membresia-usuario.service';
import { NodeMailerController } from './controllers/nodemailer.controller';
import { NodeMailerService } from './services/nodemailer.service';
import { UsuarioReferenciaService } from './services/usuario-referencia.service';
import { UsuarioReferenciaController } from './controllers/usuario-referencia.controller';

@Module({
  imports: [MySqlModule],
  controllers: [
    CursoController,
    CategoriaController,
    MembresiaController,
    UsuarioController,
    MembresiaUsuarioController,
    IncripcionController,
    NodeMailerController,
    UsuarioReferenciaController,
  ],
  providers: [
    NodeMailerService,
    CategoriaService,
    CursoService,
    SubCategoriaService,
    MembresiaService,
    MembresiaUsuarioService,
    UsuarioService,
    IncripcionService,
    UsuarioReferenciaService,
    
      
],
  exports: [
    NodeMailerService,
    CategoriaService,
    CursoService,
    SubCategoriaService,
    MembresiaService,
    MembresiaUsuarioService,
    UsuarioService,
    IncripcionService,
    UsuarioReferenciaService,

  ],
})
export class PersistenceModule {}
