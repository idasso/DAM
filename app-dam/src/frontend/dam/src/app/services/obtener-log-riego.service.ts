import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerLogRiegoService {

  constructor(private _http: HttpClient) { }

  getLogRiegos (id: String): Promise<any> {
    return firstValueFrom(this._http.get('http://localhost:8000/logRiego/'+id))
  }
}
