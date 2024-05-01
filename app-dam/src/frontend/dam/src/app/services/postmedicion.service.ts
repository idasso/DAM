import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostmedicionService {

  constructor(private _http: HttpClient) { }

  postMedicion (id:String, medicion: String): Promise<any> {
    return firstValueFrom(this._http.post('http://localhost:8000/mediciones/'+id+'/'+medicion,""))
  }
}
