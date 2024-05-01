import { Component, OnInit } from '@angular/core';
import { MedicionService } from '../services/medicion.service';
import { ElectrovalvulaService } from '../services/electrovalvula.service';
import { ObtenerIdElectrovalvulaService } from '../services/obtener-id-electrovalvula.service';
import { Medicion } from '../interfaces/medicion';
import { Router, UrlSegment } from '@angular/router';
import { PostmedicionService } from '../services/postmedicion.service';




@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})
export class MedicionesPage implements OnInit {

  listadoMediciones: Medicion[] | undefined
  aux: String | undefined
  id: String
  evId: String | undefined
  cambioVista: Boolean = false

  constructor(
    private _medicionService: MedicionService,
    private _postMedicionService: PostmedicionService, 
    private router: Router, 
    private _electrovalvulaService: ElectrovalvulaService,
    private _obtenerIdElectrovalvulaService: ObtenerIdElectrovalvulaService
  ) { 
    this.aux = router.url.split("/").pop()
    if (this.aux !== undefined) {
      this.id = this.aux;
  } else {
    this.id = "0" // Como aux puede ser udefined, pongo un manejador para este caso.
    console.log("Error: 'id' es undefined")
  }
    console.log(this.id)
  }
  
  number: string  = "45"

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

  async accionElectrovalvula(dispoId: String, abrir: String){
    await this.obtenerIdElectrovalvula(dispoId)
    console.log('Abrir/cerrar eletroválvula #'+this.evId)
    let aux: String
    if (this.evId !== undefined){
      aux = this.evId
      if (abrir=="2") {//"2" es para pedir que se cierre, entonces tiene que agregar una medición en la BD.
        await this._postMedicionService.postMedicion (dispoId, this.crearMedicion()) 
      }
      await this._electrovalvulaService.postElectrovalvula (aux, abrir)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
    } else{
      console.log("Error: 'id' es undefined")
    }
    return 
  }



  // async cerrarElectrovalvula(dispoId: String){
  //   console.log('Cerrar eletroválvula del dispotivo con ID:'+dispoId)
  //   await this._electrovalvulaService.postElectrovalvula (dispoId, false)
  //   .then((data) => {
  //     let evId = data[0].electrovalvulaId
  //     //console.log(data)
  //     console.log("La electrovalvula asociada tiene ID: "+evId)
  //     return evId
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

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

  buttonChange(): Boolean{
    return this.cambioVista = !this.cambioVista 
  }
  
  crearMedicion(): string { // Valor de medición generado en forma random entre 0 y 60. 
    let medicion = Math.round(Math.random()*60)
    console.log("medicion creada: " + medicion.toString())
    // let mensaje = { valor: medicion }
    // console.log("medicion creada JSON.stringify: "+JSON.stringify(mensaje))
    // return JSON.stringify(mensaje)
    return medicion.toString()
  } 

}
