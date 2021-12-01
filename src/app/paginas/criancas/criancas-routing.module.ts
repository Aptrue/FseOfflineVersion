import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriancasPage } from './criancas.page';

const routes: Routes = [
  {
    path: '',
    component: CriancasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriancasPageRoutingModule {}
