import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FseResponsavelPageRoutingModule } from './fse-responsavel-routing.module';

import { FseResponsavelPage } from './fse-responsavel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FseResponsavelPageRoutingModule
  ],
  declarations: [FseResponsavelPage]
})
export class FseResponsavelPageModule {}
