import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { UsuarioService } from 'src/app/domain/services/usuario.service.domain';
import { usuarioUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-usuario/delegate-usuario.infrastructure';
import { cursoUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-curso/delegate-course.infrastructure';
import { CursoDomainEntity } from 'src/app/domain/entities/curso.entity.domain';
import { CursoService } from 'src/app/domain/services/curso.service.domain';
import { CrearCursoDto } from 'src/app/infrastructure/dto/create/create-curso.dto';
import { CategoriaService } from 'src/app/domain/services/categoria.service.domain';
import { categoriaUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-categoria/delegate-categoria.infrastructure';
import { CategoriaDomainEntity } from 'src/app/domain/entities/categoria.entity.domain';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css'],
})
export class CreateCursoComponent implements OnInit{
  delegateCurso = cursoUseCaseProviders;
  delegateCategoria = categoriaUseCaseProviders;
  delegateUsuario = usuarioUseCaseProviders;
  categorias !: string[];

  sweet = new SweetAlert();

  FormRegister = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    descripcion: new FormControl('', [
    ]),
    imagen: new FormControl('', [
      Validators.minLength(5),
    ]),
    categoria: new FormControl('', [
      Validators.required,
    ]),
    detalle: new FormControl(''),
    precio: new FormControl<number>(0, [Validators.required]),
  });



  curso: CrearCursoDto = {} as CrearCursoDto;

  constructor(
    private cursoService: CursoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private readonly usuarioService: UsuarioService
  ) {}


  ngOnInit(): void {
    this.delegateCategoria.getAllCategoriaUseCaseProvider.useFactory(this.categoriaService)
   .execute();
   this.delegateCategoria.getAllCategoriaUseCaseProvider.useFactory(this.categoriaService)
   .statusEmmit.subscribe({
      next: (value: CategoriaDomainEntity[]) => {

        this.categorias = value.map((x) => x.nombre);      }
    })
   
    


  }
  send() {
    this.curso.descripcion = this.FormRegister.get('descripcion')?.value as string;
    this.curso.precio = this.FormRegister.get('precio')?.value as number;
    this.curso.detalle = this.FormRegister.get('detalle')?.value as string;
    this.curso.imagen = this.FormRegister.get('imagen')?.value as string;
    this.curso.categoria = this.FormRegister.get('categoria')?.value as string;
    this.curso.titulo = this.FormRegister.get('titulo')?.value as string;

    
          this.delegateCurso.CreateCursoUseCaseProvider
            .useFactory(this.cursoService)
            .execute(this.curso)
            .subscribe({
              next: () => {
                this.sweet.toFire('Completo', 'Curso Creado', 'success');
                this.router.navigate(['/curso/get-all']);
              },
              error: (err) => {
                this.sweet.toFire('Error', 'Error al Crear Curso', 'error');
                console.log(err);
              },
            });
       
  }
  cancelar() {
    this.router.navigate(['/curso/get-all']);
  }
}
