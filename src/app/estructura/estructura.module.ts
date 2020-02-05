import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EstructuraRoutingModule } from './estructura-routing.module';
import { FormsModule } from '@angular/forms';
import { EstructuraComponent } from './estructura.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [EstructuraComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    EstructuraRoutingModule,
  ]
})
export class EstructuraModule { }
