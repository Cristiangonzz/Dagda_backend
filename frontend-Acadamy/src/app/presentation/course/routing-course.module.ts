import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  GetAllCursoComponent } from './get-all-curso/get-all-curso.component';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { PermissionRolGuard } from '../shared/guards/permission-rol.guard';
import { CreateCursoComponent } from './create-curso/create-curso.component';
import { GetCursoComponent } from './get-curso/get-curso.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateCursoComponent,
        //canActivate: [PermissionGuard, PermissionRolGuard],
      },
      // {
      //   path: 'update',
      //   component: UpdateCourseComponent,
      //   canActivate: [PermissionGuard, PermissionRolGuard],
      // },
      // {
      //   path: 'delete',
      //   component: DeleteCourseComponent,
      //   canActivate: [PermissionGuard, PermissionRolGuard],
      // },
      {
        path: 'get/:titulo',
        component: GetCursoComponent,
        //canActivate: [PermissionGuard],
      },
      {
        path: 'get-all',
        component: GetAllCursoComponent,
      },
      { path: `**`, redirectTo: 'get-all' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingCourseModule {}
