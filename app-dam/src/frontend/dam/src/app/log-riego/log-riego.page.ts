import { Component, OnInit } from '@angular/core';
import { LogRiego } from '../interfaces/logRiego';
import { ActivatedRoute } from '@angular/router';
import { ObtenerLogRiegoService } from '../services/obtener-log-riego.service';
import { ObtenerIdElectrovalvulaService } from '../services/obtener-id-electrovalvula.service';
import { Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-log-riego',
  templateUrl: './log-riego.page.html',
  styleUrls: ['./log-riego.page.scss'],
})
export class LogRiegoPage implements OnInit {

  listadoLogRiego: LogRiego[] | undefined
  aux: String | undefined
  id: String = "0"
  evId: String | undefined

  constructor( 
    private _obtenerLogRiegoService: ObtenerLogRiegoService,
    private router: Router,
    private _obtenerIdElectrovalvulaService: ObtenerIdElectrovalvulaService 
  ) { 
    { 
      this.aux = router.url.split("/").pop()
      if (this.aux !== undefined) {
        this.id = this.aux;
    } else {
      this.id = "0" // Como aux puede ser udefined, pongo un manejador para este caso.
      console.log("Error: 'id' es undefined")
    }
      console.log(this.id)
    }
  }

  async ngOnInit () {
    await this.obtenerIdElectrovalvula(this.id)
    console.log('Traer log de riego de eletroválvula #'+this.evId)
    let aux: String
    if (this.evId !== undefined){
      aux = this.evId
      await this._obtenerLogRiegoService.getLogRiegos(this.evId)
       .then((logRiego) => {
       this.listadoLogRiego = logRiego
       console.log(logRiego)
       //return logRiego
       })
       .catch((error) => {
        console.log(error)
        })
      } else{
        console.log("Error: 'id' es undefined")
      }
  }

  async obtenerIdElectrovalvula(dispoId: String) {
    await this._obtenerIdElectrovalvulaService.getIdElectrovalvula (dispoId)
    .then((data) => {
      this.evId = data[0].electrovalvulaId
      console.log("ID electrovalvula: "+ this.evId)
    })
    .catch((error) => {
      console.log(error)
    })
  }



    

}
