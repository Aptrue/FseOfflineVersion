import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMoradiaPageRoutingModule } from './edit-moradia-routing.module';

import { EditMoradiaPage } from './edit-moradia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMoradiaPageRoutingModule
  ],
  declarations: [EditMoradiaPage]
})
export class EditMoradiaPageModule {}
