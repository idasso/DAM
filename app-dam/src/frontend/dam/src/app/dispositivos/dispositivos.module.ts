import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DispositivosPageRoutingModule } from './dispositivos-routing.module';
import { DispositivosPage } from './dispositivos.page';
import { ColorearDirective } from '../directives/colorear.directive';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    IonicModule,
    DispositivosPageRoutingModule
  ],
  declarations: [DispositivosPage, ColorearDirective]
})
export class DispositivosPageModule {}
