import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoradiaPage } from './moradia.page';

const routes: Routes = [
  {
    path: '',
    component: MoradiaPage
  },
  {
    path: 'num-crianca-adulto',
    loadChildren: () => import('../num-crianca-adulto/num-crianca-adulto.module').then( m => m.NumCriancaAdultoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoradiaPageRoutingModule {}
