import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriancaPageRoutingModule } from './crianca-routing.module';

import { CriancaPage } from './crianca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriancaPageRoutingModule
  ],
  declarations: [CriancaPage]
})
export class CriancaPageModule {}
