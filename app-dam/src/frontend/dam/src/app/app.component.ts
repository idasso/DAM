import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', // Indicación acerca de dónde adquire la vista el compoenente
  styleUrls: ['app.component.scss'], // Indicación acerca de dónde adquire la hoja de estilos para el compoenente. Puede ser más de una.
})
export class AppComponent {
  constructor() {}
}
