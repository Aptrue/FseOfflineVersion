import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatFamilyPage } from './creat-family.page';

const routes: Routes = [
  {
    path: '',
    component: CreatFamilyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatFamilyPageRoutingModule {}
