import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDomainEntity } from 'src/app/domain/entities/usuario.entity.domain';
import { UsuarioService } from 'src/app/domain/services/usuario.service.domain';
import { UpdateUsuarioDto } from 'src/app/infrastructure/dto/create/update-usuario.dto';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';
import { usuarioUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-usuario/delegate-usuario.infrastructure';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  delegateLogin = loginUseCaseProviders;
  delegateUsuario = usuarioUseCaseProviders;

  formCrear = new FormGroup({
    
    primer_nombre: new FormControl<string>('', [Validators.required,Validators.minLength(3),]),
    primer_apellido: new FormControl<string>('', [Validators.required,Validators.minLength(3),]),
    telefono: new FormControl<string>('', [Validators.required,Validators.minLength(8)]),
    usuario: new FormControl<string>('', [Validators.required,Validators.minLength(2),]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    clave: new FormControl<string>('', [Validators.required,Validators.minLength(5),]),
  });

  sweet = new SweetAlert();
  user: UsuarioDomainEntity = {} as UsuarioDomainEntity;
  updateUser: UpdateUsuarioDto = {} as UpdateUsuarioDto; //para actualizar usuario (foto)

  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly router: Router
  ) {}

  signUp() {
    this.user = this.formCrear.getRawValue() as UsuarioDomainEntity;

    this.delegateUsuario.createUsuarioUseCaseProvider
      .useFactory(this.usuarioService)
      .execute(this.user)
      .subscribe({
        next: (response: UsuarioDomainEntity) => {
          this.sweet.toFire(`${response.usuario}`, 'Cuenta Creada', 'success');
          this.router.navigate([`login`]);
        },
        error: (err: Error) => {
          this.sweet.toFire(
            'Vuelva a intentarlo',
            'Se produjo un error',
            'error'
          );
        },
      });
  }
}
