import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { InscribirUsuarioCursoComponent } from './inscribir-usuario-curso/inscribir-usuario-curso.component';
import { AdminCursoComponent } from './admin-cursos/admin-curso.component';
import { AdminUsuarioComponent } from './admin-usuarios/admin-usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: `registrar`,
        component: CreateUserComponent,
       // canActivate: [PermissionLogeadoGuard, PermissionRolGuard],
      },
      {
        path: `inscribir/:tituloCurso`,
        component: InscribirUsuarioCursoComponent,
       // canActivate: [PermissionLogeadoGuard, PermissionRolGuard],
      },
      {
        path: `adminCurso`,
        component: AdminCursoComponent,
       // canActivate: [PermissionLogeadoGuard, PermissionRolGuard],
      },
      {
        path: `adminUsuario`,
        component: AdminUsuarioComponent,
       // canActivate: [PermissionLogeadoGuard, PermissionRolGuard],
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
