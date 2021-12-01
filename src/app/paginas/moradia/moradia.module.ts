import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoradiaPageRoutingModule } from './moradia-routing.module';

import { MoradiaPage } from './moradia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoradiaPageRoutingModule
  ],
  declarations: [MoradiaPage]
})
export class MoradiaPageModule {}
