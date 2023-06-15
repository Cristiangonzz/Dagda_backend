import { Observable, from, map, switchMap } from 'rxjs';
import { IncripcionDomainEntity } from 'src/domain/entities/incripcion.entity.domain';
import { IIncripcionDomainService } from 'src/domain/services/incripcion.service.domain';
import { CrearIncripcionDto } from 'src/infrastructure/dto/create/create-incripcion.dto';
import { GetEmailUsuarioUseCase } from '../usuario/get-email-usuario.use-case.application copy';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { ICursoDomainService } from 'src/domain/services/curso.service.domain';
import { CursoDomainEntity } from 'src/domain/entities/curso.entity.domain';
import { GetTituloCursoUseCase } from '../curso/get-by-titulo-curso.use-case.application';
import { GetUsuarioCursoIncripcionUseCase } from './get-usuario-curso-incripcion.use-case.application';
import { NotFoundException } from '@nestjs/common';

export class CrearIncripcionUseCase {
  constructor(
    private readonly incripcionService: IIncripcionDomainService<IncripcionDomainEntity>,
    private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
    private readonly cursoService: ICursoDomainService<CursoDomainEntity>,
  ) {}

  execute(data: CrearIncripcionDto): Observable<IncripcionDomainEntity> {
      const newIncripcion = new IncripcionDomainEntity();
      const caseUsuario = new GetEmailUsuarioUseCase(this.usuarioService);
      const caseCurso = new GetTituloCursoUseCase(this.cursoService);

      return caseUsuario.execute(data.usuario).pipe(
        map((value: UsuarioDomainEntity) => {
          if (value) {
            newIncripcion.usuario = value;
          } else {
            throw new Error(
              'No se encontro el usuario para asignar a la <<Incripcion>>',
            );
          }
        }),
        switchMap(() => {
          return caseCurso.execute(data.curso).pipe(
            map((value: CursoDomainEntity) => {
              if (value) {
                newIncripcion.curso = value;
                return newIncripcion;
              } else {
                throw new Error(
                  'No se encontro el curso para asignar a la <<Incripcion>>',
                );
              }
            }),
            switchMap(() => {
              return this.incripcionService.register(newIncripcion);
            }),
          );
        }),
      );
    
  }
}
