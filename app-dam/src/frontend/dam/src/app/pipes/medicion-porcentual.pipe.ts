import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medicionPorcentual' // Convierte el valor de la medición a un valor porcetual. Considero el valor 60 como 100%. 
})
export class MedicionPorcentualPipe implements PipeTransform {

  valorMax: number = 60;
  porcentaje: number = 0;
  
  transform(value: string): number {
    this.porcentaje = Math.round ( parseInt(value) / this.valorMax * 100) 
    return this.porcentaje;
  }

}
