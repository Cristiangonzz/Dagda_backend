import { Observable, from, of, switchMap } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { IUsuarioDomainService } from 'src/domain/services/usuario.service.domain';
import { UsuarioDomainEntity } from 'src/domain/entities/usuario.entity.domain';
import { SignInDto } from 'src/infrastructure/dto/create/sign-in.dto';


export class SignInUsuarioUseCase {  
  
    constructor(private readonly usuarioService: IUsuarioDomainService<UsuarioDomainEntity>) { }

        execute(dato: SignInDto): Observable<string> {
            return from(this.usuarioService.findOneEmail(dato.email)).pipe(
                switchMap((usuario) => {
                   if(usuario.clave !== dato.clave) throw new Error("Credenciales incorrectas usuario o clave");
                   return of(jwt.sign({usuario},`tokenEntrada`));
                  })
                );
        }
}
