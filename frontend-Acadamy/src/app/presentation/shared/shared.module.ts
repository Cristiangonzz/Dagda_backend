import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfrastructureModule } from 'src/app/infrastructure/infrastructure.module';
import { FormComponent } from './form/form.component';
import { MaterialModule } from './material/material.module';
import { CarritoComponent } from '../carrito/carrito/carrito.component';
import { CarritoModule } from '../carrito/carrito.module';


@NgModule({
  declarations: [
    FormComponent,
    //CarritoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfrastructureModule,
    MaterialModule,
   
  ],
  exports: [FormComponent],
})
export class SharedModule {}
