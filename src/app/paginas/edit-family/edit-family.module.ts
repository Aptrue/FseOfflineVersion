import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFamilyPageRoutingModule } from './edit-family-routing.module';

import { EditFamilyPage } from './edit-family.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFamilyPageRoutingModule
  ],
  declarations: [EditFamilyPage]
})
export class EditFamilyPageModule {}
