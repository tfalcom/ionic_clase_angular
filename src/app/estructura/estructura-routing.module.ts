import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraComponent } from './estructura.component';

const routes: Routes =
[
  { path: '', redirectTo: 'estructura', pathMatch: 'full'},
  // { path: 'estructura', component: EstructuraComponent}
  { path: 'estructura', component: EstructuraComponent,
    children: [
      {path: 'minicio', loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioModule)},
      {path: 'mregistro', loadChildren: () => import('../registro/registro.module').then( m => m.RegistroModule)}
    ]
  }
];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstructuraRoutingModule { }
