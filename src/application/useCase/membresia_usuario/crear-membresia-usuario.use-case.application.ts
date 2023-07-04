import { Observable, map, switchMap } from 'rxjs';
import { MembresiaUsuarioDomainEntity } from 'src/domain/entities/membresia-usuario.entity.domain';
import { MembresiaDomainEntity } from 'src/domain/entities/membresia.entity.domain';
import { IMembresiaUsuarioDomainService } from 'src/domain/services/membresia-usuario.service.domain';
import { IMembresiaDomainService } from 'src/domain/services/membresia.service.domain';
import { CrearMembresiaUsuarioDto } from 'src/infrastructure/dto/create/create-membresia-usuario.dto';
import { GetEmailUsuarioUseCase } from '../usuario/get-email-usuario.use-case.application copy';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { GetNombreMembresiaUseCase } from '../membresia/get-by-nombre-membresia.use-case.application';

export class CrearMembresiaUsuarioUseCase {
  constructor(
    private readonly membresiaUsuarioService: IMembresiaUsuarioDomainService<MembresiaUsuarioDomainEntity>,
    private readonly usuarioUsuarioService: IUsuarioDomainService<UsuarioDomainEntity>,
    private readonly membresiaService: IMembresiaDomainService<MembresiaDomainEntity>,
  ) 
  {}

  execute(data: CrearMembresiaUsuarioDto): Observable<MembresiaUsuarioDomainEntity> {
    const newMembresiaUsuario = new MembresiaUsuarioDomainEntity();
    const caseUsuario = new GetEmailUsuarioUseCase(this.usuarioUsuarioService);
    const caseMembresia = new GetNombreMembresiaUseCase(this.membresiaService);

    return caseUsuario.execute(data.email).pipe(
      map((value: UsuarioDomainEntity) => {
        if (value) {   
          return newMembresiaUsuario.usuario = value;
        } else {
          throw new Error('No se encontro la usuario para asignar a membresia Usuario');
        }
      }),
      switchMap(() => {
        return caseMembresia.execute(data.nombre).pipe(
          map((value: MembresiaDomainEntity) => {
            if (value) {
              newMembresiaUsuario.membresia = value;
              return newMembresiaUsuario;
            } else {
              throw new Error('No se encontro la membresia para asignar a membresia Usuario');
            }
          }),
          switchMap(( ) => {
            return this.membresiaUsuarioService.register(newMembresiaUsuario);
          }
          ),
        );
      
      }),
    );
  }
}
