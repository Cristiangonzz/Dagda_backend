import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from '../shared/guards/permission.guard';
import { PermissionRolGuard } from '../shared/guards/permission-rol.guard';
import { CreateMembresiaComponent } from './crear-membresia/create-membresia.component';
import { GetAllMembresiaComponent } from './get-all-membresia/get-all-membresia.component';
import { UpdateMembresiaComponent } from './update-membresia/update-membresia.component';
import { GetMembresiaComponent } from './get-membresia/get-membresia.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: `create`,
        component: CreateMembresiaComponent,
       // canActivate: [PermissionGuard,PermissionRolGuard],
      },
      {
        path: `get-all`,
        component: GetAllMembresiaComponent,
       // canActivate: [PermissionGuard],
      },
      {
        path: `get/:nombre`,
        component: GetMembresiaComponent,
       // canActivate: [PermissionGuard],
      },
      {
        path: `update`,
        component: UpdateMembresiaComponent,
       // canActivate: [PermissionGuard,PermissionRolGuard],
      },
      { path: `**`, redirectTo: 'get-all' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingMembresiaModule {}
