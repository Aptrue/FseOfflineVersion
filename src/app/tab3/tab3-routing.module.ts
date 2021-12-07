import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'oque-deseja-editar/:id',
    loadChildren: () => import('../paginas/editar_familias/oque-deseja-editar/oque-deseja-editar.module')
    .then( m => m.OqueDesejaEditarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
