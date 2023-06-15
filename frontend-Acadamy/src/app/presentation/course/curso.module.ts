import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { SharedModule } from '../shared/shared.module';
import {  CreateCursoComponent } from './create-curso/create-curso.component';
import { SafePipe } from './pipe/safe.pipe';
import { TitlePipe } from './pipe/title.pipe';
import { RoutingCourseModule } from './routing-course.module';
import { GetAllCursoComponent } from './get-all-curso/get-all-curso.component';
import { GetCursoComponent } from './get-curso/get-curso.component';

@NgModule({
  declarations: [
    CreateCursoComponent,
    // DeleteCursoComponent,
    // UpdateCursoComponent,
    // GetCursoComponent,
    GetCursoComponent,
    GetAllCursoComponent,
    SafePipe,
    TitlePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    RoutingCourseModule,

    InfrastructureModule,
    SharedModule,
  ],
  exports: [],
})
export class CursoModule {}
