/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'fse',
    loadChildren: () => import('./paginas/fse/fse.module').then( m => m.FsePageModule)
  },
  {
    path: 'moradia',
    loadChildren: () => import('./paginas/moradia/moradia.module').then( m => m.MoradiaPageModule)
  },
  {
    path: 'num-crianca-adulto',
    loadChildren: () => import('./paginas/num-crianca-adulto/num-crianca-adulto.module').then( m => m.NumCriancaAdultoPageModule)
  },
  {
    path: 'crianca/:id0/:id1',
    loadChildren: () => import('./paginas/crianca/crianca.module').then( m => m.CriancaPageModule)
  },
  {
    path:'adultos/:id',
    loadChildren: () => import('./paginas/adultos/adultos.module').then(m => m.AdultosPageModule)
  },
  {
    path: 'oque-deseja-editar/:id',
    loadChildren: () => import('./paginas/editar_familias/oque-deseja-editar/oque-deseja-editar.module').then( m => m.OqueDesejaEditarPageModule)
  },
  {
    path: 'fse-responsavel',
    loadChildren: () => import('./paginas/editar_familias/fse-responsavel/fse-responsavel.module').then( m => m.FseResponsavelPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
