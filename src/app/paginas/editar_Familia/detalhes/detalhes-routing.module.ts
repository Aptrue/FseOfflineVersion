import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesPage } from './detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesPage
  },
  {
    path: 'edit-moradia/:id',
    loadChildren: () => import('../edit-moradia/edit-moradia.module').then( m => m.EditMoradiaPageModule)
  },
  {
    path: 'fse-responsavel/:id',
    loadChildren: () => import('../fse-responsavel/fse-responsavel.module').then( m => m.FseResponsavelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesPageRoutingModule {}
