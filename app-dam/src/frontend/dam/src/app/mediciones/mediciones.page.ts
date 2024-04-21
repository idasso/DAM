import { Component, OnInit } from '@angular/core';
import { MedicionService } from '../services/medicion.service';



@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  constructor(private _medicionService: MedicionService) { }

  async ngOnInit() {
    await this._medicionService.getMediciones()
      .then((mediciones) => {
        console.log(mediciones)
      })
      .catch((error) => {
        console.log(error)
      })

    console.log('Me ejecuto primero (mediciones)')
    
    

  }

}
