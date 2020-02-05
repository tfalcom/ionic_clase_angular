import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    IonicModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
