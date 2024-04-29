import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerIdElectrovalvulaService {

  constructor(private _http: HttpClient) { }

  getIdElectrovalvula (id:String): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/electrovalvula/'+id))
  }
}