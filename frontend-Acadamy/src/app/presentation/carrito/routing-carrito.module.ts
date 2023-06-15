import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { SuccessComponent } from './pago-mercado-pago/success/success.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'canasta',
        component: CarritoComponent,
        //canActivate: [PermissionGuard, PermissionRolGuard],
      },
      {
        path: 'success',
        component: SuccessComponent,
        //canActivate: [PermissionGuard, PermissionRolGuard],
      },
      // {
      //   path: 'delete',
      //   component: DeleteCourseComponent,
      //   canActivate: [PermissionGuard, PermissionRolGuard],
      // },
      // {
      //   path: 'get/:titulo',
      //   component: GetCursoComponent,
      //   //canActivate: [PermissionGuard],
      // },
      // {
      //   path: 'get-all',
      //   component: GetAllCursoComponent,
      // },
       { path: `**`, redirectTo: 'canasta' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingCarritoModule {}
