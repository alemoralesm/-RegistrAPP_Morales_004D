import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrodocentePageRoutingModule } from './registrodocente-routing.module';

import { RegistrodocentePage } from './registrodocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrodocentePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RegistrodocentePage]
})
export class RegistrodocentePageModule {}
