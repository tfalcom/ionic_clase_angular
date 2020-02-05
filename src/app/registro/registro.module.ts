import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroRoutingModule,
  ]
})
export class RegistroModule { }
