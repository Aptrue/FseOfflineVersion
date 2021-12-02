import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultosPageRoutingModule } from './adultos-routing.module';

import { AdultosPage } from './adultos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultosPageRoutingModule
  ],
  declarations: [AdultosPage]
})
export class AdultosPageModule {}
