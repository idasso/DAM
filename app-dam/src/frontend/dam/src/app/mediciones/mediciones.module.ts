import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicionesPageRoutingModule } from './mediciones-routing.module';
import { MedicionesPage } from './mediciones.page';
import { MedicionPorcentualPipe } from '../pipes/medicion-porcentual.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicionesPageRoutingModule
  ],
  declarations: [MedicionesPage, MedicionPorcentualPipe]
})
export class MedicionesPageModule {}
