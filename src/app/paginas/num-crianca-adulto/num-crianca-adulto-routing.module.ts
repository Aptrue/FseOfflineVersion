import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumCriancaAdultoPage } from './num-crianca-adulto.page';

const routes: Routes = [
  {
    path: '',
    component: NumCriancaAdultoPage
  },
  {
    path: 'crianca/:id0/:id1',
    loadChildren: () => import('../crianca/crianca.module').then( m => m.CriancaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumCriancaAdultoPageRoutingModule {}
