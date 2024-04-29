import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectrovalvulaService {

  constructor(private _http: HttpClient) { }

  postElectrovalvula (id:String, abrir: String): Promise<any> {
    return firstValueFrom(this._http.post('http://localhost:8000/electrovalvula/'+id+'/'+abrir, "body de prueba"))
  }
}