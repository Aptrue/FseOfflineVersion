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
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
