import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriancaPage } from './crianca.page';

const routes: Routes = [
  {
    path: '',
    component: CriancaPage
  },
  {
    path:'adultos/:id',
    loadChildren: () => import('../adultos/adultos.module').then(m => m.AdultosPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriancaPageRoutingModule {}
