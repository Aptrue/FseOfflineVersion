import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatFamilyPageRoutingModule } from './creat-family-routing.module';

import { CreatFamilyPage } from './creat-family.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatFamilyPageRoutingModule
  ],
  declarations: [CreatFamilyPage]
})
export class CreatFamilyPageModule {}
