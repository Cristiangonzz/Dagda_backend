import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import Swal from 'sweetalert2';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { loginUseCaseProviders } from 'src/app/infrastructure/delegate/delegete-login/delegate-login.infrastructure';
import { CursoDomainEntity } from 'src/app/domain/entities/curso.entity.domain';
import { cursoUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-curso/delegate-course.infrastructure';
import { CursoService } from 'src/app/domain/services/curso.service.domain';
import { UsuarioService } from 'src/app/domain/services/usuario.service.domain';

@Component({
  selector: 'app-get-all-curso',
  templateUrl: './get-all-curso.component.html',
  styleUrls: ['./get-all-curso.component.css'],
})
export class GetAllCursoComponent implements OnInit, OnDestroy {
  courses!: CursoDomainEntity[];
  delegateCurso = cursoUseCaseProviders;
  delegateLogin = loginUseCaseProviders;
  sweet = new SweetAlert();
  private onDestroy$: Subject<void> = new Subject<void>();
  rol!: number;
  usuarioLogeado: boolean = false;

  selected!: CursoDomainEntity;

  showModal = false;
  suscription!: Subscription;

  openModal(i: number) {
    this.selected = this.courses[i];
    console.log(this.selected);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  constructor(
    private cursoService: CursoService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCourseAdmin();
    this.delegateLogin.hasRolUseCaseProvider
      .useFactory(this.usuarioService)
      .execute();
    this.delegateLogin.hasRolUseCaseProvider
      .useFactory(this.usuarioService)
      .statusRolEmmit.subscribe({
        next: (value: number) => {
          this.rol = value;
          if (value == -1) {
            this.usuarioLogeado = false;
          } else {
            this.usuarioLogeado = false;
          }
        },
      });
  }

  curso(titulo: string) {
    this.router.navigate([`/curso/get/${titulo}`]);
  }

  getAllCourseAdmin() {
    this.delegateCurso.GetAllCursoUseCaseProvider.useFactory(
      this.cursoService
    ).execute();

    this.delegateCurso.GetAllCursoUseCaseProvider.useFactory(this.cursoService)
      .statusEmmit.pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (value: CursoDomainEntity[]) => {
          this.courses = value;
        },
        error: () => {
          this.sweet.toFire('Curso', 'Error al Obtener Curso', 'error');
        },
      });
  }
  deleteCourse(_id: string) {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podras revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#e64141',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delegateCurso.deleteCursoUseCaseProvider
          .useFactory(this.cursoService)
          .execute(_id)
          .subscribe({
            next: () => {
              this.sweet.toFire(
                'Curso',
                'Curso Eliminado Correctamente',
                'success'
              );
              this.refresh();
              this.router.navigate(['/curso/get-all']);
            },
            error: (error) => {
              this.sweet.toFire('Curso', error.message, 'error');
            },
            complete: () => {
              this.sweet.toFire(
                'Curso',
                'Curso Eliminado Correctamente',
                'success'
              );
              this.refresh();
              this.router.navigate(['/curso/get-all']);
            },
          });
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  crearCurso() {
    this.router.navigate(['curso/create']);
  }
  refresh() {
    this.delegateCurso.GetAllCursoUseCaseProvider.useFactory(
      this.cursoService
    ).execute();
  }
}
