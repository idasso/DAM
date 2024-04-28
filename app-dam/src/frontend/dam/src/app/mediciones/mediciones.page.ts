import { Component, OnInit } from '@angular/core';
import { MedicionService } from '../services/medicion.service';
import { Medicion } from '../interfaces/medicion';
import { Router, UrlSegment } from '@angular/router';




@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  listadoMediciones: Medicion[] | undefined
  aux: String | undefined
  id: String

  constructor(private _medicionService: MedicionService, private router: Router) { 
    this.aux = router.url.split("/").pop()
    if (this.aux !== undefined) {
      this.id = this.aux;
  } else {
    this.id = "0" // Como aux puede ser udefined, pongo un manejador para este caso.
    console.log("Error: 'id' es undefined")
  }
    console.log(this.id)
  }
  

  async ngOnInit() {
    await this._medicionService.getMediciones(this.id)
      .then((mediciones) => {
        this.listadoMediciones = mediciones
        console.log(mediciones)
      })
      .catch((error) => {
        console.log(error)
      })

    console.log('Me ejecuto primero (mediciones)')
    
    

  }

}
