import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FsePageRoutingModule } from './fse-routing.module';

import { FsePage } from './fse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FsePageRoutingModule
  ],
  declarations: [FsePage]
})
export class FsePageModule {}
