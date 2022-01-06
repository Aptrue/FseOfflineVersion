import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FseResponsavelPage } from './fse-responsavel.page';

const routes: Routes = [
  {
    path: '',
    component: FseResponsavelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FseResponsavelPageRoutingModule {}
