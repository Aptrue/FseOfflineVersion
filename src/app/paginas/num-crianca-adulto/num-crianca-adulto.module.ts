import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumCriancaAdultoPageRoutingModule } from './num-crianca-adulto-routing.module';

import { NumCriancaAdultoPage } from './num-crianca-adulto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumCriancaAdultoPageRoutingModule
  ],
  declarations: [NumCriancaAdultoPage]
})
export class NumCriancaAdultoPageModule {}
