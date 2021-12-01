import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumCriancaAdultoPage } from './num-crianca-adulto.page';

const routes: Routes = [
  {
    path: '',
    component: NumCriancaAdultoPage
  },
  {
    path:'criancas',
    loadChildren: () => import ('../criancas/criancas.module').then(m => m.CriancasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumCriancaAdultoPageRoutingModule {}
