import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OqueDesejaEditarPageRoutingModule } from './oque-deseja-editar-routing.module';

import { OqueDesejaEditarPage } from './oque-deseja-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OqueDesejaEditarPageRoutingModule
  ],
  declarations: [OqueDesejaEditarPage]
})
export class OqueDesejaEditarPageModule {}
