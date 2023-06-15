import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { PermissionRolGuard } from '../shared/guards/permission-rol.guard';
import { CreateMembresiaUsuarioComponent } from './crear-membresia-usuario/create-membresia-usuario.component';
import { GetMembresiaUsuarioComponent } from './get-membresia-usuario/get-membresia-usuario.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: `create/:nombreMembresia/:posicionMembresia/:usuarioActual`,
        component: CreateMembresiaUsuarioComponent,
        // canActivate: [PermissionGuard,PermissionRolGuard],
      },
     
      {
        path: `get/:id`,
        component: GetMembresiaUsuarioComponent,
        // canActivate: [PermissionGuard],
      },
     
      { path: `**`, redirectTo: 'get-all' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingMembresiaUsuarioModule {}
