import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  CursoService } from 'src/app/domain/services/curso.service.domain';
import { SweetAlert } from '../../shared/sweetAlert/sweet-alert.presentation';
import { cursoUseCaseProviders } from 'src/app/infrastructure/delegate/delegate-curso/delegate-course.infrastructure';
import { CursoDomainEntity } from 'src/app/domain/entities/curso.entity.domain';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
 export class UpdateCourseComponent {} //implements OnChanges {
//   delegateCurso = cursoUseCaseProviders;
//   sweet = new SweetAlert();

//   @Input() courseInput!: CursoDomainEntity;

//   FormRegister = new FormGroup({
//     title: new FormControl('', [Validators.required, Validators.minLength(5)]),
//     description: new FormControl('', [
//       Validators.required,
//       Validators.minLength(5),
//     ]),
//     duration: new FormControl('', [
//       Validators.required,
//       Validators.minLength(5),
//     ]),
//     requirements: new FormControl('', [
//       Validators.required,
//       Validators.minLength(5),
//     ]),
//     content: new FormArray([], [Validators.required]),
//   });

//   ngOnChanges(): void {
//     if (this.courseInput !== undefined) {
//       this.FormRegister.get('title')?.setValue(this.courseInput.title);
//       this.FormRegister.get('description')?.setValue(
//         this.courseInput.description
//       );
//       this.FormRegister.get('duration')?.setValue(this.courseInput.duration);
//       this.FormRegister.get('requirements')?.setValue(
//         this.courseInput.requirements
//       );
//       this.contentForms.clear();
//       this.courseInput.content.forEach((element) => {
//         const content = new FormControl('', [
//           Validators.required,
//           Validators.minLength(5),
//         ]);
//         content.setValue(element);
//         this.contentForms.push(content);
//       });
//     }
//   }

//   addContent() {
//     const content = new FormControl('', [
//       Validators.required,
//       Validators.minLength(5),
//     ]);
//     this.contentForms.push(content);
//   }

//   removeContent(i: number) {
//     this.contentForms.removeAt(i);
//   }

//   get contentForms() {
//     return this.FormRegister.get('content') as FormArray;
//   }

//   course: CursoDomainEntity = {} as CursoDomainEntity;

//   constructor(private cursoService: CursoService, private router: Router) {}

//   send() {
//     this.course.content = this.FormRegister.get('content')?.value as never[];
//     this.course.description = this.FormRegister.get('description')
//       ?.value as string;
//     this.course.duration = this.FormRegister.get('duration')?.value as string;
//     this.course.requirements = this.FormRegister.get('requirements')
//       ?.value as string;
//     this.course.title = this.FormRegister.get('title')?.value as string;
//     this.course.adminId = this.courseInput.adminId;
//     this.course.id = this.courseInput.id;

//     this.delegateCurso.UpdateCursoUseCaseProvider
//       .useFactory(this.cursoService)
//       .execute(this.course.id, this.course)
//       .subscribe({
//         next: () => {
//           this.sweet.toFire('Completo', 'Curso Actualizado', 'success');
//           this.delegateCurso.GetAllCursoUseCaseProvider
//             .useFactory(this.cursoService)
//             .execute();
//           this.router.navigate(['/course/get-all']);
//         },
//         error: (err) => {
//           if (err.error.message === 'no elements in sequence') {
//             this.sweet.toFire('Completo', 'Curso Actualizado', 'success');
//             this.delegateCurso.GetAllCursoUseCaseProvider
//               .useFactory(this.cursoService)
//               .execute();
//             this.router.navigate(['/course/get-all']);
//           } else {
//             this.sweet.toFire('Error', 'Error al Actualizar Curso', 'error');
//           }
//         },
//       });
//   }

//   cancelar() {
//     this.router.navigate(['/course/get-all']);
//   }
// }
