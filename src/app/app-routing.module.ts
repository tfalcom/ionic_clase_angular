import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mlogin', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'mlogin', loadChildren: () => import('./login/login.module').then( m => m.LoginModule)},
  { path: 'mestructura', loadChildren: () => import('./estructura/estructura.module').then(m => m.EstructuraModule) },
  // { path: 'mlogin', loadChildren: './login/login.module#LoginModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
