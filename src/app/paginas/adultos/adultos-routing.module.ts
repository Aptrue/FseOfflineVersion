import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultosPage } from './adultos.page';

const routes: Routes = [
  {
    path: '',
    component: AdultosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultosPageRoutingModule {}
