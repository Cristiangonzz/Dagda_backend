import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { InscribirUsuarioCursoComponent } from './inscribir-usuario-curso/inscribir-usuario-curso.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: `registrar`,
        component: CreateUserComponent,
       // canActivate: [PermissionGuard, PermissionRolGuard],
      },
      {
        path: `inscribir/:tituloCurso`,
        component: InscribirUsuarioCursoComponent,
       // canActivate: [PermissionGuard, PermissionRolGuard],
      },

      { path: `**`, redirectTo: 'create' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingUsuarioModule {}
