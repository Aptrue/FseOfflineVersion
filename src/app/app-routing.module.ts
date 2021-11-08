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
    path: 'creat-family',
    loadChildren: () => import('./paginas/creat-family/creat-family.module').then( m => m.CreatFamilyPageModule)
  },
  {
    path: 'edit-family',
    loadChildren: () => import('./paginas/edit-family/edit-family.module').then( m => m.EditFamilyPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
