import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FsePage } from './fse.page';

const routes: Routes = [
  {
    path: '',
    component: FsePage
  },
  {
    path: 'moradia',
    loadChildren: () => import('../moradia/moradia.module').then(m =>m.MoradiaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FsePageRoutingModule {}
