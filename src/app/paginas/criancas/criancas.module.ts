import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriancasPageRoutingModule } from './criancas-routing.module';

import { CriancasPage } from './criancas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriancasPageRoutingModule
  ],
  declarations: [CriancasPage]
})
export class CriancasPageModule {}
